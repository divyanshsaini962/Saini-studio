import Image from "next/image"
import Banner from "../components/Banner"
import Team from '../components/Team'
import OurStory from '../components/ourStory'
import BrandList from '../components/BrandList'


export default function Home() {
  return (
    <>
     <Banner/>
     <OurStory/>
     <BrandList/>
     <Team/>
    </> 
  );
}
