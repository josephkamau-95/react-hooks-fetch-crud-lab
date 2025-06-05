import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
      fetch("http://localhost:4000/questions")
        .then((res) => res.json())
        .then((questions) => setQuestions(questions));
  }, [])

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  }

  const handleDeleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const handleUpdateQuestion = (updatedQuestion) => {
    setQuestions(
      questions.map((question) => 
        question.id === updatedQuestion.id ? updatedQuestion : question
      )
    );
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} /> 
      ) : ( 
        <QuestionList 
        onUpdateQuestion={handleUpdateQuestion}
        onDeleteQuestion={handleDeleteQuestion}
        questions={questions}
        />
      )}
    </main>
  );
}

export default App;
