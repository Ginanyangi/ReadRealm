import axios from 'axios';
import {useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReadingListContext } from './components/ReadingListContext';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {addToReadingList} = useContext(ReadingListContext);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get ('https://www.googleapis.com/books/v1/volumes', {
                  params: {
                    q:'subject:politics',
                    orderBy:'newest',
                    maxResults:20
                  }  
                })
    
                setBooks(response.data.items);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:',error);
                
            }
        };
        fetchBooks();
    },[]);
    console.log(books);

 if (loading) {
    return <div> Loading...</div>
 }

    return (
        <div className="grid grid-cols-4 gap-4">
        
            { books.map((book) => (
                    <div key={book.id}>
                        
                         <Link to={`/books/${book.id}`} state={book}>
                         <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                         <h3>{book.volumeInfo.title}</h3>
                         <p>{book.volumeInfo.authors?.join(',')}</p>
                         <button> View Book</button>
                        </Link>
                        <button onClick={() => addToReadingList(book)}>Add to Reading List</button>
                    </div>
                ))
            }
        </div>
    );
    
};

export default BookList;