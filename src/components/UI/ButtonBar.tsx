import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const ButtonBar: React.FC = (): JSX.Element => (
  <nav className='button-bar"'>
    <ul className="button-bar__list">
      <li className="button-bar__item">
        <Link to="/" className="button-bar__link">
          <Icon className="button-bar__icon" name="home" />
        </Link>
      </li>
      <li className="button-bar__item">
        <Link to="/" className="button-bar__link">
          <Icon className="button-bar__icon" name="user" />
        </Link>
      </li>
      <li className="button-bar__item">
        <Link to="/" className="button-bar__link">
          <Icon className="button-bar__icon" name="search" />
        </Link>
      </li>
      <li className="button-bar__item">
        <Link to="/" className="button-bar__link">
          <Icon className="button-bar__icon" name="bell" />
        </Link>
      </li>
      <li className="button-bar__item">
        <Link to="/" className="button-bar__link">
          <Icon className="button-bar__icon" name="calendar" />
        </Link>
      </li>
    </ul>
  </nav>
)

export default ButtonBar
