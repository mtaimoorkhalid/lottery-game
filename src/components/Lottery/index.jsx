import { useState } from "react";
import "./index.css";
import { genTicket } from "../../helper/helper";
export default function Lottery() {
  const [lottery, setLottery] = useState(genTicket(3));

  return (
    <div>
      <h1>Lottory Game</h1>
      <div className="lottery">
        <span>{lottery[0]}</span>
        <span>{lottery[1]}</span>
        <span>{lottery[2]}</span>
      </div>
    </div>
  );
}
