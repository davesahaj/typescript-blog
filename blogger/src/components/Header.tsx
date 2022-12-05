import { Link } from "react-router-dom";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-[#efefef] shadow-md h-[60px] fixed w-screen flex items-center justify-center gap-36 text-xl font-sans z-50">
      <Link className="capitalize mr-" to="/">
        Home
      </Link>

      <Link className="capitalize mr-" to="/create">
        Create
      </Link>

      <Link className="capitalize" to="/manage">
        Manage
      </Link>
    </div>
  );
};

export default Header;
