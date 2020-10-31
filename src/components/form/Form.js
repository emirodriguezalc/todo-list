import React from "react";
import './styles.css';

function Form({ entryArr, setEntryArr }) {
  const submitHandler = (e => {
    e.preventDefault()
    setEntryArr([
      ...entryArr,
      {
        title: document.getElementById('input-title').value,
        body: document.getElementById('input-body').value,
        done: false,
        id: Math.random()
      }
    ])
    document.getElementById('input-title').value = "";
    document.getElementById('input-body').value = "";
  })
  return (
    <section className="form-wrapper">
      <form onSubmit={(e) => submitHandler(e)} className="add-section-inputs">
        <input
          type='text'
          placeholder="insert title"
          id="input-title"
          class="entry-title-input"
        >
        </input>
        <textarea
          type='text'
          placeholder="insert body"
          id="input-body"
          class="entry-title-input"
        >
        </textarea>
        <div className="add-section-button">
          <button id="entryButton" className="entry-button" type="submit" >Add new entry</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
