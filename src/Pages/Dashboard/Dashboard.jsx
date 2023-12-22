import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { useDrop } from "react-dnd";
// import Todo from "./Todo";
import { FaTrash } from "react-icons/fa";
// import { useDrop } from "react-dnd";
// import axios from "axios";

export default function Dashboard() {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const response = async () => {
            const res = await axiosSecure.get("/todos");
            setTodos(res.data);
        }
        response();
    }, [axiosSecure])


    // const [{isOver}, addToOtherRef] = useDrop({
    //     accept : "todo",
    //     collect : (monitor) => ({isOver : !!monitor.isOver()})
    // })
    // const [{isOver : isTodoOver}, removeToOtherRef] = useDrop({
    //     accept : "ongoing",
    //     collect : (monitor) => ({isOver : !!monitor.isOver()})
    // })

    // const moveTodoToOngoing = (item) => {
    //     console.log(item)
    // }

    // const removeTodoToOngoing = (item) => {
    //     console.log(item)
    // }

    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: "todo",
    //     drop : (),
    //     collect: (monitor) => ({
    //       isDragging: !!monitor.isDragging()
    //     })
    //   }))


    console.log(todos)
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const newTodo = {
            title: data?.title,
            desc: data?.desc,
            deadline: data?.date,
            priority: data?.priority,
            email: user?.email
        }
        console.log(newTodo)
        const res = await axiosSecure.post('/todos', newTodo)
        console.log(res.data)
    }
    return (
        <div className="bg-[#1E3144] pt-20 md:px-16 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="card bg-[#2C4352] min-h-[calc(100vh-90px)] relative">
                    <h2 className="bg-[#1E3144] m-3 rounded-lg text-white px-2 py-2">TODO</h2>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="px-3 py-1 text-white w-32 absolute left-0 top-[18px] text-sm">Add+</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn">open modal</button> */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-[#1E3144] relative py-8">
                            {/* <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p> */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="text-3xl font-bold text-center text-white my-3">Add New TODO</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Title</span>
                                    </label>
                                    <input {...register("title")} type="text" placeholder="Title" className="input input-bordered bg-[#1E3144] text-white" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Description</span>
                                    </label>
                                    <input {...register("desc")} type="text" placeholder="Description" className="input input-bordered bg-[#1E3144] text-white" required />
                                </div>
                                <div className="flex gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-white">Deadline</span>
                                        </label>
                                        <input {...register("date")} type="date" placeholder="Deadline" className="input input-bordered bg-[#1E3144] text-white" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-white">Priority</span>
                                        </label>
                                        <select {...register("priority")} className="input input-bordered bg-[#1E3144] text-white" name="priority" id="">
                                            <option value="high">High</option>
                                            <option value="medium">Medium</option>
                                            <option value="low">Low</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="text-white duration-200 border px-4 py-1 border-white cursor-pointer">Add</button>
                                </div>
                            </form>
                            <div className="modal-action absolute top-0 right-8">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="text-white">X</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    {/* todo items */}
                    {/* <div>
                        {
                            todos?.map((todo , i) => <Todo key={todo?._id} todo={todo} type="todo" index={i}></Todo>)
                        }
                    </div> */}
                    <div>
                        {
                            todos?.map((todo) => <div key={todo?._id} className="text-white bg-[#1E3144] px-3 py-2 rounded-lg m-3 text-left">
                            <div className="relative">
                                <div>
                                    <div className="flex justify-start gap-10 items-center">
                                        <p className="text-sm">Priority : {todo?.priority}</p>
                                        <p className="text-sm">Deadline : {todo?.deadline}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-xl">{todo?.title}</h2>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm">{todo?.desc}</p>
                                    </div>
                                </div>
                                <button className="absolute top-0 text-red-500 right-0 border border-red-500 rounded-full p-1 text-sm"><FaTrash></FaTrash></button>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
                <div className="card bg-[#2C4352] min-h-[calc(100vh-90px)]">
                    <h2 className="bg-[#1E3144] m-3 rounded-lg text-white px-2 py-2">Ongoing</h2>
                    <div>

                    </div>
                </div>
                <div className="card bg-[#2C4352] min-h-[calc(100vh-90px)]">
                    <h2 className="bg-[#1E3144] m-3 rounded-lg text-white px-2 py-2">Completed</h2>
                </div>
            </div>
        </div>
    )
}
