import React from 'react'
import { Link } from 'react-router-dom'

import Section from '../../components/UI/Section'
import ScrollTouch from '../UI/ScrollerTouch'
import Paper from '../UI/Paper'

const Home: React.FC = (): JSX.Element => {
  const recentPlaces = [
    { id: 1, title: 'Мой Авто', subTitle: 'Автосервиc' },
    { id: 2, title: 'Рашель', subTitle: 'Салон красоты' },
    { id: 3, title: 'LemonLounge', subTitle: 'Кальянная' },
    { id: 4, title: 'Chop Chop', subTitle: 'Парикмахерская' },
  ]
  const recentPlacesItem = recentPlaces.map(
    ({ id, title, subTitle }): JSX.Element => (
      <Link to={`client/${id}`} className="recent-places__item">
        <Paper className="recent-places">
          <h3 className="recent-places__title">{title}</h3>
          <span className="recent-places__subtitle">{subTitle}</span>
        </Paper>
      </Link>
    ),
  )
  return (
    <>
      <Section className="recent-places" title="Недавние места">
        <ScrollTouch className="recent-places">{recentPlacesItem}</ScrollTouch>
      </Section>
      <Section className="popular-categories" title="Популярные места">
        <ScrollTouch className="popular-categories">{recentPlacesItem}</ScrollTouch>
      </Section>
    </>
  )
}

export default Home
