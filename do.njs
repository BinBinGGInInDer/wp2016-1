#!/usr/local/bin/node

var querystring = require('querystring');
var fs = require('fs');
var param = querystring.parse(process.env.QUERY_STRING);
var data =fs.readFileSync('name.json','utf-8');

var student = '';
JSON.parse(data, function(k,v){
  if (param.user_name ==k){
    student = v;
  }
});

console.log('Content-type: text/html; charset=utf-8\n');
if (student ==''||param.user_name ==''){
  console.log('<h1>not found</h1>');}
else{
  console.log('<h1>'+student+'4ni'+</h1>);
}
