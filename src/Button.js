const Button = ({ color, text }) => {
  const onClick = () => {console.log("Click")};

  return (
    <div>
      <button
        onClick={onClick}
        className="btn"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

export default Button;
