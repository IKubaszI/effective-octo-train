import React from 'react';

const Question = (props) => {

    return (
        <div>
            <p>Question:
            Question: {props.currentIndex}/{props.allQuestions}</p>
            <p>{props.currentQuestion}</p>

        </div>
    )
};

export default Question;
