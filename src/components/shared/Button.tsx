interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className = '', onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`text-white px-5 py-2 rounded-xl shadow-md transition-colors font-medium font-secondary ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
