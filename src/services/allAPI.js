import  {commonAPI}  from "./commonAPI"
import { serverURL } from "./serverURL"
// upload video

export const uploadVideo = async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/video`,reqBody)
}
// getalluploadedvideos
export const getAllvideos=async()=>{
   return await commonAPI("GET",`${serverURL}/video`,"")
}
// delete
export const deletevid=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}
// add to history
export const addhistory = async(viddetails)=>{
   return await commonAPI('POST',`${serverURL}/history`,viddetails)
}
// delete history
export const deletevidhis=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}
export const gethisall=async()=>{
  return await commonAPI("GET",`${serverURL}/history`,"")
}
// export const addcat = async(body)=>{
//    return await commonAPI('POST',`${serverURL}/category`,body)
// }
// delete allhistory
// export const deleteallhis=async()=>{
//    return await commonAPI('DELETE',`${serverURL}/history`,{})
// }
// //get all cat
// export const getallcat=async()=>{
//    return await commonAPI("GET",`${serverURL}/category`,"")
//  }
  //api to add category
export const addAllCategory= async(body)=>{
   return await commonAPI('POST',`${serverURL}/category`,body)
   }


// //API to get all Category

export const getAllCategories  = async()=>{
   return await commonAPI('GET',`${serverURL}/category`,'')
}

// //API to delete categories

export const deleteACategories = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

// api to get particular video
export const getdargv  = async(id)=>{
   return await commonAPI('GET',`${serverURL}/video/${id}`,'')
}
// api to update the category
export const updatecat= async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
   }
   // export const updatecatvid= async(id,body)=>{
   //    return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
   //    }
   // export const deleteACatvid = async(id,videoId)=>{
   //    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{},videoId)
   // }
   
   export const updateACategory = async(id,body)=>{
      return await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
    }