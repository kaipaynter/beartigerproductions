import PropTypes from 'prop-types'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="missionstatement"
          className={`${this.props.article === 'missionstatement' ? 'active' : ''
            } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Mission Statement</h2>
          <span className="image main">
            <StaticImage
              src="../images/mission2.jpg"
              alt="Mission"
              placeholder="blurred"
            />
          </span>
          <p>
            BearTiger Productions is committed to cultivating diverse, fresh,
            and relatable content. Using a range of mediums for its creative
            expression, their aim is to tell the greatest story and share it
            across the globe, to not only entertain but inspire.
            <br />
            <br />
            Working with talent who range from well-known to unknown, seasoned
            to the novice but mostly, creatives who are on the cutting edge of
            their craft. They are impassioned storytellers, who unapologetically
            bring a truthful reflection of the world around them, give a
            platform to the voices who have yet to be heard, and dare to dream
            whilst doing it.
          </p>
          {close}
        </article>

        <article
          id="thecrew"
          className={`${this.props.article === 'thecrew' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">The Americas</h2>
          <span className="image main">
            <StaticImage
              src="../images/crew4.jpg"
              alt="Crew 3"
              placeholder="blurred"
            />
          </span>
          <span className="image main">
            <StaticImage
              src="../images/crew.jpg"
              alt="Crew"
              placeholder="blurred"
            />
          </span>
          <span className="image main">
            <StaticImage
              src="../images/crew2.jpg"
              alt="Crew 2"
              placeholder="blurred"
            />
          </span>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <StaticImage
              src="../images/projectspic.jpg"
              alt="Projects"
              placeholder="blurred"
            />
          </span>

          <p>Stay up-to-date on what we’re doing....</p>
          <p>To submit to The Americas or for further information, please submit directly through the <strong><a href='https://theamericas.beartigerproductions.com/' target="_blank" rel="noopener noreferrer">website</a></strong> or use the contact form.</p>

          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/BearTigerInfo"
                className="icon fa-twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/beartigerproductions"
                className="icon fa-facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/beartiger.productions"
                className="icon fa-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCezckIi_wKkArCT_lKOjDcg"
                className="icon fa-youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">YouTube</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/beartigerproductions/about"
                className="icon fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/f/xjvpjdvb">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="_replyto" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <div class="g-recaptcha" data-sitekey="6LemoxQiAAAAABBTmQBzw2WD13L3RACKV6RuGcjS" />
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/BearTigerInfo"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/beartigerproductions"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/beartiger.productions"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          <h3>Locations</h3>
          <div>
            Sydney, Australia
            <br></br>
            2130
          </div>
          <br />
          <div>
            Los Angeles, CA
            <br></br>
            90002
          </div>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
