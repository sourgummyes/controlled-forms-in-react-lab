import { useState } from 'react';

const Bookshelf = (props) => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  const [newBook, setNewBook] = useState({ title: '', author: '' })

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewBook(prevBook => ({
      ...prevBook, 
      [name]: value, 
    }));
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    console.log('test')
    if (newBook.title && newBook.author) {
      setBooks([...books, { ...newBook }])
      setNewBook({ title: '', author: '' })
    }
  }


    return (
        <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleAddBook}>
        <input
        type="text"
        name="title"
        value={newBook.title}
        onChange={handleInputChange}/>
        <input
        type="text"
        name="author"
        value={newBook.author}
        onChange={handleInputChange}/>
        <button type="submit">Add Book</button>
    </form>
    {/* Form will go here */} 
  </div>
  <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <h4>{book.author}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookshelf