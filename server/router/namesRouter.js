const express = require('express');
const router = express.Router();
const 
      {
        getAllNames,
        getNumorologyDetails,
        getNumorologyDetailsbyId,
        getHouseNames,
        getBoyNames,
        getGirlNames,
        getGodNames,
        getGodNamesbyId
      } = require('../controllers/namesController');

router.route("/").get(getAllNames);

router.route("/numorology").get(getNumorologyDetails);

router.route("/numorology/:id").get(getNumorologyDetailsbyId);

router.route("/housenames").get(getHouseNames);

router.route("/boy").get(getBoyNames);

router.route("/girl").get(getGirlNames);

router.route("/godnames").get(getGodNames);

router.route("/godnames/:id").get(getGodNamesbyId);

module.exports = router ;



