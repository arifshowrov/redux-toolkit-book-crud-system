import logo from './logo.svg';
import './App.css';
import BookList from  './components/BookList.jsx'
import BookForm from './components/BookForm.jsx';
import  {useState, useEffect} from 'react';


function App() {

  const handleEdit = (book) =>{
    setBookToEdit(book)
  }

  const handleCancelEdit = (book) =>{
    setBookToEdit(null)
  }


  const [bookToEdit, setBookToEdit] = useState(null)
  return (
    <div className='App'>
      

      <BookForm 
          bookToEdit ={bookToEdit}  
          onCancel={handleCancelEdit}
      
      />
      <BookList  onHandleEdit={handleEdit} />

      
    </div>
  );
}

export default App;
