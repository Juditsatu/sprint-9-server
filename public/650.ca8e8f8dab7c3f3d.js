"use strict";(self.webpackChunksprint_9_pets_app=self.webpackChunksprint_9_pets_app||[]).push([[650],{7650:(c,i,n)=>{n.r(i),n.d(i,{ProtectedModule:()=>p});var u=n(6895),l=n(9371),e=n(1571);const r=[{path:"",children:[{path:"account",component:(()=>{class t{constructor(){this.userName=""}ngOnInit(){}userIsLogged(){localStorage.getItem("token")&&(this.userName=localStorage.getItem("user"))}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-account"]],decls:143,vars:0,consts:[[1,"layout-page"],[1,"content-wrapper"],[1,"container-xxl","flex-grow-1","container-p-y"],[1,"fw-bold","mb-4"],[1,"row"],[1,"col-md-12"],[1,"nav","nav-pills","flex-column","flex-md-row","mb-3"],[1,"nav-item"],["href","javascript:void(0);",1,"nav-link","active"],[1,"bi","bi-person"],["href","pages-account-settings-notifications.html",1,"nav-link"],[1,"bi","bi-heart"],["href","pages-account-settings-connections.html",1,"nav-link"],[1,"bi","bi-hourglass"],[1,"card","mb-4"],[1,"card-header"],[1,"card-body"],[1,"d-flex","align-items-start","align-items-sm-center","gap-4"],["src","../assets/img/gallery/user-card-1.png","alt","user-avatar","height","100","width","100","id","uploadedAvatar",1,"img-fluid","d-block"],[1,"button-wrapper"],["for","upload","tabindex","0",1,"btn","btn-primary","me-2","mb-4"],[1,"d-none","d-sm-block"],[1,"bx","bx-upload","d-block","d-sm-none"],["type","file","id","upload","hidden","","accept","image/png, image/jpeg",1,"account-file-input"],["type","button",1,"btn","btn-outline-secondary","account-image-reset","mb-4"],[1,"bx","bx-reset","d-block","d-sm-none"],[1,"text-muted","mb-0"],[1,"my-0"],["id","formAccountSettings","method","POST","onsubmit","return false"],[1,"mb-3","col-md-6"],["for","firstName",1,"form-label"],["type","text","id","firstName","name","firstName","value","Test 1","autofocus","",1,"form-control"],["for","lastName",1,"form-label"],["type","text","name","lastName","id","lastName","value","Doe",1,"form-control"],["for","email",1,"form-label"],["type","text","id","email","name","email","value","test1@test.com","placeholder","test1@test.com",1,"form-control"],["for","phoneNumber",1,"form-label"],[1,"input-group","input-group-merge"],[1,"input-group-text"],["type","text","id","phoneNumber","name","phoneNumber","placeholder","202 555 0111",1,"form-control"],["for","address",1,"form-label"],["type","text","id","address","name","address","placeholder","Address",1,"form-control"],["for","zipCode",1,"form-label"],["type","text","id","zipCode","name","zipCode","placeholder","231465","maxlength","6",1,"form-control"],["for","country",1,"form-label"],["id","country",1,"select2","form-select"],["value",""],["value","Australia"],["value","Bangladesh"],["value","Belarus"],["value","Brazil"],["value","Canada"],["value","China"],["value","France"],["value","Germany"],["value","India"],["value","Indonesia"],["value","Israel"],["value","Italy"],["value","Japan"],["value","Korea"],["value","Mexico"],["value","Philippines"],["value","Russia"],["value","South Africa"],["value","Thailand"],["value","Turkey"],["value","Ukraine"],["value","United Arab Emirates"],["value","United Kingdom"],["value","United States"],["for","language",1,"form-label"],["id","language",1,"select2","form-select"],["value","en"],["value","fr"],["value","de"],["value","pt"],[1,"mt-2"],["type","submit",1,"btn","btn-primary","me-2"],["type","reset",1,"btn","btn-outline-secondary"],[1,"content-backdrop","fade"]],template:function(o,Z){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),e._uU(4," Account"),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),e._UZ(10,"i",9),e._uU(11," Account"),e.qZA()(),e.TgZ(12,"li",7)(13,"a",10),e._UZ(14,"i",11),e._uU(15," Favorites"),e.qZA()(),e.TgZ(16,"li",7)(17,"a",12),e._UZ(18,"i",13),e._uU(19," Service Time"),e.qZA()()(),e.TgZ(20,"div",14)(21,"h5",15),e._uU(22,"Profile Details"),e.qZA(),e.TgZ(23,"div",16)(24,"div",17),e._UZ(25,"img",18),e.TgZ(26,"div",19)(27,"label",20)(28,"span",21),e._uU(29,"Upload new photo"),e.qZA(),e._UZ(30,"i",22)(31,"input",23),e.qZA(),e.TgZ(32,"button",24),e._UZ(33,"i",25),e.TgZ(34,"span",21),e._uU(35,"Reset"),e.qZA()(),e.TgZ(36,"p",26),e._uU(37,"Allowed JPG, GIF or PNG. Max size of 800K"),e.qZA()()()(),e._UZ(38,"hr",27),e.TgZ(39,"div",16)(40,"form",28)(41,"div",4)(42,"div",29)(43,"label",30),e._uU(44,"First Name"),e.qZA(),e._UZ(45,"input",31),e.qZA(),e.TgZ(46,"div",29)(47,"label",32),e._uU(48,"Last Name"),e.qZA(),e._UZ(49,"input",33),e.qZA(),e.TgZ(50,"div",29)(51,"label",34),e._uU(52,"E-mail"),e.qZA(),e._UZ(53,"input",35),e.qZA(),e.TgZ(54,"div",29)(55,"label",36),e._uU(56,"Phone Number"),e.qZA(),e.TgZ(57,"div",37)(58,"span",38),e._uU(59,"US (+1)"),e.qZA(),e._UZ(60,"input",39),e.qZA()(),e.TgZ(61,"div",29)(62,"label",40),e._uU(63,"Address"),e.qZA(),e._UZ(64,"input",41),e.qZA(),e.TgZ(65,"div",29)(66,"label",42),e._uU(67,"Zip Code"),e.qZA(),e._UZ(68,"input",43),e.qZA(),e.TgZ(69,"div",29)(70,"label",44),e._uU(71,"Country"),e.qZA(),e.TgZ(72,"select",45)(73,"option",46),e._uU(74,"Select"),e.qZA(),e.TgZ(75,"option",47),e._uU(76,"Australia"),e.qZA(),e.TgZ(77,"option",48),e._uU(78,"Bangladesh"),e.qZA(),e.TgZ(79,"option",49),e._uU(80,"Belarus"),e.qZA(),e.TgZ(81,"option",50),e._uU(82,"Brazil"),e.qZA(),e.TgZ(83,"option",51),e._uU(84,"Canada"),e.qZA(),e.TgZ(85,"option",52),e._uU(86,"China"),e.qZA(),e.TgZ(87,"option",53),e._uU(88,"France"),e.qZA(),e.TgZ(89,"option",54),e._uU(90,"Germany"),e.qZA(),e.TgZ(91,"option",55),e._uU(92,"India"),e.qZA(),e.TgZ(93,"option",56),e._uU(94,"Indonesia"),e.qZA(),e.TgZ(95,"option",57),e._uU(96,"Israel"),e.qZA(),e.TgZ(97,"option",58),e._uU(98,"Italy"),e.qZA(),e.TgZ(99,"option",59),e._uU(100,"Japan"),e.qZA(),e.TgZ(101,"option",60),e._uU(102,"Korea, Republic of"),e.qZA(),e.TgZ(103,"option",61),e._uU(104,"Mexico"),e.qZA(),e.TgZ(105,"option",62),e._uU(106,"Philippines"),e.qZA(),e.TgZ(107,"option",63),e._uU(108,"Russian Federation"),e.qZA(),e.TgZ(109,"option",64),e._uU(110,"South Africa"),e.qZA(),e.TgZ(111,"option",65),e._uU(112,"Thailand"),e.qZA(),e.TgZ(113,"option",66),e._uU(114,"Turkey"),e.qZA(),e.TgZ(115,"option",67),e._uU(116,"Ukraine"),e.qZA(),e.TgZ(117,"option",68),e._uU(118,"United Arab Emirates"),e.qZA(),e.TgZ(119,"option",69),e._uU(120,"United Kingdom"),e.qZA(),e.TgZ(121,"option",70),e._uU(122,"United States"),e.qZA()()(),e.TgZ(123,"div",29)(124,"label",71),e._uU(125,"Language"),e.qZA(),e.TgZ(126,"select",72)(127,"option",46),e._uU(128,"Select Language"),e.qZA(),e.TgZ(129,"option",73),e._uU(130,"English"),e.qZA(),e.TgZ(131,"option",74),e._uU(132,"French"),e.qZA(),e.TgZ(133,"option",75),e._uU(134,"German"),e.qZA(),e.TgZ(135,"option",76),e._uU(136,"Portuguese"),e.qZA()()()(),e.TgZ(137,"div",77)(138,"button",78),e._uU(139,"Save changes"),e.qZA(),e.TgZ(140,"button",79),e._uU(141,"Cancel"),e.qZA()()()()()()()(),e._UZ(142,"div",80),e.qZA()())},styles:[".layout-page[_ngcontent-%COMP%]{margin:30px 0;min-height:calc(100vh - 72px)}.img-fluid[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:5px;object-position:center;object-fit:cover}"]}),t})()}]}];let d=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(r),l.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,d]}),t})()}}]);