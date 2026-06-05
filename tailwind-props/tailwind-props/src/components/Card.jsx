import React from 'react' 
export default function
Card({username, price})   {
   return (
        <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 mr-2">
        <div class="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
            <img
                src="https://www.robotlab.com/hubfs/coding.jpg"
                alt="card-image"
                class="h-full w-full object-cover rounded-md"
            />
        </div>
        <div class="p-4">
            <div class="mb-2 flex items-center justify-between">
                <p class="text-slate-800 text-xl font-semibold">
                    {username}
                </p>
                <p class="text-cyan-600 text-xl font-semibold">
                    {price}
                </p>
            </div>
            <p class="text-slate-600 leading-normal font-light">
                Programming fundamentals loops functions and conditionals
            </p>
            <button class="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all">
                Enroll Now
            </button>
        </div>
    </div>
    )
}
