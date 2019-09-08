import React from 'react'

interface ListGroupProps {
  className: string
  children: JSX.Element[] | JSX.Element
}

const ListGroup: React.FC<ListGroupProps> = ({ children, className }): JSX.Element => (
  <ul className={`list__group list__group--${className}`}>{children}</ul>
)

export default ListGroup
