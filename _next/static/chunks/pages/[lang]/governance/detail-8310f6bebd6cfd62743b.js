(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{826:function(e,i,t){"use strict";t.r(i),t.d(i,{__N_SSG:function(){return I},default:function(){return V}});var a=t(266),l=t(809),s=t.n(l),n=t(1163),d=t(6212),r=t(7294),o=t(7484),c=t.n(o),u=t(794),v=t(9212),p=t.n(v),_=t(8238),h=t(1186),m=t.n(h),x=t(5930),f=t(316),j=t(3915),g=t(1883),N=t(2538),D={src:"/_next/static/image/resources/images/proposal-bg.9b917fbb27c780e62985aa7754887b89.svg",height:228,width:220},b={src:"/_next/static/image/resources/images/right.e34b8caefb23bf5cbb04b3dd91528f8b.svg",height:12,width:16},k={src:"/_next/static/image/resources/images/error-red.cba3c2e5efdfb141cc09c946799e2e46.svg",height:12,width:12},W=t(6216),w=t(5675),L=t(5893);c().extend(p());var I=!0,V=function(){var e=d.ZP.t,i=function(i){return e(i,{ns:"governance"})},t=(0,n.useRouter)(),l=(0,g.C)((function(e){return e.burger.address})),o=(0,g.C)((function(e){return e.burger.walletName})),v=(0,r.useState)("-"),p=v[0],h=v[1],I=(0,r.useState)(),V=I[0],S=I[1],B=(0,r.useState)({status:"hide",hint:""}),y=B[0],F=B[1];(0,r.useEffect)((function(){A()}),[]),(0,r.useEffect)((function(){t.query.id&&l&&C()}),[t,i,l]);var A=function(){(0,N.f2)().then((function(e){var i,t,a,l=null!==(i=null===e||void 0===e||null===(t=e.stack)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.value)&&void 0!==i?i:null;h(l?(0,j.u)((0,j.Q)(l,10)):"-")}))},C=function(){(0,N._1)(t.query.id).then(function(){var e=(0,a.Z)(s().mark((function e(i){var a,n,d,r,o,v,p,h,m,x,f,j,g,D,b,k,W,w,L,I,V,B,y,F,A,C,E,R,T;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i||"HALT"!==i.state){e.next=17;break}return(A={expand:!1,id:t.query.id,for:new u.Z(0),against:new u.Z(0)}).title=(null===i||void 0===i||null===(a=i.stack)||void 0===a||null===(n=a[0])||void 0===n||null===(d=n.value)||void 0===d?void 0:d[1])&&_.u.base642utf8(i.stack[0].value[1].value),A.desc=(null===i||void 0===i||null===(r=i.stack)||void 0===r||null===(o=r[0])||void 0===o||null===(v=o.value)||void 0===v?void 0:v[2])&&_.u.base642utf8(i.stack[0].value[2].value),A.startDate=(null===i||void 0===i||null===(p=i.stack)||void 0===p||null===(h=p[0])||void 0===h||null===(m=h.value)||void 0===m?void 0:m[7])&&c()(parseInt(i.stack[0].value[7].value)).format("YYYY-MM-DD hh:mm"),A.endDate=(null===i||void 0===i||null===(x=i.stack)||void 0===x||null===(f=x[0])||void 0===f||null===(j=f.value)||void 0===j?void 0:j[8])&&c()(parseInt(i.stack[0].value[8].value)).format("YYYY-MM-DD hh:mm"),A.scripthash=(null===i||void 0===i||null===(g=i.stack)||void 0===g||null===(D=g[0])||void 0===D||null===(b=D.value)||void 0===b?void 0:b[3])&&"0x".concat(_.u.reverseHex(_.u.base642hex(i.stack[0].value[3].value))),A.method=(null===i||void 0===i||null===(k=i.stack)||void 0===k||null===(W=k[0])||void 0===W||null===(w=W.value)||void 0===w?void 0:w[4])&&_.u.base642utf8(i.stack[0].value[4].value),A.args=null===i||void 0===i||null===(L=i.stack)||void 0===L||null===(I=L[0])||void 0===I||null===(V=I.value)||void 0===V||null===(B=V[5])||void 0===B?void 0:B.value,A.for=new u.Z("23456"),A.against=new u.Z("12345"),e.next=13,(0,N.j0)(l,"".concat(A.id));case 13:C=e.sent,A.voteStatus=null===C||void 0===C||null===(y=C.stack)||void 0===y||null===(F=y[0])||void 0===F?void 0:F.value,c()().isSameOrAfter(c()(A.endDate))?null!==i&&void 0!==i&&null!==(E=i.stack)&&void 0!==E&&null!==(R=E[0])&&void 0!==R&&null!==(T=R.value)&&void 0!==T&&T[9]&&0===i.stack[0].value[9].value?A.status="Failed":A.status="Executed":A.status="Active",S(A);case 17:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}())},E=function(){var e=(0,a.Z)(s().mark((function e(a,n){var d,r,c,u,v;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,null===(d=f.f[o])||void 0===d?void 0:d.getNetwork();case 4:if("N3MainNet"===(c=e.sent)||"MainNet"===c||void 0!==t.query.dev){e.next=8;break}return F({status:"error",hint:i("networkErr")}),e.abrupt("return");case 8:return F({status:"pending",hint:i("pending")}),u=!1,(n&&"1"===a.voteStatus||!n&&"-1"===a.voteStatus)&&(u=!0),e.next=13,null===(r=f.f[o])||void 0===r?void 0:r.vote(l,"".concat(a.id),n,u);case 13:"success"===(v=e.sent).status?(C(),F({status:"success",hint:i("success"),jumpUrl:"http://explorer.onegate.space/transactionInfo/".concat(v.txid)})):"error"===v.status?F({status:"error",hint:i("failed")}):F({status:"hide",hint:""});case 15:case"end":return e.stop()}}),e)})));return function(i,t){return e.apply(this,arguments)}}();return(0,L.jsxs)("div",{className:m().wrapper,children:[(0,L.jsxs)("div",{className:m().proposalWrapper,children:[(0,L.jsx)(w.default,{className:m().proposalBgIcon,src:D,alt:"proposalBg"}),(0,L.jsx)("div",{className:m().title,children:i("proposal")}),(0,L.jsxs)("div",{className:m().breadCrumbs,children:[(0,L.jsx)("a",{className:m().jumpText,onClick:function(){return t.back()},children:i("allProposals")}),(0,L.jsx)("span",{children:" / "}),(0,L.jsx)("span",{className:m().deepen,children:i("proposalDetails")})]}),(0,L.jsx)("div",{className:m().proposalTitle,children:null===V||void 0===V?void 0:V.title}),(0,L.jsxs)("div",{className:m().bottomWrapper,children:[(0,L.jsxs)("div",{className:m().leftWrapper,children:[(0,L.jsxs)("div",{className:m().leftItemWrapper,children:[(0,L.jsxs)("div",{className:m().itemLine,children:[(0,L.jsx)("div",{children:i("status")}),(0,L.jsx)("div",{className:"Active"===(null===V||void 0===V?void 0:V.status)?m().active:"Failed"===(null===V||void 0===V?void 0:V.status)?m().failed:m().executed,children:null===V||void 0===V?void 0:V.status})]}),(0,L.jsxs)("div",{className:m().itemLine,children:[(0,L.jsx)("div",{children:i("proposal")}),(0,L.jsxs)("div",{children:["BIP #",null===V||void 0===V?void 0:V.id]})]}),(0,L.jsxs)("div",{className:m().itemLine,children:[(0,L.jsx)("div",{children:i("desc")}),(0,L.jsx)("div",{children:null===V||void 0===V?void 0:V.desc})]})]}),(0,L.jsxs)("div",{className:m().leftItemWrapper,children:[(0,L.jsx)("div",{className:m().itemLine2,children:"Execution Object"}),(0,L.jsxs)("div",{className:m().itemLine,children:[(0,L.jsx)("div",{children:"ScriptHash"}),(0,L.jsx)("div",{className:m().exeValue,children:null===V||void 0===V?void 0:V.scripthash})]}),(0,L.jsxs)("div",{className:m().itemLine,children:[(0,L.jsx)("div",{children:"Method"}),(0,L.jsx)("div",{className:m().exeValue,children:null===V||void 0===V?void 0:V.method})]}),(0,L.jsxs)("div",{className:m().itemLine,children:[(0,L.jsx)("div",{children:"Args"}),null!==V&&void 0!==V&&V.args?(0,L.jsx)("div",{className:m().exeValue2,children:null!==V&&void 0!==V&&V.args?JSON.stringify(V.args):""}):null]})]})]}),(0,L.jsxs)("div",{className:m().rightWrapper,children:[(0,L.jsxs)("div",{className:m().rightItemWrapper,children:[(0,L.jsxs)("div",{className:m().itemLineRight,children:[(0,L.jsx)("div",{children:i("totalVotes")}),(0,L.jsx)("div",{children:p})]}),(0,L.jsxs)("div",{className:m().itemLineRight,children:[(0,L.jsx)("div",{children:i("voteStatus")}),(0,L.jsx)("div",{className:"1"===(null===V||void 0===V?void 0:V.voteStatus)?m().for:"-1"===(null===V||void 0===V?void 0:V.voteStatus)?m().against:m().unvoted,children:"1"===(null===V||void 0===V?void 0:V.voteStatus)?i("for"):"-1"===(null===V||void 0===V?void 0:V.voteStatus)?i("against"):i("unvoted")})]}),(0,L.jsxs)("div",{className:m().proposalItemWrapper,children:[(0,L.jsxs)("div",{className:m().vsWrapper,children:[(0,L.jsxs)("div",{className:m().flex,children:[(0,L.jsx)("div",{children:i("for")}),(0,L.jsx)("div",{children:(0,j.u)(null===V||void 0===V?void 0:V.for.toString())})]}),(0,L.jsx)("div",{className:m().proposalItemVoteVsGray,children:(0,L.jsx)("div",{className:m().proposalItemVoteForYellow,style:{width:"".concat(null===V||void 0===V?void 0:V.for.dividedBy(null===V||void 0===V?void 0:V.for.plus(null===V||void 0===V?void 0:V.against)).times(100).toString(),"%")}})})]}),(0,L.jsxs)("button",{className:"".concat(m().forBtn," ").concat("Active"!==(null===V||void 0===V?void 0:V.status)?m().disabled:""),disabled:"Active"!==(null===V||void 0===V?void 0:V.status),onClick:function(){return E(V,!0)},children:["1"===(null===V||void 0===V?void 0:V.voteStatus)&&(0,L.jsx)(w.default,{className:m().marginRight5,src:W.Z,alt:"rightBlack"}),(0,L.jsx)("span",{children:i("for")})]})]}),(0,L.jsxs)("div",{className:m().proposalItemWrapper,children:[(0,L.jsxs)("div",{className:m().vsWrapper,children:[(0,L.jsxs)("div",{className:m().flex,children:[(0,L.jsx)("div",{children:i("against")}),(0,L.jsx)("div",{children:(0,j.u)(null===V||void 0===V?void 0:V.against.toString())})]}),(0,L.jsx)("div",{className:m().proposalItemVoteVsGray,children:(0,L.jsx)("div",{className:m().proposalItemVoteForPurple,style:{width:"".concat(null===V||void 0===V?void 0:V.against.dividedBy(null===V||void 0===V?void 0:V.for.plus(null===V||void 0===V?void 0:V.against)).times(100).toString(),"%")}})})]}),(0,L.jsxs)("button",{className:"".concat(m().againstBtn," ").concat("Active"!==(null===V||void 0===V?void 0:V.status)?m().disabled:""),disabled:"Active"!==(null===V||void 0===V?void 0:V.status),onClick:function(){return E(V,!1)},children:["-1"===(null===V||void 0===V?void 0:V.voteStatus)&&(0,L.jsx)(w.default,{className:m().marginRight5,src:W.Z,alt:"rightBlack"}),(0,L.jsx)("span",{children:i("against")})]})]})]}),(0,L.jsxs)("div",{className:m().rightBottomItemWrapper,children:[(0,L.jsx)("div",{className:m().historyTitle,children:"History"}),(null===V||void 0===V?void 0:V.status)&&(0,L.jsxs)("div",{children:[(0,L.jsxs)("div",{className:m().flexRow,children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("div",{className:"".concat(m().circle," ").concat("Active"===(null===V||void 0===V?void 0:V.status)?m().during:m().passed),children:"Active"===(null===V||void 0===V?void 0:V.status)?"1":(0,L.jsx)(w.default,{src:b,alt:"right"})}),(0,L.jsx)("div",{className:"".concat(m().connectLine," ").concat("Active"!==(null===V||void 0===V?void 0:V.status)?m().passedLine:"")})]}),(0,L.jsxs)("div",{className:m().timeLineTextWrapper,children:[(0,L.jsx)("div",{className:"Active"===(null===V||void 0===V?void 0:V.status)?m().black:m().for,children:i("active")}),(0,L.jsx)("div",{className:"Active"===(null===V||void 0===V?void 0:V.status)?m().black:m().for,children:null===V||void 0===V?void 0:V.startDate})]})]}),(0,L.jsxs)("div",{className:m().flexRow,children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("div",{className:"".concat(m().circle," ").concat("Executed"===(null===V||void 0===V?void 0:V.status)?m().passed:""," ").concat("Failed"===(null===V||void 0===V?void 0:V.status)?m().failedCircle:""),children:"Active"===(null===V||void 0===V?void 0:V.status)?"2":"Failed"===(null===V||void 0===V?void 0:V.status)?(0,L.jsx)(w.default,{src:k,alt:"error"}):(0,L.jsx)(w.default,{src:b,alt:"right"})}),(0,L.jsx)("div",{className:"".concat(m().connectLineShort," ").concat("Executed"===(null===V||void 0===V?void 0:V.status)?m().passedLine:""," ").concat("Failed"===(null===V||void 0===V?void 0:V.status)?m().failedLine:"")})]}),(0,L.jsxs)("div",{className:m().timeLineTextWrapper,children:[(0,L.jsx)("div",{className:"Active"===(null===V||void 0===V?void 0:V.status)?m().black:"Executed"===(null===V||void 0===V?void 0:V.status)?m().for:m().failed,children:"Failed"===(null===V||void 0===V?void 0:V.status)?"Failed":"Executed"}),(0,L.jsx)("div",{className:"Active"===(null===V||void 0===V?void 0:V.status)?m().black:"Executed"===(null===V||void 0===V?void 0:V.status)?m().for:m().failed,children:null===V||void 0===V?void 0:V.endDate})]})]})]})]})]})]})]}),"hide"!==y.status&&(0,L.jsx)(x.Z,{title:i("vote"),status:y.status,hint:y.hint,jumpUrl:y.jumpUrl,onCancel:function(){return F({status:"hide",hint:""})}})]})}},558:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/governance/detail",function(){return t(826)}])},1186:function(e){e.exports={wrapper:"Detail_wrapper__2VFaO",proposalWrapper:"Detail_proposalWrapper__2FDER",proposalBgIcon:"Detail_proposalBgIcon__1mUXP",title:"Detail_title__2axVX",breadCrumbs:"Detail_breadCrumbs__1VF69",jumpText:"Detail_jumpText__PCdTF",deepen:"Detail_deepen__19A5x",proposalTitle:"Detail_proposalTitle__1-Yb_",bottomWrapper:"Detail_bottomWrapper__2Pncy",leftWrapper:"Detail_leftWrapper__2uP7p",itemLine:"Detail_itemLine__Sv5Mc",itemLine2:"Detail_itemLine2__1KXvU",exeValue:"Detail_exeValue__3RFwG",exeValue2:"Detail_exeValue2__2F_ZJ",rightWrapper:"Detail_rightWrapper__2cBz3",leftItemWrapper:"Detail_leftItemWrapper__89z2d",rightItemWrapper:"Detail_rightItemWrapper__1Iedd",itemLineRight:"Detail_itemLineRight__1yoEy",proposalItemWrapper:"Detail_proposalItemWrapper__mTaWZ",flex:"Detail_flex__2tfLz",proposalItemVoteVsGray:"Detail_proposalItemVoteVsGray__As7wU",proposalItemVoteForYellow:"Detail_proposalItemVoteForYellow__1WhzV",proposalItemVoteForPurple:"Detail_proposalItemVoteForPurple__2l8wU",vsWrapper:"Detail_vsWrapper__t5ucz",forBtn:"Detail_forBtn__UWV6g",againstBtn:"Detail_againstBtn__2VMZs",rightBottomItemWrapper:"Detail_rightBottomItemWrapper__1VKGZ",connectLine:"Detail_connectLine__1B1uY",connectLineShort:"Detail_connectLineShort__3RKaO",passedLine:"Detail_passedLine__3guOZ",failedLine:"Detail_failedLine__3e89b",circle:"Detail_circle__rOhD5",black:"Detail_black__3BkMX",during:"Detail_during__3_Cbd",passed:"Detail_passed__iF-rz",failedCircle:"Detail_failedCircle__12us5",flexRow:"Detail_flexRow__3MnSo",timeLineTextWrapper:"Detail_timeLineTextWrapper__2BHY3",active:"Detail_active__16dU-",failed:"Detail_failed__1XrCB",executed:"Detail_executed__3NJWQ",for:"Detail_for__3Mf6t",against:"Detail_against__1tYvw",unvoted:"Detail_unvoted__3-4-J",disabled:"Detail_disabled__1n22l",marginRight5:"Detail_marginRight5__1Q8Wx"}}},function(e){e.O(0,[741,794,538,905,774,888,179],(function(){return i=558,e(e.s=i);var i}));var i=e.O();_N_E=i}]);