import{u as z}from"./program-oWH1ZV6J.js";import{r as V,a as e,b as s,d as f,w as o,m as I,f as k,e as n,F as p,t as c,j as t,h,g as r,k as N,c as j,l as D,n as U}from"./index-TgSJX2LT.js";import"./index-pnyoYTwp.js";const q=t("th",null,null,-1),F=t("br",null,null,-1),O={style:{"min-width":"75px"}},A={class:"lesson"},E={key:0},J={class:"lesson_code"},M=t("br",null,null,-1),T=t("br",null,null,-1),G={class:"text-end"},H={key:0,class:"empty_lesson_slot"},K={__name:"ProgramPreviewDialog",props:{days:{type:Array,required:!0}},setup(u){const i=V(!1),_=["08:15 - 09:00","09:15 - 10:00","10:15 - 11:00","11:15 - 12:00","13:15 - 14:00","14:15 - 15:00","15:15 - 16:00","16:15 - 17:00"];return(m,l)=>{const v=e("v-btn"),g=e("v-table"),x=e("v-card-text"),w=e("v-divider"),P=e("v-spacer"),C=e("v-card-actions"),y=e("v-card"),L=e("v-dialog"),$=e("v-row");return s(),f($,{justify:"center"},{default:o(()=>[n(L,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=a=>i.value=a),persistent:"",width:"1024"},{activator:o(({props:a})=>[n(v,I(a,{variant:"outlined",color:"teal-accent-4",rounded:"lg"}),{default:o(()=>[k(" Show ")]),_:2},1040)]),default:o(()=>[n(y,{width:"95%",class:"mt-5 mb-10",elevation:"12"},{default:o(()=>[n(x,null,{default:o(()=>[n(g,null,{default:o(()=>[t("thead",null,[t("tr",null,[q,(s(),r(p,null,h(_,(a,b)=>t("th",{class:"hours text-center",key:b},[t("span",null,c(a.split("-")[0]),1),F,t("span",null,c(a.split("-")[1]),1)])),64))])]),t("tbody",null,[(s(!0),r(p,null,h(u.days,a=>(s(),r("tr",{key:a.id},[t("th",O,[t("span",null,c(a.day),1)]),(s(),r(p,null,h(_,(b,B)=>t("td",{key:B},[t("div",A,[(s(!0),r(p,null,h(a.lessons,d=>(s(),r(p,null,[d.hour===b?(s(),r("div",E,[t("span",J,c(d.lessonCode),1),t("span",null,c(d.lessonName),1),M,t("span",null,c(d.teacher),1),T,t("div",G,[t("span",null,c(d.classroom),1)])])):N("",!0)],64))),256)),a.lessons.some(d=>d.hour===b)?N("",!0):(s(),r("div",H))])])),64))]))),128))])]),_:1})]),_:1}),n(w),n(C,null,{default:o(()=>[n(P),n(v,{color:"primary",variant:"outlined",onClick:l[0]||(l[0]=a=>i.value=!1),rounded:""},{default:o(()=>[k(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},Q={class:"text-overline mb-1"},R={class:"ml-1"},W={class:"text-h6 mb-1"},X={__name:"ProgramCard",props:{program:{type:Object,required:!0}},setup(u){return(i,_)=>{const m=e("v-icon"),l=e("v-card-item"),v=e("v-card-actions"),g=e("v-card");return s(),f(g,{class:"mx-auto",width:"344",elevation:"5"},{default:o(()=>[n(l,null,{default:o(()=>[t("div",null,[t("div",Q,[n(m,{size:"20"},{default:o(()=>[k("mdi-book")]),_:1}),t("span",R,c(u.program.department),1)]),t("div",W,c(u.program.class),1)])]),_:1}),n(v,null,{default:o(()=>[n(K,{days:u.program.days},null,8,["days"])]),_:1})]),_:1})}}},S=200,et={__name:"Dashboard",setup(u){const i=j(()=>_.value.length===0),_=V([]),m=z();return D(()=>{const l={userId:JSON.parse(localStorage.getItem("user")).uid};m.getProgramListByUserId(l).then(()=>{_.value=m.getProgramList})}),U(()=>{m.cleareProgramList()}),(l,v)=>{const g=e("v-icon"),x=e("v-btn"),w=e("v-col"),P=e("v-row"),C=e("v-container");return i.value?(s(),f(x,{key:0,size:S,elevation:"12",color:"success",rounded:"",to:"/add-program"},{default:o(()=>[n(g,{size:S},{default:o(()=>[k("mdi-plus")]),_:1})]),_:1})):(s(),f(C,{key:1},{default:o(()=>[n(P,null,{default:o(()=>[(s(!0),r(p,null,h(_.value,y=>(s(),f(w,{key:y.id,cols:"auto"},{default:o(()=>[n(X,{program:y},null,8,["program"])]),_:2},1024))),128))]),_:1})]),_:1}))}}};export{et as default};