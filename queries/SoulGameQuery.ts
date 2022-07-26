import { gql } from '@apollo/client';

//Soul Query - Role Optional
const query = gql`
  query SoulGamesQuery($id: ID!, $entRole: String, $first: Int, $skip: Int) {
    gameParticipants(
      first: $first
      skip: $skip
      where: { sbt_: { id: $id }, entity_: { role: $entRole } }
    ) {
      id
      roles
      entity {
        id
        name
        type
        role
        metadata
      }
      sbt {
        id
        name
        type
      }
    }
  }
`;

export default query;
