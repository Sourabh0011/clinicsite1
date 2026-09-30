import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { BookBanner } from "@/components/BookBanner";
import { ContactStrip } from "@/components/ContactStrip";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ContactStrip />
        <About />
        <Services />
        <WhyChooseUs />
        <BookBanner />
        <Testimonials />
        <Faq />
        <Team />
        <Blog />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
