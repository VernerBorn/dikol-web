import React from 'react'
import { Link } from 'react-router-dom'

interface SectionProps {
  className: string
  title: string
  link?: string | false
}

const Section: React.FC<SectionProps> = ({
  className,
  title,
  link = false,
  children,
}): React.ReactElement => {
  return (
    <section className={`section section--${className}`}>
      <div className="section__title--wrap">
        <h2 className="section__title">{title}</h2>
        {link ? (
          <Link className="section__link" to={link}>
            Все
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  )
}

export default Section
