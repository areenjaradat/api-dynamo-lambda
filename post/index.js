const uuid = require('uuid').v4;
const People = require('./people-schema')

exports.handler = async (event) => {
    // code goes here
    try {
        const id = uuid();
        const {name} = JSON.parse(event.body);
        let record = new People({id, name});
        let newRecord = await record.save();
        return {
            statusCode: 201,
            body: JSON.stringify(newRecord)
        }
    } catch(err) {
        console.log(err)
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
}
