import React, { useState, useEffect } from 'react';

import Graph from './Graph';

const Output = ({ calculationResult }) => {
    const decimalWeights = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    console.log(calculationResult)
    // Sort the calculation result based on the 50% economic weight
    const sortedResult = [...calculationResult].sort(
        (a, b) => b.data[5] - a.data[5]
    );

    return (
        <div className="w-full flex flex-col items-center text-center py-5">
            <h2 className="self-start indent-3 opacity-70 text-justify"><span>4.</span> Calculation results.</h2>
            <div className='my-3 rounded-md overflow-hidden border border-gray-300 dark:border-neutral-700'>
                <table className='table-fixed text-dark-100 dark:text-dark-10 opacity-70 '>
                    <thead>
                        <tr className='bg-dark-20 dark:bg-dark-90'>
                            <th className='py-2 px-5 border-b border-gray-300 dark:border-neutral-700'>Rank</th>
                            <th className='py-2 px-5 border-b border-gray-300 dark:border-neutral-700 text-left'>Product</th>
                            <th className='py-2 px-5 border-b border-gray-300 dark:border-neutral-700'>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedResult.map((product, index) => (
                            <tr key={index}>
                                <td className='px-5'>{index + 1}</td>
                                <td className='px-5 text-left'>{product.product}</td>
                                <td className='px-5'>{product.data[5].toFixed(1)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className='text-justify opacity-70 indent-3'>
                Based on the calculation, {sortedResult[0].data[5].toFixed(1) !== sortedResult[1].data[5].toFixed(1) ? (
                    <>
                        the <strong>{sortedResult[0].product}</strong> has the highest relative eco-efficiency score of{' '}
                        <strong>{sortedResult[0].data[5].toFixed(1)}</strong>
                    </>
                ) : (
                    <>
                        both the <strong>{sortedResult[0].product}</strong> and <strong>{sortedResult[1].product}</strong> have the same highest relative eco-efficiency score of{' '}
                        <strong>{sortedResult[0].data[5].toFixed(1)}</strong>
                    </>
                )}.
                By default, this result is calculated on the assumption that economic viability and environmental performance are of equal importance.
                This means that both categories are equally weighted. As the preferred weighting between economic and environmental performance may be different for you, a more detailed view of the results is presented in the graph. It shows the full range of environmental importance, providing a comprehensive analysis of eco-efficiency scores for different preferences and priorities.
            </p>
            <div className='w-full lg:w-2/3 pl-10 pr-4 pb-5'>
                <Graph data={calculationResult} />
            </div>
            <p className='text-justify opacity-70 indent-3'>
                <span className='underline'>Disclaimer:</span> The eco-efficiency scores and rankings provided by this tool are intended for informational purposes only and should not be considered as definitive or conclusive. The calculations are based on a predefined set of assumptions, data sources, and weightings between economic and environmental factors. Individual results may vary based on specific circumstances, preferences, and additional factors not accounted for in the calculation. The tool does not provide personalized advice or recommendations. Users should exercise their own judgment when making decisions. The creators of this tool make no warranties or representations regarding the accuracy, completeness, or reliability of the information provided. Use of this tool is at your own risk and responsibility.
            </p>
        </div>
    );
};

export default Output;
