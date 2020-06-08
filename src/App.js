import React, { Component } from 'react';
import './App.css';

import FaceBook from './components/FaceBook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FaceBook
          title="Tây Tiến111"
          desc="Tác phẩm Tây Tiến"
          imageURL="https://res.cloudinary.com/nnhungcoderx/image/upload/v1591289041/kmfgbgrpvxc4xiuwcdlc.jpg"
        />
      </div>
    );
  }
}

export default App;
