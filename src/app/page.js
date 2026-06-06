import AdoptionProcess from "./components/AdoptionProcess";
import Banner from "./components/Banner";
import FeaturedPets from "./components/FeaturedPets";
import OurImpact from "./components/OurImpact";
import PetCareTips from "./components/PetCareTips";
import SuccessStories from "./components/SuccessStories";
import WhyAdoptPets from "./components/WhyAdoptPets";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/pet`);
  const pets = await res.json();
  return (
    <div>
      <Banner></Banner>
      <FeaturedPets pets={pets}></FeaturedPets>
      <WhyAdoptPets></WhyAdoptPets>
      <SuccessStories></SuccessStories>
      <PetCareTips></PetCareTips>
      <OurImpact></OurImpact>
      <AdoptionProcess></AdoptionProcess>
    </div>
  );
}
