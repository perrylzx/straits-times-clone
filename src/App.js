import React from 'react';
import './App.css';
import StoryCard from './Components/StoryCard';

function App() {
  return (
    <div>
      <h3 className='header-container'>
        <div className='header'>
          <h1>THE STRAITS TIME</h1>
        </div>
        <div className='icons-header'>
          <h3 className='test'>placeholder for icons</h3>
        </div>
      </h3>

      <div className='top-navbar-container'>
        <div className='nav-buttons'>
          <h3>ST</h3>
        </div>
        <div className='nav-buttons'>
          <h3>SINGAPORE</h3>
        </div>
        <div className='nav-buttons'>
          <h3>POLITICS</h3>
        </div>
        <div className='nav-buttons'>
          <h3>ASIA</h3>
        </div>
        <div className='nav-buttons'>
          <h3>WORLD</h3>
        </div>
        <div className='nav-buttons'>
          <h3>VIDEOS</h3>
        </div>
        <div className='nav-buttons'>
          <h3>LIFEST-bLE</h3>
        </div>
        <div className='nav-buttons'>
          <h3>FOOD</h3>
        </div>
        <div className='nav-buttons'>
          <h3>MORE</h3>
        </div>
        <div className='nav-buttons'>
          <h3>SEARCHBUTTON</h3>
        </div>
      </div>

      <div className='top-stories'>
        <h1>TOP STORIES</h1>
        <hr></hr>
      </div>

      <div className='storycard-container'>
        <div>
          <StoryCard title='Sales of Dunder Mifflins Jupiter Branch has gone up 8000%' image='cat.png' body='asd'></StoryCard>
        </div>
        <div>
          <StoryCard />
        </div>
        <div>
          <StoryCard />
        </div>
        <div>
          <StoryCard />
        </div>
        <div>
          <StoryCard />
        </div>
        <div>
          <StoryCard />
        </div>
        <div>
          <StoryCard />
        </div>
        <div>
          <StoryCard />
        </div>
        <div>
          <StoryCard />
        </div>
      </div>

    </div>
  );
}

export default App;
