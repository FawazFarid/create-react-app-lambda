// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
export async function handler(event, context, callback) {
  console.warn("I'm a very lazy function");
  console.log(`The datetime is ${(new Date()).toISOString()}`);

  await new Promise(resolve => setTimeout(resolve, 15000));

  console.log("This probably won't get logged, because it will timeout");
  return {
    statusCode: 200,
    body: "⛔︎ Oops This timed out, check the Netlify function logs",
  };
}
