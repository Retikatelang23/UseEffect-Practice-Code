import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [text, setText] = useState("");

  /*useEffect definition:- agar mai mere component ke render hone ke baad koi kaam 
  karwana chahti hu to uske liye i will use useEffect and usi task ko hum side effect 
  bolte hai*/

  // ye pura code render hone ke baad run karta hai
  // there are 4 variations of useEffect which have different functioning

  // variation 1 -> useEffect runs after every rendering 
/*useEffect( () => {
    console.log("printed successfully")
  })*/

  //variation 2 -> useEffect runs only after first rendering -> by sending second parameter as a empty array 
/*useEffect( () => {
    console.log("printed successfully")
  }, [])*/

  //variation 3 ->first rendering + whenever dependency will change useEffect will work
/*useEffect( () => {
    console.log("changes observed")
  }, [text])*/

  //variation 4 -> to handle ummounting of a component 
  useEffect( () => {
    // suppose ek event listener lagaya hai
    console.log("listener added")

    return () => {
      console.log("listener remover")
    }
  }, [text])

  function changeHandler(event){
    console.log(text)
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" placeholder="enter here" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
