const Button = ({ color, text, onShow }) => {
  return (
    <div>
      <button
        onClick={onShow}
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
