import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Gallery extends Component {
  render(){
    return(
      <div>Gallery Component Goes here
        <Link to='/'>Go To App Page</Link>
      </div>
    );
  }
}

export default Gallery;
