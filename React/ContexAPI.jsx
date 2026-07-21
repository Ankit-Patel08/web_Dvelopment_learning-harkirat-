// using the contex api to share the variable to it's decendent without passing to it's decendent which is not using that variable
// means we are sharing the varibale to that decendent which is needed that varible also known as the API DRILLING  
// And this is achieved by CONTEX API 

import { useState, createContext, useContext } from "react";

const bulbContex = createContext();

export default function App(){

 const [bulbOn, setbulbOn] = useState(false);

    return <div>
        <bulbContex.Provider value={{bulbOn , setbulbOn}}>
        <Light />
        </bulbContex.Provider>
    </div>
}

function Light(){

    return <div>
        <LightBulb/>
        <LightSwitch/>
    </div>
}

function LightBulb(){

    const {bulbOn} = useContext(bulbContex);
 
    return <div>
       { bulbOn ? "Bulb is ON" : "Bulb is OFF"};
    </div>
}

function LightSwitch(){

    const {bulbOn, setbulbOn} = useContext(bulbContex);

    function toggle(){
        setbulbOn( c => !c);
    }

    return <div>
        <button onClick={toggle}>ON/OFF</button>
         </div>
}





// we can also do this  more CLEANER way to use CONTEX API 



import { useState, createContext, useContext } from "react";
const bulbContex = createContext();




function Bulbprovider({children}){    //(Wrapper component) this we can put in a separate file and import 
    const [bulbOn, setbulbOn] = useState(false);

    return <bulbContex.Provider value = {{bulbOn, setbulbOn}}>
        {children}
     </bulbContex.Provider>
}


export default function App(){


    return <div>
        <Bulbprovider>
        <Light />
        </Bulbprovider>
    </div>
}

function Light(){

    return <div>
        <LightBulb/>
        <LightSwitch/>
    </div>
}

function LightBulb(){

    const {bulbOn} = useContext(bulbContex);
 
    return <div>
       { bulbOn ? "Bulb is ON" : "Bulb is OFF"};
    </div>
}

function LightSwitch(){

    const {bulbOn, setbulbOn} = useContext(bulbContex);

    function toggle(){
        setbulbOn( c => !c);
    }

    return <div>
        <button onClick={toggle}>ON/OFF</button>
         </div>
}