import "./styles.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({
  item: { title, imageUrl, id, size, linkUrl },
  match,
  location,
  history,
  ...props
}) => {
  // const { match, location, history } = { ...props };
  console.log(history, "history");
  console.log(match, "match");

  console.log(location, "location");

  return (
    <div
      className={`${size} container`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="backgroundimage"
      />
      <div className="content">
        <h5 className="title">{title.toUpperCase()}</h5>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
