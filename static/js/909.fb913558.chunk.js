"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[909],{3909:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(4942),r=t(1413),c=t(9439),o=t(2791),s=t(9434),u=t(184);function i(e){var n=e.onSubmit,t=(0,s.v9)((function(e){return e.phoneBook.contacts.items})),i=(0,o.useState)({name:"",number:""}),l=(0,c.Z)(i,2),m=l[0],f=l[1],d=function(e){var n=e.currentTarget,t=n.name,c=n.value;f((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t,c))}))},h=function(){f({number:"",name:""})};return(0,u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),t.find((function(e){return e.name.toLowerCase()===m.name.toLowerCase()})))alert("".concat(m.name," is already exist")),h();else{var a=m.name,r=m.number;n({name:a,number:r}),h()}},className:"contact_form",children:[(0,u.jsxs)("label",{className:"contact_form_label",children:["Name",(0,u.jsx)("input",{type:"text",name:"name",value:m.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0406\u0456\u0407\u0457\u0490\u0491' \\-\\u0400-\\u04FF]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d,className:"contact_form_input"})]}),(0,u.jsxs)("label",{className:"contact_form_label",children:["Number",(0,u.jsx)("input",{type:"tel",name:"number",value:m.number,pattern:"^[+]?[0-9\\\\.\\\\-\\\\s]{1,15}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:d,className:"contact_form_input"})]}),(0,u.jsx)("button",{type:"submit",children:" Add contact"})]})}var l=function(e){var n=e.title,t=e.children;return(0,u.jsxs)("section",{className:"section",children:[(0,u.jsxs)("h1",{children:[" ",n]}),t]})},m=t(1789),f=function(){var e=(0,s.I0)(),n=(0,s.v9)((function(e){return e.phoneBook.contacts.items})),t=(0,s.v9)((function(e){return e.phoneBook.filter})),a=(0,o.useState)([]),r=(0,c.Z)(a,2),i=r[0],l=r[1];return(0,o.useEffect)((function(){e(m.getContacts())}),[e]),(0,o.useEffect)((function(){l(function(){var e=t.toLowerCase();return n.length>0?n.filter((function(n){return n.name.toLowerCase().includes(e)})):n}())}),[n,t]),(0,u.jsx)("ol",{className:"contact__list",children:i.map((function(n){var t=n.id,a=n.name,r=n.number;return(0,u.jsxs)("li",{id:t,className:"contact__list__item",children:[a,":",(0,u.jsx)("span",{className:"contact__list__number",children:r}),(0,u.jsx)("button",{type:"button",onClick:function(){return e((0,m.deleteContact)({id:t}))},children:"Delete"})]},t)}))})},d=t(8765),h=function(){var e=(0,s.I0)(),n=(0,s.v9)((function(e){return e.phoneBook.filter}));return(0,u.jsxs)("label",{className:"filter__title",children:["Find contacts by name",(0,u.jsx)("input",{type:"text",value:n,onChange:function(n){e((0,d.f)(n.target.value))}})]})},p=function(){var e=(0,s.I0)();return(0,u.jsxs)(l,{title:"Phonebook",children:[(0,u.jsx)(i,{onSubmit:function(n){return e((0,m.addContact)(n))}}),(0,u.jsx)("h2",{children:"Contacts "}),(0,u.jsx)(h,{}),(0,u.jsx)(f,{})]})}}}]);
//# sourceMappingURL=909.fb913558.chunk.js.map