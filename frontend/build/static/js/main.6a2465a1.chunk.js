(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{119:function(e,t,n){e.exports={mainContainer:"styles_mainContainer__1V_-R",container:"styles_container__2SgF2"}},137:function(e,t,n){e.exports={form:"styles_form__1hqYg"}},173:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(22),s=n.n(r),i=(n(173),n(120)),o=n(199),u=n(203),l=n(204),d=n(137),m=n.n(d),j=n(200),h=n(6),b=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),d=Object(i.a)(s,2),b=d[0],f=d[1],p=Object(a.useState)(""),O=Object(i.a)(p,2),x=O[0],g=O[1],v=function(e){switch(e.target.name){case"owner":r(e.target.value);break;case"caption":f(e.target.value);break;case"url":g(e.target.value)}};return Object(h.jsxs)(o.a,{className:m.a.form,children:[Object(h.jsxs)(o.a.Field,{children:[Object(h.jsx)("label",{children:"Meme Owner"}),Object(h.jsx)("input",{value:c,name:"owner",onChange:v,placeholder:"Enter your full name"})]}),Object(h.jsxs)(o.a.Field,{children:[Object(h.jsx)("label",{children:"Caption"}),Object(h.jsx)("input",{value:b,name:"caption",onChange:v,placeholder:"Be Creative with caption"})]}),Object(h.jsxs)(o.a.Field,{children:[Object(h.jsx)("label",{children:"Meme URL"}),Object(h.jsx)("input",{value:x,name:"url",onChange:v,placeholder:"Enter URL of your meme here"})]}),Object(h.jsx)(u.a,{warning:!0,header:"Could you check something!",list:["That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."]}),Object(h.jsx)(l.a,{onClick:function(){var t=""!==c&&""!=x&&""!=b||(j.b.error("All fields are mandatory. Please check again and submit"),!1),n={name:c,url:x,caption:b};t&&e.submitMeme(n),r(""),f(""),g("")},type:"submit",children:"Submit"})]})},f=(n(182),n(206)),p=n(202),O=n(80),x=n(153),g=n(87),v=n.n(g),C=function(e){return Object(h.jsx)("div",{className:v.a.memeCard,children:Object(h.jsxs)(p.a,{children:[Object(h.jsxs)(p.a.Content,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(O.a,{name:"user outline"})," ",Object(h.jsx)(p.a.Header,{className:v.a.header,children:e.name.charAt(0).toUpperCase()+e.name.slice(1)})]}),Object(h.jsxs)(p.a.Meta,{children:["@",e.name.charAt(0).toLowerCase()+e.name.slice(1)]})]}),Object(h.jsx)("div",{className:v.a.cardImageContainer,children:Object(h.jsx)(x.a,{className:v.a.cardImage,src:e.image,wrapped:!0,ui:!1})}),Object(h.jsx)(p.a.Content,{children:Object(h.jsx)(p.a.Description,{children:e.caption})})]})})},y=function(e){var t=e.firstHundredMemes;return Object(h.jsx)(f.a,{width:16,children:t.length>0?t.map((function(e){return Object(h.jsx)(C,{image:e.url,name:e.name,caption:e.caption})})):""})},_=n(126),M=n.n(_),k=n(149),w=n(150),I=n(151),F=n(156),H=n(154),S=n(119),N=n.n(S),L=n(201),E=function(e){return Object(h.jsxs)(L.a,{fixed:"top",inverted:!0,children:[Object(h.jsx)(L.a.Item,{children:"XMeme"}),Object(h.jsx)(L.a.Item,{onClick:e.onToggle}),Object(h.jsx)(L.a.Menu,{position:"right"})]})},R=function(e){Object(F.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={loading:!1,firstHundredMemes:null},e.checkValidation=function(e,t){if(!e)return!0},e.fetchFirstHundredMemes=function(){fetch(encodeURI("https://xmemeapps.herokuapp.com/memes")).then((function(e){return e.json()})).then((function(t){e.setState({firstHundredMemes:t})})).catch((function(e){console.log("Error occured during fetch ".concat(e))}))},e.submitMeme=function(){var t=Object(k.a)(M.a.mark((function t(n){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,fetch(encodeURI("https://xmemeapps.herokuapp.com/memes"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){if(e.checkValidation(!1,t))return t})).catch((function(t){e.setState({loading:!1}),console.log("Error occured during fetch api")}));case 3:t.sent,e.fetchFirstHundredMemes();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.fetchFirstHundredMemes()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:N.a.mainContainer,children:[Object(h.jsx)(E,{items:["Login","Register"]}),Object(h.jsxs)("div",{className:N.a.container,children:[Object(h.jsx)(b,{submitMeme:this.submitMeme}),Object(h.jsx)("div",{className:N.a.memeListContainer,children:this.state.firstHundredMemes?Object(h.jsx)(y,{firstHundredMemes:this.state.firstHundredMemes}):""})]})]})}}]),n}(c.a.Component);n(184);var A=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(R,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root")),T()},87:function(e,t,n){e.exports={memeCard:"styles_memeCard__17EJQ",cardImageContainer:"styles_cardImageContainer__1fkyQ",cardImage:"styles_cardImage__1r0kH",header:"styles_header__3nVxg"}}},[[185,1,2]]]);
//# sourceMappingURL=main.6a2465a1.chunk.js.map