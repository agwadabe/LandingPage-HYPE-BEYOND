const Buttons = ({ text, onClick, className }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>     
        {text}  
    </button>
  );
};

export default Buttons; 