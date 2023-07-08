// import { useReducer, useEffect } from 'react';

import ShowCard from './ShowCard';
import { useStarredShows } from '../../lib/useStarredShows';

// const usePersistedReducer = (reducer, initialState, localStorageKey) => {
//   const { state, dispatch } = useReducer(reducer, initialState, initial => {
//     const persistedValue = localStorage.getItem(localStorageKey);

//     return persistedValue ? JSON.parse(persistedValue) : initial;
//   });

//   useEffect(() => {
//     localStorage.setItem(localStorageKey, JSON.stringify(state));
//   }, [state, localStorageKey]);

//   return [state, dispatch];
// };

// const starredShowsReducer = (currentStarred, action) => {
//   switch (action.type) {
//     case 'STAR':
//       return currentStarred.concat(action.showId);
//     case 'UNSTAR':
//       return currentStarred.filter(showId => showId !== action.showId);
//     default:
//       return currentStarred;
//   }
// };

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : '/not-found.png'}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
