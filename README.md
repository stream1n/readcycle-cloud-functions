# readcycle-cloud-functions

gcloud functions deploy newUser --runtime=nodejs8 --trigger-event=providers/cloud.firestore/eventTypes/document.create --trigger-resource=projects/myproject/databases/default/documents/userLocations/{user} --source=./new-user/.
