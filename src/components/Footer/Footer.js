import React from 'react';
import "../../components/Footer/footer.css";

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
        Copyright &#169; {currentYear} Daniel M. All rights reserved.
    </footer>
  )
}

export default Footer;