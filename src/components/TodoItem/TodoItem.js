import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from '../TodoTextInput/TodoTextInput'

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  _handleClick = () => {
    this.setState({ editing: true })
  }

  _handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props
    const { editing } = this.state

    let element
    if(editing) {
      element = (
        <TodoTextInput 
          text={todo.text}
          editing={editing}
          onSave={(text) => this._handleSave(todo.id, text)}
        />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <label onClick={this._handleClick}>
            {todo.text}
          </label>
          <button
            type="button"
            className="destroy"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      )
    }

    return(
      <li className={classnames({
        completed: todo.completed,
        editing: editing
      })}>
        {element}
      </li>
    );
  }
}

export default TodoItem