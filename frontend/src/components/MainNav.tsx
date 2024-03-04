import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function MainNav() {
  const session = await getSession();
  const user = session?.user;
  return (
    <>
      {!user && (
        <Link href="/api/auth/login" className="font-semibold text-primary">
          Log In
        </Link>
      )}
      <div className="flex gap-4 items-center text-semibold">
        {user && <div className="text-primary">{user.name}</div>}
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={user?.picture} />
                <AvatarFallback>{user?.name}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="font-semibold text-center block">
                <Link href="/api/auth/logout">Log Out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </>
  );
}
