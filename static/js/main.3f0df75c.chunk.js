(this["webpackJsonporder-food"]=this["webpackJsonporder-food"]||[]).push([[0],[,,,function(e,t,a){e.exports={form:"Checkout_form__2uujB",control:"Checkout_control__yBpCM",actions:"Checkout_actions___OL7b",submit:"Checkout_submit__1U_Zd",invalid:"Checkout_invalid__2hL4d"}},,,function(e,t,a){e.exports={"cart-items":"Cart_cart-items__2NWXi",total:"Cart_total__1Es-K",actions:"Cart_actions__2qX3d","button--alt":"Cart_button--alt__3QneY",button:"Cart_button__1mxcF"}},function(e,t,a){e.exports={"cart-item":"CartItem_cart-item__38SpW",summary:"CartItem_summary__3jxeY",price:"CartItem_price__mRbv5",amount:"CartItem_amount__3NmJO",actions:"CartItem_actions__2eeIM"}},,,function(e,t,a){e.exports={button:"HeaderCartButton_button__1rc4W",icon:"HeaderCartButton_icon__DKuY3",badge:"HeaderCartButton_badge__34qQ0",bump:"HeaderCartButton_bump__2Bfu6"}},,,function(e,t,a){e.exports={backdrop:"Modal_backdrop__13v0R",modal:"Modal_modal__2uUeD","slide-down":"Modal_slide-down__3i3TM"}},function(e,t,a){e.exports={meals:"AvaliableMeals_meals__33-vG","meals-appear":"AvaliableMeals_meals-appear__xRzbZ",MealsLoading:"AvaliableMeals_MealsLoading__aCT8B",MealsError:"AvaliableMeals_MealsError__2aLsu"}},function(e,t,a){e.exports={meal:"MealItem_meal__2QGaC",description:"MealItem_description__MhOFG",price:"MealItem_price__1q1jc"}},,,function(e,t,a){e.exports={header:"Header_header__2R7mh","main-image":"Header_main-image__1AZLd"}},function(e,t,a){e.exports={summary:"MealsSummary_summary__3dybr"}},function(e,t,a){e.exports={card:"Card_card__UqEnL"}},function(e,t,a){e.exports={form:"MealItemForm_form__j6ueJ"}},function(e,t,a){e.exports={input:"Input_input__2ESn2"}},,,,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(8),i=a.n(r),s=(a(28),a(29),a(2)),o=a(5),l=a.n(o),d=a(12),u=a(4),j=a(13),m=a.n(j),b=a(0),O=function(e){var t=e.onClose;return Object(b.jsx)("div",{className:m.a.backdrop,onClick:t})},h=function(e){var t=e.children;return Object(b.jsx)("div",{className:m.a.modal,children:Object(b.jsx)("div",{className:m.a.content,children:t})})},x=document.getElementById("overlay");var p=function(e){var t=e.children,a=e.onClick;return Object(b.jsxs)(b.Fragment,{children:[i.a.createPortal(Object(b.jsx)(O,{onClose:a}),x),i.a.createPortal(Object(b.jsx)(h,{children:t}),x)]})},f=a(6),_=a.n(f),v=c.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),C=a(7),y=a.n(C);var N=function(e){e.id;var t=e.name,a=e.price,n=e.amount,c=e.onRemove,r=e.onAdd,i="$".concat(a.toFixed(2));return Object(b.jsxs)("li",{className:y.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("div",{className:y.a.summary,children:[Object(b.jsx)("span",{className:y.a.price,children:i}),Object(b.jsxs)("span",{className:y.a.amount,children:["x ",n]})]})]}),Object(b.jsxs)("div",{className:y.a.actions,children:[Object(b.jsx)("button",{onClick:c,children:"\u2212"}),Object(b.jsx)("button",{onClick:r,children:"+"})]})]})},g=a(3),k=a.n(g),A=function(e){return""===e.trim()},M=function(e){var t=e.onCancel,a=e.onConfirm,c=Object(n.useState)({name:!0,street:!0,city:!0,postalCode:!0}),r=Object(s.a)(c,2),i=r[0],o=r[1],l=Object(n.useRef)(),d=Object(n.useRef)(),u=Object(n.useRef)(),j=Object(n.useRef)(),m="".concat(k.a.control," ").concat(i.name?"":k.a.invalid),O="".concat(k.a.control," ").concat(i.street?"":k.a.invalid),h="".concat(k.a.control," ").concat(i.postalCode?"":k.a.invalid),x="".concat(k.a.control," ").concat(i.city?"":k.a.invalid);return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=l.current.value,n=d.current.value,c=u.current.value,r=j.current.value,i=!A(t),s=!A(n),m=!A(c)&&5===c.trim().length,b=!A(r);o({name:i,street:s,postalCode:m,city:b}),i&&s&&m&&b&&a({name:t,street:n,city:r,postalCode:c})},className:k.a.form,children:[Object(b.jsxs)("div",{className:m,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(b.jsx)("input",{ref:l,type:"text",id:"name"}),!i.name&&Object(b.jsx)("p",{children:"Please a enter a valid name!"})]}),Object(b.jsxs)("div",{className:O,children:[Object(b.jsx)("label",{htmlFor:"street",children:"Street"}),Object(b.jsx)("input",{ref:d,type:"text",id:"street"}),!i.street&&Object(b.jsx)("p",{children:"Please a enter a valid street!"})]}),Object(b.jsxs)("div",{className:h,children:[Object(b.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(b.jsx)("input",{ref:u,type:"text",id:"postal"}),!i.postalCode&&Object(b.jsx)("p",{children:"Please a enter a valid postal code (5 characters long)!"})]}),Object(b.jsxs)("div",{className:x,children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{ref:j,type:"text",id:"city"}),!i.city&&Object(b.jsx)("p",{children:"Please a enter a valid city"})]}),Object(b.jsxs)("div",{className:k.a.actions,children:[Object(b.jsx)("button",{type:"button",onClick:t,children:"Cancel"}),Object(b.jsx)("button",{className:k.a.submit,children:"Confirm"})]})]})};var S=function(e){var t=e.onHideCart,a=Object(n.useState)(!1),c=Object(s.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)(!1),j=Object(s.a)(o,2),m=j[0],O=j[1],h=Object(n.useState)(!1),x=Object(s.a)(h,2),f=x[0],C=x[1],y=Object(n.useContext)(v),g="$".concat(y.totalAmount<0?"0.00":y.totalAmount.toFixed(2)),k=y.items.length>0,A=function(e){y.removeItem(e)},S=function(e){y.addItem(Object(u.a)(Object(u.a)({},e),{},{amount:1}))},I=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("https://react-http-e62f7-default-rtdb.asia-southeast1.firebasedatabase.app/order.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:y.items})});case 3:O(!1),C(!0),y.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=Object(b.jsx)("ul",{className:_.a["cart-items"],children:y.items.map((function(e){return Object(b.jsx)(N,{id:e.id,name:e.name,description:e.description,price:e.price,amount:e.amount,onRemove:A.bind(null,e.id),onAdd:S.bind(null,e)},e.id)}))}),w=Object(b.jsxs)("div",{className:_.a.actions,children:[Object(b.jsx)("button",{className:_.a["button-alt"],onClick:t,children:"Close"}),k&&Object(b.jsx)("button",{className:_.a.button,onClick:function(){i(!0)},children:"Order"})]}),E=Object(b.jsxs)(b.Fragment,{children:[R,Object(b.jsxs)("div",{className:_.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:g})]}),r&&Object(b.jsx)(M,{onCancel:t,onConfirm:I}),!r&&w]}),F=Object(b.jsx)("p",{children:"Sending order data..."}),B=Object(b.jsx)("p",{children:"Successfully sent the order!"});return Object(b.jsxs)(p,{onClick:t,children:[!m&&!f&&E,m&&F,f&&B]})},I=a(18),R=a.n(I),w=a.p+"static/media/background-header.babd5d81.jpg",E=a(23),F=a(10),B=a.n(F);var D=function(e){var t=e.onClick,a=Object(n.useState)(!1),c=Object(s.a)(a,2),r=c[0],i=c[1],o=Object(n.useContext)(v),l=o.items.reduce((function(e,t){return e+t.amount}),0),d=o.items,u="".concat(B.a.button," ").concat(r?B.a.bump:"");return Object(n.useEffect)((function(){0!==d.length&&(i(!0),setTimeout((function(){i(!1)}),300))}),[d]),Object(b.jsxs)("button",{className:u,onClick:t,children:[Object(b.jsx)("span",{children:Object(b.jsx)(E.a,{className:B.a.icon})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsx)("span",{className:B.a.badge,children:l})]})};var L=function(e){var t=e.onShowCart;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{className:R.a.header,children:[Object(b.jsx)("h1",{children:"ReactMeals"}),Object(b.jsx)(D,{onClick:t})]}),Object(b.jsx)("div",{className:R.a["main-image"],children:Object(b.jsx)("img",{src:w,alt:"A burger"})})]})},P=a(19),H=a.n(P);var T=function(){return Object(b.jsxs)("section",{className:H.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favorite meal from our broad selection of avilable meals and enhoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All our meals are cooked with hight-quality ingredients, just-in-time and of course by experienced chefs!"})]})},Y=a(20),q=a.n(Y);var J=function(e){var t=e.children;return Object(b.jsx)("div",{className:q.a.card,children:t})},G=a(14),Q=a.n(G),U=a(15),V=a.n(U),W=a(21),Z=a.n(W),$=a(22),K=a.n($),X=c.a.forwardRef((function(e,t){var a=e.label,n=e.input;return Object(b.jsxs)("div",{className:K.a.input,children:[Object(b.jsxs)("label",{htmlFor:n.id,children:[" ",a]}),Object(b.jsx)("input",Object(u.a)({ref:t},n))]})}));var z=function(e){var t=e.onAddToCart,a=Object(n.useState)(!0),c=Object(s.a)(a,2),r=c[0],i=c[1],o=Object(n.useRef)();return Object(b.jsxs)("form",{className:Z.a.form,onSubmit:function(e){e.preventDefault();var a=o.current.value,n=+a;0===a.trim().length||a<1||n>5?i(!1):t(n)},children:[Object(b.jsx)(X,{ref:o,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",defaultValue:"1"}}),Object(b.jsx)("button",{children:"Add"}),!r&&Object(b.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})};var ee=function(e){var t=e.id,a=e.name,c=e.description,r=e.price,i=Object(n.useContext)(v),s="$".concat(r.toFixed(2));return Object(b.jsxs)("li",{className:V.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:a}),Object(b.jsx)("div",{className:V.a.description,children:c}),Object(b.jsx)("div",{className:V.a.price,children:s})]}),Object(b.jsx)("div",{children:Object(b.jsx)(z,{onAddToCart:function(e){i.addItem({id:t,name:a,description:c,price:r,amount:e})}})})]})};var te=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),i=Object(s.a)(r,2),o=i[0],u=i[1],j=Object(n.useState)(),m=Object(s.a)(j,2),O=m[0],h=m[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-e62f7-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in a=e.sent,n=[],a)n.push({id:r,name:a[r].name,description:a[r].description,price:a[r].price});c(n),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){u(!1),h(e.message)}))}),[]);var x=a.map((function(e){return Object(b.jsx)(ee,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return O?Object(b.jsx)("section",{className:Q.a.MealsError,children:Object(b.jsxs)("p",{children:[O," "]})}):o?Object(b.jsx)("section",{className:Q.a.MealsLoading,children:Object(b.jsx)("p",{children:"Loading... "})}):Object(b.jsx)("section",{className:Q.a.meals,children:Object(b.jsx)(J,{children:Object(b.jsx)("ul",{children:x})})})};var ae=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(T,{}),Object(b.jsx)(te,{})]})},ne=a(16),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var a,n,c=e.totalAmount+t.item.price*t.item.amount,r=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[r];return i?(a=Object(u.a)(Object(u.a)({},i),{},{amount:i.amount+t.item.amount}),(n=Object(ne.a)(e.items))[r]=a):n=[].concat(Object(ne.a)(e.items),[t.item]),{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(u.a)(Object(u.a)({},l),{},{amount:l.amount-1});(s=Object(ne.a)(e.items))[o]=j}return{items:s,totalAmount:d}}return t.type,ce};var ie=function(e){var t=e.children,a=Object(n.useReducer)(re,ce),c=Object(s.a)(a,2),r=c[0],i=c[1],o={items:r.items,totalAmount:r.totalAmount,addItem:function(e){i({type:"ADD",item:e})},removeItem:function(e){i({type:"REMOVE",id:e})},clearCart:function(){i({type:"CLEAR"})}};return Object(b.jsx)(v.Provider,{value:o,children:t})};var se=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(b.jsxs)(ie,{children:[a&&Object(b.jsx)(S,{onHideCart:function(){c(!1)}}),Object(b.jsx)(L,{onShowCart:function(){c(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(ae,{})})]})};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(se,{})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.3f0df75c.chunk.js.map