import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ValueProposition from "@/components/landing/ValueProposition";
import Objectives from "@/components/landing/Objectives";
import Program from "@/components/landing/Program";
import Investment from "@/components/landing/Investment";
import About from "@/components/landing/About";
import FAQ from "@/components/landing/FAQ";
import CTAFinal from "@/components/landing/CTAFinal";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <Objectives />
      <Program />
      <Investment />
      <About />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  );
};

export default Index;
