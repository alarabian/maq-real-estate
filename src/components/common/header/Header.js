"use client";
import TopHeader from "./top-header/TopHeader";
import Menu from "./menu/Menu";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <header className={pathname === "/" ? "header_sec active" : "header_sec"}>
        <TopHeader />
        <Menu />
      </header>
    </>
  );
};

export default Header;
