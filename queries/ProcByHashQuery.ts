import { gql } from '@apollo/client';

/**
 * Get Process By Address
 */
const query = gql`
  query ProcByHashQuery($id: ID!) {
    claim(id: $id) {
      id
      name
      stage
      type
      game {
        id
        name
        type
        role
      }
      roles {
        id
        name
        roleId
        souls
        soulsCount
      }
      nominations {
        id
        createdDate
        nominator {
          id
          owner
          type
        }
        nominated {
          id
          owner
          type
        }
      }
      posts {
        id
        createdDate
        entityRole
        author {
          id
          owner
        }
        uri
        metadata
      }
    }
  }
`;

export default query;