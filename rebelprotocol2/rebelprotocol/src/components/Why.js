'use client';
import React, { useState } from 'react';

export default function AccordionComponent() {
  const [activeIndexRight, setActiveIndexRight] = useState(null);

  const faqItemsRight = [
    {
      question: 'Inflation Protection',
      answer: 'Protect your wealth from inflation by investing in tokenised real-world assets that retain value.',
    },
    {
      question: 'Mix It Up',
      answer: 'Diversify your portfolio and explore new markets with REBEL platform and range of tokenised real-world assets.',
    },
    {
      question: 'A Golden Foundation',
      answer: 'REBEL inaugural RWA token is backed 1:1 by investor grade LBMA-certified gold, vaulted securely in the channel islands.',
    },
    {
      question: 'Grow Your Gold',
      answer: 'Let your $REB token grow in the REBEL digital vaults, where the underlying gold is monetised and earns you yield.',
    },
    {
    question: 'Compliant & Transparent',
    answer: 'Invest with peace of mind, knowing that REBEL is compliant and its physical vaults are audited.',
    },
    {
    question: 'Safe & Secure',
    answer: 'REBELs omni-chain platform is developed using military grade security for maximum protection.',
    },
  ];

  const toggleAccordionRight = (index) => {
    setActiveIndexRight(activeIndexRight === index ? null : index); // Toggle active index
  };

  return (
    <div className="how-its-work-accord">
          <div className="how-its-work-accord-content">
        {faqItemsRight.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-question __className_b19098 ${activeIndexRight === index ? 'active' : ''}`}
              onClick={() => toggleAccordionRight(index)}
            >
              <div className="button-upr-degin">
                <div className="button-upr-inner"></div>
              </div>
              {item.question}
              <span className="arrow">
                {activeIndexRight === index ? '▲' : '▼'}
              </span>
            </button>
            <div
              className={`accordion-answer ${activeIndexRight === index ? 'open' : ''}`}
              style={{
                maxHeight: activeIndexRight === index ? '1000px' : '0',
                opacity: activeIndexRight === index ? 1 : 0,
                transition: 'max-height 0.5s ease, opacity 0.5s ease',
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
