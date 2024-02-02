import React from 'react';
import './Questions.css';
import SectionHead from '../SectionHead/SectionHead';
import { FaQuestion } from "react-icons/fa";
import faqs from '../QuestionsData';
import Question from '../Question/Question';

const Questions = () => {
    
  return (
    <div>
      <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion/>} title='FAQs'/>
        <div className="faqs__wrapper">
          {
            faqs.map(({id,question,answer})=>{
              return <Question key={id} question={question} answer={answer}/>
            })
          }
        </div>
      </div>
    </section>
    </div>

  )
  
}

export default Questions;