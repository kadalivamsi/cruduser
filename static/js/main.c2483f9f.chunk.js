(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(30),i=a.n(r),o=(a(37),a(38),a(39),a(5)),l=a.n(o),u=a(10),m=a(12),j=a(11),b=a.n(j),d=a(4),h=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],s=t[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:3001/users");case 2:t=e.sent,s(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("http://localhost:3001/users/".concat(t));case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"py-4",children:[Object(c.jsx)("h1",{children:"Home Page"}),Object(c.jsxs)("table",{class:"table border shadow",children:[Object(c.jsx)("thead",{class:"thead-dark",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"#"}),Object(c.jsx)("th",{scope:"col",children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"User Name"}),Object(c.jsx)("th",{scope:"col",children:"Email"}),Object(c.jsx)("th",{children:"Action"})]})}),Object(c.jsx)("tbody",{children:a.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:t+1}),Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.username}),Object(c.jsx)("td",{children:e.email}),Object(c.jsxs)("td",{children:[Object(c.jsx)(d.b,{class:"btn btn-primary mr-2",to:"/users/".concat(e.id),children:"View"}),Object(c.jsx)(d.b,{class:"btn btn-outline-primary mr-2",to:"/users/edit/".concat(e.id),children:"Edit  "}),Object(c.jsx)(d.b,{class:"btn btn-danger",onClick:function(){return i(e.id)},children:"Delete"})]})]})}))})]})]})})},p=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"py-4",children:[Object(c.jsx)("h1",{children:"About Page"}),Object(c.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"}),Object(c.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"}),Object(c.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"})]})})},x=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"py-4",children:[Object(c.jsx)("h1",{children:"Contact Page"}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{class:"mb-3",children:[Object(c.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Email address"}),Object(c.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(c.jsx)("div",{id:"emailHelp",class:"form-text",children:"We'll never share your email with anyone else."})]}),Object(c.jsxs)("div",{class:"mb-3",children:[Object(c.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Password"}),Object(c.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1"})]}),Object(c.jsxs)("div",{class:"mb-3 form-check",children:[Object(c.jsx)("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(c.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(c.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})]})})},O=function(){return Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-success",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)(d.b,{className:"navbar-brand",href:"/",children:"React User"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(c.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(d.c,{className:"nav-link",exact:!0,to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(d.c,{className:"nav-link",exact:!0,to:"/about",children:"About"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(d.c,{className:"nav-link",exact:!0,to:"/contact",children:"Contact"})})]})}),Object(c.jsx)(d.b,{className:"btn btn-outline-light",to:"/users/add",children:"Add User"})]})})},f=a(2),v=function(){return Object(c.jsx)("div",{className:"not-found",children:Object(c.jsx)("h1",{className:"display-1",children:"Page not Found"})})},N=a(14),g=a(15),w=function(){var e=Object(f.f)(),t=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),a=Object(m.a)(t,2),s=a[0],r=a[1],i=s.name,o=s.username,j=s.email,h=s.phone,p=s.website,x=function(e){r(Object(g.a)(Object(g.a)({},s),{},Object(N.a)({},e.target.name,e.target.value)))},O=function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,b.a.post("http://localhost:3001/users",s);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(c.jsx)(d.b,{className:"btn btn-success",to:"/",children:"back to Home"}),Object(c.jsx)("h2",{className:"text-center mb-4",children:"Add A User"}),Object(c.jsxs)("form",{onSubmit:function(e){return O(e)},children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:i,onChange:function(e){return x(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:o,onChange:function(e){return x(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:j,onChange:function(e){return x(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:h,onChange:function(e){return x(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:p,onChange:function(e){return x(e)}})}),Object(c.jsx)("button",{className:"btn btn-success btn-block",children:"Add User"})]})]})})},y=function(){var e=Object(f.f)(),t=Object(f.g)().id,a=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),s=Object(m.a)(a,2),r=s[0],i=s[1],o=r.name,j=r.username,h=r.email,p=r.phone,x=r.website,O=function(e){i(Object(g.a)(Object(g.a)({},r),{},Object(N.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){w()}),[]);var v=function(){var a=Object(u.a)(l.a.mark((function a(c){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.next=3,b.a.put("http://localhost:3001/users/".concat(t),r);case 3:e.push("/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:3001/users/".concat(t));case 2:a=e.sent,i(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(c.jsx)(d.b,{className:"btn btn-success",to:"/",children:"back to Home"}),Object(c.jsx)("h2",{className:"text-center mb-4",children:"Edit A User"}),Object(c.jsxs)("form",{onSubmit:function(e){return v(e)},children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:o,onChange:function(e){return O(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:j,onChange:function(e){return O(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:h,onChange:function(e){return O(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:p,onChange:function(e){return O(e)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:x,onChange:function(e){return O(e)}})}),Object(c.jsx)("button",{className:"btn btn-warning btn-block",children:"Update User"})]})]})})},k=function(){var e=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),t=Object(m.a)(e,2),a=t[0],s=t[1],r=Object(f.g)().id;Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:3001/users/".concat(r));case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"container py-4",children:[Object(c.jsx)(d.b,{className:"btn btn-primary",to:"/",children:"back to Home"}),Object(c.jsxs)("h1",{className:"display-4",children:["User Id: ",r]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("ul",{className:"list-group w-50",children:[Object(c.jsxs)("li",{className:"list-group-item",children:["name: ",a.name]}),Object(c.jsxs)("li",{className:"list-group-item",children:["user name: ",a.username]}),Object(c.jsxs)("li",{className:"list-group-item",children:["email: ",a.email]}),Object(c.jsxs)("li",{className:"list-group-item",children:["phone: ",a.phone]}),Object(c.jsxs)("li",{className:"list-group-item",children:["website: ",a.website]})]})]})};var E=function(){return Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{}),Object(c.jsxs)(f.c,{children:[Object(c.jsx)(f.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(f.a,{exact:!0,path:"/about",component:p}),Object(c.jsx)(f.a,{exact:!0,path:"/contact",component:x}),Object(c.jsx)(f.a,{exact:!0,path:"/users/add",component:w}),Object(c.jsx)(f.a,{exact:!0,path:"/users/edit/:id",component:y}),Object(c.jsx)(f.a,{exact:!0,path:"/users/:id",component:k}),Object(c.jsx)(f.a,{component:v})]})]})})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.c2483f9f.chunk.js.map