(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),i=(n(15),n(5)),s=n(6),l=n(9),u=n(8),m=(n(16),n(1)),p=n.n(m),h=n(7),f=n(2),k=(n(18),function(e){var t=Object(a.useState)([]),n=Object(f.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!0),s=Object(f.a)(i,2),l=s[0],u=s[1],m=function(){var t=Object(h.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.pokemon.url);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,c(a),u(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){return m()}),[]),!0===l?o.a.createElement("h2",null,"loading..."):o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"pokemon",style:{width:"200px"},src:"https://pokeres.bastionbot.org/images/pokemon/".concat(r.id,".png")}),o.a.createElement("p",null,r.id),o.a.createElement("p",null,"name: ",e.pokemon.name),o.a.createElement("p",null,"whight : ",r.weight,"   height : ",r.height),o.a.createElement("p",null,r.types[0].type.name))}),d=function(e){return o.a.createElement("div",{className:"card-list"},e.Pokemons.map((function(e){return o.a.createElement(k,{pokemon:e})})))},v=(n(19),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={pokemons:[]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?limit=100").then((function(e){return e.json()})).then((function(t){return e.setState({pokemons:t.results})}))}},{key:"render",value:function(){var e=this.state.pokemons;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Pokemon"),o.a.createElement(d,{Pokemons:e})," ",o.a.createElement("br",null),"  ",o.a.createElement("br",null))}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.023f69e8.chunk.js.map