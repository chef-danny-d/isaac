let y = 4;//number of posts to be published
let title, subTitle, author, date, type, n, description, article, imageSrc;
let blog = [
    {
        title : "Blog post video 1",
        subTitle : "This is the blog's subtitle",
        author : "Me",
        date : {
            year : 2018,
            month : 10,
            day : 19
        },
        type : "video 1",
        new : true,
        description : "some txt",
        article : "main text for blog post",
        imageSrc : "url to any image that needs to be added to the blog post"
    },
    {
        title : "Blog post vido 2",
        subTitle : "og's subtitle",
        author : "you",
        date : {
            year : 2011,
            month : 10,
            day : 19
        },
        type : "video 2",
        new : false,
        description : "se txt",
        article : "main text for blog post",
        imageSrc : "url to age that needs to be added to the blog post"
    },
    {
        title : "Blog post videoooo 3",
        subTitle : "This is t's subtitle",
        author : "you",
        date : {
            year : 2015,
            month : 10,
            day : 19
        },
        type : "vdeo 3",
        new : true,
        description : "soxt",
        article : "main text r blog post",
        imageSrc : "url to any  that needs to be added to the blog post"
    },
    {
        title : "Blog pideo 4",
        subTitle : "This is the blog's subtitle",
        author : "yo",
        date : {
            year : 2009,
            month : 10,
            day : 19
        },
        type : "vio 4",
        new : false,
        description : "somtxt",
        article : "main text for blog ost",
        imageSrc : "url to ange that needs to  to the blog post"
    }
];


for(i = 0; i < y; i++){
    title ="<br>" +  blog[i].title + "<br>";
    document.getElementById("title" + [i]).innerHTML = title;
    
    subTitle ="<br>" +  blog[i].subTitle + "<br>";
    document.getElementById("subTitle" + [i]).innerHTML = subTitle;
    
    author ="<br>" +  blog[i].author + "<br>";
    document.getElementById("author" + [i]).innerHTML = author;
    
    date ="<br>" +  blog[i].date.year + blog[i].date.month + blog[i].date.day + "<br>";
    document.getElementById("date" + [i]).innerHTML = date;

    type ="<br>" +  blog[i].type + "<br>";

    n ="<br>" +  blog[i].new + "<br>";
    if(blog[i].new == true){
        document.getElementById("n" + [i]).innerHTML = n;
        console.log("n display");
    }
    else{
        document.getElementById("type" + [i]).innerHTML = type;
        console.log("type display");
    }
    

    description ="<br>" +  blog[i].description + "<br>";
    document.getElementById("desc" + [i]).innerHTML = description;

    article ="<br>" +  blog[i].article + "<br>";
    document.getElementById("article" + [i]).innerHTML = article;

    imageSrc ="<br>" +  blog[i].imageSrc + "<br>";
    document.getElementById("imageSrc" + [i]).innerHTML = imageSrc;
} 
