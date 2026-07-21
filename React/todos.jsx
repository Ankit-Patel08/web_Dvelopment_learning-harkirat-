import {useState} from "react";

export default function Todos(){

    const [todos, setTodos] = useState([{
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
        setTodos(oldTodos);
    }
     
    return(
        <div>
            <input id="title" type="text" placeholder="Title"/>
            <input id="description" type="text" placeholder="Description"/>
            <br />
            <button onClick={addTodo}>Add todo</button>
            <br />
            {JSON.stringify(todos)}
        </div>
    );
}

function Todo(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.done ? " Task is Done" : " Task is Not Done"}</p>
        </div>
        
    );
}
