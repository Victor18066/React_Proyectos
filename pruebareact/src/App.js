import './App.css';
import React, {useState, useEffect} from 'react';
import getGifs from './services/getGifs';

const GIFS = ['https://media3.giphy.com/media/SP6nsoM3MgLFS/200w.webp?cid=ecf05e47y1f4bg8b6og9suwdta8ohd21sga76xbzwrmnvcbk&rid=200w.webp&ct=g',
              'https://media4.giphy.com/media/WRriRIfVO0cRW/giphy.webp?cid=ecf05e47y1f4bg8b6og9suwdta8ohd21sga76xbzwrmnvcbk&rid=giphy.webp&ct=g']

const DIF_GIFS = ['https://media2.giphy.com/media/Hs6f36KUBjWww/200w.webp?cid=ecf05e47y1f4bg8b6og9suwdta8ohd21sga76xbzwrmnvcbk&rid=200w.webp&ct=g']

function App() {
  const [gifs, setGifs]= useState(GIFS);

  useEffect(function () {
    //setGifs(DIF_GIFS)
    getGifs().then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        { gifs.map(singleGif => <img src={singleGif} />) }
        <button onClick={() => setGifs(DIF_GIFS)}>Cambiar gifs</button> 
      </section>
    </div>
  );
}

export default App;






