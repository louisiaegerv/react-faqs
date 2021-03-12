import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const FaqItem = ({ item, index, handleClick, activeIndex }) => {
  return (
    <article className='faq-item' key={item.id}>
      <div className='question-section'>
        <h4>{item.question}</h4>
        <button
          className='btn question-icon-btn'
          onClick={() => handleClick(index)}
        >
          {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {activeIndex === index && <p className='answer-section'>{item.answer}</p>}
    </article>
  )
}

export default FaqItem
