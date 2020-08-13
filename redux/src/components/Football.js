import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fetchVideos } from "../actions/footballAction";

const Football = (props) => {
  useEffect(() => {
    props.fetchVideos();
  }, []);

  console.log(props.videos);
  return (
    <section>
      <h1>Welcome To Football Videos</h1>
      {props.isLoading ? <h4>Loading videos...</h4> : null}
      {props.error ? (
        <p style={{ color: "red" }}>
          Uh oh.. something went wrong {props.error}
        </p>
      ) : null}
      {props.videos.length > 0 ? (
        <div style={{ width: "500px", margin: "5px auto" }}>
          {props.videos.map((video) => (
            <div dangerouslySetInnerHTML={{ __html: video.embed }} />
          ))}
        </div>
      ) : null}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos.slice(0, 4),
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchVideos })(Football);
