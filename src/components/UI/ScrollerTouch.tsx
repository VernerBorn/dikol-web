import React from 'react'

interface ScrollTouchListProps {
  className: string
  children: JSX.Element[]
}

const ScrollTouch: React.FC<ScrollTouchListProps> = ({ children, className }): JSX.Element => (
  <div className="scroller-touch">
    <ul className={`scroller-touch__list--${className} scroller-touch__list`}>{children}</ul>
  </div>
)

export default ScrollTouch
