import Myvideo from "/videos/Encompass_video-0.1.mp4";
import './background-video.css'

export default function Video(){
return (
    <div className='video-background'>
      <video src={Myvideo} autoPlay loop muted playsInline />
      </div>
     );
     }