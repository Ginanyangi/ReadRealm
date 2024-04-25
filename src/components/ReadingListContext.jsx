
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


const BooksContext = createContext();


const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]); 
  const [readingList, setReadingList]=useState([]);

  // You can add other context-related functions here (e.g., fetching books from an API)

  const addBookToList = (book) => {
    console.log('Adding book:',book);
    setReadingList((prevList) => {
        const newList =[...prevList,book];
        console.log('Updated reading list',newList);
        return newList;
    });
    
   
 useEffect(() => {
    axios.post('./components/ReadingList', readingList)
      .then(response => {
        console.log('Reading List saved:',response);
      })
      .catch(error => {
        console.error('Error saving reading list',error);
        if (error.response) {
            console.error('Response error:', error.response.status, error.response.data);
     } else if (error.request) {
        console.error('Request error:', error.request);
     } else {
        console.error('Error', error.message);
     }
      });
    },[readingList]);

  return (
    <BooksContext.Provider value={{ books, setBooks , addBookToList, readingList }}>
        {children}
    </BooksContext.Provider>
  );
};
}

export { BooksContext, BooksProvider };





