function createResponse (statusCode, body) {
  return {statusCode, body: JSON.stringify(body)};
}
exports.handler = function(event, context, callback) {
  console.log(event);
  let body = JSON.parse(event.body);
  let id = event.pathParameters.id;
  console.log("Body of the received post: ", body);
  console.log("Id recieved from path parameter: ", id);
  callback(null, createResponse (200, body));
}
