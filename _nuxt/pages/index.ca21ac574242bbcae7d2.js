webpackJsonp([3],{"/TYz":function(t,e,i){"use strict";function a(t){i("BC2H")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("InjF"),o=i("e1wp"),r=i("VU/8"),s=a,l=r(n.a,o.a,!1,s,null,null);e.default=l.exports},BC2H:function(t,e,i){var a=i("EhQn");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("775502c7",a,!0)},EhQn:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,"#Main .bg--layer{position:fixed;top:0;left:0;bottom:0;right:0;z-index:1;background-image:url("+i("eDZ2")+")}#Main .outer{position:relative;height:100vh;z-index:2}#Main .outer .imgwrapper{position:absolute;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);top:50%;left:50%;height:80vh;z-index:2}#Main .outer .imgwrapper .itembg{position:absolute;top:0;left:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:block;width:auto;height:100%;max-height:1080px;max-height:67.5rem;z-index:1;opacity:0}#Main .outer .imgwrapper .itembg img{height:100%;display:block;margin:0 auto}#Main .outer .original_text{position:absolute;top:50%;left:50%;width:auto;white-space:nowrap;z-index:1;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);font-size:8.2vw;text-shadow:0 2px 4px rgba(0,0,0,.1);opacity:0}@media only screen and (max-width:680px){#Main .outer .original_text{font-size:10vw}}#Main .outer .loader{position:absolute;bottom:10vh;left:50%;-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);font-size:30px;font-size:1.875rem;z-index:1;width:250px;width:15.625rem;height:2px;height:.125rem;background-color:#dbdbdb}#Main .outer .loader .bar{position:relative;height:100%;background-color:#a0a0a0}",""])},InjF:function(t,e,i){"use strict";var a=i("A5qe"),n=i.n(a);e.a={name:"Main",data:function(){return{browser:!0,loaded:0,duration:4e3,imgs:[]}},watch:{people:function(t,e){var i=this;this.imgs=[],this.$Lazyload.$once("loaded",function(t){i.enter(t.el.parentNode)}),this.$nextTick(function(){i.imgs.push(t[0])})}},mounted:function(){this.people.length>0&&this.$nuxt.$router.push("home")},computed:{computeLoaded:function(){return parseInt(this.loaded)},people:function(){return this.$store.state.people},textStyles:function(){return{opacity:this.loaded/100}},loaderStyles:function(){return{width:this.loaded+"%"}},outerStyles:function(){return alert(document.body.clientHeight),alert(window.outerHeight),{height:this.$store.state.isMobile?document.body.clientHeight-(document.body.clientHeight-window.outerHeight)+"px":"100vh"}}},methods:{enter:function(t){var e=this;this.$nextTick(function(){var i=t,a=n.a.timeline({autoplay:!1});a.add({targets:i,opacity:[0,1],translateX:["0%","-50%"],delay:200,duration:600,easing:"easeOutExpo",complete:function(){var t=e.imgs.length<e.people.length?e.people[e.imgs.length]:null;null!==t&&(e.$Lazyload.$once("loaded",function(t){e.enter(t.el.parentNode)}),e.imgs.push(t))}}).add({targets:i,opacity:0,translateX:"-100%",duration:300,easing:"easeInExpo"}).add({targets:e,loaded:e.imgs.length/e.people.length*100,duration:600,easing:"linear",offset:0,complete:function(){e.imgs.length===e.people.length&&e.$nuxt.$router.push("home")}}),a.play()})}}}},e1wp:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Main",attrs:{id:"Main"}},[i("div",{staticClass:"bg--layer cover"}),i("div",{staticClass:"outer",style:t.outerStyles},[i("div",{staticClass:"imgwrapper"},t._l(t.imgs,function(t,e){return i("div",{key:e,staticClass:"itembg"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"//athensisoriginal.gr/"+t.Image.path,expression:"'//athensisoriginal.gr/' + img.Image.path"}]})])})),i("div",{staticClass:"original_text neue2013 bold color--white center",style:t.textStyles},[t._v("athens is original")]),i("div",{staticClass:"loader"},[i("div",{staticClass:"bar",style:t.loaderStyles})])])])},n=[],o={render:a,staticRenderFns:n};e.a=o},eDZ2:function(t,e,i){t.exports=i.p+"img/focus-min.f409d4c.png"}});
//# sourceMappingURL=index.ca21ac574242bbcae7d2.js.map