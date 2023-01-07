export default defineEventHandler(async (event) => {

    //handel query params
    // const { name } = getQuery(event)

    //handel post data
    // const { age } = await readBody(event)

    //api call with private key
    const {data} = await  $fetch(
        "https://api.currencyapi.com/v3/latest?apikey=crge3CK7XZZQzZRk07TO7CPU4bNsCjxwhK02lbPt"
      );
      return data
//     return {
//     message: `Hello, ${name}! You are ${age} years old.`
//   }
})