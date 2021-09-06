import "./styles.scss";
const MenuItem = ({ item: { title, image, id, linkUrl } }) => {
  console.log(title, "text");
  return (
    <div className="container">
      <div className="content">
        <h5 className="title">{title}</h5>
        <p className="shopnow">SHOP NOW</p>
      </div>
    </div>
  );
};
export default MenuItem;
