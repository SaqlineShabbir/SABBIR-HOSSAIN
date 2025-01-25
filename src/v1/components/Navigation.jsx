import Image from "next/image";
import Link from "next/link";
import logo from "../assets/shlogo.PNG";
const Navigation = () => {
  return (
    <div className="md:px-20 px-5  py-5 max-w-screen-xl">
      <Link href="/">
        <Image
          className="h-8 w-8  animate-border-shape"
          src={logo}
          alt="Profile Picture"
        />
      </Link>
    </div>
  );
};

export default Navigation;
