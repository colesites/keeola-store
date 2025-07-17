import Hero from "@/components/Hero";
import HomeCrochet from "@/components/HomeCrochet";
import HomeClothes from "@/components/HomeClothes";
import CustomersFeedback from "@/components/CustomersFeedback";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";

const page = () => {
  return (
    <section>
      <Hero />
      <HomeCrochet />
      <HomeClothes />
      {/* <CustomersFeedback /> */}
      <FAQ />
      <Features />
    </section>
  );
};

export default page;
