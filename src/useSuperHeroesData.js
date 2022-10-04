import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"

const fetchStar=()=>{
  return axios.get('http://localhost:4000/superStar/')
}
const AddData=(data)=>{
  return axios.post('http://localhost:4000/superStar/',data)
}
export default function useSuperHeroesData(onSuccess,onError) {
  return useQuery('super-heroes',fetchStar,{
    onSuccess,onError
  })
  
}

export const useAddData=()=>{
  const queryClient=useQueryClient()
  return useMutation(AddData,{
    onSuccess:(data)=>{
      queryClient.setQueryData('super-heroes',(oldQueryData)=>{
        return {
          ...oldQueryData,data:[...oldQueryData.data,data.data]
        }
      })
    }
  }
    
  )
}
