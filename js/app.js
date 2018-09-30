// @ts-check
//https://api.myjson.com/bins/1eskf4 actual data
//https://api.myjson.com/bins/t6qvk test data
var title, subTitle, author, date, type, n, description, article, imageSrc, i, dateMonth;
var obj, ending; //turning doc.innerHTML into fn
var blog = [
    {
        title: "Lorem ipsum dolor sit ametasdiokdhaiadas",
        subTitle: "This is the blog's subtitle",
        author: "Me",
        date: {
            year: 2017,
            month: 10,
            day: 19
        },
        type: "blog",
        "new": true,
        description: "some txt",
        article: "main text for blog post",
        imageSrc: "https://picsum.photos/1920/1080/?image=122"
    },
    {
        title: "Lorem ipsum dolor sit amet",
        subTitle: "This is the blog's subtitle",
        author: "Me",
        date: {
            year: 2017,
            month: 10,
            day: 19
        },
        type: "blog",
        "new": true,
        description: "some txt",
        article: "main text for blog post",
        imageSrc: "https://picsum.photos/1920/1080/?random"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subTitle: "This is the blog's subtitle",
        author: "Me",
        date: {
            year: 2018,
            month: 4,
            day: 19
        },
        type: "blog",
        "new": true,
        description: "some txt",
        article: "main text for blog post",
        imageSrc: "https://picsum.photos/1920/1080/?image=52"
    },
    {
        title: "Donec id convallis dolor. Cras fringilla fermentum sem.",
        subTitle: "og's subtitle",
        author: "you",
        date: {
            year: 2011,
            month: 3,
            day: 19
        },
        type: "video",
        "new": true,
        description: "se txt",
        article: "main text for blog post",
        imageSrc: "https://picsum.photos/1920/1080/?image=62"
    },
    {
        title: "In vitae tempus tortor. Sed pulvinar orci mauris.",
        subTitle: "This is t's subtitle",
        author: "you",
        date: {
            year: 2015,
            month: 2,
            day: 19
        },
        type: "blog",
        "new": true,
        description: "soxt",
        article: "main text r blog post",
        imageSrc: "https://picsum.photos/1920/1080/?image=27"
    },
    {
        title: "Cras placerat faucibus tortor, sit amet consequat quam convallis vitae.",
        subTitle: "This is the blog's subtitle",
        author: "yo",
        date: {
            year: 2009,
            month: 1,
            day: 19
        },
        type: "music",
        "new": true,
        description: "somtxt",
        article: "main text for blog ost",
        imageSrc: "https://picsum.photos/1920/1080/?image=32"
    }
];
$("#newsImg").append("<div class=\"image--fill__img\" value=\"placeholder image until real one is provided by client\"></div>");
//declaring a function to do all the displaying so we get rid of long redundent code
//var obj is the HTML class
//var ending is the var that includes our JSON extraction
//the bellow fn is equliant of:         let display = (obj, ending) => document.getElementById(obj + [i]).innerHTML = ending;
var display = function (obj, ending) { return $("." + obj + [i]).html(ending); };
var y = 6; //number of posts to be published
for (i = 0; i < y; i++) {
    $(".blog").append("\n    <div class=\"block" + i + " animated fadeInRight faster delay-" + i + "s\">\n        <div class=\"divider\"></div>\n        <div class=\"date" + i + "\"></div>\n        <div class=\"label" + i + "\"></div>\n        <div class=\"title" + i + "\"></div>\n    </div>\n    ");
    $(".block0").addClass("current");
    if (i >= 5) {
        $(".blog").append("\n        <button class=\"bttn bttn--light\">See more posts</button>\n        ");
    }
    title = blog[i].title;
    display("title", title);
    subTitle = blog[i].subTitle;
    display("subTitle", subTitle);
    author = blog[i].author;
    display("author", author);
    dateMonth = blog[i].date.month;
    if (dateMonth == 1) {
        dateMonth = blog[i].date.month.toString();
        dateMonth = "Jan";
        date = dateMonth + " " + blog[i].date.year;
    }
    else if (dateMonth == 2) {
        dateMonth = blog[i].date.month.toString();
        dateMonth = "Feb";
        date = dateMonth + " " + blog[i].date.year;
    }
    else if (blog[i].date.month == 3) {
        dateMonth = blog[i].date.month.toString();
        dateMonth = "Mar";
        date = dateMonth + " " + blog[i].date.year;
    }
    else if (blog[i].date.month == 4) {
        dateMonth = blog[i].date.month.toString();
        dateMonth = "Apr";
        date = dateMonth + " " + blog[i].date.year;
    }
    else if (blog[i].date.month == 5) {
        dateMonth = blog[i].date.month.toString();
        dateMonth = "May";
        date = dateMonth + " " + blog[i].date.year;
    }
    else if (blog[i].date.month == 6) {
        dateMonth = blog[i].date.month.toString();
        dateMonth = "jun";
        date = dateMonth + " " + blog[i].date.year;
    }
    else if (blog[i].date.month == 7) {
        dateMonth = blog[i].date.month.toString();
        dateMonth = "jul";
        date = dateMonth + " " + blog[i].date.year;
    }
    else if (blog[i].date.month == 8) {
        dateMonth = blog[i].date.month.toString();
        dateMonth = "aug";
        date = dateMonth + " " + blog[i].date.year;
    }
    else if (blog[i].date.month == 9) {
        dateMonth = blog[i].date.month.toString();
        dateMonth = "sep";
        date = dateMonth + " " + blog[i].date.year;
    }
    else if (blog[i].date.month == 10) {
        dateMonth = blog[i].date.month.toString();
        dateMonth = "oct";
        date = dateMonth + " " + blog[i].date.year;
    }
    else if (blog[i].date.month == 11) {
        dateMonth = blog[i].date.month.toString();
        dateMonth = "nov";
        date = dateMonth + " " + blog[i].date.year;
    }
    else if (blog[i].date.month == 12) {
        dateMonth = blog[i].date.month.toString();
        dateMonth = "dec";
        date = dateMonth + " " + blog[i].date.year;
    }
    else {
        blog[i].date.month == null;
    }
    display("date", date);
    type = blog[i].type;
    n = blog[i]["new"];
    if (blog[0]["new"] == false) {
        blog[0]["new"] = true;
    }
    for (var x = 1; x < y; x++) {
        if (blog[x]["new"] == true) {
            blog[x]["new"] = false;
        }
    }
    //tri if statement  
    //if key new has value true display n in ".n"
    //else display type in ".type"
    (blog[i]["new"] == true) ? display("label", "new") : display("label", type);
    description = blog[i].description;
    display("desc", description);
    article = blog[i].article;
    display("article", article);
    imageSrc = blog[i].imageSrc;
    display("imageSrc", imageSrc);
}
$(".image--fill__img").css("background-image", "url('" + blog[0].imageSrc + "')");
console.log(i);
//SERVER LOAD TESTING
$(document).ready(function () {
    //$(".photos__filter__list__item").toggleClass("photos__filter__list__item--active");
    /*
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
    */
});
