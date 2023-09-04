import httpInstance from "@/utils/http";

export const test = ()=>{
    return httpInstance({
        url:'test'
    })
}