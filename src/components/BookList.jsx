import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../features/bookSlice'




const BookList = ({onHandleEdit}) => {

  const {books} = useSelector((state) =>(state.booksR))

  const dispatch = useDispatch()
  const handleDelete =(id) =>{
    dispatch(deleteBook(id))
  }

  const handleEdit =(book) =>{
    console.log(book)
  }
  return (
    <div className="book-list-container">
  <h2>List of Books</h2>
  {books && books.length > 0 ? (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} - {book.author} - {book.price} - {book.quantity}
          <button className="edit" onClick={() => onHandleEdit(book)}>Edit</button>
          <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : (
    <p>No books found</p>
  )}
</div>

  )
}

export default BookList
