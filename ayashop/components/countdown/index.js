import { useEffect, useState } from "react";
import { calcaulateDiff } from "./utils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};
export default function Countdown({ date }) {
  const dateinMS = date.getTime(); // co dc time dc tinh bang mili giay
  const [timeInMs, setTimeInMs] = useState(date.getTime());
  const [remainingTime, setRemainingTime] = useState();
  useEffect(() => {
    setTimeInMs(date.getTime());
  }, [date]);
  useEffect(() => {
    const interval = setInterval(() => {
      updateRemainingTime(timeInMs);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeInMs]);
  const updateRemainingTime = (timeInMs) => {
    setRemainingTime(calcaulateDiff(timeInMs));
  };
  return (
    <div className="mt-2">
      {[...Array(remainingTime?.days.length).keys()].map((d, i) => (
        <span className="bg-dark rounded h2 m-1 p-1">
          {remainingTime?.days.slice(i, i + 1)}
        </span>
      ))}
      <b>:</b>
      <span className="bg-dark rounded h2 m-1 p-1">
        {remainingTime?.hours.slice(0, 1)}
      </span>
      <span className="bg-dark rounded h2 m-1 p-1">
        {remainingTime?.hours.slice(1, 2)}
      </span>
      <b>:</b>
      <span className="bg-dark rounded h2 m-1 p-1">
        {remainingTime?.minutes.slice(0, 1)}
      </span>
      <span className="bg-dark rounded h2 m-1 p-1">
        {remainingTime?.minutes.slice(1, 2)}
      </span>
      <b>:</b>
      <span className="bg-dark rounded h2 m-1 p-1">
        {remainingTime?.seconds.slice(0, 1)}
      </span>
      <span className="bg-dark rounded h2 m-1 p-1">
        {remainingTime?.seconds.slice(1, 2)}
      </span>
    </div>
  );
}