import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

import "./AddTodo.css";

class AddTodo extends Component {
    state = {
        todoText: '',
        errors: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTodo = e => {
        e.preventDefault();

        // Check for empty to-do
        if (this.state.todoText.length === 0) return this.setState({ errors: `Please enter something to-do` })

        // check if to-do is longer than 26 characters
        if (this.state.todoText.length > 26) return this.setState({ errors: `Sorry, to-do's can't be longer than 26 Characters` })

        this.props.addTodo(this.state.todoText)

        this.setState({
            todoText: '',
            errors: ''
        })
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.addTodo}>
                    <input className={this.state.errors.length === 0 ? `add-todo-input` : 'error-input'} type="text" name="todoText" onChange={this.onChange} value={this.state.todoText} placeholder={this.state.errors.length === 0 ? 'Enter to-do...' : 'You forgot to enter a to-do'} />
                    <button type="submit">Add to-do</button>
                </form>

                {this.state.errors.length !== 0 ? <span className="error">{this.state.errors}</span> : null}
            </div>
        )
    }
}

export default connect(null, { addTodo })(AddTodo);
