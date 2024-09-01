import { createSlice } from "@reduxjs/toolkit";

const initialState = {books: [
    {id: 1, 
        title: 'Book 1', 
        author: 'Author 1' , 
        price: 10.99, 
        quantity: 10
    },
    {id: 2, 
        title: 'Book 2', 
        author: 'Author 2' , 
        price: 90.99, 
        quantity: 20
    }, 
    {id: 3, 
        title: 'Book 3', 
        author: 'Author 3' , 
        price: 12.99, 
        quantity: 15
    }






]}

const bookSlice = createSlice ( {
    name: 'books',
    initialState: initialState,
    reducers:{
        deleteBook:(state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !=id)
        }, 
        
        updateBook:(state, action) => {
            const{id,  title, author, price, quantity} = action.payload;


            const exisitingBook = state.books.find((book) =>book.id==id)
            if(exisitingBook){
                exisitingBook.title = title
                exisitingBook.author = author
                exisitingBook.price = price
                exisitingBook.quantity = quantity

            }
        },
            
            
            addBook:(state, action) => {
                state.books.push(action.payload)
                
        },
    },
})


export const {deleteBook, addBook, updateBook}  = bookSlice.actions;

export default bookSlice.reducer;