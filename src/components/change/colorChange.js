import {create} from "zustand"

export const colorChange=create((set)=>({
    textColor:"red-600",
    fontColor:"text-red-600",
    borderColor:"border-red-600",

    redColor:()=>set((state)=>({textColor:"red-600",fontColor:"text-red-600",borderColor:"border-red-600"})),
    yellowColor:()=>set((state)=>({textColor:"yellow-400",fontColor:"text-yellow-400",borderColor:"border-yellow-400"})),
    blueColor:()=>set((state)=>({textColor:"blue-600",fontColor:"text-blue-600",borderColor:"border-blue-600"})),
    orangeColor:()=>set((state)=>({textColor:"orange-600",fontColor:"text-orange-600",borderColor:"border-orange-600"})),
    greenColor:()=>set((state)=>({textColor:"green-400",fontColor:"text-green-400",borderColor:"border-green-400"})),
    purpleColor:()=>set((state)=>({textColor:"purple-600",fontColor:"text-purple-600",borderColor:"border-purple-600"})),

}))