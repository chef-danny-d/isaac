var y = 6; //number of posts to be published
var jsonURL = "https://api.myjson.com/bins/14z6co";
//SERVER TESTING
var req = new XMLHttpRequest();
req.open('GET', jsonURL);
req.onload = function () {
    var title, subTitle, author, date, type, n, description, article, imageSrc, i, dateMonth;
    var obj, ending; //turning doc.innerHTML into fn
    //declaring a function to do all the displaying so we get rid of long redundent code
    //var obj is the HTML class
    //var ending is the var that includes our JSON extraction
    var display = function (obj, ending) { return $("." + obj).append(ending); };
    var serverData = JSON.parse(req.responseText);
    for (var i_1 = 0; i_1 < y; i_1++) {
        $(".blog").append("\n    <div class=\"block" + i_1 + " animated fadeInRight faster delay-" + i_1 + "s\">\n        <div class=\"divider\"></div>\n        <div class=\"date" + i_1 + "\"></div>\n        <div class=\"label" + i_1 + "\"></div>\n        <div class=\"title" + i_1 + "\"></div>\n    </div>\n    ");
        $(".block0").addClass("current");
        if (i_1 >= 5) {
            $(".blog").append("\n        <button class=\"bttn bttn--light\">See more posts</button>\n        ");
        }
        //get and display title
        title = serverData.news.blog[i_1].title;
        //$(".title" + i).append(title);
        display("title" + i_1, title);
        //get and display subtitle
        subTitle = serverData.news.blog[i_1].subTitle;
        display("subTitle" + i_1, subTitle);
        //get and display author
        author = serverData.news.blog[i_1].author;
        display("author" + i_1, author);
        dateMonth = serverData.news.blog[i_1].date.month;
        if (dateMonth == 1) {
            dateMonth = serverData.news.blog[i_1].date.month.toString();
            dateMonth = "Jan";
            date = dateMonth + " " + serverData.news.blog[i_1].date.year;
        }
        else if (dateMonth == 2) {
            dateMonth = serverData.news.blog[i_1].date.month.toString();
            dateMonth = "Feb";
            date = dateMonth + " " + serverData.news.blog[i_1].date.year;
        }
        else if (serverData.news.blog[i_1].date.month == 3) {
            dateMonth = serverData.news.blog[i_1].date.month.toString();
            dateMonth = "Mar";
            date = dateMonth + " " + serverData.news.blog[i_1].date.year;
        }
        else if (serverData.news.blog[i_1].date.month == 4) {
            dateMonth = serverData.news.blog[i_1].date.month.toString();
            dateMonth = "Apr";
            date = dateMonth + " " + serverData.news.blog[i_1].date.year;
        }
        else if (serverData.news.blog[i_1].date.month == 5) {
            dateMonth = serverData.news.blog[i_1].date.month.toString();
            dateMonth = "May";
            date = dateMonth + " " + serverData.news.blog[i_1].date.year;
        }
        else if (serverData.news.blog[i_1].date.month == 6) {
            dateMonth = serverData.news.blog[i_1].date.month.toString();
            dateMonth = "jun";
            date = dateMonth + " " + serverData.news.blog[i_1].date.year;
        }
        else if (serverData.news.blog[i_1].date.month == 7) {
            dateMonth = serverData.news.blog[i_1].date.month.toString();
            dateMonth = "jul";
            date = dateMonth + " " + serverData.news.blog[i_1].date.year;
        }
        else if (serverData.news.blog[i_1].date.month == 8) {
            dateMonth = serverData.news.blog[i_1].date.month.toString();
            dateMonth = "aug";
            date = dateMonth + " " + serverData.news.blog[i_1].date.year;
        }
        else if (serverData.news.blog[i_1].date.month == 9) {
            dateMonth = serverData.news.blog[i_1].date.month.toString();
            dateMonth = "sep";
            date = dateMonth + " " + serverData.news.blog[i_1].date.year;
        }
        else if (serverData.news.blog[i_1].date.month == 10) {
            dateMonth = serverData.news.blog[i_1].date.month.toString();
            dateMonth = "oct";
            date = dateMonth + " " + serverData.news.blog[i_1].date.year;
        }
        else if (serverData.news.blog[i_1].date.month == 11) {
            dateMonth = serverData.news.blog[i_1].date.month.toString();
            dateMonth = "nov";
            date = dateMonth + " " + serverData.news.blog[i_1].date.year;
        }
        else if (serverData.news.blog[i_1].date.month == 12) {
            dateMonth = serverData.news.blog[i_1].date.month.toString();
            dateMonth = "dec";
            date = dateMonth + " " + serverData.news.blog[i_1].date.year;
        }
        else {
            serverData.news.blog[i_1].date.month == null;
        }
        //display date
        display("date" + i_1, date);
        //get post type
        type = serverData.news.blog[i_1].type;
        //get post new bool
        n = serverData.news.blog[i_1]["new"];
        if (serverData.news.blog[0]["new"] == false) {
            serverData.news.blog[0]["new"] = true;
        }
        for (var x = 1; x < y; x++) {
            if (serverData.news.blog[x]["new"] == true) {
                serverData.news.blog[x]["new"] = false;
            }
        }
        //tri if statement  
        //if key new has value true display n in ".n"
        //else display type in ".type"
        (serverData.news.blog[i_1]["new"] == true) ? display("label" + i_1, "new") : display("label" + i_1, type);
        //get and display description
        description = serverData.news.blog[i_1].description;
        display("desc" + i_1, description);
        //get and display article
        article = serverData.news.blog[i_1].article;
        display("article" + i_1, article);
        //get blog post imgsrc
        imageSrc = serverData.news.blog[i_1].imageSrc;
        //display album img
        $("#newsImg").css("background-image", "url('" + serverData.news.blog[0].imageSrc + "')");
        var _loop_1 = function (z) {
            $("div.block" + z).hover(function () {
                //in
                $("#newsImg").css("background-image", "url('" + serverData.news.blog[z].imageSrc + "')");
                $("div.block" + z + " .divider").addClass("current");
            }, function () {
                //out
                $("#newsImg").css("background-image", "url('" + serverData.news.blog[0].imageSrc + "')");
                $("div.block" + z + " .divider").removeClass("current");
            });
        };
        for (var z = 0; z < y; z++) {
            _loop_1(z);
        }
    } //end of for loop
    //need to make the albums dynamic
    //set up skeleton or append via TS
    //on click slider to hide and show the album data for different albums
    $(".albumContent__title").append(serverData.album[0].title);
    $(".albumContent__date--year").append(serverData.album[0].date.year);
    $(".albumContent__desc").append(serverData.album[0].desc);
    $(".albumContent__img").css("background-image", "url('" + serverData.album[0].cover + "')");
};
req.send();
//END OF SESSION
