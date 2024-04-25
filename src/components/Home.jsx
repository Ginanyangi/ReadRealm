import React,{ useState } from "react";
import axios from 'axios';

const Home = () => {
const [query, setQuery] = useState('');
const [books, setBooks] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [subject, setSubject] = useState('');

const subjects= ['Fiction', 'Non-fiction','Mystery', 'Science Fiction', 'Fantasy', 'Biography', 'Romance' ]


const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
        let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
            
    
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
    <div className="min-h-screen bg-emerald-200 flex flex-col items-center justify-center text-black">
        <h1 className="text-5xl font-bold mb-4">Book Search</h1><br />
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <input
                type="text"
                placeholder="Search for books"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='w-48 pt-2 border rounded-md border-brown-600 text-brown-800 focus:outline-none'
            />
            {/*{Subject filter} */}
            <select value={subject} 
             onChange={(e) => setSubject(e.target.value)}
             className="p-2 border rounded-md border-brown-600 text-brown-800 focus:outline-none"
            >
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
        
        <button onClick={handleSearch}
         className="bg-red-950 text-black px-4 py-2 rounded-md hover:bg-brown-700 focus:outline-none text-center">
            Search
            </button>
        </div>

            {loading && <div className="mt-4">Loading...</div>}
            {error && <div className="mt-4 text-red-500">Error fetching data: {error.message}</div>}

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {books.map((book) => (
                    <div key={book.id} className="bg-white p-4 rounded-md shadow-md text-brown-800">
                        <h2 className="font-semibold text-xl">{book.volumeInfo.title}</h2>
                        <p className="text-brown-600">{book.volumeInfo.authors?.join(', ')}</p>
                        <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="mt-2" />
                    </div>
                ))}
            </div>
    </div>
)
};
export default Home;