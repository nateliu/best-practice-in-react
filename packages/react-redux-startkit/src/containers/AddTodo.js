import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="input-group">
              <input ref={node => {
                  input = node
                }} className="form-control"/>
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary">Add Todo</button>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
