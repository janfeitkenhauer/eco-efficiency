"use client";

import Product from "./Product";
import InputField from "./InputField";

const Basic = ({ combinedData, lastValidAmount, handleInputChange, handleNameChange, validInput }) => {

    const products = [...Array(lastValidAmount)].map((_, objectIndex) => ({
        id: objectIndex,
        data: combinedData.map(({ label, unit }) => ({ label, unit })),
    }));

    return (
        <div className="flex flex-col">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {products.map((product, objectIndex) => (
                    <div key={product.id} className="p-2 w-full h-fit rounded-xl border border-dark-20 dark:border-dark-90 backdrop-blur bg-white/20 shadow-[inset_10px_-50px_94px_0px_rgb(199,199,199,0.2)] dark:bg-dark-90/20 dark:shadow-[inset_10px_-50px_94px_-40px_rgb(199,199,199,0.2)]">
                        <Product
                            product={product}
                            onInputChange={(value) =>
                                handleNameChange(
                                    objectIndex,
                                    value
                                )}
                        />
                        {combinedData.map(({ data }, categoryIndex) => (
                            <div key={categoryIndex} className="pt-2">
                                <InputField
                                    label={data[0].label}
                                    unit={data[0].unit}
                                    onInputChange={(value) =>
                                        handleInputChange(
                                            objectIndex,
                                            categoryIndex,
                                            data[0].label,
                                            value,
                                            data[0].unit
                                        )
                                    }
                                    validInput={validInput}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Basic;