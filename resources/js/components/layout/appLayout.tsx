import Navbar from "@/components/myComponent/navbar" 
import Footer from "@/components/myComponent/footer"
import {ReactNode} from "react"

interface NavbarProps{
    children? : ReactNode;
}

export default function AppLayout({children} : NavbarProps) {
    
    return (
        <div className=" w-screen h-fit min-h-screen bg-gray-900">
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
}
