import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SelectionForm from './components/SelectionForm';
import Thanks from './components/Thanks';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/selection/fresher" element={<SelectionForm/>} />
      <Route path="/selection/fresher/thanks" element={<Thanks/>} />
     </Routes>
    </div>
  );
}

export default App;
