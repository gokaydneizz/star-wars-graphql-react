const { gql, useQuery } = require("@apollo/client");

const GET_ALL_CHARACTERS = gql`
  query {
    allPeople {
      id
      name
      image
      birthYear
      species {
        id
        name
      }
    }
  }
`;

export const useCharacters = () => {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);

  return { data, loading, error };
};
