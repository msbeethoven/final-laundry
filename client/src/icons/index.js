import React from 'react';

import Email from './Email';
import Github from './Github';

const Icon = props => {
  switch (props.name){
    case "email":
      return <Email {...props} />
    case "github":
      return <Github {...props} />
    default:
      return;
  }
}

export default Icon;