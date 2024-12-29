import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

// Import your pages
const Home = () => <div className="min-h-screen pt-32 bg-gray-50">Home Page</div>;
const Shop1 = () => <div className="min-h-screen pt-32 bg-gray-50">Shop 1</div>;
const Shop2 = () => <div className="min-h-screen pt-32 bg-gray-50">Shop 2</div>;
const Shop3 = () => <div className="min-h-screen pt-32 bg-gray-50">Shop 3</div>;
const Login = () => <div className="min-h-screen pt-32 bg-gray-50">Login Page</div>;

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop1" element={<Shop1 />} />
          <Route path="/shop2" element={<Shop2 />} />
          <Route path="/shop3" element={<Shop3 />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;