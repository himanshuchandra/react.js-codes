import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image
console.log(logo); // /logo.84287d09.png
function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}



// addding a svg
// import { ReactComponent as Logo } from './logo.svg';
// const App = () => (
//   <div>
//     {/* Logo is an actual React component */}
//     <Logo />
//   </div>
// );


export default Header;
