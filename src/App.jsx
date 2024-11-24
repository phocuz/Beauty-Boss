import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
