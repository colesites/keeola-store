import Hero from "@/components/Hero";
import HomeCrochet from "@/components/HomeCrochet";
import HomeClothes from "@/components/HomeClothes";
import CustomersFeedback from "@/components/CustomersFeedback";
import FAQ from "@/components/FAQ";

const page = () => {
  return (
    <section>
      <Hero />
      <HomeCrochet />
      <HomeClothes />
      <CustomersFeedback />
      <FAQ />
    </section>
  );
};

export default page;
