import { gql } from '@apollo/client';

//Soul Query - Role Optional
const query = gql`
  query SoulProcQuery($id: ID!, $entRole: String, $first: Int, $skip: Int) {
    procParticipants(
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
        game {
          metadata
        }
      }
      sbt {
        id
        name
        type
        role
      }
    }
  }
`;

export default query;
