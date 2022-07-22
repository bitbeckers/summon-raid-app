import { useQuery, gql } from "@apollo/client";

const GET_ALL_STAKES = gql`
  query AllStakes {
    stakes {
      id
      amount
      user {
        id
      }
    }
  }
`;

export const useAllStakes = () => {
  const { loading, error, data } = useQuery<{ stakes: StakeResponse[] }>(
    GET_ALL_STAKES,
    { pollInterval: 5000 }
  );

  return { loading, allStakes: data?.stakes };
};
