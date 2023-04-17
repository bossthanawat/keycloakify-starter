"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[6769],{1652:function(s,e,a){a.d(e,{v:function(){return l}});var l=(0,a(2889).a)({defaultClasses:{kcBodyClass:void 0,kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonLargeClass:"btn-lg",kcButtonDefaultClass:"btn-default"}}).useGetClassName},6769:function(s,e,a){a.r(e),a.d(e,{default:function(){return n}});var l=a(184),t=a(5319),c=a(1652);function n(s){var e,a,n,i,r=s.kcContext,o=s.i18n,m=s.doUseDefaultCss,d=s.Template,u=s.classes,j=(0,c.v)({doUseDefaultCss:m,classes:Object.assign(Object.assign({},u),{kcBodyClass:(0,t.W)(null===u||void 0===u?void 0:u.kcBodyClass,"user")})}).getClassName,b=r.url,f=r.realm,h=r.messagesPerField,v=r.stateChecker,g=r.account,N=o.msg;return(0,l.jsxs)(d,Object.assign({},{kcContext:r,i18n:o,doUseDefaultCss:m,classes:u},{active:"account"},{children:[(0,l.jsxs)("div",Object.assign({className:"row"},{children:[(0,l.jsx)("div",Object.assign({className:"col-md-10"},{children:(0,l.jsx)("h2",{children:N("editAccountHtmlTitle")})})),(0,l.jsx)("div",Object.assign({className:"col-md-2 subtitle"},{children:(0,l.jsxs)("span",Object.assign({className:"subtitle"},{children:[(0,l.jsx)("span",Object.assign({className:"required"},{children:"*"}))," ",N("requiredFields")]}))}))]})),(0,l.jsxs)("form",Object.assign({action:b.accountUrl,className:"form-horizontal",method:"post"},{children:[(0,l.jsx)("input",{type:"hidden",id:"stateChecker",name:"stateChecker",value:v}),!f.registrationEmailAsUsername&&(0,l.jsxs)("div",Object.assign({className:(0,t.W)("form-group",h.printIfExists("username","has-error"))},{children:[(0,l.jsxs)("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[(0,l.jsx)("label",Object.assign({htmlFor:"username",className:"control-label"},{children:N("username")})),f.editUsernameAllowed&&(0,l.jsx)("span",Object.assign({className:"required"},{children:"*"}))]})),(0,l.jsx)("div",Object.assign({className:"col-sm-10 col-md-10"},{children:(0,l.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",disabled:!f.editUsernameAllowed,value:null!==(e=g.username)&&void 0!==e?e:""})}))]})),(0,l.jsxs)("div",Object.assign({className:(0,t.W)("form-group",h.printIfExists("email","has-error"))},{children:[(0,l.jsxs)("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[(0,l.jsx)("label",Object.assign({htmlFor:"email",className:"control-label"},{children:N("email")}))," ",(0,l.jsx)("span",Object.assign({className:"required"},{children:"*"}))]})),(0,l.jsx)("div",Object.assign({className:"col-sm-10 col-md-10"},{children:(0,l.jsx)("input",{type:"text",className:"form-control",id:"email",name:"email",autoFocus:!0,value:null!==(a=g.email)&&void 0!==a?a:""})}))]})),(0,l.jsxs)("div",Object.assign({className:(0,t.W)("form-group",h.printIfExists("firstName","has-error"))},{children:[(0,l.jsxs)("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[(0,l.jsx)("label",Object.assign({htmlFor:"firstName",className:"control-label"},{children:N("firstName")}))," ",(0,l.jsx)("span",Object.assign({className:"required"},{children:"*"}))]})),(0,l.jsx)("div",Object.assign({className:"col-sm-10 col-md-10"},{children:(0,l.jsx)("input",{type:"text",className:"form-control",id:"firstName",name:"firstName",value:null!==(n=g.firstName)&&void 0!==n?n:""})}))]})),(0,l.jsxs)("div",Object.assign({className:(0,t.W)("form-group",h.printIfExists("lastName","has-error"))},{children:[(0,l.jsxs)("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[(0,l.jsx)("label",Object.assign({htmlFor:"lastName",className:"control-label"},{children:N("lastName")}))," ",(0,l.jsx)("span",Object.assign({className:"required"},{children:"*"}))]})),(0,l.jsx)("div",Object.assign({className:"col-sm-10 col-md-10"},{children:(0,l.jsx)("input",{type:"text",className:"form-control",id:"lastName",name:"lastName",value:null!==(i=g.lastName)&&void 0!==i?i:""})}))]})),(0,l.jsx)("div",Object.assign({className:"form-group"},{children:(0,l.jsx)("div",Object.assign({id:"kc-form-buttons",className:"col-md-offset-2 col-md-10 submit"},{children:(0,l.jsxs)("div",{children:[void 0!==b.referrerURI&&(0,l.jsxs)("a",Object.assign({href:b.referrerURI},{children:["$",N("backToApplication")]})),(0,l.jsx)("button",Object.assign({type:"submit",className:(0,t.W)(j("kcButtonClass"),j("kcButtonPrimaryClass"),j("kcButtonLargeClass")),name:"submitAction",value:"Save"},{children:N("doSave")})),(0,l.jsx)("button",Object.assign({type:"submit",className:(0,t.W)(j("kcButtonClass"),j("kcButtonDefaultClass"),j("kcButtonLargeClass")),name:"submitAction",value:"Cancel"},{children:N("doCancel")}))]})}))}))]}))]}))}},2889:function(s,e,a){a.d(e,{a:function(){return c}});var l=a(5319),t=a(969);function c(s){var e=s.defaultClasses;return{useGetClassName:function(s){var a=s.classes;return{getClassName:(0,t.O)((function(s){return(0,l.W)(s,e[s],null===a||void 0===a?void 0:a[s])}))}}}}},5319:function(s,e,a){a.d(e,{W:function(){return c}});var l=a(2982),t=a(9883);var c=function s(){for(var e=arguments.length,a=0,c="";a<e;a++){var n=a<0||arguments.length<=a?void 0:arguments[a];if(null!=n){var i=void 0;switch(typeof n){case"boolean":break;case"object":if(Array.isArray(n))i=s.apply(void 0,(0,l.Z)(n));else for(var r in(0,t.h)(!!1),i="",n)n[r]&&r&&(i&&(i+=" "),i+=r);break;default:i=n}i&&(c&&(c+=" "),c+=i)}}return c}}}]);
//# sourceMappingURL=6769.e77f6c71.chunk.js.map