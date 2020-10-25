module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    test: 'test string response',
    testEnvVariable: process.env.TEST_VAR
  })
}