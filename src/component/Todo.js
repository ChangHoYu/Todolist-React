import Todoitem from "./Todoitem";
import classes from './Todo.module.css';
import Card from "./UI/Card";

function Todo ({todo, onRemove, onComplete}) {
    
    return(
        <Card>
            <ul className={classes.list}> 
                {
                    todo.map((todo)=> 
                    <Todoitem 
                    key={todo.id} 
                    id={todo.id} 
                    todo={todo.text}
                    check={todo.check}
                    onRemove={onRemove}
                    onComplete={onComplete}
                    />)
            }
            </ul>
        </Card>  
    );
}

export default Todo;