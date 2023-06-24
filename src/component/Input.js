import { useState } from "react";
import classes from './Input.module.css';
import { FiPlusSquare } from "react-icons/fi";

function Input(props) {
    const [userInput, setUserInput] = useState('');

    const inputHandler = (e) =>{
        setUserInput(e.target.value);
    };

    const submitHandler = (e) =>{
        e.preventDefault();
        props.onCreate(userInput);
    };

    return(
        <div className={classes.container}>
            <input  className={classes.input}type="text" onChange={inputHandler}/>
            <FiPlusSquare className={classes.logo} size="30" type="submit" onClick={submitHandler}></FiPlusSquare>
        </div>
    );
}

export default Input;