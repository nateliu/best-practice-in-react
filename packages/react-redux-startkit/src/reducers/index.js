import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import helloWorld from './helloWorld'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  helloWorld
})

export default todoApp