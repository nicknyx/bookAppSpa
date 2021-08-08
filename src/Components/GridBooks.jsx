import BookDetails from "./BookDetails";
import {useState} from "react";
import Modal from 'react-modal';
import '../App.css'

function GridBooks({books}) {
    const [selectedBook, setSelectedBook] = useState({});
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openBookDetails = (book) => {
        setSelectedBook(book);
        setModalIsOpen(true)


    }

    return (
        <div style={{display: 'flex', justifyContent: "space-around", width: '100%', flexWrap: 'wrap'}}>


            {books.map(book =>
                <div className="gridStyle" style={{width: "15rem"}} onClick={() => openBookDetails(book)}>
                    <button  className="openModalGrid" onClick={Modal}>About</button>
                    <img className="imgGrid" src={book.img} alt=""/>
                    <h2 className="titleGrid"><b>Title:</b> {book.title}</h2>
                    <p className="autorsGrid"><b>Authors:</b> {book.authors.join(', ')}</p>
                    <p className="genreGrid"><b>Categories:</b> {book.categories} </p>



                </div>)}

            <Modal

                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >

                <BookDetails book={selectedBook}/>
            </Modal>
        </div>
    );
}

export default GridBooks;
