import React from 'react';
import StoryCard from '../Components/StoryCard';

class StoryBody extends React.Component {
  render() {
    return (
      <div className='story-card-container'>
        <StoryCard title='Sales of Dunder Mifflins Jupiter Branch has gone up 8000%' image='cat.png' body='body'></StoryCard>
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    )
  }
}

export default StoryBody;