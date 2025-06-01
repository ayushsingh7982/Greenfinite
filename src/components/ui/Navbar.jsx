import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="w-full">
      <NavigationMenu className="w-full bg-transparent p-6 shadow text-white font-brand"> 
        <NavigationMenuList className="flex justify-center w-full max-w-7xl mx-auto text-white font-brand">
          <NavigationMenuItem className="flex justify-center">
            <Link
              to="/"
              className="block text-white rounded px-4 py-2 hover:text-black hover:border-2 hover:border-white hover:border-solid transition-colors duration-150 font-brand"
            >
              HOME
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center">
            <Link
              to="/about"
              className="block text-white rounded px-4 py-2 hover:text-black hover:border-2 hover:border-white hover:border-solid transition-colors duration-150 font-brand"
            >
              ABOUT US
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex justify-center">
            <Link
              to="/contact"
              className="block text-white rounded px-4 py-2 hover:text-black hover:border-2 hover:border-white hover:border-solid transition-colors duration-150 font-brand"
            >
           <h1 className="font-brand text-4xl text-white">Is Tailwind Config Working?</h1>

            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
