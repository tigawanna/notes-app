interface PostSkeletonProps {
length:number
}

export const PostSkeleton = ({length}:PostSkeletonProps) => {
 const skeletons = Array.from({ length }, (_, i) => i);
    return (
        <div className='w-full h-full flex flex-col items-center justify-start '>
            {skeletons.map((_, i) => ( 
                <div key={i} className="w-[100%]  min-h-[50%] bg-gray-300 rounded-xl 
                   p-4 mb-2 border ">
                    <div className=" bg-gray-400 mb-2 rounded-xl h-6 w-40 animate-pulse"></div>
                    <div className=" bg-gray-400 h-10 rounded-xl mb-1 animate-pulse"></div>
                    <div className=" min-h-[40%] bg-gray-400 rounded-xl mt-2 mb-1 animate-pulse "></div>
                    
                </div>
            ))}
        </div>
    );

}
