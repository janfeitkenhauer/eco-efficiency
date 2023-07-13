"use client";

import React, { useState } from "react";

const Product = ({ product, onInputChange }) => {
    const [value, setValue] = useState(""); // State variable to store the input value

    const handleNameChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
        onInputChange(inputValue);
    }

    return (
        <div>
            <input
                type="text"
                placeholder={`Product ${product.id + 1}`}
                value={value}
                onChange={handleNameChange}
                className="bg-white dark:bg-dark-80/30 border border-dark-30 dark:border-dark-90 rounded-lg px-2 py-1 overflow-clip focus:border-sky-500 outline-none"
            />
        </div>
    )
}

export default Product;