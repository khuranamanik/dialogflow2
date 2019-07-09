const express = require('express');
const router = express.Router();
const credentials = require ('../credentials.js');

async function createEntityType(req,res){
    //projectId='Enter projectID here', displayName='', kind=''
    const dialogflow = require('dialogflow');
    // Instantiates clients
    // const displayName = req.body.displayName
    // const kind = req.body.kind
    const entityTypesClient = new dialogflow.EntityTypesClient(credentials.config);
    // The path to the agent the created entity type belongs to.
    const agentPath = entityTypesClient.projectAgentPath(credentials.projectId);
  
    const request = {
      parent: agentPath,
      entityType: {
        displayName: req.body.displayName,
        kind: req.body.kind,
      },
    };
  
    const responses = await entityTypesClient.createEntityType(request);
    console.log(`Created ${responses[0].name} entity type`);
    //console.log(responses);
  const responsetouser = responses[0].name;
  let respData = {
    data: responsetouser
  };
  res.send(respData);
}

 module.exports = {
    createEntityType : createEntityType 
} 