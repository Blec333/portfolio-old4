import React from 'react';

function Footer() {
  return (
    <>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>©2022 - Brennan LeClair</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://github.com/Blec333"><img width="24" height="24" alt="github" src="https://pluspng.com/img-png/github-octocat-logo-vector-png-png-ico-icns-svg-more-512.png"></img>
          </a>
          <a href="https://www.linkedin.com/in/brennanleclair"><img width="24" height="24" alt="linkedin" src="https://www.pngall.com/wp-content/uploads/2016/07/Linkedin-PNG-Pic.png"></img>
          </a>
          <a href="https://stackoverflow.com/users/19237165/blec"><img width="24" height="24" alt="stackoverflow" src="./stackoverflow.png"></img>
          </a>
        </div>
      </footer>
    </>
  );

}

export default Footer;