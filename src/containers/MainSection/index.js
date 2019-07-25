import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../actions'
import MainSection from '../../components/MainSection/MainSection'
import { getCompletedTodoCount } from '../../selectors/index'

const mapStateToProps = (state) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)