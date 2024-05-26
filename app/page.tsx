import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/mode-toggle";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav
                  navItems={[
                    { name: "About", link: "#about" },
                    { name: "Projects", link: "#projects" },
                    { name: "Testimonials", link: "#testimonials" },
                    { name: "Contact", link: "#contact" },
                  ]}
                />
                <Hero />
            </div>
        </main>
    );
}
