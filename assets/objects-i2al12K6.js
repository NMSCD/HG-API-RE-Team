import{u as g,a as v}from"./use-dark--yy2FtxV.js";import{c as h,a as t,h as $,g as f}from"./index-Bv0AtLjr.js";const k={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},i={xs:2,sm:4,md:8,lg:16,xl:24},b=h({name:"QSeparator",props:{...g,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const a=f(),o=v(e,a.proxy.$q),r=t((()=>!0===e.vertical?"vertical":"horizontal")),s=t((()=>` q-separator--${r.value}`)),n=t((()=>!1!==e.inset?`${s.value}-${k[e.inset]}`:"")),l=t((()=>`q-separator${s.value}${n.value}`+(void 0!==e.color?` bg-${e.color}`:"")+(!0===o.value?" q-separator--dark":""))),c=t((()=>{const t={};if(void 0!==e.size&&(t[!0===e.vertical?"width":"height"]=e.size),!1!==e.spaced){const a=!0===e.spaced?`${i.md}px`:e.spaced in i?`${i[e.spaced]}px`:e.spaced,o=!0===e.vertical?["Left","Right"]:["Top","Bottom"];t[`margin${o[0]}`]=t[`margin${o[1]}`]=a}return t}));return()=>$("hr",{class:l.value,style:c.value,"aria-orientation":r.value})}}),p=[{title:"Members",caption:"Who we are",icon:"group",link:"/members"},{title:"Details",caption:"What we do",icon:"list",link:"/details"},{title:"Projects",caption:"Resulting projects",icon:"code",link:"/projects"}];export{b as Q,p};
