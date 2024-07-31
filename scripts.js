const apiKey = '508682';
const apiSecret = 'ks9XkU5q9HjMUlmnEnoe5JOzqn3jwMts';
const apiPath = 'aliexpress.solution.product.list.get';
const query = 'aliexpress.ds.category.get';
const apiUrl = 'https://api-sg.aliexpress.com/sync?methods=${apiPath}&{query}'; 

fetch (apiUrl,  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}:${apiSecret}`
    }
})
.then(response => response.json())
.then (data =>{
    console.log(data);
})
.catch(error => console.error('Error fetching data:', error));