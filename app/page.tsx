"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Preparar presentación", completed: false },
    { id: 2, title: "Revisar correos", completed: false },
    { id: 3, title: "Llamar al cliente", completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const pendingCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 md:p-8 bg-slate-100 dark:bg-slate-950">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">

        {/* Header */}
        <header className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary text-3xl">
                task_alt
              </span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              Mis Tareas
            </h1>
          </div>

          <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-sm active:scale-95">
            <span className="material-symbols-outlined text-[20px]">
              add
            </span>
            <span>Crear Tarea</span>
          </button>
        </header>

        {/* Search */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar tareas..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
            />
          </div>
        </div>

        {/* Task List */}
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {tasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-20 text-center opacity-50">
              <span className="material-symbols-outlined text-6xl mb-4">
                inbox
              </span>
              <p className="text-lg font-medium">
                No tienes tareas pendientes
              </p>
              <p className="text-sm">
                ¡Comienza creando una nueva!
              </p>
            </div>
          ) : (
            tasks.map(task => (
              <div
                key={task.id}
                className="group flex items-center justify-between p-6 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 transition-all cursor-pointer"
                  />
                  <span className={`text-base font-medium truncate ${task.completed ? "line-through opacity-50" : ""}`}>
                    {task.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all flex items-center gap-1">
                    <span className="material-symbols-outlined text-[20px]">
                      edit
                    </span>
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-all flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <footer className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm text-slate-500">
          <p>{pendingCount} tareas pendientes</p>
          <div className="flex items-center gap-4">
            <button className="hover:text-primary transition-colors font-medium">
              Completadas
            </button>
            <button
              onClick={() => setTasks([])}
              className="hover:text-primary transition-colors font-medium"
            >
              Limpiar todo
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
}