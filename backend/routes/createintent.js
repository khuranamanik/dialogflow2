const express = require('express');
const router = express.Router(); 
const credentials = require ('../credentials.js');

async function createIntent(req,res)
{
  const dialogflow = require('dialogflow');
  //text = req.body.text;
  //let displayName;
  // Instantiates the Intent Client
  const intentsClient = new dialogflow.IntentsClient(credentials.config);

  // The path to identify the agent that owns the created intent.
  const agentPath = intentsClient.projectAgentPath(credentials.projectId);

  const intent = {
    displayName: req.body.displayName
    //trainingPhrases: trainingPhrases,
    //messages: [message],
  };

  console.log('This is ',intent);
  const createIntentRequest = {
    parent: agentPath,
    intent: intent
  };

  // Create the intent
  const responses = await intentsClient.createIntent(createIntentRequest);
  console.log(`Intent ${responses[0].name} created`);

const responsetouser = responses[0].name;
let respData = {
    data: responsetouser
};
  res.send(respData);
}
   
module.exports={
  createIntent : createIntent
}
