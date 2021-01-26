import React from "react";
import './styles.css';
import Entry from '../entry/Entry';

function ListItems({ entryArr, setEntryArr }) {
 entryArr.sort((a, b) => a.listPosition - b.listPosition);
 return (
  entryArr.map((entry) => {
   return (
    <li id="list" className={`entry-container ${entry.done && 'done'}`} key={entry.id} data-testid="list-item" >
     <Entry entry={entry} setEntryArr={setEntryArr} entryArr={entryArr} />
    </li>
   )
  })

 );
}

export default ListItems;
