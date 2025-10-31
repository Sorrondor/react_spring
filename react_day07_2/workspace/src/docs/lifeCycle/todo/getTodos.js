const getTodos = async (urls, method) => {
  try {
    const response = await fetch(urls, {
      method : method || "GET"
    })
    console.log(response)
    if(!response.ok) throw new Error(`${response} todos datas fetch Error`)
    const todos = await response.json()
    if(!todos.length) throw new Error(`todos 데이터가 없습니다.`)
    return todos
  } catch (error) {
    console.error(`${error.message}`)
    console.error("getTodos fetching error")
  }
}


export default getTodos;