import React from "react";
import './styles.css';

function Form({ entryArr, setEntryArr }) {

  const handleUserKeyPress = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      submitHandler(e)
    }
  };

  const submitHandler = (e => {
    e.preventDefault()
    if (document.getElementById('input-title').value && document.getElementById('input-body').value) {
      document.getElementById('checkingBubble').setAttribute('className', 'img-checker hide');
      setEntryArr([
        ...entryArr,
        {
          title: document.getElementById('input-title').value,
          body: document.getElementById('input-body').value,
          done: false,
          id: Math.random(),
          listPosition: entryArr.length + 1,
        }
      ])
      document.getElementById('input-title').value = "";
      document.getElementById('input-body').value = "";
    } else {
      document.getElementById('checkingBubble').setAttribute('className', 'img-checker show');
    }
  })
  return (
    <section className="form-wrapper">
      <form onSubmit={(e) => submitHandler(e)} className="add-section-inputs">
        <input
          type='text'
          placeholder="Insert title of your new entry, a short one"
          id="input-title"
          className="entry-title-input"
        >
        </input>
        <textarea
          type='text'
          placeholder="Insert description of your new entry, but don't try too hard, remember that less is more"
          id="input-body"
          className="entry-body-input"
          onKeyPress={handleUserKeyPress}
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
