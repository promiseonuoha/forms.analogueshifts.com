(()=>{var e={};e.id=626,e.ids=[626],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},8519:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>u,routeModule:()=>x,tree:()=>c}),s(5629),s(7829),s(5866);var r=s(3191),o=s(8716),n=s(7922),a=s.n(n),i=s(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let c=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5629)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\forms\\src\\app\\login\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,7829)),"C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\forms\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\tesli\\Desktop\\projects\\web\\ANALOGUESHIFTS\\forms\\src\\app\\login\\page.tsx"],p="/login/page",d={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3680:(e,t,s)=>{Promise.resolve().then(s.bind(s,1332)),Promise.resolve().then(s.bind(s,6893))},1332:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var r=s(326),o=s(4187),n=s(7577),a=s(434),i=s(6562),l=s(6627),c=s(5367),u=s(6716),p=s(3663);function d(){let{toast:e}=(0,l.pm)(),[t,d]=(0,n.useState)(""),[x,m]=(0,n.useState)(""),[f,g]=(0,n.useState)(!1),h=async()=>{let o=s(3369),n={method:"POST",url:"https://api.analogueshifts.com/api/login",headers:{"Content-Type":"application/json"},data:JSON.stringify({email:t,password:x})};g(!0);try{let t=await o.request(n),s=JSON.stringify({...t.data.data.user,token:t.data.data.token});i.Z.set("analogueshifts",s,{expires:.5}),e({variant:"default",title:"Login Successful",description:"Reirecting you...",style:{backgroundColor:"green",color:"white"}}),window.location.href="/forms"}catch(t){g(!1),e({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem with your request.",action:r.jsx(c.gD,{altText:"Try again",onClick:h,children:"Try again"})})}};return(0,r.jsxs)("main",{className:"w-full h-max min-h-screen mx-auto flex justify-center items-center px-5 py-10",children:[f&&r.jsx(p.Z,{}),r.jsx("section",{className:"max-w-full lg:w-[1000px] md:w-[800px]  flex justify-center items-center",children:(0,r.jsxs)("div",{className:"lg:w-[450px] md:w-[350px] flex flex-col items-center",children:[r.jsx(o.Z,{}),(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h()},className:"pt-11 w-full flex flex-col",children:[r.jsx("p",{className:"font-medium text-lg text-content-grayText pb-4",children:"Welcome!"}),r.jsx("p",{className:"font-bold text-3xl text-[#292929] pb-5",children:"Sign Into Your Account"}),r.jsx(u.Z,{icon:"fa-solid fa-envelope",type:"email",onChange:e=>d(e.target.value),label:"Email",placeholder:"Enter Email",value:t}),r.jsx(u.Z,{icon:"fa-solid fa-lock",type:"password",onChange:e=>m(e.target.value),label:"Password",placeholder:"Enter Password",value:x}),r.jsx("button",{type:"submit",className:"w-full bg-background-lightYellow font-semibold text-base text-[#FDFAEF] flex items-center justify-center hover:bg-background-lightYellow/80 duration-300 h-12 rounded-2xl ",children:"Login"}),r.jsx("div",{className:"w-full pt-4 flex justify-center items-center gap-1",children:r.jsx(a.default,{href:"https://www.analogueshifts.com/forgot-password",className:"font-normal cursor-pointer text-sm text-black/90",children:"Forgotten Password?"})}),(0,r.jsxs)("div",{className:"w-full pt-2 flex justify-center items-center gap-1",children:[r.jsx("p",{className:"font-normal text-sm text-black/90",children:"Don't have an account?"}),r.jsx(a.default,{href:"/register",className:"font-normal text-sm text-background-lightYellow",children:"Sign Up"})]})]})]})})]})}},5629:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(9510),o=s(9245),n=s(8570);let a=(0,n.createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\ANALOGUESHIFTS\forms\src\app\login\components\login-form.tsx`),{__esModule:i,$$typeof:l}=a;a.default;let c=(0,n.createProxy)(String.raw`C:\Users\tesli\Desktop\projects\web\ANALOGUESHIFTS\forms\src\app\login\components\login-form.tsx#default`),u=function(){return r.jsx(o.ZP,{children:r.jsx(c,{})})}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,470,621,404,523,701],()=>s(8519));module.exports=r})();