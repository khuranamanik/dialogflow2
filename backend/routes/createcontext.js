const express = require('express')
const router  = express.Router()
const credentials = require('../credentials.js')

async function createContext(req,res){
    const dialogflow = require('dialogflow');
    // Instantiates clients
    const contextsClient = new dialogflow.ContextsClient(credentials.config);
    const sessionId = req.body.sessionid  //Pick any no. (var size<36 bytes)
    const contextId=  req.body.contextid   //Pick any no. (var size <36 bytes)
    const lifespanCount= req.body.lifespancount
    const sessionPath = contextsClient.sessionPath(credentials.projectId, sessionId);
    const contextPath = contextsClient.contextPath(
      credentials.projectId,
      sessionId,
      contextId
    );
  
    const createContextRequest = {
      parent: sessionPath,
      context: {
        name: contextPath,
        lifespanCount: lifespanCount,
      },
    };
  
    const responses = await contextsClient.createContext(createContextRequest);
    console.log(`Created ${responses[0].name} context`);
  }

  module.exports = {
    createContext: createContext
    };