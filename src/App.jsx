import {useState} from "react";
function App(){
  const [count,setCount]=useState(5);
  const [ObtMarks, setObtMarks] = useState(0);
  const [TotMarks, setTotMarks] = useState(0);
  const [Percentange, setPercantage] = useState(0);
  function increment(){
    setCount(count+1)
  }
  function Decrement() {
    if (count > 0) {
      setCount(count - 1);  
    }
    
  }
  function handleSubmit(e) {
    e.preventDefault();
    const CalPercantage=(ObtMarks/TotMarks)*100;
    setPercantage(CalPercantage);
    // alert(`Percantage:${CalPercantage.toFixed(2)}%`);
  }
  return(
    <div>
     <div>This is counter variable </div>
     <h1> Counter : {count} </h1>
     <button onClick={increment}> Increment</button>
    <button onClick={Decrement}> Decrement</button>
      <form onSubmit={handleSubmit}>
      <div>
          <input type="Number" name="Obtain Marks" id="ObtMarks" placeholder="Enter Obtain Marks" 
          onChange={(e)=>setObtMarks(Number(e.target.value))}/>
        </div>
        <div>
      <input type="Number" name="Obtain Marks" id="TotMarks" placeholder="Enter Total Marks" 
      onChange={(e)=>setTotMarks(Number(e.target.value))}/>
        </div>
      <button type="Submit" >Calculate</button>
    </form>
      <p>Your Calculated Percentage is {Percentange.toFixed(2)}</p>
    </div>
  )
}
export default App;