import "./Title.scss";

export default function Title(props) {
  return (
    <div className="title">
        <h3> {props.title} </h3>
    </div>
  );
}
