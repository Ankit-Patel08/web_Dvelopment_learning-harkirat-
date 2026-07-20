import {useState} from "react"

 export  default function Bulb() {
 const [bulbOn, setbulbOn] = useState(true);   // we are passing the state varibale from the parent(also known as rolling up the state) 

    return <div>
        <BulbState bulbOn = {bulbOn} />
        <ToggleBulb setbulbOn = {setbulbOn} />
    </div>
}

function BulbState({bulbOn}){

    return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
    </div>
}

function ToggleBulb({setbulbOn}){

    function toggle(){
        setbulbOn(c => !c)
    }

    return <div>
      <button onClick={toggle}>OnOff bulb</button>
    </div>
}
