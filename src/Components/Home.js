import React, { Component } from 'react'
import book from '../book.gif';

class Home extends Component {
    render() {
        return (
            <div>
                <div style={{color:"white", height:"100%", width:"40%", background:"#5b5656", textAlign:"center", padding:"50px 50px 100px"}}>
                    <h1>The Book Arena</h1>
                    <div style={{marginTop:"50px", wordSpacing:"3px", letterSpacing:"1px"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </div>
                </div>
                <div style={{background:"linear-gradient(to top left,#552244 50%,#6e5773 40%)", position:"absolute", left:"70%", top:"10%"}}>
                    <img src={book} alt="book"/>
                </div>
            </div>
        )
    }
}

export default Home
