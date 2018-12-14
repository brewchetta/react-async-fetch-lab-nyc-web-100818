import React from 'react'

const URL = 'http://api.open-notify.org/astros.json'

export default class App extends React.Component {

  state = {
    list: []
  }

  componentDidMount() {
    fetch(URL).then(r=>r.json()).then(r => {
      this.setState({list: r.people})
    })
  }


  render() {
    return (
      <div>{this.state.list.map(p => <p key={p.name}>{p.name}</p>)}</div>
    )
  }
}
