import{u as w}from"./auth-fQVGNlOk.js";import{r as y,u as V,c as C,o as S,a as o,b as c,d as B,w as e,e as t,f as i,t as I,g as L,h as N,F as P,i as T,R as A}from"./index-TgSJX2LT.js";import"./index-pnyoYTwp.js";const E={__name:"HomeLayout",setup(D){const l=y(null),d=w(),m=()=>{d.logout()},n=V(),_=C(()=>n.global.current.value.dark?"mdi-weather-night":"mdi-weather-sunny"),p=()=>{n.global.name.value=n.global.current.value.dark?"light":"dark",localStorage.setItem("theme",n.global.name.value)};S(()=>{n.global.name.value=localStorage.getItem("theme")||"light"});const v=[{icon:"mdi-view-dashboard",title:"Dashboard",to:"/dashboard"},{icon:"mdi-plus-circle",title:"Add New Program",to:"/add-program"},{icon:"mdi-account",title:"Profile",to:"/profile"}];return(F,r)=>{const u=o("v-icon"),s=o("v-btn"),g=o("v-app-bar"),f=o("v-list-item"),h=o("v-list"),b=o("v-navigation-drawer"),x=o("v-main"),k=o("v-layout");return c(),B(k,{class:"rounded rounded-md"},{default:e(()=>[t(g,{title:"Lesson Program Master"},{prepend:e(()=>[t(s,{onClick:r[0]||(r[0]=a=>l.value=!l.value),icon:""},{default:e(()=>[t(u,null,{default:e(()=>[i("mdi-menu")]),_:1})]),_:1})]),append:e(()=>[t(s,{class:"text-none text-subtitle-1 mr-2",color:"#5865f2",variant:"flat",onClick:p,icon:""},{default:e(()=>[t(u,null,{default:e(()=>[i(I(_.value),1)]),_:1})]),_:1}),t(s,{class:"text-none text-subtitle-1 mr-2",color:"#5865f2",variant:"flat",onClick:m,text:"","append-icon":"mdi-logout"},{default:e(()=>[i("Logout")]),_:1})]),_:1}),t(b,{modelValue:l.value,"onUpdate:modelValue":r[1]||(r[1]=a=>l.value=a)},{default:e(()=>[t(h,null,{default:e(()=>[(c(),L(P,null,N(v,a=>t(f,{key:a.title,to:a.to,title:a.title,"prepend-icon":a.icon,color:"primary",rounded:"xl"},null,8,["to","title","prepend-icon"])),64))]),_:1})]),_:1},8,["modelValue"]),t(x,{class:"d-flex align-center justify-center",style:{"min-height":"300px"}},{default:e(()=>[t(T(A))]),_:1})]),_:1})}}};export{E as default};
