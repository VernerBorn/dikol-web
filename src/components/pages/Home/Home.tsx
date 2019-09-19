import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { HOME } from './QUERY_Home'

import Section from '../../UI/Section'
import RecentPlaces from './RecentPlaces/RecentPlaces'
import PopularCategories from './PopularCategories/PopularCategories'

const Home: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(HOME)
  if (error) return <div>Ошибка</div>
  if (loading || !data) return <div>Загрузка</div>
  console.log(data)
  return (
    <>
      <Section className="recent-places" title="Недавние места">
        <RecentPlaces recentPlaces={data.recentPlaces} />
      </Section>
      <Section className="popular-categories" title="Популярные места">
        <PopularCategories popularCategories={data.popularCategories} />
      </Section>
    </>
  )
}

export default Home
