(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={main:"Header_main__22_oD",nav:"Header_nav__3lulL",item:"Header_item__3mvCc",hiddenMenuTicker:"Header_hiddenMenuTicker__3tfGx",hiddenMenu:"Header_hiddenMenu__1O3Ho",btnMenu:"Header_btnMenu__2wvLi",first:"Header_first__2b0Or",second:"Header_second__1GG2I",third:"Header_third__3QTzV"}},,function(e,t,a){e.exports={greeting:"Greeting_greeting__3-WgK",input:"Greeting_input__FP9pO",error:"Greeting_error__3dZzH",errorInput:"Greeting_errorInput__22tRz",button:"Greeting_button__1dvsz",count:"Greeting_count__imE9f"}},,function(e,t,a){e.exports={content:"Message_content__1XUmG",messageContent:"Message_messageContent__2zUGJ",name:"Message_name__xSV2y",message:"Message_message__cPbZP",time:"Message_time__3O8J5"}},function(e,t,a){e.exports={someClass:"Affairs_someClass__1o1_p",content:"Affairs_content__3tkCE",deleteBtn:"Affairs_deleteBtn__2gWuP",id:"Affairs_id__1Xp65",name:"Affairs_name__3J08q",priority:"Affairs_priority__1qXF9"}},function(e,t,a){e.exports={body:"HW8_body__7zhwq",fieldButton:"HW8_fieldButton__2KY7f",users:"HW8_users__3H48M",name:"HW8_name__2QrR3",age:"HW8_age__HK129"}},,,function(e,t,a){e.exports={input:"SuperInputText_input__1ZyXy",superInput:"SuperInputText_superInput__1rhnF",errorInput:"SuperInputText_errorInput__2YrkG",error:"SuperInputText_error__Lhuj3"}},function(e,t,a){e.exports={default:"SuperButton_default__Tom87",red:"SuperButton_red__2a9ow",button:"SuperButton_button__3XD5y",blink:"SuperButton_blink__1Udso"}},function(e,t,a){e.exports={blue:"HW4_blue__1guCA",column:"HW4_column__1Vp1w",testSpanError:"HW4_testSpanError__K0KWa"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__28vTu",spanClassName:"SuperCheckbox_spanClassName__1224R",label:"SuperCheckbox_label__13hcx"}},,,function(e,t,a){e.exports={App:"App_App__38JqH"}},function(e,t,a){e.exports={spanStyle:"SuperEditebleSpan_spanStyle__2k0cL"}},function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(27),a(20)),i=a.n(o),u=a(6),s=a(1),m=a(9),d=a.n(m);var E=function(e){return r.a.createElement("div",{className:d.a.content},r.a.createElement("div",null,r.a.createElement("img",{src:e.avatar,alt:""})),r.a.createElement("div",{className:d.a.messageContent},r.a.createElement("div",{className:d.a.name},e.name),r.a.createElement("div",{className:d.a.message},e.message),r.a.createElement("div",{className:d.a.time},e.time)))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",f="Hello. how are you?",h="22:00";var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:p,name:_,message:f,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=a(2),g=a(10),C=a.n(g);var k=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:C.a.content},r.a.createElement("span",{className:C.a.id},e.affair._id),r.a.createElement("span",{className:C.a.name},e.affair.name),r.a.createElement("span",{className:C.a.priority},e.affair.priority),r.a.createElement("button",{className:C.a.deleteBtn,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var N=function(e){var t=e.data.map((function(t){return r.a.createElement(k,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(y),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(b.a)(c,2),i=o[0],u=o[1],s=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(a,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:s,setFilter:u,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=a(13),S=a(7),w=a.n(S),x=function(e){var t=e.name,a=e.onEnter,n=e.setNameCallback,l=e.addUser,c=e.error,o=e.totalUsers,i=c?w.a.errorInput:w.a.input;return r.a.createElement("div",{className:w.a.greeting},r.a.createElement("div",null,r.a.createElement("input",{value:t,onKeyDown:a,onChange:n,className:i,onBlur:n}),r.a.createElement("div",{className:w.a.error},c)),r.a.createElement("button",{className:w.a.button,onClick:l,disabled:!t},"add"),r.a.createElement("div",{className:w.a.count},o))},H=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(b.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),s=Object(b.a)(u,2),m=s[0],d=s[1],E=function(){a(o),alert("Hello ".concat(o," !")),i("")},p=t.length;return r.a.createElement(x,{name:o,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),d("")):(i(""),d("String do not be empty!"))},addUser:E,error:m,totalUsers:p,onEnter:function(e){"Enter"===e.key&&o&&E()}})},I=a(31);var T=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(H,{users:a,addUserCallback:function(e){var t={_id:Object(I.a)(),name:e};l([].concat(Object(j.a)(a),[t]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=a(4),B=a(14),M=a.n(B),F=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],W=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=Object(A.a)(e,F),s="".concat(M.a.error," ").concat(i||""),m="".concat(M.a.input," ").concat(c?M.a.errorInput:M.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},u)),c&&r.a.createElement("span",{className:s},c))},G=a(16),J=a.n(G),P=a(15),U=a.n(P),K=["red","className"],R=function(e){var t=e.red,a=e.className,n=Object(A.a)(e,K),l="".concat(U.a.button," ").concat(t?U.a.red:U.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},z=a(17),X=a.n(z),D=["type","onChange","onChangeChecked","className","spanClassName","children"],q=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(A.a)(e,D),o="".concat(X.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:X.a.spanClassName},l))};var L=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),u=Object(b.a)(i,2),s=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(W,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(W,{className:J.a.blue}),r.a.createElement(R,null,"default"),r.a.createElement(R,{red:!0,onClick:o},"delete "),r.a.createElement(R,{disabled:!0},"disabled"),r.a.createElement(q,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(q,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Y=a(21),Z=a.n(Y),V=["autoFocus","onBlur","onEnter","spanProps"],Q=["children","onDoubleClick","className"],$=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(A.a)(e,V),o=Object(n.useState)(!1),i=Object(b.a)(o,2),u=i[0],s=i[1],m=l||{},d=m.children,E=m.onDoubleClick,p=m.className,_=Object(A.a)(m,Q),f="".concat(Z.a.spanStyle," ").concat(p);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(W,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),t&&t(e)},onEnter:function(){s(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),E&&E(e)},className:f},_),d||c.value))};function ee(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function te(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement($,{value:a,onChangeText:l,spanProps:{children:a?void 0:"You can try edit this text..."}})),r.a.createElement(R,{onClick:function(){ee("editable-span-value",a)}},"save"),r.a.createElement(R,{onClick:function(){l(te("editable-span-value",a))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ne=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(O,null),r.a.createElement(T,null),r.a.createElement(L,null),r.a.createElement(ae,null))};a(28);var re=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"div"},r.a.createElement("div",{className:"main"})))},le=["options","onChange","onChangeOption"],ce=function(e){var t=e.options,a=(e.onChange,e.onChangeOption),n=Object(A.a)(e,le),l=[t.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))];return r.a.createElement("select",Object.assign({onChange:function(e){a(e.currentTarget.value)}},n),l)},oe=["type","name","options","value","onChange","onChangeOption"],ie=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(A.a)(e,oe),function(e){l&&l(e.currentTarget.value)}),o=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a},r.a.createElement("input",{type:"radio",name:t,checked:e===n,value:e,onChange:c}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},ue=["x","y","z"];var se=function(){var e=Object(n.useState)(ue[1]),t=Object(b.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ce,{options:ue,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ie,{name:"radio",options:ue,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},me=function(e,t){switch(t.type){case"sort":var a=Object(j.a)(e);if("up"===t.payload){return[].slice.call(a).sort((n="name",function(e,t){return e[n]>t[n]?1:-1}))}if("down"===t.payload){return[].slice.call(a).sort(function(e){return function(t,a){return t[e]<a[e]?1:-1}}("name"))}return a;case"check":return Object(j.a)(e).filter((function(e){return e.age>t.payload}));default:throw new Error("I don't understand this action type")}var n},de=a(11),Ee=a.n(de),pe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var _e=function(){var e=Object(n.useState)(pe),t=Object(b.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id,className:Ee.a.users},r.a.createElement("div",{className:Ee.a.name},e.name),r.a.createElement("div",{className:Ee.a.age},"age: ",e.age))}));return r.a.createElement("div",{className:Ee.a.body},r.a.createElement("hr",null),"homeworks 8",r.a.createElement("div",null,c),r.a.createElement("div",{className:Ee.a.fieldButton},r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){return l(me(pe,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){return l(me(pe,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(R,{onClick:function(){return l(me(pe,{type:"check",payload:18}))}},"check 18"))),r.a.createElement("hr",null),r.a.createElement("hr",null))};var fe=function(){return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement(_e,null))};var he=function(){return r.a.createElement("div",null)},ve="/pre-junior",be="/junior",ge="/junior+";var Ce=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",element:r.a.createElement(s.a,{to:ve})}),r.a.createElement(s.b,{path:ve,element:r.a.createElement(ne,null)}),r.a.createElement(s.b,{path:"/",element:r.a.createElement(s.a,{to:be})}),r.a.createElement(s.b,{path:be,element:r.a.createElement(fe,null)}),r.a.createElement(s.b,{path:"/",element:r.a.createElement(s.a,{to:ge})}),r.a.createElement(s.b,{path:ge,element:r.a.createElement(he,null)}),r.a.createElement(s.b,{path:"/*",element:r.a.createElement(re,null)})))},ke=a(5),Ne=a.n(ke);var ye=function(){return r.a.createElement("div",{className:Ne.a.main},r.a.createElement("div",{className:Ne.a.nav},r.a.createElement("input",{type:"checkbox",id:"hmt",className:Ne.a.hiddenMenuTicker}),r.a.createElement("label",{className:Ne.a.btnMenu,htmlFor:"hmt"},r.a.createElement("span",{className:Ne.a.first}),r.a.createElement("span",{className:Ne.a.second}),r.a.createElement("span",{className:Ne.a.third})),r.a.createElement("nav",{className:Ne.a.hiddenMenu},r.a.createElement("div",{className:Ne.a.item},r.a.createElement(u.b,{to:ve},"PRE_JUNIOR")),r.a.createElement("div",{className:Ne.a.item},r.a.createElement(u.b,{to:be},"JUNIOR")),r.a.createElement("div",{className:Ne.a.item},r.a.createElement(u.b,{to:ge}," JUNIOR +")))))};var Oe=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(ye,null),r.a.createElement(Ce,null)))};var je=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.3898fb3b.chunk.js.map