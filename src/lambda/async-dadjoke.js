// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios"
export async function handler(event, context) {
  try {
    const response = await axios.get("https://icanhazdadjoke.com", { headers: { Accept: "application/json" } })
    const data = response.data
    console.warn("This Event might not be processed.")
    console.log(data.joke)
    console.error("An example error")
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data.joke })
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
