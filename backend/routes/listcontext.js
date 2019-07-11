const express = require('express')
const router  = express.Router()
const credentials = require('../credentials.js')

async function listContexts(req,res){
    //projectId, sessionId) {
    // [START dialogflow_list_contexts]
    // Imports the Dialogflow library
    const dialogflow = require('dialogflow');
  
    // Instantiates clients
    const contextsClient = new dialogflow.ContextsClient(credentials.config);
    const sessionId = req.body.sessionid 
    const projectId = credentials.projectId
    // The path to identify the agent that owns the contexts.
    const sessionPath = contextsClient.sessionPath(projectId, sessionId);
  
    const request = {
      parent: sessionPath,
    };
  
    // Send the request for listing contexts.
    const [response] = await contextsClient.listContexts(request);
    response.forEach(context => {
      console.log(`Context name: ${context.name}`);
      console.log(`Lifespan count: ${context.lifespanCount}`);
      console.log('Fields:');
      if (context.parameters !== null) {
        context.parameters.fields.forEach(field => {
          console.log(`\t${field.field}: ${field.value}`);
        });
      }
    });
    return response;
  }

  module.exports = {
    listContexts: listContexts
    };