import React from 'react'

interface IconProps {
  className: string
  name: string
}

const Icon: React.FC<IconProps> = ({ name, className }): JSX.Element => (
  <i className={`icon__${name} icon__${name}--${className}`}></i>
)

export default Icon
