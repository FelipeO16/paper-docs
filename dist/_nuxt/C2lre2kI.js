import{A as i,C as o,o as c,L as h,y as a,a5 as u,a6 as p,a4 as d,K as l,a2 as f}from"./G58y70Rf.js";const m="img",S=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,n=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=p(d(l().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return f(e,t.src)}return t.src});return(s,e)=>(c(),h(u(a(m)),{src:a(n),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};