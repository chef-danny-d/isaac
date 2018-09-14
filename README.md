<!-- this is just my sample README, feel free to edit this as your prject requires it -->
# Isaac Personal Portfolio

# Solutions
- Bootstrap v4.0.0
- jQuery 3.1.1
- Sass
- Grunt.js
- Surge

# Purpose
A personal protfolio for Isaac Thomas, musician.

<!--
# Disclaimer
The mockup was NOT done by me nor will I ever claim the creation of it. Credit is provided to the author and I'm thankful that it was provided to me and the community for free. This project isn't intended to make any money nor will I ever sell this project or product created in this project. This project, as decribed above, is strickly only for my personal learning and improvement. The website isn't a compleat replica of the wireframe. I made changes to it as I thought would look better in my eyes. You are more than welcomed to fork this repo and send me your done project if you have a better way of getting the point across for a potential customer.
-->

# Credits
* [Bootstrap](http://getbootstrap.com/)
* [jQuery](https://jquery.com/)
* [Surge](https://surge.sh/)
* [Grunt](https://gruntjs.com/)
* [Sass](https://sass-lang.com/)

# Directories and subfiles
## Deployment
```
├───build
│   ├───style.css
│   └───style.css.map
```
`./build` directory is where the final version  of the stylesheets will live once the website is finalized and deployed to the live server.

`style.css` is the main deployment stylesheet. This file is not minified nor compiled into until final deployment.

`style.css.map` is the map sheet that links the stylesheet with the compiler. This file should be ignored and NOT edited.
## Stylesheets
```
├───css
│   ├───style.css.map
│   ├───style.min.css
│   └───style.css
```
`./css` directory is the location of the development stylesheet and it's map file which have been compiled and minified.

`style.min.css` is the main development stylesheet that have been minified.

`style.css` is the main development stylesheet. This file is never minified nor referenced in the `index.html` page. This file should not be edited rather edit the `style.scss` file.

## External Stylesheets
```
├───css_lib
│   ├───animate.min.css
│   └───bootstrap.css
```

`./css_lib` is where downloads of extrenal stylesheets live for local (no connection) development. 

`animate.min.css` is a stylesheet for improved animations with minimal code addition to your project. <a href="https://daneden.github.io/animate.css/">Link to the project</a>

`bootstrap.css` an unedited clone of the Bootstrap v4.1.3 unminified stylesheet.

## JavaScript
```
├───js
│   └───app.js
```
`./js` contains all the development javascript files.

`app.js` is the main script file linked to `index.html` file until minified and more content is added to it.

## External JavaScript
```
├───js_lib
│   └───ScrollTrigger.min.js
```
`./js_lib` is where downloaded script files live for local (no connection) development purposes. 

`ScrollTrigger.min.js` is a script that adds scroll based animations to your site with ease. <a href="https://terwanerik.github.io/ScrollTrigger/">Link to the project</a>

## Sass
```
└───_scss
    ├───_animate.scss
    ├───_images.scss
    ├───_phone.scss
    ├───_tablet.scss
    ├───_variables.scss
    └───style.scss
```
`./_scss` contains all the scss files needed for development. All these files get concatinated and compiled into one file using the `Gruntfile.js` file found in the project root.

`_animate.scss` is the dynamic and edited stylesheet related to the `animate.min.css`.

`_images.scss` is a stylesheet containing all the links to images on the website and will be finalized once deployment is done.

`_phone.scss` is a stylesheet that contains only the styles that need to applied on a phone size `@media only screen and (max-width: 768px)`.

`_tablet.scss` is a stylesheet that contains only the styles that need to applied on a tablet size `@media only screen (min-width: 769px) and (max-width: 992px)`.

`_variables.scss` is a stylesheet containing all the variables used throughout the main stylesheet. Structured into colors, mixins, fonts and extra helper styles. 

`style.scss` is the main stylesheet. This file is concatinated with all other files in this directory and than compiled into `css/style.min.css` before getting autoprefixed and put into `build/style.min.css`. Every change to the style of the website needs to be done in this file. This file contains variables and mixins that are defined in `_variables.scss` file.



# Design
![Wireframe](http://isaac-portfolio.surge.sh/img/Web%201920%20%E2%80%93%201.png "Wireframe")
