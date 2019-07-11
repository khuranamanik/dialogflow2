const express = require('express')
const router  = express.Router()
const credentials = require('../credentials.js')

async function deleteContext(req,res){
    //projectId, sessionId, contextId
    const dialogflow = require('dialogflow');
  
    // Instantiates clients
    const contextsClient = new dialogflow.ContextsClient(credentials.config);
    const sessionId = req.body.sessionid
    const contextId = req.body.contextid
    const contextPath = contextsClient.contextPath(
      credentials.projectId,
      sessionId,
      contextId
    );
  
    const request = {
      name: contextPath,
    };
  
    // Send the request for retrieving the context.
    const result = await contextsClient.deleteContext(request);
    console.log(`Context ${contextPath} deleted`);
    return result;
  }

  module.exports = {
    deleteContext: deleteContext
    };