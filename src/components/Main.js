import PropTypes from 'prop-types'
import React from 'react'
import mission from '../images/mission.jpg'
import crew from '../images/crew.jpg'
import crew2 from '../images/crew2.jpeg'
import clapperboard from '../images/clapperboard.jpg'
import wannacoffeelogo from '../images/wannacoffeelogo.jpg'

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
          className={`${
            this.props.article === 'missionstatement' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Mission Statement</h2>
          <span className="image main">
            <img src={mission} alt="" />
          </span>
          <p>
            BearTiger Productions is committed to cultivating content that is
            diverse, fresh, and relatable. Content, that not only entertains but
            inspires. Using a range of mediums, for its creative expression,
            their aim is to tell the greatest story and share it across the
            globe. 
            <br />
            <br />
            Working with talent who range from well known to unknown,
            seasoned to novice but mostly, creatives who are on the pulse and
            cutting edge of their craft. They are impassioned storytellers, who
            unapologetically bring a truthful reflection of the world around
            them, give a platform to the voices who have yet to be heard, and
            dare to dream whilst doing it.
          </p>
          {close}
        </article>

        <article
          id="thecrew"
          className={`${this.props.article === 'thecrew' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">The Crew</h2>
          <span className="image main">
            <img src={crew} alt="" />
          </span>
          <span className="image main">
            <img src={crew2} alt="" />
          </span>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <p>For all project info, click for details...</p>
          <span className="image main">
            <a href="https://www.instagram.com/beartiger.productions/">
              <img src={clapperboard} alt="" />
            </a>
          </span>
          <p>
            Wanna Coffee? Podcast
            <br /> 
            Thursdays at 10am AEST/Wednesdays at 8pm EST
          </p>
          <span className="image main">
            <a href="https://www.youtube.com/playlist?list=PLzXFzLvgInhiSfY4-r8PVP2wZNKcgMx4m">
              <img src={wannacoffeelogo} alt="" />
            </a>
          </span>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
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
