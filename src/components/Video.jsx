import { Control } from "./Control";
import { useState, useRef, useEffect } from "react";
import { exitFullScreen, fullScreen, onLoadEnd, onPlay } from "../methods/methods";
import ICON from "../static/data";
export function Video({title, src, thumbnail, track }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [playbackSpeed, setPlayBackSpeed] = useState(1);
  const [isCaptionOn, setIsCaptionOn] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [duration, setDuration] = useState({
    seconds: "00",
    minutes: "00",
    hours: "00",
  });
  let animationRef = useRef();
  let videoRef = useRef();
  let progressRef = useRef();
  let timerRef = useRef();
  

  // FUNCTION : animate the progress bar and the playtime text
  function animateProgress() {
    if (isPlaying) {
      let currentTime = videoRef.current.currentTime;
      let vidDuration = videoRef.current.duration;
      let val = (currentTime / vidDuration) * 100;
      let hours = parseInt(currentTime / 3600);
      let minutes = parseInt((currentTime - 3600 * hours) / 60);
      let seconds = parseInt(currentTime - 3600 * hours - minutes * 60);

      seconds = seconds > 9 ? seconds : "0" + seconds;
      minutes = minutes > 9 ? minutes : "0" + minutes;
      hours = hours > 9 ? hours : "0" + hours;
      timerRef.current.innerText = `${minutes}:${seconds} / ${duration.minutes}:${duration.seconds}`;

      val < 100
        ? ((progressRef.current.value = val),
          (animationRef.current = requestAnimationFrame(animateProgress)))
        : setIsPlaying(false);
    }
  }

  //everytime isPlaying, playbackSpeed, isCaptionOn changes this useeffect will execute 
  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      animateProgress();
      videoRef.current.playbackRate = playbackSpeed;
    } else {
      videoRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }

    // clears the animationFrame of the component
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPlaying, playbackSpeed, isCaptionOn]);

  return (
    <div className="relative flex flex-col items-stretch justify-end w-full h-full">
      
      <div className="h-[1%] w-full flex items-center justify-center hover:scale-y-[4.5] z-10 transition-all">
        <progress
          min="0"
          max="100"
          value="0"
          ref={progressRef}
          className="w-full h-full"
        ></progress>
      </div>
      <video
        poster={thumbnail}
        ref={videoRef}
        onPlay={() => onPlay(videoRef)}
        onLoadStart={() => setIsLoading(true)}
        onLoadedData={() => {
          setIsLoading(false);
          onLoadEnd(videoRef, setDuration);
        }}
        // autoPlay
        // loop
        src={src}
        className="relative object-cover w-full h-[99%]"
      >
        <track
          label="English"
          srcLang="en"
          src={track}
          default
          kind={isCaptionOn ? "captions" : "metadata"}
        ></track>
      </video>
      <div className="absolute flex flex-col items-start w-full h-[99%] bottom-0 px-4 py-4 justify-stretch">
        <div className="control-panel h-[5%] w-full flex items-center justify-end gap-2 z-[25] opacity-0">
          <p className="font-bold text-white" ref={timerRef}>
            00:00 / {duration.minutes}:{duration.seconds}
          </p>
          <Control
            onclick={() => setIsCaptionOn((prevState) => !prevState)}
            isActive={isCaptionOn}
          >
            CC
          </Control>
          <Control
            onclick={() => {
              setPlayBackSpeed((prevState) => {
                return prevState < 2 ? prevState + 0.5 : 1;
              });
            }}
            isActive={playbackSpeed !== 1}
          >
            {playbackSpeed}x
          </Control>
          <Control
            onclick={() =>
              isFullScreen
                ? exitFullScreen(videoRef, setIsFullScreen)
                : fullScreen(
                    videoRef,
                    videoRef.current.parentElement,
                    setIsFullScreen
                  )
            }
          >
            <img src={isFullScreen ? ICON.EXITICON : ICON.FULLSCREENICON}></img>
          </Control>
        </div>
        <div className="h-[95%] w-full flex items-center justify-center pb-[4rem]">
          <div
            className="absolute h-fit w-fit"
            style={{ display: isLoading ? "block" : "none" }}
          >
            <div className="h-[10px] w-[10px] bg-orange-300 rounded-full animate-pulse animate-load "></div>
          </div>
          <button
            type="button"
            className="h-[75px] w-[75px] p-4 flex items-center justify-center bg-white opacity-80 rounded-full hover:scale-110 transition-all z-10"
            onClick={() => setIsPlaying((prevState) => !prevState)}
            style={{ display: isLoading ? "none" : "flex",opacity:isPlaying?"0.1" :"1" }}
          >
            <img
              src={isPlaying ? ICON.PAUSEICON : ICON.PLAYICON}
              className="w-auto h-fit"
            ></img>
          </button>
        </div>
      </div>
      <div className="title-container absolute top-0 h-fit w-full py-8 px-4 bg-gradient-to-b from-black to-[#0000] z-20 ">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
      </div>
    </div>
  );
}
