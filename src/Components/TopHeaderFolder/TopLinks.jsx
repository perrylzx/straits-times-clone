import React from 'react';

class TopLinks extends React.Component {
  render() {
    return (
      <div>
        <div className='top-left-links'>
          <a>Singapore | </a>
          <a>International | </a>
          <a>ST CLASSIFIEDS | </a>
          <a>ST+ REWARDS | </a>
          <a>More</a>
        </div>

        <div className='top-right-links'>
          <a>LOG IN | </a>
          <a>SUBSCRIBE | </a>
          <a>PRINT EDITION | </a>
          <a>ePAPER | </a>
        </div>
      </div>
    )
  }
}

export default TopLinks;