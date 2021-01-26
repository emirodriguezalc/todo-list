import React from "react";
import './styles.css';

function Entry({ entry, setEntryArr, entryArr }) {

 const handleDelete = ((e) => {
  setEntryArr(entryArr.filter((selected) => selected.id !== entry.id))
 })

 const handleCheckbox = (() => {
  setEntryArr(entryArr.map(selected => {
   if (selected.id === entry.id) {
    selected.done = !entry.done
    if (selected.done) {
     selected.listPosition = selected.listPosition + entryArr.length;
    }
    if (!selected.done) {
     selected.listPosition = selected.listPosition - entryArr.length;
    };
   } return selected;
  }));
 })

 return (
  <section className="entry-wrapper">
   <h2 id="entryTitle" className="entry-title">{entry.title}</h2>
   <p id="entryBody" className="entry-body">{entry.body}</p>
   <div className="entry-action-container">
    {entry.done && <button onClick={(e) => handleDelete(e)} className="delete-button">Delete</button>}
    <input type="checkbox" onClick={handleCheckbox} className="entry-checkbox"></input>
   </div>

  </section>
 );
}

export default Entry;
