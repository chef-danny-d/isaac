let title = 0, subTitle = 0, author = 0, date = 0, type = 0, n = 0, description = 0, article = 0, imageSrc = 0;
let blog = [
    {
        "title" : "Blog post video",
        "subTitle" : "This is the blog's subtitle",
        "author" : "Me",
        "date" : {
            "year" : 2018,
            "month" : 10,
            "day" : 19
        },
        "type" : "video",
        "new" : false,
        "description" : "some txt",
        "article" : "main text for blog post",
        "imageSrc" : "url to any image that needs to be added to the blog post"
    },
    {
        "title" : "Blog post video",
        "subTitle" : "og's subtitle",
        "author" : "you",
        date : {
            year : 2011,
            "month" : 10,
            "day" : 19
        },
        "type" : "video",
        "new" : false,
        "description" : "se txt",
        "article" : "main text for blog post",
        "imageSrc" : "url to age that needs to be added to the blog post"
    },
    {
        "title" : "Blog post video",
        "subTitle" : "This is t's subtitle",
        "author" : "you",
        "date" : {
            "year" : 2015,
            "month" : 10,
            "day" : 19
        },
        "type" : "vdeo",
        "new" : false,
        "description" : "soxt",
        "article" : "main text r blog post",
        "imageSrc" : "url to any  that needs to be added to the blog post"
    },
    {
        "title" : "Blog pideo",
        "subTitle" : "This is the blog's subtitle",
        "author" : "yo",
        "date" : {
            "year" : 2009,
            "month" : 10,
            "day" : 19
        },
        "type" : "vio",
        "new" : false,
        "description" : "somtxt",
        "article" : "main text for blog ost",
        "imageSrc" : "url to ange that needs to  to the blog post"
    }
];

//alert(blog[0].date.day)

    for(i = 0; i < 4; i++){
        title +="<br>" +  blog[i].title + "<br>";
        subTitle +="<br>" +  blog[i].subTitle + "<br>";
        author +="<br>" +  blog[i].author + "<br>";
        date +="<br>" +  blog[i].date.year + "<br>";
        date +="<br>" +  blog[i].date.month + "<br>";
        date +="<br>" +  blog[i].date.day + "<br>";
        type +="<br>" +  blog[i].type + "<br>";
        n +="<br>" +  blog[i].new + "<br>";
        description +="<br>" +  blog[i].description + "<br>";
        article +="<br>" +  blog[i].article + "<br>";
        imageSrc +="<br>" +  blog[i].imageSrc + "<br>" + "<br>" + "<br>" + "<br>" + "<br>";
    } 

document.getElementById("title").innerHTML = title;
document.getElementById("subTitle").innerHTML = subTitle;
document.getElementById("author").innerHTML = author;
//document.getElementById("demo").innerHTML = date + date + date;
document.getElementById("type").innerHTML = type;
document.getElementById("n").innerHTML = n;
document.getElementById("desc").innerHTML = description;
document.getElementById("article").innerHTML = article;
document.getElementById("imageSrc").innerHTML = imageSrc;
