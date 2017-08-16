# Cards
A element for my personal framework available in: https://github.com/Malextrap

<br>

## DEPENDENCIES 

```html
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
```
<br>

## HTML

```html
<!-- 
/**
 * Created by alejandrorioscalera
 * On 15/8/17
 *
 * - SOCIAL NETWORKS -
 *
 * GitHub: https://github.com/clonalejandro or @clonalejandro
 * Website: https://clonalejandro.me/
 * Twitter: https://twitter.com/clonalejandro11/ or @clonalejandro11
 * Keybase: https://keybase.io/clonalejandro/
 *
 * - LICENSE -
 *
 * All rights reserved for clonalejandro ©Malextrap | Cards 2017 / 2018
 */
-->

<!-- CONTAINERS -->
<div class="card-container">
  <div class="containerF">

    <!-- CARDS -->
    <!-- BLUE CARD -->
    <a class="card-link">
      <div class="card card-shadow card-blue">
        <div class="filter">
          <h3>Title</h3>
          <p class="title"></p>
        <div class="card-body">
          <h3>Description</h3>
          <p class="description"></p>
       </div>
       <div class="card-footer">
         <h3>Date</h3>
         <p class="date"></p>
        </div>
      </div>
     </div>
    </a>

    <!-- RED/PINK CARD -->
    <a class="card-link">
      <div class="card card-shadow card-red">
        <div class="filter">
          <h3>Title</h3>
          <p class="title"></p>
        <div class="card-body">
          <h3>Description</h3>
          <p class="description"></p>
       </div>
       <div class="card-footer">
         <h3>Date</h3>
         <p class="date"></p>
        </div>
      </div>
     </div>
    </a>
    
   <!-- DARK-BLUE/NIGHT CARD -->
   <a class="card-link">
        <div class="card card-shadow card-night">
          <div class="filter">
            <h3>Title</h3>
            <p class="title"></p>
          <div class="card-body">
            <h3>Description</h3>
            <p class="description"></p>
         </div>
         <div class="card-footer">
           <h3>Date</h3>
           <p class="date"></p>
          </div>
        </div>
       </div>
      </a>
    
  </div>
</div>
```

<br>

## CSS

```css
/**
 * Created by alejandrorioscalera
 * On 15/8/17
 *
 * -- SOCIAL NETWORKS --
 *
 * GitHub: https://github.com/clonalejandro or @clonalejandro
 * Website: https://clonalejandro.me/
 * Twitter: https://twitter.com/clonalejandro11/ or @clonalejandro11
 * Keybase: https://keybase.io/clonalejandro/
 *
 * -- LICENSE --
 *
 * All rights reserved for clonalejandro ©Malextrap | Cards 2017 / 2018
 */

/** FONTS **/

@font-face{
  font-family: Rubik;
  font-style: normal;
  font-weight: 600;
  src: url(https://d33wubrfki0l68.cloudfront.net/css/c52cb5fdc6b3db1823a3c6da0c1228a16af183f3/bd37c/hm1fcrk.woff2) format("woff2"), url(https://d33wubrfki0l68.cloudfront.net/css/e4f3db72f54ae3c4658d159fed459b22e4d2a3e9/937ee/2rvrc3w.woff) format("woff")
}

@font-face{
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  src: url(https://d33wubrfki0l68.cloudfront.net/css/f9502df31229fdf97c531615eddfd7bdfe1caffe/d6ad8/1u0ihob.woff2) format("woff2"), url(https://d33wubrfki0l68.cloudfront.net/css/c6b6de30a45e5711ed9e48d3f0e968825090910d/d9a82/capfljy.woff) format("woff")
}

@font-face {
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  src: url(https://d33wubrfki0l68.cloudfront.net/css/d38d0755b1107b905a70d7c88383f65f6dfc939b/4eb45/2boe8ds.woff2) format("woff2"),url(https://d33wubrfki0l68.cloudfront.net/css/8524299d76874df936e69187d833634342929965/ce2d3/35t6eug.woff) format("woff")
}

@font-face {
  font-family: monaco;
  font-style: normal;
  font-weight: 700;
  src: local("monaco") url(https://d33wubrfki0l68.cloudfront.net/css/8a790d3fdad72dbbf48f3f77036932628eccc648/6649e/1j0da71.woff2) format("woff2"),url(https://d33wubrfki0l68.cloudfront.net/css/cf67da4ac20e2f98e557f46ab391936395f0826c/68d2b/xvxn8qa.woff) format("woff")
}

/** WEB **/

body {
    font-family: Rubik,Helveltica Neue,Open Sans,Segoe UI,sans-serif;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: #525f7f;
}

body, html {
    font-size: 18px;
}


/** CONTAINERS **/

.card-container{
  margin: 20px;
  display: flex;
  display: -webkit-flex;
}

.containerF {
  overflow: hidden;
  margin: 20px;
}


/** CARD BASE **/

a.card-link{
  float: left;
  margin: 20px;
}

.card {
  overflow: hidden;
  background-size: cover;
  position: relative;
  width: 300px;
  heigh: 350px;
  display: flex;
  margin: 40px 0;
  border-radius: 10px;
}


/** CARD PROPERTIES **/

.card.card-shadow { box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5); }

.card.card-blue { background: linear-gradient(180deg, #2af598 0%, #009efd 100%); }

.card.card-red { background: linear-gradient(120deg, #f093fb 0%, #f5576c 100%); }

.card.card-night { background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); }


/** CARD ELEMENTS **/

.filter { background-color: rgba(0, 0, 0, .4); }

.card > .filter h3 {
    margin-bottom: 10px;
    font-size: .777rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin-left: 0.5rem;
    color: #c4cad0;
}

.card > .filter p {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 10px;
    margin-left: 0.5rem;
    line-height: 1.6em;
}
```

<br>

## JS 

```js
/**
 * Created by alejandrorioscalera
 * On 15/8/17
 *
 * -- SOCIAL NETWORKS --
 *
 * GitHub: https://github.com/clonalejandro or @clonalejandro
 * Website: https://clonalejandro.me/
 * Twitter: https://twitter.com/clonalejandro11/ or @clonalejandro11
 * Keybase: https://keybase.io/clonalejandro/
 *
 * -- LICENSE --
 *
 * All rights reserved for clonalejandro ©Malextrap | Cards 2017 / 2018
 */

/** SMALL CONSTRUCTORS **/

const space = " ";//util

//Date
const data = new Date();
const day = data.getDate();

const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = monthList[data.getMonth()];
const year = data.getFullYear();

const hour = data.getHours();
const minute = data.getMinutes();
const awer = hour + ":" + minute;


const title = "Lorem ipsum dolor";//Title
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet consectetur quam nec imperdiet. Nullam.";//Description
const date = day + "-" + month + "-" + year + space + awer;//date


/** REST **/

$(document).ready(function(){
  $('.title').html(title);
  $('.description').html(description);
  $('.date').html(date);
});
```

<br>

## Test this element

You can test in this web: <a href="https://malextrap.github.io/Cards/src/cards">this</a>



![picture](https://i.imgur.com/1mIWzya.png)


## Copyright ©
#### Developed by clonalejandro
         
