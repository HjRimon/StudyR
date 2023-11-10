import { useState, useEffect } from "react";

const Gallery = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(53);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            } else {
              clearInterval(countdownInterval);
            }
          }
        }
      }
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, [days, hours, minutes, seconds]);

  return (
    <div>
      <h1 className="text-center font-bold text-xl md:text-4xl m-14">
        OUR SPECIAL OFFER TIME LIMIT
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max mb-20">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl md:text-9xl">
              <span style={{ "--value": days }}>{days}</span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl md:text-9xl">
              <span style={{ "--value": hours }}>{hours}</span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl md:text-9xl">
              <span style={{ "--value": minutes }}>{minutes}</span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl md:text-9xl">
              <span style={{ "--value": seconds }}>{seconds}</span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
