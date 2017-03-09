# AnimatedSideNav
A Nice and Animated Side Navigation Bar Built by jQuery&amp;TweenMax(GSAP)

![](http://ww3.sinaimg.cn/large/71d81503jw1fa9ahrwyqmg205z0cajug.gif) 

See [OnlineDemo](http://www.eamonn.cn/sidenav)
## How to use
Fisrt of all,please include jQuery and TweenMax before SideNav,and don't forget css:
```html
<link rel="stylesheet" href="/dest/scss/sideNavi.css">
<script src="/bower_components/jquery/dist/jquery.min.js"></script>
<script src="/bower_components/gsap/src/minified/TweenMax.min.js"></script>
<script src="/dest/js/SideNav.js"></script>
```
Then HTML:
```html
<section class="km-side-navi" id="exampleSide"></section>
```
Finally use Javascript:
```Javascript
var options = {
    //default : ['part1','part2','part3','part4']
    menu : ['item1','item2','item3','item4','item5'],
    //default : 'right'
    position : 'left', //you can set 'left' or 'right'
    //default : '#dc1e24'
    themeColor : '#1ed1dc', //it will change the name background-color and semicircle's background-color
    //default : '#fff'
    txtColor: '#ffffff', //it will change the menu item text's color
    id : 'exampleSide', //the DOM you want to genorate
    afterInit : function(){ //this function will execute after all the sidenav's animation is done
        alert('afterInit')
    }
}
var SideNav = new SideNavi(options);
```
## Methods
Will Update Soon
