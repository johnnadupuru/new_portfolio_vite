import {create} from "zustand"

export const changeBg=create((set)=>({
    lightMode:true,

    changeBgColor:()=>set((state)=>({lightMode:!state.lightMode}))
}))