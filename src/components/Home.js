import React,{ useEffect, useState } from "react"
import {Container,Row,Col,Img} from 'react-bootstrap'
import Restuarantcard from "./card"
import Slide from './slideshow'
function Home(){
    const[data,setData]=useState([])
    const fetchData =async ()=>{
        await fetch('/restaurants.json')
        .then((data) =>data.json())
        .then((data)=>setData(data.restaurants))
    }
    useEffect(()=>{
        fetchData()

    },[])
    

    return(
        <>
         <Container className="py-4 my-4">
            <h1>RESTUARENT DETAILS</h1>
            <Row>
            <Col sm={12} md={10} lg={8} xl={6} >
            <Slide></Slide>
            </Col>
            {data.map((item)=>(
                
                <Col sm={9} md={7} lg={5} xl={3} className="my-4">
                 
                <Restuarantcard item={item}/>
                </Col>
                
             ))}
           </Row>
         </Container>
        </>
    )
}
export default Home;