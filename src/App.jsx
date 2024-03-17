import "./App.css";
import Lottery from "./components/Lottery";
import { sum } from "./helper/helper";

function App() {
  function winCondition(lottery) {
    return sum(lottery) === 15;
  }
  return (
    <>
      <Lottery num={3} winCondition={winCondition}></Lottery>
    </>
  );
}

export default App;
