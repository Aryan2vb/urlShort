const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/bolo", (req, res) => {
  return res.status(200).send("Hello");
});

app.use(express.json());

function generateKey(length) {
  const words =
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
  let randomKey = "";
  for (let i = 0; i < length; i++) {
    // console.log(i);
    let a = Math.floor(Math.random() * 62);
    // console.log(a);
    randomKey += words[a];
  }
  // console.log(randomKey);
  return randomKey;
}

async function createShortUrl(longUrl) {
  const retries = 5;
  for (let i = 0; i < retries; i++) {
    try {
      const key = generateKey(5);
      const newShortUrl = await prisma.myurl.create({
        data: {
          shortUrl: key,
          longUrl: longUrl,
        },
      });
      return `http://localhost:3000/${key}`;
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  }
}

app.post("/generate", async (req, res) => {
  const longUrl = req.body.longUrl;

  if (!longUrl) {
    return res.status(400).send("longUrl not found");
  }

  try {
    const shortUrl = await createShortUrl(longUrl);
    res.status(200).send({ shortUrl });
  } catch (error) {
    console.error("Error generating short URL:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/:key", async (req, res) => {
  const shortUrl = req.params.key;
  try {
    const url = await prisma.myurl.findFirst({
      where: {
        shortUrl,
      },
    });
    // console.log(url);
    if (url == null || url.longUrl == null) {
      res.json({ error: "Not Found" }).status(404);
      return;
    }
    // console.log(url.longUrl);
    res.redirect(url.longUrl);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening to the Poprt ${PORT}`);
});
