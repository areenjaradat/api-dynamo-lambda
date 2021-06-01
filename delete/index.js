'use strict'

const peopleSchema = require('./people-schema');

exports.handler=async (event)=>{
    console.log('event in delete ',event)
    try{
        const id = event.pathParameters ? event.pathParameters.id : null;
       

        const item= await peopleSchema.delete({id});
        return {
            statusCode: 200,
            body: JSON.stringify(item)
        }
    }catch(err) {
        console.log(err)
        return {
            statusCode: 500,
            err: err.message
        }
    }

}