//your own js files and scripts will come here as you write them throughout the project

 //core data that would act as blog posts
 blog = [
     {
         title: "Blog post video",
         subTitle: "This is the blog's subtitle",
         author: "Me",
         dateYear: 2017,
         dateMonth: 08,
         dateDay: 12,
         type: "video",
         new: false,
         description: "some txt",
         article: "main text for blog post",
         imageSrc: "url to any image that needs to be added to the blog post"
     },
     {
         title: "Blog post music",
         subTitle: "This is the blog's subtitle",
         author: "John Smith",
         dateYear: 2017,
         dateMonth: 03,
         dateDay: 08,
         type: "music",
         new: true,
         description: "some txt",
         article: "main text for blog post",
         imageSrc: "url to any image that needs to be added to the blog post"
     },
     {
         title: "Blog post text",
         subTitle: "This is the blog's subtitle",
         author: "Hack Man",
         dateYear: 2017,
         dateMonth: 10,
         dateDay: 24,
         type: "text",
         new: false,
         description: "some txt",
         article: "main text for blog post",
         imageSrc: "url to any image that needs to be added to the blog post"
     },
     {
         title: "Blog post picture",
         subTitle: "This is the blog's subtitle",
         author: "Pac Man",
         dateYear: 2017,
         dateMonth: 12,
         dateDay: 31,
         type: "picture",
         new: false,
         description: "some txt",
         article: "main text for blog post",
         imageSrc: "url to any image that needs to be added to the blog post"
     }
 ];

 //supposed to test class adding functionality and comparing post.type -> basic static strings
 function typeClass(type) {
     if (type === "video") {
         return type
         console.log("video");
     } else if (type == "picture") {
         return type
         console.log("picture");
     } else if (type == "text") {
         return type
         console.log("text");
     } else {
         return type
         console.log("music");
     }
 }

 //displays all the blog post data imported from blog[array]
 function display(post) {
     return `
    <div>
        <img src="https://via.placeholder.com/350x150">
        <h2>${post.title}</h2>
        <h3>${post.subTitle}</h3>
        <h4>Author: ${post.author}</h4>
        <h5>Created: ${post.date}</h5>
        <h6>${typeClass(post.type)}</h6>
    </div>
    `
 }

 document.getElementById("output").innerHTML = `
Number of items: ${blog.length}<br/>
${blog.map(display).join('')}
`;

function newPost(){
    //var d = new Date().getMonth();
    //if post date == d {label == true} else {label == false}
}

function readMore(){
    //if {blog.length >= 5 than show button} else {hide}
}
