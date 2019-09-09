import React from 'react'

interface IScrollTouchItemProps {
  key: string
  className: string
  children: JSX.Element
}

const ScrollTouchItem: React.FC<IScrollTouchItemProps> = ({
  key,
  children,
  className,
}): JSX.Element => {
  return (
    <li key={key} className={`scroller-touch__item--${className} scroller-touch__item`}>
      {children}
    </li>
  )
}

export default ScrollTouchItem
