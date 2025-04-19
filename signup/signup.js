function handleSubmit(event,data){
event.preventDefault()
if(data[1].value!==data[2].value){
    alert("password doesnt match")
}
else{
    fetch('http://192.168.1.2:8000/user/signup',{
        method:"POST",
        body:JSON.stringify({
           username:data[0].value,
            password:data[1].value
        })})
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
}

// end
}



