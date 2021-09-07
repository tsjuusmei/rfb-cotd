(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{45:function(e,t,a){e.exports=a(62)},50:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(41),i=(a(50),a(67)),o=a(69),c=a(70),l=a(15),u=a(16),h=a(20),m=a(21);function p(e){return" $"+(Math.round(100*e)/100).toFixed(2)}function d(e){return e[Math.floor(Math.random()*e.length)]}function f(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(d(e),"-").concat(d(e),"-").concat(d(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var v=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).myInput=r.a.createRef(),e.goToStore=function(t){t.preventDefault();var a=e.myInput.current.value;e.props.history.push("/store/".concat(a))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter A Store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,defaultValue:f()}),r.a.createElement("button",{type:"submit"},"Visit Store"))}}]),a}(r.a.Component),b=a(28),g=a(42),y=a.n(g),E=a(34),O=E.a.initializeApp({apiKey:"AIzaSyC4Nh0FglZgI9HMUxE8J1AJodiEyEOWI24",authDomain:"cotd-guus.firebaseapp.com",databaseURL:"https://cotd-guus-default-rtdb.europe-west1.firebasedatabase.app"}),j=y.a.createClass(O.database()),w={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:17.24,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:32,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:16.84,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:11.29,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:42.34,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:14.53,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:25.43,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:4.25,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:22.5,status:"available"}},k=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"of"),r.a.createElement("span",{className:"the"},"the")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))},S=a(68),F=a(66),x=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).renderOrder=function(t){var a=e.props.fishes[t],n=e.props.order[t],s=a&&"available"===a.status;return a?s?r.a.createElement(S.a,null,r.a.createElement(F.a.li,{variants:{hidden:{opacity:0,x:120},show:{opacity:1,x:0},exit:{opacity:0,x:-120}},key:t},r.a.createElement("input",{type:"number",value:n,onChange:function(a){return e.props.editOrder(a,t)}}),"lbs ",a.name,p(n*a.price),r.a.createElement("button",{onClick:function(){return e.props.removeFromOrder(t)}},"\xd7"))):r.a.createElement("li",{key:t},"Sorry, ",a?a.name:"this fish"," is no longer available"):null},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var n=e.props.fishes[a],r=e.props.order[a];return n&&"available"===n.status?t+r*n.price:t}),0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(F.a.ul,{initial:"hidden",animate:"show",className:"order"},t.map(this.renderOrder)),r.a.createElement("div",{className:"total"},r.a.createElement("strong",null,"Total: ",p(a))))}}]),a}(r.a.Component),C=a(10),N=a.n(C),T=a(18),A=a(35),I=a(44),L=function(e){var t=Object(I.a)(),a=t.register,n=t.handleSubmit;return r.a.createElement("form",{className:"fish-edit",onSubmit:n(e.addFish)},r.a.createElement("input",Object.assign({type:"text"},a("name"),{placeholder:"Name",required:!0})),r.a.createElement("input",Object.assign({type:"number"},a("price"),{placeholder:"Price",required:!0})),r.a.createElement("select",Object.assign({type:"text"},a("status"),{placeholder:"Status",required:!0}),r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",Object.assign({type:"text"},a("desc"),{placeholder:"Desc",required:!0})),r.a.createElement("input",Object.assign({type:"text"},a("image"),{placeholder:"Image",required:!0})),r.a.createElement("button",{type:"submit"},"Add Fish"))},M=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var a=Object(b.a)({},e.props.fish,{[t.currentTarget.name]:t.currentTarget.value});e.props.updateFish(e.props.index,a)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fish.name}),r.a.createElement("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.fish.price}),r.a.createElement("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.fish.status},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:this.props.fish.desc}),r.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fish.image}),r.a.createElement("button",{onClick:function(){return e.props.deleteFish(e.props.index)}},"Remove Fish"))}}]),a}(r.a.Component),q=function(e){return r.a.createElement("nav",{className:"Login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Sign in to manage your store's inventory"),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Login with GitHub"),r.a.createElement("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")}},"Login with Facebook"),r.a.createElement("button",{className:"twitter",onClick:function(){return e.authenticate("Twitter")}},"Login with Twitter"))},D=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={owner:null,uid:null},e.authHandler=function(){var t=Object(T.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.fetch(e.props.storeId,{context:Object(A.a)(e)});case 2:if((n=t.sent).owner){t.next=6;break}return t.next=6,j.post("".concat(e.props.storeId,"/owner"),{data:a.user.uid});case 6:e.setState({uid:a.user.uid,owner:n.owner||a.user.uid});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(t){var a=new(E.a.auth["".concat(t,"AuthProvider")]);O.auth().signInWithPopup(a).then(e.authHandler)},e.logout=Object(T.a)(N.a.mark((function t(){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.auth().signOut();case 2:e.setState({uid:null});case 3:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{onClick:this.logout},"Logout");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t,"Sorry, you are not the owner!")):r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),t,Object.keys(this.props.fishes).map((function(t){return r.a.createElement(M,{key:t,index:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})})),r.a.createElement(L,{addFish:this.props.addFish}),r.a.createElement("button",{onClick:this.props.loadSampleFishes},"Load Sample Fishes")):r.a.createElement(q,{authenticate:this.authenticate})}}]),a}(r.a.Component),J=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.image,n=t.name,s=t.price,i=t.desc,o="available"===t.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("h3",{className:"fish-name"},n,r.a.createElement("span",{className:"price"},p(s))),r.a.createElement("p",null,i),r.a.createElement("button",{disabled:!o,onClick:function(){return e.props.addToOrder(e.props.index)}},o?"Add To Cart":"Sold Out!"))}}]),a}(r.a.Component),P=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fishes:{},order:{}},e.addFish=function(t){var a=Object(b.a)({},e.state.fishes);a["fish".concat(Date.now())]=t,e.setState({fishes:a})},e.updateFish=function(t,a){var n=Object(b.a)({},e.state.fishes);n[t]=a,e.setState({fishes:n})},e.deleteFish=function(t){var a=Object(b.a)({},e.state.fishes);a[t]=null,e.setState({fishes:a})},e.loadSampleFishes=function(){e.setState({fishes:w})},e.addToOrder=function(t){var a=Object(b.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.editOrder=function(t,a){var n=Object(b.a)({},e.state.order);t.currentTarget.value<=0?delete n[a]:n[a]=t.currentTarget.value,e.setState({order:n})},e.removeFromOrder=function(t){var a=Object(b.a)({},e.state.order);delete a[t],e.setState({order:a})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeid);t&&this.setState({order:JSON.parse(t)}),this.ref=j.syncState("".concat(e.storeid,"/fishes"),{context:this,state:"fishes"})}},{key:"componentWillUnmount",value:function(){j.removeBinding(this.ref)}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeid,JSON.stringify(this.state.order))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(k,{tagline:"Fresh Seafood Market"}),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map((function(t){return r.a.createElement(J,{key:t,index:t,details:e.state.fishes[t],addToOrder:e.addToOrder})})))),r.a.createElement(x,{fishes:this.state.fishes,removeFromOrder:this.removeFromOrder,editOrder:this.editOrder,order:this.state.order}),r.a.createElement(D,{addFish:this.addFish,updateFish:this.updateFish,deleteFish:this.deleteFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,storeId:this.props.match.params.storeid}))}}]),a}(r.a.Component),H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"404 Not Found!!"))},W=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:v}),r.a.createElement(c.a,{exact:!0,path:"/store/:storeid",component:P}),r.a.createElement(c.a,{exact:!0,component:H})))};Object(s.render)(r.a.createElement(W,null),document.querySelector("#main"))}},[[45,1,2]]]);
//# sourceMappingURL=main.567b0349.chunk.js.map