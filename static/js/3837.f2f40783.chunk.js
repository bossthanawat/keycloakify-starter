"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[3837],{2889:function(s,e,c){c.d(e,{a:function(){return a}});var l=c(6055),o=c(969);function a(s){var e=s.defaultClasses;return{useGetClassName:function(s){var c=s.classes;return{getClassName:(0,o.O)((function(s){return(0,l.W)(s,e[s],null===c||void 0===c?void 0:c[s])}))}}}}},7107:function(s,e,c){c.d(e,{v:function(){return l}});var l=(0,c(2889).a)({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},3837:function(s,e,c){c.r(e),c.d(e,{default:function(){return n}});var l=c(885),o=c(184),a=c(2791),t=c(6055),i=c(969),r=c(7107);function n(s){var e=s.kcContext,c=s.i18n,n=s.doUseDefaultCss,d=s.Template,u=s.classes,f=(0,r.v)({doUseDefaultCss:n,classes:u}).getClassName,p=e.social,m=e.realm,k=e.url,C=e.usernameHidden,g=e.login,b=e.registrationDisabled,h=c.msg,v=c.msgStr,x=(0,a.useState)(!1),A=(0,l.Z)(x,2),I=A[0],j=A[1],F=(0,i.O)((function(s){var e;s.preventDefault(),j(!0);var c=s.target;null===(e=c.querySelector("input[name='email']"))||void 0===e||e.setAttribute("name","username"),c.submit()}));return(0,o.jsx)(d,Object.assign({},{kcContext:e,i18n:c,doUseDefaultCss:n,classes:u},{displayInfo:p.displayInfo,displayWide:m.password&&void 0!==p.providers,headerNode:h("doLogIn"),infoNode:m.password&&m.registrationAllowed&&!b&&(0,o.jsx)("div",Object.assign({id:"kc-registration"},{children:(0,o.jsxs)("span",{children:[h("noAccount"),(0,o.jsx)("a",Object.assign({tabIndex:6,href:k.registrationUrl},{children:h("doRegister")}))]})}))},{children:(0,o.jsxs)("div",Object.assign({id:"kc-form",className:(0,t.W)(m.password&&void 0!==p.providers&&f("kcContentWrapperClass"))},{children:[(0,o.jsx)("div",Object.assign({id:"kc-form-wrapper",className:(0,t.W)(m.password&&p.providers&&[f("kcFormSocialAccountContentClass"),f("kcFormSocialAccountClass")])},{children:m.password&&(0,o.jsxs)("form",Object.assign({id:"kc-form-login",onSubmit:F,action:k.loginAction,method:"post"},{children:[(0,o.jsx)("div",Object.assign({className:f("kcFormGroupClass")},{children:!C&&function(){var s,e=m.loginWithEmailAllowed?m.registrationEmailAsUsername?"email":"usernameOrEmail":"username",c="usernameOrEmail"===e?"username":e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("label",Object.assign({htmlFor:c,className:f("kcLabelClass")},{children:h(e)})),(0,o.jsx)("input",{tabIndex:1,id:c,className:f("kcInputClass"),name:c,defaultValue:null!==(s=g.username)&&void 0!==s?s:"",type:"text",autoFocus:!0,autoComplete:"off"})]})}()})),(0,o.jsx)("div",Object.assign({className:(0,t.W)(f("kcFormGroupClass"),f("kcFormSettingClass"))},{children:(0,o.jsx)("div",Object.assign({id:"kc-form-options"},{children:m.rememberMe&&!C&&(0,o.jsx)("div",Object.assign({className:"checkbox"},{children:(0,o.jsxs)("label",{children:[(0,o.jsx)("input",Object.assign({tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox"},"on"===g.rememberMe?{checked:!0}:{})),h("rememberMe")]})}))}))})),(0,o.jsx)("div",Object.assign({id:"kc-form-buttons",className:f("kcFormGroupClass")},{children:(0,o.jsx)("input",{tabIndex:4,className:(0,t.W)(f("kcButtonClass"),f("kcButtonPrimaryClass"),f("kcButtonBlockClass"),f("kcButtonLargeClass")),name:"login",id:"kc-login",type:"submit",value:v("doLogIn"),disabled:I})}))]}))})),m.password&&void 0!==p.providers&&(0,o.jsx)("div",Object.assign({id:"kc-social-providers",className:(0,t.W)(f("kcFormSocialAccountContentClass"),f("kcFormSocialAccountClass"))},{children:(0,o.jsx)("ul",Object.assign({className:(0,t.W)(f("kcFormSocialAccountListClass"),p.providers.length>4&&f("kcFormSocialAccountDoubleListClass"))},{children:p.providers.map((function(s){return(0,o.jsx)("li",Object.assign({className:f("kcFormSocialAccountListLinkClass")},{children:(0,o.jsx)("a",Object.assign({href:s.loginUrl,id:"zocial-".concat(s.alias),className:(0,t.W)("zocial",s.providerId)},{children:(0,o.jsx)("span",{children:s.displayName})}))}),s.providerId)}))}))}))]}))}))}},6055:function(s,e,c){c.d(e,{W:function(){return t}});var l=c(2982),o=c(9883),a=c(9465),t=function s(){for(var e=arguments.length,c=0,t="";c<e;c++){var i=c<0||arguments.length<=c?void 0:arguments[c];if(null!=i){var r=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))r=s.apply(void 0,(0,l.Z)(i));else for(var n in(0,o.h)(!(0,a.z)(i,!1)),r="",i)i[n]&&n&&(r&&(r+=" "),r+=n);break;default:r=i}r&&(t&&(t+=" "),t+=r)}}return t}},9465:function(s,e,c){function l(s,e){return e}c.d(e,{z:function(){return l}})}}]);
//# sourceMappingURL=3837.f2f40783.chunk.js.map