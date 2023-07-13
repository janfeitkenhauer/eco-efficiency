"use client";

import InputField from "./InputField";

const Advanced = ({ environmentalImpacts, lastValidAmount }) => {
    const products = [...Array(lastValidAmount)].map((_, index) => {
        const environmentalImpactEntries = Object.entries(environmentalImpacts).map(([key, value]) => ({
            label: key,
            unit: value,
        }));

        const economicValue = { label: "Economic Value", unit: "EUR" };

        return {
            id: index,
            environmentalImpacts: environmentalImpactEntries,
            economicValue,
        };
    });

    return (
        <div className="mt-5">
            <h1>Coming soon..</h1>
            {/* {products.map((product) => (
                <div key={product.id} className="mt-5 glassmorphism">
                    <p>Product Group {product.id + 1}</p>
                    <div>
                        <p>Environmental Impacts</p>
                        {product.environmentalImpacts.map((impact, index) => (
                            <InputField
                                key={index}
                                label={impact.label}
                                unit={impact.unit} />
                        ))}
                    </div>
                    <div>
                        <p>Economic Value</p>
                        <InputField
                            label={product.economicValue.label}
                            unit={product.economicValue.unit} />
                    </div>
                </div>
            ))} */}
        </div>
    );
};

export default Advanced