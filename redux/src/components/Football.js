import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fetchVideos } from "../actions";

const Football = (props) => {
  useEffect(() => {
    props.fetchVideos();
  }, []);

  return (
    <section>
      <h1>Welcome To Daily Higlights!</h1>
      {props.isLoading ? <h4>Loading videos...</h4> : null}
      {props.error ? (
        <p style={{ color: "red" }}>
          Uh oh.. something went wrong {props.error}
        </p>
      ) : null}
      {props.videos.length > 0 ? (
        <div>
          {props.videos.map((video) => (
            <h2 key={video.video_title}>{video.video_name}</h2>
          ))}
        </div>
      ) : null}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchVideos })(Football);
