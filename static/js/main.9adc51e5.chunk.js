(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(5),n=a.n(i),r=(a(14),a(15),a(2)),o=a(4),l=a(6),d=a(7),b=a(9),j=a(8),u=a(0),h=function(e){var t=e.title,a=e.children;return Object(u.jsxs)("section",{className:"title",children:[t,a]})},O=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:"feedback_list",children:t.map((function(e){return Object(u.jsx)("li",{className:"feedback_item",children:Object(u.jsx)("button",{type:"submit",className:"btn",onClick:a,children:e[0].toUpperCase()+e.slice(1)})},e)}))})})},v=function(e){var t=e.good,a=e.neutral,c=e.bad,s=e.total,i=e.positivePercentage;return Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{className:"statistics_list",children:[Object(u.jsxs)("li",{className:"statistics_item",children:["Good: ",t]}),Object(u.jsxs)("li",{className:"statistics_item",children:["Neutral: ",a]}),Object(u.jsxs)("li",{className:"statistics_item",children:["Bad: ",c]}),Object(u.jsxs)("li",{className:"statistics_item",children:["Total: ",s]}),Object(u.jsxs)("li",{className:"statistics_item",children:["Positive feedback: ",i,"%"]})]})})},m=function(e){var t=e.message;return Object(u.jsx)("p",{className:"notification",children:t})},f=(a(17),function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){var a=t.target.textContent.toLowerCase();e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},a,e[a]+1))}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,a=t.good,c=t.neutral,s=t.bad;return Math.round(100*a/(a+c+s))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"visually_hidden",children:"Feedback"}),Object(u.jsx)(h,{title:"Please leave feedback",children:Object(u.jsx)(O,{options:Object.keys(this.state),onLeaveFeedback:this.leaveFeedback})}),Object(u.jsx)(h,{title:"Statistics",children:0===this.countTotalFeedback()?Object(u.jsx)(m,{message:"No feedback given"}):Object(u.jsx)(v,{good:t,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(c.Component)),x=f;n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9adc51e5.chunk.js.map