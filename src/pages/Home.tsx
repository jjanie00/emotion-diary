import { getEmotionImages } from "../utils/get-emotion-images";

// main page
export default function Home() {
  
  
  return (
    <>
    <div>홈</div>
    <div className="flex">
      <img src={getEmotionImages(1)}/>
      <img src={getEmotionImages(2)}/>
      <img src={getEmotionImages(3)}/>
      <img src={getEmotionImages(4)}/>
      <img src={getEmotionImages(5)}/>
      <img src={getEmotionImages(6)}/>
    </div>
    </>
  )
}
