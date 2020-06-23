const https = require('https');

console.log('Snipcart webhook received!');

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  const method = 'POST';
  const host = 'api.netlify.com';
  const path =
    '/build_hooks/5ef219aec0c4ea9331e5fe67?trigger_branch=master&trigger_title=Triggered+by+Netlify+Functions+via+Snipcart+webhook';
  const options = {
    method,
    host,
    path
  };

  if (body.eventName && body.eventName === 'order.completed') {
    console.log('ORDER UP 🎉');

    https
      .request(options, function (res) {
        console.log(`POST response status: ${res.statusCode}`);
      })
      .on('error', function (e) {
        console.error(`Problem with POST: ${e.message}`);
      })
      .end();
  }

  return {
    statusCode: 200,
    body: 'Thanks for the webhook snipcart!'
  };
};
