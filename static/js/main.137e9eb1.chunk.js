(this.webpackJsonpinvolve=this.webpackJsonpinvolve||[]).push([[0],{32:function(e,t,n){e.exports=n(69)},37:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),u=n.n(r),i=(n(37),n(8)),l=n(20),o=n(10),s=n(31),d=n(2),f="LOADING_LIST_METHODS",m="GET_CURRENCY_INVOICE",h="HANDLE_SELL_LIST",b="HANDLE_BUY_LIST",v="GET_CURRENCY_WITHDRAW",E="CALCULATION_DATA",y="HANDLER_INPUT",p=function(e,t){return{type:y,base:e,amount:t}},O=function(e,t,n,a){return function(c){e&&t&&n&&a&&fetch("https://involve-it.com/test_front/api/payMethods/calculate?base=".concat(e,"&amount=").concat(t,"&invoicePayMethod=").concat(n,"&withdrawPayMethod=").concat(a)).then((function(e){return e.json()})).then((function(e){return c(function(e){return{type:E,data:e}}(e))}))}},w={loading:!1,listMethods:null,currencyInvoice:null,currencyWithdraw:null,sellList:!1,buyList:!1,calculationData:{base:"",amount:0,invoicePayMethod:0,withdrawPayMethod:0},inputInvoice:"",inputWithdraw:""};var j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,g=[s.a],I=Object(o.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n=t.list;return Object(d.a)(Object(d.a)({},e),{},{listMethods:n,loading:!0});case m:var a=t.invoice;return Object(d.a)(Object(d.a)({},e),{},{currencyInvoice:a,calculationData:Object(d.a)(Object(d.a)({},e.calculationData),{},{invoicePayMethod:a.id}),sellList:!1});case v:var c=t.withdraw;return Object(d.a)(Object(d.a)({},e),{},{currencyWithdraw:c,calculationData:Object(d.a)(Object(d.a)({},e.calculationData),{},{withdrawPayMethod:c.id}),buyList:!1});case b:var r=t.bool;return Object(d.a)(Object(d.a)({},e),{},{buyList:r});case y:var u=t.base,i=t.amount;return"invoice"===u?Object(d.a)(Object(d.a)({},e),{},{inputInvoice:i,calculationData:Object(d.a)(Object(d.a)({},e.calculationData),{},{base:u,amount:i})}):"withdraw"===u?Object(d.a)(Object(d.a)({},e),{},{inputWithdraw:i,calculationData:Object(d.a)(Object(d.a)({},e.calculationData),{},{base:u,amount:i})}):Object(d.a)({},e);case h:var l=t.bool;return Object(d.a)(Object(d.a)({},e),{},{sellList:l});case E:var o=t.data;return"withdraw"===e.calculationData.base?Object(d.a)(Object(d.a)({},e),{},{inputInvoice:o.amount}):Object(d.a)(Object(d.a)({},e),{},{inputWithdraw:o.amount});default:return e}}),j(o.a.apply(void 0,g))),N=n(3),L=(n(42),function(){return c.a.createElement("div",null)}),_=(n(43),function(){return c.a.createElement("div",null)}),C=(n(44),n(45),function(e){return e.loading}),D=function(e){return e.listMethods.invoice},M=function(e){return e.listMethods.withdraw},W=function(e){return e.currencyInvoice},S=function(e){return e.currencyWithdraw},T=function(e){return e.sellList},k=function(e){return e.buyList},P=function(e){return e.inputInvoice},A=function(e){return e.inputWithdraw},x=function(e){return e.calculationData},B=(n(46),function(e){var t=e.base,n=e.value,a=e.handlerInput,r=e.placeholder;return c.a.createElement("input",{className:"input",type:"number",value:n,onChange:function(e){return a(t,e.target.value)},placeholder:r})}),R=n(15),U=n.n(R),H=Object(i.b)((function(e){return{listInvoice:D(e),invoice:W(e),loading:C(e),getSellList:T(e),getInputInvoice:P(e)}}),(function(e){return{getCurrencyInvoice:function(t){return e(function(e){return{type:m,invoice:e}}(t))},handleSellList:function(t){return e(function(e){return{type:h,bool:e}}(t))},handlerInput:function(t,n){return e(p(t,n))}}}))((function(e){var t=e.listInvoice,n=e.invoice,r=e.getCurrencyInvoice,u=e.getSellList,i=e.handleSellList,l=e.handlerInput,o=e.getInputInvoice;return Object(a.useEffect)((function(){r(t[0])}),[]),c.a.createElement("div",{className:"sell"},c.a.createElement("h2",{className:"sell-title"},"Sell"),c.a.createElement(U.a,{onOutsideClick:function(){i(!1)}},c.a.createElement("div",{className:u?"sell-currency sell-currency--dec":"sell-currency",onClick:function(){return i(!u)}},null!==n?n.name:null),u?c.a.createElement("ul",{className:"sell-currency__list"},t.map((function(e){return c.a.createElement("li",{onClick:function(){return r(e)},key:e.id,className:"sell-currency__item"},e.name)}))):null),c.a.createElement("div",{className:"sell-input"},c.a.createElement(B,{base:"invoice",value:o,handlerInput:l,placeholder:"00.00"})))})),G=(n(65),Object(i.b)((function(e){return{listWithdraw:M(e),withdraw:S(e),loading:C(e),getBuyList:k(e),getInputWithdraw:A(e)}}),(function(e){return{getCurrencyWithdraw:function(t){return e(function(e){return{type:v,withdraw:e}}(t))},handleBuyList:function(t){return e(function(e){return{type:b,bool:e}}(t))},handlerInput:function(t,n){return e(p(t,n))}}}))((function(e){var t=e.listWithdraw,n=e.loading,r=e.withdraw,u=e.getCurrencyWithdraw,i=e.getBuyList,l=e.handleBuyList,o=e.getInputWithdraw,s=e.handlerInput;return Object(a.useEffect)((function(){u(t[0])}),[n]),c.a.createElement("div",{className:"buy"},c.a.createElement("h2",{className:"buy-title"},"Buy"),c.a.createElement(U.a,{onOutsideClick:function(){l(!1)}},c.a.createElement("div",{className:i?"buy-currency buy-currency--dec":"buy-currency",onClick:function(){return l(!i)}},null!==r?r.name:null),i?c.a.createElement("ul",{className:"buy-currency__list"},t.map((function(e){return c.a.createElement("li",{onClick:function(){return u(e)},key:e.id,className:"buy-currency__item"},e.name)}))):null),c.a.createElement("div",{className:"buy-input"},c.a.createElement(B,{base:"withdraw",value:o,handlerInput:s,placeholder:"00.00"})))}))),Y=(n(66),function(){return c.a.createElement("button",{className:"button-exchange"},"Exchange")}),J=Object(i.b)((function(e){return{getCalculationData:x(e)}}),(function(e){return{fetchCalculationData:function(t,n,a,c){return e(O(t,n,a,c))}}}))((function(e){var t=e.getCalculationData,n=e.fetchCalculationData,r=t.base,u=t.amount,i=t.invoicePayMethod,l=t.withdrawPayMethod;return Object(a.useEffect)((function(){n(r,u,i,l)}),[r,u,i,l]),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-exchange"},c.a.createElement("div",{className:"card-position"},c.a.createElement(H,null),c.a.createElement(G,null)),c.a.createElement("div",{className:"card-btn"},c.a.createElement(Y,null))))})),V=(n(67),function(){return c.a.createElement("div",{className:"loading"},c.a.createElement("div",{className:"lds-dual-ring"}))}),X=Object(i.b)((function(e){return{loading:C(e)}}),(function(e){return{loadingListMethods:function(t){return e(function(e){return{type:f,list:e}}(t))}}}))((function(e){var t=e.loading,n=e.loadingListMethods;return Object(a.useEffect)((function(){fetch("https://involve-it.com/test_front/api/payMethods").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[n]),t?c.a.createElement(N.d,null,c.a.createElement(N.b,{path:"/Exchange",exact:!0},c.a.createElement(J,null)),c.a.createElement(N.b,{path:"/Confirmation"},c.a.createElement(_,null)),c.a.createElement(N.b,{path:"/Successful"},c.a.createElement(L,null)),c.a.createElement(N.a,{to:"/Exchange"})):c.a.createElement(V,null)})),q=function(){return c.a.createElement(l.a,null,c.a.createElement(i.a,{store:I},c.a.createElement(X,null)))};u.a.render(c.a.createElement(q,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.137e9eb1.chunk.js.map