import React, { useRef } from "react";
//import "./styles.css";

export default function App() {
  const canvasRef = useRef();
  const videoRef = useRef();

  const capture = () => {
    const v = videoRef.current;
    const duration = v.duration;
    const totalSecond = parseInt(duration, 10);
    Array(totalSecond + 1)
      .fill(null)
      .forEach((_, index) => {
        setTimeout(() => {
          v.currentTime = index;
          canvasRef.current.width = videoRef.current.videoWidth;
          canvasRef.current.height = videoRef.current.videoHeight;
          canvasRef.current
            .getContext("2d")
            .drawImage(
              videoRef.current,
              0,
              0,
              videoRef.current.videoWidth,
              videoRef.current.videoHeight
            );
          const newCanvas = document.createElement("canvas");
          const newCtx = newCanvas.getContext("2d");
          newCtx.drawImage(
            videoRef.current,
            0,
            0,
            videoRef.current.videoWidth,
            videoRef.current.videoHeight
          );
          //console.log("dataUrl", newCanvas.toDataURL());
        }, index * 1000);
      });

    // canvasRef.current.toBlob((blob) => {
    //   const img = new Image();
    //   img.setAttribute('crossorigin', 'anonymous');
    //   img.src = window.URL.createObjectUrl(blob);
    // })
  };

  return (
    <div className="App">
      <video
        // style={{ visibility: "hidden" }}
        id="video"
        ref={videoRef}
        src="http://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
        controls
      ></video>
      <button onClick={capture}>Capture</button>
      <canvas id="canvas" ref={canvasRef} style={{ overflow: "auto" }}></canvas>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
