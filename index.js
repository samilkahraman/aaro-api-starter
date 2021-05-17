const Aaro = require("aaro");
const { token } = require("./token");

const baseUrl = `https://erp2.aaro.com.tr`;

(async () => {
  const accessToken = await token(baseUrl, "username", "password");

  const aaro = new Aaro({
    baseUrl: baseUrl,
    accessToken: accessToken.data.access_token,
  });

  const stocks = await aaro.get("Stok");
  console.log(stocks.data.Model);
})();
