(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,a){e.exports=a(158)},152:function(e,t){},155:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=a(11),s=a(36),l=a(86),p=a(44),m=function(e){return{type:"page:setOrderLoading",payload:e}},d={title:"Dashboard",icon:"dashboard",profile:{profilepic:"/images/avatar.png"},drawerOpen:!0,order:{},orderLoaded:!1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"page:setPageTitle":return Object.assign({},e,{title:t.payload});case"page:setPageIcon":return Object.assign({},e,{icon:t.payload});case"page:setProfile":return Object.assign({},e,{profile:t.payload});case"page:openDrawer":return Object.assign({},e,{drawerOpen:!0});case"page:closeDrawer":return Object.assign({},e,{drawerOpen:!1});case"page:setOrder":return Object.assign({},e,{order:t.payload});case"page:setOrderLoading":return Object.assign({},e,{orderLoaded:!t.payload});default:return e}},h={dashboardLoaded:!1,opportunityStatusRevenue:[],opportunityStatusRevenueHash:"",opportunityStatusRevenueLoaded:!1,opportunityStatusRevenueChart:[]},g=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"websocket:admin-logins":return a.payload.hash===t.opportunityStatusRevenueHash?t:((e=[]).push(a.payload.data.data.entities),a.payload.data.data.values.forEach((function(t,a){e.push(t)})),Object.assign({},t,{opportunityStatusRevenue:e,opportunityStatusRevenueLoaded:!0,opportunityStatusRevenueHash:a.payload.hash,opportunityStatusRevenueChart:a.payload.data.meta}));default:return t}},E=function(e){return Object(s.c)({router:Object(p.b)(e),page:u,websocket:g})},f=a(89),b=a.n(f),O=a(90),v=a.n(O),y=a(91),w=v()(),x=b()(w,"server/");var j=a(21),k=(a(155),a(14)),S=a(10),N=a(18),D=a(19),C=a(28),I=a(20),P=a(3),R=a(206),T=a(212),L=a(207),B=a(208),W=a(211),F=a(45),z=a(210),A=a(209),_=a(52),H=a.n(_),U=a(53),M=a.n(U),X=a(55),q=a.n(X),G=a(54),J=a.n(G),Q=a(205),V=a(101),Y=a.n(V),Z=a(102),$=a.n(Z),K=a(213),ee=a(193),te=a(194),ae=a(92),ne=a.n(ae),re=a(26),oe=function(e){function t(){return Object(k.a)(this,t),Object(N.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K.a,{button:!0,component:re.a,to:"/",onClick:this.props.onSelected},r.a.createElement(ee.a,null,r.a.createElement(H.a,{className:this.props.classes.menuIcon})),r.a.createElement(te.a,{primary:"Dashboard"})),r.a.createElement(K.a,{button:!0,component:re.a,to:"/orders",onClick:this.props.onSelected},r.a.createElement(ee.a,null,r.a.createElement(M.a,{className:this.props.classes.menuIcon})),r.a.createElement(te.a,{primary:"Orders",onClick:this.props.onSelected})))}}]),t}(r.a.Component),ie=function(e){function t(){return Object(k.a)(this,t),Object(N.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K.a,{button:!0,component:re.a,to:"/profile",onClick:this.props.onSelected},r.a.createElement(ee.a,null,r.a.createElement(J.a,{className:this.props.classes.menuIcon})),r.a.createElement(te.a,{primary:"Profile"})),r.a.createElement(K.a,{button:!0,component:"a",href:"/return"},r.a.createElement(ee.a,null,r.a.createElement(q.a,{className:this.props.classes.menuIcon})),r.a.createElement(te.a,{primary:"Salesforce"})),r.a.createElement(K.a,{button:!0,component:"a",href:"/auth/saml/logout"},r.a.createElement(ee.a,null,r.a.createElement(ne.a,{className:this.props.classes.menuIcon})),r.a.createElement(te.a,{primary:"Logout"})))}}]),t}(r.a.Component),ce=a(23),se=a(13),le=a(96),pe=a(93),me=a.n(pe),de=a(94),ue=a.n(de),he=a(95),ge=a.n(he);function Ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ee(a,!0).forEach((function(t){Object(se.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var be=function(){return Object(le.a)((function(e){return{root:{display:"flex",background:"bottom center url("+ue.a+") #A8DDE0 no-repeat",backgroundSize:"100% 40%"},toolbar:{paddingRight:24},toolbarIcon:fe({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar,{background:"#FFF center 10px url("+me.a+") no-repeat",backgroundSize:"40% auto"}),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),color:"#A8DDE0",background:"bottom center url("+ge.a+") #00A0E3",backgroundSize:"cover"},appBarShift:{marginLeft:200,width:"calc(100% - ".concat(200,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButtonHidden:{display:"none"},title:{flexGrow:1,marginLeft:e.spacing(1),color:"#035478",fontWeight:"bold"},menuButton:{color:"#035478",marginRight:6},avatar:{marginLeft:e.spacing(2),border:"2px solid #035478"},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:200,backgroundSize:"auto 30%",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(se.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto",overflowX:"hidden"},container:{paddingTop:e.spacing(6),paddingBottom:e.spacing(3),maxWidth:"1650px"},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",borderRadius:"20px",background:"rgba(255, 255, 255)"},paper1:{padding:e.spacing(2),display:"flex",flexDirection:"column",borderRadius:"20px",background:"rgba(255, 255, 255)",maxWidth:"1000px"},fixedHeight:{height:375},section:{marginBottom:e.spacing(2)},copyright:{color:"#000",paddingTop:e.spacing(2),paddingBottom:"50px",fontWeight:"bold",textAlign:"center"},menuIcon:{color:"#035478"},pageIcon:{color:"#035478"},cloudTitle:{color:"#FFDF01",fontSize:"50px",textAlign:"center",margin:"0px",marginBottom:"-10px"},cloudSubTitle:{fontSize:"20px",fontWeight:"bold"},avatarradius:{"border-radius":"50%",width:"200px",border:"2px solid #035478"},centeralign:{"text-align":"center",marginBottom:e.spacing(2)},dashboard:{borderRadius:"20px"}}}))()},Oe=a(196),ve=a(160),ye=a(195),we=Object(c.c)(null,(function(e){return{setPageTitle:function(t){e(function(e){return{type:"page:setPageTitle",payload:e}}(t))},setPageIcon:function(t){e(function(e){return{type:"page:setPageIcon",payload:e}}(t))}}}))((function(e){e.setPageTitle(e.title),e.setPageIcon(e.icon);var t=be();return r.a.createElement(ye.a,{className:t.container},e.children)}));function xe(e){var t=e.component?e.component:"h2",a=e.variant?e.variant:"h6";return r.a.createElement(F.a,{component:t,variant:a,color:"primary",gutterBottom:!0,className:e.className},e.children)}function je(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe.a,{container:!0,justify:"center",spacing:2,direction:"row"},r.a.createElement(Oe.a,{item:!0},r.a.createElement("p",{className:e.classes.cloudTitle},e.value),r.a.createElement(xe,null,e.title))))}var ke=a(97),Se=a(197),Ne=function(e){function t(){return Object(k.a)(this,t),Object(N.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe,null,"Admin Logins"),!this.props.loaded&&r.a.createElement(Se.a,null),this.props.loaded&&r.a.createElement(ke.a,{width:this.props.chart.width,height:this.props.chart.height,chartType:this.props.chart.chartType,loader:r.a.createElement("div",null,"Loading Chart"),data:this.props.data,options:this.props.chart.options}))}}]),t}(r.a.Component),De=Object(c.c)((function(e){return{data:e.websocket.opportunityStatusRevenue,loaded:e.websocket.opportunityStatusRevenueLoaded,chart:e.websocket.opportunityStatusRevenueChart}}))(Ne),Ce=a(198),Ie=function(e){function t(){return Object(k.a)(this,t),Object(N.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=Object(P.a)(e.paper,e.fixedHeight);return r.a.createElement(we,{title:"Dashboard",icon:"dashboard"},r.a.createElement(Oe.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(Oe.a,{container:!0,spacing:4},r.a.createElement(Oe.a,{item:!0,xs:12,md:12,lg:12},!this.props.loaded&&r.a.createElement(Ce.a,{variant:"query"}),this.props.loaded&&r.a.createElement(Oe.a,{container:!0,spacing:2,alignContent:"center",alignItems:"center",justify:"center"},r.a.createElement(Oe.a,{item:!0,xs:12,md:12,lg:4},r.a.createElement("div",{className:"cloud"},r.a.createElement("div",{className:"cloudshadow"}),r.a.createElement("div",{className:"cloud-content"},r.a.createElement(je,{title:"Opportunities won today",classes:e,value:this.props.dashboardWonToday})))),r.a.createElement(Oe.a,{item:!0,xs:12,md:12,lg:4},r.a.createElement("div",{className:"cloud"},r.a.createElement("div",{className:"cloudshadow"}),r.a.createElement("div",{className:"cloud-content"},r.a.createElement(je,{title:"Revenue generated today",classes:e,value:this.props.dashboardRevenueToday})))))),r.a.createElement(Oe.a,{item:!0,xs:12,md:12,lg:4},r.a.createElement("div",{className:"cloud-container"},r.a.createElement("div",{className:"cloud mini"}),r.a.createElement(ve.a,{className:t},r.a.createElement(De,null)))))))}}]),t}(r.a.Component),Pe=Object(c.c)((function(e){return{loaded:e.websocket.dashboardLoaded,dashboardWonToday:e.websocket.dashboardWonToday,dashboardCasesClosed:e.websocket.dashboardCasesClosed,dashboardRevenueToday:e.websocket.dashboardRevenueToday}}))(Ie);function Re(){var e=be();return r.a.createElement(Pe,{classes:e})}var Te=a(199),Le=a(203),Be=a(202),We=a(200),Fe=a(201),ze=function(e){function t(){return Object(k.a)(this,t),Object(N.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe,null,"Recent Orders"),r.a.createElement(Te.a,{size:"small"},r.a.createElement(We.a,null,r.a.createElement(Fe.a,null,r.a.createElement(Be.a,null,"Name"),r.a.createElement(Be.a,null,"Description"),r.a.createElement(Be.a,null,"Status"))),r.a.createElement(Le.a,null,this.props.data.map((function(e){return r.a.createElement(Fe.a,{key:e.id},r.a.createElement(Be.a,null,r.a.createElement(re.a,{to:"/orders/"+e.sfid},e.name)),r.a.createElement(Be.a,null,e.description),r.a.createElement(Be.a,null,e.status))})))))}}]),t}(r.a.Component),Ae=Object(c.c)((function(e){return{data:e.websocket.orders,loaded:e.websocket.ordersLoaded}}))(ze);function _e(){var e=be();return r.a.createElement(we,{title:"Orders",icon:"shopping"},r.a.createElement(ve.a,{className:e.paper},r.a.createElement(Ae,null)))}var He=a(99),Ue=a.n(He);function Me(e){return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(K.a,Object.assign({button:!0,component:"a"},e)))}var Xe=function(e){function t(){return Object(k.a)(this,t),Object(N.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe.a,{container:!0},r.a.createElement(Oe.a,{item:!0,lg:12,md:12,xs:12,className:this.props.classes.centeralign},r.a.createElement("img",{src:this.props.data.fullPhotoUrl,alt:"Avatar",className:this.props.classes.avatarradius}))),r.a.createElement(Oe.a,{container:!0,justify:"center"},r.a.createElement(ve.a,{className:this.props.classes.paper1},r.a.createElement(Oe.a,{container:!0},r.a.createElement(Oe.a,{item:!0,lg:11,md:11,xs:10}),r.a.createElement(Oe.a,{item:!0,lg:1,md:1,xs:2},r.a.createElement(K.a,null,r.a.createElement(ee.a,null,r.a.createElement(Me,{href:this.props.data.userediturl,target:"_blank"},r.a.createElement(Ue.a,{className:this.props.classes.menuIcon}))))),r.a.createElement(Oe.a,{container:!0,className:this.props.classes.section},r.a.createElement(Oe.a,{item:!0,lg:2}),r.a.createElement(Oe.a,{item:!0,lg:5,md:6,xs:12,className:this.props.classes.section},r.a.createElement(xe,{component:"h3",variant:"h6"},"User Details"),r.a.createElement(Oe.a,{container:!0,spacing:1,mb:100},r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"Username"),r.a.createElement(Oe.a,{item:!0,md:8,xs:8,lg:8},this.props.data.username),r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"Email"),r.a.createElement(Oe.a,{item:!0,md:8,xs:8,lg:8},this.props.data.email),r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"Alias"),r.a.createElement(Oe.a,{item:!0,md:8,xs:8,lg:8},this.props.data.alias),r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"Nickname"),r.a.createElement(Oe.a,{item:!0,md:8,xs:8,lg:8},this.props.data.nickname),r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"Phone"),r.a.createElement(Oe.a,{item:!0,md:8,xs:8,lg:8},this.props.data.phone),r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"Extension"),r.a.createElement(Oe.a,{item:!0,md:8,xs:8,lg:8},this.props.data.extension),r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"Fax"),r.a.createElement(Oe.a,{item:!0,md:8,xs:6,lg:8},this.props.data.fax),r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"Mobile"),r.a.createElement(Oe.a,{item:!0,md:8,xs:8,lg:8},this.props.data.mobilephone))),r.a.createElement(Oe.a,{item:!0,lg:4,md:6,xs:12,className:this.props.classes.section},r.a.createElement(xe,{component:"h3",variant:"h6"},"Address"),r.a.createElement(Oe.a,{container:!0,spacing:1},r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"Street"),r.a.createElement(Oe.a,{item:!0,md:8,xs:8,lg:8},this.props.data.street),r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"City"),r.a.createElement(Oe.a,{item:!0,md:8,xs:8,lg:8},this.props.data.city),r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"State"),r.a.createElement(Oe.a,{item:!0,md:8,xs:8,lg:8},this.props.data.state),r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"Zipcode"),r.a.createElement(Oe.a,{item:!0,md:8,xs:8,lg:8},this.props.data.postalcode),r.a.createElement(Oe.a,{item:!0,md:4,xs:4,lg:4},"Country"),r.a.createElement(Oe.a,{item:!0,md:8,xs:8,lg:8},this.props.data.country))),r.a.createElement(Oe.a,{item:!0,lg:1}))))))}}]),t}(r.a.Component),qe=Object(c.c)((function(e){return{data:e.page.profile,loaded:e.websocket.ordersLoaded}}))(Xe);function Ge(){var e=be();return r.a.createElement(we,{title:"Profile",icon:"profile"},r.a.createElement(qe,{classes:e}))}function Je(){return r.a.createElement(we,{title:"Not found"},r.a.createElement("h1",null,"Not found"))}var Qe=a(204),Ve=a(100),Ye=a.n(Ve),Ze=function(e){function t(){return Object(k.a)(this,t),Object(N.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.loadOrder(this.props.id)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,!this.props.loaded&&r.a.createElement(Se.a,null),this.props.loaded&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"section-spacing"},r.a.createElement(Oe.a,{container:!0},r.a.createElement(Oe.a,{item:!0,xs:2},r.a.createElement(Qe.a,{color:"inherit",to:"/orders",component:re.a,startIcon:r.a.createElement(Ye.a,null)},"Back")))),r.a.createElement("div",{class:"section-spacing"},r.a.createElement(xe,null,"Order details"),r.a.createElement(Oe.a,{container:!0,spacing:1,mb:100},r.a.createElement(Oe.a,{item:!0,md:4,xs:5},"Name"),r.a.createElement(Oe.a,{item:!0,md:8,xs:6},this.props.order.detail.name),r.a.createElement(Oe.a,{item:!0,md:4,xs:5},"Description"),r.a.createElement(Oe.a,{item:!0,md:8,xs:6},this.props.order.detail.description),r.a.createElement(Oe.a,{item:!0,md:4,xs:5},"Status"),r.a.createElement(Oe.a,{item:!0,md:8,xs:6},this.props.order.detail.status))),r.a.createElement(Oe.a,{container:!0,className:this.props.classes.section},r.a.createElement(xe,null,"Order product details"),r.a.createElement(Te.a,{size:"small"},r.a.createElement(We.a,null,r.a.createElement(Fe.a,null,r.a.createElement(Be.a,null,"ID"),r.a.createElement(Be.a,null,"Amount"),r.a.createElement(Be.a,null,"Type"),r.a.createElement(Be.a,null,"Quantity"))),r.a.createElement(Le.a,null,this.props.order.products.map((function(e){return r.a.createElement(Fe.a,{key:e.id},r.a.createElement(Be.a,null,e.id),r.a.createElement(Be.a,null,e.amount),r.a.createElement(Be.a,null,e.type),r.a.createElement(Be.a,null,e.quantity))})))))))}}]),t}(r.a.Component),$e=Object(c.c)((function(e){return{order:e.page.order,loaded:e.page.orderLoaded}}),(function(e){return{loadOrder:function(t){return e(function(e){return function(t,a){t(m(!0)),fetch("/orders/load/"+e).then((function(e){return e.json()})).then((function(e){t({type:"page:setOrder",payload:e}),t(m(!1))})).catch((function(e){t(m(!1)),console.error("Failed to load order",e)}))}}(t))}}}))(Ze);function Ke(){var e=be(),t=Object(ce.f)().id;return r.a.createElement(we,{title:"Order Detail",icon:"shopping"},r.a.createElement(ve.a,{className:e.paper},r.a.createElement($e,{id:t,classes:e})))}function et(){return r.a.createElement("span",{className:"copyright-inner"},r.a.createElement(F.a,{variant:"body2",align:"center"},"Copyright \xa9 ",r.a.createElement(Q.a,{color:"inherit",href:"https://www.deloitte.nl"},"Deloitte")," ",(new Date).getFullYear(),"."))}var tt=function(){return window.innerWidth<500},at=function(e){function t(e){var a;Object(k.a)(this,t),(a=Object(N.a)(this,Object(D.a)(t).call(this,e))).handleDrawerOpen=function(){a.setOpen(!0)},a.handleDrawerClose=function(){a.setOpen(!1)};var n=tt();return a.state={isSmall:n,width:0,height:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(C.a)(a)),a}return Object(I.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),this.props.loadProfile()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){var e=tt();this.setState({width:window.innerWidth,height:window.innerHeight,isSmall:e}),e&&this.props.closeDrawer()}},{key:"setOpen",value:function(e){e?this.props.openDrawer():this.props.closeDrawer()}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.handleRouteChange()}},{key:"handleRouteChange",value:function(){tt()&&this.setOpen(!1)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(R.a,null),r.a.createElement(L.a,{position:"absolute",className:Object(P.a)(e.appBar,this.props.drawerOpen&&e.appBarShift)},r.a.createElement(B.a,{className:e.toolbar},r.a.createElement(A.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,className:Object(P.a)(e.menuButton,this.props.drawerOpen&&e.menuButtonHidden)},r.a.createElement(Y.a,null)),!this.state.isSmall&&"dashboard"===this.props.pageIcon&&r.a.createElement(H.a,{className:e.pageIcon}),!this.state.isSmall&&"shopping"===this.props.pageIcon&&r.a.createElement(M.a,{className:e.pageIcon}),!this.state.isSmall&&"profile"===this.props.pageIcon&&r.a.createElement(J.a,{className:e.pageIcon}),!this.state.isSmall&&"salesforce"===this.props.pageIcon&&r.a.createElement(q.a,{className:e.pageIcon}),r.a.createElement(F.a,{component:"h1",variant:"h6",color:"inherit",className:e.title},this.props.pageTitle))),r.a.createElement(T.a,{variant:this.state.isSmall?"temporary":"permanent",classes:{paper:Object(P.a)(e.drawerPaper,!this.props.drawerOpen&&e.drawerPaperClose)},open:this.props.drawerOpen,onClose:this.handleDrawerClose},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(A.a,{onClick:this.handleDrawerClose},r.a.createElement($.a,null))),r.a.createElement(z.a,null),r.a.createElement(W.a,null,r.a.createElement(oe,{classes:e})),r.a.createElement(z.a,null),r.a.createElement(W.a,null,r.a.createElement(ie,{classes:e}))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(ce.c,null,r.a.createElement(ce.a,{path:"/",exact:!0,component:Re}),r.a.createElement(ce.a,{path:"/orders/:id",component:Ke}),r.a.createElement(ce.a,{path:"/orders",component:_e}),r.a.createElement(ce.a,{path:"/profile",component:Ge}),r.a.createElement(ce.a,{path:"/return"}),r.a.createElement(ce.a,{component:Je})),r.a.createElement("div",{className:e.copyright},r.a.createElement(et,null))))}}]),t}(r.a.Component),nt=Object(c.c)((function(e){return{pageTitle:e.page.title,pageIcon:e.page.icon,profile:e.page.profile,drawerOpen:e.page.drawerOpen,location:e.router.location}}),(function(e){return{loadProfile:function(){return e((function(e,t){fetch("/auth/saml/profile").then((function(e){return e.json()})).then((function(t){e({type:"page:setProfile",payload:t})})).catch((function(e){console.error("Failed to load profile",e)}))}))},openDrawer:function(){return e({type:"page:openDrawer"})},closeDrawer:function(){return e({type:"page:closeDrawer"})}}}))(at),rt=(a(157),function(){var e=be();return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt,{classes:e}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ot=Object(j.a)(),it=function(e){var t=E(e),a="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d;return Object(s.e)(t,a(Object(s.a)(y.a,Object(l.a)(e),x)))}(ot);i.a.render(r.a.createElement(c.a,{store:it},r.a.createElement(p.a,{history:ot},r.a.createElement(rt,{history:ot}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},93:function(e,t,a){e.exports=a.p+"static/media/logo.9ce04195.png"},94:function(e,t,a){e.exports=a.p+"static/media/landscape_1.f2194b55.png"},95:function(e,t,a){e.exports=a.p+"static/media/rainbow2.65092f6c.png"}},[[114,1,2]]]);
//# sourceMappingURL=main.d1aaf79d.chunk.js.map