import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksList from './components/BooksList';
import Header from './components/Header';
import AddBook from './components/AddBook';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [books, setBooks] = useLocalStorage('books', [{name: "jk", age: 22}]);
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<BooksList />} />
      <Route path='/add' element={<AddBook {...{books,setBooks}} />} />
    </Routes>
    </>
  )
}

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>);