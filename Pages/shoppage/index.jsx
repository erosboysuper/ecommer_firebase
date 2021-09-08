import SHOP_DATA from "../../shop.data.js";
import CollectionPreview from "../../Components/collection-preview";
import Header from "../../Components/header";
const ShopPage = () => {
  return (
    <div>
      {SHOP_DATA.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props}></CollectionPreview>
      ))}
    </div>
  );
};

export default ShopPage;
