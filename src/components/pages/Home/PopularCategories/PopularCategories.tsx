import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '../../../UI/Paper'
import ListItem from '../../../UI/ListItem'
import ListGroup from '../../../UI/ListGroup'

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
        <Link to={`categories/${id}`}>
          {type}
          <br />
          {title}
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
