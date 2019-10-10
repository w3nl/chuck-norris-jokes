(function(e){function t(t){for(var r,n,a=t[0],c=t[1],d=t[2],u=0,l=[];u<a.length;u++)n=a[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&l.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);v&&v(t);while(l.length)l.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],r=!0,a=1;a<o.length;a++){var c=o[a];0!==s[c]&&(r=!1)}r&&(i.splice(t--,1),e=n(n.s=o[0]))}return e}var r={},s={app:0},i=[];function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var v=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0e83":function(e,t,o){"use strict";var r=o("de16"),s=o.n(r);s.a},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("jokes-component")],1)},i=[],n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("header",[o("h1",[e._v("Chuck Norris Jokes")]),o("nav",[o("button",{on:{click:e.get10RandomJokes}},[e._v("Get 10 random jokes")]),e.canAddNewFavoriteJoke?o("button",{on:{click:e.getRandomFavorite}},[e._v("\n                Get random favorite jokes every 5s\n                "),e.timerIsOn?o("span",[e._v("⏳")]):e._e()]):e._e()])]),e.favoriteJokes.length?o("jokes-section",{attrs:{jokes:e.favoriteJokes}},[e._v("\n        ❤️ Favorite jokes:\n    ")]):e._e(),e.jokes.length?o("jokes-section",{attrs:{jokes:e.jokes}},[e._v("\n        🔀 New jokes:\n    ")]):e._e()],1)},a=[],c=o("bc3a"),d=o.n(c);const v=()=>{let e={baseURL:"https://api.icndb.com",headers:{}};const t=d.a.create(e);return t.interceptors.request.use(e=>e,e=>{return Promise.reject(e)}),t.interceptors.response.use(e=>e,e=>{return Promise.reject(e)}),t};var u={get(e,t={}){return v().get(e,t).then(e=>Promise.resolve(e)).catch(e=>Promise.reject(e))},delete(e,t={}){return v().delete(e,t).then(e=>Promise.resolve(e)).catch(e=>Promise.reject(e))},head(e,t={}){return v().head(e,t).then(e=>Promise.resolve(e)).catch(e=>Promise.reject(e))},options(e,t={}){return v().options(e,t).then(e=>Promise.resolve(e)).catch(e=>Promise.reject(e))},post(e,t={},o={}){return v().post(e,t,o).then(e=>Promise.resolve(e)).catch(e=>Promise.reject(e))},put(e,t={},o={}){return v().put(e,t,o).then(e=>Promise.resolve(e)).catch(e=>Promise.reject(e))},patch(e,t={},o={}){return v().patch(e,t,o).then(e=>Promise.resolve(e)).catch(e=>Promise.reject(e))}},l=o("2f62");const m={jokes:[],favorites:[],timer:!1},k={jokes:e=>e.jokes.filter(t=>!e.favorites.some(e=>e.id==t.id)),favoriteJokes:e=>e.favorites,isFavorite:e=>t=>e.favorites.some(e=>e.id==t),canAddNewFavorite:e=>e.favorites.length<10,timerIsOn:e=>e.timer},p={setJokes:({commit:e},t)=>e("setJokes",t),addFavorite:({state:e,commit:t},o)=>{e.favorites.some(e=>e.id==o.id)||t("addFavorite",o)},removeFavorite:({state:e,commit:t},o)=>{e.favorites.some(e=>e.id==o.id)&&t("removeFavorite",o)},setTimer:({commit:e})=>e("setTimer"),resetTimer:({commit:e})=>e("resetTimer")},h={setJokes:(e,t)=>e.jokes=t,addFavorite:(e,t)=>e.favorites.push(t),removeFavorite:(e,t)=>{const o=e.favorites.findIndex(e=>e.id===t.id);e.favorites.splice(o,1)},setTimer:e=>e.timer=!0,resetTimer:e=>e.timer=!1};var j={namespaced:!0,state:m,getters:k,actions:p,mutations:h},f=o("0e44");r["a"].use(l["a"]);var F=new l["a"].Store({modules:{jokes:j},plugins:[Object(f["a"])({storage:window.localStorage})]});let g;class b{static getJokes(e){return u.get("/jokes/random/"+e).then(({data:e})=>{return F.dispatch("jokes/setJokes",e.value),e.value})}static getRandomFavoriteJoke(){if(this.canAddNewFavorite())return u.get("/jokes/random/1").then(({data:e})=>{return F.dispatch("jokes/addFavorite",e.value[0]),this.canAddNewFavorite(),e.value})}static canAddNewFavorite(){return!!F.getters["jokes/canAddNewFavorite"]||(F.dispatch("jokes/resetTimer"),g&&(g=clearInterval(g)),!1)}static getRandomFavoriteJokeTimer(){if(g)return F.dispatch("jokes/resetTimer"),void(g=clearInterval(g));F.dispatch("jokes/setTimer"),this.getRandomFavoriteJoke(),g=setInterval(this.getRandomFavoriteJoke.bind(this),5e3)}}var J=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("h2",[e._t("default",[e._v("Jokes:")])],2),e._l(e.jokes,(function(t,r){return o("single-joke",e._b({key:r},"single-joke",t,!1))}))],2)},_=[],w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("article",[o("p",{domProps:{innerHTML:e._s(e.joke)}}),o("nav",[e.canAddNewFavoriteJoke?o("button",{on:{click:e.addFavoriteJoke}},[e._v("\n            ❤️\n        ")]):e._e(),e.isFavoriteJoke?o("button",{on:{click:e.removeFavoriteJoke}},[e._v("\n            💔\n        ")]):e._e()])])},O=[],P={props:{id:Number,categories:Array,joke:String},computed:{...Object(l["c"])({canAddNewFavorite:"jokes/canAddNewFavorite",isFavorite:"jokes/isFavorite"}),isFavoriteJoke(){return this.isFavorite(this.id)},canAddNewFavoriteJoke(){return this.canAddNewFavorite&&!this.isFavoriteJoke}},methods:{...Object(l["b"])({addFavorite:"jokes/addFavorite",removeFavorite:"jokes/removeFavorite"}),addFavoriteJoke(){this.addFavorite({id:this.id,joke:this.joke,categories:this.categories})},removeFavoriteJoke(){this.removeFavorite({id:this.id,text:this.joke})}}},y=P,T=(o("0e83"),o("2877")),N=Object(T["a"])(y,w,O,!1,null,"64f8118e",null),A=N.exports,x={components:{SingleJoke:A},props:{jokes:Array}},R=x,S=Object(T["a"])(R,J,_,!1,null,null,null),I=S.exports,M={components:{JokesSection:I},mounted(){this.resetTimer(),this.get10RandomJokes()},computed:{...Object(l["c"])({jokes:"jokes/jokes",favoriteJokes:"jokes/favoriteJokes",canAddNewFavoriteJoke:"jokes/canAddNewFavorite",timerIsOn:"jokes/timerIsOn"})},methods:{...Object(l["b"])({resetTimer:"jokes/resetTimer"}),get10RandomJokes(){b.getJokes(10)},getRandomFavorite(){b.getRandomFavoriteJokeTimer()}}},$=M,E=Object(T["a"])($,n,a,!1,null,null,null),C=E.exports,G={components:{JokesComponent:C}},L=G,q=Object(T["a"])(L,s,i,!1,null,null,null),H=q.exports;r["a"].config.productionTip=!1,new r["a"]({store:F,render:e=>e(H)}).$mount("#app")},de16:function(e,t,o){}});
//# sourceMappingURL=app.6a9465eb.js.map