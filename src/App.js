import "./App.css";
import { useState } from "react";
import Component1 from "./components/Component1";
import Component4 from "./components/Component4";

function App() {
  const [data, setdata] = useState("");
  
  return (    
    <div className={`App flex-col h-screen flex items-center content-center ${data ? 'bg-slate-300' : 'bg-blue-700'}`}>
      <Component1 data={data} setdata={setdata} className="flex">        
        <div className="flex-col justify-center">
          <div className="flex justify-center text">
          </div>
          <div className="flex justify-center text-center">
            <h2 className="text-center text-sky-50 font-bold">TITULO</h2>            
          </div>          
        </div>
      </Component1>    
      <Component4 data={data} setdata={setdata} />

      {/* <div className="w-[300px] flex flex-col border-2 border-rose-500  items-center p-5">
        <div className="h-20 w-40 border-2 border-pink-500"></div>
        <h3 className= "bg-sky-900 text-slate-50 m-3">OverView</h3>

        <div className="flex justify-items-center flex-col">

          <div className="flex flex-row pt-3 justify-items-center">            
              <div className="h-6 w-4 border-2 border-blue-200"></div>
              <div className="pl-5 border-l-0">Report</div>
          </div>

          <div className="flex flex-row pt-3">
            <div className="h-6 w-4 border-2 border-blue-200"></div>
            <div className="pl-5 border-l-0">Revennue</div>
          </div>

          <div className="flex flex-row pt-3 justify-items-center">
            <div className="h-6 w-4 border-2 border-blue-200"></div>
            <div className="pl-5 border-l-0">Reference</div>
          </div>

          <div className="flex flex-row pt-3">
            <div className="h-6 w-4 border-2 border-blue-200"></div>
            <div className="pl-5">Contacts</div>
          </div>

          <div className="flex flex-row pt-3">
            <div className="h-6 w-4 border-2 border-blue-200"></div>
            <div className="pl-5">FeedBack</div>
          </div>

          <div className="flex flex-row pt-20">
            <div className="h-6 w-4 border-2 border-blue-200"></div>
            <div className="pl-5">Setings</div>
          </div>                                   

          <div className="flex flex-row pt-3">
            <div className="h-6 w-4 border-2 border-blue-200"></div>
            <div className="pl-5">Help Center</div>
          </div>            
        </div>
        
        <div className="pt-10 px-6 mt-20 border-2 border-re-100 border-top-15 bg-stone-400 flex items-center flex-col">
          <div className="h-30 w-30 border-2 border-pink-500 bg-pink-400 p-5 rounded-full "></div>
          <div className="pt-5 text-slate-50">NOXUN Capacita</div>                    
        </div>
      </div>
      <div className="border-2 border-green-500 flex-1 flex-col">
        <div className="h-50 w-30 border-2 border-blue-500 p-5 rounded-lg flex justify-between">
          <div className="flex"> 
            <div className="ml-20 h-7 w-7 border-2 border-red-600 rounded-full flex"></div>
            <div className="pl-5">Search</div>    
          </div>
            <div className="flex">
            <div className="mr-10 justify-items-end h-7 w-7 border-2 border-red-600 rounded-full flex"></div>
            <div className=" mr-5 justify-items-end h-7 w-7 border-2 border-red-600 rounded-full flex"></div>
            <div className="text-teal-950">Nombre Usuario</div>
          </div>
        </div>
        <div className="flex h-screen">
          <div className="ml-20 mr-16 h-5/6 w-4/6 border-2 border-violet-600 grid grid-cols-2 place-items-center ">
            <div className="border-2 border-slate-950 h-48 w-60 flex-col">
              <div className="text-black font-bold flex justify-start">Today Task</div>
              <div className="flex justify-start flex-col">
                <div className="mt-2 flex justify-start text-sm font-bold">Edit the landing page</div>
                <div className="flex flex-row justify-between">
                  <div className="text-xs">Submited by Manager</div>
                  <div className="text-xs">12 hrs ago</div>
                  <div className="text-xs text-orange-300">Details</div>
                </div>
              </div> 
              <div className="flex justify-start flex-col">
                <div className="mt-2 flex justify-start text-sm font-bold">Edit the landing page</div>
                <div className="flex flex-row justify-between">
                  <div className="text-xs">Submited by CEO</div>
                  <div className="text-xs">12 hrs ago</div>
                  <div className="text-xs text-orange-300">Details</div>
                </div>
              </div> 
              <div className="flex justify-start flex-col">
                <div className="mt-2 flex justify-start text-sm font-bold">Edit the landing page</div>
                <div className="flex flex-row justify-between">
                  <div className="text-xs">Submited by Manager</div>
                  <div className="text-xs">12 hrs ago</div>
                  <div className="text-xs text-orange-300">Details</div>
                </div>
              </div>            
            </div>
            <div className="border-2 border-slate-950 h-48 w-60">
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className="border-2 border-slate-950 h-48 w-60">
              <div className="mt-3">
                <div className="flex content-center flex-row place-content-around">
                  <div className="font-bold">Renueve</div>
                  <div className="border-2 rounded-lg border-neutral-400 bg-neutral-400 text-white text-sm"><input type="button" value="View As" /></div>
                </div>
              </div>
              <div className="mt-10 flex place-content-around items-end flex-row">
                <div className="h-10 w-3 border-sky-400 bg-sky-400 border-2"></div>
                <div className="h-10 w-3 border-sky-400 bg-sky-400 border-2"></div>
                <div className="h-10 w-3 border-sky-400 bg-sky-400 border-2"></div>
                <div className="h-10 w-3 border-sky-400 bg-sky-400 border-2"></div>
                <div className="h-10 w-3 border-sky-400 bg-sky-400 border-2"></div>
                <div className="h-16 w-3 border-blue-800 bg-blue-800 border-2"></div>
                <div className="h-10 w-3 border-sky-400 bg-sky-400 border-2"></div>
              </div>
            </div>
            <div className="border-2 border-slate-950 h-48 w-60">
              <div className="mt-4 flex place-content-around">
                <div className="font-bold">Sales Pipeline</div>
                <div className="border-2 bg-blue-600 border-blue-600 rounded-lg text-white text-sm"><input type="button" value="Weekly" /></div>
              </div>
              <div className="mt-4 flex place-content-around">
                <div className="">
                  <div className="h-3 w-14 border-2 bg-red-900 border-red-900"></div>
                  <div className="h-3 w-14 border-2 bg-stone-600 border-stone-600"></div>
                  <div className="h-3 w-14 border-2 bg-orange-700 border-orange-700"></div>
                  <div className="h-3 w-14 border-2 bg-emerald-600 border-emerald-600"></div>
                  <div className="h-3 w-14 border-2 bg-sky-300 border-sky-300"></div>
                  <div className="h-3 w-14 border-2 bg-blue-700 border-blue-700"></div>
                </div>
                <div className="flex">
                  <ul className="list-disc text-xs text-start">
                    <li>Sales from Store</li>
                    <li>Sales from As</li>
                    <li>Sales from Search</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" place-content-center justify-items-center border-2 border-slate-950 h-48 w-60">
              <div className="mt-2 font-bold flex place-content-start">Satisfaction Rate</div>
              <div className="mt-8 flex flex-row content-center justify-around">
                <div className="h-8 w-14 rounded-lg bg-blue-600 border-2 border-blue-600"></div>
                <div className="flex flex-col">
                  <div className="text-xs font-bold">63.745 votes</div>
                  <div className="text-xs text-gray-500">Voted by Customer</div>
                </div>
                <div className="h-5 w-8 border-2 border-purple-950"></div>
              </div>
            </div>
            <div className="border-2 border-slate-950 h-48 w-60"></div>
          </div>
          <div className="ml-16 mr-16 h-5/6 w-3/6 border-2 border-indigo-950">
            <div className="flex place-content-around">
              <div className="mt-5 place-items-start font-bold">Top Customer</div>
              <div className="mt-5 border-2 border-blue-200 h-8 w-20 place-content-end bg-blue-900 text-white">Weekly</div>
            </div>
            <div className="h-5/6 flex items-center flex-col">
              <div className="mt-5 border-2 border-blue-200 h-3/6 w-5/6 place-content-around grid grid-cols-3 place-items-center">
                <div className="h-8 w-8 border-2 border-pink-200 bg-pink-200 rounded-full text-white text-center">A</div>
                <div className="">Ava Corllete</div>
                <div className="border-2 border-pink-200 h-8 w-20 place-content-end bg-pink-200 text-white rounded-md">Story board</div>
                <div className="h-8 w-8 border-2 border-orange-400 rounded-full text-white text-center bg-orange-400">E</div>
                <div className="">Everly Isla</div>
                <div className="border-2 border-orange-400 h-8 w-20 place-content-end bg-orange-400 text-white rounded-md">Story</div>                
                <div className="h-8 w-8 border-2 border-amber-900 rounded-full text-white bg-amber-900">M</div>
                <div className="">Mila Scarlett</div>
                <div className="border-2 border-amber-900 h-8 w-20 place-content-end bg-amber-900 text-white rounded-md">Story</div>
                <div className="h-8 w-8 border-2 border-yellow-200 rounded-full text-white bg-yellow-200">N</div>
                <div className="">Nora Mazel</div>
                <div className="border-2 border-yellow-200 h-8 w-20 place-content-end bg-yellow-200 text-white rounded-md">Story</div>
                <div className="h-8 w-8 border-2 border-lime-300 rounded-full text-white bg-lime-300">L</div>
                <div className="">Lily Aurora</div>
                <div className="border-2 border-lime-300 h-8 w-20 place-content-end bg-lime-300 text-white rounded-md">Story</div>
                <div className="h-8 w-8 border-2 border-green-300 rounded-full bg-green-300 text-white">N</div>
                <div className="">Nova Hannah</div>
                <div className="border-2 border-green-300 h-8 w-20 place-content-end bg-green-300 text-white rounded-md">Story</div>
              </div>
              <div className="mt-5 border-2 border-blue-200 h-2/6 w-5/6">
                <div className="flex mt-5 justify-around">
                  <div className="whitespace-nowrap">Customer Visit Online</div>  
                  <div className="border-2 border-cyan-200 h-8 w-20 place-content-end bg-cyan-400 text-white rounded-md">Free</div>
                </div>
                <div className="flex mt-5 justify-around">
                  <div className="">
                    <div className="text-gray-400 text-sm">Total in july</div>
                    <div className="text-black font-bold">34.862</div>
                    <div className="text-gray-400 text-sm">24%</div>
                  </div>
                  <div className="h-16">
                    <div className="relative h-full">                    
                    <div class="mt-8 border-t-2 border-gray-500 w-24 h-1"></div>
                    </div>
                  </div>  
                </div>                
              </div>              
            </div>             
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
