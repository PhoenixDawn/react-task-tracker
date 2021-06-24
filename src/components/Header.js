import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title, onShow, showAdd }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* {showAdd ?  <Button onShow={onShow} color="green" text="Add"/> :  <Button onShow={onShow} color="orange" text="Close"/>} */}
      <Button 
        onShow={onShow} 
        color={!showAdd ? "green" : "red"} 
        text={!showAdd ? "Add" : "Close"}
        />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
