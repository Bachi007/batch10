fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>response.json())
.then((data)=>{
    for(let d of data){
        console.log(d.username+" and his/her email is :"+d.email)
    }
})
