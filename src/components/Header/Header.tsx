import React from 'react'
import Icon from '../UI/Icon'
import { Link } from 'react-router-dom'

const Header: React.FC = (): JSX.Element => (
  <header className="header">
    <Link to="/">
      <Icon name="angle-left" className="header--client"></Icon>
    </Link>
    <h1 className="header__title">Client</h1>
  </header>
)

export default Header
