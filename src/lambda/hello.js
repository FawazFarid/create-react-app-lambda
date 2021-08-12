// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
export function handler(event, context, callback) {
  console.log("Hello World")
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' }),
  })
}
