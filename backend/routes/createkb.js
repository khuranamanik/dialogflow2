const express = require('express')
const router  = express.Router()
const sessionId = require('uuid/v1')();
const util = require('util');
const credentials = require('../credentials.js')

async function createKnowledgeBase(req,res) {
  const dialogflow = require('dialogflow').v2beta1;
  const client = new dialogflow.KnowledgeBasesClient(credentials.config);
   projectId = credentials.projectId
   displayName = req.body.displayName;
  const formattedParent = client.projectPath(projectId);
  const knowledgeBase = {
    displayName: displayName,
  };
  const request = {
    parent: formattedParent,
    knowledgeBase: knowledgeBase,
  };
  const [result] = await client.createKnowledgeBase(request);
  console.log(`Name: ${result.name}`);
  console.log(`displayName: ${result.displayName}`);
}
module.exports = {
    createKnowledgeBase: createKnowledgeBase
  };