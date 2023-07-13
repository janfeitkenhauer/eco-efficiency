"use client"

import Calculator from "@components/Calculator";
import FAQ from "@components/Faq"

import { useState } from "react"

export default function Home() {
  const [calculationStart, setCalculationStart] = useState(false);

  const toggleCalculationStart = () => {
    setCalculationStart((prevState) => !prevState);
  };

  return (
    <div className="h-screen w-full lg:w-2/3 2xl:w-2/5 px-3 lg:px-0 pt-20 flex flex-col items-center">
      {!calculationStart ? (
        <div className="h-full w-full">
          <div className="h-full pb-28 md:pb-36 flex flex-col justify-center">
            <div className="text-center pb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-[1.15] lg:text-5xl">Eco-efficiency <br /> Calculator</h1>
              <p className="mt-5 opacity-70">Compare the ecological impact and monetary advantages of different product options to make environmentally conscious decisions</p>
            </div>
            <div className="px-2 overflow-y-auto">
              <FAQ question="Eco-what?">
                <p className=" text-justify">
                  Eco-efficiency is a concept that measures how well a product or process performes economically while minimizing its impact on the environment. In simpler terms, it's about achieving more with less. By adopting eco-efficient practices, we can conserve the planet's natural resources, reduce pollution and contribute to a more sustainable future. Embracing eco-efficiency is critical to making a positive impact on both our environment and our economy.
                </p>
              </FAQ>
              <FAQ question="How does eco-efficiency affect you?">
                <div className="text-justify">
                  <p>
                    Eco-efficiency isn't just a concept for big companies or governments; it has real implications for each and every one of us. Let's take a few everyday examples to illustrate why it's worth paying attention to the concept.</p>
                  <p>Imagine you're in the grocery store choosing between two apples - one locally grown and one imported. The imported apple may be cheaper, but it has travelled long distances, contributing to greenhouse gas emissions from transport. On the other hand, the locally grown apple supports your local economy, reduces transport emissions and is often fresher and tastier. By choosing the local option, you are not only enjoying a quality product, but also supporting sustainable practices that prioritise local ecosystems and reduce carbon emissions.</p>
                  <p>Another example to consider is the type of stove you use for cooking. Traditional gas stoves emit carbon dioxide and other pollutants during use, contributing to air pollution and greenhouse gas emissions. Electric stoves, while cleaner in operation, may rely on energy generated from fossil fuels unless you have a renewable energy source. Although they are more efficient in terms of energy use, the same argument can be made for induction cookers. In this scenario, eco-efficiency can be used to rank the options and even consider the economic aspects of an investment in a new stove.</p>
                  <p>These examples show how our individual choices can have a significant impact. By considering eco-efficiency in your dicision making, you are actively contributing to a more sustainable future, both environmentally and economically.</p>
                </div>
              </FAQ>
              <FAQ question="How does the calculation work?">
                <p className="text-justify pb-2">
                  The calculation process for eco-efficiency involves several steps to provide you with meaningful results. Here is an overview of how it works:
                </p>
                <ol className="list-decimal">
                  <li className="pb-2">
                    <p className="text-justify"><span className="font-semibold">1. User input: </span>You provide the necessary information on the economic and environmental aspects of at least two product or process alternatives. This includes monetary value and CO<span className=" align-sub text-xs">2</span> emissions for the basic calculation. The advanced mode adds several different environmental factors for a more detailed assessment.</p>
                  </li>
                  <li className="pb-2">
                    <p className="text-justify"><span className="font-semibold">2. Normalization: </span>We can't compare apples with oranges, and the same is true for both economic and environmental aspects. Normalization overcomes this obstacle by turing the input values into uniform indicators which can be used for comparison on a relative scale.</p>
                  </li>
                  <li className="pb-2">
                    <p className="text-justify"><span className="font-semibold">3. Combining values: </span>A single representative factor, the relative EE score, is obtained by adding the normalised values for the economic and environmental aspects. This score indicates the overall eco-efficiency performance of each product or process alternative based on the data provided.</p>
                  </li>
                  <li>
                    <p className="text-justify"><span className="font-semibold">4. Output: </span>The results of the calculations are presented in a graphical display that allows you to analyze and compare individual preferences for different weighting scenarios between environmental and economic aspects. This presentation is designed to help you visualize the trade-offs between environmental impact and economic performance so that you can make informed decisions.</p>
                  </li>
                </ol>
                <br />
                <p className="text-justify">Et voila, there you have it. This calculation scheme was developed in cooperation with the German Aerospace Center (DLR e.V.) and the Leibniz University of Hannover.</p>
              </FAQ>
              <FAQ question="About me">
                <div className="text-justify">
                  <p>
                    My name is Jan Feitkenhauer. I am an environmental engineer passionate about promoting sustainable practices such as eco-efficiency. As the developer of this web application, my goal is to help individuals and businesses make informed decisions that balance economic viability with environmental impact. I have designed this webapp to provide you with valuable insights into the eco-efficiency of different alternatives, enabling you to make more sustainable choices.
                  </p>
                  <p>
                    If you have any questions, suggestions or feedback about this application, please do not hesitate to email me at <a href="mailto:jan.feitkenhauer@enfine.de" className="text-blue-800 hover:underline dark:text-sky-200">jan.feitkenhauer@enfine.de</a>. Let's work together for a better future!
                  </p>
                </div>
              </FAQ>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 flex h-28 md:h-36 w-full justify-center items-center">
            <button className="px-5 py-4 group rounded-lg border border-transparent transition-colors hover:border-dark-30 hover:bg-dark-10 hover:dark:border-dark-70 hover:dark:bg-dark-90 hover:dark:bg-opacity-30" onClick={toggleCalculationStart}>
              <h2 className={`text-2xl font-semibold`}>
                Let's get started{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center">
          <button className="px-5 py-4 my-5 group rounded-lg border border-transparent transition-colors hover:border-dark-30 hover:bg-dark-10 hover:dark:border-dark-70 hover:dark:bg-dark-90 hover:dark:bg-opacity-30" onClick={toggleCalculationStart}>
            <h2 className={`text-2xl font-semibold`}>
              <span className="inline-block transition-transform  group-hover:-translate-x-1 motion-reduce:transform-none">
                &lt;-
              </span>
              {' '}Go back
            </h2>
          </button>
          <Calculator />
        </div>
      )}
    </div>
  )
}
