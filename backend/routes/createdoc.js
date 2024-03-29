const express = require('express')
const router  = express.Router()
const credentials = require('../credentials.js')
async function createDocument(req,res)
//     (    projectId,
//     knowledgeBaseFullName,
//     documentPath,
//     documentName,
//     knowledgeTypes,
//     mimeType
//   ) 
{
    // [START dialogflow_create_document]
    // Imports the Dialogflow client library
    const dialogflow = require('dialogflow').v2beta1;
  //   const projectId = 'still-tensor-244105';
  //   let pk = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCp+20rAGET27cf\nI5rO9SbsXQ9jCulpo4uhe/gsa7gCOHsJiZRJfBmEVAdYeE+PxoKNRx6xK5Z5wULW\ndngAKAwsnNWcJ0hNU6fiUB/CbU0px4OdzpQzQcf5i2KW7WSaK99JVduO5HLCkw+R\n40dhZScMSE1fgWi8oLhIKkHgJ+tRKH72QvUdd8ZCxC9gKCs4HWVHv4srDwOVutQn\n44kIxOBhTOaXYx4sTZ7kyDorlG1RTuvYYF49D2ryCTUvcL9JJDoFS5qpOPkftDIY\nqmsvEfgpxNudhuFyLriuhJdXiubZq4yTk7TyPRh8kaxh8o/sErFuft7afE0liSgo\n1fVhGoedAgMBAAECggEAJMIgjDNHivgRTFxSeq1EhsokDO675ZKOnDP3CcIcl2xX\n3QrhpJd/3CAgu4a+69BJhJwr3LPYlUlP9xlE34HJii87OUq8Za5wyG27xHuG+4Ev\n6uUUotX3lPUJs6ov/m/81/rHYUnxMDcFn66Gzd7GOC99fej5+YqG92Id/0eaqWCt\nwJnSMUINyTe2Nq2pObEZ5lQ0bnzRsSI0Gl8SS5bARl01klEMKnhTZRd+/hPriu/S\nudNadc1d9dPc8tm/l37BJ/+StX5kic511ctil5N6QRZ0k2AOYDG/KGnxCUX18jCQ\n42Lb5xq66jw9Y8sjJeCcPNfTxfjfKL0sxBS+FMDQEQKBgQDtqKqtZHsNy6BSelXp\nsrHJABahgRo62ayXpqJA2E+iBhVVUksjY+YxefVkPX4pnSnWltkHt5Z0pX151DNl\n4yTHodCGEv3Huy3AuC8f1mJwPAOCBimbZ8TKyxUWOQ+kfbdbKst9i5ThW48kscWg\n7hIpDb4FKgVdEvV6JQVyCr0dMQKBgQC3GbJ51pkJWUSF2zveyfX3SPHoM6iUg5Ky\nLZKlWB641o4BwCq+TS8oWmRuItDZUSQzElF/yNkM7dQl2IGZOvbi83g2r1i9W78Q\nlW0aXjdihvKg8MWJMjW8zpxxUr05GVTBH4VvYDcOb+UPzgsAnONhdy610/KaOVN1\nolpX6bFGLQKBgQCkqwY/h+yfPWTDYRJgD7mRnKcRlmN3PVWR6hpoNbjPecmUSaXY\nSqK3y1oU72qYKNZRYknUSAdOoU/Udwx53y2fyOWz0DrZBj+IVdYJCEFCpMKFeAGi\nNP8syBO/RyAoiBbga0F9ppYso4UGFsrpW6tnmKb96wS2XamKzVX9k6U/MQKBgCqJ\nTL4jTZAvbczO/pymPH8DMjeocJx36Id+MNg6nYCBT6I2e3eURMVSIoy3h99Ei21V\n7xsJlOr9AVD9eDYZzasxtpa1q57qBnwayqragnFgOlOLO8jAol1Hfm6RMyZlrRvk\nb8JNDt1Kv2MpkcLFr8k/v9k78NtFQA9O9UABKU7NAoGBAIGflDqaBtWkLrmed8h6\nn+UGNsTwgsrQdrR8stsjPP1leF4lz5dKElRpSY7wkJftJ1M0ejUVrlJW+A1v+56P\nnNrJn8/b14R8vvfzRMTiaB5DKu8bJPXmi3fehhQSOtsVdMaLaISzGHDmqrGFnJor\nSm/bN3eER4E056sN7XrOKprk\n-----END PRIVATE KEY-----"
  //   let email = "perennial-chatbot@still-tensor-244105.iam.gserviceaccount.com";
  //   var config = {
  //   credentials: {
  //   projectId: projectId,
  //   private_key: pk,
  //   client_email: email
  // }}
    // Instantiate a DialogFlow Documents client.
     const client = new dialogflow.DocumentsClient(credentials.config);
     projectId = credentials.projectId
     const knowledgeBaseFullName = 'projects/still-tensor-244105/knowledgeBases/NzE1NzY4NDM1NzM3OTkxNTc3Ng';
     //req.body.knowledgeBaseFullName
     //'projects/still-tensor-244105/knowledgeBases/myKnowledgeBase'; 
     const documentPath = '/home/manik/Documents/nodejsfiles/appfinal/git-integrate/backend/doc1.csv'
     //req.body.documentPath
     //'https://policies.google.com/faq?hl=en-US';
     //'https://dialogflow.com/docs/knowledge-connectors';
     const documentName = 'myDoc'
     //req.body.documentName
     const knowledgeTypes = 'FAQ';
     //req.body.knowledgeTypes
     const mimeType = 'text/csv'
     //req.body.mimeType  
     
     const contentUri = 'https://cloud.google.com/storage/docs/faq'
 
     const request = {
      parent: knowledgeBaseFullName,
      document: {
        knowledgeTypes: [knowledgeTypes],
        displayName: documentName,
        contentUri: documentPath,
        source: contentUri,
        mimeType: mimeType,
      },
    };
  
    const [operation] = await client.createDocument(request);
    const [response] = await operation.promise();
    console.log(`Document created`);
    console.log(`Content URI...${response.contentUri}`);
    console.log(`displayName...${response.displayName}`);
    console.log(`mimeType...${response.mimeType}`);
    console.log(`name...${response.name}`);
    console.log(`source...${response.source}`);
  }
  

module.exports = {
    createDocument: createDocument
  };