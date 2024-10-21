"use client";

import { useState, Fragment } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Input, Switch, Menu } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import UserDropdown from "./user-dropdown";

// links for each route
const links = [
  { name: "Genres", href: "/genre" },
  { name: "Popular", href: "/popular" },
  { name: "Bookmark", href: "/bookmark" },
];

export default function NavbarTop() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const [searchText, setSearchText] = useState<string>("");

  return (
    <>
      <div className="flex border-black  mx-auto justify-around items-center shadow-xl">
        <div className="flex my-2 items-center justify-center ">
          <Link href={"/"}>
            <img
              src="https://placehold.co/100"
              alt="logo"
              className="size-14 rounded-full mr-2"
            />
          </Link>
          {links.map((link) => {
            return (
              <div>
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "flex text-red items-center justify-center mx-0.5 hover:text-amber-500 hover:font-semibold md:flex-none md:justify-start md:p-2 md:px-3",
                    {
                      "text-amber-500 font-semibold": pathname === link.href,
                    }
                  )}
                >
                  {/* <LinkIcon className="w-6" /> */}
                  <p className="md:block">{link.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex w-[50vh] justify-end items-end ">
          <div className="relative">
            <Input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className={clsx(
                "m-2.5 block w-64 rounded-3xl border-2 p-2 text-sm text-black outline-slate-400",
                "focus:outline-1 data-[focus]:outline-amber-500/50"
              )}
              placeholder="Search..."
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-2">
              <FaSearch className={clsx(
                "mx-auto transition-colors", searchText ? "text-amber-500" : "text-slate-400")} />
            </button>
          </div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group border-2 inline-flex h-6 w-11 my-auto items-center rounded-full bg-amber-500 transition data-[checked]:bg-blue-600"
          >
            <span className="size-4 translate-x-0 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <div className="-mb-1 mx-6">
            <UserDropdown />
          </div>
        </div>
      </div>
    </>
  );
}
