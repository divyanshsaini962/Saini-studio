import Image from "next/image"
import Banner from "../components/Banner"
import OurService from '../components/ourService'
import BrandList from '../components/BrandList'
import Feedback from '../components/Feedback'


export default function Home() {
  return (
    <>
     <Banner/>
     <BrandList/>
     <OurService/>
     <Feedback/>
    </> 
  );
}
