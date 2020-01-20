import Link from "next/link";

function Error({ statusCode }) {
  return (
    <div className="page-content">
      <Link href="/">
        <a>Anasayfa &rarr;</a>
      </Link>
      <img src="/error.jpg" alt="Hata!" />
      <style jsx>{`
        img {
          width: 100%;
        }
        a{
          font-size:var(--big-font-size);
          margin-top:15px;
          margin-bottom:15px;
          display:block;
          text-align:right;
        }
      `}</style>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
