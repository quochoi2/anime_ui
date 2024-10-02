import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({ id, publicId, posterUrl, width, height, ...props }) => {
  const videoRef = useRef();
  const cloudinaryRef = useRef();
  const playerRef = useRef();

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = window.cloudinary;

    playerRef.current = cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: "dfjgjy715",
      secure: true,
    });
  }, []);

  return (
    <div
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "auto",
      }}
    >
      <video
        id={id}
        playsInline
        src={posterUrl}
        ref={videoRef}
        controls
        data-cld-public-id={publicId}
        poster={posterUrl}
        {...props}
        className="h-full max-h-[530px] w-full object-cover"
      >
        <track
          kind="captions"
          label="English captions"
          src="#"
          srcLang="en"
          default
        />
      </video>
    </div>
  );
};

VideoPlayer.propTypes = {
  id: PropTypes.string.isRequired,
  publicId: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  posterUrl: PropTypes.string,
};

export default VideoPlayer;
