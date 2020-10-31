import React from "react";
import './styles.css';
import Entry from '../entry/Entry';

function ListItems({ entryArr, setEntryArr }) {
 return (
  entryArr.map((entry) => (
   <li className={`entry-container ${entry.done && 'done'}`} key={entry.id} >
    <Entry entry={entry} setEntryArr={setEntryArr} entryArr={entryArr} />
   </li>
  ))

 );
}

export default ListItems;
