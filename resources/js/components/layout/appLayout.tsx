import Navbar from "@/components/myComponent/navbar" 
import Footer from "@/components/myComponent/footer"
import {ReactNode} from "react"
import { Head } from '@inertiajs/react';


interface NavbarProps{
    navigation:{
         title: string;
         href: string;
    }[],
    children? : ReactNode;
}

export default function AppLayout({navigation, children} : NavbarProps) {
    
    return (

        <div className=" w-full h-fit min-h-screen bg-gray-900">
          
            <Navbar navigation={navigation}/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
}
