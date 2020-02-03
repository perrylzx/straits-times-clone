import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class StoryCard extends React.Component {
  render() {
    return (
      <div className='cardContainer'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <div className='cardTitle'>
              <Card.Title>{this.props.title}</Card.Title>
            </div>
            <Card.Text>{this.props.body}</Card.Text>
            <div className='cardImage'>
              <Card.Img variant="top" src={this.props.image} width='200px' />
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default StoryCard;