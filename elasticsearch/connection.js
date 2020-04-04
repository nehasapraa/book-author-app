import elasticsearch from 'elasticsearch';

const client = new elasticsearch.Client({
   hosts: [ process.env.ELASTICSEARCH_HOST]
});
//For checking elastic search status
//client
//  .ping()
//  .then((response)=>{
//    console.log('response', response);
//  }).catch(err => next(err));

 module.exports = client;