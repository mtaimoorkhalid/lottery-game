/* eslint-disable react/prop-types */
import { useState } from "react";
import "./index.css";
import { genTicket } from "../../helper/helper";
import Ticket from "../ticket";
import Button from "../button";
export default function Lottery({ num = 3, winCondition }) {
  const [lottery, setLottery] = useState(genTicket(num));

  const isWinning = winCondition(lottery);
  function getLottery() {
    setLottery(genTicket(num));
  }

  return (
    <div>
      <h1>Lottory Game</h1>
      <Ticket ticket={lottery}></Ticket>
      <Button action={getLottery}></Button>
      {isWinning && <h1>Congratulations you won!</h1>}
    </div>
  );
}
