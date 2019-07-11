const express = require('express');
const router = express.Router();
const credentials = require ('../credentials.js');
async function deleteIntent(req,res) {
  // [START dialogflow_delete_intent]
  // Imports the Dialogflow library
  const dialogflow = require('dialogflow');
  projectId = credentials.projectId,
  intentId = req.body.intentid
  console.log("my credentailsssss are",credentials);
  // Instantiates clients
  const intentsClient = new dialogflow.IntentsClient(credentials.config);
  const intentPath = intentsClient.intentPath(projectId, intentId);
  const request = {name: intentPath};

  // Send the request for deleting the intent.
  const result = await intentsClient.deleteIntent(request);
  console.log(`Intent ${intentPath} deleted`);
  // [END dialogflow_delete_intent]
const responsetouser = intentPath;
let respData = {
  data: responsetouser
};
res.send(respData);
}

module.exports = {
  deleteIntent : deleteIntent
}