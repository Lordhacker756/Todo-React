import { useState, react } from 'react';


function Todo() {
    const [task, setTask] = useState('');
    const [todo, setTodo] = useState([]);

    function addTask() {
        task && (setTodo([...todo, task]));
    }

    function deleteTask(ind) {
        console.log(ind);
        const updatedList = todo.filter((element, id) => {
            return id != ind;
        })
        setTodo(updatedList)
    }

    return (
        <div className="App bg-purple-600 md:bg-red-500 lg:bg-green-500 p-6 h-screen md:flex md:flex-col md:justify-center">
            <h1 className='font-mono text-4xl md:text-7xl lg:text-9xl text-white font-extrabold pb-5 md:pb-9 text-center'>TO DO TODAY!</h1>

            <div className="body_container flex flex-col-reverse md:flex-row lg:flex-row justify-evenly md:items-center">

                <div className="show_contacts md:w-1/2 py-5 md:py-2 overflow-y-scroll max-h-60 ">
                    <div>
                        {todo.map((tasks, key) => (
                            <div key={key} className='task__container bg-gray-900 rounded-lg text-white flex justify-between items-center px-5  md:mx-3 drop-shadow-2xl my-2 mx-2'>
                                <p className="task text-lg mx-1 sm:mr-3 text-left my-3">
                                    {tasks}
                                </p>
                                <button className='delete__task font-mono text-base border-2 border-purple-700 rounded-full px-5 py-1 hover:bg-red-500 hover:border-white hover:text-white' onClick={() => {
                                    deleteTask(key);
                                }}>
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="edit_contacts md:w-1/2 md:mr-5">

                    <div>
                        <section className="text-gray-400 bg-gray-900 body-font relative rounded-lg drop-shadow-2xl w-full px-10 md:mx-3">
                            <div className="container px-3 py-12 mx-auto">
                                <div className="flex flex-col text-center w-full mb-5">
                                    <h1 className="lg:text-2xl text-3xl font-medium title-font pb-0 mb-0 text-white">Add Task</h1>
                                </div>

                                <div className="task_inputs w-full">
                                    <div className="task_name pb-5">
                                        <input className='bg-gray-900 text-white border-2 border-purple-700 rounded-2xl px-10 py-2 w-full' type="text" placeholder='Enter a task!' value={task} onChange={(e) => { setTask(e.target.value) }} />
                                    </div>
                                </div>

                                <div className="p-2 w-full">
                                    <button onClick={(e) => {
                                        e.preventDefault;
                                        addTask(e.target.value);
                                        setTask('');
                                    }} className="justify-center flex w-full mx-auto text-white bg-purple-700 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">Let's Get It Going!</button>
                                </div>
                            </div>
                        </section >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo