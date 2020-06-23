const fetch = require('node-fetch');

console.log('Snipcart webhook received!');

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  console.log('Handler fired! body is:::', body, '\n\n');

  const netlifyBuildHook =
    'https://api.netlify.com/build_hooks/5ef219aec0c4ea9331e5fe67?trigger_branch=master&trigger_title=Triggered+by+Netlify+Functions+via+Snipcart+webhook';

  if (body.eventName && body.eventName === 'order.completed') {
    console.log('ORDER UP 🎉');

    const opts = { url: netlifyBuildHook };

    get.post(opts, (err, res) => {
      console.log('Response status code: ', res.statusCode);
      if (err) {
        console.log('err!!!:::', err);
      }
    });
  }

  return {
    statusCode: 200,
    body: 'Thanks for the webhook snipcart!'
  };
};

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const netlifyBuildHook =
    'https://api.netlify.com/build_hooks/5ef219aec0c4ea9331e5fe67?trigger_branch=master&trigger_title=Triggered+by+Netlify+Functions+via+Snipcart+webhook';

  if (body.eventName && body.eventName === 'order.completed') {
    console.log('HERE COMES THE NEW IF SUCCESS STATEMENT!!!....');
    const response = await fetch(netlifyBuildHook, {
      method: 'POST'
    })
      .then((response) => {
        console.log('response from THEN():::::', response);
      })
      .catch((error) => console.error(error));
  }

  return {
    statusCode: 200,
    body: 'Thanks for the webhook snipcart!'
  };

  // return fetch(netlifyBuildHook, { method: 'POST' })
  //   .then((res) => {
  //     console.log('hello from the _new_ THEN()!!');
  //     console.log('typeof res::::::::', typeof res);
  //     console.log('res is:::', res);
  //     return {
  //       statusCode: 200,
  //       body: 'Thanks for the webhook snipcart!'
  //     };
  //   })
  //   .catch((error) => ({ statusCode: 422, body: String(error) }));
};
