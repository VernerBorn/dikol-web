import React from 'react'

interface ScrollTouchListProps {
  className: string
  children: JSX.Element[]
}

const ScrollTouch: React.FC<ScrollTouchListProps> = ({ children, className }): JSX.Element => {
  const item = children.map(
    (children): JSX.Element => (
      <li className={`scroller-touch__item--${className} scroller-touch__item`}>{children}</li>
    ),
  )
  return (
    <div className="scroller-touch">
      <ul className={`scroller-touch__list--${className} scroller-touch__list`}>{item}</ul>
    </div>
  )
}

export default ScrollTouch
