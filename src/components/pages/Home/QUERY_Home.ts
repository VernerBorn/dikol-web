import { gql } from 'apollo-boost'
const HOME = gql`
  query {
    recentPlaces {
      id
      title
      subTitle
    }
    popularCategories {
      id
      type
      title
    }
  }
`

export { HOME }
