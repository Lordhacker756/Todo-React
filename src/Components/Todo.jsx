import { useState, react, useEffect } from "react";

function Todo() {
  const getData = () => {
    var tasks = localStorage.getItem("tasks");
    if (tasks) {
      return JSON.parse(localStorage.getItem("tasks"));
    } else {
      return [];
    }
  };

  const [task, setTask] = useState("");
  const [todo, setTodo] = useState(getData());

  function addTask() {
    if (task === "") alert("Enter A Task First ✌");
    task && setTodo([...todo, task]);
  }

  function deleteTask(ind) {
    console.log(ind);
    const updatedList = todo.filter((element, id) => {
      return id != ind;
    });
    setTodo(updatedList);
  }

  //Adding data to local storage
  useEffect(() => {
    if (task != undefined) localStorage.setItem("tasks", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="App bg-cover bg-blend-overlay md:bg-center bg-gradient-to-r from-[#F5F7FA] to-[#B8C6DB] p-6 min-h-screen md:flex md:flex-col md:justify-center">
      <div className="body_container flex flex-col-reverse md:flex-row lg:flex-row justify-evenly lg:items-start md:items-center">
        <div className="show_contacts md:w-1/2 py-5 md:py-2 overflow-y-scroll max-h-[85vh] mt-5 lg:mt-0">
          <div className="grid lg:grid-cols-2 lg:gap-4 grid-cols-1 gap-2">
            {todo.length ? (
              todo.map((tasks, key) => (
                <div
                  key={key}
                  className="btn task__container rounded-lg text-white flex justify-between flex-col p-2  md:mx-3 my-2 mx-2 h-[200px]"
                >
                  <p className="task text-lg mx-1 sm:mr-3 text-left my-3 h-[65%] overflow-y-scroll">
                    {tasks}
                  </p>
                  <button
                    className="delete__task font-mono text-base border-2 border-purple-700 rounded-full px-5 py-1 hover:bg-red-500 hover:border-red-500 hover:text-white hover:-translate-y-1 transition-all ease-in"
                    onClick={() => {
                      deleteTask(key);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <h1 className="lg:text-5xl md:text-3xl text-3xl lg:text-right font-semibold lg:mt-[45%] text-center mt-4">
                All Tasks Done For The Day!🎉
              </h1>
            )}
          </div>
        </div>
        <div className="edit_contacts md:w-1/2 md:mr-5">
          <div>
            <section className="text-gray-400 btn bg-black bg-opacity-70 body-font relative rounded-lg drop-shadow-2xl w-full px-10 md:mx-3">
              <div className="container px-3 py-12 mx-auto">
                <div className="task_inputs w-full">
                  <div className="task_name pb-5">
                    <h1 className="font-mono text-2xl md:text-5xl lg:text-5xl text-white font-extrabold pb-5 md:pb-9 text-center">
                      TO DO TODAY!⚡
                    </h1>
                    <textarea
                      className="bg-black bg-opacity-50 placeholder:text-white text-white rounded-2xl px-10 py-2 w-full border-2 border-white focus:outline-none focus:-translate-y-1 transition-all ease-linear h-[90%] overflow-y-scroll textArea"
                      type="textarea"
                      rows={5}
                      cols={5}
                      placeholder="Enter a task!"
                      value={task}
                      onChange={(e) => {
                        setTask(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button
                    onClick={(e) => {
                      e.preventDefault;
                      addTask(e.target.value);
                      setTask("");
                    }}
                    className="justify-center flex w-full mx-auto  text-lg font-normal border-2 py-1 rounded-full shadow-2xl hover:bg-purple-500 hover:border-purple-500 hover:-translate-y-1 transition-all ease-linear"
                  >
                    Let's Get It Going!🔥
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
