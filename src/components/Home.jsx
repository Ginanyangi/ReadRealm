import React,{ useState } from "react";
import axios from 'axios';

const Home = () => {
const [query, setQuery] = useState('');
const [books, setBooks] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [genre, setGenre ] = useState('');

const genres=['All', 'Fiction', 'Non-fiction', 'Mystery', 'Science Fiction', 'Fantasy', 'Biography', 'Romance'];

const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
        let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
            
        // If a genre is selected and it's not 'All', add it to the API query
        if (genre && genre !== 'All') {
            apiUrl += `+subject:${genre}`;
        }


        // Fetch books from the Google Books API based on the search query
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        setBooks(response.data.items);
    } catch (error) {
        console.error('Error fetching data:',error);
        setError(err);

    } finally {
        setLoading(false);
    }
};





return (
    <div>
        <h1>Book Search</h1>
        <input
                type="text"
                placeholder="Search for books"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

        {/* {Genre filter} */}
        <select value={genre} onChange={(e)=> setGenre(e.target.value)}>
           {genres.map((g) => (
            <option key={g} value={g}>
                {g}
            </option>
           ))}
        </select>

            {loading && <div>Loading...</div>}
            {error && <div>Error fetching data: {error.message}</div>}

            <div>
                {books.map((book) => (
                    <div key={book.id}>
                        <h2>{book.volumeInfo.title}</h2>
                        <p>{book.volumeInfo.authors?.join(', ')}</p>
                        <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                    </div>
                ))}
            </div>
    </div>
)
};
export default Home;