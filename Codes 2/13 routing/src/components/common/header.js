import React from 'react';
import './header.css';
import FirstComponent from '../../components/firstComponent/firstC';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <p>Header view</p>
      </div>
    )
  }

 

};

export default Header;