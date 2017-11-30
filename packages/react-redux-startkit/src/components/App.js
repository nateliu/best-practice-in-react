import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import HelloWorld from '../containers/HelloWorld'

const App = () => (
  <div className="container">
    <div className="jumbotron">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <HelloWorld/>
    </div>
  </div>
)

export default App