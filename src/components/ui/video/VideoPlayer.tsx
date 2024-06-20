import React from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

type PlayerRebuilt = Player & {
  controlBar?: {
    addClass: (arg: string) => void;
    removeClass: (arg: string) => void;
    show: () => void;
    hide: () => void;
  };
};

type VideoPlayerProps = {
  poster: string;
  sources: { src: string; type: string }[];
};

export const VideoPlayer = ({ options }: { options: VideoPlayerProps }) => {
  const videoRef = React.useRef<null | HTMLDivElement>(null);
  const playerRef = React.useRef<null | Player>(null);

  React.useEffect(() => {
    const vidOptions = {
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      ...options,
    };

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current && videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(
        videoElement,
        vidOptions,
        () => {
          videojs.log("player is ready");
          handlePlayerReady(player);
        },
      ));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(vidOptions.autoplay);
      player.src(vidOptions.sources);
    }
  }, [videoRef, options]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  const handlePlayerReady = (player: PlayerRebuilt) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });

    let inactivityTimeout = 0;

    const isMobile =
      Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1;
    const percentagesTracked = {
      "25": false,
      "50": false,
      "75": false,
      "100": false,
    };

    if (isMobile) {
      inactivityTimeout = 800;
    }

    function debounce(func: () => void, duration: number) {
      let timeout: string | number | NodeJS.Timeout | undefined;

      return function () {
        const effect = () => {
          timeout = undefined;

          return func.apply(player);
        };

        clearTimeout(timeout);
        timeout = setTimeout(effect, duration);
      };
    }

    // Function to send event to GA4
    // function trackVideoProgress(percentage) {
    //   window.dataLayer = window.dataLayer || [];

    //   if (!percentagesTracked[percentage]) {
    //     percentagesTracked[percentage] = true;
    //     //gtag('event', 'video_progress', {
    //     //'event_category': 'Video',
    //     //'event_label': `Video ${percentage}% watched`,
    //     //'value': percentage
    //     //});
    //     window.dataLayer.push({
    //       event: "video_progress",
    //       percentage_watched: percentage,
    //       video_title: "Introduction to Chainguard Images (homepage)",
    //     });
    //   }
    // }

    let mouseTimeoutId: string | number | NodeJS.Timeout | undefined;
    let wakeTime = 1300; // how long to wait before hiding cursor

    function hideMouseCursor() {
      if (document.body.style.cursor !== "none") {
        document.body.style.cursor = "none";
      }
    }
    function showMouseCursor() {
      clearTimeout(mouseTimeoutId);
      if (document.body.style.cursor !== "default") {
        document.body.style.cursor = "default";
      }
    }

    function manageControlBarVisibility() {
      var inactivityTimeout = 1; // Adjust as needed
      var timeoutId: string | number | NodeJS.Timeout | undefined;
      var isHovering = false; // Flag to track mouse hover state

      function hideControlBarSmoothly() {
        // Add the class to hide the control bar with a fade out transition
        player?.controlBar?.addClass("vjs-control-bar-hidden");
      }

      function showControlBarSmoothly() {
        // Remove the class to show the control bar with a fade in transition
        player?.controlBar?.removeClass("vjs-control-bar-hidden");
      }

      function startInactivityTimeout() {
        clearTimeout(timeoutId); // Clear any existing timeout
        timeoutId = setTimeout(function () {
          if ((!isHovering && !player.paused()) || player.isFullscreen()) {
            hideControlBarSmoothly();
          }
        }, inactivityTimeout);
      }

      player.on("mousemove", () => {
        if (player.isFullscreen()) {
          isHovering = true;
          showControlBarSmoothly();
          debounce(startInactivityTimeout, 500)();
        }
      });
      player.el().addEventListener("mouseover", () => {
        if (!player.isFullscreen()) {
          isHovering = true;
          showControlBarSmoothly();
        }
      });
      player.el().addEventListener("mouseout", () => {
        isHovering = false;
        startInactivityTimeout();
      });

      //ENTER FULLSCREEN FUNCTIONALITY
      player.on("fullscreenchange", () => {
        //console.log('player.isFullscreen(): ', player.isFullscreen())
        if (player.isFullscreen()) {
          inactivityTimeout = 800;
          document.onmousemove = function () {
            // wake up on mouse move ...
            showMouseCursor();
            // goto sleep after a few moments
            mouseTimeoutId = setTimeout(hideMouseCursor, wakeTime);
          };
          document.onmousedown = function () {
            // wake up on mouse click
            showMouseCursor();
            // goto sleep after a few moments
            mouseTimeoutId = setTimeout(hideMouseCursor, wakeTime);
          };

          startInactivityTimeout();
        } else {
          inactivityTimeout = 1;
          clearTimeout(timeoutId);
          showMouseCursor();
          //REMOVE quasi-EVENT LISTENERS FOR MOUSE TIME OUT HERE
          document.onmousemove = null;
          document.onmousedown = null;
          if (isMobile) {
            showControlBarSmoothly();
          }
        }
      });

      // Initialize with the control bar shown
      showControlBarSmoothly();
    }

    const videoElement = player.el();
    const bigPlayBtn = document.querySelector<HTMLButtonElement>(
      ".vjs-big-play-button",
    );
    //const controlsBar = document.querySelector('.vjs-control-bar');

    player.playsinline(true);

    player.on("play", () => {
      if (bigPlayBtn) {
        bigPlayBtn.style.display = "none";
        player?.controlBar?.show();

        // window.dataLayer = window.dataLayer || [];
        // window.dataLayer.push({
        //   event: "video_start",
        //   video_title: "Introduction to Chainguard Images (homepage)",
        // });
      }
    });

    player.on("ended", function () {
      // replayButton.style.display = 'block';
      //player.bigPlayButton.hide();
      if (bigPlayBtn) {
        bigPlayBtn.style.display = "block";
        //controlsBar.style.display = 'none';
        player?.controlBar?.hide();

        //console.log('before:', window.dataLayer)
        // window.dataLayer = window.dataLayer || [];
        // window.dataLayer.push({
        //   event: "video_complete",
        //   video_title: "Introduction to Chainguard Images (homepage)",
        // });
      }

      //alert('video is done!');
      //console.log('after:', window.dataLayer)
    });

    player.on("pause", () => {
      //console.log('video paused')
    });

    player.on("touchstart", function (e: { target: { nodeName: string } }) {
      //console.log('e.target.nodeName: ', e.target.nodeName)
      if (e.target.nodeName === "VIDEO") {
        if (player.paused()) {
          player.play();
          //player.controlBar.show();
        } else {
          player.pause();
          //player.controlBar.show();
        }
      }
    });

    // player.on("timeupdate", function () {
    //   const percentageWatched = Math.floor(
    //     (player.currentTime() / player.duration()) * 100,
    //   );
    //   if (percentageWatched >= 25) trackVideoProgress("25");
    //   if (percentageWatched >= 50) trackVideoProgress("50");
    //   if (percentageWatched >= 75) trackVideoProgress("75");
    //   if (percentageWatched >= 100) trackVideoProgress("100");
    // });

    manageControlBarVisibility();
  };

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoPlayer;
