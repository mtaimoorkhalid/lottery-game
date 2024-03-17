/* eslint-disable react/prop-types */
export default function Button({ action }) {
  return (
    <button onClick={action} style={{ margin: "10px" }}>
      Get New Ticket
    </button>
  );
}
