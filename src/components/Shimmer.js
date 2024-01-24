
const Shimmer = () => {
    return (
      <>
      <div className="p-4 flex justify-center">
      <input type="text" className="text-lg w-1/4 p-2 border-2 bg-gray-300"/>
      <button className="bg-gray-300 text-white py-2 px-4 mx-3 rounded italic w-24"></button>
      </div>
      <div className="flex flex-wrap mt-2">
        {Array(20).fill("").map((e)=>(
        <div className="border-2 w-72 m-3 h-96 px-4 bg-gray-300" ></div>
        ))}
      </div>
      
      </>
    )   
    }
export default Shimmer;