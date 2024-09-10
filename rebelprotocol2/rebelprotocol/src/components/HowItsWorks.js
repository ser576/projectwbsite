'use client';
import React, { useState } from 'react';

export default function AccordionComponent() {
  const [activeIndexRight, setActiveIndexRight] = useState(null);

  const faqItemsRight = [
    {
      question: 'Buy real-world asset token',
      answer: 'With the Rebel app, you can easily purchase RWA tokens using either crypto or fiat currency.',
    },
    {
      question: 'Earn yield and grow treasury',
      answer: 'Add your token to the REBEL vaults and earn yield so you can grow your treasury.',
    },
    {
      question: 'Get your token in your wallet',
      answer: 'After the transaction is complete, we will mint your token and transfer them directly to your wallet.',
    },
    {
      question: 'Redeem your token',
      answer: 'You can redeem your RWA tokens with $REB for either crypto, fiat, or the asset itself.',
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
              className={`accordion-question  __className_b19098 ${activeIndexRight === index ? 'active' : ''}`}
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
