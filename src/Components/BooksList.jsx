import {useState} from "react";
import BookDetails from "./BookDetails";
import Modal from "react-modal";
import "./BooksList.css"

function BooksList({books}) {
    const [selectedBook,setSelectedBook]=useState({});
    const [modalIsOpen,setModalIsOpen]=useState(false)

    const openBookDetails = (book) => {
        setSelectedBook(book);
        setModalIsOpen(true)
    }


    return (
        <div>
            {books.map(book=>
                <div className="listStyle" onClick={()=>openBookDetails(book)}>
                    <button  className="openModalGrid" onClick={Modal}>About</button>
                <img className="imgList" src={book.img} alt=""/>
                <h2 className="titleList"><b>Title:</b> {book.title}</h2>
                <p className="autorsList"><b>Authors:</b> {book.authors.join(', ')}</p>
                <p className="genreList"> <b>Categories:</b> {book.categories} </p>
            </div>)}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={()=>setModalIsOpen(false)}
            >
                <BookDetails book={selectedBook}/>
            </Modal>
        </div>
    );
}

export default BooksList;
