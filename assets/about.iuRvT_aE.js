import{u as n}from"./fetch.ykSyK8nc.js";import{w as u,c as r,a as t,t as i,u as m,o as l}from"./entry.So7LbKBH.js";const p=t("h2",{class:"text-h2"},"About",-1),d=t("p",{class:"my-5"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, facere sunt. Perspiciatis sapiente ipsum, quod accusamus illo distinctio animi commodi.",-1),_=t("p",{class:"my-5"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, facere sunt. Perspiciatis sapiente ipsum, quod accusamus illo distinctio animi commodi.",-1),a="2024-01-11",v={__name:"about",async setup(h){let s,e;const{data:o}=([s,e]=u(()=>n(`/api/currency/${a}`,"$c6wy8KmN8o")),s=await s,e(),s),c=o.value.EUR.value;return(f,y)=>(l(),r("div",null,[p,d,_,t("p",null,"The USD to EUR exchange rate as of "+i(a)+" is "+i(m(c))+".",1)]))}};export{v as default};
