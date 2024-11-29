import React from "react";
import { Button, Title, Option } from "../components";


export const StepTwo = () => {

  const answers = [
    {
      id: '8f5ced48-da99-477f-aa62-889eca67ce57',
      answer: 'Ваш ответ 11'
    },
    {
      id: '4639c91d-0dc1-4b31-a7a4-b5b66d7584d3',
      answer: 'Ваш ответ 22'
    },
    {
      id: 'bdc14d39-df17-402c-a332-5037ee1c7e35',
      answer: 'Ваш ответ 33'
    },
    {
      id: '4c40902d-bc82-479c-a690-0386c8811ad8',
      answer: 'Ваш ответ 44'
    }
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <div className="question">
            <Title text={"2. Занимательный вопрос"} />
            <ul className="variants">

              {
                answers.map(({ id, answer }) => (
                  <Option key={id} id={id} answer={answer} />
                ))
              }

            </ul>
            <Button text={"Далее"} />
          </div>
        </div>
      </div>
    </div>
  );
};

