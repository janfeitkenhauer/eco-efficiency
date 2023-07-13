import React, { useState } from 'react'

const Settings = ({ setLastValidAmount, selectedSetting, setSelectedSetting }) => {
    const [amount, setAmount] = useState(2); // Initial amount value
    // Button function to update the amount
    const updateAmount = (increment) => {
        const newAmount = amount + increment;

        if (newAmount >= 2 && newAmount <= 99) {
            setAmount(newAmount);
            setLastValidAmount(newAmount);
        }
    };
    // Input function to set the amount of product systems
    const handleAmountChange = (e) => {
        const value = e.target.value;

        if (value === "") {
            // If the input is empty, set the amount to the last valid input
            setAmount("");
        } else {
            // Parse the input value as an integer
            const parsedValue = parseInt(value);

            // Check if the parsed value is within the valid range (2 to 999)
            if (!isNaN(parsedValue) && parsedValue >= 2 && parsedValue <= 99) {
                setAmount(parsedValue);
                setLastValidAmount(parsedValue);
            }
        }
    };

    // Radio function to set the calculation setting
    const handleSettingChange = (e) => {
        setSelectedSetting(e.target.value)
    };

    // Start by selecting the number of products to compare and choose the calculation mode.
    return (
        <div className="w-full flex flex-col items-center py-5">
            <h2 className='self-start indent-3 pb-3 opacity-70 text-justify'><span>1.</span> Start by selecting the number of products to compare.</h2>
            <div className="w-full md:px-10 flex flex-row justify-around items-start">
                <div className="flex flex-col items-center">
                    <h3 className="text-center font-semibold text-base">Number of products</h3>
                    <div className="flex flex-row border mt-4 bg-white dark:bg-dark-80/30 border-dark-30 dark:border-dark-80 rounded-lg overflow-clip">
                        <button onClick={() => updateAmount(-1)} className="border-r border-dark-20 dark:border-dark-80 w-8 py-2">-</button>
                        <input
                            inputMode="numeric"
                            className="w-10 py-2 focus:outline-none text-center bg-transparent"
                            value={amount === "" ? "" : amount}
                            onChange={handleAmountChange}
                        />
                        <button onClick={() => updateAmount(1)} className="border-l border-dark-20 dark:border-dark-80 w-8 py-2">+</button>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-center font-semibold text-base">Calculation mode</h3>
                    <div className='flex flex-col'>
                        <label className='flex'>
                            <input
                                type="radio"
                                name="setting"
                                value="basic"
                                checked={selectedSetting === "basic"}
                                onChange={handleSettingChange}
                                className="mr-2"
                            />
                            <p>Basic</p>
                        </label>
                        <label className='flex hidden'>
                            <input
                                type="radio"
                                name="setting"
                                value="advanced"
                                checked={selectedSetting === "advanced"}
                                onChange={handleSettingChange}
                                className="mr-2"
                                disabled
                            />
                            <p className='opacity-60'>Advanced</p>
                        </label>
                        <label className='flex hidden'>
                            <input
                                type="radio"
                                name="setting"
                                value="individual"
                                checked={selectedSetting === "individual"}
                                onChange={handleSettingChange}
                                className="mr-2"
                                disabled
                            />
                            <p className='opacity-60'>Individual</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings