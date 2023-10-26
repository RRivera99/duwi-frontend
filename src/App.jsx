import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import About from './components/AboutUs/AboutUs'
import Register from './components/Register/Register'
import { Navbar } from './components/Navbar/Navbar'
import './index.css'
import MovieDetail from './components/MovieDetail/MovieDetail'
import SeriesDetail from './components/SeriesDetail/SeriesDetail'
import FormCreate from './components/FormCreate/FormCreate'
import Cards from './components/Cards/Cards'
import DashboardPage from './components/dashboard/dashboard'
import Donation from './components/Donation/Donation'
import FavoriteMovies from './components/FavoriteMovies/FavoriteMovies'
import FavoriteSeries from './components/FavoritesSeries/FavoritesSeries'
import DashboardAdmin from './components/Admin/DasboardAdmin'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/movies' element={<Cards type='movies'/>}/>
      <Route path='/series' element={<Cards type='series'/>}/>
      <Route path='/movie/:_id' element={<MovieDetail/>}/>
      <Route path='/serie/:_id' element={<SeriesDetail/>}/>
      <Route path='/formCreateEdit/:type/:id' element={<FormCreate/>}/>
      <Route path='/formCreateEdit/' element={<FormCreate/>}/>
      <Route path='/dashboard' element={<DashboardPage/>}/>
      <Route path='/donaciones' element={<Donation/>} />
      <Route path='/favoritemovies' element={<FavoriteMovies/>}/>
      <Route path='/favoriteseries' element={<FavoriteSeries/>}/>
      <Route path='/admin/*' element={<DashboardAdmin/>}/>
    </Routes>
   </div>
  )
}

export default App
