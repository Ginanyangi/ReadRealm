
import React, { useContext } from 'react';
import{ BooksContext }from '../components/ReadingListContext';


const ReadingList = () => {
    const { readingList } = useContext(BooksContext);

    return (
        <div>
                  <h1>Reading List</h1>
                <div className="grid grid-cols-4 gap-4">
                      {readingList.map((book) => (
                        <div key={book.id}>
                          <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                                <h3>{book.volumeInfo.title}</h3>
                                <p>{book.volumeInfo.authors?.join(', ')}</p>
                        </div>
                      ))}
                    </div>
                </div>   
    );
};

export default ReadingList;






