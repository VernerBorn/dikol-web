import { gql } from 'apollo-boost'
const RECENT_PLACES = gql`
  query {
    recentPlaces {
      id
      title
      subTitle
    }
  }
`
export { RECENT_PLACES }
