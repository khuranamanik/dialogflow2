const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const detectintent = require('./routes/detectintent.js')
const createintent = require('./routes/createintent.js')
const deleteintent = require('./routes/deleteintent.js')
const createkb = require('./routes/createkb.js')
const listkb = require('./routes/listkb.js')
const deletekb = require('./routes/deletekb.js')
const createdoc = require('./routes/createdoc.js')
const createentity = require('./routes/createentity.js')
const createentitytype = require('./routes/createentitytype.js')

router.use(bodyParser());
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var corsOptionsDelegate = function (req, callback) {
  var corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  callback(null, corsOptions); // callback expects two parameters: error and options
}
router.options('*', cors(corsOptionsDelegate))
router.post('/detectintent', cors(corsOptionsDelegate), detectintent.detecttheIntent); //Write like this one to add functionalities
router.post('/createintent', cors(corsOptionsDelegate), createintent.createIntent); 
router.post('/deleteintent', cors(corsOptionsDelegate), deleteintent.deleteIntent);
router.post('/createknowledgebase', cors(corsOptionsDelegate), createkb.createKnowledgeBase);
router.get('/listknowledgebase', cors(corsOptionsDelegate), listkb.listKnowledgeBases);
router.post('/deleteknowledgebase', cors(corsOptionsDelegate), deletekb.deleteKnowledgeBase);
router.post('/createentity', cors(corsOptionsDelegate), createentity.createEntity);
router.post('/createentitytype', cors(corsOptionsDelegate), createentitytype.createEntityType);
router.post('/createdocument',urlencodedParser, cors(corsOptionsDelegate), createdoc.createDocument);

router.use(function(req,res,next)
{
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers", "Origin,X-requested-With,Content-Type,Authorization,Accept");
})


const port = 3000
app.use(router)
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})