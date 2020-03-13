import React, { useEffect, useState } from 'react'
import axios from 'axios';
import load from '../load.gif';
import Empty from './Empty';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


const ShowBooks = () =>{
        const [size, setSize] = useState(0);
        const [BookDetail, setBookDetail] = useState([]); 
        const [Loading, setLoading] = useState(true);
        

    useEffect(() => {
        axios.get("http://localhost:5000/books")
            .then(res =>{
                setBookDetail(res.data)
                setSize(res.data.length);
                setLoading(false);
            })
            .catch(err=>{
                console.log(err);
            })
    })
    if(Loading)
    {
        return(
        <div>Loading . . . . 
        </div>
        )
    }
    else if(size>0 && Loading === false)
        {
    return (
        <div>
            {BookDetail.map((book)=>
            <div>
            <Card style={{marginTop:"20px"}}>
              <CardImg top width="100%" src={load} alt="Card image cap" style={{height: "90%", width: "15%", paddingTop: "20px"}}/>
              <CardBody>
                <CardTitle>{book.BookName}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>{book.BookInfo}</CardText>
                <Button className="btn btn-info" href={'//www.github.com/Tusha-ar'} target="_blank" style={{textDecoration:"none", color:"white"}}>Button</Button>
              </CardBody>
            </Card>
          </div>
            )} 
        </div>
    )}
    else{
            return(
            <Empty />
        )}
    
}


export default ShowBooks;
