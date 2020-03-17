import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
import { uuid } from 'uuidv4'

class App extends Component {
  
  state = {
    text: '',
    length: 0,
    arr: []
  };


  textLengthHandler = (event) => {
    console.log(event.target.value)
    let length = 0;
    const text = event.target.value;
    if (event) {
      length = text.length;
      console.log(length)
    }
    const arr = text.split('').map(char => ({
      id: uuid(),
      char,
    }));


    this.setState(() => ({text, length, arr}));
    console.log(this.state)


  }

  deleteCharHandler = (index) => {
    const {text, arr} = this.state;
    const newArr = [...arr];
    const textArray = [...text];
    textArray.splice(index,1);
    newArr.splice(index,1);
    const fixedText = textArray.join('')
    const length = fixedText.length;
    this.setState({text: fixedText,length,arr: newArr})
  }

  
  
  render() {
    const {text,length,arr} = this.state;
    const chars = (
      <div>
        {
          arr.map((el, index) => {
            return( <CharComponent 
              char={el.char}
              key={el.id} 
              changed={() => this.deleteCharHandler(index)} />)
          })
        }
      </div>
    );


    return (
      <div className="App">
        <input type="text" onChange={this.textLengthHandler} value={text}/>
        <p>{text}</p>
        <p>Text length is {length}</p>
        <ValidationComponent length={length} />
        {chars}
      </div>
    );
  }
}

export default App;

/*
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
*/