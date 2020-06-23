const https = require('https');

console.log('Snipcart webhook received!');

exports.handler = async (event, context) => {
  const body = event.body;

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

    const post = https.request(options, (res) => {
      console.log(`POST response status: ${res.statusCode}`);
    });

    post.on('error', (e) => {
      console.error(`Problem with POST: ${e.message}`);
    });

    post.end();
  }

  return {
    statusCode: 200,
    body: 'Thanks for the webhook snipcart!'
  };
};
