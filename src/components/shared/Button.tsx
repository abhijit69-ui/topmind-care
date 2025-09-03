interface Props {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, type, className = '', onClick }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white px-5 py-2 rounded-xl shadow-md transform transition-transform duration-300
                    hover:scale-105 font-medium font-secondary ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
