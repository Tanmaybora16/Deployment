import{c as r,j as e,l as m,s as y}from"./index-vL_DB2XE.js";import{C as g,a as f,b as v,d as j}from"./card-CewFea2d.js";import{a as k,A as b}from"./arrow-up-right-BJ0wIn1n.js";import{H as N,T as d}from"./Index-CGMb0cjd.js";import{W as M}from"./wallet-CG_oq9-I.js";import"./label-DGjhaXMn.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=r("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=r("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=r("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=r("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=r("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]),V=y("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function H({className:c,variant:o,...i}){return e.jsx("div",{className:m(V({variant:o}),c),...i})}const q=({transactions:c,showAll:o=!1,onDelete:i})=>{const l=o?c:c.slice(0,5),x=t=>({"Food & Dining":S,Shopping:p,Transportation:w,"Bills & Utilities":N,Entertainment:D,Salary:d,Freelance:M,Stocks:d,"Mutual Funds":d,Crypto:d,Coffee:C})[t]||p,u=t=>{const a=new Date(t),s=new Date,n=new Date(s);return n.setDate(n.getDate()-1),a.toDateString()===s.toDateString()?"Today":a.toDateString()===n.toDateString()?"Yesterday":a.toLocaleDateString()};return e.jsxs(g,{className:"animate-slide-up",children:[e.jsx(f,{children:e.jsx(v,{children:o?"All Transactions":"Recent Transactions"})}),e.jsx(j,{children:l.length===0?e.jsx("div",{className:"text-center py-8 text-muted-foreground",children:'No transactions yet. Click "Add Transaction" to get started.'}):e.jsx("div",{className:"space-y-4",children:l.map(t=>{const a=x(t.category),s=t.type==="expense",n=t.type==="income";return e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`p-2 rounded-full bg-secondary ${n?"text-success":s?"text-destructive":"text-primary"}`,children:e.jsx(a,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:t.category}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx(H,{variant:"secondary",className:"text-xs",children:t.paymentMethod}),e.jsx("span",{className:"text-xs text-muted-foreground",children:u(t.date)})]}),t.description&&e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:t.description})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center",children:[s?e.jsx(k,{className:"h-4 w-4 mr-1 text-destructive"}):e.jsx(b,{className:"h-4 w-4 mr-1 text-success"}),e.jsxs("span",{className:`font-semibold ${s?"text-destructive":"text-success"}`,children:[s?"-":"+","₹",t.amount.toLocaleString()]})]}),i&&e.jsx("button",{onClick:h=>{h.stopPropagation(),i(t.id)},className:"p-2 hover:bg-destructive/10 rounded-full transition-colors","aria-label":"Delete transaction",children:e.jsx(T,{className:"h-4 w-4 text-destructive"})})]})]},t.id)})})})]})};export{q as default};
