import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyWord, setKeyWord] = useState("");
  const onChange = (event) => setKeyWord(event.target.value);

  const onClick = () => setValue((prev) => prev + 1);
  console.log("Call an api");
  useEffect(() =>{
    console.log("CALL THE API>>>>>");
  }, []);
  useEffect(() =>{
    if(keyWord !== "" && keyWord.length > 5){
      console.log("SEARCH FOR", keyWord);
    }
  }, [keyWord]);
  
  
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here" value={keyWord}  />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
    
  );
}

export default App;
