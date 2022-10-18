import { useState } from "react";
import $ from "jquery";

  
function Hello() {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
    const [print, setPrint] = useState(false);
  
    const handleChange = (e) => {
        setName(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };
    
    return (
        <div className="Hello">
            <form
                action="http://127.0.0.1:8000/"
                method="POST"
                onSubmit={(event) => handleSumbit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChange(event)}
                />
                <br />
                <button onClick={()=>setPrint(true)} type="submit">Submit</button>
            </form>
            {
              print?
              <h1>Hello {name}, have a good day!</h1>
              :null
            }
        </div>
    );
}
  
export default Hello;