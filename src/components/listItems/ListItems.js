import { isCompositeComponentWithType } from 'react-dom/test-utils';
import './ListItems.css';
import Entry from '../entry/Entry';

function ListItems({ entryArr }) {
 return (
  entryArr.map((entry) => (
   <section className="ListItems">
    <Entry title={entry.title} body={entry.body} />
   </section>
  ))

 );
}

export default ListItems;
