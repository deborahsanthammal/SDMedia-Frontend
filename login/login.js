function handleSubmit(event,data){
event.preventDefault()

    fetch('http://192.168.1.2:8000/user/login/',{
        method:"POST",
        headers: {
            'Content-Type': "application/json"
        },
        body:JSON.stringify({
            username:data[0].value,
            password:data[1].value
        })})
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
}






