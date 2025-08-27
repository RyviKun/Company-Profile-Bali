import { type ReactNode } from 'react';

interface NavbarProps{
  navigation:{
         title: string;
         href: string;
    }[],
  children? : ReactNode;
}

export default function Navbar ({navigation, children } : NavbarProps){

   

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
              <img src="/images/logo/logo.png"
              className="h-20 w-auto max-w-[160px] object-contain"
/>
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