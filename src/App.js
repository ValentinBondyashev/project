import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as cardActions from './actions/card';
import { bindActionCreators } from 'redux';

import './App.css';
/*const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      cards: 
    },
    {
      id: 'lane2',
      title: 'Completed',
      cards: []
    },
    
  ]
}
*/



class App extends Component {
  render() {
    const { cards, addCard, removeCard, changeTitle } = this.props;
    const card = {id: 'Card1', title: '', description: ''};
    return (
      <div className="App">
      <button onClick={addCard.bind(this, {card})}>add</button>
          <Card.Group>{
            cards.map( card => {
                return (
                  <Card key={card.id} >
                    <button onClick={removeCard.bind(this, card.id)}>Remove</button>
                    <Card.Content>
                      <Card.Header onClick={changeTitle.bind(this, 'dsd')}>{card.title}</Card.Header>
                      <Card.Meta>{card.title}</Card.Meta>
                    </Card.Content>
                  </Card>
                )
            })}
          </Card.Group>
      </div>
    );
  }
}



const mapStateToProps = ({cards}) => ({
  cards: cards.cards
});
  
const mapDispatchToPtops = dispatch => ({
  ...bindActionCreators(cardActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToPtops)(App);
