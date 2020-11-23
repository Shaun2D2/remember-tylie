const handler = async (event, context, callback) => {
  const ids = event.queryStringParameters.parts;  //_.get(/\d+/.exec(event.path), 0, null);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({}),
  });
};

exports.handler = handler;
