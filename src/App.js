import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as cardActions from './actions/card';
import { bindActionCreators } from 'redux';
import Popup from "reactjs-popup";

import CardList from './CardList';

import './App.css';


class App extends Component {
  render() {
    const { lanes, addLane, removeCard, removeLane, changeCard } = this.props;

    let id = lanes.length;

    const newLane = {
		  id: id,
		  title: 'Your task',
		  cards:
		   [
			   	{id: 0, title: 'Task 1', description: 'Your text'},
				  ]
    };  

  return (
      <div className="App">
      <button onClick={addLane.bind(this, newLane)}>add</button>
          <div className="wrap_card-list">{
            lanes.map( lane => (
              <div className="card_list" key={lane.id}>
                
                <h2>{lane.title}<button onClick={removeLane.bind(this, lane.id)}>Remove</button></h2>
                <CardList  cards={lane.cards} id={lane.id} remove={removeCard} change={changeCard} />
                <Popup trigger={<button>Add card</button>} position="right center">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Head:
                      <input type="text"  />
                      Text:
                      <input type="text"  />
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
                </Popup>
              </div>  
            )
            )}
          </div>
      </div>
    );
  }
}



const mapStateToProps = ({cards}) => ({
  lanes: cards.lanes
});
  
const mapDispatchToPtops = dispatch => ({
  ...bindActionCreators(cardActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToPtops)(App);
