export const asyncHandler=(fn)=>(req,res,nect)=>{
    promise.resolve(fn(req,res,nect)).catch(next);
}

