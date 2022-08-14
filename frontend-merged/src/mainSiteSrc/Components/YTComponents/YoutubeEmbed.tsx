import React from "react";
import PropTypes from "prop-types";

interface YoutubeEmbedProps{
    embedId:string
}
const YoutubeEmbed = (props:YoutubeEmbedProps) => (
  <div className="video-responsive">
    <iframe
      className="aspect-video w-full"
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;