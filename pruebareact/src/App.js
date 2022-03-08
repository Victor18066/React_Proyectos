import './App.css'
import React, {useState} from 'react'
//import Gif from './components/Gif'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from "wouter"

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/gif/panda'>Gifs de pandas </Link>
        <Link to='/gif/mono'>Gifs de monos </Link>
        <Link to='/gif/mapache'>Gifs de mapaches </Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
      </section>
    </div>
  )
}










