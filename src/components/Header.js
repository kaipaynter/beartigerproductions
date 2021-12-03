import PropTypes from 'prop-types'
import React from 'react'
import logotight from '../images/logotight.jpg'

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img className="logo" src={logotight} alt="Logo" />
    </div>

    <div className="content">
      <div className="inner">
        <p>
          Founded in 2015, BearTiger Productions is an artist-driven production
          company that develops and produces music, film, theatre, television,
          radio, and digital content. BearTiger Productions has a dedicated team
          of professionals from across the world giving it an international
          flair and buzzing energy…Someplace, somewhere it’s 7 am!
          <br />
          <br />
          From American writers and producers to Australian and South African
          execs, the team prides itself on giving you something a little
          different from the “norm”.
          <br />
          <br />
          BearTiger Productions is adventurous, promising, and real.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('missionstatement')
            }}
          >
            Mission Statement
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('thecrew')
            }}
          >
            The Crew
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
