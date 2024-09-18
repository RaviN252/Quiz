import { useState, useEffect } from "react";
import "../Components/Admin.css";

function Admin() {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionsList, setQuestionsList] = useState([]);
  const [err, setErr] = useState("");

  // Load questions from local storage on component mount
  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
    setQuestionsList(storedQuestions);
  }, []);

  // form validation
  let validateForm = () => {
    if (
      question === "" ||
      optionA === "" ||
      optionB === "" ||
      optionC === "" ||
      optionD === "" ||
      correctAnswer === ""
    ) {
      return "Please fill in all fields. All fields are mandatory.";
    }
    return "";
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    let error = validateForm();
    if (error) {
      setErr(error);
      return;
    }

    // create unique id for each question using the current time stamp
    const uniqueId = Date.now();

    // Create a new question object
    const newQuestion = {
      id: uniqueId,
      question,
      options: {
        optA: optionA,
        optB: optionB,
        optC: optionC,
        optD: optionD,
      },
      correctAnswer,
    };

    // Get the current list of questions from local storage
    const storedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
    // Add the new question to the list
    storedQuestions.push(newQuestion);
    // Update local storage with the new list
    localStorage.setItem("questions", JSON.stringify(storedQuestions));

    setQuestionsList(storedQuestions);
    // Clear input fields
    setQuestion("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
    setCorrectAnswer("");
    alert("Question added successfully!");
  };

  // Function to delete a question by ID
  const deleteItem = (id) => {
    // Filter out the question that matches the given id
    const updatedQuestions = questionsList.filter((q) => q.id !== id);

    // Update state and local storage
    setQuestionsList(updatedQuestions);
    localStorage.setItem("questions", JSON.stringify(updatedQuestions));

    alert("Question Deleted Successfully!");
  };

  return (
    <>
      <div className="question">
        <h1 id="header">Add Questions</h1>
        <p style={{ color: "red" }}>{err}</p>
        <input
          placeholder="Enter The Question"
          className="inputfield"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <br />
        <input
          placeholder="Enter Option A"
          className="inputfield"
          value={optionA}
          onChange={(e) => setOptionA(e.target.value)}
        />
        <br />
        <input
          placeholder="Enter Option B"
          className="inputfield"
          value={optionB}
          onChange={(e) => setOptionB(e.target.value)}
        />
        <br />
        <input
          placeholder="Enter Option C"
          className="inputfield"
          value={optionC}
          onChange={(e) => setOptionC(e.target.value)}
        />
        <br />
        <input
          placeholder="Enter Option D"
          className="inputfield"
          value={optionD}
          onChange={(e) => setOptionD(e.target.value)}
        />
        <br />
        <input
          placeholder="Enter The Correct Answer"
          className="inputfield"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />
        <br />
        <button id="add" onClick={handleAddQuestion}>
          Add
        </button>
        <br />

        <div className="Questions">
          <h2>Questions List</h2>

          <div>
            {questionsList.map((q) => (
              <div key={q.id} className="questionItem">
                <h3>Question: {q.question}</h3>
                <p>Option A: {q.options.optA}</p>
                <p>Option B: {q.options.optB}</p>
                <p>Option C: {q.options.optC}</p>
                <p>Option D: {q.options.optD}</p>
                <div id="crt">
                  <p>Correct Answer: {q.correctAnswer}</p>
                </div>
                <button onClick={() => deleteItem(q.id)} id="delete">
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
