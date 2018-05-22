import React from 'react';
import { Card } from 'semantic-ui-react';
import Popup from "reactjs-popup";


const CardList = (cards) => {

    return(
        <Card  >
            {
                cards.cards.map(card => (
                    <Card.Content key={card.id}>
                      <Card.Header>{card.title}<button onClick={cards.remove.bind(this, cards.id,card.id)}>remove </button></Card.Header>
                      <Card.Meta>{card.description}</Card.Meta>
                      <Popup trigger={<button>Change card</button>} position="right center">
                        <Card.Content>
                            <Card.Header><input type="head"  /></Card.Header>
                            <Card.Header><input type="text"  /></Card.Header>
                            <Card.Meta><input type="submit" value="Submit"  /></Card.Meta>
                        </Card.Content>
                        </Popup>
                    </Card.Content>
                ))
                
            }
             
        </Card>
    )
}

  
export default CardList;