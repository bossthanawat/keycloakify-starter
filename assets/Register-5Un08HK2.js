import{j as a}from"./index-D7POU23g.js";import{c as r}from"./useGetClassName-D4Y8S8rE.js";import{u as h}from"./useGetClassName-D-xlHON_.js";function F(p){const{kcContext:i,i18n:t,doUseDefaultCss:m,Template:d,classes:o}=p,{getClassName:s}=h({doUseDefaultCss:m,classes:o}),{url:n,messagesPerField:l,register:c,realm:u,passwordRequired:x,recaptchaRequired:C,recaptchaSiteKey:N}=i,{msg:e,msgStr:k}=t;return a.jsx(d,{kcContext:i,i18n:t,doUseDefaultCss:m,classes:o,headerNode:e("registerTitle"),children:a.jsxs("form",{id:"kc-register-form",className:s("kcFormClass"),action:n.registrationAction,method:"post",children:[a.jsxs("div",{className:r(s("kcFormGroupClass"),l.printIfExists("firstName",s("kcFormGroupErrorClass"))),children:[a.jsx("div",{className:s("kcLabelWrapperClass"),children:a.jsx("label",{htmlFor:"firstName",className:s("kcLabelClass"),children:e("firstName")})}),a.jsx("div",{className:s("kcInputWrapperClass"),children:a.jsx("input",{type:"text",id:"firstName",className:s("kcInputClass"),name:"firstName",defaultValue:c.formData.firstName??""})})]}),a.jsxs("div",{className:r(s("kcFormGroupClass"),l.printIfExists("lastName",s("kcFormGroupErrorClass"))),children:[a.jsx("div",{className:s("kcLabelWrapperClass"),children:a.jsx("label",{htmlFor:"lastName",className:s("kcLabelClass"),children:e("lastName")})}),a.jsx("div",{className:s("kcInputWrapperClass"),children:a.jsx("input",{type:"text",id:"lastName",className:s("kcInputClass"),name:"lastName",defaultValue:c.formData.lastName??""})})]}),a.jsxs("div",{className:r(s("kcFormGroupClass"),l.printIfExists("email",s("kcFormGroupErrorClass"))),children:[a.jsx("div",{className:s("kcLabelWrapperClass"),children:a.jsx("label",{htmlFor:"email",className:s("kcLabelClass"),children:e("email")})}),a.jsx("div",{className:s("kcInputWrapperClass"),children:a.jsx("input",{type:"text",id:"email",className:s("kcInputClass"),name:"email",defaultValue:c.formData.email??"",autoComplete:"email"})})]}),!u.registrationEmailAsUsername&&a.jsxs("div",{className:r(s("kcFormGroupClass"),l.printIfExists("username",s("kcFormGroupErrorClass"))),children:[a.jsx("div",{className:s("kcLabelWrapperClass"),children:a.jsx("label",{htmlFor:"username",className:s("kcLabelClass"),children:e("username")})}),a.jsx("div",{className:s("kcInputWrapperClass"),children:a.jsx("input",{type:"text",id:"username",className:s("kcInputClass"),name:"username",defaultValue:c.formData.username??"",autoComplete:"username"})})]}),x&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:r(s("kcFormGroupClass"),l.printIfExists("password",s("kcFormGroupErrorClass"))),children:[a.jsx("div",{className:s("kcLabelWrapperClass"),children:a.jsx("label",{htmlFor:"password",className:s("kcLabelClass"),children:e("password")})}),a.jsx("div",{className:s("kcInputWrapperClass"),children:a.jsx("input",{type:"password",id:"password",className:s("kcInputClass"),name:"password",autoComplete:"new-password"})})]}),a.jsxs("div",{className:r(s("kcFormGroupClass"),l.printIfExists("password-confirm",s("kcFormGroupErrorClass"))),children:[a.jsx("div",{className:s("kcLabelWrapperClass"),children:a.jsx("label",{htmlFor:"password-confirm",className:s("kcLabelClass"),children:e("passwordConfirm")})}),a.jsx("div",{className:s("kcInputWrapperClass"),children:a.jsx("input",{type:"password",id:"password-confirm",className:s("kcInputClass"),name:"password-confirm"})})]})]}),C&&a.jsx("div",{className:"form-group",children:a.jsx("div",{className:s("kcInputWrapperClass"),children:a.jsx("div",{className:"g-recaptcha","data-size":"compact","data-sitekey":N})})}),a.jsxs("div",{className:s("kcFormGroupClass"),children:[a.jsx("div",{id:"kc-form-options",className:s("kcFormOptionsClass"),children:a.jsx("div",{className:s("kcFormOptionsWrapperClass"),children:a.jsx("span",{children:a.jsx("a",{href:n.loginUrl,children:e("backToLogin")})})})}),a.jsx("div",{id:"kc-form-buttons",className:s("kcFormButtonsClass"),children:a.jsx("input",{className:r(s("kcButtonClass"),s("kcButtonPrimaryClass"),s("kcButtonBlockClass"),s("kcButtonLargeClass")),type:"submit",value:k("doRegister")})})]})]})})}export{F as default};
//# sourceMappingURL=Register-5Un08HK2.js.map