"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Switch } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import UserDropdown from "./user-dropdown";
import { SearchInd } from "./search-ind";


// links for each route
const links = [
  { name: "Genres", href: "/genre" },
  { name: "Popular", href: "/popular" },
  { name: "Bookmark", href: "/bookmark" },
];

export default function NavbarTop() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="flex justify-around items-center mx-auto py-2 px-5 bg-white">
      {/* Left Section - Logo and Links */}
      <div className="flex items-center space-x-6">
        <Link href="/" className="outline-amber-500 rounded-full">
          <img
            src="https://placehold.co/100"
            alt="logo"
            className="size-20 rounded-full"
          />
        </Link>
        <div className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-xl hover:text-red-700",
                {
                  "text-red-700": pathname === link.href,
                }
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section - Search, Switch, and User Dropdown */}
      <div className="flex items-center space-x-4">
        <SearchInd />

        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={clsx(
            "relative inline-flex h-6 w-11 items-center rounded-full transition",
            enabled ? "bg-slate-500" : "bg-red-700"
          )}
        >
          <span
            className={clsx(
              "inline-block h-4 w-4 transform rounded-full bg-white transition",
              enabled ? "translate-x-6" : "translate-x-0"
            )}
          />
        </Switch>

        <UserDropdown />
      </div>
    </div>
  );
}
