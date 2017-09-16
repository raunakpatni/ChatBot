 //create your srmbot program
 // include libraries
 var restify = require('restify');
 var botbuilder = require('botbuilder')

 //create server using restify
 var server = restify.CreateServer();
 //Make Server listen on port
 server.listen('4567',function(){
 console.log('Listening on 4567')
});
 //create a chatConnector
 Var Connector=
 new botbuilder.ChatConnector();

 //Create a bot and connect to connector
 var bot=
 new botbuilder.UniversalBot(connector);
 Receive a post request and send to connector
 server.post('/',connector.listen());
 //bot will respond using dialog
 bot.dialog('/',function(session){
var msg = session.message.text;
 if(msg.search('akshat')) {
 session.send('I know akshat');
}else if(msg == "Hi"){
 session.send("Hi , I am human");
    elseif(msg.search('srm')){
    session.send("srm ghaziabad");
 }else{
 session.send("I dont understand")
}
 }});

