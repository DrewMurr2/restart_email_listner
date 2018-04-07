var request = require('request')
var url = process.env.EMAIL_LISTENER_URL || 'https://ccreplybyemaildev.azurewebsites.net/watch'

refreshGmailWatcher()
    .then((body)=>{
        console.log(body);
   console.log('refreshed gmail watcher')
}).catch((e)=>{
    console.log(e)
});


function refreshGmailWatcher(){

    return new Promise((resolve, reject)=>{
        request.post({url:url}, function(err,httpResponse,body){

            if(!err){
                resolve(body);
            }else{
                reject(err);
            }

        })
    });

}