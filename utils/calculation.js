// EF2.0 weight distribution as defined by the European Commission, including ATR with 0 weight as default
const impactWeights = {
    "Global Warming Potential": 21.06,
    "Acidification": 6.2,
    "Freshwater Ecotoxicity": 1.92,
    "Freshwater Eutrophication": 2.8,
    "Marine Eutrophication": 2.96,
    "Terrestrial Eutrophication": 3.71,
    "Carcinogenic Effects": 2.13,
    "Non-carcinogenic Effects": 1.84,
    "Ionising Radiation": 5.01,
    "Ozone Depletion Potential": 6.31,
    "Photochemical Ozone Formation": 4.78,
    "Respiratory Effects": 3.71,
    "Water Use": 8.51,
    "Energy Carriers": 8.32,
    "Land Use": 7.94,
    "Minerals and Metals": 7.55,
    "Average Temperature Response": 0,
}

// Universal weights for ATR in Advanced and Individual and for EI/EV
const decimalWeights = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// Normalization function
function normalization(productData) {
    const rowSize = productData.length; // M alternatives
    const columnSize = productData[0].data.length; // N attributes

    const normalizedData = productData.map(({ product, data }) => ({
        product,
        data: [...data]
    }));

    const squaredSum = new Array(columnSize).fill(0);

    // Calculate squared sum for each attribute
    for (let i = 0; i < rowSize; i++) {
        for (let j = 0; j < columnSize; j++) {
            squaredSum[j] += productData[i].data[j] ** 2;
        }
    }

    // Normalize each value
    for (let i = 0; i < rowSize; i++) {
        for (let j = 0; j < columnSize; j++) {
            if (productData[i].data[j] === 0) {
                continue;
            } else {
                normalizedData[i].data[j] =
                    productData[i].data[j] / Math.sqrt(squaredSum[j]);
            }
        }
    }

    return normalizedData;
}

// Function to calculate eco-efficiency
function eeCalculation(normalizedData, decimalWeights) {
    const rowSize = normalizedData.length; // M alternatives
    const columnSize = normalizedData[0].data.length; // N attributes
    const numWeights = decimalWeights.length;

    const eeValues = [];

    // Calculate eco-efficiency for each alternative
    for (let i = 0; i < rowSize; i++) {
        const productEE = {
            product: normalizedData[i].product,
            data: [],
        };

        const ei = normalizedData[i].data[0]; // Environmental Impact (EI) value
        const ev = normalizedData[i].data[1]; // Economic Value (EV) value

        for (let w = 0; w < numWeights; w++) {
            const weightEi = decimalWeights[w] / 100; // Weight for Environmental Impact
            const weightEv = (100 - decimalWeights[w]) / 100; // Weight for Economic Value

            // Calculate eco-efficiency value and multiply by 100
            const eeValue = (weightEi * ei + weightEv * ev) * 100;

            productEE.data.push(eeValue);
        }

        eeValues.push(productEE);
    }

    return eeValues;
}

// Function to perform calculations based on input data
const performCalculations = (inputData) => {
    // Calculate the reciprocal of the economic value
    const checkedData = inputData.map(({ product, data }) => ({
        product,
        data: data.map((value) => (value === "" ? 0 : parseFloat(value))),
    }));

    const reciprocalData = checkedData.map(({ product, data }) => {
        const reciprocalEi = data[0] !== 0 ? 1 / data[0] : 100;
        const reciprocalEv = data[1] !== 0 ? 1 / data[1] : 100;

        return {
            product,
            data: [reciprocalEi, reciprocalEv],
        };
    });
    // Normalize the productData
    const normalizedDecision = normalization(reciprocalData);
    const eeValues = eeCalculation(normalizedDecision, decimalWeights)

    return eeValues;
};

export { performCalculations };