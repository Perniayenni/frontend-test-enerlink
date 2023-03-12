import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/layout';
import { Home } from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Layout><Home/></Layout> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
