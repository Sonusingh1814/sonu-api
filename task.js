const key="488b60a482884de98bc7d634f64e7d2b";
const url="https://newsapi.org/v2/everything?q=";

const plate=document.querySelectorAll(".card div");




plate.forEach(



async function news(para)
{ 
    const randome=Math.floor(Math.random()*10);
    console.log(randome);
     
    const res = await fetch(`${url}${para}&apiKey=${key}`);
    //console.log(res);
   const data= await res.json();
   const article =  data.articles[randome];
   

   console.log(article.content)
   //console.log(article.description)
   //article.title;
   //console.log(article.publishedAt)
   

   
   


}
);




