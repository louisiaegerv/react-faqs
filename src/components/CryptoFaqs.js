import React, { useState } from 'react'
import data from '../data.js'
import FaqItem from './FaqItem'

const CryptoFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <>
      <main className='card'>
        <header>
          <h3>Crypto FAQs</h3>
        </header>
        <section className='faq-list'>
          {data.map((item, index) => (
            <FaqItem
              item={item}
              index={index}
              handleClick={handleClick}
              activeIndex={activeIndex}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default CryptoFaqs
