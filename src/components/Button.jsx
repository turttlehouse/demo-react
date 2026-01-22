const Button = ({ buttonName,...props }) => {
  return (
    <button className="text-white bg-blue-500 px-2 py-1 rounded " {...props}>{buttonName}</button>
  );
};

export default Button;
