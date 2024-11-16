// Navbar.tsx
import { navConstants } from "../../constants/navConstants.tsx";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="border-0 w-full bg-[#FFF9BF] dark:bg-[#05131B]">
      <div className="flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <Logo />

        {/* Left Side Links */}
        <div className="flex justify-between w-[400px]">
          <div className="hidden md:flex items-center space-x-6 ml-6">
            {navConstants.left.map((item, index) => (
              <Link key={index} href={item.href} className="text-md font-bold transition-colors text-textColor-light dark:text-textColor-dark">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side Components */}
        <div className="flex items-center space-x-4">
          {navConstants.right.map((item, index) => {
            if (item.type === "button") {
              return (
                <Button key={index} variant={item.variant || "default"}>
                  {item.label}
                </Button>
              );
            } else if (item.type === "component") {
              return <div key={index}>{item.component}</div>;
            }
            return null;
          })}
        </div>
      </div>
    </nav>
  );
}
