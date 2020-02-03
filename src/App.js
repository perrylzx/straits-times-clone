import React from 'react';
import './App.css';
import Navbar1 from './Components/Navbar'
import StoryCard from './Components/Stories';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div>
      <h3 className='container0'>
        <div className='header'>
          <h1>THE STRAITS TIME</h1>
        </div>

        <div className='iconsHeader'>
          <h3 className='test'>placeholder for icons</h3>
        </div>
      </h3>

      <div className='Navbar'>
        <div className='navButtons'>
          <h3>ST</h3>
        </div>
        <div className='navButtons'>
          <h3>SINGAPORE</h3>
        </div>
        <div className='navButtons'>
          <h3>POLITICS</h3>
        </div>
        <div className='navButtons'>
          <h3>ASIA</h3>
        </div>
        <div className='navButtons'>
          <h3>WORLD</h3>
        </div>
        <div className='navButtons'>
          <h3>VIDEOS</h3>
        </div>
        <div className='navButtons'>
          <h3>LIFESTYLE</h3>
        </div>
        <div className='navButtons'>
          <h3>FOOD</h3>
        </div>
        <div className='navButtons'>
          <h3>MORE</h3>
        </div>
        <div className='navButtons'>
          <h3>SEARCHBUTTON</h3>
        </div>
      </div>

      <div className='topStories'>
        <h1>TOP STORIES</h1>
        <hr></hr>
      </div>

      <div className='container1'>
        <div>
          <StoryCard title='asdsdasds' image='cat.png'></StoryCard>
        </div>
        <div>
          <StoryCard></StoryCard>
        </div>
        <div>
          <StoryCard></StoryCard>
        </div>
        <div>
          <StoryCard></StoryCard>
        </div>
        <div>
          <StoryCard></StoryCard>
        </div>
        <div>
          <StoryCard></StoryCard>
        </div>
        <div>
          <StoryCard></StoryCard>
        </div>
        <div>
          <StoryCard></StoryCard>
        </div>
        <div>
          <StoryCard></StoryCard>
        </div>
      </div>

    </div>
  );
}

export default App;
