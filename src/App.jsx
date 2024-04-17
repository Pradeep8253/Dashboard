import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Tables from './components/Tables'
import Charts from './components/Charts'
import LayoutStatic from './components/LayoutStatic'
import LayoutSidenavLight from './components/LayoutSidenavLight'
import Login from './components/Login'
import Password from './components/Password'
import Register from './components/Register'
import Error401 from './components/Error401'
import Error404 from './components/Error404'
import Error500 from './components/Error500'
import { Default } from './components/Default'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Default />}>
          <Route index element={<Home />} />
          <Route path='/tables' element={<Tables />} ></Route>
          <Route path='/charts' element={<Charts />} ></Route>
          <Route path='/LayoutStatic' element={<LayoutStatic />} ></Route>
          <Route path='/LayoutSidenavLight' element={<LayoutSidenavLight />} ></Route>
          <Route path='/Error401' element={<Error401 />} ></Route>
          <Route path='/Error404' element={<Error404 />} ></Route>
          <Route path='/Error500' element={<Error500 />} ></Route>
        </Route>

        <Route path='/Login' element={<Login />} ></Route>
        <Route path='/Password' element={<Password />} ></Route>
        <Route path='/Register' element={<Register />} ></Route>
        <Route path='/Error401' element={<Error401 />} ></Route>
        <Route path='/Error404' element={<Error404 />} ></Route>
        <Route path='/Error500' element={<Error500 />} ></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App