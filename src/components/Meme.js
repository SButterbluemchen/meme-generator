// import memesData from '../memesData.js'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Meme() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, []);

  //Click image change
  function getMemeImage() {
    const randomNumber = Math.round(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImg: url
    }));
  }
  
  const [className, setClassName] = useState('form-button')
  
// is active ? True / False ?
  //Button Style change
  function handleOnmouseOver() {
    setClassName('form-button menu-active');
  }
  function handleOnmouseLeave() {
    setClassName('form-button');
  }

  function handleChange(event) {
    const {name, type, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <article className="form">
        <input 
          type="text" 
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className={className} onClick={getMemeImage} onMouseOver={handleOnmouseOver} onMouseLeave={handleOnmouseLeave}>Get a new meme image 🖼</button>
      </article>
      <article className="meme">
      <figure>
          <img src={meme.randomImg} className="meme-img"/>
        </figure>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </article>
    </main>
  )
}
