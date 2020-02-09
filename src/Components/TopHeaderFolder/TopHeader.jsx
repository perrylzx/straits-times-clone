import React from 'react';

import StraitsTime from '../TopHeaderFolder/StraitsTime'

class TopHeader extends React.Component {
  render() {
    return (
      <div className='straits-time-header'>
        <StraitsTime />
      </div>
    )
  }
}

export default TopHeader;