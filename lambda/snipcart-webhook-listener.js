exports.handler = async (event, context) => {
  console.log('Snipcart webhook received!');
  console.log('event', event);
  console.log('context', context);
  return {
    statusCode: 200,
    body: 'Thanks for the webhook snipcart!'
  };
};
