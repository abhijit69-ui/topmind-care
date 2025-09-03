interface Props {
  href: string;
  label: string;
  className?: string;
}
const BtnLink = ({ href, label, className = '' }: Props) => {
  return (
    <a href={href} className={` ${className}`}>
      <span>{label}</span>
    </a>
  );
};

export default BtnLink;
