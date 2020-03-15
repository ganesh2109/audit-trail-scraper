(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,a,t){e.exports=t(155)},149:function(e,a){},152:function(e,a,t){},154:function(e,a,t){},155:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),s=t.n(o),c=t(9),l=t(36),i=t(88),d=t(47),p=function(e){return{type:"page:setOrderLoading",payload:e}},m={title:"Dashboard",icon:"dashboard",profile:{profilepic:"/images/avatar.png"},drawerOpen:!0,order:{},orderLoaded:!1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"page:setPageTitle":return Object.assign({},e,{title:a.payload});case"page:setPageIcon":return Object.assign({},e,{icon:a.payload});case"page:setProfile":return Object.assign({},e,{profile:a.payload});case"page:openDrawer":return Object.assign({},e,{drawerOpen:!0});case"page:closeDrawer":return Object.assign({},e,{drawerOpen:!1});case"page:setOrder":return Object.assign({},e,{order:a.payload});case"page:setOrderLoading":return Object.assign({},e,{orderLoaded:!a.payload});default:return e}},h={dashboardLoaded:!1,dashboardWonToday:0,dashboardWonTodayHash:"",dashboardCasesClosed:0,dashboardCasesClosedHash:"",dashboardRevenueToday:0,dashboardRevenueTodayHash:"",opportunityStatusRevenue:[],opportunityStatusRevenueHash:"",opportunityStatusRevenueLoaded:!1,opportunityStatusRevenueChart:[],orderProductCount:[],orderProductCountHash:"",orderProductCountLoaded:!1,orderProductCountChart:[],caseStatuses:[],caseStatusesHash:"",caseStatusesLoaded:!1,caseStatusesChart:[],orders:[],ordersHash:"",ordersLoaded:!1},E=function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"websocket:opportunity-status-revenue":return t.payload.hash===a.opportunityStatusRevenueHash?a:((e=[]).push(t.payload.data.data.entities),t.payload.data.data.values.forEach((function(a,t){e.push(a)})),Object.assign({},a,{opportunityStatusRevenue:e,opportunityStatusRevenueLoaded:!0,opportunityStatusRevenueHash:t.payload.hash,opportunityStatusRevenueChart:t.payload.data.meta}));case"websocket:order-product-count":return t.payload.hash===a.orderProductCountHash?a:((e=[]).push(t.payload.data.data.entities),t.payload.data.data.values.forEach((function(a,t){e.push(a)})),Object.assign({},a,{orderProductCount:e,orderProductCountLoaded:!0,orderProductCountHash:t.payload.hash,orderProductCountChart:t.payload.data.meta}));case"websocket:case-statuses":return t.payload.hash===a.caseStatusesHash?a:((e=[]).push(t.payload.data.data.entities),t.payload.data.data.values.forEach((function(a,t){e.push(a)})),Object.assign({},a,{caseStatuses:e,caseStatusesLoaded:!0,caseStatusesHash:t.payload.hash,caseStatusesChart:t.payload.data.meta}));case"websocket:orders":return t.payload.hash===a.ordersHash?a:Object.assign({},a,{orders:t.payload.data,ordersLoaded:!0,ordersHash:t.payload.hash});case"websocket:dashboard:wontoday":return t.payload.hash===a.dashboardWonTodayHash?a:Object.assign({},a,{dashboardWonToday:t.payload.data,dashboardLoaded:!0,dashboardWonTodayHash:t.payload.hash});case"websocket:dashboard:casesclosed":return t.payload.hash===a.dashboardCasesClosedHash?a:Object.assign({},a,{dashboardCasesClosed:t.payload.data,dashboardLoaded:!0,dashboardCasesClosedHash:t.payload.hash});case"websocket:dashboard:revenuetoday":return t.payload.hash===a.dashboardRevenueTodayHash?a:Object.assign({},a,{dashboardRevenueToday:t.payload.data,dashboardLoaded:!0,dashboardRevenueTodayHash:t.payload.hash});default:return a}},g=function(e){return Object(l.c)({router:Object(d.b)(e),page:u,websocket:E})},b=t(91),f=t.n(b),y=t(92),v=t.n(y),O=t(93),w=v()(),j=f()(w,"server/");var x=t(21),C=(t(152),t(12)),k=t(8),S=t(13),N=t(14),D=t(28),P=t(15),T=t(3),L=t(203),I=t(209),R=t(204),H=t(205),W=t(208),B=t(48),F=t(207),z=t(206),A=t(55),_=t.n(A),U=t(56),M=t.n(U),X=t(58),q=t.n(X),G=t(57),J=t.n(G),Q=t(202),V=t(102),Y=t.n(V),Z=t(103),$=t.n(Z),K=t(210),ee=t(190),ae=t(191),te=t(94),ne=t.n(te),re=t(26),oe=function(e){function a(){return Object(C.a)(this,a),Object(S.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(P.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K.a,{button:!0,component:re.a,to:"/",onClick:this.props.onSelected},r.a.createElement(ee.a,null,r.a.createElement(_.a,{className:this.props.classes.menuIcon})),r.a.createElement(ae.a,{primary:"Dashboard"})),r.a.createElement(K.a,{button:!0,component:re.a,to:"/orders",onClick:this.props.onSelected},r.a.createElement(ee.a,null,r.a.createElement(M.a,{className:this.props.classes.menuIcon})),r.a.createElement(ae.a,{primary:"Orders",onClick:this.props.onSelected})))}}]),a}(r.a.Component),se=function(e){function a(){return Object(C.a)(this,a),Object(S.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(P.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K.a,{button:!0,component:re.a,to:"/profile",onClick:this.props.onSelected},r.a.createElement(ee.a,null,r.a.createElement(J.a,{className:this.props.classes.menuIcon})),r.a.createElement(ae.a,{primary:"Profile"})),r.a.createElement(K.a,{button:!0,component:"a",href:"/return"},r.a.createElement(ee.a,null,r.a.createElement(q.a,{className:this.props.classes.menuIcon})),r.a.createElement(ae.a,{primary:"Salesforce"})),r.a.createElement(K.a,{button:!0,component:"a",href:"/auth/saml/logout"},r.a.createElement(ee.a,null,r.a.createElement(ne.a,{className:this.props.classes.menuIcon})),r.a.createElement(ae.a,{primary:"Logout"})))}}]),a}(r.a.Component),ce=t(23),le=t(17),ie=t(98),de=t(95),pe=t.n(de),me=t(96),ue=t.n(me),he=t(97),Ee=t.n(he);function ge(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function be(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ge(t,!0).forEach((function(a){Object(le.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ge(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var fe=function(){return Object(ie.a)((function(e){return{root:{display:"flex",background:"bottom center url("+ue.a+") #A8DDE0 no-repeat",backgroundSize:"100% 40%"},toolbar:{paddingRight:24},toolbarIcon:be({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar,{background:"#FFF center 10px url("+pe.a+") no-repeat",backgroundSize:"40% auto"}),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),color:"#A8DDE0",background:"bottom center url("+Ee.a+") #00A0E3",backgroundSize:"cover"},appBarShift:{marginLeft:200,width:"calc(100% - ".concat(200,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButtonHidden:{display:"none"},title:{flexGrow:1,marginLeft:e.spacing(1),color:"#035478",fontWeight:"bold"},menuButton:{color:"#035478",marginRight:6},avatar:{marginLeft:e.spacing(2),border:"2px solid #035478"},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:200,backgroundSize:"auto 30%",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(le.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto",overflowX:"hidden"},container:{paddingTop:e.spacing(6),paddingBottom:e.spacing(3),maxWidth:"1650px"},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",borderRadius:"20px",background:"rgba(255, 255, 255)"},paper1:{padding:e.spacing(2),display:"flex",flexDirection:"column",borderRadius:"20px",background:"rgba(255, 255, 255)",maxWidth:"1000px"},fixedHeight:{height:375},section:{marginBottom:e.spacing(2)},copyright:{color:"#000",paddingTop:e.spacing(2),paddingBottom:"50px",fontWeight:"bold",textAlign:"center"},menuIcon:{color:"#035478"},pageIcon:{color:"#035478"},cloudTitle:{color:"#FFDF01",fontSize:"50px",textAlign:"center",margin:"0px",marginBottom:"-10px"},cloudSubTitle:{fontSize:"20px",fontWeight:"bold"},avatarradius:{"border-radius":"50%",width:"200px",border:"2px solid #035478"},centeralign:{"text-align":"center",marginBottom:e.spacing(2)},dashboard:{borderRadius:"20px"}}}))()},ye=t(193),ve=t(157),Oe=t(192),we=Object(c.c)(null,(function(e){return{setPageTitle:function(a){e(function(e){return{type:"page:setPageTitle",payload:e}}(a))},setPageIcon:function(a){e(function(e){return{type:"page:setPageIcon",payload:e}}(a))}}}))((function(e){e.setPageTitle(e.title),e.setPageIcon(e.icon);var a=fe();return r.a.createElement(Oe.a,{className:a.container},e.children)}));function je(e){var a=e.component?e.component:"h2",t=e.variant?e.variant:"h6";return r.a.createElement(B.a,{component:a,variant:t,color:"primary",gutterBottom:!0,className:e.className},e.children)}function xe(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.a,{container:!0,justify:"center",spacing:2,direction:"row"},r.a.createElement(ye.a,{item:!0},r.a.createElement("p",{className:e.classes.cloudTitle},e.value),r.a.createElement(je,null,e.title))))}var Ce=t(40),ke=t(194),Se=function(e){function a(){return Object(C.a)(this,a),Object(S.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(P.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(je,null,"Order product count"),!this.props.loaded&&r.a.createElement(ke.a,null),this.props.loaded&&r.a.createElement(Ce.a,{width:this.props.chart.width,height:this.props.chart.height,chartType:this.props.chart.chartType,data:this.props.data,options:this.props.chart.options}))}}]),a}(r.a.Component),Ne=Object(c.c)((function(e){return{data:e.websocket.orderProductCount,loaded:e.websocket.orderProductCountLoaded,chart:e.websocket.orderProductCountChart}}))(Se),De=function(e){function a(){return Object(C.a)(this,a),Object(S.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(P.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(je,null,"Opportunity status & revenue"),!this.props.loaded&&r.a.createElement(ke.a,null),this.props.loaded&&r.a.createElement(Ce.a,{width:this.props.chart.width,height:this.props.chart.height,chartType:this.props.chart.chartType,loader:r.a.createElement("div",null,"Loading Chart"),data:this.props.data,options:this.props.chart.options}))}}]),a}(r.a.Component),Pe=Object(c.c)((function(e){return{data:e.websocket.opportunityStatusRevenue,loaded:e.websocket.opportunityStatusRevenueLoaded,chart:e.websocket.opportunityStatusRevenueChart}}))(De),Te=function(e){function a(){return Object(C.a)(this,a),Object(S.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(P.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(je,null,"Todays cases"),!this.props.loaded&&r.a.createElement(ke.a,null),this.props.loaded&&r.a.createElement(Ce.a,{width:this.props.chart.width,height:this.props.chart.height,chartType:this.props.chart.chartType,loader:r.a.createElement("div",null,"Loading Chart"),data:this.props.data,options:this.props.chart.options}))}}]),a}(r.a.Component),Le=Object(c.c)((function(e){return{data:e.websocket.caseStatuses,loaded:e.websocket.caseStatusesLoaded,chart:e.websocket.caseStatusesChart}}))(Te),Ie=t(195),Re=function(e){function a(){return Object(C.a)(this,a),Object(S.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(P.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=Object(T.a)(e.paper,e.fixedHeight);return r.a.createElement(we,{title:"Dashboard",icon:"dashboard"},r.a.createElement(ye.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(ye.a,{container:!0,spacing:4},r.a.createElement(ye.a,{item:!0,xs:12,md:12,lg:12},!this.props.loaded&&r.a.createElement(Ie.a,{variant:"query"}),this.props.loaded&&r.a.createElement(ye.a,{container:!0,spacing:2,alignContent:"center",alignItems:"center",justify:"center"},r.a.createElement(ye.a,{item:!0,xs:12,md:12,lg:4},r.a.createElement("div",{className:"cloud"},r.a.createElement("div",{className:"cloudshadow"}),r.a.createElement("div",{className:"cloud-content"},r.a.createElement(xe,{title:"Opportunities won today",classes:e,value:this.props.dashboardWonToday})))),r.a.createElement(ye.a,{item:!0,xs:12,md:12,lg:4},r.a.createElement("div",{className:"cloud"},r.a.createElement("div",{className:"cloudshadow"}),r.a.createElement("div",{className:"cloud-content"},r.a.createElement(xe,{title:"Cases closed today",classes:e,value:this.props.dashboardCasesClosed})))),r.a.createElement(ye.a,{item:!0,xs:12,md:12,lg:4},r.a.createElement("div",{className:"cloud"},r.a.createElement("div",{className:"cloudshadow"}),r.a.createElement("div",{className:"cloud-content"},r.a.createElement(xe,{title:"Revenue generated today",classes:e,value:this.props.dashboardRevenueToday})))))),r.a.createElement(ye.a,{item:!0,xs:12,md:12,lg:4},r.a.createElement("div",{className:"cloud-container"},r.a.createElement("div",{className:"cloud mini"},r.a.createElement("div",{className:"cloudshadow mini"})),r.a.createElement(ve.a,{className:a},r.a.createElement(Le,null)))),r.a.createElement(ye.a,{item:!0,xs:12,md:12,lg:4},r.a.createElement("div",{className:"cloud-container"},r.a.createElement("div",{className:"cloud mini"}),r.a.createElement(ve.a,{className:a},r.a.createElement(Pe,null)))),r.a.createElement(ye.a,{item:!0,xs:12,md:12,lg:4},r.a.createElement("div",{className:"cloud-container"},r.a.createElement("div",{className:"cloud mini"}),r.a.createElement(ve.a,{className:a},r.a.createElement(Ne,null)))))))}}]),a}(r.a.Component),He=Object(c.c)((function(e){return{loaded:e.websocket.dashboardLoaded,dashboardWonToday:e.websocket.dashboardWonToday,dashboardCasesClosed:e.websocket.dashboardCasesClosed,dashboardRevenueToday:e.websocket.dashboardRevenueToday}}))(Re);function We(){var e=fe();return r.a.createElement(He,{classes:e})}var Be=t(196),Fe=t(200),ze=t(199),Ae=t(197),_e=t(198),Ue=function(e){function a(){return Object(C.a)(this,a),Object(S.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(P.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(je,null,"Recent Orders"),r.a.createElement(Be.a,{size:"small"},r.a.createElement(Ae.a,null,r.a.createElement(_e.a,null,r.a.createElement(ze.a,null,"Name"),r.a.createElement(ze.a,null,"Description"),r.a.createElement(ze.a,null,"Status"))),r.a.createElement(Fe.a,null,this.props.data.map((function(e){return r.a.createElement(_e.a,{key:e.id},r.a.createElement(ze.a,null,r.a.createElement(re.a,{to:"/orders/"+e.sfid},e.name)),r.a.createElement(ze.a,null,e.description),r.a.createElement(ze.a,null,e.status))})))))}}]),a}(r.a.Component),Me=Object(c.c)((function(e){return{data:e.websocket.orders,loaded:e.websocket.ordersLoaded}}))(Ue);function Xe(){var e=fe();return r.a.createElement(we,{title:"Orders",icon:"shopping"},r.a.createElement(ve.a,{className:e.paper},r.a.createElement(Me,null)))}var qe=t(100),Ge=t.n(qe);function Je(e){return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(K.a,Object.assign({button:!0,component:"a"},e)))}var Qe=function(e){function a(){return Object(C.a)(this,a),Object(S.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(P.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.a,{container:!0},r.a.createElement(ye.a,{item:!0,lg:12,md:12,xs:12,className:this.props.classes.centeralign},r.a.createElement("img",{src:this.props.data.fullPhotoUrl,alt:"Avatar",className:this.props.classes.avatarradius}))),r.a.createElement(ye.a,{container:!0,justify:"center"},r.a.createElement(ve.a,{className:this.props.classes.paper1},r.a.createElement(ye.a,{container:!0},r.a.createElement(ye.a,{item:!0,lg:11,md:11,xs:10}),r.a.createElement(ye.a,{item:!0,lg:1,md:1,xs:2},r.a.createElement(K.a,null,r.a.createElement(ee.a,null,r.a.createElement(Je,{href:this.props.data.userediturl,target:"_blank"},r.a.createElement(Ge.a,{className:this.props.classes.menuIcon}))))),r.a.createElement(ye.a,{container:!0,className:this.props.classes.section},r.a.createElement(ye.a,{item:!0,lg:2}),r.a.createElement(ye.a,{item:!0,lg:5,md:6,xs:12,className:this.props.classes.section},r.a.createElement(je,{component:"h3",variant:"h6"},"User Details"),r.a.createElement(ye.a,{container:!0,spacing:1,mb:100},r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"Username"),r.a.createElement(ye.a,{item:!0,md:8,xs:8,lg:8},this.props.data.username),r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"Email"),r.a.createElement(ye.a,{item:!0,md:8,xs:8,lg:8},this.props.data.email),r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"Alias"),r.a.createElement(ye.a,{item:!0,md:8,xs:8,lg:8},this.props.data.alias),r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"Nickname"),r.a.createElement(ye.a,{item:!0,md:8,xs:8,lg:8},this.props.data.nickname),r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"Phone"),r.a.createElement(ye.a,{item:!0,md:8,xs:8,lg:8},this.props.data.phone),r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"Extension"),r.a.createElement(ye.a,{item:!0,md:8,xs:8,lg:8},this.props.data.extension),r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"Fax"),r.a.createElement(ye.a,{item:!0,md:8,xs:6,lg:8},this.props.data.fax),r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"Mobile"),r.a.createElement(ye.a,{item:!0,md:8,xs:8,lg:8},this.props.data.mobilephone))),r.a.createElement(ye.a,{item:!0,lg:4,md:6,xs:12,className:this.props.classes.section},r.a.createElement(je,{component:"h3",variant:"h6"},"Address"),r.a.createElement(ye.a,{container:!0,spacing:1},r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"Street"),r.a.createElement(ye.a,{item:!0,md:8,xs:8,lg:8},this.props.data.street),r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"City"),r.a.createElement(ye.a,{item:!0,md:8,xs:8,lg:8},this.props.data.city),r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"State"),r.a.createElement(ye.a,{item:!0,md:8,xs:8,lg:8},this.props.data.state),r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"Zipcode"),r.a.createElement(ye.a,{item:!0,md:8,xs:8,lg:8},this.props.data.postalcode),r.a.createElement(ye.a,{item:!0,md:4,xs:4,lg:4},"Country"),r.a.createElement(ye.a,{item:!0,md:8,xs:8,lg:8},this.props.data.country))),r.a.createElement(ye.a,{item:!0,lg:1}))))))}}]),a}(r.a.Component),Ve=Object(c.c)((function(e){return{data:e.page.profile,loaded:e.websocket.ordersLoaded}}))(Qe);function Ye(){var e=fe();return r.a.createElement(we,{title:"Profile",icon:"profile"},r.a.createElement(Ve,{classes:e}))}function Ze(){return r.a.createElement(we,{title:"Not found"},r.a.createElement("h1",null,"Not found"))}var $e=t(201),Ke=t(101),ea=t.n(Ke),aa=function(e){function a(){return Object(C.a)(this,a),Object(S.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(P.a)(a,e),Object(k.a)(a,[{key:"componentDidMount",value:function(){this.props.loadOrder(this.props.id)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,!this.props.loaded&&r.a.createElement(ke.a,null),this.props.loaded&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"section-spacing"},r.a.createElement(ye.a,{container:!0},r.a.createElement(ye.a,{item:!0,xs:2},r.a.createElement($e.a,{color:"inherit",to:"/orders",component:re.a,startIcon:r.a.createElement(ea.a,null)},"Back")))),r.a.createElement("div",{class:"section-spacing"},r.a.createElement(je,null,"Order details"),r.a.createElement(ye.a,{container:!0,spacing:1,mb:100},r.a.createElement(ye.a,{item:!0,md:4,xs:5},"Name"),r.a.createElement(ye.a,{item:!0,md:8,xs:6},this.props.order.detail.name),r.a.createElement(ye.a,{item:!0,md:4,xs:5},"Description"),r.a.createElement(ye.a,{item:!0,md:8,xs:6},this.props.order.detail.description),r.a.createElement(ye.a,{item:!0,md:4,xs:5},"Status"),r.a.createElement(ye.a,{item:!0,md:8,xs:6},this.props.order.detail.status))),r.a.createElement(ye.a,{container:!0,className:this.props.classes.section},r.a.createElement(je,null,"Order product details"),r.a.createElement(Be.a,{size:"small"},r.a.createElement(Ae.a,null,r.a.createElement(_e.a,null,r.a.createElement(ze.a,null,"ID"),r.a.createElement(ze.a,null,"Amount"),r.a.createElement(ze.a,null,"Type"),r.a.createElement(ze.a,null,"Quantity"))),r.a.createElement(Fe.a,null,this.props.order.products.map((function(e){return r.a.createElement(_e.a,{key:e.id},r.a.createElement(ze.a,null,e.id),r.a.createElement(ze.a,null,e.amount),r.a.createElement(ze.a,null,e.type),r.a.createElement(ze.a,null,e.quantity))})))))))}}]),a}(r.a.Component),ta=Object(c.c)((function(e){return{order:e.page.order,loaded:e.page.orderLoaded}}),(function(e){return{loadOrder:function(a){return e(function(e){return function(a,t){a(p(!0)),fetch("/orders/load/"+e).then((function(e){return e.json()})).then((function(e){a({type:"page:setOrder",payload:e}),a(p(!1))})).catch((function(e){a(p(!1)),console.error("Failed to load order",e)}))}}(a))}}}))(aa);function na(){var e=fe(),a=Object(ce.f)().id;return r.a.createElement(we,{title:"Order Detail",icon:"shopping"},r.a.createElement(ve.a,{className:e.paper},r.a.createElement(ta,{id:a,classes:e})))}function ra(){return r.a.createElement("span",{className:"copyright-inner"},r.a.createElement(B.a,{variant:"body2",align:"center"},"Copyright \xa9 ",r.a.createElement(Q.a,{color:"inherit",href:"https://www.deloitte.nl"},"Deloitte")," ",(new Date).getFullYear(),"."))}var oa=function(){return window.innerWidth<500},sa=function(e){function a(e){var t;Object(C.a)(this,a),(t=Object(S.a)(this,Object(N.a)(a).call(this,e))).handleDrawerOpen=function(){t.setOpen(!0)},t.handleDrawerClose=function(){t.setOpen(!1)};var n=oa();return t.state={isSmall:n,width:0,height:0},t.updateWindowDimensions=t.updateWindowDimensions.bind(Object(D.a)(t)),t}return Object(P.a)(a,e),Object(k.a)(a,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),this.props.loadProfile()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){var e=oa();this.setState({width:window.innerWidth,height:window.innerHeight,isSmall:e}),e&&this.props.closeDrawer()}},{key:"setOpen",value:function(e){e?this.props.openDrawer():this.props.closeDrawer()}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.handleRouteChange()}},{key:"handleRouteChange",value:function(){oa()&&this.setOpen(!1)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(L.a,null),r.a.createElement(R.a,{position:"absolute",className:Object(T.a)(e.appBar,this.props.drawerOpen&&e.appBarShift)},r.a.createElement(H.a,{className:e.toolbar},r.a.createElement(z.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,className:Object(T.a)(e.menuButton,this.props.drawerOpen&&e.menuButtonHidden)},r.a.createElement(Y.a,null)),!this.state.isSmall&&"dashboard"===this.props.pageIcon&&r.a.createElement(_.a,{className:e.pageIcon}),!this.state.isSmall&&"shopping"===this.props.pageIcon&&r.a.createElement(M.a,{className:e.pageIcon}),!this.state.isSmall&&"profile"===this.props.pageIcon&&r.a.createElement(J.a,{className:e.pageIcon}),!this.state.isSmall&&"salesforce"===this.props.pageIcon&&r.a.createElement(q.a,{className:e.pageIcon}),r.a.createElement(B.a,{component:"h1",variant:"h6",color:"inherit",className:e.title},this.props.pageTitle))),r.a.createElement(I.a,{variant:this.state.isSmall?"temporary":"permanent",classes:{paper:Object(T.a)(e.drawerPaper,!this.props.drawerOpen&&e.drawerPaperClose)},open:this.props.drawerOpen,onClose:this.handleDrawerClose},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(z.a,{onClick:this.handleDrawerClose},r.a.createElement($.a,null))),r.a.createElement(F.a,null),r.a.createElement(W.a,null,r.a.createElement(oe,{classes:e})),r.a.createElement(F.a,null),r.a.createElement(W.a,null,r.a.createElement(se,{classes:e}))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(ce.c,null,r.a.createElement(ce.a,{path:"/",exact:!0,component:We}),r.a.createElement(ce.a,{path:"/orders/:id",component:na}),r.a.createElement(ce.a,{path:"/orders",component:Xe}),r.a.createElement(ce.a,{path:"/profile",component:Ye}),r.a.createElement(ce.a,{path:"/return"}),r.a.createElement(ce.a,{component:Ze})),r.a.createElement("div",{className:e.copyright},r.a.createElement(ra,null))))}}]),a}(r.a.Component),ca=Object(c.c)((function(e){return{pageTitle:e.page.title,pageIcon:e.page.icon,profile:e.page.profile,drawerOpen:e.page.drawerOpen,location:e.router.location}}),(function(e){return{loadProfile:function(){return e((function(e,a){fetch("/auth/saml/profile").then((function(e){return e.json()})).then((function(a){e({type:"page:setProfile",payload:a})})).catch((function(e){console.error("Failed to load profile",e)}))}))},openDrawer:function(){return e({type:"page:openDrawer"})},closeDrawer:function(){return e({type:"page:closeDrawer"})}}}))(sa),la=(t(154),function(){var e=fe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ca,{classes:e}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ia=Object(x.a)(),da=function(e){var a=g(e),t="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d;return Object(l.e)(a,t(Object(l.a)(O.a,Object(i.a)(e),j)))}(ia);s.a.render(r.a.createElement(c.a,{store:da},r.a.createElement(d.a,{history:ia},r.a.createElement(la,{history:ia}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,a,t){e.exports=t.p+"static/media/logo.9ce04195.png"},96:function(e,a,t){e.exports=t.p+"static/media/landscape_1.f2194b55.png"},97:function(e,a,t){e.exports=t.p+"static/media/rainbow2.65092f6c.png"}},[[114,1,2]]]);
//# sourceMappingURL=main.aca27d84.chunk.js.map