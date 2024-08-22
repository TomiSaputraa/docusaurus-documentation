"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3976],{619:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=n(4848),s=n(8453);const r={sidebar_position:1,title:"Intro"},t=void 0,o={id:"intro",title:"Intro",description:"Prequesite",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docusaurus-documentation/id/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Intro"},sidebar:"tutorialSidebar",next:{title:"React",permalink:"/docusaurus-documentation/id/docs/category/react"}},l={},u=[{value:"Prequesite",id:"prequesite",level:3},{value:"1. Persiapan Awal",id:"1-persiapan-awal",level:2},{value:"2. Membuat Proyek Docusaurus",id:"2-membuat-proyek-docusaurus",level:2},{value:"3. Navigasi ke Direktori Proyek",id:"3-navigasi-ke-direktori-proyek",level:2},{value:"4. Menjalankan Server Pengembangan Lokal",id:"4-menjalankan-server-pengembangan-lokal",level:2},{value:"5. Mengaktifkan Mode Gelap",id:"5-mengaktifkan-mode-gelap",level:2},{value:"6. Men-deploy ke GitHub Pages",id:"6-men-deploy-ke-github-pages",level:2},{value:"7. Hasil Akhir",id:"7-hasil-akhir",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h3,{id:"prequesite",children:"Prequesite"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"https://nodejs.org/en/download/",children:"Node.js"})," version 18.0 or above"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"1-persiapan-awal",children:"1. Persiapan Awal"}),"\n",(0,i.jsx)(a.p,{children:"Pastikan Anda sudah memiliki Node.js dan npm (Node Package Manager) yang terinstal di sistem Anda."}),"\n",(0,i.jsx)(a.h2,{id:"2-membuat-proyek-docusaurus",children:"2. Membuat Proyek Docusaurus"}),"\n",(0,i.jsx)(a.p,{children:"Buka terminal atau command prompt, lalu jalankan perintah berikut untuk membuat proyek Docusaurus:"}),"\n",(0,i.jsx)(a.p,{children:"Salin kode"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"npx create-docusaurus@latest my-website classic\n"})}),"\n",(0,i.jsx)(a.p,{children:"Ini akan membuat proyek Docusaurus baru di folder my-website dengan template classic."}),"\n",(0,i.jsx)(a.h2,{id:"3-navigasi-ke-direktori-proyek",children:"3. Navigasi ke Direktori Proyek"}),"\n",(0,i.jsx)(a.p,{children:"Masuk ke direktori proyek yang baru saja dibuat:"}),"\n",(0,i.jsx)(a.p,{children:"Salin kode"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"cd my-website\n"})}),"\n",(0,i.jsx)(a.h2,{id:"4-menjalankan-server-pengembangan-lokal",children:"4. Menjalankan Server Pengembangan Lokal"}),"\n",(0,i.jsx)(a.p,{children:"Jalankan server pengembangan lokal untuk melihat hasilnya di browser:"}),"\n",(0,i.jsx)(a.p,{children:"Salin kode"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Server akan berjalan di ",(0,i.jsx)(a.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," dan akan secara otomatis memuat ulang saat Anda membuat perubahan."]}),"\n",(0,i.jsx)(a.h2,{id:"5-mengaktifkan-mode-gelap",children:"5. Mengaktifkan Mode Gelap"}),"\n",(0,i.jsxs)(a.p,{children:["Buka file ",(0,i.jsx)(a.code,{children:"docusaurus.config.js"})," yang berada di root direktori proyek. Cari bagian themeConfig dan tambahkan konfigurasi berikut untuk mengaktifkan mode gelap:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"colorMode: {\n      defaultMode: 'light', // Default mode can be 'light' or 'dark'\n      disableSwitch: false, // Set to true if you don't want users to switch between modes\n      respectPrefersColorScheme: true, // Automatically switches between modes based on user\u2019s OS setting\n    },\n"})}),"\n",(0,i.jsx)(a.h2,{id:"6-men-deploy-ke-github-pages",children:"6. Men-deploy ke GitHub Pages"}),"\n",(0,i.jsx)(a.p,{children:"Setelah semua setup dan perubahan berhasil dilakukan kita bisa deploy ke github pages"}),"\n",(0,i.jsx)(a.p,{children:"Untuk mempublikasikan dokumentasi Anda di GitHub Pages:"}),"\n",(0,i.jsx)(a.p,{children:"Buat Repository di GitHub: Buat repositori baru di GitHub untuk menyimpan proyek ini."}),"\n",(0,i.jsx)(a.p,{children:"Install Plugin Docusaurus untuk Deploy:\nDi terminal, jalankan:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"npm install @docusaurus/preset-classic\n"})}),"\n",(0,i.jsx)(a.p,{children:"Konfigurasi docusaurus.config.js:\nTambahkan informasi repository ke file docusaurus.config.js:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-javascript",children:"module.exports = {\n  // ...konfigurasi lainnya\n  url: 'https://your-github-username.github.io',\n  baseUrl: '/your-repo-name/',\n  projectName: 'your-repo-name',\n  organizationName: 'your-github-username',\n  trailingSlash: false,\n  // ...konfigurasi lainnya\n};\n"})}),"\n",(0,i.jsx)(a.p,{children:"Build dan Deploy:\nJalankan perintah berikut untuk build dan deploy ke GitHub Pages:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"npm run build\nGIT_USER=your-github-username npm run deploy\n"})}),"\n",(0,i.jsx)(a.p,{children:"Docusaurus akan membangun situs dan secara otomatis mendorongnya ke branch gh-pages di repositori GitHub Anda."}),"\n",(0,i.jsx)(a.h2,{id:"7-hasil-akhir",children:"7. Hasil Akhir"}),"\n",(0,i.jsxs)(a.p,{children:["Setelah proses deploy selesai, Anda bisa mengunjungi situs GitHub Pages Anda di ",(0,i.jsx)(a.code,{children:"https://your-github-username.github.io/your-repo-name/"}),". Dokumentasi Anda akan terstruktur dengan sidebar, dan pengguna bisa beralih antara mode terang dan gelap berdasarkan preferensi mereka."]})]})}function c(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function t(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);