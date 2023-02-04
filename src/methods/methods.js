const animationStyles={
  fadeIn : "animate-fadeIn",
  fadeOut : "animate-fadeOut"
}

export function fullScreen(videoRef, elem, setIsFullScreen) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
  videoRef.current.style.objectFit = "contain";
  setIsFullScreen((prevState) => !prevState);
}

export function exitFullScreen(videoRef, setIsFullScreen) {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  videoRef.current.style.objectFit = "cover";
  setIsFullScreen((prevState) => !prevState);
}

export function onLoadEnd(videoRef, setDuration) {
  let duration = videoRef.current.duration;
  let hours = parseInt(duration / 3600);
  let minutes = parseInt((duration - 3600 * hours) / 60);
  let seconds = parseInt(duration - 3600 * hours - minutes * 60);
  setDuration({
    seconds: seconds > 9 ? seconds : "0" + seconds,
    minutes: minutes > 9 ? minutes : "0" + minutes,
    hours: hours > 9 ? hours : "0" + hours,
  });
}

export function onPlay(videoRef) {
  let parentElement = videoRef.current.parentElement;
  parentElement
    .querySelector(".control-panel")
    .classList.add(animationStyles.fadeIn);
  parentElement
    .querySelector(".title-container")
    .classList.add(animationStyles.fadeOut);
}
