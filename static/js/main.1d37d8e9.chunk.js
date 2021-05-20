(this["webpackJsonptax-calculator"]=this["webpackJsonptax-calculator"]||[]).push([[0],{105:function(e,t,a){e.exports={layout:"Layout_layout__E-uks",content:"Layout_content__3i-cj"}},123:function(e,t,a){e.exports={footer:"Footer_footer__2jIF6"}},124:function(e,t,a){e.exports={pageHeader:"PageHeader_pageHeader__3cOwV"}},136:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var n,l,i=a(0),r=a(25),o=a.n(r),c=(a(136),a(137),a(214)),u=a(219),d=a(48),s=a(7),m=c.a.Header,b=u.a.Title,h=function(){return Object(s.jsxs)(m,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(s.jsx)(b,{level:4,style:{color:"#fff",marginBottom:0},children:"Tax Calculator"}),Object(s.jsx)(d.a,{children:Object(s.jsx)("a",{href:"https://github.com/Itsthatotherguy/tax-calculator",children:"View Repository"})})]})},j=a(123),y=a.n(j),x=c.a.Footer,f=function(){return Object(s.jsxs)(x,{className:y.a.footer,children:["Developed by"," ",Object(s.jsx)("a",{href:"https://github.com/itsthatotherguy",target:"_blank",rel:"noreferrer",children:"Christiaan van der Merwe"})]})},O=a(105),v=a.n(O),p=c.a.Content,T=function(e){var t=e.children;return Object(s.jsxs)(c.a,{className:v.a.layout,children:[Object(s.jsx)(h,{}),Object(s.jsx)(p,{className:v.a.content,children:t}),Object(s.jsx)(f,{children:"Footer"})]})},g=a(76),A=a(215),F=a(42),S=a(218),w=a(128),L=a(221),P=a(216),k=a(223),C=a(220),D=a(225),I=a(217),M=a(124),_=a.n(M),B=function(e){var t=e.title;return Object(s.jsx)(I.a,{title:t,className:_.a.pageHeader})},V=a(125),N=a(126),H=a(39),R=a.n(H),U=332,q=664,E=224,Y=[{lowerLimit:1,upperLimit:216200,rate:.18,additionalAmount:0},{lowerLimit:216201,upperLimit:337800,rate:.26,additionalAmount:38916},{lowerLimit:337801,upperLimit:467500,rate:.31,additionalAmount:70532},{lowerLimit:467501,upperLimit:613600,rate:.36,additionalAmount:110739},{lowerLimit:613601,upperLimit:782200,rate:.39,additionalAmount:163335},{lowerLimit:782200,upperLimit:1656600,rate:.41,additionalAmount:229089},{lowerLimit:782201,upperLimit:1/0,rate:.45,additionalAmount:587593}],J=a(69);!function(e){e.Primary="Primary",e.Secondary="Secondary",e.Tertiary="Tertiary"}(l||(l={}));var z=(n={},Object(J.a)(n,l.Primary,{type:l.Primary,amount:15714}),Object(J.a)(n,l.Secondary,{type:l.Secondary,amount:15714}),Object(J.a)(n,l.Tertiary,{type:l.Tertiary,amount:15714}),n),W=87300,G=135150,K=function(){function e(){Object(V.a)(this,e)}return Object(N.a)(e,null,[{key:"calculateTax",value:function(e){var t=e.monthlySalary,a=e.medicalAidDependents,n=e.dateOfBirth,l=this.calculateAge(n),i=12*t,r=this.isAboveTaxThreshold(i,l);if(!r)return{isAboveTaxThreshold:r};var o=this.calculateInitialTax(i),c=this.calculateTaxRebates(l),u=this.calculateMedicalAidTaxCredit(a),d=o-c.total-u,s=d/12,m=this.calculateUif(t),b=t-s-m;return d<0&&(d=0,s=0,b=t-m),{isAboveTaxThreshold:r,annualSalary:i,monthlySalary:t,initialTax:o,taxRebates:c,medicalTaxCredit:u,totalTaxLiability:d,monthlyPaye:s,monthlyUif:m,monthlyNettSalary:b}}},{key:"calculateUif",value:function(e){return e>=14872?148.72:.01*e}},{key:"calculateAge",value:function(e){return R()().diff(e,"years")}},{key:"isAboveTaxThreshold",value:function(e,t){return t<=65?e>W:t<=75?e>G:e>W}},{key:"calculateTaxRebates",value:function(e){var t=[],a=0,n=z[l.Primary];return a+=n.amount,t.push(n),e>65&&(a+=(n=z[l.Secondary]).amount,t.push(n)),e>75&&(a+=(n=z[l.Tertiary]).amount,t.push(n)),{rebates:t,total:a}}},{key:"calculateMedicalAidTaxCredit",value:function(e){if(e<1)return 0;var t=U;e<3?t=q:t+=E*(e-2);return t}},{key:"calculateInitialTax",value:function(e){var t=this.findTaxBracket(e);return(e-(t.lowerLimit-1))*t.rate+t.additionalAmount}},{key:"findTaxBracket",value:function(e){var t=Y.find((function(t){return e>=t.lowerLimit&&e<=t.upperLimit}));if(!t)throw new Error("Tax bracket not found.");return t}}]),e}(),Q=a(70),X=a.n(Q),Z=u.a.Text,$={dateOfBirth:R()(new Date),name:"",monthlySalary:"0.00",hasMedicalAid:!1,medicalAidDependents:0},ee=function(e){var t=e.onTaxCalculated,a=Object(i.useState)($.hasMedicalAid),n=Object(g.a)(a,2),l=n[0],r=n[1],o=S.a.useForm(),c=Object(g.a)(o,1)[0],u=function(){var e=c.getFieldsValue();c.setFieldsValue(Object(F.a)(Object(F.a)({},e),{},{medicalAidDependents:1}))},m=function(){var e=c.getFieldsValue();c.setFieldsValue(Object(F.a)(Object(F.a)({},e),{},{medicalAidDependents:0}))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(B,{title:"Your details"}),Object(s.jsx)(Z,{style:{margin:0},children:"Please complete this form and click the button below to calculate your tax."}),Object(s.jsx)(A.a,{}),Object(s.jsxs)(S.a,{layout:"vertical",form:c,initialValues:$,onFinish:function(e){var a=e.dateOfBirth,n=e.hasMedicalAid,l=e.medicalAidDependents,i=e.monthlySalary,r=e.name,o={dateOfBirth:a,monthlySalary:X()(i).value(),medicalAidDependents:n?l:0},c=K.calculateTax(o);t(Object(F.a)(Object(F.a)({},c),{},{name:r}))},onFinishFailed:function(e){w.b.error("The form contains invalid input. Please correct these and try again.")},children:[Object(s.jsx)(S.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please enter your name."}],children:Object(s.jsx)(L.a,{})}),Object(s.jsx)(S.a.Item,{label:"Date of Birth",name:"dateOfBirth",rules:[{required:!0,message:"Please enter your date of birth."}],children:Object(s.jsx)(P.a,{})}),Object(s.jsx)(S.a.Item,{label:"Monthly Salary",name:"monthlySalary",rules:[{required:!0},function(){return{validator:function(e,t){var a=X()(t).value();return a&&a>0?Promise.resolve():Promise.reject(new Error("The amount cannot be less or equal to 0.00"))}}}],extra:"This is your salary before tax and UIF is deducted.",children:Object(s.jsx)(L.a,{onBlur:function(){var e=c.getFieldsValue(),t=X()(e.monthlySalary).format("0,0.00");c.setFieldsValue(Object(F.a)(Object(F.a)({},e),{},{monthlySalary:t}))}})}),Object(s.jsx)(S.a.Item,{name:"hasMedicalAid",valuePropName:"checked",children:Object(s.jsx)(k.a,{onChange:function(){l?m():u(),r(!l)},children:"Do you have medical aid?"})}),l&&Object(s.jsx)(S.a.Item,{label:"Medical Aid Dependents",name:"medicalAidDependents",rules:[{required:!0,message:"Please enter number of dependents on your medical aid."}],extra:"Please enter the amount of dependents that you have on your medical aid, including yourself.",children:Object(s.jsx)(C.a,{min:1,step:1,precision:0})}),Object(s.jsx)(S.a.Item,{children:Object(s.jsxs)(D.b,{children:[Object(s.jsx)(d.a,{type:"primary",htmlType:"submit",children:"Calculate"}),Object(s.jsx)(d.a,{htmlType:"button",onClick:function(){c.resetFields(),r(!1),t(null)},children:"Reset"})]})})]})]})},te=a(222),ae=a(224),ne=function(e){var t=e.title,a=e.lineData.map((function(e){return Object(s.jsx)(ae.b.Item,{label:e.label,contentStyle:{textAlign:"end",fontWeight:e.bold?"bold":"normal"},children:X()(e.amount).format("0,0.00")})}));return Object(s.jsx)(ae.b,{title:t,bordered:!0,column:1,children:a})},le=function(e){var t,a=e.taxSummary,n=[{label:"Annual salary",amount:null===a||void 0===a?void 0:a.annualSalary},{label:"Tax before deductions",amount:null===a||void 0===a?void 0:a.initialTax},{label:"Tax rebate",amount:null===a||void 0===a||null===(t=a.taxRebates)||void 0===t?void 0:t.total},{label:"Medical tax credit",amount:null===a||void 0===a?void 0:a.medicalTaxCredit},{label:"Total tax payable",amount:null===a||void 0===a?void 0:a.totalTaxLiability,bold:!0}],l=[{label:"Monthly salary",amount:null===a||void 0===a?void 0:a.monthlySalary},{label:"Monthly PAYE",amount:null===a||void 0===a?void 0:a.monthlyPaye},{label:"Monthly UIF",amount:null===a||void 0===a?void 0:a.monthlyUif},{label:"Monthly nett salary",amount:null===a||void 0===a?void 0:a.monthlyNettSalary,bold:!0}];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(B,{title:"Your Tax Summary"}),(null===a||void 0===a?void 0:a.isAboveTaxThreshold)?Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(D.b,{direction:"vertical",size:"large",style:{width:"100%"},children:[Object(s.jsx)(ne,{title:"Here's what you'll pay",lineData:n}),Object(s.jsx)(ne,{title:"Here's what you'll receive",lineData:l})]})}):Object(s.jsx)(te.a,{subTitle:"You are under the tax threshold for your age and thus you aren't liable for any tax."})]})},ie=function(){var e=Object(i.useState)(null),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(ee,{onTaxCalculated:n}),a&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(A.a,{}),Object(s.jsx)(le,{taxSummary:a})]})]})};var re=function(){return Object(s.jsx)(T,{children:Object(s.jsx)(ie,{})})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,226)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),i(e),r(e)}))};o.a.render(Object(s.jsx)(re,{}),document.getElementById("root")),oe()}},[[212,1,2]]]);
//# sourceMappingURL=main.1d37d8e9.chunk.js.map