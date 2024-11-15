import{r as i,j as n,M as P}from"./index-CivGSquN.js";import{e as _}from"./axiosContest-a7qLFL0E.js";import{g as O}from"./axiosMachine-BVJLXleH.js";const H=({onContestAdded:T})=>{const[u,p]=i.useState({name:"",description:"",startTime:"",endTime:"",machines:[{id:"",name:""}],contestExp:100}),[D,A]=i.useState(!1),[F,j]=i.useState([]),[g,m]=i.useState({}),[h,c]=i.useState({}),[E,d]=i.useState(null),v=i.useRef(null),{name:b,description:y,contestExp:w,startTime:C,endTime:M,machines:r}=u,L=()=>{const t=document.getElementById("description");t&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)};i.useEffect(()=>{L()},[y]),i.useEffect(()=>{(async()=>{try{const e=await O();if(Array.isArray(e.machines)&&typeof e.machines[0]=="object"&&"name"in e.machines[0]&&"_id"in e.machines[0]){const a=e.machines.map(s=>({id:s._id,name:s.name}));j(a)}else Array.isArray(e.machines)&&typeof e.machines[0]=="string"?(console.warn("Machines are received as strings. Expected objects with _id and name."),j([])):(console.error("Unexpected format for machines:",e.machines),j([]))}catch(e){console.error("Error fetching machines:",e),j([])}})()},[]);const f=(t,e)=>{const{name:a,value:s}=t.target;if(a.startsWith("machine-")&&typeof e=="number"){const o=[...r];if(o[e]={id:"",name:s},p({...u,machines:o}),s){const l=F.filter(S=>S.name.toLowerCase().includes(s.toLowerCase()));m(S=>({...S,[e]:l}))}else m(l=>({...l,[e]:[]}));d(e)}else p({...u,[a]:a==="contestExp"?Number(s):s})},$=t=>{if(d(t),r[t].name){const e=F.filter(a=>a.name.toLowerCase().includes(r[t].name.toLowerCase()));m(a=>({...a,[t]:e}))}},N=()=>{p({...u,machines:[...r,{id:"",name:""}]})},k=t=>{const e=r.filter((a,s)=>s!==t);p({...u,machines:e}),m(a=>{const s={...a};return delete s[t],s}),c(a=>{const s={...a};return delete s[t],s}),d(null)},x=(t,e)=>{const a=[...r];a[t]={id:e.id,name:e.name},p({...u,machines:a}),m(s=>({...s,[t]:[]})),c(s=>({...s,[t]:-1})),d(null)},R=(t,e)=>{const a=g[e]||[];t.key==="ArrowDown"?(t.preventDefault(),c(s=>({...s,[e]:(s[e]||-1)+1}))):t.key==="ArrowUp"?(t.preventDefault(),c(s=>({...s,[e]:(s[e]||0)-1}))):t.key==="Enter"?h[e]>=0&&h[e]<a.length&&(t.preventDefault(),x(e,a[h[e]])):t.key==="Escape"&&(m(s=>({...s,[e]:[]})),c(s=>({...s,[e]:-1})),d(null))},q=async t=>{if(t.preventDefault(),r.length<1){alert("Please add at least 1 machine.");return}if(!b||!y||w<=0||!C||!M){alert("Please fill in all required fields.");return}for(let e=0;e<r.length;e++)if(!r[e].id){alert(`Please select a valid machine for field ${e+1}.`);return}A(!0);try{const e=new Date(C).toISOString(),a=new Date(M).toISOString(),s=r.map(l=>l.id),o=await _({name:b,description:y,startTime:e,endTime:a,machines:s,contestExp:w});alert("Contest registered successfully."),p({name:"",description:"",startTime:"",endTime:"",machines:[{id:"",name:""}],contestExp:0}),m({}),c({}),d(null),T&&T(o.contest)}catch(e){console.error("Error creating contest:",e),alert(e.msg||"Failed to register contest.")}finally{A(!1)}};return i.useEffect(()=>{const t=e=>{v.current&&!v.current.contains(e.target)&&(m({}),c({}),d(null))};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[]),n.jsxs("form",{className:"add-contest-form",onSubmit:q,ref:v,children:[n.jsx("h2",{children:"Register a New Contest"}),n.jsxs("div",{children:[n.jsxs("label",{htmlFor:"name",children:["Name",n.jsx("span",{style:{color:"red"},children:" *"}),":"]}),n.jsx("input",{type:"text",id:"name",name:"name",value:b,onChange:t=>f(t),placeholder:"Enter the contest name",required:!0})]}),n.jsxs("div",{children:[n.jsxs("label",{htmlFor:"description",children:["Description",n.jsx("span",{style:{color:"red"},children:" *"}),":"]}),n.jsx("textarea",{id:"description",name:"description",value:y,onChange:t=>f(t),placeholder:"Enter contest description",required:!0})]}),n.jsxs("div",{children:[n.jsxs("label",{htmlFor:"contestExp",children:["Experience Points (EXP)",n.jsx("span",{style:{color:"red"},children:" *"}),":"]}),n.jsx("input",{type:"number",id:"contestExp",name:"contestExp",value:w,onChange:t=>f(t),placeholder:"Enter the EXP",min:"100",required:!0})]}),n.jsxs("div",{children:[n.jsxs("label",{htmlFor:"startTime",children:["Start Time",n.jsx("span",{style:{color:"red"},children:" *"}),":"]}),n.jsx("input",{type:"datetime-local",id:"startTime",name:"startTime",value:C,onChange:t=>f(t),placeholder:"Enter the start time",required:!0})]}),n.jsxs("div",{children:[n.jsxs("label",{htmlFor:"endTime",children:["End Time",n.jsx("span",{style:{color:"red"},children:" *"}),":"]}),n.jsx("input",{type:"datetime-local",id:"endTime",name:"endTime",value:M,onChange:t=>f(t),placeholder:"Enter the end time",required:!0})]}),n.jsxs("div",{children:[n.jsxs("label",{children:["Machines",n.jsx("span",{style:{color:"red"},children:" *"}),":"]}),r.map((t,e)=>{var a;return n.jsxs("div",{className:"machine-field",children:[n.jsx("input",{type:"text",name:`machine-${e}`,value:t.name,onChange:s=>f(s,e),onFocus:()=>$(e),onKeyDown:s=>R(s,e),placeholder:`Machine ${e+1}`,autoComplete:"off",required:!0,"aria-autocomplete":"list","aria-controls":`suggestions-${e}`,"aria-expanded":E===e&&((a=g[e])==null?void 0:a.length)>0,role:"combobox","aria-haspopup":"listbox","aria-activedescendant":h[e]>=0?`suggestion-${e}-${h[e]}`:void 0}),r.length>1&&n.jsx("button",{type:"button",onClick:()=>k(e),children:"Delete"}),E===e&&g[e]&&g[e].length>0?n.jsx("ul",{className:"suggestions-list",id:`suggestions-${e}`,role:"listbox",children:g[e].map((s,o)=>n.jsx("li",{id:`suggestion-${e}-${o}`,className:h[e]===o?"active":"",onMouseDown:()=>x(e,s),onMouseEnter:()=>c(l=>({...l,[e]:o})),onMouseLeave:()=>c(l=>({...l,[e]:-1})),role:"option","aria-selected":h[e]===o,children:s.name},o))}):t.name&&E===e&&n.jsx("div",{className:"no-suggestions",children:"No matching machines found."})]},e)}),n.jsx("button",{type:"button",onClick:N,children:"Add Machine"})]}),n.jsx("button",{type:"submit",disabled:D,children:D?"Registering...":"Register Contest"})]})},X=()=>n.jsx(P,{children:n.jsx(H,{onContestAdded:()=>{}})});export{X as default};
//# sourceMappingURL=ContestRegisterPage-CYGLFeoM.js.map
