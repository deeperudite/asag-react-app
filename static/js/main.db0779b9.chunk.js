(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(15),c=n.n(r),u=n(3),o=n(4),s=n(6),i=n(5),m=n(7),h=n(16),d=n(2),b=n(17),p=n.n(b),E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=new FormData(e.target),a="",l=Object(d.a)(n);p()({url:"https://asag-api.herokuapp.com/",method:"post",data:t}).then(function(e){a=e.data.grade,console.log(e),l.setState({grade:a})}).catch(function(e){console.log(e)})},n.state={quest:"None",stu_ans:"None",ref_ans:"None",model:"None"},n.handleInputChange=n.handleInputChange.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(h.a)({},a,n))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Question: \xa0\xa0",l.a.createElement("input",{name:"quest",type:"text",checked:this.state.quest,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Reference Answer:\xa0\xa0",l.a.createElement("input",{name:"ref_ans",type:"text",checked:this.state.ref_ans,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Student Answer:\xa0\xa0",l.a.createElement("input",{name:"stu_ans",type:"text",checked:this.state.stu_ans,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Model:\xa0\xa0",l.a.createElement("input",{type:"radio",name:"model",value:"classifier",checked:"classifier"===this.state.model,onChange:this.handleInputChange})," Classifier",l.a.createElement("input",{type:"radio",name:"model",value:"regressor",checked:"regressor"===this.state.model,onChange:this.handleInputChange})," Regressor"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Get Grade \xa0\xa0",l.a.createElement("input",{value:"Submit",type:"submit"}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"container-fluid",name:"grade",value:""},"Grade : \xa0\xa0",this.state.grade))}}]),t}(l.a.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("center",null,l.a.createElement("h1",null," Short Answer Grading System "),l.a.createElement(E,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.db0779b9.chunk.js.map