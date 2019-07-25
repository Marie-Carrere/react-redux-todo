import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../../containers/FilterLink/index'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters'

const FILTER_TITLES = {
	[SHOW_ALL]: 'All',
	[SHOW_ACTIVE]: 'In Progress',
	[SHOW_COMPLETED]: 'Ended',
}

const Footer = (props) => {
	const { activeCount, completedCount, onClearCompleted } = props
	const itemWord = activeCount >= 2 ? 'remaining tasks' : 'remaining task'

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>
					{activeCount || 'None'}
				</strong> {itemWord}
			</span>
			<ul className="filters">
				{
					Object.keys(FILTER_TITLES).map((filter) =>
						(
							<li key={filter}>
								<FilterLink filter={filter}>
									{ FILTER_TITLES[filter] }
								</FilterLink>
							</li>
						))
				}
			</ul>
			{
				!!completedCount
					&& <button
						type="button"
						className="clear-completed"
						onClick={onClearCompleted}
					>Delete</button>
			}
		</footer>
	)
}

Footer.propTypes = {
	completedCount: PropTypes.number.isRequired,
	activeCount: PropTypes.number.isRequired,
	onClearCompleted: PropTypes.func.isRequired
}

export default Footer
