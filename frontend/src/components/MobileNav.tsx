import React from "react";
import { getSession } from "@auth0/nextjs-auth0";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function MobileNav() {
  const session = await getSession();
  const user = session?.user;
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-primary" />
        </SheetTrigger>
        <SheetContent className="space-y-3">
          <SheetTitle>
            {user ? (
              <div className="flex justify-center items-center gap-4">
                <Avatar>
                  <AvatarImage src={user?.picture} className="text-center" />
                  <AvatarFallback>{user?.name}</AvatarFallback>
                </Avatar>
                <p>{user?.name}</p>
              </div>
            ) : (
              <p className="text-center">Welcome to HungryEats</p>
            )}
          </SheetTitle>
          <Separator />
          <SheetDescription>
            {user ? (
              <div className="w-full flex flex-col gap-2">
                <Link href="/user-profile">
                  <Button className="w-full">Profile</Button>
                </Link>
                <Link href="/api/auth/logout" className="w-full">
                  <Button className="flex-1 font-bold bg-primary w-full">
                    Log out
                  </Button>
                </Link>
              </div>
            ) : (
              <Link href="/api/auth/login" className="w-full">
                <Button className="flex-1 font-bold bg-primary w-full">
                  Log In
                </Button>
              </Link>
            )}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}
