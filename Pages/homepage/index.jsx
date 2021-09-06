import DATA from "../../menuitem";
import "./styles.scss";
import MenuItem from "../../Components/menuitem";
const HomePage = () => {
  console.log(DATA.homepage.menuitems, "aaa");
  return (
    <div>
      <div className="itemcontainer">
        {DATA.homepage.menuitems.map((item, key) => {
          return <MenuItem key={key} item={item} />;
        })}
      </div>
    </div>
  );
};
export default HomePage;
