/* eslint-disable react/prop-types */
import TicketNumber from "../ticketNumber";
import "./index.css";
export default function Ticket({ ticket }) {
  return (
    <div className="Ticket">
      {ticket.map((value, index) => {
        return <TicketNumber key={index} num={value}></TicketNumber>;
      })}
    </div>
  );
}
