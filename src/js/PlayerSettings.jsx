import {useRef, useState, useEffect} from 'react'

import '../css/PlayerSettings.css'

export const PlayerSettings = ({song, setCurrentSongIndex, covers}) => {
  
  const audioRef = useRef(null)
  const [progressBar, setProgressBar] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isPaused, setIsPaused] = useState(true)
  
  let formatTime = (time) => {
    if(!time || isNaN(time)) return "00:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    
    return `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
  }

  let handleInput = (e) => {
    const audio = audioRef.current
    const newValue = (e.target.value / 100) * audio.duration
    audio.currentTime = newValue;
    setProgressBar(e.target.value)
  }
  
  let pause = () => {
    if (isPaused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
    
    setIsPaused(!isPaused)
  }
  
  let nextSong = () => {
    setCurrentSongIndex((prev) => {
      if(prev < covers.length - 1) {
        return prev + 1
      }
      
      return 0
    })
  }
  
  let prevSong = () => {
    setCurrentSongIndex((prev) => {
      if(prev > 0) {
        return prev - 1 
      }
      
      return covers.length - 1  
    })
  }
    
  
  useEffect(() => {
    
    if (!audioRef.current) {
      audioRef.current = new Audio()
    }
    
    const audio = audioRef.current;
    
    if (audio) {
      audio.src = song;
      audio.load()
      audio.play()
    }
    
    let updateProgress = () => {
      setProgressBar((audio.currentTime / audio.duration) * 100)
      setCurrentTime(audio.currentTime)
    }
    
    let updateDuration = () => setDuration(audio.duration)
    
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("timeupdate", updateProgress)
    audio.addEventListener("ended", nextSong)
    
    return () => {
      audio.pause()
      
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("timeupdate", updateProgress)
      audio.removeEventListener("ended", nextSong)
    }
    
  }, [song])
  
  return(
    <div className="playerSettings">
      <section className="progressBarContainer">
        
        <div className="timerContainer">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        
        <input type="range" value={progressBar} onChange={handleInput} min="0" max="100" step="0.1" className="progressBar" style={{background: `linear-gradient(to right, #C93B76 ${progressBar}%, white ${progressBar}%)`}}/>
      </section>
      
      <section className="playerControls">
        <div className="stopAndPlayFillReverse" onClick={prevSong}></div>
      
        <div className="playFillContainer" onClick={pause}></div>
      
        <div className="stopAndPlayFill" onClick={nextSong}></div>
      </section>
    </div>
  )
}