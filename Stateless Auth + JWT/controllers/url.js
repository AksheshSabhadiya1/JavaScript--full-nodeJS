const { nanoid } = require("nanoid");
const URL = require("../models/url");

const generateNewShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }
  const shortId = nanoid(8);

  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user.id,
  });

  return res.render('Home',{id: shortId})

};

const getAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return result
    ? res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
      })
    : res.json("Analytics Not Found");
};

const getURLById = async (req, res) => {
  const shortId = req.params.shortId;
  const data = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now(), date: new Date() } } }
  );
  data ? res.redirect(data.redirectURL) : res.json({ error: "URL Not Found" });
}

module.exports = { generateNewShortURL, getAnalytics, getURLById };
