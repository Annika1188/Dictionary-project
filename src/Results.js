import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Dictionary.css";
import "./Results.css";
export default function Results(props) {
  if (props.results && Array.isArray(props.results.meanings)) {
    return (
      <div className="Results ">
        <section>
          {" "}
          <h2>{props.results.word}</h2>{" "}
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
