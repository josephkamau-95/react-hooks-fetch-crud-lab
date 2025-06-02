import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setQuestions((prev) => prev.filter((q) => q.id !== id))
      })
      .catch((err) => console.error("Error deleting question:", err));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          questions.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              onDelete={handleDelete}
            />
          ))
        }
        </ul>
    </section>
  );
}

export default QuestionList;
