export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              {synonym}
              {index < props.synonyms.length - 1 ? ", " : ""}
            </span>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
