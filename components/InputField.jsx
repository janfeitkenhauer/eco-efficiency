import React, { useState } from "react"

const InputField = ({ label, unit, onInputChange, validInput }) => {
    const [value, setValue] = useState(""); // State variable to store the input value

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
        onInputChange(inputValue);
        console.log(validInput)
    }

    return (
        <div className="">
            <label className="flex flex-col w-full">
                <p>{label}</p>
                <div className={`flex flex-row border dark:border-dark-90 dark:bg-dark-80/30 rounded-lg overflow-clip px-4 py-2 bg-white focus-within:border-sky-500`}>
                    <input
                        inputMode="numeric"
                        placeholder="0,00"
                        value={value}
                        onChange={handleInputChange}
                        className="focus:outline-none text-right flex-grow flex-shrink w-0 bg-transparent"
                    />
                    <p className="pl-2 w-fit">{unit}</p>
                </div>

            </label>
        </div>
    )
}

export default InputField