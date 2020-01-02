const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.static("public"));

  // hakkimda
  server.get("/hakkimda", (req, res) => {
    return app.render(req, res, "/about");
  });
  // arama
  server.get("/arama", (req, res) => {
    return app.render(req, res, "/search", {
      s: req.query.s
    });
  });
  //post içerik
  server.get("/p/:slug", (req, res) => {
    return app.render(req, res, "/post", {
      slug: req.params.slug
    });
  });
  // kategoriler
  server.get("/k/:slug", (req, res) => {
    return app.render(req, res, "/index", { slug: req.params.slug });
  });
  // anasayfa
  server.get("/", (req, res) => {
    return app.render(req, res, "/index");
  });
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
