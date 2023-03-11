const express = require("express");
const router = express.Router();
const undici = require("undici");
const cheerio = require("cheerio");

const indexPageUrl = "http://news.cyol.com/gb/channels/vrGlAKDl/index.html";
const courseUrlPattern = "https://h5.cyol.com/special/daxuexi/:id/m.html".split(
  ":id"
);

router.get("/", async function (req, res, next) {
  const indexPage = await undici.fetch(indexPageUrl).then((res) => res.text());
  const latestCourseUrl = cheerio
    .load(indexPage)("body > div.item > div > ul > li:nth-child(1) > h3 > a")
    .attr("href");

  const id = latestCourseUrl
    .replace(courseUrlPattern[0], "")
    .replace(courseUrlPattern[1], "");
  const latestCourseTitle = await undici
    .fetch(latestCourseUrl.replace("m.html", "index.html"))
    .then((res) => res.text())
    .then((html) => cheerio.load(html)("h1").text());
  res.render("index", {
    title: latestCourseTitle,
    imageUrl: `./image/${id}.jpg`,
  });
});

module.exports = router;
