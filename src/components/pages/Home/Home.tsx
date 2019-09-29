import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import queryHome from './queryHome'

import Section from '../../UI/Section'
import RecentPlaces from './RecentPlaces/RecentPlaces'
import PopularCategories from './PopularCategories/PopularCategories'

const Home: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(queryHome)
  if (error) return <div>Ошибка</div>
  if (loading || !data) return <div>Загрузка</div>
  return (
    <>
      <Section className="recent-places" title="Недавние места">
        <RecentPlaces recentPlaces={data.recentPlaces} />
      </Section>
      <Section className="popular-categories" title="Популярные места" link="categories">
        <PopularCategories popularCategories={data.popularCategories} />
      </Section>
      <Section className="stocks" title="Акции" link="stocks">
        <PopularCategories popularCategories={data.popularCategories} />
      </Section>
    </>
  )
}

export default Home
