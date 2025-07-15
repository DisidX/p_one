export const getTodos = async () => {
    try {
        const res = await fetch("http://localhost:3000/todos");
        if (!res.ok) throw new Error("Error al obtener tareas");
        return await res.json();
    } catch (err) {
        console.error(err);
        return [];
    }
};


export const addTodo = async (title: string) => {
    try {
        const res = await fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title }),
        });
        if (!res.ok) throw new Error("Error al agregar tarea");
        return await res.text(); // o .json() si el backend responde con JSON
    } catch (err) {
        console.error(err);
        return null;
    }
};


