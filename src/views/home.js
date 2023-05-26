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
        <div className="home-navbar">
          <img src="/logo.svg" alt="image" className="home-image" />
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
            <div className="home-container01">
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
      <div className="home-container02">
        <div className="home-hero">
          <img alt="image" src="/photo-400w.jpg" className="home-image1" />
          <div className="home-hero-text-container">
            <h1 className="home-heading1 Section-Heading">Talha Yiğit Yağız</h1>
            <span className="home-text">
              Hello, I&apos;m Talha Yiğit Yağız. I am studying Physics at Yıldız
              Technical University. I am working to specialize in areas such as
              computers and software.
            </span>
            <div className="home-cta-btn-container">
              <a href="#hakkimda" className="home-cta-btn Anchor button">
                <span className="home-text01">About</span>
              </a>
              <a href="#iletisim" className="home-cta-btn1 button">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div id="hakkimda" className="home-container03"></div>
      <div className="home-hakkmda">
        <strong className="home-text02">About</strong>
        <span className="home-text03">
          Hello, I&apos;m Talha Yiğit Yağız. I am studying Physics at Yıldız
          Technical University. I am working to specialize in areas such as
          computers and software.
        </span>
      </div>
      <div className="home-section-separator4"></div>
      <div className="home-section-separator5"></div>
      <div id="deneyim" className="home-container04"></div>
      <div className="home-deneyim">
        <span className="home-text04 Section-Heading">Experiences</span>
        <div className="home-steps">
          <div className="home-container05">
            <div className="home-step">
              <div className="home-container06">
                <div className="home-container07">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M726 682v-84h256v84q0 42-24 74t-62 46v180h-86v-180q-84-30-84-120zM554 86v170h86v256h-256v-256h86v-170q0-18 12-31t30-13 30 13 12 31zM896 256h86v256h-256v-256h84v-170q0-18 13-31t31-13 30 13 12 31v170zM42 682v-84h256v84q0 90-84 120v180h-86v-180q-38-14-62-46t-24-74zM384 682v-84h256v84q0 42-24 74t-62 46v180h-84v-180q-38-14-62-46t-24-74zM214 86v170h84v256h-256v-256h86v-170q0-18 12-31t30-13 31 13 13 31z"></path>
                  </svg>
                </div>
                <div className="home-line"></div>
              </div>
              <div className="home-container08">
                <h1 className="home-text05">Python Jump</h1>
                <span className="home-text06">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-container09">
                <div className="home-line1"></div>
                <div className="home-container10">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M170 256v426h684v-426h-684zM854 768h170v86h-1024v-86h170q-34 0-59-26t-25-60v-426q0-34 25-60t59-26h684q34 0 59 26t25 60v426q0 34-25 60t-59 26z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container11">
                <h1 className="home-text09">Sky-Sec</h1>
                <span className="home-text10">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-container12">
                <div className="home-line2"></div>
                <div className="home-container13">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                    <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container14">
                <h1 className="home-text13">YetGen</h1>
                <span className="home-text14">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="home-step3"></div>
          </div>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <div id="iletisim" className="home-container15"></div>
      <div className="home-subscribe">
        <div className="home-container16">
          <div className="home-heading-container">
            <h1 className="home-text17 Section-Heading">Contact</h1>
            <a
              href="mailto:talhayigityagiz@gmail.com?subject=İletişim"
              className="home-link08"
            >
              Mail: talhayigityagiz@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="home-section-separator7"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon11">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon13">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon15">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
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
