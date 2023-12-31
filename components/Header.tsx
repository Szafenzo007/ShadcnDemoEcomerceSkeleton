"use-client";



import Link from "next/link";
import { useTheme } from "next-themes";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { ShoppingCartIcon,Moon , Sun , Menu } from "lucide-react";
import { SunIcon,MoonIcon  } from "@radix-ui/react-icons";
import { Avatar } from "./ui/avatar";
import ProfileButton from "./ui/ProfileButton";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
 
 

const Header = () => {
  const {theme,setTheme} = useTheme();
  const routes= [
  {
    href: "/",
    label: "Products",
  },
  {
    href: "/",
    label: "Categories",
  },
  {
    href: "/",
    label: "On Sale",
  },
]
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm-px-6 
        lg:px-8 flex h-16 items-center justify-between w-full">

          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side='left'
                        className="w-[300px] sm:w-[400px]">
                          <nav className="flex flex-col gap-4">
                              {routes.map((route,i) => (
                                <Link 
                                  key={i} 
                                  href={route.href}
                                  className="block px-2 py-1 text-lg">
                                    {route.label}
                                  </Link>
                                  ))}
                          </nav>
                        </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">SzafaStore</h1>
            </Link>
          </div>
          <nav className="mx-6 flex items-center spaxe-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route,i) => (
              <Button asChild variant='ghost'>
                <Link 
                  key={i}
                  href={route.href}
                  className="text-sm font-medium transition-colors">
                    {route.label}
                  </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button 
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shoping Cart">
                <ShoppingCartIcon  className="h-6 w-6" />
                <span className="sr-only">Shoping Cart</span>
              </Button>
              <Button 
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all
                dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all
                dark:-rotate-0 dark:scale-100" />
              </Button>
              <ProfileButton />

          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header