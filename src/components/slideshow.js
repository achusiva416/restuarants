import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  const[data,setData]=useState([])
  const fetchData =async ()=>{
      await fetch('/restaurants.json')
      .then((data) =>data.json())
      .then((data)=>setData(data.restaurants))
  }
  useEffect(()=>{
      fetchData()

  },[])
  return (
    <Carousel slide={true} className="my-4">
      {
        data.map((item)=>(
          <Carousel.Item style={{ objectFit:'cover',objectPosition:'center',maxHeight:'590px'}}>
          <img 
            className="d-block w-100"
            src={item.photograph}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>{item.name}</h1>
           <h3>{item.neighborhood}</h3>
          </Carousel.Caption>
        </Carousel.Item>
          
        ))
      }
     
    </Carousel>
  );
}

export default Slide;