const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

// ---------------------------------------------------------------------------

const app = express();
app.use(express.static("public"));
dotenv.config({ path: "./config.env" });

if (process.env.NODE_ENV === 'dev') {
  app.use(cors());
}

if (process.env.NODE_ENV !== 'dev') {
  console.log = function() {}
}

// ---------------------------------------------------------------------------

const getAddressInfo = async (address, res) => {
  try {
    let response = await axios.get(`http://api.ipstack.com/${address}?access_key=${process.env.IPSTACK_API_KEY}`);

    if (response.data.success === false) {
      return res.status(500).json({
        success: false,
        data: null,
      });
    }

    // change http to https for flag image url
    const flag = response.data.location.country_flag;
    if (flag) {
      response.data.location.country_flag = `${flag.substring(0, 4)}s${flag.substring(4, flag.length)}`;
    }

    return res.json({
      success: true,
      data: {
        ...response.data,
        maps_url: `https://maps.google.com/?q=${response.data.latitude},${response.data.longitude}`,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

// ---------------------------------------------------------------------------

app.get("/get_address_info/:address", async (req, res) => {
  await getAddressInfo(req.params.address, res);
});

// ---------------------------------------------------------------------------

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
