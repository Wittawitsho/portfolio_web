import axios from 'axios'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
const portStore = (set) => ({
    admin: null,
    token: null,
    actionLogin: async (form) =>{
        const res = await axios.post('http://localhost:5000/api/login', form)
        console.log(res.data.token)
        set({
            admin: res.data.payload,
            token: res.data.token
        })
        return res
    }
})
const usePersist = {
    name:"port-store",
    storage: createJSONStorage(()=>localStorage)
}
const usePortStore = create(persist(portStore,usePersist))

export default usePortStore