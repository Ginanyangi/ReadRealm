import React,{ useState } from "react";
import axios from 'axios';

const Home = () => {
const [query, setQuery] = useState('');
const [books, setBooks] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
// const [genre, setGenre ] = useState('');
const [subject, setSubject] = useState('');

const subjects= ['Fiction', 'Non-fiction','Mystery', 'Science Fiction', 'Fantasy', 'Biography', 'Romance' ]


const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
        let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
            
        // If a genre is selected and it's not 'All', add it to the API query
        // if (genre && genre !== 'All') {
        //     apiUrl += `+subject:${genre}`;
        // }
        if (subject) {
            apiUrl += `+subject:${subject}`;
        }


        // Fetch books from the Google Books API based on the search query
        const response = await axios.get(apiUrl);
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
        <h1 className="text-5xl font-bold text-centre color-brown-200">Book Search</h1><br />
        <input
                type="text"
                placeholder="Search for books"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='w-48 pt-2 border rounded-md border-blue-400'
            />
            {/*{Subject filter} */}
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
       <option value="">All Subjects</option>
         {subjects.map((subj) => (
        <option key={subj} value={subj}>
            {subj}
        </option>
    ))}
</select>
           

        {/* {Genre filter} */}
        {/* <select value={genre} onChange={(e)=> setGenre(e.target.value)}>
           {genres.map((g) => (
            <option key={g} value={g}>
                {g}
            </option>
           ))}
        </select> */}
        <button onClick={handleSearch} className="bg-red-950 text-white px-4 py-2 rounded-md hover:bg-orange-900 focus:outline-none text-center">Search</button>

            {loading && <div>Loading...</div>}
            {error && <div>Error fetching data: {error.message}</div>}

            <div className="grid grid-cols-3 gap-4">
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