import { useParams } from 'react-router-dom';
import { getShowbyId } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';

const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowbyId(showId),
  });

  if (showError) {
    return <div>We have an error {showError.message}</div>;
  }

  if (showData) {
    return <div>Got show data :{showData.name}</div>;
  }

  return <div>Data is Loading</div>;
};

export default Show;
