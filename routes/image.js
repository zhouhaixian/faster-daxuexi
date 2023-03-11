const express = require("express");
const router = express.Router();
const undici = require("undici");

const imageUrlPattern =
  "https://h5.cyol.com/special/daxuexi/:id/images/end.jpg";

router.get("/:id.jpg", async function (req, res, next) {
  const endImageUrl = imageUrlPattern.replace(
    ":id",
    req.params.id.replace(".jpg", "")
  );
  const endImageResponse = await undici.request(endImageUrl);
  res.writeHead(endImageResponse.statusCode, endImageResponse.headers);
  endImageResponse.body.pipe(res);
});

module.exports = router;
