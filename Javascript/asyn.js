
  async function a()
  {
      await b()
    setTimeout(() =>  {
   
      console.log("ABC")
  },2000);
  }
   async function b()
  {
      await c()
      setTimeout(() =>  {
   
          console.log("BCD")
      },1000);
  }
  async function c()
  {
    let pro= await locationFinder().then((value)=>{
        console.log(value)
    }).catch((value)=>{
        console.log(value)
    })
  }
  a();

  isLocationFound=(loc,time)=>{
    if(loc==="SKCT" && time<=2000)
    {
        return true
    }
    else
    {
        return false
    }
}
function locationFinder(){
    time=2000
    loc="SKCET"
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
            if(isLocationFound(loc,time))
            {
                locFound("Location Found")
            }
            else
            {
                locNotFound("Location not Found")
            }
        },time)
    })
}