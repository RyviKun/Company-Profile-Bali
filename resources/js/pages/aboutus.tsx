import AppLayout from "@/components/layout/appLayout"
import History from "@/components/sections/history"
import Experience from "@/components/sections/experience"
import Overview from "@/components/sections/overview"

export default function AboutUs(){
    const navigationProps = [
    { title: "Home", href: "/",  },
    { title: "Experience", href: "#experience" },
    { title: "Overview", href: "#overview" }
  ];

    return (
        <AppLayout navigation={navigationProps}>
           {/* Page Title */}
                {/* Overview Section */}
                <section id="overview" className="bg-primary  pt-10 md:pt-0 md:py-16">
                    <Overview/>
                </section>

                {/* Experience Section */}
                <section id="experience" className="bg-background py-16 px-6 md:px-12" >
                    <Experience/>
                </section>

                {/* History Section */}
                {/*
                <section id="history" className="bg-background py-16" >
                    <History/>
                </section>*/}
                
        </AppLayout>
    )
}
