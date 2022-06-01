import React from 'react';
import resumeDownload from "../../img/Resume.docx";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <nav>
        <div className="navbar z-20 bg-neutral text-primary-content">
          <div className="flex-1">
            <a className="btn normal-case text-xl" href="/">Portfolio</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li tabIndex="0">
                <a href="#home">Pages<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></a>
                <ul className="p-2 bg-neutral text-primary-content">
                  <li className="text-lg text-color-primary px-2 mx-2">
                    <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
                  </li>
                  <li className="px-2 mx-2">
                    <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                  </li>
                  <li className="px-2 mx-2">
                    <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                  </li>
                  <li className="px-2 mx-2">
                    <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                  </li>
                </ul>
              </li>
              <li tabIndex="0">
                <a href={resumeDownload} download="">Download Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );

}

export default Header;
