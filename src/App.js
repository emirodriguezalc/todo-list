import React, { useState } from "react";
import './App.css';
import Form from './components/form/Form';
import ListItems from './components/listItems/ListItems'

function App() {
  // const entryArr = [{ title: 'lala', body: 'lele' }, { title: 'hola', body: 'chau' }, { title: 'hi', body: 'bye' }];
  const [inputValue, setInputValue] = useState({});
  const [entryArr, setEntryArr] = useState({});
  console.log(inputValue, 'app');
  return (
    <div className="App">
      <Form setInputValue={setInputValue} />
      {inputValue && <ListItems entryArr={entryArr} />}
    </div>
  );
}

export default App;
