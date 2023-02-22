import logo from './logo.svg';
import './App.css';
import { Link, Route, Router, Routes } from 'react-router-dom';
import First from './first/First';

function App() {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      <Route exact path="/" element={
        <>
          <First />
        </>
      } />
    </Routes>
  );
}

export default App;
