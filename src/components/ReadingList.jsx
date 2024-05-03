
import React, { useContext, useEffect } from 'react';
import{ BooksContext }from '../components/ReadingListContext';


const ReadingList = () => {
    const { readingList } = useContext(BooksContext);
    
    useEffect(() => {
        console.log('reading list has changed');
        console.log('Current readingList state:' ,readingList);
    },[readingList]);


    return (
        <div className="p-6 bg-deep-brown text-black ">
                  <h1 className="text-3xl font-bold mb-4">Add Books to your Reading List</h1>
                <div className="grid grid-cols-2  md:grid-cols-4 gap-4">
                      {readingList.map((book) => (
                        <div key={book.id} className='bg-brown-800 p-4 rounded-lg shadow-lg hover:shadow-xl'> 
                          <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="w-full h-50 object-cover rounded-t-lg" />
                           <div className="mt-2">
                                <h3 className="text-xl font-semibold text-white" >{book.volumeInfo.title}</h3>
                                <p className="text-sm text-black">{book.volumeInfo.authors?.join(', ')}</p>
                                </div>
                        </div>
                      ))}
                    </div>
                </div>   
    );
};

export default ReadingList;






