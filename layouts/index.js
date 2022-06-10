import Link from "next/link";

export const Layout = (props) => {
  <div>
    <Link href={`/home`}>
      <a>Home</a>
    </Link>

    <Link href={`/register`}>
      <a>Register</a>
    </Link>

    <Link href={`/login`}>
      <a>Login</a>
    </Link>
  </div>;
};
