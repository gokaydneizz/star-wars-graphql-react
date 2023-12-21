const { gql, useQuery } = require("@apollo/client");

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      image
      gender
      height
    }
  }
`;

export const useCharacter = (id) => {
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  return { data, loading, error };
};
