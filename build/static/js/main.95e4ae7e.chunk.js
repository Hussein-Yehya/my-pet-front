(window.webpackJsonpmypet=window.webpackJsonpmypet||[]).push([[0],{29:function(e,t,a){e.exports=a(47)},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),o=a.n(c),r=a(9),s=(a(34),a(18)),i=a(4),m=a(5),u=a(6),d=a(7),p=a(8),f=(a(35),function(e){var t=e.name,a=e.age,n=e.breed,c=e.urlImage,o=e.id;return l.a.createElement("div",{className:"".concat("contact-item"," card mb-4 shadow-sm")},l.a.createElement("img",{src:c,alt:"",className:"".concat("contact-item","__image")}),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text"},l.a.createElement("b",null,"Nome:")," ",t,l.a.createElement("b",null," Idade: ")," ",a),l.a.createElement("p",{className:"card-text"},l.a.createElement("b",null," Ra\xe7a: ")," ",n),l.a.createElement(r.b,{to:"".concat("/info","/").concat(o)},"Ver mais"),l.a.createElement(r.b,{to:"".concat("/edit","/").concat(o)}," Editar ")))}),b=(a(41),function(e){var t=e.contacts;return l.a.createElement("div",null,l.a.createElement("div",{className:"c-title-box"},l.a.createElement("center",null,l.a.createElement("h1",null,l.a.createElement("strong",null,"My Pet ")))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},t.map(function(e,t){var a=e.name,n=e.age,c=e.breed,o=e.urlImage,r=e.id;e.description;return l.a.createElement("div",{className:"col-md-4",key:t},l.a.createElement(f,{name:a,age:n,breed:c,urlImage:o,id:r}))}))))}),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={contacts:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://ancient-fortress-81160.herokuapp.com/api/contacts").then(function(e){return e.json()}).then(function(t){e.setState({contacts:t})}).catch(console.log)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{contacts:this.state.contacts}))}}]),t}(n.Component),g=a(2),v=a(11),E=a.n(v),y=a(20),N=(a(43),function(e){var t=e.field,a=e.label,n=e.value,c=e.onChange,o=e.className,r=e.type,s=void 0===r?"text":r;return l.a.createElement("div",{className:"form-field ".concat(o)},l.a.createElement("label",{className:"label",htmlFor:t},a),l.a.createElement("input",{className:"input-text js-input",name:t,type:s,value:n,checked:n,onChange:c}))}),O=a(12);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach(function(t){Object(g.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j=[{value:"SMALL",label:"Pequeno"},{value:"MEDIUM",label:"M\xe9dio"},{value:"LARGE",label:"Grande"},{value:"XL",label:"Grand\xe3o"}],C=[{value:"HAIRLESS",label:"Sem pelagem"},{value:"SHORT",label:"Pequeno"},{value:"MEDIUM",label:"M\xe9dio"},{value:"LONG",label:"Longo"}],T=[{value:"KIDS",label:"Crian\xe7as"},{value:"OLD_MAN",label:"Idosos"},{value:"DEFICIENT",label:"Pessoas Especiais"}],I=[{value:"CAT",label:"Felino"},{value:"DOG",label:"Canino"}],w=[{value:"M",label:"Macho"},{value:"F",label:"F\xeamea"}],L=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).submitHandler=function(t){t.preventDefault(),console.log(e.state.form),fetch("https://ancient-fortress-81160.herokuapp.com/api/contacts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.form)}).then(function(){return e.setState({redirect:!0})}).catch(function(e){return console.log(e)})},e.changeHandler=function(){var t=Object(y.a)(E.a.mark(function t(a){var n,l,c,o;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.persist(),n=a.target,l="checkbox"===n.type?n.checked:n.value,c=n.name,(o=e.state.form)[c]=l,t.next=8,e.setState(o);case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.handleInputs=function(){var t=e.state.form;return[{label:"Nome",field:"name",value:t.name,type:"text"},{label:"Idade",field:"age",value:t.age,type:"number"},{label:"Ra\xe7a",field:"breed",value:t.breed,type:"text"},{label:"Link da foto",field:"urlImage",value:t.urlImage,type:"text"},{label:"Tipo Sangu\xedneo",field:"bloodType",value:t.bloodType,type:"text"},{label:"Cor",field:"color",value:t.color,type:"text"},{label:"Possui Doen\xe7a",field:"disease",value:t.disease,type:"checkbox"},{label:"Vacinado",field:"vaccinated",value:t.vaccinated,type:"checkbox"}].map(function(t,a){return l.a.createElement(N,{key:a,className:"col-xs-12 col-lg-4",field:t.field,label:t.label,value:t.value,type:t.type,onChange:e.changeHandler})})},e.handleSelectChange=function(){var t=Object(y.a)(E.a.mark(function t(a,n){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({form:x({},e.state.form,Object(g.a)({},n,a.value))},function(){return console.log("Option selected:",a)});case 2:return t.next=4,e.setState({selectedOption:x({},e.state.selectedOption,Object(g.a)({},n,a))});case 4:console.log(e.state);case 5:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}(),e.state={form:{name:"",age:"",breed:"",description:"",urlImage:"",bloodType:"",coatLength:"HAIRLESS",color:"",petRecommendedTo:"KIDS",petSize:"SMALL",disease:!1,vaccinated:!1,petType:"CAT",genre:"M"},selectedOption:{petSize:j[0],coatLength:C[0],petRecommendedTo:T[0],petType:I[0],genre:w[0]},redirect:!1},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.redirect,n=t.form,c=t.selectedOption;return a?l.a.createElement(s.a,{to:"/"}):l.a.createElement("section",{className:"get-in-touch"},l.a.createElement("form",{className:"contact-form row",onSubmit:function(t){return e.submitHandler(t)}},l.a.createElement("div",{className:"col-12 c-info-box"},l.a.createElement("h1",null,"Criar um novo ",l.a.createElement("strong",null," Pet"))),this.handleInputs(),l.a.createElement("div",{className:"form-field col-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Pelagem"),l.a.createElement(O.a,{value:c.coatLength,onChange:function(t){return e.handleSelectChange(t,"coatLength")},options:C})),l.a.createElement("div",{className:"form-field col-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Porte"),l.a.createElement(O.a,{value:c.petSize,onChange:function(t){return e.handleSelectChange(t,"petSize")},options:j})),l.a.createElement("div",{className:"form-field col-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Recomendado Para"),l.a.createElement(O.a,{value:c.petRecommendedTo,onChange:function(t){return e.handleSelectChange(t,"petRecommendedTo")},options:T})),l.a.createElement("div",{className:"form-field col-xs-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Tipo Pet"),l.a.createElement(O.a,{value:c.petType,onChange:function(t){return e.handleSelectChange(t,"petType")},options:I})),l.a.createElement("div",{className:"form-field col-xs-12 col-lg-4"},l.a.createElement("label",{className:"label"},"G\xeanero"),l.a.createElement(O.a,{value:c.genre,onChange:function(t){return e.handleSelectChange(t,"genre")},options:w})),l.a.createElement("div",{className:"form-field col-xs-12 col-lg-12"},l.a.createElement("label",{className:"label c-label-desc"},"Sobre o pet"),l.a.createElement("textarea",{className:"form-field input-text js-input c-description-info",name:"description",type:"textarea",value:n.description,onChange:this.changeHandler})),l.a.createElement("div",{className:"form-field col-12 c-submit-box"},l.a.createElement("button",{type:"submit",className:"submit-btn"},"Salvar"))))}}]),t}(n.Component),P=(a(44),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).deleteContact=function(){var e=a.props.match.params.id;fetch("https://ancient-fortress-81160.herokuapp.com/api/contacts/".concat(e),{method:"DELETE"}).then(function(){return a.setState({redirect:!0})}).catch(function(e){return console.log(e)})},a.state={info:{name:"",age:"",breed:"",description:"",urlImage:"",bloodType:"",coatLength:"",color:"",petRecommendedTo:"",petSize:"",disease:!1,vaccinated:!1,petType:"",genre:""},redirect:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){console.log("will"),this.getContactById()}},{key:"getContactById",value:function(){var e=this;console.log("use");var t=this.props.match.params.id;this.state.info;fetch("https://ancient-fortress-81160.herokuapp.com/api/contacts/".concat(t)).then(function(e){return e.json()}).then(function(t){e.setState({info:t})}).catch(console.log)}},{key:"render",value:function(){var e=this.state,t=e.info;return e.redirect?l.a.createElement(s.a,{to:"/"}):l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"".concat("contact-info")}),l.a.createElement("div",{className:"col-12 c-detail-box"},l.a.createElement("img",{src:t.urlImage,alt:"",className:"".concat("contact-info","__image")}),l.a.createElement("h1",null,"CAT"===t.petType?"Miaau ":"Au Au ","eu sou","M"===t.genre?" o ":" a "," ",l.a.createElement("strong",null,t.name," !"))),l.a.createElement("div",{className:"col-12 row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Ra\xe7a: "),t.breed),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Idade: "),t.age>1?t.age+" anos ":t.age+" ano "),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"G\xeanero: "),"F"===t.genre?"F\xeamea":"Macho"),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Cor: "),t.color),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Possui Doen\xe7a: "),!0===t.disease?"Sim":"N\xe3o"),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Tipo Sangu\xedneo: "),t.bloodType),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Recomendado para: "),"KIDS"===t.petRecommendedTo?"Crian\xe7as":"OLD_MAN"===t.petRecommendedTo?"Idosos":"DEFICIENT"===t.petRecommendedTo?"Pessoas Especial":""),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Vacinado: "),!0===t.vaccinated?"Sim":"N\xe3o"),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Pelagem: "),"HAIRLESS"===t.coatLength?"Sem":"SHORT"===t.coatLength?"Pequeno":"MEDIUM"===t.coatLength?"M\xe9dio":"Grande"),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Pelagem: "),"HAIRLESS"===t.coatLength?"Sem":"SHORT"===t.coatLength?"Pequeno":"MEDIUM"===t.coatLength?"M\xe9dio":"Grande"),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Porte: "),"SMALL"===t.coatLength?"Pequeno":"MEDIUM"===t.coatLength?"M\xe9dio":"LARGE"===t.coatLength?"Grande":"Grand\xe3o"),l.a.createElement("div",{className:"col-12 c-description-info"},l.a.createElement("strong",null,"Sobre o pet: "),t.description),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-12 row"},l.a.createElement("button",{type:"submit",onClick:this.deleteContact,className:"btn btn-danger"},"Delete")))))}}]),t}(n.Component));a(45);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(g.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var D=[{value:"SMALL",label:"Pequeno"},{value:"MEDIUM",label:"M\xe9dio"},{value:"LARGE",label:"Grande"},{value:"XL",label:"Grand\xe3o"}],R=[{value:"HAIRLESS",label:"Sem pelagem"},{value:"SHORT",label:"Pequeno"},{value:"MEDIUM",label:"M\xe9dio"},{value:"LONG",label:"Longo"}],A=[{value:"KIDS",label:"Crian\xe7as"},{value:"OLD_MAN",label:"Idosos"},{value:"DIFICIENT",label:"Pessoas Especiais"}],H=[{value:"CAT",label:"Felino"},{value:"DOG",label:"Canino"}],G=[{value:"M",label:"Macho"},{value:"F",label:"F\xeamea"}],F=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).submitHandler=function(t){t.preventDefault(),console.log(e.state.form),fetch("https://ancient-fortress-81160.herokuapp.com/api/contacts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.form)}).then(function(){return e.setState({redirect:!0})}).catch(function(e){return console.log(e)})},e.changeHandler=function(){var t=Object(y.a)(E.a.mark(function t(a){var n,l,c,o;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.persist(),n=a.target,l="checkbox"===n.type?n.checked:n.value,c=n.name,(o=e.state.form)[c]=l,t.next=8,e.setState(o);case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.handleInputs=function(){var t=e.state.form;return[{label:"Nome",field:"name",value:t.name,type:"text"},{label:"Idade",field:"age",value:t.age,type:"number"},{label:"Ra\xe7a",field:"breed",value:t.breed,type:"text"},{label:"Tipo Sangu\xedneo",field:"bloodType",value:t.bloodType,type:"text"},{label:"Cor",field:"color",value:t.color,type:"text"},{label:"Link da foto",field:"urlImage",value:t.urlImage,type:"text",className:"c-image-url"},{label:"Possui Doen\xe7a",field:"disease",value:t.disease,type:"checkbox"},{label:"Vacinado",field:"vaccinated",value:t.vaccinated,type:"checkbox"}].map(function(t,a){return l.a.createElement(N,{key:a,className:"".concat(t.className?t.className:""," col-xs-12 col-lg-4"),field:t.field,label:t.label,value:t.value,type:t.type,onChange:e.changeHandler})})},e.handleSelectChange=function(){var t=Object(y.a)(E.a.mark(function t(a,n){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({form:M({},e.state.form,Object(g.a)({},n,a.value))},function(){return console.log("Option selected:",a)});case 2:return t.next=4,e.setState({selectedOption:M({},e.state.selectedOption,Object(g.a)({},n,a))});case 4:console.log(e.state);case 5:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}(),e.state={form:{name:"",age:"",breed:"",description:"",urlImage:"",bloodType:"",coatLength:"",color:"",petRecommendedTo:"",petSize:"",disease:!1,vaccinated:!1,petType:"",genre:""},selectedOption:{petSize:D[0],coatLength:R[0],petRecommendedTo:A[0],petType:H[0],genre:G[0]},redirect:!1},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(E.a.mark(function e(){var t,a,n,l,c,o,r,s;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.match.params.id,e.next=4,fetch("https://ancient-fortress-81160.herokuapp.com/api/contacts/".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,console.log(n),e.next=11,R.find(function(e){return e.value===n.coatLength});case 11:return l=e.sent,e.next=14,D.find(function(e){return e.value===n.petSize});case 14:return c=e.sent,e.next=17,A.find(function(e){return e.value===n.petRecommendedTo});case 17:return o=e.sent,e.next=20,H.find(function(e){return e.value===n.petType});case 20:return r=e.sent,e.next=23,G.find(function(e){return e.value===n.genre});case 23:return s=e.sent,e.next=26,this.setState({form:M({},this.state.form,{},n,{id:t}),selectedOption:{coatLength:l,petSize:c,petRecommendedTo:o,petType:r,genre:s}});case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(0),console.error("Deu Ruim");case 31:case"end":return e.stop()}},e,this,[[0,28]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.redirect,n=t.form,c=t.selectedOption;return a?l.a.createElement(s.a,{to:"/"}):l.a.createElement("section",{className:"get-in-touch"},l.a.createElement("form",{className:"contact-form row",onSubmit:function(t){return e.submitHandler(t)}},l.a.createElement("div",{className:"col-12 c-info-box"},l.a.createElement("img",{src:n.urlImage,alt:"",className:"".concat("contact-info","__image")}),l.a.createElement("h1",null,"CAT"===n.petType?"Miaau ":"Au Au ","eu sou","M"===n.genre?" o ":" a "," ",l.a.createElement("strong",null,n.name),"!")),this.handleInputs(),l.a.createElement("div",{className:"form-field col-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Pelagem"),l.a.createElement(O.a,{value:c.coatLength,onChange:function(t){return e.handleSelectChange(t,"coatLength")},options:R})),l.a.createElement("div",{className:"form-field col-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Porte"),l.a.createElement(O.a,{value:c.petSize,onChange:function(t){return e.handleSelectChange(t,"petSize")},options:D})),l.a.createElement("div",{className:"form-field col-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Recomendado Para"),l.a.createElement(O.a,{value:c.petRecommendedTo,onChange:function(t){return e.handleSelectChange(t,"petRecommendedTo")},options:A})),l.a.createElement("div",{className:"form-field col-xs-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Tipo Pet"),l.a.createElement(O.a,{value:c.petType,onChange:function(t){return e.handleSelectChange(t,"petType")},options:H})),l.a.createElement("div",{className:"form-field col-xs-12 col-lg-4"},l.a.createElement("label",{className:"label"},"G\xeanero"),l.a.createElement(O.a,{value:c.genre,onChange:function(t){return e.handleSelectChange(t,"genre")},options:G})),l.a.createElement("div",{className:"form-field col-xs-12 col-lg-12"},l.a.createElement("label",{className:"label c-label-desc"},"Sobre o pet"),l.a.createElement("textarea",{className:"input-text js-input c-description-info",name:"description",type:"textarea",value:n.description,onChange:this.changeHandler})),l.a.createElement("div",{className:"form-field col-12 c-submit-box"},l.a.createElement("button",{type:"submit",className:"submit-btn"},"Salvar"))))}}]),t}(n.Component),z=(a(46),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).changeHandler=function(t){t.persist();var a=e.state;a.form[t.target.name]=t.target.value,e.setState(a)},e.submitHandler=function(t){t.preventDefault(),console.log(e.state.form),fetch("https://ancient-fortress-81160.herokuapp.com/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.form)}).then(function(t){200===t.status?t.json().then(function(t){console.log(t),e.setState({redirect:!0})}):e.setState({invalidUser:!0})}).catch(function(e){return console.log(e)})},e.handleInputs=function(){var t=e.state.form;return[{label:"Email",field:"email",value:t.email,type:"email"},{label:"Senha",field:"password",value:t.password,type:"password"}].map(function(t,a){return l.a.createElement(N,{key:a,className:"col-xs-12 col-lg-12",field:t.field,label:t.label,value:t.value,type:t.type,onChange:e.changeHandler})})},e.state={form:{email:"",password:""},redirect:!1},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.redirect,n=t.invalidUser;return a?l.a.createElement(s.a,{to:"/"}):l.a.createElement("section",{className:"get-in-touch login"},n?l.a.createElement("div",{class:"col-lg-12 alert alert-danger",role:"alert"},"Usu\xe1rio Invalido"):null,l.a.createElement("form",{className:"contact-form row",onSubmit:function(t){return e.submitHandler(t)}},this.handleInputs(),l.a.createElement("div",{className:"form-field col-lg-12"},l.a.createElement("button",{type:"submit",className:"submit-btn"},"Logar"))))}}]),t}(n.Component)),U=function(){return l.a.createElement(s.d,null,l.a.createElement(s.b,{exact:!0,path:"/",component:h}),l.a.createElement(s.b,{exact:!0,path:"".concat("/info","/:id"),component:P}),l.a.createElement(s.b,{exact:!0,path:"/create",component:L}),l.a.createElement(s.b,{exact:!0,path:"".concat("/edit","/:id"),component:F}),l.a.createElement(s.b,{exact:!0,path:"/login",component:z}))},_=function(){return l.a.createElement("div",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h5",{className:"col-4 font-weight-normal"},l.a.createElement("font",null,"My Pet")),l.a.createElement("nav",{className:"col-8"},l.a.createElement(r.b,{to:"/"}," In\xedcio "),l.a.createElement(r.b,{to:"/create"}," Criar Pet ")))))},q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(r.a,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.95e4ae7e.chunk.js.map