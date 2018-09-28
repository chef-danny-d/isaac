// @ts-check
import $ from "jquery";

//https://api.myjson.com/bins/1eskf4 actual data
//https://api.myjson.com/bins/t6qvk test data

const y = 4; //number of posts to be published
let i;
let title, subTitle, author, date, type, n, description, article, imageSrc, newPost, oldPost;
let obj = "test",
    ending; //turning doc.innerHTML into fn
let blog = [{
        title: "Blog post video 1",
        subTitle: "This is the blog's subtitle",
        author: "Me",
        date: {
            year: 2018,
            month: 10,
            day: 19
        },
        type: "video 1",
        new: true,
        description: "some txt",
        article: "main text for blog post",
        imageSrc: "url to any image that needs to be added to the blog post"
    },
    {
        title: "Blog post vido 2",
        subTitle: "og's subtitle",
        author: "you",
        date: {
            year: 2011,
            month: 10,
            day: 19
        },
        type: "video 2",
        new: false,
        description: "se txt",
        article: "main text for blog post",
        imageSrc: "url to age that needs to be added to the blog post"
    },
    {
        title: "Blog post videoooo 3",
        subTitle: "This is t's subtitle",
        author: "you",
        date: {
            year: 2015,
            month: 10,
            day: 19
        },
        type: "vdeo 3",
        new: true,
        description: "soxt",
        article: "main text r blog post",
        imageSrc: "url to any  that needs to be added to the blog post"
    },
    {
        title: "Blog pideo 4",
        subTitle: "This is the blog's subtitle",
        author: "yo",
        date: {
            year: 2009,
            month: 10,
            day: 19
        },
        type: "vio 4",
        new: false,
        description: "somtxt",
        article: "main text for blog ost",
        imageSrc: "url to ange that needs to  to the blog post"
    }
];

//declaring a function to do all the displaying so we get rid of long redundent code
//var obj is the HTML class
//var ending is the var that includes our JSON extraction

//the bellow fn is equliant of:         let display = (obj, ending) => document.getElementById(obj + [i]).innerHTML = ending;
let display = (obj, ending) => $(`#${obj}` + [i]).html(ending);

for (i = 0; i < y; i++) {
    title = `<br> ${blog[i].title} <br>`;
    display("title", title);

    subTitle = `<br> ${blog[i].subTitle} <br>`;
    display("subTitle", subTitle);

    author = `<br> ${blog[i].author} <br>`;
    display("author", author);

    date = `<br> ${blog[i].date.year}, ${blog[i].date.month}, ${blog[i].date.day} <br>`;
    display("date", date);

    type = `<br> ${blog[i].type} <br>`;
    n = `<br> ${blog[i].new} <br>`;

    //tri if statement  
    //if key new has value true display n in ".n"
    //else display type in ".type"
    (blog[i].new == true) ? display("n", n): display("type", type);

    description = `<br> ${blog[i].description} <br>`;
    display("desc", description);

    article = "<br>" + blog[i].article + "<br>";
    display("article", article);

    imageSrc = "<br>" + blog[i].imageSrc + "<br>";
    display("imageSrc", imageSrc)
}

//SERVER LOAD TESTING

$(document).ready(function () {
    $(".photos__filter__list__item").toggleClass("photos__filter__list__item--active");
    
    
    //url to the json that we are hosting
    //this will change to either a static link once we host or just refference my github raw file
    var jsonURL = "https://api.myjson.com/bins/1eskf4";
    $.getJSON(jsonURL, function(loadData){
        
        //loading a var with what we need dispalyed
        //this needs to be changed into somehting more dynamic maybe with a loop of somekind
        let dataString = loadData.blog1.title;
        
        //actually displaying the data using innerHTML into the title1 id div
        //this is just to test if everything works
        //the end result will be done using jQuery like the local test above
        document.getElementById("title1").innerHTML = dataString;
    
    })
});
