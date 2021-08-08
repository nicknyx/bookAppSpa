function BookDetails({book}) {


    return (
        <div>
            <img src={book.img} alt=""/>
            <h2>{book.title}</h2>
            <p>{book.authors.join(', ')}</p>
            <p>{book.description}</p>
            <p>{book.categories}</p>


        </div>
    );

}

export default BookDetails;
