import styles from './TodosActions.module.css'
import Button from "../UI/Button";
import {RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri'
function TodosActions({resetTodos, deleteComplitedTodos, completedTodosExist}){
  return(
    <div className={styles.todosActionsContainer}>
      <Button title='reset' onClick={resetTodos}><RiRefreshLine/></Button>
      <Button title='delete complited' onClick={deleteComplitedTodos} disabled={!completedTodosExist}><RiDeleteBin2Line/></Button>
    </div>
  )
}
export default TodosActions