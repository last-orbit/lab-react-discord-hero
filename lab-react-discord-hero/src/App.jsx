// src/App.jsx
import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuLogo from './assets/menu-icon.png';
import friends from './assets/discord-background.png';

function App() {
  return (
    <>
      <nav>
        <img id="discord-icon"src={discordLogo} alt='menu icon' />
        <img id="menu-icon" src={menuLogo} alt='menu logo' />
      </nav>
      <section>
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <button id="mac-button">Download for Mac</button>
        <button id='window-button'>Open Discord in your Browser</button>
        <img id='friends'src={friends} alt="friends hangout" />
      </section>
    </>

  );
}

export default App;
