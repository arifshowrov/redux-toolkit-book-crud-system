import { nanoid } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../features/bookSlice';


const BookForm = ({bookToEdit, onCancel}) => {

    const [book, setBook] = useState({
        title: '',
        author: '',
        price: '',  
        quantity: '',
    })  
    
    useEffect(() =>{
        if (bookToEdit){
            setBook(bookToEdit)
        }
    } ,[bookToEdit])


    const dispatch= useDispatch();


    const handleChange=(event) =>{
        const {name, value} = event.target;
        setBook((prevBook) =>({...prevBook,[name]:value}))
    }



    const handleSubmit  = (event) => {
        event.preventDefault();
        

        if( bookToEdit ){
            //update
            dispatch(updateBook(book))
        }else{
            dispatch(addBook({ ...book, id: nanoid()}))

        }

        setBook({
            title: '',
            author: '',
            price: '',  
            quantity: '',
        })
    }

     

  return (
    <div className="book-form-container">
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name='title'
      placeholder='Enter book title'
      value={book.title}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name='author'
      placeholder='author'
      value={book.author}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name='price'
      placeholder='Enter book price'
      value={book.price}
      onChange={handleChange}
      required
    />
    <input
      type="number"
      name='quantity'
      placeholder='Enter book quantity'
      value={book.quantity}
      onChange={handleChange}
      required
    />
    <button type='submit'>{bookToEdit ? 'Update Book' : 'Add Book'}</button>
    {bookToEdit && <button className="cancel" onClick={onCancel}>Cancel</button>}
  </form>
</div>

  )
}

export default BookForm
