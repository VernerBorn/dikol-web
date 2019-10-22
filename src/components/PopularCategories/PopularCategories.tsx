import React from 'react'
import { Link } from 'react-router-dom'
import { ListItem, ListGroup, Paper, Icon } from '../../components/UI'

interface IPopularCategoriesItem {
  id: string
  title: string
  type: string
}
interface IPopularCategories {
  popularCategories: IPopularCategoriesItem[]
}

const PopularCategories: React.FC<IPopularCategories> = ({ popularCategories }): JSX.Element => {
  const popularCategoriesItem = popularCategories.map(
    ({ id, title, type }: IPopularCategoriesItem): JSX.Element => (
      <ListItem key={id} className="popular-categories">
        <Link to={`categories/${type}`} className="popular-categories__link">
          <Icon className="popular-categories" name={type} />
          <span className="popular-categories__title">{title}</span>
          <Icon className="popular-categories" name="button" />
        </Link>
      </ListItem>
    ),
  )
  return (
    <Paper className="popular-categories">
      <ListGroup className="popular-categories">{popularCategoriesItem}</ListGroup>
    </Paper>
  )
}
export default PopularCategories
