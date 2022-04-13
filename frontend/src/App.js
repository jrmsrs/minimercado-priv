import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ListProducts from './components/pages/catalog/ListProducts'
import CreateProductFormik from './components/pages/catalog/CreateProductFormik'

function App() {
  return (
    <Router>
      <Header />
      <main className='flex-shrink-0'>
      <div className="container text-light">
        <Routes>
          <Route 
            exact path="/"
            element={<Home />}
          />
          <Route 
            path="/sobre"
            element={<About />}
          />
          <Route 
            path="/catalogo"
            element={<ListProducts />}
          />
          <Route 
            path="/add"
            element={<CreateProductFormik />}
          />
        </Routes>
      </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
