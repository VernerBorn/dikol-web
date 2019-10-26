import React from 'react'
import Icon from '../UI/Icon'

interface Props {
  page: string
}

const Header: React.FC<Props> = ({ page }): JSX.Element => (
  <header className={`header--${page}`}>
    <button className={`header__back--${page}`}>
      <Icon name="angle-left" className={`header--${page}`}></Icon>
    </button>
    <h1 className={`header__title--${page}`}>Client</h1>
  </header>
)

export default Header
