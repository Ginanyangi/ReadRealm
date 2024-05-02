import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const truncateDescription = (description) => {
  const maxLength = 600; // Maximum length of description
  if (description.length <= maxLength) {
    return description;
  } else {
    return description.slice(0, maxLength) + '...';
  }
};


const Book = () => {
  const { state: book } = useLocation();


  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: Date.now(),
        text: newComment,
        author: 'User'
      };
      setComments((prevComments) => [...prevComments, newCommentObj]);
      setNewComment('');
    }
  };



  return (
    <div className="max-w-md mx-auto bg-brown-300 shadow-lg rounded-lg grid grid-cols-2 md:grid-cols-2 gap-4 ">
      <div className='col-span-1 p-4'>
        <h1 className='text-2xl font-semibold mb-4'>BOOK DETAILS</h1>
        <ul>
          <li>
            <strong>Title:</strong> {book.volumeInfo.title}<br />
            <strong>Authors:</strong> {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}<br />
            <strong>Year of Publication:</strong> {book.volumeInfo.publishedDate}<br />
            {book.volumeInfo.imageLinks && (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book cover" />
            )}
            <p>{truncateDescription(book.volumeInfo.description || 'No description available')}</p>
            {book.volumeInfo.description && book.volumeInfo.description.length > 200 && (
              <button onClick={() => window.open(book.volumeInfo.infoLink)}
                className="bg-red-950 text-white px-4 py-2 rounded-md hover:bg-orange-900 focus:outline-none text-center"
              >Read more</button>
            )}
          </li>
        </ul>
      </div>
      {/* Comments Section */}
      <div className='col-span-1 p-4' >
        <h2 className='text-xl font-semibold mb-4'>Comments</h2>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder='Add a comment...'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
            className="w-full px-3 py-2 mb-2 border rounded-md"
          />
          <button type="submit" className="bg-red-950 text-white px-4 py-2 rounded-md hover:bg-orange-900">
            Submit
          </button>
        </form>

        <div className="comments-list mt-4">
          {comments.map((comment) => (
            <div key={comment.id} className="mb-3 p-3 border-b border-gray-300">
              <strong>{comment.author}</strong>: {comment.text}
            </div>
          ))}
        </div>


      </div>

    </div>



  );
};

export default Book;