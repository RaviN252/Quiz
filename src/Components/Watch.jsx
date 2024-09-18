import { useEffect, useState } from "react";
import watch from "../Assets/clockk.png";
import "../Components/Watch.css";

function Watch() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <>
      <div className="timer">
        <div>
          <img src={watch} id="watcimg" />
        </div>
        <div>
          <h1>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
          </h1>
        </div>
      </div>
    </>
  );
}
export default Watch;
