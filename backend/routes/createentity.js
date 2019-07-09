const express = require('express')
const router  = express.Router()
//const cors = require('cors')
const credentials = require ('../credentials');

async function createEntity(req,res) {
const dialogflow = require('dialogflow');
entityTypeId = 'bf7b948a-c8b3-4c95-b736-fd6a182a7d1f'
entityValue = "12345" //should be unique
synonyms = ["1234 12345 123456"]
 
  // Instantiates clients
  const entityTypesClient = new dialogflow.EntityTypesClient(credentials.config);
  // The path to the agent the created entity belongs to.
  const agentPath = entityTypesClient.entityTypePath(credentials.projectId, entityTypeId);
  const entity = 
   {
    value: entityValue,
    synonyms: synonyms,
   };
  const createEntitiesRequest = 
   {
    parent: agentPath,
    entities: [entity],
   };
  const [response] = await entityTypesClient.batchCreateEntities(createEntitiesRequest);// Create a new session
  console.log('Created entity type:');
  console.log(response);
  // [END dialogflow_create_entity]
  //const responsetouser = responses;
//   let respData = {
//     data: responsetouser
//   };
//   res.send(respData);
  }
module.exports = {
    createEntity: createEntity
    }