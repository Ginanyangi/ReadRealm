import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


const BooksContext = createContext();
const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [readingList, setReadingList] = useState([]);
    // Function to add a book to the reading list
    const addBookToList = (book) => {
        console.log('Adding book:', book);
        setReadingList((prevList) => {
            const newList = [...prevList, book];
            console.log('Updated reading list', newList);
            return newList;
        });
    };
    useEffect(() => {
        // Post the reading list to the server when it changes
        axios.post('/api/readingList', readingList) // Adjust the API endpoint accordingly
            .then(response => {
                console.log('Reading List saved:', response);
            })
            .catch(error => {
                console.error('Error saving reading list', error);
                if (error.response) {
                    console.error('Response error:', error.response.status, error.response.data);
                } else if (error.request) {
                    console.error('Request error:', error.request);
                } else {
                    console.error('Error', error.message);
                }
            });
    }, [readingList]); // Trigger the effect when readingList changes
    return (
        <BooksContext.Provider value={{ books, setBooks, addBookToList, readingList }}>
            {children}
        </BooksContext.Provider>
    );
};
BooksProvider.propTypes = {
    children: PropTypes.node.isRequired
};
export { BooksContext, BooksProvider };








