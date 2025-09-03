type GradientContainerProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

const GradientContainer = ({
  title,
  subtitle,
  children,
}: GradientContainerProps) => {
  return (
    <div
      className='
        w-full
        bg-gradient-to-br from-violet-100 via-white to-cyan-100
        rounded-3xl shadow-md p-8 sm:p-10 font-primary
      '
    >
      <h2 className='text-3xl sm:text-4xl font-bold text-gray-900'>{title}</h2>
      {subtitle && <p className='text-gray-700 mt-2'>{subtitle}</p>}

      {/* Custom content (e.g. buttons, links, etc.) */}
      <div className='mt-6 flex flex-wrap gap-3'>{children}</div>
    </div>
  );
};

export default GradientContainer;
