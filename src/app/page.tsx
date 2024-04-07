
import Banner from "../components/Banner"
import OurService from '../components/ourService'
import BrandList from '../components/BrandList'
import Feedback from '../components/Feedback'
import { GoogleTagManager } from '@next/third-parties/google'



export default function Home() {
  return (
    <>
    <GoogleTagManager gtmId="GTM-KBZSS4V8" />
     <Banner/>
     <BrandList/>
     <OurService/>
     <Feedback/>
    </> 
  );
}
