(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(t,e,o){},13:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var c=o(1),s=o.n(c),n=o(6),i=o.n(n),r=(o(12),o(3)),a=(o(13),o(0));var l=function(t){var e=t.todo,o=t.settodolist,s=t.todolist,n=Object(c.useState)(0),i=Object(r.a)(n,2),l=i[0],d=i[1];return Object(c.useEffect)((function(){localStorage.setItem("todoSave",JSON.stringify(s)),console.log("saved in local storage")}),[l]),Object(a.jsxs)("div",{className:"profile-container",children:[Object(a.jsx)("p",{children:e.text}),Object(a.jsx)("p",{className:"priorityCounter",children:e.priority}),Object(a.jsx)("button",{onClick:function(){d(l+1),e.priority++,console.log(e)},children:"Priority"}),Object(a.jsx)("button",{onClick:function(){var t=s.filter((function(t){return t.text!==e.text}));o(t)},children:"Remove"})]})},d=o(7);var j=function(t){var e=t.todo,o=t.settodo,c=t.settodolist,s=t.todolist;return Object(a.jsxs)("div",{className:"Form",children:[Object(a.jsx)("span",{children:"Task"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{onChange:function(t){o(t.target.value)},value:e,type:"text",placeholder:"Task"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"buttonContainer",children:Object(a.jsx)("button",{onClick:function(t){""===e||" "===e[0]||c([].concat(Object(d.a)(s),[{text:e,completed:!1,id:1e3*Math.random(),priority:0}])),o("")},type:"submit",children:"submit"})})]})};var u=function(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),o=e[0],s=e[1],n=Object(c.useState)([]),i=Object(r.a)(n,2),d=i[0],u=i[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("todoSave"))||[];console.log("savedTodo="+t+"with type "+typeof t),console.log(t.map((function(t){return t}))),u(t.map((function(t){return t})))}),[]),Object(c.useEffect)((function(){localStorage.setItem("todoSave",JSON.stringify(d)),console.log("saved in local storage")}),[d]),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(j,{settodo:s,todo:o,settodolist:u,todolist:d}),Object(a.jsxs)("div",{className:"todoList",children:[Object(a.jsx)("h1",{className:"todoHeading",children:"Todo List"}),d.map((function(t){return Object(a.jsx)(l,{todo:t,todolist:d,settodolist:u},t.id)}))]}),Object(a.jsx)("h6",{className:"workInProgress",children:"This app is still a work in progress..."})]})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.babf2e8d.chunk.js.map