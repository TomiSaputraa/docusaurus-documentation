"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7231],{1628:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>o});var a=e(4848),i=e(8453);const s={sidebar_position:4},d=void 0,t={id:"dart/Basic/Operator",title:"Operator",description:"Operator adalah simbol khusus yang digunakan untuk melakukan operasi tertentu pada operan. Dart memiliki banyak operator bawaan yang dapat digunakan untuk melakukan berbagai fungsi, misalnya '+' digunakan untuk menambahkan dua operan. Operator dimaksudkan untuk melakukan operasi pada satu atau dua operan.",source:"@site/docs/dart/Basic/Operator.md",sourceDirName:"dart/Basic",slug:"/dart/Basic/Operator",permalink:"/docusaurus-documentation/docs/dart/Basic/Operator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dart/Basic/Operator.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Variable",permalink:"/docusaurus-documentation/docs/dart/Basic/Variable"},next:{title:"Standar Input Output",permalink:"/docusaurus-documentation/docs/dart/Basic/Standar Input Output"}},l={},o=[{value:"1. Operator Aritmatika",id:"1-operator-aritmatika",level:2},{value:"2. Operator Relasional",id:"2-operator-relasional",level:2},{value:"3. Type Test Operators",id:"3-type-test-operators",level:2},{value:"as Operator",id:"as-operator",level:2},{value:"4. Operator Bitwise",id:"4-operator-bitwise",level:2},{value:"5. Operator Penugasan",id:"5-operator-penugasan",level:2},{value:"6. Operator Logika",id:"6-operator-logika",level:2},{value:"7. Operator Kondisional",id:"7-operator-kondisional",level:2},{value:"8. Operator Notasi Kaskade:",id:"8-operator-notasi-kaskade",level:2}];function c(n){const r={blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Operator adalah simbol khusus yang digunakan untuk melakukan operasi tertentu pada operan. Dart memiliki banyak operator bawaan yang dapat digunakan untuk melakukan berbagai fungsi, misalnya '+' digunakan untuk menambahkan dua operan. Operator dimaksudkan untuk melakukan operasi pada satu atau dua operan."}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Tabel Prioritas Operator di Dart"}),":"]}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Description"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Associativity"})})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Unary Postfix"})}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.code,{children:"expr++"}),", ",(0,a.jsx)(r.code,{children:"expr\u2013"}),", ",(0,a.jsx)(r.code,{children:"()"}),", ",(0,a.jsx)(r.code,{children:"[]"}),", ",(0,a.jsx)(r.code,{children:"?[]"}),", ",(0,a.jsx)(r.code,{children:"."}),", ",(0,a.jsx)(r.code,{children:"?."}),", ",(0,a.jsx)(r.code,{children:"!"})]}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Unary Prefix"})}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.code,{children:"-expr"}),", ",(0,a.jsx)(r.code,{children:"!expr"}),", ",(0,a.jsx)(r.code,{children:"~expr"}),", ",(0,a.jsx)(r.code,{children:"++expr"}),", ",(0,a.jsx)(r.code,{children:"\u2013expr"}),", ",(0,a.jsx)(r.code,{children:"await expr"})]}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Multiplicative"})}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.code,{children:"*"}),", ",(0,a.jsx)(r.code,{children:"/"}),", ",(0,a.jsx)(r.code,{children:"%"}),", ",(0,a.jsx)(r.code,{children:"~/"})]}),(0,a.jsx)(r.td,{children:"Left"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Additive"})}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.code,{children:"+"}),", ",(0,a.jsx)(r.code,{children:"\u2013"})]}),(0,a.jsx)(r.td,{children:"Left"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Shift"})}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.code,{children:"<<"}),", ",(0,a.jsx)(r.code,{children:">>"}),", ",(0,a.jsx)(r.code,{children:">>>"})]}),(0,a.jsx)(r.td,{children:"Left"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Bitwise AND"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"&"})}),(0,a.jsx)(r.td,{children:"Left"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Bitwise XOR"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"^"})}),(0,a.jsx)(r.td,{children:"Left"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Bitwise OR"})}),(0,a.jsx)(r.td,{children:"`"}),(0,a.jsx)(r.td,{children:"`"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Relational and Type Test"})}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.code,{children:">="}),", ",(0,a.jsx)(r.code,{children:">"}),", ",(0,a.jsx)(r.code,{children:"<="}),", ",(0,a.jsx)(r.code,{children:"<"}),", ",(0,a.jsx)(r.code,{children:"as"}),", ",(0,a.jsx)(r.code,{children:"is"}),", ",(0,a.jsx)(r.code,{children:"is!"})]}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Equality"})}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.code,{children:"=="}),", ",(0,a.jsx)(r.code,{children:"!="})]}),(0,a.jsx)(r.td,{children:"None"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Logical AND"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"&&"})}),(0,a.jsx)(r.td,{children:"Left"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Logical OR"})}),(0,a.jsx)(r.td,{children:"`"}),(0,a.jsx)(r.td,{})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"If-null"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"??"})}),(0,a.jsx)(r.td,{children:"Left"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Conditional"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"expr ? expr2 : expr3"})}),(0,a.jsx)(r.td,{children:"Right"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Cascade"})}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.code,{children:".."}),", ",(0,a.jsx)(r.code,{children:"?.."})]}),(0,a.jsx)(r.td,{children:"Left"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.strong,{children:"Assignment"})}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.code,{children:"="}),", ",(0,a.jsx)(r.code,{children:"*="}),", ",(0,a.jsx)(r.code,{children:"/="}),", ",(0,a.jsx)(r.code,{children:"+="}),", ",(0,a.jsx)(r.code,{children:"-="}),", ",(0,a.jsx)(r.code,{children:"&="}),", ",(0,a.jsx)(r.code,{children:"^="})," etc."]}),(0,a.jsx)(r.td,{children:"Right"})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"1-operator-aritmatika",children:"1. Operator Aritmatika"}),"\n",(0,a.jsx)(r.p,{children:"Kelas operator ini berisi operator-operator yang digunakan untuk melakukan operasi aritmatika pada operan. Operator-operator ini adalah operator biner, yaitu operator yang bekerja pada dua operan. Operator-operator ini bekerja seperti ini:"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Simbol Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Nama Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Deskripsi Operator"})})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"+"})}),(0,a.jsx)(r.td,{children:"Tambahan"}),(0,a.jsx)(r.td,{children:"Digunakan untuk menambahkan dua operan"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"\u2013"})}),(0,a.jsx)(r.td,{children:"Pengurangan"}),(0,a.jsx)(r.td,{children:"Digunakan untuk mengurangi dua operan"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"-expr"})}),(0,a.jsx)(r.td,{children:"Kurang Unari"}),(0,a.jsx)(r.td,{children:"Digunakan untuk membalikkan tanda ekspresi"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"*"})}),(0,a.jsx)(r.td,{children:"Perkalian"}),(0,a.jsx)(r.td,{children:"Digunakan untuk mengalikan dua operan"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"/"})}),(0,a.jsx)(r.td,{children:"Pembagian"}),(0,a.jsx)(r.td,{children:"Digunakan untuk membagi dua operan"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"~/"})}),(0,a.jsx)(r.td,{children:"Divisi"}),(0,a.jsx)(r.td,{children:"Digunakan untuk membagi dua operan tetapi memberikan output dalam bentuk integer"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"%"})}),(0,a.jsx)(r.td,{children:"Modulus"}),(0,a.jsx)(r.td,{children:"Digunakan untuk memberikan sisa dari dua operan (mengembalikan sisa)"})]})]})]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Contoh yang menunjukkan penggunaan semua Operator Aritmatika"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:'// Dart Program Demonstrating use\r\n// Of all Arithmetic Operators\r\n\r\nvoid main()\r\n{\r\n    int a = 2;\r\n    int b = 3;\r\n\r\n    // Adding a and b\r\n    var c = a + b;\r\n    print("Sum  (a + b) = $c");//-> 5\r\n\r\n    // Subtracting a and b\r\n    var d = a - b;\r\n    print("Difference (a - b) = $d");//-> -1\r\n\r\n    // Using unary minus\r\n    var e = -d;\r\n    print("Negation -(a - b) = $e");//-> 1\r\n\r\n    // Multiplication of a and b\r\n    var f = a * b;\r\n    print("Product (a * b) = $f");//-> 6\r\n\r\n    // Division of a and b\r\n    var g = b / a;\r\n    print("Division (b / a) = $g");//-> 1.5\r\n\r\n    // Using ~/ to divide a and b\r\n    var h = b ~/ a;\r\n    print("Quotient (b ~/ a) = $h");//-> 1\r\n\r\n    // Remainder of a and b\r\n    var i = b % a;\r\n    print("Remainder (b % a) = $i");//-> 1\r\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"2-operator-relasional",children:"2. Operator Relasional"}),"\n",(0,a.jsx)(r.p,{children:"Kelas operator ini berisi operator-operator yang digunakan untuk melakukan operasi relasional pada operan. Operator-operator tersebut adalah sebagai berikut:"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Simbol Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Nama Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Deskripsi Operator"})})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:">"})}),(0,a.jsx)(r.td,{children:"Lebih besar dari"}),(0,a.jsx)(r.td,{children:"Periksa operan mana yang lebih besar dan berikan hasil sebagai ekspresi boolean."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"<"})}),(0,a.jsx)(r.td,{children:"Kurang dari"}),(0,a.jsx)(r.td,{children:"Periksa operan mana yang lebih kecil dan berikan hasil sebagai ekspresi boolean."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:">="})}),(0,a.jsx)(r.td,{children:"Lebih besar dari atau sama dengan"}),(0,a.jsx)(r.td,{children:"Periksa operan mana yang lebih besar atau sama satu sama lain dan berikan hasil boolean"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"<="})}),(0,a.jsx)(r.td,{children:"Kurang dari atau sama dengan"}),(0,a.jsx)(r.td,{children:"Periksa operan mana yang kurang dari atau sama satu sama lain dan berikan hasil boolean"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"=="})}),(0,a.jsx)(r.td,{children:"Setara dengan"}),(0,a.jsx)(r.td,{children:"Periksa apakah operan sama satu sama lain atau tidak dan berikan hasil boolean."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"!="})}),(0,a.jsx)(r.td,{children:"Tidak sama dengan"}),(0,a.jsx)(r.td,{children:"Periksa apakah operan tidak sama satu sama lain dan berikan hasil boolean."})]})]})]}),"\n",(0,a.jsx)(r.p,{children:"Contoh yang menunjukkan penggunaan Operator Relasional:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:'// Dart Program Demonstrating use\r\n// Of all Relational Operators\r\nvoid main()\r\n{\r\n    int a = 2;\r\n    int b = 3;\r\n\r\n    // Greater between a and b\r\n    var c = a > b;\r\n    print("a is greater than b (a > b) : $c");//-> false\r\n\r\n    // Smaller between a and b\r\n    var d = a < b;\r\n    print("a is smaller than b (a < b) : $d");//-> true\r\n\r\n    // Greater than or equal to between a and b\r\n    var e = a >= b;\r\n    print("a is greater than b (a >= b) : $e");//-> false\r\n\r\n    // Less than or equal to between a and b\r\n    var f = a <= b;\r\n    print("a is smaller than b (a <= b) : $f");//-> true\r\n\r\n    // Equality between a and b\r\n    var g = b == a;\r\n    print("a and b are equal (b == a) : $g");//-> false\r\n\r\n    // Unequality between a and b\r\n    var h = b != a;\r\n    print("a and b are not equal (b != a) : $h");//-> true\r\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"3-type-test-operators",children:"3. Type Test Operators"}),"\n",(0,a.jsx)(r.p,{children:"Kelas operator ini berisi operator-operator yang digunakan untuk melakukan perbandingan pada operan. Operator-operator tersebut adalah sebagai berikut:"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Simbol Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Nama Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Deskripsi Operator"})})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"is"})}),(0,a.jsx)(r.td,{children:"adalah"}),(0,a.jsxs)(r.td,{children:["Memberikan nilai boolean ",(0,a.jsx)(r.code,{children:"true"})," jika objek memiliki tipe tertentu"]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"is!"})}),(0,a.jsx)(r.td,{children:"tidak"}),(0,a.jsxs)(r.td,{children:["Memberikan nilai boolean ",(0,a.jsx)(r.code,{children:"false"})," jika objek memiliki tipe tertentu"]})]})]})]}),"\n",(0,a.jsx)(r.p,{children:"Contoh: Menggunakan Operator Uji Tipe dalam program"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:"void main()\r\n{\r\n    String a = 'GFG';\r\n    double b = 3.3;\r\n\r\n    // Using is to compare\r\n    print(a is String); //-> true\r\n\r\n    // Using is! to compare\r\n    print(b is !int);//-> true\r\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"as-operator",children:"as Operator"}),"\n",(0,a.jsx)(r.p,{children:"Operator as digunakan untuk Typecasting. Operator ini melakukan cast pada saat runtime jika cast valid, jika tidak, akan muncul error. Operator ini terdiri dari dua jenis, yaitu Downcasting dan Type Assertion."}),"\n",(0,a.jsx)(r.p,{children:"Berikut ini adalah implementasi dari operator as:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:'void main(){\r\n  // Declaring value\r\n  dynamic value = "Hello";\r\n  \r\n  // TypeCast dynamic -> String\r\n  String str= value as String;\r\n  \r\n  // Print String\r\n  print(str);//-> Hello\r\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"4-operator-bitwise",children:"4. Operator Bitwise"}),"\n",(0,a.jsx)(r.p,{children:"Kelas operator ini berisi operator-operator yang digunakan untuk melakukan operasi bitwise pada operand. Operator-operator tersebut berjalan seperti ini:"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Simbol Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Nama Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Deskripsi Operator"})})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"&"})}),(0,a.jsx)(r.td,{children:"Bitwise DAN"}),(0,a.jsx)(r.td,{children:"Melakukan operasi AND bitwise pada dua operan."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"`"}),(0,a.jsx)(r.td,{children:"`"}),(0,a.jsx)(r.td,{children:"Bitwise OR"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"^"})}),(0,a.jsx)(r.td,{children:"XOR Bitwise"}),(0,a.jsx)(r.td,{children:"Melakukan operasi XOR bitwise pada dua operan."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"~"})}),(0,a.jsx)(r.td,{children:"Bitwise TIDAK"}),(0,a.jsx)(r.td,{children:"Melakukan operasi NOT bitwise pada satu operan."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"<<"})}),(0,a.jsx)(r.td,{children:"Shift Kiri"}),(0,a.jsx)(r.td,{children:"Menggeser representasi biner operan ke kiri b bit dan menyisipkan 0 dari kanan."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:">>"})}),(0,a.jsx)(r.td,{children:"Shift Kanan"}),(0,a.jsx)(r.td,{children:"Menggeser representasi biner operan ke kanan b bit dan menyisipkan 0 dari kiri."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:">>>"})}),(0,a.jsx)(r.td,{children:"Shift Kanan tanpa tanda tangan"}),(0,a.jsx)(r.td,{children:"Menggeser representasi biner operan ke kanan b bit (mengabaikan tanda)."})]})]})]}),"\n",(0,a.jsx)(r.p,{children:"Contoh: Penggunaan Operator Bitwise dalam program"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:'void main()\r\n{\r\n      print("Demonstrate use of Dart Bitwise Operators");\r\n  \r\n    int a = 5;\r\n    int b = 7;\r\n\r\n    // Performing Bitwise AND on a and b\r\n    var c = a & b;\r\n    print("a & b : $c");//-> 5\r\n\r\n    // Performing Bitwise OR on a and b\r\n    var d = a | b;\r\n    print("a | b : $d"); //-> 7\r\n\r\n    // Performing Bitwise XOR on a and b\r\n    var e = a ^ b;\r\n    print("a ^ b : $e"); //-> 2\r\n\r\n    // Performing Bitwise NOT on a\r\n    var f = ~a;\r\n    print("~a : $f"); //-> -6\r\n\r\n    // Performing left shift on a\r\n    var g = a << b;\r\n    print("a << b : $g");//-> 40\r\n\r\n    // Performing right shift on a\r\n    var h = a >> b;\r\n    print("a >> b : $h");//-> 0\r\n  \r\n      var i = -a >>> b;\r\n      print("-a >>> b : $i");//-> 33554431\r\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"5-operator-penugasan",children:"5. Operator Penugasan"}),"\n",(0,a.jsx)(r.p,{children:"Kelas operator ini berisi operator-operator yang digunakan untuk menetapkan nilai pada operan. Operator-operator tersebut berbunyi seperti ini:"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Simbol Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Nama Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Deskripsi Operator"})})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"="})}),(0,a.jsx)(r.td,{children:"Setara dengan"}),(0,a.jsx)(r.td,{children:"Digunakan untuk menetapkan nilai ke ekspresi atau variabel"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"??="})}),(0,a.jsx)(r.td,{children:"Operator penugasan"}),(0,a.jsx)(r.td,{children:"Menetapkan nilai hanya jika nilainya null"})]})]})]}),"\n",(0,a.jsx)(r.p,{children:"Contoh: Penggunaan Operator Penugasan dalam program"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:'void main()\r\n{\r\n    int a = 5;\r\n    int b = 7;\r\n\r\n    // Assigning value to variable c\r\n    var c = a * b;\r\n  \r\n    print("assignment  operator used c = a*b so now c = $c\\n");//-> 35\r\n\r\n    // Assigning value to variable d\r\n    var d;\r\n  \r\n      // Value is assign as it is null\r\n    d ??= a + b;\r\n  \r\n    print("Assigning value only if d is null");//-> Assigning value only if d is null\r\n    print("d??= a+b so d = $d \\n");//-> d = 12\r\n    \r\n    // Again trying to assign value to d\r\n    d ??= a - b;\r\n      // Value is not assign as it is not null\r\n  \r\n    print("Assigning value only if d is null");//-> Assigning value only if d is null\r\n    print("d??= a-b so d = $d");//-> d = 12\r\n    print("As d was not null value was not updated");//-> As d was not null value was not updated\r\n}\n'})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Operator Penugasan Gabungan"})}),"\n",(0,a.jsx)(r.p,{children:"Selain itu ada cara lain di mana kita dapat menggunakan operator, yaitu operator penugasan majemuk, di mana kita menggabungkan suatu operator dengan operator penugasan lain untuk mempersingkat langkah-langkah dan membuat kode lebih efektif."}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:"https://media.geeksforgeeks.org/wp-content/uploads/20240322113446/Compound_Assignment.png",alt:"An old rock in the desert"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"Contoh:\r\na+=1;\r\n\r\n// Pernyataan di atas sama dengan\r\n// pernyataan yang disebutkan di bawah ini\r\nbilangan real A dan B.\n"})}),"\n",(0,a.jsx)(r.h2,{id:"6-operator-logika",children:"6. Operator Logika"}),"\n",(0,a.jsx)(r.p,{children:"Kelas operator ini berisi operator-operator yang digunakan untuk menggabungkan dua atau lebih kondisi operan secara logis. Operator-operator tersebut berbunyi seperti ini:"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Simbol Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Nama Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Deskripsi Operator"})})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"&&"})}),(0,a.jsx)(r.td,{children:"Dan Operator"}),(0,a.jsx)(r.td,{children:"Digunakan untuk menambahkan dua kondisi, dan jika keduanya benar maka mengembalikan true."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"||"})}),(0,a.jsx)(r.td,{children:"Atau Operator"}),(0,a.jsx)(r.td,{children:"Digunakan untuk menambahkan dua kondisi, dan jika salah satu benar maka mengembalikan true."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"!"})}),(0,a.jsx)(r.td,{children:"Bukan Operator"}),(0,a.jsx)(r.td,{children:"Digunakan untuk membalikkan hasil (membuat true menjadi false dan sebaliknya)."})]})]})]}),"\n",(0,a.jsx)(r.p,{children:"Contoh 1: Penggunaan Operator Logika dalam program"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:"void main()\r\n{\r\n    int a = 5;\r\n    int b = 7;  \r\n\r\n    // Using And Operator\r\n    bool c = a > 10 && b < 10;\r\n    print(c);//-> false\r\n\r\n    // Using Or Operator\r\n    bool d = a > 10 || b < 10;\r\n    print(d);//-> true\r\n\r\n    // Using Not Operator\r\n    bool e = !(a > 10);\r\n    print(e);//-> false\r\n}\n"})}),"\n",(0,a.jsx)(r.p,{children:"Contoh 2: (Cara yang Salah)"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:"void main()\r\n{\r\n    int a = 5;\r\n    int b = 7;\r\n\r\n    // Using And Operator\r\n    print(a && b);//-> false\r\n\r\n    // Using Or Operator\r\n    print(a || b);//-> true\r\n\r\n    // Using Not Operator\r\n    print(!a);//-> false\r\n}\n"})}),"\n",(0,a.jsx)(r.p,{children:"Contoh 3: (Cara yang Benar)"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:'void main()\r\n{\r\n    var a = true;\r\n    var b = false;\r\n      // Printing the Values of a & b\r\n    print("a: $a , b: $b\\n");//-> a: true , b: false\r\n\r\n    // Using And Operator\r\n    print("a && b = ${a&&b}");//-> a && b = false\r\n\r\n    // Using Or Operator\r\n    print("a || b = ${a||b}");//-> a || b = true\r\n\r\n    // Using Not Operator\r\n    print("!a = ${!a}");//-> !a = false\r\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"7-operator-kondisional",children:"7. Operator Kondisional"}),"\n",(0,a.jsx)(r.p,{children:"Kelas operator ini berisi operator-operator yang digunakan untuk melakukan perbandingan pada operan. Operator-operator tersebut adalah sebagai berikut:"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Simbol Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Nama Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Deskripsi Operator"})})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"kondisi ? ekspresi1 : ekspresi2"})}),(0,a.jsx)(r.td,{children:"Operator Kondisional"}),(0,a.jsx)(r.td,{children:"Versi sederhana dari pernyataan if-else. Jika kondisinya benar, ekspresi1 akan dieksekusi, jika tidak, ekspresi2 akan dieksekusi."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"ekspresi1 ?? ekspresi2"})}),(0,a.jsx)(r.td,{children:"Operator Kondisional"}),(0,a.jsx)(r.td,{children:"Jika ekspresi1 bukan null, kembalikan nilainya; jika tidak, kembalikan nilai dari ekspresi2."})]})]})]}),"\n",(0,a.jsx)(r.p,{children:"Contoh: Penggunaan Operator Kondisional dalam program"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:'void main()\r\n{\r\n    int a = 5;\r\n\r\n    // Conditional Statement\r\n    var c = (a < 10) ? "Statement is Correct, Geek" : "Statement is Wrong, Geek";\r\n    print(c);//-> Statement is Correct, Geek\r\n\r\n    \r\n    // Conditional statement\r\n      int? n;\r\n      // Warning: Operand of null-aware operation \'??\' has type \'int\' which excludes null.\r\n      // For batter practice make both same type to avoid warning\r\n      // var d = n ?? 10;\r\n      var d = n ?? "n has Null value";\r\n      print(d);//-> n has Null value\r\n\r\n    // After assigning value to n\r\n    n = 10;\r\n      // we make it all ready null safe \r\n    //d = n ? ? "n has Null value";\r\n      d = n;\r\n    print(d);//-> 10\r\n}\n'})}),"\n",(0,a.jsx)(r.p,{children:"Keluaran:"}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Catatan: Dalam Kode Di Atas, Anda Mungkin Melihat Bahwa Variabel 'n' Dinyatakan Sebagai \u201cint? n\u201d. Dengan mendeklarasikan n sebagai int?, Anda menunjukkan bahwa variabel n dapat menyimpan nilai integer atau nilai null. Tanda ? menunjukkan bahwa variabel tersebut dapat berupa null, artinya variabel tersebut dapat diberi nilai null selain nilai integer."}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"8-operator-notasi-kaskade",children:"8. Operator Notasi Kaskade:"}),"\n",(0,a.jsx)(r.p,{children:"Kelas operator ini memungkinkan Anda untuk melakukan serangkaian operasi pada elemen yang sama. Kelas ini memungkinkan Anda untuk melakukan beberapa metode pada objek yang sama. Berikut ini adalah perintahnya:"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Simbol Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Nama Operator"})}),(0,a.jsx)(r.th,{children:(0,a.jsx)(r.strong,{children:"Deskripsi Operator"})})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:".."})}),(0,a.jsx)(r.td,{children:"Metode Berjenjang"}),(0,a.jsx)(r.td,{children:"Digunakan untuk melakukan beberapa metode pada objek yang sama."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"..?"})}),(0,a.jsx)(r.td,{children:"Kaskade Korsleting Nol"}),(0,a.jsx)(r.td,{children:"Digunakan ketika kita yakin bahwa tidak ada operasi kaskade yang dilakukan pada elemen Null."})]})]})]}),"\n",(0,a.jsx)(r.p,{children:"Contoh: Penggunaan Operator Notasi Cascade dalam program"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:"// Class \r\nclass GFG {\r\n    var? a;\r\n    var? b;\r\n\r\n    void set(x, y)\r\n    {\r\n        this.a = x;\r\n        this.b = y;\r\n    }\r\n\r\n    void add()\r\n    {\r\n        var z = this.a + this.b;\r\n        print(z);\r\n    }\r\n}\r\n\r\nvoid main()\r\n{\r\n    // Creating objects of class GFG\r\n    GFG geek1 = new GFG();\r\n    GFG geek2 = new GFG();\r\n\r\n    // Without using Cascade Notation\r\n    geek1.set(1, 2);\r\n    geek1.add();//-> 3\r\n\r\n    // Using Cascade Notation\r\n    geek2..set(3, 4)\r\n         ..add();//-> 7\r\n}\n"})})]})}function h(n={}){const{wrapper:r}={...(0,i.R)(),...n.components};return r?(0,a.jsx)(r,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},8453:(n,r,e)=>{e.d(r,{R:()=>d,x:()=>t});var a=e(6540);const i={},s=a.createContext(i);function d(n){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function t(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),a.createElement(s.Provider,{value:r},n.children)}}}]);