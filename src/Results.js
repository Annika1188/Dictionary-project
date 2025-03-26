import Meaning from "./Meaning";
export default function Results(props) {
  if (props.results && Array.isArray(props.results.meanings)) {
    return (
      <div className="Results ">
        {" "}
        <h2>{props.results.word}</h2>{" "}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div ke={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
