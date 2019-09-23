import { gql } from 'apollo-boost'
const queryHome = gql`
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

export default queryHome
