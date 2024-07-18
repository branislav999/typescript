document.addEventListener('DOMContentLoaded', () => {


    const imageExample = document.querySelector('#imageExample');


    async function getData(){
        const res = await fetch ('https://api.sampleapis.com/switch/games');
    
        if (res.ok){
            const data = await res.json();
            return data;
        } else { 
            throw new Error("Unable to retrieve data");
        }
    }
    
    async function displayData(){
        const data = await getData();
    
        // console.log(data);
    
    
        Object.keys(data).forEach(key => {
            // console.log(`Key: ${key}`);
            // console.log(data[key]);
        
            if (key === '89'){
                console.log(`Key: ${key}`);
                console.log(data[1009].name);
                // imageExample.src = `${data[key].image}`;
                // console.log(data[key].image);        
            }
            
        })
    
    }

    // imageExample.src = 'images.jfif';
    
    
    displayData();







})

