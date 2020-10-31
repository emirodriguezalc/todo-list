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
   } return selected;
  }));

 })
 return (
  <section className="entry-wrapper">
   <h2 id="entryTitle" class="entry-title">{entry.title}</h2>
   <p id="entryBody" class="entry-body">{entry.body}</p>
   <input type="checkbox" onClick={handleCheckbox}></input>
   <button onClick={(e) => handleDelete(e)}>Delete</button>
  </section>
 );
}

export default Entry;
