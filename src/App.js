import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as cardActions from './actions/card';
import { bindActionCreators } from 'redux';
import Popup from "reactjs-popup";
import { Button, Input } from 'semantic-ui-react';

import CardList from './CardList';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        inputHead: '',
        inputTask: '',
        inputLaneHead:''
    }
  }

  changeInputHead = (e) => {
    this.setState({inputHead : e.target.value})
  }

  changeInputTask = (e) => {
      this.setState({inputTask : e.target.value})
  }

  changeInputLaneHead = (e) => {
    this.setState({inputLaneHead : e.target.value})
  }

  clearInput = () => {
    this.setState({inputLaneHead: ''})
  }

  render() {
    const { lanes, addLane,addCard, removeCard, removeLane, changeNameLane} = this.props;

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
      <Button circular icon='add' onClick={addLane.bind(this, newLane)}/>
          <div className="wrap_card-list">{
            lanes.map( lane => (
              <div className="card_list" key={lane.id}>
                <div className="lane_header">
                <Popup trigger={<h2>{lane.title}</h2>} position="right center">
                  <div>
                    <Input type="text" onClick={this.clearInput} onChange={this.changeInputLaneHead} value={this.state.inputLaneHead}  />
                    <Input type="submit" value="Change name" onClick={changeNameLane.bind(this, lane.id,this.state.inputLaneHead  )} />
                  </div>
                </Popup>
                  
                  <Button  circular icon='remove'onClick={removeLane.bind(this, lane.id)}></Button>
                </div>
                <CardList  cards={lane.cards} id={lane.id} remove={removeCard}  />
                <Popup trigger={<Button circular icon='add'></Button>} position="right center">
                  <div>
                    <label>
                      Head:
                      <Input type="text" onChange={this.changeInputHead} value={this.state.inputHead}  />
                      Text:
                      <Input type="text" onChange={this.changeInputTask} value={this.state.inputTask} />
                    </label>
                      <Input type="submit" value="Add card" onClick={addCard.bind(this, lane.id, lane.cards.length,this.state.inputHead, this.state.inputTask  )} />
                  </div>
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
  lanes: cards.lanes,
});
  
const mapDispatchToPtops = dispatch => ({
  ...bindActionCreators(cardActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToPtops)(App);
