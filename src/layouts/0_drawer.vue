<template>
    <div class="dblSideDrawer">
        <!-- DRAWER -->
        <div class="nav-overlay" :class="{active: showDrawer}" id="overlay">
        <nav class="overlay-menu">
            <ul>
                <li><a href="agency-index.html">Home</a></li>
                <li><a href="agency-about-us.html">About</a></li>
                <li><a href="agency-service.html">Service</a></li>
                <li><a href="agency-projects.html">Projects</a></li>
                <li><a href="agency-carreer.html">Join In</a></li>
                <li><a href="agency-apply-form.html">Apply Now</a></li>
                <li><a href="agency-contact.html">Contact</a></li>
            </ul>
        </nav>
        </div>
    </div>
</template>


<script>
    import { openURL } from 'quasar'   // for tel links etc.

    export default {
        methods: {
            openURL
        },
        computed: {     // basic states
            selectedTab() {
                return this.$store.state.daWaypoint
            },
            showDrawer() {
                return this.$store.state.showDrawer
            },
        }
    }
</script>


<style scoped>

nav{display:block;}
a{background-color:transparent;}
a:active,a:hover{outline:0;}
*,*:before,*:after{box-sizing:inherit;}
ul{list-style-type:none;}
a{color:#039be5;text-decoration:none;}
ul{padding:0;}
ul li{list-style-type:none;}
nav{-webkit-box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);-moz-box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);}
nav{color:#fff;background-color:#ee6e73;width:100%;height:56px;line-height:56px;}
nav a{color:#fff;}
nav ul{margin:0;float:right;}
nav ul li{float:left;padding:0px;-webkit-transition:background-color 0.3s;-moz-transition:background-color 0.3s;-o-transition:background-color 0.3s;-ms-transition:background-color 0.3s;transition:background-color 0.3s;}
nav ul li:hover{background-color:rgba(0, 0, 0, 0.1);}
nav ul a{font-size:1rem;color:#fff;display:block;padding:0px 15px;}
@media only screen and (min-width : 601px){
nav{height:64px;line-height:64px;}
}
a{text-decoration:none;}
/*! CSS Used from: http://trendytheme.net/demo/matrox/assets/bootstrap/css/bootstrap.min.css */
nav{display:block;}
a{background-color:transparent;}
a:active,a:hover{outline:0;}
@media print{
*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important;}
a,a:visited{text-decoration:underline;}
a[href]:after{content:" (" attr(href) ")";}
}
*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
a{color:#337ab7;text-decoration:none;}
a:focus,a:hover{color:#23527c;text-decoration:underline;}
a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}
ul{margin-top:0;margin-bottom:10px;}

a{color:#ed145b;}
a{outline:0;cursor:pointer;text-decoration:none;}
a:focus,a:hover{color:#03a9f4;outline:0;text-decoration:none;}
a{-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-ms-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease;}
nav{background-color:transparent;}
nav ul,nav ul li{float:none;}
nav ul li:hover{background-color:transparent;}
nav ul a{font-size:inherit;}

a{color:#2ecc71;}
a:focus,a:hover{color:#2ecc71;}
.nav-overlay{position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;visibility:hidden;-webkit-transition:opacity .35s,visibility .35s,width .35s;transition:opacity .35s,visibility .35s,width .35s;z-index:50;}
.nav-overlay:before,.nav-overlay:after{content:'';background:#2ecc71;top:0;width:50%;height:100%;position:absolute;}
.nav-overlay:before{left:-55%;-webkit-transition:left .35s ease;transition:left .35s ease;}
.nav-overlay:after{right:-55%;-webkit-transition:all .35s ease;transition:all .35s ease;}
.nav-overlay.active{opacity:1;visibility:visible;height:100%;}
.nav-overlay.active:before{left:0;}
.nav-overlay.active:after{right:0;}
.nav-overlay.active li{-webkit-animation:fadeInRight .5s ease forwards;animation:fadeInRight .5s ease forwards;-webkit-animation-delay:.25s;animation-delay:.25s;}
.nav-overlay.active li:nth-of-type(2){-webkit-animation-delay:.35s;animation-delay:.35s;}
.nav-overlay.active li:nth-of-type(3){-webkit-animation-delay:.45s;animation-delay:.45s;}
.nav-overlay.active li:nth-of-type(4){-webkit-animation-delay:.55s;animation-delay:.55s;}
.nav-overlay.active li:nth-of-type(5){-webkit-animation-delay:.65s;animation-delay:.65s;}
.nav-overlay.active li:nth-of-type(6){-webkit-animation-delay:.75s;animation-delay:.75s;}
.nav-overlay.active li:nth-of-type(7){-webkit-animation-delay:.85s;animation-delay:.85s;}
.nav-overlay nav{position:relative;height:70%;top:50%;font-size:40px;text-align:center;z-index:100;background-color:transparent;box-shadow:none;font-family:vollkorn,serif;-webkit-transform:translateY(-50%);transform:translateY(-50%);}
.nav-overlay ul{list-style:none;padding:0;margin:0 auto;display:inline-block;position:relative;height:100%;float:none;}
.nav-overlay ul li{display:block;min-height:50px;position:relative;opacity:0;margin-bottom:15px;}
.nav-overlay ul li a{display:block;padding:0;position:relative;color:#fff;text-decoration:none;overflow:hidden;}
.nav-overlay ul li a:hover{background-color:transparent;}
.nav-overlay ul li a:hover:after,.nav-overlay ul li a:focus:after,.nav-overlay ul li a:active:after{width:100%;}
.nav-overlay ul li a:after{content:'';position:absolute;bottom:0;left:50%;width:0%;-webkit-transform:translateX(-50%);transform:translateX(-50%);height:3px;background:#fff;-webkit-transition:.35s;transition:.35s;}
@media screen and (max-width:991px){
.nav-overlay nav{font-size:30px;}
.nav-overlay ul li{margin-bottom:0;}
}
/*! CSS Used keyframes */
@-webkit-keyframes fadeInRight{0%{opacity:0;left:20%;}100%{opacity:1;left:0;}}
@keyframes fadeInRight{0%{opacity:0;left:20%;}100%{opacity:1;left:0;}}


</style>
