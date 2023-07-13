'use client'
import { useState, useRef, useEffect } from 'react';

const Faq = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [answerHeight, setAnswerHeight] = useState(null);
  const answerRef = useRef(null);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setAnswerHeight(answerRef.current.scrollHeight);
  }, [isOpen]);


  return (
    <div className="w-full">
      <div className='px-1'>
        <div className="flex justify-between py-3 font-semibold cursor-pointer group" onClick={toggleAnswer}>
          <span className=' group-hover:underline'>{question}</span>
          <span className="no-underline">{isOpen ? '-' : '+'}</span>
        </div>
        <div
          ref={answerRef}
          className={`overflow-hidden transition-height duration-300`}
          style={{ height: isOpen ? `${answerHeight}px` : '0' }}
        >
          <div className="m-0 pb-3 text-sm opacity-70">{children}</div>
        </div>
        {/* {isOpen && <div className="m-0 pb-3 text-sm opacity-60">{answer}</div>} */}
      </div>
      <hr className="border-gray-300 dark:border-neutral-700" />
    </div>
  );
};

export default Faq;
