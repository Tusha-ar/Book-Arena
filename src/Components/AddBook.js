import React, { useState } from 'react'
import addBook from './Redux/actions/actions'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import TextField from '@material-ui/core/TextField';
import './css/AddBook.css'


    const AddBook = (props) =>{
        //const BookDetails = useSelector(state => state.BookDetails)
        const [BookName, setBookName]  = useState("");
        const [Author, setAuthor]  = useState("");
        const [Price, setPrice]  = useState("");
        const [Genre, setGenre]  = useState("");
        const [Info, setInfo]  = useState("");
        const [Open, setOpen] = useState(false);
        //const [yes, setYes] = useState(false);
        //const BookDetails = useSelector(state => state.BookDetails);
        const dispatch = useDispatch();
        
        //Post data wala function
        
        //Add data to variables from text field
        const handleChange=(e)=>{
            switch(e.target.name){
                case "Name":
                    setBookName(e.target.value);
                    break;
                case "Author":
                    setAuthor(e.target.value);
                    break;
                case "Price":
                    setPrice(e.target.value);
                    break;
                case "genre":
                    setGenre(e.target.value);
                    break;
                case "BookInfo":
                    setInfo(e.target.value);
                    break;
                default:
                    //do NOthing...
                    break;
            }
        }
        //Onclick wale bhaiya
        const handleClick=async (e)=>{
            e.preventDefault();
            const object={
                BookName: BookName,
                Author: Author,
                Price: Price,
                Genre: Genre,
                BookInfo: Info
            }
            dispatch(addBook(object));
            let res = await axios.post(
                'http://localhost:5000/AddBook', 
                object,
                {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            )
            console.log(res);
            if(res.data.status === "Saved")
            {
                setOpen(!Open);
            }
        }
        const toggleModal = () =>{
            setOpen(!Open);
        }
        return (
            <div className="AddBookPage">
                <h1 className="head">Add a Book</h1>
                <form onSubmit={handleClick} autoComplete="off">
                <TextField className="input" label="Book Name" variant="standard" type="text" name="Name" placeholder="Add Book Name" onChange={handleChange} required/><br/><br/>
                <TextField className="input" label="Add Author" variant="standard" type="text" name="Author" placeholder="Add author" onChange={handleChange}/><br/><br/>
                <TextField className="input" label="Price" variant="standard" type="number" name="Price" placeholder="Add Price" onChange={handleChange} required/><br/><br/>
                <TextField className="input" label="Genre" variant="standard" type="text" name="Genre" placeholder="Add genre" onChange={handleChange}/><br/><br/>
                <TextField className="input" label="BookInfo" variant="standard" type="text" name="BookInfo" placeholder="Add Book Info" onChange={handleChange}/><br/><br/>
                <button type="submit" className="btn btn-dark custon-btn">Add Book
                </button>
                </form>
                <Modal isOpen={Open}>
                    <ModalHeader toggle={toggleModal}>Book added Sucessfully</ModalHeader>
                    <ModalBody>ThakYou For adding a book....</ModalBody>
                </Modal>
            </div>
            )
         }
    export default AddBook;
    