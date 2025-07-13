export const getTodos = async ()=>{
    const res = await fetch("https://localhost:3001/todos");
    return res.json();
};


export const addTodo = async (title : string)=>{
    await fetch("http://localhost:3001/todos",{
        method : "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({title}),

    });
};


