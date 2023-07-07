const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id} className="cast-item">
          <div className="pic-wrapper">
            <img src={person.image ? person.image.medium : '/not-found.png}'} />
          </div>

          <div className="actor">
            {person.name} | {character.name} {voice && '| Voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
