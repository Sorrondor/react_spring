const fetchTodo = async (url, options) => {
  const response = await fetch(url, options)
  return response;
}

export const fetchOptions = (method, data) => {
  return {
    method: method,
    headers: {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(data)
  }
}

export default fetchTodo;