import React from "react";
import { Button } from "./ui/button";

export default function MainNav() {
  return (
    <Button
      variant="ghost"
      className="font-bold hover:text-primary hover:bg-white"
    >
      Log In
    </Button>
  );
}
