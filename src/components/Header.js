import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
	render(){
    return (
      
      <header>
        <Link to={'/'}> Home</Link>
        <Link to={'/todos'}> todo</Link>
      </header>
      
    )
  }
}
export default Header