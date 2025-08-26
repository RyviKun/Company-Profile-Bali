import { type ReactNode } from 'react';

interface NavbarProps{
    children? : ReactNode;
}

export default function Navbar ({children} : NavbarProps){

   const navigation = [
    { title: "About Us", href: "/aboutus",  },
    { title: "Media", href: "#media" },
    { title: "Events", href: "#events" },
    { title: "Contacts", href: "#contact" },
  ];

  return (
    <>
      <nav
        id="navbar"
        className="bg-primary/70 backdrop-blur-sm shadow-md sticky top-0 z-50 "
        
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Brand */}
            <a className="text-xl font-bold tracking-wide" href="/">
              <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 0L20.4545 5.33333L0 25.3333V14.6667L15 0Z" fill="#06D1D4"></path>
<path d="M2.90827 28.177L15 40L30 25.3334V14.6667L20.4545 5.33337L0 25.3334L0.0041688 25.3375L20.4545 5.33337V20.6667L11.25 29.6667V20.1324L2.90827 28.177Z" fill="#3628A0"></path>
</svg>
            </a>

            {/* Navigation Links */}
            <ul className="flex space-x-6">
              {navigation.map((element, index) => (
                <a
                  
                  href={element.href}
                  className="text-background hover:text-blue-600 transition-colors"
                >
                  {element.title}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>{children}</main>
    </>
  );
}