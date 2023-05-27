import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div id="hakkimda" className="home-container01"></div>
        <div className="home-navbar">
          <img alt="image" src="/logo.svg" className="home-image" />
          <div className="home-links-container">
            <a href="#hakkimda" className="home-link Navbar-Link">
              About
            </a>
            <a href="#deneyim" className="home-link01 Navbar-Link">
              Experiences
            </a>
            <span className="home-link02 Navbar-Link">Portfolio</span>
            <a href="#iletisim" className="home-link03 Navbar-Link">
              Contact
            </a>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container02">
              <span className="Card-Heading home-heading">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link04 Navbar-Link">About</span>
              <span className="home-link05 Navbar-Link">Experience</span>
              <span className="home-link06 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-container03">
        <div className="home-hero">
          <img alt="image" src="/photo-400w.jpg" className="home-image1" />
          <h1 className="home-heading1">Talha Yiğit Yağız</h1>
          <div className="home-container04">
            <div className="home-hero-text-container">
              <div className="home-cta-btn-container">
                <a href="#iletisim" className="home-cta-btn button">
                  Contact
                </a>
              </div>
              <span className="home-text">
                <span>
                  Hello, I&apos;m Talha Yiğit Yağız.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  I am studying Physics at
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Yıldız Technical University.</span>
                <br></br>
                <span> I am working to specialize </span>
                <span>
                  in areas
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>such as computers </span>
                <span>and software.</span>
              </span>
            </div>
            <a href="#hakkimda" className="home-cta-btn1 Anchor button">
              <span className="home-text09">About</span>
            </a>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-hakkmda">
        <strong className="home-text10 Section-Heading">About</strong>
        <span className="home-text11">
          Hello, I&apos;m Talha Yiğit Yağız. I am studying Physics at Yıldız
          Technical University. I am working to specialize in areas such as
          computers and software.
        </span>
      </div>
      <div className="home-section-separator4"></div>
      <div className="home-section-separator5"></div>
      <div id="deneyim" className="home-container05"></div>
      <div className="home-deneyim">
        <span className="home-text12 Section-Heading">Experiences</span>
        <div className="home-steps">
          <div className="home-container06">
            <div className="home-step">
              <div className="home-container07">
                <h1 className="home-text13">Python Jump</h1>
                <span className="home-text14">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-container08">
                <h1 className="home-text17">Sky-Sec</h1>
                <span className="home-text18">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-container09">
                <h1 className="home-text21">YetGen</h1>
                <span className="home-text22">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <div id="iletisim" className="home-container10"></div>
      <div className="home-subscribe">
        <div className="home-container11">
          <span className="home-text25">Contact</span>
          <span className="home-text26">Mail: talhayigityagiz@gmail.com</span>
        </div>
      </div>
      <div className="home-section-separator7"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <a
              href="https://www.linkedin.com/in/talhayigityagiz/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"></path>
                <path d="M64 384h192v576h-192v-576z"></path>
                <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/talhayigityagiz"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/talhayigityagiz"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
              </svg>
            </a>
          </div>
          <div className="home-copyright-container">
            <span>
              <span className="Anchor"> 2023</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
