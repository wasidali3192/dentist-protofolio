//window.alert("this is up")

//<script type="module">
// import fs from 'fs'
const submitBtn = document.getElementById("submit-btn")

// alert(localStorage.getItem('payload'))
// console.log(submitBtn)
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log('clicked')
    const name = document.querySelector('#cus-name');
    const email = document.querySelector('#email');
    const number = document.querySelector('#number');
    const concern = document.querySelector('#concern');
    let payload = {
        name: name.value,
        email: email.value,
        number:number.value,
        reason:concern.value
    }
    console.log(payload)
   
    // localStorage.setItem('payload',JSON.stringify(payload));
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/test", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    let res = xhr.send(JSON.stringify(payload));
    alert('Successfully Requested!')
    userId.value = '';
    password.value = '';
})
//</script>
