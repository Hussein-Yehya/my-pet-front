(window.webpackJsonpmypet=window.webpackJsonpmypet||[]).push([[0],{171:function(e,t,a){e.exports=a(304)},176:function(e,t,a){},177:function(e,t,a){},182:function(e,t,a){},184:function(e,t,a){},300:function(e,t,a){},301:function(e,t,a){},302:function(e,t,a){},303:function(e,t,a){},304:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(28),r=a.n(c),o=a(23),s=(a(176),a(47)),i=a(29),m=a(30),u=a(32),d=a(31),p=a(33),f=(a(177),function(e){var t=e.name,a=e.age,n=e.breed,c=e.urlImage,r=e.id;return l.a.createElement("div",{className:"".concat("contact-item"," card mb-4 shadow-sm")},l.a.createElement("img",{src:c,alt:"",className:"".concat("contact-item","__image")}),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text"},l.a.createElement("b",null,"Nome:")," ",t,l.a.createElement("b",null," Idade: ")," ",a),l.a.createElement("p",{className:"card-text"},l.a.createElement("b",null," Ra\xe7a: ")," ",n),l.a.createElement(o.b,{to:"".concat("/info","/").concat(r)},"Ver mais"),l.a.createElement(o.b,{to:"".concat("/edit","/").concat(r)}," Editar ")))}),b=(a(182),function(e){var t=e.contacts;return l.a.createElement("div",null,l.a.createElement("div",{className:"c-title-box"},l.a.createElement("center",null,l.a.createElement("h1",null,l.a.createElement("strong",null,"My Pet ")))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},t.map((function(e,t){var a=e.name,n=e.age,c=e.breed,r=e.urlImage,o=e.id;e.description;return l.a.createElement("div",{className:"col-md-4",key:t},l.a.createElement(f,{name:a,age:n,breed:c,urlImage:r,id:o}))})))))}),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={contacts:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://ancient-fortress-81160.herokuapp.com/api/contacts").then((function(e){return e.json()})).then((function(t){e.setState({contacts:t})})).catch(console.log)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{contacts:this.state.contacts}))}}]),t}(n.Component),v=a(48),g=a(25),E=a.n(g),y=a(44),N=a(34),O=(a(184),function(e){var t=e.field,a=e.label,n=e.value,c=e.onChange,r=e.className,o=e.type,s=void 0===o?"text":o;return l.a.createElement("div",{className:"form-field ".concat(r)},l.a.createElement("label",{className:"label",htmlFor:t},a),l.a.createElement("input",{className:"input-text js-input",name:t,type:s,value:n,checked:n,onChange:c}))}),x=a(312),S=[{value:"SMALL",label:"Pequeno"},{value:"MEDIUM",label:"M\xe9dio"},{value:"LARGE",label:"Grande"},{value:"XL",label:"Grand\xe3o"}],j=[{value:"HAIRLESS",label:"Sem pelagem"},{value:"SHORT",label:"Pequeno"},{value:"MEDIUM",label:"M\xe9dio"},{value:"LONG",label:"Longo"}],C=[{value:"KIDS",label:"Crian\xe7as"},{value:"OLD_MAN",label:"Idosos"},{value:"DEFICIENT",label:"Pessoas Especiais"}],T=[{value:"CAT",label:"Felino"},{value:"DOG",label:"Canino"}],k=[{value:"M",label:"Macho"},{value:"F",label:"F\xeamea"}];x.a;function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).submitHandler=function(t){t.preventDefault(),console.log(e.state.form),fetch("https://ancient-fortress-81160.herokuapp.com/api/contacts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.form)}).then((function(){return e.setState({redirect:!0})})).catch((function(e){return console.log(e)}))},e.changeHandler=function(){var t=Object(y.a)(E.a.mark((function t(a){var n,l,c,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.persist(),n=a.target,l="checkbox"===n.type?n.checked:n.value,c=n.name,(r=e.state.form)[c]=l,t.next=8,e.setState(r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleInputs=function(){var t=e.state.form;return[{label:"Nome",field:"name",value:t.name,type:"text"},{label:"Idade",field:"age",value:t.age,type:"number"},{label:"Ra\xe7a",field:"breed",value:t.breed,type:"text"},{label:"Link da foto",field:"urlImage",value:t.urlImage,type:"text"},{label:"Tipo Sangu\xedneo",field:"bloodType",value:t.bloodType,type:"text"},{label:"Cor",field:"color",value:t.color,type:"text"},{label:"Possui Doen\xe7a",field:"disease",value:t.disease,type:"checkbox"},{label:"Vacinado",field:"vaccinated",value:t.vaccinated,type:"checkbox"}].map((function(t,a){return l.a.createElement(O,{key:a,className:"col-xs-12 col-lg-4",field:t.field,label:t.label,value:t.value,type:t.type,onChange:e.changeHandler})}))},e.handleSelectChange=function(){var t=Object(y.a)(E.a.mark((function t(a,n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({form:P({},e.state.form,Object(v.a)({},n,a.value))},(function(){return console.log("Option selected:",a)}));case 2:return t.next=4,e.setState({selectedOption:P({},e.state.selectedOption,Object(v.a)({},n,a))});case 4:console.log(e.state);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.state={form:{name:"",age:"",breed:"",description:"",urlImage:"",bloodType:"",coatLength:"HAIRLESS",color:"",petRecommendedTo:"KIDS",petSize:"SMALL",disease:!1,vaccinated:!1,petType:"CAT",genre:"M"},selectedOption:{petSize:S[0],coatLength:j[0],petRecommendedTo:C[0],petType:T[0],genre:k[0]},redirect:!1},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.redirect,n=t.form,c=t.selectedOption;return a?l.a.createElement(s.a,{to:"/"}):l.a.createElement("section",{className:"get-in-touch"},l.a.createElement("form",{className:"contact-form row",onSubmit:function(t){return e.submitHandler(t)}},l.a.createElement("div",{className:"col-12 c-info-box"},l.a.createElement("h1",null,"Criar um novo ",l.a.createElement("strong",null," Pet"))),this.handleInputs(),l.a.createElement("div",{className:"form-field col-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Pelagem"),l.a.createElement(N.a,{value:c.coatLength,onChange:function(t){return e.handleSelectChange(t,"coatLength")},options:j})),l.a.createElement("div",{className:"form-field col-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Porte"),l.a.createElement(N.a,{value:c.petSize,onChange:function(t){return e.handleSelectChange(t,"petSize")},options:S})),l.a.createElement("div",{className:"form-field col-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Recomendado Para"),l.a.createElement(N.a,{value:c.petRecommendedTo,onChange:function(t){return e.handleSelectChange(t,"petRecommendedTo")},options:C})),l.a.createElement("div",{className:"form-field col-xs-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Tipo Pet"),l.a.createElement(N.a,{value:c.petType,onChange:function(t){return e.handleSelectChange(t,"petType")},options:T})),l.a.createElement("div",{className:"form-field col-xs-12 col-lg-4"},l.a.createElement("label",{className:"label"},"G\xeanero"),l.a.createElement(N.a,{value:c.genre,onChange:function(t){return e.handleSelectChange(t,"genre")},options:k})),l.a.createElement("div",{className:"form-field col-xs-12 col-lg-12"},l.a.createElement("label",{className:"label c-label-desc"},"Sobre o pet"),l.a.createElement("textarea",{className:"form-field input-text js-input c-description-info",name:"description",type:"textarea",value:n.description,onChange:this.changeHandler})),l.a.createElement("div",{className:"form-field col-12 c-submit-box"},l.a.createElement("button",{type:"submit",className:"submit-btn"},"Salvar"))))}}]),t}(n.Component),D=(a(300),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).deleteContact=function(){var e=a.props.match.params.id;fetch("https://ancient-fortress-81160.herokuapp.com/api/contacts/".concat(e),{method:"DELETE"}).then((function(){return a.setState({redirect:!0})})).catch((function(e){return console.log(e)}))},a.handleOptions=function(e,t){return e?t.find((function(t){return t.value===e})):{value:"",label:""}},a.state={info:{name:"",age:"",breed:"",description:"",urlImage:"",bloodType:"",coatLength:"",color:"",petRecommendedTo:"",petSize:"",disease:!1,vaccinated:!1,petType:"",genre:""},redirect:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getContactById()}},{key:"getContactById",value:function(){var e=this;console.log("use");var t=this.props.match.params.id;fetch("https://ancient-fortress-81160.herokuapp.com/api/contacts/".concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({info:t})})).catch(console.log)}},{key:"render",value:function(){var e=this.state,t=e.info;return e.redirect?l.a.createElement(s.a,{to:"/"}):l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"".concat("contact-info")}),l.a.createElement("div",{className:"col-12 c-detail-box"},l.a.createElement("img",{src:t.urlImage,alt:"",className:"".concat("contact-info","__image")}),l.a.createElement("h1",null,"CAT"===t.petType?"Miaau ":"Au Au ","eu sou","M"===t.genre?" o ":" a "," ",l.a.createElement("strong",null,t.name," !"))),l.a.createElement("div",{className:"col-12 row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Ra\xe7a: "),t.breed),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Idade: "),t.age>1?t.age+" anos ":t.age+" ano "),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"G\xeanero: "),this.handleOptions(t.genre,k).label),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Cor: "),t.color),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Possui Doen\xe7a: "),!0===t.disease?"Sim":"N\xe3o"),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Tipo Sangu\xedneo: "),t.bloodType),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Recomendado para: "),this.handleOptions(t.petRecommendedTo,C).label),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Vacinado: "),!0===t.vaccinated?"Sim":"N\xe3o"),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Pelagem: "),this.handleOptions(t.coatLength,j).label),l.a.createElement("div",{className:"col-4"},l.a.createElement("strong",null,"Porte: "),this.handleOptions(t.petSize,S).label),l.a.createElement("div",{className:"col-12 c-description-info"},l.a.createElement("strong",null,"Sobre o pet: "),t.description),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-12 row"},l.a.createElement("button",{type:"submit",onClick:this.deleteContact,className:"btn btn-danger"},"Delete")))))}}]),t}(n.Component));a(301);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).submitHandler=function(t){t.preventDefault(),console.log(e.state.form),fetch("https://ancient-fortress-81160.herokuapp.com/api/contacts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.form)}).then((function(){return e.setState({redirect:!0})})).catch((function(e){return console.log(e)}))},e.changeHandler=function(){var t=Object(y.a)(E.a.mark((function t(a){var n,l,c,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.persist(),n=a.target,l="checkbox"===n.type?n.checked:n.value,c=n.name,(r=e.state.form)[c]=l,t.next=8,e.setState(r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleInputs=function(){var t=e.state.form;return[{label:"Nome",field:"name",value:t.name,type:"text"},{label:"Idade",field:"age",value:t.age,type:"number"},{label:"Ra\xe7a",field:"breed",value:t.breed,type:"text"},{label:"Tipo Sangu\xedneo",field:"bloodType",value:t.bloodType,type:"text"},{label:"Cor",field:"color",value:t.color,type:"text"},{label:"Link da foto",field:"urlImage",value:t.urlImage,type:"text",className:"c-image-url"},{label:"Possui Doen\xe7a",field:"disease",value:t.disease,type:"checkbox"},{label:"Vacinado",field:"vaccinated",value:t.vaccinated,type:"checkbox"}].map((function(t,a){return l.a.createElement(O,{key:a,className:"".concat(t.className?t.className:""," col-xs-12 col-lg-4"),field:t.field,label:t.label,value:t.value,type:t.type,onChange:e.changeHandler})}))},e.handleSelectChange=function(){var t=Object(y.a)(E.a.mark((function t(a,n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({form:R({},e.state.form,Object(v.a)({},n,a.value))},(function(){return console.log("Option selected:",a)}));case 2:return t.next=4,e.setState({selectedOption:R({},e.state.selectedOption,Object(v.a)({},n,a))});case 4:console.log(e.state);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.state={form:{name:"",age:"",breed:"",description:"",urlImage:"",bloodType:"",coatLength:"",color:"",petRecommendedTo:"",petSize:"",disease:!1,vaccinated:!1,petType:"",genre:""},selectedOption:{petSize:S[0],coatLength:j[0],petRecommendedTo:C[0],petType:T[0],genre:k[0]},redirect:!1},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(E.a.mark((function e(){var t,a,n,l,c,r,o,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.match.params.id,e.next=4,fetch("https://ancient-fortress-81160.herokuapp.com/api/contacts/".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,console.log(n),e.next=11,j.find((function(e){return e.value===n.coatLength}));case 11:return l=e.sent,e.next=14,S.find((function(e){return e.value===n.petSize}));case 14:return c=e.sent,e.next=17,C.find((function(e){return e.value===n.petRecommendedTo}));case 17:return r=e.sent,e.next=20,T.find((function(e){return e.value===n.petType}));case 20:return o=e.sent,e.next=23,k.find((function(e){return e.value===n.genre}));case 23:return s=e.sent,e.next=26,this.setState({form:R({},this.state.form,{},n,{id:t}),selectedOption:{coatLength:l,petSize:c,petRecommendedTo:r,petType:o,genre:s}});case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(0),console.error("Deu Ruim");case 31:case"end":return e.stop()}}),e,this,[[0,28]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.redirect,n=t.form,c=t.selectedOption;return a?l.a.createElement(s.a,{to:"/"}):l.a.createElement("section",{className:"get-in-touch"},l.a.createElement("form",{className:"contact-form row",onSubmit:function(t){return e.submitHandler(t)}},l.a.createElement("div",{className:"col-12 c-info-box"},l.a.createElement("img",{src:n.urlImage,alt:"",className:"".concat("contact-info","__image")}),l.a.createElement("h1",null,"CAT"===n.petType?"Miaau ":"Au Au ","eu sou","M"===n.genre?" o ":" a "," ",l.a.createElement("strong",null,n.name),"!")),this.handleInputs(),l.a.createElement("div",{className:"form-field col-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Pelagem"),l.a.createElement(N.a,{value:c.coatLength,onChange:function(t){return e.handleSelectChange(t,"coatLength")},options:j})),l.a.createElement("div",{className:"form-field col-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Porte"),l.a.createElement(N.a,{value:c.petSize,onChange:function(t){return e.handleSelectChange(t,"petSize")},options:S})),l.a.createElement("div",{className:"form-field col-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Recomendado Para"),l.a.createElement(N.a,{value:c.petRecommendedTo,onChange:function(t){return e.handleSelectChange(t,"petRecommendedTo")},options:C})),l.a.createElement("div",{className:"form-field col-xs-12 col-lg-4"},l.a.createElement("label",{className:"label"},"Tipo Pet"),l.a.createElement(N.a,{value:c.petType,onChange:function(t){return e.handleSelectChange(t,"petType")},options:T})),l.a.createElement("div",{className:"form-field col-xs-12 col-lg-4"},l.a.createElement("label",{className:"label"},"G\xeanero"),l.a.createElement(N.a,{value:c.genre,onChange:function(t){return e.handleSelectChange(t,"genre")},options:k})),l.a.createElement("div",{className:"form-field col-xs-12 col-lg-12"},l.a.createElement("label",{className:"label c-label-desc"},"Sobre o pet"),l.a.createElement("textarea",{className:"input-text js-input c-description-info",name:"description",type:"textarea",value:n.description,onChange:this.changeHandler})),l.a.createElement("div",{className:"form-field col-12 c-submit-box"},l.a.createElement("button",{type:"submit",className:"submit-btn"},"Salvar"))))}}]),t}(n.Component),M=(a(302),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).changeHandler=function(t){t.persist();var a=e.state;a.form[t.target.name]=t.target.value,e.setState(a)},e.submitHandler=function(t){t.preventDefault(),console.log(e.state.form),fetch("https://ancient-fortress-81160.herokuapp.com/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.form)}).then((function(t){200===t.status?t.json().then((function(t){console.log(t),e.setState({redirect:!0})})):e.setState({invalidUser:!0})})).catch((function(e){return console.log(e)}))},e.handleInputs=function(){var t=e.state.form;return[{label:"Email",field:"email",value:t.email,type:"email"},{label:"Senha",field:"password",value:t.password,type:"password"}].map((function(t,a){return l.a.createElement(O,{key:a,className:"col-xs-12 col-lg-12",field:t.field,label:t.label,value:t.value,type:t.type,onChange:e.changeHandler})}))},e.state={form:{email:"",password:""},redirect:!1},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.redirect,n=t.invalidUser;return a?l.a.createElement(s.a,{to:"/"}):l.a.createElement("section",{className:"get-in-touch login"},n?l.a.createElement("div",{class:"col-lg-12 alert alert-danger",role:"alert"},"Usu\xe1rio Invalido"):null,l.a.createElement("form",{className:"contact-form row",onSubmit:function(t){return e.submitHandler(t)}},this.handleInputs(),l.a.createElement("div",{className:"form-field col-lg-12"},l.a.createElement("button",{type:"submit",className:"submit-btn"},"Logar"))))}}]),t}(n.Component)),A=(a(303),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).submitHandler=function(t){t.preventDefault(),console.log(e.state.form),fetch("https://ancient-fortress-81160.herokuapp.com/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.form)}).then((function(){return e.setState({redirect:!0})})).catch((function(e){return console.log(e)}))},e.changeHandler=function(){var t=Object(y.a)(E.a.mark((function t(a){var n,l,c,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.persist(),n=a.target,l="checkbox"===n.type?n.checked:n.value,c=n.name,void 0!==(r=e.state.form)[c]?r[c]=l:r.address[c]=l,t.next=8,e.setState(r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleInputs=function(){var t=e.state.form;return[{label:"Nome",field:"name",value:t.name,type:"text"},{label:"E-mail",field:"email",value:t.email,type:"text"},{label:"Senha",field:"password",value:t.password,type:"password"},{label:"Estado",field:"state",value:t.address.state,type:"text"},{label:"Cidade",field:"city",value:t.address.city,type:"text"},{label:"Bairro",field:"district",value:t.address.district,type:"text"},{label:"Rua",field:"street",value:t.address.street,type:"text"},{label:"N\xfamero",field:"number",value:t.address.number,type:"text"},{label:"Complemento",field:"complements",value:t.address.complements,type:"text"}].map((function(t,a){return l.a.createElement(O,{key:a,className:"col-xs-12 col-lg-4",field:t.field,label:t.label,value:t.value,type:t.type,onChange:e.changeHandler})}))},e.state={form:{name:"",email:"",password:"",address:{country:"Brasil",state:"",district:"",city:"",street:"",number:"",complements:""}},redirect:!1},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;this.state.form;return l.a.createElement("section",{className:"get-in-touch"},l.a.createElement("form",{className:"contact-form row",onSubmit:function(t){return e.submitHandler(t)}},l.a.createElement("div",{className:"col-12 c-info-box"},l.a.createElement("h1",null,"Criar uma nova ",l.a.createElement("strong",null," Conta"))),this.handleInputs(),l.a.createElement("div",{className:"form-field col-12 c-submit-box"},l.a.createElement("button",{type:"submit",className:"submit-btn"},"Cadastrar"))))}}]),t}(n.Component)),z=function(){return l.a.createElement(s.d,null,l.a.createElement(s.b,{exact:!0,path:"/",component:h}),l.a.createElement(s.b,{exact:!0,path:"".concat("/info","/:id"),component:D}),l.a.createElement(s.b,{exact:!0,path:"/create",component:I}),l.a.createElement(s.b,{exact:!0,path:"".concat("/edit","/:id"),component:H}),l.a.createElement(s.b,{exact:!0,path:"/login",component:M}),l.a.createElement(s.b,{exact:!0,path:"/create/user",component:A}))},G=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light "},l.a.createElement(o.b,{className:"navbar-brand",to:"/"},"My\xa0Pet"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(o.b,{className:"nav-link",to:"/"},"\xa0in\xedcio\xa0")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/create"},"\xa0Criar\xa0Pets\xa0")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/create/user"},"Criar Usu\xe1rio"," ")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/login"},"Entrar")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/login"},"\xa0Sair\xa0"))))))},F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(G,null),l.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(o.a,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[171,1,2]]]);
//# sourceMappingURL=main.154ce0f4.chunk.js.map