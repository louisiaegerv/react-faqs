import React, { useState } from 'react'
import data from '../data.js'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const CryptoFaqs = () => {
  const [index, setIndex] = useState(null)

  const handleClick = (i) => {
    if (index === i) {
      setIndex(null)
    } else {
      setIndex(i)
    }
  }

  return (
    <>
      <main className='card'>
        <header>
          <h3>Crypto FAQs</h3>
        </header>
        <section className='faq-list'>
          {data.map((item, i) => {
            // console.log(item)
            return (
              <article className='faq-item' key={item.id}>
                <div className='question-section'>
                  <h4>{item.question}</h4>
                  <button
                    className='btn question-icon-btn'
                    onClick={() => handleClick(i)}
                  >
                    {index === i ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </button>
                </div>
                {index === i && <p className='answer-section'>{item.answer}</p>}
              </article>
            )
          })}
        </section>
      </main>
    </>
  )
}

export default CryptoFaqs
