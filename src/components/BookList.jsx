import axios from 'axios';
import {useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BooksContext } from './ReadingListContext';


const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addBookToList}= useContext(BooksContext);
    
    

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get ('https://www.googleapis.com/books/v1/volumes', {
                  params: {
                    q:'subject:history',
                    orderBy:'newest',
                    maxResults:30
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        
            { books.map((book) => (
                    <div key={book.id}   className="bg-brown-800 p-4 rounded-lg shadow-lg hover:shadow-xl">
                        
                         <Link to={`/books/${book.id}`} state={book} className="block">
                         <img src={book.volumeInfo.imageLinks?.thumbnail} 
                           alt={book.volumeInfo.title}
                           className="w-full h-50 object-cover rounded-t-lg mb-2"
                            />                        
                         <h3>{book.volumeInfo.title}</h3>
                         <p>{book.volumeInfo.authors?.join(',')}</p>
                         <button className="mt-4 bg-red-950 hover:bg-brown-600 text-white px-4 py-2 rounded-md focus:outline-none"> 
                            View Book</button><br /><br />
                        </Link>
                        
                         <button>
                            <Link to={"/readinglist"} onClick={() =>addBookToList(book)}
                            className="block text-center mt-4 bg-red-950 text-white px-4 py-2 rounded-md  focus:outline-none text-center"
                            >
                                Add Book to Reading List</Link>
                         </button>
                        
                    </div>
                ))
            }
        </div>
    );
    
};

export default BookList;