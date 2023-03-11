import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Img} from 'react-bootstrap';
import '../style/card.css'



function Restuarantcard(props) {

  
  const [isHovered, setIsHovered] = useState(false);
  return (
  
    <>
    <Card className="card"  onMouseOver={() => 
            setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            style={{ background: isHovered ? '#eee' : ''
             }}
             >
      <Card.Img variant="top" 
                src={props.item.photograph}
                onMouseOver={() => 
                setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                style={{ opacity: isHovered ? '0.8' : ''
                   }} />
      <Card.Body >
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
          {props.item.neighborhood}
          <p >Type : {props.item.cuisine_type}</p>
        </Card.Text>
        
        
      </Card.Body>
   
    </Card>
    
      </>
  );
}

export default Restuarantcard;