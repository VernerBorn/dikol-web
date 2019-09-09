import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '../../../UI/Paper'
import ScrollTouch from '../../../UI/ScrollerTouch'
import ScrollTouchItem from '../../../UI/ScrollerTouchItem'

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
      <ScrollTouchItem key={id} className="recent-places">
        <Link to={`client/${id}`} className="recent-places__item">
          <Paper className="recent-places">
            <h3 className="recent-places__title">{title}</h3>
            <span className="recent-places__subtitle">{subTitle}</span>
          </Paper>
        </Link>
      </ScrollTouchItem>
    ),
  )
  return <ScrollTouch className="recent-places">{recentPlacesItem}</ScrollTouch>
}
export default RecentPlaces
