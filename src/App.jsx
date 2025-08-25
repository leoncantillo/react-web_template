import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<><Navbar /><Home /></>} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
