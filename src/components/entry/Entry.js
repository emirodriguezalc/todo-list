import './Entry.css';

function Entry({ title, body }) {
 return (
  <section className="Entry">
   <h1>{title}</h1>
   <h1>{body}</h1>
  </section>
 );
}

export default Entry;
