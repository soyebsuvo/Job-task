/* eslint-disable react/prop-types */

// import { useDrag } from "react-dnd";
import { FaTrash } from "react-icons/fa";


export default function Todo({ todo }) {
    // const [ {isDraggble} , dragRef] = useDrag({
    //     type : type,
    //     item : () => ({ ...todo , index}),
    //     end : (item, monitor) => {
    //         const dropResult = monitor.getDropResult();
    //         if(dropResult && item){
    //             onDropPlayer(item)
    //         }
    //     },
    //     collect:(monitor) => ({
    //         isDragging : monitor.isDragging(),
    //     })
    // });
    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: "todo",
    //     item : {id : todo?._id},
    //     collect: (monitor) => ({
    //       isDragging: !!monitor.isDragging()
    //     })
    //   }))
    // console.log(isDragging)

    return (
        <div className="text-white bg-[#1E3144] px-3 py-2 rounded-lg m-3 text-left">
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
        </div>
    )
}
