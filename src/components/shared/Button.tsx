interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className = '', onClick }: Props) => {
  return (
    <button onClick={onClick} className={`${className} cursor-pointer`}>
      {children}
    </button>
  );
};

export default Button;
