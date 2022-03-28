import memesData from '../memesData.js'
import { useState } from 'react';

export default function Meme() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  //Click image change
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.round(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImg: url
    }));
  }

  //Button Style change
  function handleOnmouseOver() {
    let button = document.querySelector('.form-button');
    button.classList.toggle("mouseOver");
  }
  function handleOnmouseLeave() {
    let button = document.querySelector('.form-button');
    button.classList.toggle("mouseOver");
  }

  return (
    <main>
      <article className="form">
        <input type="text" placeholder="Top text"/>
        <input type="text" placeholder="Button text"/>
        <button className="form-button" onClick={getMemeImage} onMouseOver={handleOnmouseOver} onMouseLeave={handleOnmouseLeave}>Get a new meme image 🖼</button>
        <figure>
          <img src={meme.randomImg} className="meme-img"/>
        </figure>
      </article>
    </main>
  )
}
