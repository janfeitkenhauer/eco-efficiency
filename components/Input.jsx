"use client";
import React, { useEffect } from "react";

import Basic from "./Basic";
import Advanced from "./Advanced";
import Individual from "./Individual";

const environmentalImpacts = {
    "Global Warming Potential": "kg CO2 eq.",
    "Acidification": "kg mol H+ eq.",
    "Freshwater Ecotoxicity": "CTUe",
    "Freshwater Eutrophication": "kg P eq.",
    "Marine Eutrophication": "kg N eq.",
    "Terrestrial Eutrophication": "mol N eq.",
    "Carcinogenic Effects": "CTUh",
    "Non-carcinogenic Effects": "CTUh",
    "Ionising Radiation": "kBq U-235 eq.",
    "Ozone Depletion Potential": "kg CFC-11 eq.",
    "Photochemical Ozone Formation": "kg NMVOC eq.",
    "Respiratory Effects": "deisease incidences",
    "Water Use": "m³ world eq. deprived",
    "Energy Carriers": "MJ",
    "Land Use": "pt.",
    "Minerals and Metals": "kg Sb eq.",
    "Average Temperature Response": "ΔT",
}

const economicValues = {
    "Price": "EUR",
}

const Input = ({ selectedSetting, lastValidAmount, setInputData, validInput }) => {
    // Merge EI and EV into one data array to simplify the props
    const combinedData = [
        {
            category: "Environmental Impacts",
            data: Object.entries(environmentalImpacts).map(([label, unit]) => ({
                label,
                unit,
            })),
        },
        {
            category: "Economic Values",
            data: Object.entries(economicValues).map(([label, unit]) => ({
                label,
                unit,
            })),
        },
    ];

    // Update inputData based on user input
    const handleInputChange = (objectIndex, dataIndex, label, value, unit) => {
        setInputData((prevData) => {
            const updatedData = [...prevData];
            // Check, if productObject exists at index, otherwise create new product
            const productObject = updatedData[objectIndex] || { product: `Product ${objectIndex + 1}`, data: [] };
            productObject.data[dataIndex] = value; // Original data: { label, value, unit }
            updatedData[objectIndex] = productObject;
            return updatedData;
        })
    }

    const handleNameChange = (objectIndex, name) => {
        setInputData((prevData) => {
            const updatedData = [...prevData];
            // Check, if productObject exists at index, otherwise create new product
            const productObject = { ...updatedData[objectIndex] }
            productObject.product = name;
            updatedData[objectIndex] = productObject;
            return updatedData;
        })
    }

    // Adjust inputData array, if lastValidAmount changes
    useEffect(() => {
        setInputData((prevData) => {
            const updatedData = [...prevData];
            const currentLength = updatedData.length;

            if (lastValidAmount > currentLength) {
                // Add new products to the array
                for (let i = currentLength; i < lastValidAmount; i++) {
                    updatedData.push({ product: `Product ${i + 1}`, data: [] });
                }
            } else if (lastValidAmount < currentLength) {
                // Remove excess products from the array
                updatedData.splice(lastValidAmount);
            }

            return updatedData;
        });
    }, [lastValidAmount])


    return (
        <div className="w-full">
            {selectedSetting === "basic" &&
                <Basic
                    combinedData={combinedData}
                    lastValidAmount={lastValidAmount}
                    handleInputChange={handleInputChange}
                    handleNameChange={handleNameChange}
                    validInput={validInput}
                />
            }
            {selectedSetting === "advanced" &&
                <Advanced
                    environmentalImpacts={environmentalImpacts}
                    lastValidAmount={lastValidAmount}
                />
            }
            {selectedSetting === "individual" &&
                <Individual
                    environmentalImpacts={environmentalImpacts}
                    lastValidAmount={lastValidAmount}
                />
            }
        </div>
    );
};

export default Input;
