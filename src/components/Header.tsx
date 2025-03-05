
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo & Explore */}
        <div className="flex items-center space-x-4">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy Logo"
            className="h-6"
          />
          <span className="text-gray-700 font-medium cursor-pointer hover:text-black">Explore</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center flex-1 mx-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search for anything"
              className="pl-10 pr-4 py-2 rounded-full border-gray-300 focus:ring focus:ring-purple-300"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-black">Plans & Pricing</a>
          <a href="#" className="hover:text-black">Udemy Business</a>
          <a href="#" className="hover:text-black">Teach on Udemy</a>
          <ShoppingCart size={20} className="cursor-pointer hover:text-black" />
        </nav>

        {/* Auth Buttons & Language */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-purple-600 text-purple-600">
            Log in
          </Button>
          <Button className="bg-purple-600 text-white hover:bg-purple-700">
            Sign up
          </Button>
          <Globe className="cursor-pointer text-gray-600 hover:text-black" size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
