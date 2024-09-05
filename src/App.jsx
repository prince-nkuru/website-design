import { useState } from 'react'
import './App.css'
import Background from './components/background/Background';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/hero/Hero';

function App() {
  let heroData = [
    {text1: 'Dive into', text2: 'What you love'},
    {text1: 'Indulge ', text2: 'your passion'},
    {text1: 'Give in to ', text2: 'your passion'}
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <>
    <div>
      <Background playStatus = {playStatus} heroCount = {heroCount}/>
      <Navigation/>
      <Hero
      setPlayStatus = {setPlayStatus}
      setHeroCount = {setHeroCount}
      heroData = {heroData[heroCount]}
      heroCount = {heroCount}
      playStatus = {playStatus}
      />
    </div>
    </>
  )
}

export default App
