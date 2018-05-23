import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Popup from "reactjs-popup";
import { Button, Input } from 'semantic-ui-react';

import { connect } from 'react-redux';
import * as cardActions from './actions/card';
import { bindActionCreators } from 'redux';


class CardList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputName: '',
            inputTask: ''
        }
    }
    changeInputName = (e) => {
        this.setState({inputName : e.target.value})
    }

    changeInputTask = (e) => {
        this.setState({inputTask : e.target.value})
    }
    
    clearInputName = () => {
        this.setState({inputName : ''})
    }
    
    clearInputTask = () => {
        this.setState({inputTask: ''})
    }

    render(){
        const{
            cards,
            changeCard,
            remove, 
        } = this.props
    return(
        <Card  >
            {
                cards.map(card => (
                    <Card.Content key={card.id}>
                      <Card.Header>{card.title}
                        <Button circular icon='remove' onClick={remove.bind(this, this.props.id,card.id)} ></Button>
                      </Card.Header>
                      <Card.Meta>{card.description}</Card.Meta>
                      <Popup  trigger={<Button circular  icon='edit' />} position="right center">
                        <Card.Content>
                            <Card.Header><Input placeholder='Name card...' onClick={this.clearInputName} onChange={this.changeInputName} value={this.state.inputName} /></Card.Header>
                            <Card.Header><Input placeholder='Task...' onClick={this.clearInputTask}  onChange={this.changeInputTask} value={this.state.inputTask} /></Card.Header>
                            <Card.Meta><Input type="submit"  onClick={changeCard.bind(this,this.props.id, card.id,this.state.inputName, this.state.inputTask )} value="Edit" /></Card.Meta>  
                        </Card.Content>
                        </Popup>
                    </Card.Content>
                ))
                
            }
             
        </Card>
    )
 }
}

  
const mapStateToProps = ({crds}) => ({

});
  
const mapDispatchToPtops = dispatch => ({
  ...bindActionCreators(cardActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToPtops)(CardList);