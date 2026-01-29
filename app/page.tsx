import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Tech from "@/components/Tech";
import UseCases from "@/components/UseCases";
import Trust from "@/components/Trust";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default function Home() {
    return (
        <main className="relative">
            <Loading />
            <Hero />
            <Mission />
            <Problem />
            <Solution />
            <Tech />
            <UseCases />
            <Trust />
            <Team />
            <Footer />
        </main>
    );
}
