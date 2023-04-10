const RoundedButton = ({ onClick, children }) => {
  return (
    <button
      className="flex justify-center content-center p-2 rounded-full text-blue-500 border-2 border-blue-500 bg-blue-200 hover:bg-blue-300 transition-all"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default RoundedButton;
