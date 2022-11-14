import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main'; 
import Create from './components/Create';
import View from './views/View'
import Update from './components/Update';
// import Update from './components/Update';


function App() {
  return (
    <div className="App">
      
    
      <button className='all'> <Link to="/">back to home</Link> </button> &nbsp; &nbsp;
      <button className="new"><Link to="/pets/new">Add a pet to the shelter</Link></button> <br/>
      <br/>

      {/* Theater Stage */}
      <Routes>
        {/* Main - All Pets */}
        <Route path='/pets' element={<Main/>}/>

         {/* Main - One Pet */}
        <Route path='/pets/:id' element={<View/>}/>

           {/* Update */}
      <Route path='/pets/:id/edit' element={<Update/>}/>


        {/* Redirect */}
        <Route path='*' element={<Navigate to="/pets" replace/>}/>

        {/* Create */}
        <Route path='/pets/new' element={<Create/>}/>







      </Routes>




    </div>
  );
}

export default App;