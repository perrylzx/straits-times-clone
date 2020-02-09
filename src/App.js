import React from 'react';

import './App.css';
import StoryBody from './Components/StoryBody'
import TopHeader from './Components/TopHeaderFolder/TopHeader';
import TopNavBarHtml from './Components/TopNavBarHtml';
import TopLinks from './Components/TopHeaderFolder/TopLinks';

function App() {
  return (
    <div>
      <TopLinks />
      <TopHeader />
      <TopNavBarHtml />
      <StoryBody />
    </div >
  );
}

export default App;
