import classes from './Todoitem.module.css';
import {FaRegTrashAlt} from "react-icons/fa";
import { FaRegCircle,FaRegCheckCircle,FaCheck  } from "react-icons/fa";

function Todoitem({todo, onRemove, id, onComplete, check}) {
    const completeHanlder = () =>{
        onComplete(id)
        console.log(todo);
    };

    const deleteHandler = () =>{
        onRemove(id);
    };

    return(
       <div className={classes.container}>
            <li className={classes.item}>
                <div className={classes.result}>
                    {check ? <FaRegCheckCircle /> : <FaRegCircle />}
                </div>
                {todo}
                <div className={classes.buttons}>
                <FaCheck className={classes.complete} onClick={completeHanlder} />
                <FaRegTrashAlt className={classes.delete} onClick={deleteHandler} />
                </div>
            </li>
        </div>       
    );
}

export default Todoitem;