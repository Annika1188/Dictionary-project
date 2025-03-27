import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>{" "}
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key="index">
            <p>
              {" "}
              <strong>Definitions:</strong>
              {definition.definition}
              <br />
              <stong>Example:</stong>
              <em> {definition.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
