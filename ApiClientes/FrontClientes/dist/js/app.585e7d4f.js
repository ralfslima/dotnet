(function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Home",{attrs:{msg:"Hello world!"}})],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.obj.nome,expression:"obj.nome"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.obj.nome},on:{input:function(t){t.target.composing||e.$set(e.obj,"nome",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.obj.email,expression:"obj.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"E-mail"},domProps:{value:e.obj.email},on:{input:function(t){t.target.composing||e.$set(e.obj,"email",t.target.value)}}}),0==e.clienteSelecionado?n("input",{staticClass:"btn btn-primary",attrs:{type:"button",value:"Cadastrar"},on:{click:function(t){return e.cadastrar()}}}):e._e(),1==e.clienteSelecionado?n("input",{staticClass:"btn btn-warning",attrs:{type:"button",value:"Alterar"},on:{click:function(t){return e.alterar()}}}):e._e(),1==e.clienteSelecionado?n("input",{staticClass:"btn btn-danger",attrs:{type:"button",value:"Remover"},on:{click:function(t){return e.remover()}}}):e._e(),1==e.clienteSelecionado?n("input",{staticClass:"btn btn-dark",attrs:{type:"button",value:"Cancelar"},on:{click:function(t){return e.cancelar()}}}):e._e()]),0==e.clienteSelecionado?n("table",{staticClass:"table table-striped"},[e._m(0),n("tbody",e._l(e.clientes,(function(t,r){return n("tr",{key:t.id},[n("td",[e._v(e._s(r+1))]),n("td",[e._v(e._s(t.nome))]),n("td",[e._v(e._s(t.email))]),n("td",[n("button",{staticClass:"btn btn-success",on:{click:function(t){return e.selecionar(r)}}},[e._v(" Selecionar ")])])])})),0)]):e._e()])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Linha")]),n("th",[e._v("Nome")]),n("th",[e._v("E-mail")]),n("th",[e._v("Selecionar")])])])}],s=n("1da1"),l=(n("96cf"),n("d3b7"),n("e9c4"),{name:"Home",data:function(){return{clientes:{},obj:{},clienteSelecionado:!1}},beforeMount:function(){this.listar()},methods:{listar:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://localhost:7298/api/Clientes");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.clientes=r;case 7:case"end":return t.stop()}}),t)})))()},cadastrar:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new Request("https://localhost:7298/api/Clientes",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.obj)}),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:a=t.sent,e.clientes.push(a);case 8:case"end":return t.stop()}}),t)})))()},selecionar:function(e){this.clienteSelecionado=!0,this.obj=this.clientes[e]},cancelar:function(){this.clienteSelecionado=!1,this.obj=[]},alterar:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new Request("https://localhost:7298/api/Clientes/"+e.obj.id,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.obj)}),t.next=3,fetch(n);case 3:e.listar(),e.cancelar();case 5:case"end":return t.stop()}}),t)})))()},remover:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new Request("https://localhost:7298/api/Clientes/"+e.obj.id,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}),t.next=3,fetch(n);case 3:e.listar(),e.cancelar();case 5:case"end":return t.stop()}}),t)})))()}}}),u=l,p=n("2877"),f=Object(p["a"])(u,i,c,!1,null,"6233184c",null),d=f.exports,m={name:"app",components:{Home:d}},h=m,b=Object(p["a"])(h,a,o,!1,null,null,null),v=b.exports;r["a"].config.productionTip=!0,new r["a"]({render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.585e7d4f.js.map