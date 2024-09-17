"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6204],{8844:(n,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var e=r(4848),t=r(8453);const i={sidebar_position:5},s=void 0,o={id:"dart/Basic/Standar Input Output",title:"Standar Input Output",description:"Dalam bahasa pemrograman Dart, Anda dapat mengambil input standar dari pengguna melalui konsol dengan menggunakan fungsi .readLineSync() . Untuk mengambil input dari konsol, Anda perlu mengimpor pustaka bernama dart:io dari pustaka Dart.",source:"@site/docs/dart/Basic/Standar Input Output.md",sourceDirName:"dart/Basic",slug:"/dart/Basic/Standar Input Output",permalink:"/docusaurus-documentation/docs/dart/Basic/Standar Input Output",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dart/Basic/Standar Input Output.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Operator",permalink:"/docusaurus-documentation/docs/dart/Basic/Operator"},next:{title:"React",permalink:"/docusaurus-documentation/docs/category/react"}},d={},u=[];function m(n){const a={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(a.p,{children:["Dalam bahasa pemrograman Dart, Anda dapat mengambil input standar dari pengguna melalui konsol dengan menggunakan fungsi .readLineSync() . Untuk mengambil input dari konsol, Anda perlu mengimpor pustaka bernama dart",":io"," dari pustaka Dart."]}),"\n",(0,e.jsx)(a.p,{children:"Tentang class Stdin:"}),"\n",(0,e.jsx)(a.p,{children:"Kelas ini memungkinkan pengguna untuk membaca data dari input standar baik secara sinkron maupun asinkron. Metode readLineSync() adalah salah satu metode yang digunakan untuk mengambil input dari pengguna. Lihat dokumen resmi untuk metode lainnya, dari sini."}),"\n",(0,e.jsx)(a.p,{children:"Mengambil string input dari pengguna:"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-jsx",children:'// importing dart:io file\r\nimport \'dart:io\';\r\n\r\nvoid main()\r\n{\r\n\tprint("Enter your name?");\r\n\t// Reading name of the Geek\r\n\tString? name = stdin.readLineSync(); // null safety in name string\r\n\r\n\t// Printing the name\r\n\tprint("Hello, $name! \\nWelcome to GeeksforGeeks!!"); //-> Hello, <name> Welcome to GeeksforGeeks!!\r\n}\n'})}),"\n",(0,e.jsx)(a.p,{children:"Mengambil nilai integer sebagai input:"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-jsx",children:'// Importing dart:io file\r\nimport \'dart:io\';\r\n\r\nvoid main()\r\n{\r\n\t// Asking for favourite number\r\n\tprint("Enter your favourite number:");\r\n\r\n// Scanning number\r\n\tint? n = int.parse(stdin.readLineSync()!);\r\n// Here ? and ! are for null safety\r\n\r\n\t// Printing that number\r\n\tprint("Your favourite number is $n");//-> Your favourite number is <number>\r\n}\n'})}),"\n",(0,e.jsxs)(a.p,{children:[(0,e.jsx)(a.strong,{children:"Keluaran Standar dalam Dart"}),":"]}),"\n",(0,e.jsx)(a.p,{children:"Dalam dart, ada dua cara untuk menampilkan output di konsol:"}),"\n",(0,e.jsxs)(a.ol,{children:["\n",(0,e.jsx)(a.li,{children:"Menggunakan pernyataan print."}),"\n",(0,e.jsx)(a.li,{children:"Menggunakan pernyataan stdout.write()."}),"\n"]}),"\n",(0,e.jsx)(a.p,{children:"Mencetak Output dengan dua cara berbeda:"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-jsx",children:'import \'dart:io\';\r\n\r\nvoid main()\r\n{\r\n\t// Printing in first way\r\n\tprint("Welcome to GeeksforGeeks! // printing from print statement");//-> Welcome to GeeksforGeeks!\r\n\r\n\t// Printing in second way\r\n\tstdout.write("Welcome to GeeksforGeeks! // printing from stdout.write()");\r\n}\n'})}),"\n",(0,e.jsxs)(a.blockquote,{children:["\n",(0,e.jsxs)(a.p,{children:["Catatan:\r\nPernyataan ",(0,e.jsx)(a.code,{children:"print()"})," membawa kursor ke baris berikutnya sementara stdout.write() tidak membawa kursor ke baris berikutnya, kursor tetap berada di baris yang sama.\r\nJika pernyataan print diganti dalam program di atas, maka:"]}),"\n"]}),"\n",(0,e.jsx)(a.p,{children:(0,e.jsx)(a.strong,{children:"Membuat jumlah program sederhana:"})}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-jsx",children:'import \'dart:io\';\r\n\r\nvoid main()\r\n{\r\n\tprint("-----------GeeksForGeeks-----------");\r\n\tprint("Enter first number");\r\n\tint? n1 = int.parse(stdin.readLineSync()!);\r\n\r\n\tprint("Enter second number");\r\n\tint? n2 = int.parse(stdin.readLineSync()!);\r\n\r\n\t// Adding them and printing them\r\n\tint sum = n1 + n2;\r\n\tprint("Sum is $sum"); //-> Sum is <sum>\r\n}\n'})})]})}function c(n={}){const{wrapper:a}={...(0,t.R)(),...n.components};return a?(0,e.jsx)(a,{...n,children:(0,e.jsx)(m,{...n})}):m(n)}},8453:(n,a,r)=>{r.d(a,{R:()=>s,x:()=>o});var e=r(6540);const t={},i=e.createContext(t);function s(n){const a=e.useContext(i);return e.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}function o(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),e.createElement(i.Provider,{value:a},n.children)}}}]);