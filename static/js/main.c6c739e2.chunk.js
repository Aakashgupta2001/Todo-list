(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c.n(n),s=c(6),a=c.n(s),i=(c(12),c(3)),r=(c(13),c(0));var j=function(t){var e=t.todo,c=Object(n.useState)(0),o=Object(i.a)(c,2),s=o[0],a=o[1];return Object(r.jsxs)("div",{className:"profile-container",children:[Object(r.jsx)("p",{children:e.text}),Object(r.jsx)("p",{className:"priorityCounter",children:s}),Object(r.jsx)("button",{onClick:function(){a(s+1)},children:"Priority"})]})},d=c(7);var l=function(t){var e=t.todo,c=t.settodo,n=t.settodolist,o=t.todolist;return Object(r.jsxs)("div",{className:"Form",children:[Object(r.jsx)("span",{children:"Task"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{onChange:function(t){c(t.target.value),console.log(t.target.value)},value:e,type:"text",placeholder:"Task"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"buttonContainer",children:Object(r.jsx)("button",{onClick:function(t){""===e||" "===e[0]||n([].concat(Object(d.a)(o),[{text:e,completed:!1,id:1e3*Math.random()}])),console.log(o),c("")},type:"submit",children:"submit"})})]})};var b=function(){var t=Object(n.useState)(""),e=Object(i.a)(t,2),c=e[0],o=e[1],s=Object(n.useState)([]),a=Object(i.a)(s,2),d=a[0],b=a[1];return Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)(l,{settodo:o,todo:c,settodolist:b,todolist:d}),Object(r.jsx)("div",{className:"todoList",children:d.map((function(t){return Object(r.jsx)(j,{todo:t})}))})]})};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c6c739e2.chunk.js.map