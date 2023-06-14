


const { createApp } = Vue;

createApp({
    data() {
        return{

        emailList :[],
        }
    },

    methods:{

        
        
        
    
    },

    created() {
        

        for (let i = 0; i < 10; i++) {
            
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')


        .then ( (response) => {
    
        const randomMail = response.data.response;
    
        this.emailList.push(randomMail)
    
        })
    };

        
        
},


}).mount('#app');















