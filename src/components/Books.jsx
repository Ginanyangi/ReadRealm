import { useLocation } from 'react-router-dom';

const truncateDescription = (description) => {
    const maxLength = 200; // Maximum length of description
    if (description.length <= maxLength) {
      return description;
    } else {
      return description.slice(0, maxLength) + '...';
    }
  };


const Book = () => {
    const { state: book } = useLocation();
    return (
        <div className="max-w-md mx-auto bg-brown-300 shadow-lg rounded-lg ">
        <h1>BOOK DETAILS</h1>
        <ul>
            <li>
            <strong>Title:</strong> {book.volumeInfo.title}<br />
            <strong>Authors:</strong> {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}<br />
            <strong>Year of Publication:</strong> {book.volumeInfo.publishedDate}<br />
            {book.volumeInfo.imageLinks && (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book cover" />
            )}
             <p>{truncateDescription(book.volumeInfo.description || 'No description available')}</p>
            {book.volumeInfo.description && book.volumeInfo.description.length > 200 && (
              <button onClick={() => window.open(book.volumeInfo.infoLink)}>Read more</button>
             )}  
            </li>
        </ul>
        </div>
            
    );
};

export default Book;