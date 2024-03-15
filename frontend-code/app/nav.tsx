"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./components/ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="User">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Buy Tickets</HoveredLink>
            <HoveredLink href="/interface-design">View Purchased Tickets</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Admin">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">List NFT</HoveredLink>
            <HoveredLink href="/individual">Mark Attendance</HoveredLink>
            <HoveredLink href="/team">View Metadata</HoveredLink>
          </div>
        </MenuItem>
        <button className="bg-transparent text-red-500"> Connect</button>
      </Menu>
    </div>
  );
}
