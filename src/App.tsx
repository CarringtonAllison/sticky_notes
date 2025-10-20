import { useState } from 'react'
import './App.css'

function App() {

  const [stickyNote, setStickyNote] = useState<string>(""); 
  const [stickyNoteList, setStickyNoteList] = useState<string[]>([]);
  const [word, setWord] = useState<string>(""); 
  const [reverseWord, setReverseWord] = useState<string>(""); 
  const [amount, setAmount] = useState<number>(0); 
  const [fizzBuzzWords, setFizzBuzzWords] = useState<string[]>([]); 

  const addToStickyNoteList = () => {
    setStickyNoteList([...stickyNoteList, stickyNote]);
    setStickyNote(""); 
  }

  const reverseTheWord : React.MouseEventHandler<HTMLButtonElement> = () => {
    const reversed : string = word.split("").reverse().join("");
    setReverseWord(reversed); 
    setWord(""); 
  };

  const reverseWithOldSchoolLoop : React.MouseEventHandler<HTMLButtonElement> = () => {

    let reversedWithLoop : string[] = []; 
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWithLoop.push(word[i]); 
    }

    const stringVersion : string = reversedWithLoop.join(""); 

    setReverseWord(stringVersion); 

  };


  const fizzBuzz : React.MouseEventHandler<HTMLButtonElement> = () => {
    let words : string[] = [];

    for (let num = 1; num <= amount; num++) { 
      if (num % 3 === 0 && num % 5 === 0) {
        words.push("FizzBuzz"); 
      } else if (num % 3 === 0){ 
        words.push("Fizz"); 
      } else if (num % 5 === 0) {
        words.push("Buzz")
      } else {
        words.push(num.toString()); 
      }
    } 

    setFizzBuzzWords(words); 
  }; 



  return (
    <>
      <label> Add Sticky Note: </label>
      <input 
        type='text' 
        value={stickyNote} 
        onChange={(e) => setStickyNote(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addToStickyNoteList(); 
          }
        }}
        >
      </input>
      <button onClick={addToStickyNoteList} >Submit</button>
      <div>
        {stickyNoteList.map((note, idx)=> 
          <div key={idx}>{note}</div>
        )}
      </div>

      <label>reverse a word: </label>
      <input type="text" value={word} onChange={(e) => setWord(e.target.value)}/>
      <button onClick={reverseWithOldSchoolLoop}>Submit</button>
      <div>{reverseWord}</div>


      <label>FizzBuzz: </label>
      <input type="text" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} /> 
      <button onClick={fizzBuzz}>Submit</button>

      <div>{fizzBuzzWords.map((words) => <div>{words}</div>)}</div>

    </>
  )
}

export default App
