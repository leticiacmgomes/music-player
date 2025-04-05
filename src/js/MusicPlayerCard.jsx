import {useState, useRef} from 'react'

/*import de estilos*/
import '../css/MusicPlayerCard.css'

/*Import de componentes*/
import {SongInfo} from './SongInfo.jsx'
import {PlayerSettings} from './PlayerSettings.jsx'




/*import de imagens*/
import lostInCityLightsImg from '../assets/images/lost-in-city-lights-img.jpg'
import forestLullabyImg from '../assets/images/forest-lullaby-img.jpg'
import happyDayImg from '../assets/images/happy-day-img.jpg'
import happyRockImg from '../assets/images/happy-rock-img.jpg'
import indianImg from '../assets/images/indian-img.jpg'
import levaEternityImg from '../assets/images/leva-eternity-img.jpg'
import onceInParisImg from '../assets/images/once-in-paris-img.jpg'
import smokeImg from '../assets/images/smoke-img.jpg'
import summerWalkImg from '../assets/images/summer-walk-img.jpg'
import titaniumImg from '../assets/images/titanium-img.jpg'


/*Import de músicas*/
import forestLullaby from '../assets/audios/forest-lullaby.mp3'
import lostInCityLights from '../assets/audios/lost-in-city-lights.mp3'
import happyDay from '../assets/audios/happy-day.mp3'
import happyRock from '../assets/audios/happy-rock.mp3'
import indian from '../assets/audios/indian.mp3'
import levaEternity from '../assets/audios/leva-eternity.mp3'
import onceInParis from '../assets/audios/once-in-paris.mp3'
import smoke from '../assets/audios/smoke.mp3'
import summerWalk from '../assets/audios/summer-walk.mp3'
import titanium from '../assets/audios/titanium.mp3'


export const MusicPlayerCard = () => {
  
  let covers = [
    {
      'nameSong': 'Lost in the City Lights',
      'singer': 'Cosmo Sheldrake',
      'coverImg': lostInCityLightsImg,
      'song': lostInCityLights
    },
    {
      'nameSong': 'Forest Lullaby',
      'singer': 'Lesfm',
      'coverImg': forestLullabyImg,
      'song': forestLullaby
    },
    {
      'nameSong': 'Happy day',
      'singer': 'Stockaudios',
      'coverImg': happyDayImg,
      'song': happyDay
    },
    {
      'nameSong': 'Happy rock',
      'singer': 'Top-Flow',
      'coverImg': happyRockImg,
      'song': happyRock
    },
    {
      'nameSong': 'Indian',
      'singer': 'Vilatic_Music',
      'coverImg': indianImg,
      'song': indian
    },
    {
      'nameSong': 'Leva-Eternity',
      'singer': 'lemonmusicstudio',
      'coverImg': levaEternityImg,
      'song': levaEternity
    },
    {
      'nameSong': 'Once in Paris',
      'singer': 'Pumpupthemind',
      'coverImg': onceInParisImg,
      'song': onceInParis
    },
    {
      'nameSong': 'Smoke',
      'singer': 'SoulProdMusic',
      'coverImg': smokeImg,
      'song': smoke
    },
    {
      'nameSong': 'Summer Walk',
      'singer': 'folk_acoustic',
      'coverImg': summerWalkImg,
      'song': summerWalk
    },
    {
      'nameSong': 'Titanium',
      'singer': 'AlisiaBeats',
      'coverImg': titaniumImg,
      'song': titanium
    }
  ]
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  
  return(
    <div className="musicPlayerCard">
      <img src={covers[currentSongIndex].coverImg} alt="Imagem ilustrativa do cover" />
      <SongInfo song={covers[currentSongIndex].nameSong} singer={covers[currentSongIndex].singer}/>
      <PlayerSettings song={covers[currentSongIndex].song} setCurrentSongIndex={setCurrentSongIndex} covers={covers}/>
    </div>
  )
}