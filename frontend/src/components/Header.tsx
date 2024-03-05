import Link from "next/link";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import createUser from "../../hooks/User";
import { getSession } from "@auth0/nextjs-auth0";

const Header = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) {
    await createUser({
      auth0Id: user.sub,
      email: user.email,
    });
  }
  return (
    <div className="border-b-2 border-b-primary py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          className="text-3xl font-bold tracking-tight text-primary"
          href="/"
        >
          HungryEats
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
