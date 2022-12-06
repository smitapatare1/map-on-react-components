import TaskCard from "./components/TaskCard/TaskCard.js";

function App() {
  const tasks=["learn HTML","learn CSS","learn javascript","learn react js","learn node js"];
    
  return (
    tasks.map((element,i)=>{
      return(<TaskCard title={element}/>)
    })
    );
}

export default App;
