import headerImg from '../images/icon-512x512.png'

console.log(headerImg);

export default function Header() {
  let headerImg = require ('../images/icon-512x512.png');
  return (
    <nav className="header">
      <img src={headerImg}/>
      <h2>Meme Generator</h2>
      <h4>React Course - Project</h4>
    </nav>
  )
}