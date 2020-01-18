import React from "react";

const Loading = () => (
  <div className="loading-container">
    <img src="/loading.gif" alt="loading" />
    <style jsx>{`
    .loading-container{
        text-align:center;
    }
    `}</style>
  </div>
);

export default Loading;
