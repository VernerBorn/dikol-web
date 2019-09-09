import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { RECENT_PLACES } from './queryHome'

import Section from '../../UI/Section'
import RecentPlaces from './RecentPlaces/RecentPlaces'

const Home: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(RECENT_PLACES)
  if (error) return <div>Ошибка</div>
  if (loading || !data) return <div>Загрузка</div>
  return (
    <Section className="recent-places" title="Недавние места">
      <RecentPlaces recentPlaces={data.recentPlaces} />
    </Section>
  )
}

export default Home
