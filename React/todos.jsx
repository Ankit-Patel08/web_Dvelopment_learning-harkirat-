import {useState} from "react";

export default function todos(){

    const [todos, setodos] = useState([{
        title : "Go to gym",
        description : "Go to the gym daily",
        done : false
    }]);

    function addTodo(){
        let oldTodos = [...todos];// already existed  
        oldTodos.push({  // adding new one 
            title:document.getElementById("title").value,
            description:document.getElementById("description").value,
            done:"true"
        })
        setodos(oldTodos);
    }
     
    return(
        <div>
            <input id="title" type="text" placeholder="Title"/>
            <input id="description" type="text" placeholder="Description"/>
            <br />
            <button onClick={addTodo}>Add todo</button>
            <br />
        </div>
    );
}
