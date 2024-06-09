import logo from './logo.svg';
import './App.css';
import AddCoropatient from './components/AddCoropatient';
import SearchCoropatient from './components/SearchCoropatient';
import DeleteCoropatient from './components/DeleteCoropatient';
import ViewCoropatient from './components/ViewCoropatient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddCoropatient/>}/>
      <Route path='/search' element={<SearchCoropatient/>}/>
      <Route path='/delete' element={<DeleteCoropatient/>}/>
      <Route path='/view' element={<ViewCoropatient/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
