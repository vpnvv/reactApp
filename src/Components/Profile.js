import React from 'react'

function Profile({...obj}) {
    const data = obj;
    console.log('hlooo',obj);
  return (
    <div>{
        data.profile.map((profile)=>{
            console.log(profile,'profileeeeeeee');
            return(
                <h1>{profile.name}</h1>
            )

        })
    }
        
    </div>
  )
}

export default Profile