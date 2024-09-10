import React, { useState } from "react";

const FaQ = () => {
  const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  const [activeIndexRight, setActiveIndexRight] = useState(null);

  const toggleAccordionLeft = (index) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };

  const toggleAccordionRight = (index) => {
    setActiveIndexRight(activeIndexRight === index ? null : index);
  };

  const faqItemsLeft = [
    { question: "How does Solana VM technology work?" },
    { question: "What is the uniqueness of Solana VM?" },
    { question: "Why is Solana VM good for dApps?" },
    {
      question:
        "Where can I find the Solana VM Whitepaper and technical documentation?",
    },
    { question: "How can I join the Solana VM community?" },
    { question: "Where can I find the smart contract address?" },
  ];

  const faqItemsRight = [
    { question: "How does Solana VM technology work?" },
    { question: "What is the uniqueness of Solana VM?" },
    { question: "Why is Solana VM good for dApps?" },
    {
      question:
        "Where can I find the Solana VM Whitepaper and technical documentation?",
    },
    { question: "How can I join the Solana VM community?" },
    { question: "Where can I find the smart contract address?" },
  ];

  return (
    <div className="accordion-content mx-auto flex  justify-between">
      <div className="accordion-section w-full md:w-1/2 px-4">
        <div className="how-itswork-tittle">
          <h1 className="text-3xl md:text-5xl  xl:text-6xl text-center text-white font-semibold mb-12 lg:mb-16 lg:mt-7 __className_b19098">
            How Its Work <span></span>
          </h1>
        </div>
        <div className="how-its-work-accord">
          <div className="how-its-work-accord-content">
            {faqItemsLeft.map((item, index) => (
              <div key={index} className="accordion-item">
                <button
                  className={`accordion-question ${
                    activeIndexLeft === index ? "active" : ""
                  }`}
                  onClick={() => toggleAccordionLeft(index)}
                >
                  <div className="button-upr-degin">
                    <div className="button-upr-inner"></div>
                  </div>
                  {item.question}
                  <span className="arrow">
                    {activeIndexLeft === index ? "▲" : "▼"}
                  </span>
                </button>
                {activeIndexLeft === index && (
                  <div className="accordion-answer">
                    <p>Here is the answer to the question.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="accordion-section w-full md:w-1/2 px-4">
        <div className="why-tittle">
          <h1 className="text-3xl md:text-5xl  xl:text-6xl text-center text-white font-semibold mb-12 lg:mb-16 lg:mt-7 __className_b19098">
            Why <span></span>
          </h1>
        </div>
        <div className="why-accord">
          <div className="why-accord-content">
            {faqItemsRight.map((item, index) => (
              <div key={index} className="accordion-item">
                <button
                  className={`accordion-question ${
                    activeIndexRight === index ? "active" : ""
                  }`}
                  onClick={() => toggleAccordionRight(index)}
                >
                  <div className="button-upr-degin">
                    <div className="button-upr-inner"></div>
                  </div>
                  {item.question}
                  <span className="arrow">
                    {activeIndexRight === index ? "▲" : "▼"}
                  </span>
                </button>
                {activeIndexRight === index && (
                  <div className="accordion-answer">
                    <p>Here is the answer to the question.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FaQ;
