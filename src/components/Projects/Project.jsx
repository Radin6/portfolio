export default function Project(props) {
  return (
    <div className="project">
      <div className="project-text">
        <p>{props.text}</p>
      </div>
      <picture className="project-pic">
        <img src={props.url} alt={props.alt} />
      </picture>
    </div>
  );
}
