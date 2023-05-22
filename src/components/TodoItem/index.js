// Write your code here
import './index.css'

const TodoItem = props => {
  const {deleteTodo, item} = props
  const {id, title} = item

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <>
      <li key={id} className="list">
        <div className="licontainer">
          <p className="title">{title}</p>
          <button value={id} type="button" onClick={onDelete} className="btn">
            Delete
          </button>
        </div>
      </li>
    </>
  )
}
export default TodoItem
