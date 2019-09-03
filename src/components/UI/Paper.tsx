import React from 'react'

interface PaperProps {
  className: string
  children: JSX.Element[] | JSX.Element
  tag?: React.ReactType
}

const Paper: React.FC<PaperProps> = ({ children, className, tag: Tag = 'div' }): JSX.Element => (
  <Tag className={`paper paper--${className}`}>{children}</Tag>
)

export default Paper
