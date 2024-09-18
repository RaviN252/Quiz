import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Watch from "../Components/Watch";
import "../Components/Game.css";

function Game() {
  const [name, setName] = useState("");
  const [questionsList, setQuestionsList] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [buttonColor, setButtonColor] = useState("#28a745");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const personName = prompt("ENTER YOUR NAME");
  //   setName(personName);
  // }, []);

  // Fetch questions  data from localStorage
  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem("questions")) || []; // Correct localStorage key to 'questions'
    setQuestionsList(storedQuestions);
  }, []);

  // Function to go to the next question
  const NextQuestion = () => {
    setButtonColor("blue");
    setTimeout(() => {
      setButtonColor("#28a745");
    }, 300);

    if (currentQuestion < questionsList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Quiz Completed!");
    }
  };

  // Navigate to result page this is a consition navigation
  const handleResult = () => {
    navigate("/result");
  };

  // function for Right Answer
  const rightAnswer = () => {};

  return (
    <>
      <div className="container">
        {/* <Watch /> */}
        <h1>Hello {name}</h1>
        {questionsList.length > 0 ? (
          <div className="Quizz">
            <h2>{questionsList[currentQuestion].question}</h2>
            <div className="options">
              <label htmlFor="opta" className="option-label">
                <input
                  type="radio"
                  id="opta"
                  name="quizOption"
                  value="A"
                  onClick={rightAnswer}
                  className="custom-radio"
                />
                {questionsList[currentQuestion].options.optA}
              </label>
            </div>
            <div className="options">
              <label htmlFor="optb" className="option-label">
                <input
                  type="radio"
                  id="optb"
                  name="quizOption"
                  value="B"
                  onClick={rightAnswer}
                  className="custom-radio"
                />
                {questionsList[currentQuestion].options.optB}
              </label>
            </div>
            <div className="options">
              <label htmlFor="optb" className="option-label">
                <input
                  type="radio"
                  id="optb"
                  name="quizOption"
                  value="B"
                  onClick={rightAnswer}
                  className="custom-radio"
                />
                {questionsList[currentQuestion].options.optC}
              </label>
            </div>
            <div className="options">
              <label htmlFor="optb" className="option-label">
                <input
                  type="radio"
                  id="optb"
                  name="quizOption"
                  value="B"
                  onClick={rightAnswer}
                  className="custom-radio"
                />
                {questionsList[currentQuestion].options.optD}
              </label>
            </div>
            <button
              id="next"
              style={{ backgroundColor: buttonColor }}
              onClick={NextQuestion}
            >
              Next
            </button>
            <button id="submit" onClick={handleResult}>
              Submit
            </button>
          </div>
        ) : (
          <p>No questions available.</p>
        )}
      </div>
    </>
  );
}
export default Game;
