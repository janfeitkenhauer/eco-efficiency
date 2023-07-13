"use client";

import React, { useState } from "react";

import InputField from "./InputField";

const Individual = ({ environmentalImpacts, lastValidAmount }) => {
    const [selectedImpacts, setSelectedImpacts] = useState([]);

    const handleImpactChange = (e) => {
        const { options } = e.target;
        const selectedOptions = Array.from(options)
            .filter((option) => option.selected)
            .map((option) => option.value);
        setSelectedImpacts(selectedOptions);
    };

    return (
        <div className="mt-5">
            <h1>Coming soon..</h1>
            {/* <div>
                <label>Select Environmental Impacts
                    <select
                        multiple
                        value={selectedImpacts}
                        onChange={handleImpactChange}
                        className="mt-5 glassmorphism"
                    >
                        {Object.entries(environmentalImpacts).map(([key]) => (
                            <option key={key} value={key}>
                                {key}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            {[...Array(lastValidAmount)].map((_, index) => (
                <div key={index} className="mt-5 glassmorphism">
                    <p>Product {index + 1}</p>
                    {selectedImpacts.map((impact) => (
                        <InputField
                            key={impact}
                            label={impact}
                            unit={environmentalImpacts[impact]}
                        />
                    ))}
                    <InputField label="Economic Value" unit="EUR" />
                </div>
            ))} */}
        </div>
    );
};

export default Individual;
