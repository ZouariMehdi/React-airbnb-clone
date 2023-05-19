import star from "../images/star.png";
export default function Card(props) {
  let badgeText;
  if (props.openSpots == 0) {
    badgeText = "SOLD OUT";
  } else if (props.openSpots == 3) {
    badgeText = "ONLINE";
  } else {
    badgeText = "";
  }
  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText} </div>}
      <img height={350} src={props.img} />
      <div>
        <img src={star} alt="logo" />
        <span>{props.rating}</span>
        <span>({props.reviewCont})</span>
        <span>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <bold>From ${props.price} </bold> / person
      </p>
    </div>
  );
}
