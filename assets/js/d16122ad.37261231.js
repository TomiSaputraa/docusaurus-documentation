"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8082],{5092:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=a(4848),i=a(8453);const r={title:"Redux",description:"Redux basic and toolkit",slug:"/redux"},s=void 0,d={id:"react/State management/redux",title:"Redux",description:"Redux basic and toolkit",source:"@site/docs/react/State management/redux.md",sourceDirName:"react/State management",slug:"/redux",permalink:"/docusaurus-documentation/docs/redux",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/State management/redux.md",tags:[],version:"current",frontMatter:{title:"Redux",description:"Redux basic and toolkit",slug:"/redux"},sidebar:"tutorialSidebar",previous:{title:"Dasar",permalink:"/docusaurus-documentation/docs/react/dasar"},next:{title:"Arsips",permalink:"/docusaurus-documentation/docs/arsips/"}},u={},l=[{value:"Redux - state management",id:"redux---state-management",level:2},{value:"Redux Toolkit",id:"redux-toolkit",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"redux---state-management",children:"Redux - state management"}),"\n",(0,t.jsx)(n.p,{children:"Redux adalah pustaka manajemen state yang sering digunakan dengan React untuk membantu mengelola state aplikasi yang kompleks. Redux menyediakan cara yang terstruktur untuk mengelola state global di aplikasi React, memungkinkan Anda untuk lebih mudah melacak, debug, dan memelihara state."}),"\n",(0,t.jsx)(n.p,{children:"Konsep Utama dalam Redux"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Store: Tempat penyimpanan state aplikasi. Hanya ada satu store untuk setiap aplikasi Redux."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Action: Objek yang menggambarkan perubahan yang ingin Anda lakukan terhadap state. Action harus memiliki properti type dan dapat memiliki data tambahan."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Reducer: Fungsi murni yang menentukan bagaimana state berubah sebagai respons terhadap action. Reducer menerima state saat ini dan action, kemudian mengembalikan state baru."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Dispatch: Metode untuk mengirimkan action ke store untuk memicu perubahan state."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Selector: Fungsi untuk mengekstrak data dari state store."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://redux.js.org/introduction/getting-started",children:"Dokumentasi Redux"})}),"\n",(0,t.jsx)(n.h2,{id:"redux-toolkit",children:"Redux Toolkit"}),"\n",(0,t.jsx)(n.p,{children:"Redux Toolkit adalah toolkit resmi dari tim Redux yang membantu dalam membuat aplikasi Redux dengan cara yang lebih efisien dan lebih sedikit boilerplate. Redux Toolkit menyediakan beberapa utilitas yang memudahkan pembuatan store, reducer, dan actions dengan cara yang lebih deklaratif dan tersentralisasi."}),"\n",(0,t.jsx)(n.p,{children:"installasi :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"npm install @reduxjs/toolkit react-redux\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Membuat Slice dengan Redux Toolkit"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'Redux Toolkit memperkenalkan konsep "slice" yang menggabungkan actions dan reducers dalam satu tempat.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Mengonfigurasi Store"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Gunakan configureStore dari Redux Toolkit untuk membuat store."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Menghubungkan Store ke Aplikasi React"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Gunakan Provider dari react-redux untuk membuat store tersedia bagi komponen React."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Ringkasan"})," :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Membuat Slice"}),": Menggunakan createSlice untuk membuat reducer dan actions dalam satu tempat."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Membuat Store"}),": Menggunakan configureStore untuk menggabungkan semua reducer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Menghubungkan Store ke Aplikasi React"}),": Menggunakan Provider dari react-redux."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mengakses State dan Mengirimkan Actions"}),": Menggunakan useSelector dan useDispatch dari react-redux."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://redux-toolkit.js.org/introduction/getting-started",children:"Dokumentasi Redux toolkit"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>d});var t=a(6540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);