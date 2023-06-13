

function GetEmail() {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function(response){
    console.log(response.data.response)
});

}
console.log(GetEmail())



let email = [];

for (let i = 0; i < 10; i++) {
    
   email.push(GetEmail());
    
}

console.log(email)

