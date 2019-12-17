import React, { Component } from 'react'

export default class UserForm extends Component {
    render(props) {
        return (
            <form onSubmit={this.props.nameSearch}>
                <input type="text" name="name" placeholder="name"/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
