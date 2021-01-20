import React, { Component } from 'react'

class Robot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      mass: 0
    }
  }
  render() {
  	return (
      <div>
        <label>name: </label>
        <input value={this.state.name} onChange={evt => this.setState({ name: evt.target.value })} id="name"/>
        <br/>
        <label>type: </label>
        <input value={this.state.type} onChange={evt => this.setState({ type: evt.target.value })} id="type"/>
        <br/>
        <label>mass: </label>
        <input value={this.state.mass} onChange={evt => this.setState({ mass: evt.target.value })} type="number" id="mass"/>
        <br/>
        <button value="add" onClick={() => this.props.onAdd(this.state)}>add</button>
      </div>
    )
  }
}

export default Robot
