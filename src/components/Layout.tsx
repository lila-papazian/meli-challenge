import "./layout.scss";
type Props = {
  children?: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return <div className='layout'>{children}</div>;
};

export default Layout;
