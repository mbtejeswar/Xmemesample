var mongoose = require("mongoose");
var express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var jsonParser = bodyParser.json();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
app.use(urlencodedParser);
app.use(jsonParser);

/**
 * Connect to mongoose DB
 */
mongoose.connect("mongodb://localhost/XMeme", { useNewUrlParser: true });

// Enables CORS on those routes according config above
app.use(cors());
app.options("*", cors());

const memesSchema = require("./models/memes");


/**
 * Update existing meme caption / URL
 * @api {patch} /memes
 * @returns {{ success: boolean}} response
 * API returns boolean value success
 */

app.patch("/memes/:id", (req, res) => {
  console.log(req.params.id);
  if(req.params.id!==undefined){

    console.log("/patch is called")
    memesSchema.findById(req.params.id, (err, db_res) => {
      if (err) {
        return res.status(404).json({
          success: false,
        });
      } else if (db_res) {
        if (req.body.url) {
          db_res.url = req.body.url;
        }
        if (req.body.caption) {
          db_res.caption = req.body.caption;
        }
        db_res.save((err, db_res) => {
          if (err) {
            return res.status(404).json({
              success: false,
            });
          } else {
            return res.status(204).json({
              success: true,
            });
          }
        });
      } else {
        return res.status(404).json({
          success: false,
        });
      }
    });

  } else{
    return res.status(400).json({
      success: false,
    });
  }

  });

/**
 * Fetch first 100 memes from the DB
 * @api {get} /memes
 * @returns {{ success: boolean}} response
 * API returns array of first 100
 */
app.get("/memes", (req, res) => {
  try {
    let topHunderedMemes = memesSchema
      .find()
      .sort({ _id: -1 })
      .limit(100)
      .sort({ date: 1 })
      .then((memes) => {
        res.send(
          memes.map((meme) => {
            return {
              id: meme.id,
              name: meme.owner,
              url: meme.url,
              caption: meme.caption,
            };
          })
        );
      });
  } catch (error) {
    return res.status(404).json({
      success: false,
    });
  }
});
/**
 * Fetch one meme by id
 * @api {get} /memes/:id
 * @returns {{ success: boolean}} response
 * API returns boolean value with JSON of requsted MEME
 */
app.get("/memes/:id", (req, res) => {
  if(req.params.id){
    try {
      memesSchema.findById(req.params.id, (err, db_res) => {
        if (err) {
          return res.status(400).json({
            success: false,
          });
        } else {
          return res.status(200).json({
            id: db_res.id,
            name: db_res.owner,
            url: db_res.url,
            caption: db_res.caption,
          });
        }
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
      });
    }

  } else{
    return res.status(400).json({
      success: false,
    });
  }

});
/**
 * Store new meme to DB
 * @api {post} /memes
 * @returns {{ success: boolean}} response
 * API returns boolean value success
 */
app.post("/memes", (req, res) => {

  if(req.body.url && req.body.caption && req.body.name){
    try {
      console.log(`POST Request to /memes received`);
  
      memesSchema.findOne({ url: req.body.url }, (err, db_res) => {
        if (err) {
          return res.status(400).json({
            success: false,
          });
        } else {
          if (
            db_res &&
            db_res.owner === req.body.name &&
            db_res.caption === req.body.caption
          ) {
            return res.status(409).json({
              success: false,
            });
          } else {
            const meme = new memesSchema({
              owner: req.body.name,
              caption: req.body.caption,
              url: req.body.url,
            });
  
            meme.save((err, newMeme) => {
              if (err) {
                return res.status(400).json({
                  success: false,
                });
              } else {
                return res.status(201).json({
                  id: newMeme.id,
                });
              }
            });
          }
        }
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
      });
    }
      
  } else{
    return res.status(400).json({
      success: false,
    });
  }

});



app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT || 8081, () => {
  console.log("Live server has started");
});
