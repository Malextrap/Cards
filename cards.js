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
