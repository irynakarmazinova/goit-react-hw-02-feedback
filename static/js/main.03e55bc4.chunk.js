(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),i=a.n(s),l=(a(14),a(15),a(2)),r=a(4),o=a(6),d=a(7),b=a(9),j=a(8),u=a(0),h=function(e){var t=e.title,a=e.children;return Object(u.jsxs)("section",{className:"title",children:[t,a]})},m=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:"feedback_list",children:t.map((function(e){return Object(u.jsx)("li",{className:"feedback_item",children:Object(u.jsx)("button",{type:"submit",className:"btn",onClick:a,name:e.name,children:e.label})},"button-".concat(e.name))}))})})},O=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{className:"statistics_list",children:[Object(u.jsxs)("li",{className:"statistics_item",children:["Good: ",t]}),Object(u.jsxs)("li",{className:"statistics_item",children:["Neutral: ",a]}),Object(u.jsxs)("li",{className:"statistics_item",children:["Bad: ",c]}),Object(u.jsxs)("li",{className:"statistics_item",children:["Total: ",n]}),Object(u.jsxs)("li",{className:"statistics_item",children:["Positive feedback: ",s,"%"]})]})})},v=function(e){var t=e.message;return Object(u.jsx)("p",{className:"notification",children:t})},f=(a(17),[{name:"good",label:"Good"},{name:"neutral",label:"Neutral"},{name:"bad",label:"Bad"}]),x=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(l.a)({},a,e[a]+1))}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,a=t.good,c=t.neutral,n=t.bad;return Math.round(100*a/(a+c+n))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"visually_hidden",children:"Feedback"}),Object(u.jsx)(h,{title:"Please leave feedback",children:Object(u.jsx)(m,{options:f,onLeaveFeedback:this.leaveFeedback})}),Object(u.jsx)(h,{title:"Statistics",children:0===this.countTotalFeedback()?Object(u.jsx)(v,{message:"No feedback given"}):Object(u.jsx)(O,{good:t,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(c.Component),k=x;i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.03e55bc4.chunk.js.map