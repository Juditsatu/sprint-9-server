"use strict";(self.webpackChunksprint_9_pets_app=self.webpackChunksprint_9_pets_app||[]).push([[650],{7650:(h,i,r)=>{r.r(i),r.d(i,{ProtectedModule:()=>g});var m=r(6895),u=r(9371),t=r(433),d=r(5226),c=r.n(d),e=r(1571),s=r(529);const p=[{path:"",children:[{path:"account",component:(()=>{class o{constructor(n,l){this.fb=n,this.http=l,this.userForm=this.fb.group({name:["Test 1",t.kI.required],lastName:["Doe",t.kI.required],email:["test1@test.com",[t.kI.required,t.kI.email]],phoneNumber:["680 89 36 12",t.kI.required],address:["Carrer de Roc Boronat, 117, 127",t.kI.required],zipCode:["08018",t.kI.required],city:["Barcelona",t.kI.required]})}uploadFile(n){}submitForm(){this.userForm.valid?console.log(this.userForm.value):c().fire("Error","Invalid form")}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(t.qu),e.Y36(s.eN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-account"]],decls:93,vars:1,consts:[[1,"layout-page"],[1,"content-wrapper"],[1,"container-xxl","flex-grow-1","container-p-y"],[1,"fw-bold","mb-4"],[1,"row"],[1,"col-md-12"],[1,"nav","nav-pills","flex-column","flex-md-row","mb-3"],[1,"nav-item"],[1,"nav-link","active"],[1,"bi","bi-person"],["href","pages-account-settings-notifications.html",1,"nav-link"],[1,"bi","bi-heart"],["href","pages-account-settings-connections.html",1,"nav-link"],[1,"bi","bi-hourglass"],[1,"card","mb-4"],[1,"card-header"],[1,"card-body"],[1,"d-flex","align-items-start","align-items-sm-center","gap-4"],["src","../assets/img/gallery/user-card-1.png","alt","user-avatar","height","100","width","100","id","uploadedAvatar",1,"img-fluid","d-block"],[1,"button-wrapper"],["for","upload","tabindex","0",1,"btn","btn-primary","me-2","mb-4"],[1,"d-none","d-sm-block"],[1,"bi","bi-upload","d-block","d-sm-none"],["type","file","hidden","","accept","image/png, image/jpeg",1,"account-file-input",3,"change"],["type","button",1,"btn","btn-outline-secondary","account-image-reset","mb-4"],[1,"bi","bi-arrow-repeat","d-block","d-sm-none"],[1,"text-muted","mb-0"],[1,"my-0"],["method","POST","onsubmit","return false",3,"formGroup","ngSubmit"],[1,"mb-3","col-md-6"],["for","firstName",1,"form-label"],["type","text","id","firstName","name","firstName","formControlName","name","placeholder","Name","autofocus","",1,"form-control"],["for","lastName",1,"form-label"],["autoComplete","off","type","text","name","lastName","id","lastName","formControlName","lastName","placeholder","Last Name",1,"form-control"],["for","email",1,"form-label"],["type","text","id","email","name","email","formControlName","email","placeholder","Email","autoComplete","off",1,"form-control"],["for","phoneNumber",1,"form-label"],[1,"input-group","input-group-merge"],[1,"input-group-text"],["type","text","id","phoneNumber","autoComplete","off","name","phoneNumber","formControlName","phoneNumber","placeholder","202 555 0111",1,"form-control"],["for","address",1,"form-label"],["type","text","autoComplete","off","id","address","name","address","formControlName","address","placeholder","Address",1,"form-control"],["for","zipCode",1,"form-label"],["type","text","autoComplete","off","id","zipCode","name","zipCode","formControlName","zipCode","placeholder","Zip Code","maxlength","6",1,"form-control"],["for","country",1,"form-label"],["type","text","autoComplete","off","id","city","name","city","formControlName","city","placeholder","City",1,"form-control"],["for","language",1,"form-label"],["id","language",1,"select2","form-select"],["value",""],["value","en"],["value","fr"],["value","de"],["value","pt"],[1,"mt-2"],["type","submit",1,"btn","btn-primary","me-2"],["type","reset",1,"btn","btn-outline-secondary"],[1,"content-backdrop","fade"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),e._uU(4," Account"),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),e._UZ(10,"i",9),e._uU(11," Account"),e.qZA()(),e.TgZ(12,"li",7)(13,"a",10),e._UZ(14,"i",11),e._uU(15," Favorites"),e.qZA()(),e.TgZ(16,"li",7)(17,"a",12),e._UZ(18,"i",13),e._uU(19," Service Time"),e.qZA()()(),e.TgZ(20,"div",14)(21,"h5",15),e._uU(22,"Profile Details"),e.qZA(),e.TgZ(23,"div",16)(24,"div",17),e._UZ(25,"img",18),e.TgZ(26,"div",19)(27,"label",20)(28,"span",21),e._uU(29,"Upload new photo"),e.qZA(),e._UZ(30,"i",22),e.TgZ(31,"input",23),e.NdJ("change",function(b){return l.uploadFile(b)}),e.qZA()(),e.TgZ(32,"button",24),e._UZ(33,"i",25),e.TgZ(34,"span",21),e._uU(35,"Reset"),e.qZA()(),e.TgZ(36,"p",26),e._uU(37,"Allowed JPG, GIF or PNG. Max size of 800K"),e.qZA()()()(),e._UZ(38,"hr",27),e.TgZ(39,"div",16)(40,"form",28),e.NdJ("ngSubmit",function(){return l.submitForm()}),e.TgZ(41,"div",4)(42,"div",29)(43,"label",30),e._uU(44,"First Name"),e.qZA(),e._UZ(45,"input",31),e.qZA(),e.TgZ(46,"div",29)(47,"label",32),e._uU(48,"Last Name"),e.qZA(),e._UZ(49,"input",33),e.qZA(),e.TgZ(50,"div",29)(51,"label",34),e._uU(52,"E-mail"),e.qZA(),e._UZ(53,"input",35),e.qZA(),e.TgZ(54,"div",29)(55,"label",36),e._uU(56,"Phone Number"),e.qZA(),e.TgZ(57,"div",37)(58,"span",38),e._uU(59,"ES (+34)"),e.qZA(),e._UZ(60,"input",39),e.qZA()(),e.TgZ(61,"div",29)(62,"label",40),e._uU(63,"Address"),e.qZA(),e._UZ(64,"input",41),e.qZA(),e.TgZ(65,"div",29)(66,"label",42),e._uU(67,"Zip Code"),e.qZA(),e._UZ(68,"input",43),e.qZA(),e.TgZ(69,"div",29)(70,"label",44),e._uU(71,"City"),e.qZA(),e._UZ(72,"input",45),e.qZA(),e.TgZ(73,"div",29)(74,"label",46),e._uU(75,"Language"),e.qZA(),e.TgZ(76,"select",47)(77,"option",48),e._uU(78,"Select Language"),e.qZA(),e.TgZ(79,"option",49),e._uU(80,"English"),e.qZA(),e.TgZ(81,"option",50),e._uU(82,"French"),e.qZA(),e.TgZ(83,"option",51),e._uU(84,"German"),e.qZA(),e.TgZ(85,"option",52),e._uU(86,"Portuguese"),e.qZA()()()(),e.TgZ(87,"div",53)(88,"button",54),e._uU(89,"Save changes"),e.qZA(),e.TgZ(90,"button",55),e._uU(91,"Cancel"),e.qZA()()()()()()()(),e._UZ(92,"div",56),e.qZA()()),2&n&&(e.xp6(40),e.Q6J("formGroup",l.userForm))},dependencies:[t._Y,t.YN,t.Kr,t.Fj,t.JJ,t.JL,t.nD,t.sg,t.u],styles:[".layout-page[_ngcontent-%COMP%]{margin:30px 0;min-height:calc(100vh - 76px)}.img-fluid[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:5px;object-position:center;object-fit:cover}.nav-link[_ngcontent-%COMP%]{color:#442953}.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{background-color:#442953}"]}),o})()}]}];let f=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(p),u.Bz]}),o})(),g=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,f,t.UX]}),o})()}}]);