import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const BottomBar: React.FC = (): JSX.Element => (
  <nav className="bottom-bar">
    <ul className="bottom-bar__list">
      <li className="bottom-bar__item">
        <Link to="/" className="bottom-bar__link">
          <Icon className="bottom-bar__icon" name="home" />
        </Link>
      </li>
      <li className="bottom-bar__item">
        <Link to="/" className="bottom-bar__link">
          <Icon className="bottom-bar__icon" name="user" />
        </Link>
      </li>
      <li className="bottom-bar__item">
        <Link to="/" className="bottom-bar__link">
          <Icon className="bottom-bar__icon" name="search" />
        </Link>
      </li>
      <li className="bottom-bar__item">
        <Link to="/" className="bottom-bar__link">
          <Icon className="bottom-bar__icon" name="bell" />
        </Link>
      </li>
      <li className="bottom-bar__item">
        <Link to="/" className="bottom-bar__link">
          <Icon className="bottom-bar__icon" name="calendar" />
        </Link>
      </li>
    </ul>
  </nav>
)

export default BottomBar
