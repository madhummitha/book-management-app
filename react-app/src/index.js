// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles.scss';
// import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BooksList from './components/BooksList';
// import Header from './components/Header';
// import AddBook from './components/AddBook';
// import useLocalStorage from './hooks/useLocalStorage';
// import EditBook from './components/EditBook';
// import BooksContext from './context/BooksContext';

// const App = () => {
//   const [books, setBooks] = useLocalStorage('books', []);
//   return (
//     <BrowserRouter>
//         <Header />
//           <div className='main-content'>
//             <BooksContext.Provider value={{books, setBooks}}>
//               <Routes>
//                 <Route path='/' element={<BooksList />} />
//                 <Route path='/add' element={<AddBook />} />
//                 <Route path='/edit/:id' element={<EditBook />} /> 
//                 {/* {...{books,setBooks}}  */}
//                 <Route path='*' element={<Navigate to="/" />} />
//               </Routes>
//             </BooksContext.Provider>
//           </div>
//     </BrowserRouter>
//   )
// }

// const root = document.getElementById('root');
// const reactRoot = ReactDOM.createRoot(root);
// reactRoot.render(<React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// </React.StrictMode>);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import useLocalStorage from './hooks/useLocalStorage';
import BooksContext from './context/BooksContext';
import AppRoutes from './router/AppRoutes';

const App = () => {
  const [books, setBooks] = useLocalStorage('books', []);
  return (
    <>
      <Header />
      <div id="root"></div>
      <div className="main-content">
        <BooksContext.Provider value={{ books, setBooks }}>
          <AppRoutes />
        </BooksContext.Provider>
      </div>
      </>
  );
};

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>);

export default App;
