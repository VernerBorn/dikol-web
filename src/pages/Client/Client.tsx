import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import queryHome from '../Home/queryHome'

import { Section } from '../../components/UI'
import RecentPlaces from '../../components/RecentPlaces/RecentPlaces'
import Header from '../../components/Header/Header'
import PopularCategories from '../../components/PopularCategories/PopularCategories'

const Client: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(queryHome)
  if (error) return <div>Ошибка</div>
  if (loading || !data) return <div>Загрузка</div>
  return (
    <>
      <Header />
      <Section className="stocks" title="Акции" link="stocks">
        <PopularCategories popularCategories={data.popularCategories} />
      </Section>
      <Section className="recent-places" title="Недавние места">
        <RecentPlaces recentPlaces={data.recentPlaces} />
      </Section>
    </>
  )
}

export default Client
