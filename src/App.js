import React, { useState } from "react";
import './App.css';
import Form from './components/form/Form';
import ListItems from './components/listItems/ListItems';
import Header from './components/header/Header'

function App() {
  const [entryArr, setEntryArr] = useState([]);
  return (
    <div className="App">
      <Header />
      <Form setEntryArr={setEntryArr} entryArr={entryArr} />
      <ul class="entry-list-container">
        <ListItems entryArr={entryArr} setEntryArr={setEntryArr} />
      </ul>

    </div>
  );
}

export default App;
