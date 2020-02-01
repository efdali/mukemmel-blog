import React from "react";

const Loading = () => (
  <div className="loading-container">
    <img src="/loading.gif" alt="loading" />
    <style jsx>{`
    .loading-container{
        text-align:center;
        margin-top:10px;
    }
    `}</style>
  </div>
);

export default Loading;
