import React from 'react';

import './App.css';
import StoryBody from './Components/StoryBody'
import TopHeader from './Components/TopHeaderFolder/TopHeader';
import TopNavBarHtml from './Components/TopNavBarHtml';

function App() {
  return (
    <div>
      <TopHeader />
      <TopNavBarHtml />
      <StoryBody />
    </div >
  );
}

export default App;
