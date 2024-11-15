const i=r=>{const t=new Date(r);if(isNaN(t.getTime()))throw new Error("Invalid date string provided.");const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0");return`${e}/${a}/${n} ${o}:${s}`};export{i as f};
//# sourceMappingURL=dateUtils-B3xnuPlA.js.map
