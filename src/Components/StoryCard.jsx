import Card from 'react-bootstrap/Card';
import React from 'react';

class StoryCard extends React.Component {
  render() {
    return (
      <div>
        <Card className='story-card'>
          <Card.Body>
            <div>
              <Card.Title>{this.props.title}</Card.Title>
            </div>
            <Card.Text>{this.props.body}</Card.Text>
            <div>
              <Card.Img className='story-card-image' variant="top" src={this.props.image} />
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default StoryCard;