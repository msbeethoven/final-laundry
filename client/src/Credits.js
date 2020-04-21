import React from 'react';
import Icon from './icons';

const Credits = (props) => {
  return (
    <div className="credits">
      <div className="gh-credit">
        <a target="_blank" href="https://github.com/msbeethoven"><Icon name="github" width={100} fill={"#ffffff"} /></a>
      </div>
      <div className="email">
        <a href="mailto:seorisachs@gmail.com?Subject=Comments/Critiques of Laundry App" target="_top">
          <Icon name="email" width={100} fill={"#ffffff"} /> </a>
      </div>
    </div>
  )
}

export default Credits;