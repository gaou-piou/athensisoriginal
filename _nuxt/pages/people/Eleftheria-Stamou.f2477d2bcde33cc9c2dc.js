webpackJsonp([8],{Hvz6:function(t,e,n){"use strict";var i=n("mvHQ"),r=n.n(i),o=n("rdLu");n.n(o);e.a={name:"Eleftheria-Stamou",head:function(){return{meta:[{name:"og:title",content:this.compOgTitle},{name:"og:description",content:this.compOgDescription},{name:"og:image",content:this.compOgImage}]}},data:function(){return{}},computed:{people:function(){return this.$store.state.people},hashPerson:function(){return window.location.pathname.split("/")[2]},person:function(){var t=this;return o._.find(this.people,function(e){return console.log(JSON.parse(r()(e.hash))),JSON.parse(r()(e.hash))===t.hashPerson})},compOgTitle:function(){if(this.people.length>0){var t=this.person.share_title;return null===t?"Athens Is Original":t}},compOgDescription:function(){if(this.people.length>0){var t=this.person.share_description;return null===t?"Something original is about to happen and Athens is getting ready for it.  Be the first to know.":t}},compOgImage:function(){if(this.people.length>0){var t=this.person.share_image;return null===t?"/athensisoriginal.png":"http://athensisoriginal.gr/"+t.path}}}}},lV5j:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"Eleftheria-Stamou",attrs:{id:"Eleftheria-Stamou"}})},r=[],o={render:i,staticRenderFns:r};e.a=o},"xV/0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Hvz6"),r=n("lV5j"),o=n("VU/8"),a=o(i.a,r.a,!1,null,null,null);e.default=a.exports}});
//# sourceMappingURL=Eleftheria-Stamou.f2477d2bcde33cc9c2dc.js.map