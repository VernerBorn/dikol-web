import React from 'react'

interface IScrollTouchItemProps {
  key: string
  className: string
  children: JSX.Element
}

const ScrollTouchItem: React.FC<IScrollTouchItemProps> = ({ children, className }): JSX.Element => (
  <li className={`scroller-touch__item--${className} scroller-touch__item`}>{children}</li>
)

export default ScrollTouchItem
