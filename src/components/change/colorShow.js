import {create} from "zustand"

export const colorShow=create((set)=>({
    isShow:false,

    setShow:()=>set((state)=>({isShow:!state.isShow}))
}))