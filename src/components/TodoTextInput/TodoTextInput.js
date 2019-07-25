import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text || ''
    }
  }

  _handleSubmit = (e) => {
    const text = e.target.value.trim()
    if(e.which === 13) {
      this.props.onSave(text)
      if(this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  _handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  _handleBlur = (e) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    const { editing, newTodo, placeholder } = this.props
    const { text } = this.state

    return (
      <input className={
        classnames({
          edit: editing,
          'new-todo': newTodo
        })}
        type="text"
        placeholder={placeholder}
        autoFocus="true"
        value={text}
        onBlur={this._handleBlur}
        onChange={this._handleChange}
        onKeyDown={this._handleSubmit}
      />
    );
  }
}

export default TodoTextInput