import Video1 from "../assets/video/video-1.mp4";
import Video2 from "../assets/video/video-2.mp4";
import Video3 from "../assets/video/video-3.mp4";


import IMG1 from "../assets/images/img-1.jpg";
import IMG2 from "../assets/images/img-2.jpg";
import IMG3 from "../assets/images/img-3.jpg";

import TRACK1 from "../assets/track/video-1.en.vtt";
import TRACK2 from "../assets/track/video-2.en.vtt";
import TRACK3 from "../assets/track/video-3.en.vtt";


import FULLSCREENICON from "../assets/icons/fullscreen.png";
import EXITICON from "../assets/icons/exit.png";
import PLAYICON from "../assets/icons/play.png";
import PAUSEICON from "../assets/icons/pause.png";

const ICONS = {FULLSCREENICON,EXITICON,PLAYICON,PAUSEICON};
export default ICONS;
export const DATA  = [
    {
      thumbnail:IMG1,
      video: Video1,
      track:TRACK1,
      title: "Welcome",
      options: [
        { text: "Campaign Structure", linkIndex: 1 },
        { text: "Learn Facebook Basics", linkIndex: 2 },
        { text: "3rd Choice", linkIndex: 1 },
      ],
    },
    {
      thumbnail:IMG2,
      track:TRACK2,
      video: Video2,
      title: "Funnel2 : Freebie or Coaching",
      buttons: [{ text: 'Download "Campaign Structure Guide"' }],
    },
    {
      thumbnail:IMG3,
      track:TRACK3,
      video: Video3,
      title: "Funnel 3 : Webinar Signup",
      buttons: [{ text: "Sign up for free webinar" }],
    },
  ];
