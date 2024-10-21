// components/UserDropdown.tsx
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import clsx from "clsx";

const UserDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block group">
      <Menu.Button className="inline-flex justify-center rounded-full border-gray-300 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 group-hover:ring-2 group-hover:ring-amber-500 transition">
        <img
          src="https://placehold.co/30" // Replace with your user profile image
          alt="User  Profile"
          className="rounded-full size-14"
        />
      </Menu.Button>

      <Menu.Items className="absolute right-0 z-10 mt-3 w-56 origin-top-right bg-white border-gray-200 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <Link
              href="/"
              className={clsx("block px-4 py-2 text-sm", {
                "bg-gray-100 text-gray-900 rounded-xl": active,
                "text-gray-700": !active,
              })}
            >
              Profiles
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              href="/"
              className={clsx("block px-4 py-2 text-sm", {
                "bg-gray-100 text-gray-900": active,
                "text-gray-700": !active,
              })}
            >
              Log out
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default UserDropdown;
