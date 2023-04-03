
import './App.css';

import { Routes,Route } from 'react-router-dom'
import Read from './component/Read';
import Create from './component/create';
import Edit from './component/Edit';
const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
