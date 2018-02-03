import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class App extends Component {
  state = {
    gifts: [],
    currentMaxId: 0
  }

  addGift = () => {
    this.setState({
      gifts: [
        ...this.state.gifts,
        {
          id: this.state.currentMaxId + 1
        }
      ],
      currentMaxId: this.state.currentMaxId + 1
    })
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {
            this.state.gifts.map(gift => {
              return (<div key={gift.id}>{gift.id}</div>)
            })
          }
        </div>
        <Button className='btn-add' onClick={this.addGift}> Add Gift </Button>
      </div>

    )
  }
}

export default App;