import React, { createContext, useState } from 'react';

export const ReadingListContext = createContext();

export const ReadingListProvider = ({children}) => {
    const [readinglist, setReadingList] = useState ([]);

    const addToReadingList =(book) => {
        setReadingList((prevList) => [...prevList,book]);
    };

  return (
    <ReadingListContext.Provider value={{readinglist, addToReadingList}}>
        {children}
    </ReadingListContext.Provider>
  );
};