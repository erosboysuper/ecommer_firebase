import SHOP_DATA from "../../shop.data.js";
import CollectionPreview from "../../Components/collection-preview";
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
