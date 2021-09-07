import "./styles.scss";
import CollectionItem from "../collection-item";
const CollectionPreview = ({ title, items }) => {
  console.log(title, "title");
  return (
    <div className="collectionpreview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
