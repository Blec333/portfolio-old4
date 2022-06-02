# PORTFOLIO

* Portfolio

## Description

Welcome to my portfolio.  Please peruse at your leisure and reach out if you arrive at any questions.

## Links

[Click to view the deployed application](https://blec333.github.io/portfolio/)

[Click to view the portfolio repository](https://github.com/Blec333/portfolio/)


## Table of contents


- [Technologies Employed](#technologies-employed)
- [Key Functions](#key-functions)
- [Final Product](#final-product)
- [License](#license)
- [Contact/Questions](#questions)


## Technologies Employed


| Technology               | Implementation/Use       |
| ------------------------ | ------------------------ |
| Node.js                  | JavaScript runtime       |
| Node Package Manager     | Manage node packages     |
| Express.js               | Web framework            |
| create-react-app webpack | Bundling                 |
| React frontend           | Bundling                 |
| gh-pages                 | Deployment               |


## Key Functionality

* Validate Email:
```javascript
(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(emailAddress)
```


* Control Pages:
```javascript
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className='glass'>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
```





## Final Product

<img title="image" alt="Style Showcase Page Screenshot" src="./assets/portfolio.gif">



## License

This software is licensed under the MIT [LICENSE](./LICENSE)

MIT License

Copyright (c) 2022 Brennan LeClair

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



## Questions?

Please visit

[Brennan (blec333)](https://github.com/Blec333)



### Acknowledgements

©Brennan LeClair
