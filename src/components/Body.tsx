import "./body.scss";
type Props = {
  children?: React.ReactNode;
};

const Body = ({ children }: Props) => {
  return <div className='body'>{children}</div>;
};
export default Body;
