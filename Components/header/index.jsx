import "./styles.scss";
import crown from "../../assets/crown.svg";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../../redux/user/user.action";
import CartIcon from "../cart-icon";
import CartDropDown from "../cart-dropdown";
const Header = ({ currentUser, hidden }) => {
  useEffect(() => {
    console.log(hidden, "hidden");
  }, [hidden]);
  const setCurrentUser = (currentUser) => {
    return !currentUser;
  };
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img src={crown} alt="none" />{" "}
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/shoppage">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => setCurrentUser(currentUser)}>
            SIGN OUT
          </div>
        ) : (
          <Link
            className="option"
            to="/signin"
            onClick={() => setCurrentUser(currentUser)}
          >
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Header);
