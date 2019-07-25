import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TodoTextInput from '../../components/TodoTextInput/TodoTextInput'
import { addTodo } from '../../actions/index'

export const Header = ({ addTodo }) => (
	<header className="header">
		<h1>
			Todo App
		</h1>
		<TodoTextInput
			newTodo
			onSave={(text) => {
				if (text.length !== 0) {
					addTodo(text)
				}
			}}
			placeholder="Write something ?"
		/>
	</header>
)

Header.propTypes = {
	addTodo: PropTypes.func.isRequired
}

export default connect(null, { addTodo })(Header)
