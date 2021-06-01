'use strict'

const peopleSchema = require('./people-schema');

exports.handler=async (event)=>{
    console.log('event in update ',event)
    try{
        const id = event.pathParameters ? event.pathParameters.id : null;
        const {name} = JSON.parse(event.body);

        const record = await peopleSchema.update({id}, {name});
        console.log("UPDATED RECORD", record);
        const updatedRecord = JSON.stringify(record);
        return {
            statusCode: 200,
            body: JSON.stringify(updatedRecord)
        }
    }catch(err) {
        console.log(err)
        return {
            statusCode: 500,
            err: err.message
        }
    }

}