import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>   
        </Routes>
      </Router>
    </Provider>
    </>
  )
}

export default App
