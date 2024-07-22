import Myvideo from "/videos/encompass-brain-background.mp4";
import './background-video.css'

export default function Video(){
return (
    <div className='video-background'>
      <video src={Myvideo} autoPlay loop muted playsInline />
      </div>
     );
     }