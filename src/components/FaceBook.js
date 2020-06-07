import React, { Component } from 'react';
import './FaceBook.css'
import PropTypes from 'prop-types';

export default class FaceBook extends Component {
  render() {
    const { title, imageURL, desc } = this.props;
    return(
      <div className='wrap-book'>
        <div className='image'>
          <img  src={imageURL}
                width={380}
                height={480}
                alt='photo'
          />
        </div>
        <div className='title'>
          <h3>
            {title}
          </h3>
        </div>
        <div className='desc'>
          <p>
            {desc}
          </p>
        </div>
        <div className-='someButton'>
          <button>Add to cart</button>
          <button>View</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

FaceBook.defaultProps = {
  title: 'No Title'
}

FaceBook.propTypes = {
  imageURL: PropTypes.string.isRequired,
  //Title
  title: PropTypes.string.isRequired,
  /**Mô Tả*/
  desc: PropTypes.string.isRequired
}