import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <nav>
        <Link href='/' className={router.pathname === "/" ? "active" : ""}>Home</Link>
        <Link href='/about' className={router.pathname === "/about" ? "active" : ""}>About</Link>
        <div onClick={() => {
          router.push('/')
          }}
        >
          Home
        </div>
      </nav>
    </>
  );
};

export default Header;