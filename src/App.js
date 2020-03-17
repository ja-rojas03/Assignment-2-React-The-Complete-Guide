import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/Validation'
import CharComponent from './Char/Char'
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