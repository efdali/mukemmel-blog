import React from "react";
import Head from "next/head";
function Search(props) {
  return (
    <div>
      <Head>
        <title>Arama</title>
      </Head>
      <h1>Arama Sayfası</h1>
      {props.s}
    </div>
  );
}

Search.getInitialProps = async ({ query }) => {
  const s = query.s;
  return { s };
};

export default Search;