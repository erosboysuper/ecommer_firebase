import "./styles.scss";
const MenuItem = ({ item: { title, imageUrl, id, size, linkUrl } }) => {
  console.log(title, imageUrl, "text");
  return (
    <div className={`${size} container`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="backgroundimage"
      />
      <div className="content">
        <h5 className="title">{title.toUpperCase()}</h5>
        <p className="shopnow">SHOP NOW</p>
      </div>
    </div>
  );
};
export default MenuItem;
