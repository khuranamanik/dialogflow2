const express = require('express')
const router  = express.Router()
const credentials = require('../credentials.js')

async function deleteDocument(req,res){
    //projectId, documentId
    
    const dialogflow = require('dialogflow').v2beta1;
  
    // Instantiate a DialogFlow Documents client.
    const client = new dialogflow.DocumentsClient({
      projectId: credentials.projectId,
      credentials: credentials.config.credentials
    });
  
    // const projectId = 'ID of GCP project associated with your Dialogflow agent';
     const documentId = 'projects/'+credentials.projectId+'/knowledgeBases/base3/documents/dmdsd';
  
    const [operation] = await client.deleteDocument({name: documentId});
    const responses = await operation.promise();
    if (responses[2].done === true) console.log(`Document Deleted`);
  }
  module.exports = {
    deleteDocument: deleteDocument
    };