const blogs =[
    {
        imgurl:"www.google.com",
        paragraph : "she is hot"
    },
    {
        imgurl:"www.google.com",
        paragraph:"she is hot"
    },
    {
        imgurl:"www.google.com",
        paragraph:"she is hot"
    },
    {
        imgurl:"www.google.com",
        paragraph:"she is hot"
    },
    {
        imgurl:"www.google.com",
        paragraph:"she is hot"
    },
    {
        imgurl:"www.google.com",
        paragraph:"she is hot"
    },
    {
        imgurl:"www.google.com",
        paragraph:"she is hot"
    },
    {
        imgurl:"www.google.com",
        paragraph:"she is hot"
    }, 
    {
        imgurl:"www.google.com",
        paragraph:"she is hot"
    }, 
    {
        imgurl:"www.google.com",
        paragraph:"she is hot"
    }, 
    {
        imgurl:"www.google.com",
        paragraph:"she is hot"
    }, 
    {
        imgurl:"www.google.com",
        paragraph:"she is hot"
    }

]
const blog = document.querySelector(".container")
blogs.forEach((mer)=>{
      blog.innerHTML +=`
        <div class = "container">
          <img src="${mer.imgurl}" alt="me"alt>
         <p>${mer.paragraph}</p>
        </div>
      `;
    
});
const myBody = document.querySelector("body")
const button = document.querySelector(".btn")
const toggleDarkMode = ()=> {
     myBody.classList.toggle("dark")
}
button.addEventListener("click", toggleDarkMode)
