import React from 'react'
import { Link } from 'react-router-dom'
import { ScrollTouch, Paper } from '../../components/UI'

interface IRecentPlacesItem {
  id: string
  title: string
  subTitle: string
}
interface IRecentPlaces {
  recentPlaces: IRecentPlacesItem[]
}

const RecentPlaces: React.FC<IRecentPlaces> = ({ recentPlaces }): JSX.Element => {
  const recentPlacesItem = recentPlaces.map(
    ({ id, title, subTitle }: IRecentPlacesItem): JSX.Element => (
      <Link to={`client/${id}`} className="recent-places__item">
        <Paper className="recent-places">
          <h3 className="recent-places__title">{title}</h3>
          <span className="recent-places__subtitle">{subTitle}</span>
        </Paper>
      </Link>
    ),
  )
  return <ScrollTouch className="recent-places">{recentPlacesItem}</ScrollTouch>
}
export default RecentPlaces
