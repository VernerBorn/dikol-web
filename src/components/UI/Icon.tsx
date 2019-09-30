import React from 'react'

interface IconProps {
  className: string
  name: string
}

const Icon: React.FC<IconProps> = ({ name, className }): JSX.Element => (
  <abbr title={name} className={`icon__${name} icon__${name}--${className}`}></abbr>
)

export default Icon
