import React from 'react'

interface ListItemProps {
  className: string
  children: JSX.Element
}

const ListItem: React.FC<ListItemProps> = ({ children, className }): JSX.Element => (
  <li className={`list__item list__item--${className}`}>{children}</li>
)

export default ListItem
