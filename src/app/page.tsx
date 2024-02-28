import Image from "next/image"
import Banner from "../components/Banner"
import Team from '../components/Team'
import OurService from '../components/ourStory'
import BrandList from '../components/BrandList'


export default function Home() {
  return (
    <>
     <Banner/>
     <OurService/>
     <BrandList/>
     <Team/>
    </> 
  );
}
