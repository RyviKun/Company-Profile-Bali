import AppLayout from "@/components/layout/appLayout"
import History from "@/components/sections/History"
import Experience from "@/components/sections/experience"
import Overview from "@/components/sections/overview"

export default function AboutUs(){
    return (
        <AppLayout>
           {/* Page Title */}
                {/* Overview Section */}
                <section className="bg-primary py-16">
                    <Overview/>
                </section>

                {/* Experience Section */}
                <section className="bg-background py-16 px-6 md:px-12" >
                    <Experience/>
                </section>

                {/* History Section */}
                <section className="bg-background py-16" >
                    <History/>
                </section>
        </AppLayout>
    )
}