import React from 'react'

const Footer = () => {
    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="list-group bottom-nav">
                <li className="list-group-item">
                  <a href="/">Earning Calender</a>
                </li>
                <li className="list-group-item">
                  <a href="/">About</a>
                </li>
                <li className="list-group-item">
                  <a href="/">Terms of Use</a>
                </li>
                <li className="list-group-item">
                  <a href="/">Privacy Policy</a>
                </li>
              </div>
            </div>
          </div>
      
          <p className="copy-right-text">&copy;Earning calls 2020</p>
        </div>
      </footer>
    )
}

export default Footer
