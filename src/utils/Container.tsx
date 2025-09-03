interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 md:px-8 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
