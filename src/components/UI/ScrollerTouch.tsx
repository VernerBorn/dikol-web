import React from 'react'

interface ScrollTouchListProps {
  className: string
  children: JSX.Element[]
}

const ScrollTouch: React.FC<ScrollTouchListProps> = ({ children, className }): JSX.Element => {
  const scrollTouchItem = children.map(item => (
    <li className={`scroller-touch__item--${className} scroller-touch__item`}>{item}</li>
  ))
  return (
    <div className="scroller-touch">
      <ul className={`scroller-touch__list--${className} scroller-touch__list`}>
        {scrollTouchItem}
      </ul>
    </div>
  )
}

export default ScrollTouch
