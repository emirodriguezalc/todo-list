import './Form.css';

function Form({ setInputValue, entryArr, setEntryArr }) {
  //esto deberia tenerlo en el padre en realidad

  const submitHandler = (e => {
    let title = document.getElementById('input-title').value;
    let body = document.getElementById('input-body').value;
    let object = {
      title, body
    }

    e.preventDefault()
    setInputValue(object)
    document.getElementById('input-title').value = "";
    document.getElementById('input-body').value = "";
  })
  return (
    <section className="Form">
      <form onSubmit={(e) => submitHandler(e)}>
        <input type='text' placeholder="insert title" id="input-title">
        </input>
        <textarea type='text' placeholder="insert body" id="input-body">
        </textarea>
        <button id="entryButton" className="entry-button" type="submit" >Add new entry</button>
      </form>
    </section>
  );
}

export default Form;
