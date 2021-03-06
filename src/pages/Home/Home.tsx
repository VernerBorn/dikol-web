import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import queryHome from './queryHome'

import { Section } from '../../components/UI'
import RecentPlaces from '../../components/RecentPlaces/RecentPlaces'
import PopularCategories from '../../components/PopularCategories/PopularCategories'
import Header from '../../components/Header/Header'
import { RouteComponentProps } from 'react-router'

const Home: React.FC<RouteComponentProps> = ({ history }): JSX.Element => {
  console.log(history)
  const { loading, error, data } = useQuery(queryHome)
  if (error) return <div>Ошибка</div>
  if (loading || !data)
    return (
      <div className="loader__app--wrap">
        <div className="loader__app--active"></div>
      </div>
    )
  return (
    <>
      <Header page="home" title="Недавние места" />
      <main className="main">
        <Section className="recent-places" title="Недавние места">
          <RecentPlaces recentPlaces={data.recentPlaces} />
        </Section>
        <Section className="popular-categories" title="Популярные места" link="categories">
          <PopularCategories popularCategories={data.popularCategories} />
        </Section>
        <Section className="stocks" title="Акции" link="stocks">
          <PopularCategories popularCategories={data.popularCategories} />
        </Section>
      </main>
    </>
  )
}

export default Home
