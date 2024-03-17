import { useState } from "react";
import "./index.css";
import { genTicket, sum } from "../../helper/helper";
export default function Lottery() {
  const [lottery, setLottery] = useState(genTicket(3));

  const isWinning = sum(lottery);
  function getLottery() {
    setLottery(genTicket(3));
  }

  return (
    <div>
      <h1>Lottory Game</h1>
      <div className="lottery">
        <span>{lottery[0]}</span>
        <span>{lottery[1]}</span>
        <span>{lottery[2]}</span>
      </div>
      <button onClick={getLottery} style={{ margin: "10px" }}>
        Get New Ticket
      </button>
      {isWinning === 15 && <h1>Congratulations you won!</h1>}
    </div>
  );
}
