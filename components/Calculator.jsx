"use client";
import React, { useState, useEffect, useRef } from "react";

import Settings from "./Settings";
import Input from "./Input";
import Output from "./Output";

import { performCalculations } from "@utils/calculation";

const Calculator = () => {
    const outputRef = useRef(null);

    const [lastValidAmount, setLastValidAmount] = useState(2); // State variable to store the last valid amount (2 - 99)
    const [selectedSetting, setSelectedSetting] = useState("basic"); // Calculation setting selected by user

    // State variable to collect user input data
    const [inputData, setInputData] = useState([...Array(lastValidAmount)].map((_, index) => {
        return {
            product: `Product ${index + 1}`,
            data: []
        };
    }));

    // Check input for valid numbers
    const [validInput, setValidInput] = useState(true);

    useEffect(() => {
        const hasNonNumericValues = inputData.some((product) =>
            product.data.some((value) => isNaN(value))
        );
        setValidInput(hasNonNumericValues);
    }, [inputData]);

    // Calculate function on form submit and update button caption
    const [showOutput, setShowOutput] = useState(false);
    const [calculationResult, setCalculationResult] = useState([]); // State variable to pass the calculation results
    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowOutput(true);
        const result = performCalculations(inputData);
        setCalculationResult(result);

        // Delay the scrolling to allow the Output component to render
        await new Promise((resolve) => setTimeout(resolve, 1));
        // Scroll to the Output
        if (outputRef.current) {

            outputRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full flex flex-col">
            <Settings
                setLastValidAmount={setLastValidAmount}
                selectedSetting={selectedSetting}
                setSelectedSetting={setSelectedSetting}
            />
            <div className="py-5">
                <h2 className="self-start pb-3 indent-3 opacity-70 text-justify"><span>2.</span> Fill in the specific product information.</h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center">
                    <Input
                        selectedSetting={selectedSetting}
                        lastValidAmount={lastValidAmount}
                        setInputData={setInputData} // Pass the state variable to the Input component
                        validInput={validInput}
                    />
                    <div className="flex flex-col w-full justify-center items-center">
                        <h2 className="self-start pt-10 pb-3 indent-3 opacity-70 text-justify"><span>3.</span> Press the button below to calculate the eco-efficiency scores.</h2>
                        <button
                            type="submit"
                            disabled={validInput}
                            className="px-5 py-4 group rounded-lg border transition-colors bg-primary-light text-dark-10 border-dark-70 dark:bg-primary-dark dark:text-dark-100 dark:border-transparent hover:bg-[#184346] hover:dark:bg-[#B2F6FB] disabled:opacity-50 disabled:hover:bg-primary-light disabled:hover:dark:bg-primary-dark"
                        >
                            <h2 className={`text-2xl font-semibold`}>Calculate
                            </h2>
                        </button>
                    </div>
                </form >
            </div>
            {showOutput &&
                <div ref={outputRef}>
                    <Output
                        calculationResult={calculationResult}
                    />
                </div>
            }
        </div >
    )
}

export default Calculator;