(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{58:function(e,t,n){},60:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(23),c=n.n(r),i=n(13),o=(n(57),n(58),n(18)),l=n.n(o),d=n(26),u=n(6),j=n(7),h=n(4),b=n(9),m=n(8),p=(n(60),n(10)),v=n.n(p),O=n(14),f=n(19),x=n(0),g=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleInput=a.handleInput.bind(Object(h.a)(a)),a.submit=a.submit.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"submit",value:function(e){e.preventDefault(),this.props.login(this.state)}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"signup-form",children:[Object(x.jsxs)("form",{onSubmit:this.submit,children:[Object(x.jsx)("h2",{children:"Sign In"}),Object(x.jsx)("p",{className:"hint-text",children:"Welcome back to WECARE"}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{className:"username form-control",id:"username",name:"username",placeholder:"Username",required:"required",onChange:this.handleInput})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{className:"email form-control",id:"email",name:"email",placeholder:"Email",required:"required",onChange:this.handleInput})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password",required:"required",onChange:this.handleInput})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-success btn-lg btn-block",children:"Log In"})})]}),Object(x.jsxs)("div",{className:"text-center",children:["Don't have an account?",Object(x.jsx)(i.b,{className:"btn",to:"/registration",children:"Register!"})]})]})}}]),n}(a.Component),y=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:"",is_organizer:!1},a.input=a.input.bind(Object(h.a)(a)),a.submit=a.submit.bind(Object(h.a)(a)),a.isOrganizer=a.isOrganizer.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"input",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"isOrganizer",value:function(){this.setState((function(e){return{is_organizer:!e.is_organizer}}))}},{key:"submit",value:function(e){e.preventDefault(),this.props.registration(this.state)}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"signup-form",children:[Object(x.jsxs)("form",{onSubmit:this.submit,children:[Object(x.jsx)("h2",{children:"Register"}),Object(x.jsx)("p",{className:"hint-text",children:'"Create your account. It\'s free and only takes a minute."'}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{className:"username form-control",name:"username",placeholder:"Username /  Organization Name",required:"required",onChange:this.input})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{className:"email form-control",name:"email",placeholder:"Email",required:"required",onChange:this.input})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"password",className:"form-control",name:"password1",placeholder:"Password",required:"required",onChange:this.input})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"password form-control",className:"form-control",name:"password2",placeholder:"Confirm Password",required:"required",onChange:this.input})}),Object(x.jsxs)("div",{className:"form-check",children:[Object(x.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1",onChange:this.isOrganizer}),Object(x.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:"I'm an organizer"})]}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-success btn-lg btn-block",children:"Register Now"})})]}),Object(x.jsxs)("div",{className:"text-center",children:["Already have an account?",Object(x.jsx)(i.b,{className:"btn",to:"/login",children:"Login!"})]})]})}}]),n}(a.Component),k=Object(O.f)(y),N=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",profilePicture:null,preview:""},a.input=a.input.bind(Object(h.a)(a)),a.uploadImage=a.uploadImage.bind(Object(h.a)(a)),a.submit=a.submit.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"input",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"uploadImage",value:function(e){var t=this,n=e.target.files[0];this.setState({profilePicture:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"submit",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("profilePicture",this.state.profilePicture),n.append("username",this.state.username),a={method:"POST",headers:{"X-CSRFToken":v.a.get("csrftoken")},body:n},e.next=7,fetch("api/v1/users/profiles/",a);case 7:this.props.history.push("/profile");case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("form",{onSubmit:this.submit,children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h2",{children:"User Profile"}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("input",{type:"file",name:"profilePicture",onChange:this.uploadImage}),Object(x.jsx)("input",{className:"card-img-top",type:"text",name:"username",value:this.state.username,onChange:this.input,placeholder:"Create an username"}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-primary edit-profile",children:"Save your profile!"})})]})]})})})}}]),n}(a.Component),w=Object(O.f)(N),C=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={profile:[],isEditing:!1,username:"",profilePicture:null,preview:""},a.input=a.input.bind(Object(h.a)(a)),a.uploadImage=a.uploadImage.bind(Object(h.a)(a)),a.editProfile=a.editProfile.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("api/v1/users/profiles/user").then((function(e){return e.json()})).then((function(t){return e.setState({profile:t})}))}},{key:"input",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"uploadImage",value:function(e){var t=this,n=e.target.files[0];this.setState({profilePicture:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"editProfile",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new FormData,this.state.profilePicture&&n.append("profile_picture",this.state.profilePicture),this.state.username&&n.append("username",this.state.username),a={method:"PATCH",headers:{"X-CSRFToken":v.a.get("csrftoken")},body:n},e.next=7,fetch("api/v1/users/profiles/user/",a);case 7:this.setState({isEditing:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=localStorage.getItem("isOrganizer"),t=localStorage.getItem("events"),n=localStorage.getItem("volunteers"),a=localStorage.getItem("eventsAttended");return Object(x.jsx)("section",{className:"section about-section gray-bg",id:"about",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"row align-items-center flex-row-reverse",children:[Object(x.jsx)("div",{className:"col-lg-6",children:Object(x.jsxs)("div",{className:"about-text go-to",children:[Object(x.jsx)("h3",{className:"dark-color",children:this.state.profile.username}),Object(x.jsx)("h6",{className:"theme-color lead",children:"false"===e&&"Thank you for being an amazing volunteer!"}),Object(x.jsxs)("p",{children:["I ",Object(x.jsx)("mark",{children:"created a volunteering platform"})," for people like you to be matched with amazing volunteering opportunities. Please feel free to explore the site and find what suits your needs."]}),Object(x.jsxs)("div",{className:"row about-list",children:[Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsxs)("div",{className:"media",children:["false"===e&&Object(x.jsx)(i.b,{to:"/eventlog",children:"See Event Log"}),"true"===e&&Object(x.jsx)(i.b,{to:"/organizerEvents",children:"See Your Events"})]}),Object(x.jsxs)("div",{className:"media",children:["false"===e&&Object(x.jsx)(i.b,{to:"/eventReviews",children:"See Your Feedback"}),"true"===e&&Object(x.jsx)(i.b,{to:"/createEvent",children:"Create A New Event"})]}),Object(x.jsxs)("div",{className:"media",children:["false"===e&&Object(x.jsx)(i.b,{to:"/",children:"See Events"}),"true"===e&&Object(x.jsx)(i.b,{to:"/volunteerList",children:"See Attendees"})]}),Object(x.jsxs)("div",{className:"media",children:["false"===e&&Object(x.jsx)(i.b,{to:"/gallery",children:"See your gallery"}),"true"===e&&Object(x.jsx)(i.b,{to:"/organizerReviews",children:"See Your Reviews"})]})]}),Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsxs)("div",{className:"media",children:[Object(x.jsx)("label",{children:"E-mail"}),Object(x.jsx)("p",{children:this.state.profile.email})]}),Object(x.jsxs)("div",{className:"media",children:[Object(x.jsx)("label",{children:"Phone"}),Object(x.jsx)("p",{children:"820-885-3321"})]}),Object(x.jsxs)("div",{className:"media",children:[Object(x.jsx)("label",{children:"Skype"}),Object(x.jsx)("p",{children:"skype.0404"})]})]})]})]})}),Object(x.jsx)("div",{className:"col-lg-6",children:Object(x.jsx)("div",{className:"about-avatar",children:Object(x.jsx)("img",{src:this.state.profile.profile_picture,title:"",alt:""})})})]}),Object(x.jsx)("div",{className:"counter",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-6 col-lg-3",children:Object(x.jsxs)("div",{className:"count-data text-center",children:[Object(x.jsxs)("h6",{className:"count h2","data-to":"500","data-speed":"500",children:["true"===e&&t,"false"===e&&a]}),Object(x.jsxs)("p",{className:"m-0px font-w-600",children:["true"===e&&"Events Organized","false"===e&&"Commitments"]})]})}),Object(x.jsx)("div",{className:"col-6 col-lg-3",children:Object(x.jsxs)("div",{className:"count-data text-center",children:[Object(x.jsxs)("h6",{className:"count h2","data-to":"150","data-speed":"150",children:["true"===e&&n," ","false"===e&&"WE"]}),Object(x.jsxs)("p",{className:"m-0px font-w-600",children:["true"===e&&"Volunteers Total"," ","false"===e&&"Do Good"]})]})}),Object(x.jsx)("div",{className:"col-6 col-lg-3",children:Object(x.jsxs)("div",{className:"count-data text-center",children:[Object(x.jsx)("h6",{className:"count h2","data-to":"850","data-speed":"850",children:"WE"}),Object(x.jsx)("p",{className:"m-0px font-w-600",children:"Help Your Community"})]})}),Object(x.jsx)("div",{className:"col-6 col-lg-3",children:Object(x.jsxs)("div",{className:"count-data text-center",children:[Object(x.jsx)("h6",{className:"count h2","data-to":"190","data-speed":"190",children:"WE"}),Object(x.jsx)("p",{className:"m-0px font-w-600",children:"Find Your Passion"})]})})]})})]})})}}]),n}(a.Component),S=n(28),E=n(29),T=n.n(E),z=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isEditing:!1},a.signUp=a.signUp.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"signUp",value:function(e){var t={event:e.id,organizer:e.organizer.id},n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(t)};fetch("api/v1/events/attendance/",n).then((function(e){return e.json()})),this.props.history.push("/eventLog")}},{key:"render",value:function(){var e=this,t=this.props.event,n=localStorage.getItem("isOrganizer");return console.log(t),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row align-items-center event-block no-gutters margin-40px-bottom",children:[Object(x.jsx)("div",{className:"col-lg-5 col-sm-12",children:Object(x.jsxs)("div",{className:"position-relative",children:[Object(x.jsx)("img",{src:"https://via.placeholder.com/450x280/FFB6C1/000000",alt:""}),Object(x.jsx)("div",{className:"events-date",children:Object(x.jsxs)("time",{children:["Date: ",Object(x.jsx)(T.a,{format:"MM/DD/YYYY",children:t.start})]})})]})}),Object(x.jsx)("div",{className:"col-lg-7 col-sm-12",children:Object(x.jsxs)("div",{className:"padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all",children:[Object(x.jsx)("h5",{className:"margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500",children:Object(x.jsx)("a",{href:"event-details.html",className:"text-theme-color",children:t.owner})}),Object(x.jsxs)("p",{children:[Object(x.jsx)("time",{children:Object(x.jsx)(T.a,{format:"h:mm a",children:t.start})}),"-",Object(x.jsx)("time",{children:Object(x.jsx)(T.a,{format:"h:mm a",children:t.end})})," ",Object(x.jsxs)("span",{children:["(",t.name,")"]})]}),Object(x.jsxs)("p",{children:[t.address," ",t.city,",",t.state," ",t.zipcode]}),t.has_owner_permissions&&Object(x.jsxs)("p",{children:["You have ",t.attendance.length," volunteer(s) attending this event"]}),Object(x.jsxs)("a",{className:"butn small margin-10px-top md-no-margin-top",children:["false"===n&&Object(x.jsx)("button",{type:"button",onClick:function(){return e.signUp(t)},children:"Sign Up for event"})," ",t.has_owner_permissions&&Object(x.jsx)("button",{type:"button",onClick:function(){return e.props.deleteEvent(t.id)},children:"Remove Event"})," ",Object(x.jsx)("i",{className:"fas fa-long-arrow-alt-right margin-10px-left"})]})]})})]})})})}}]),n}(a.Component),F=Object(O.f)(z),I=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={events:[]},a.updateEvent=a.updateEvent.bind(Object(h.a)(a)),a.filterEvents=a.filterEvents.bind(Object(h.a)(a)),a.showAll=a.showAll.bind(Object(h.a)(a)),a.deleteEvent=a.deleteEvent.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("api/v1/events/").then((function(e){return e.json()})).then((function(t){return e.setState({events:t})}))}},{key:"deleteEvent",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")}};fetch("api/v1/events/".concat(e,"/"),n).then((function(n){if(!n.ok)throw new Error("Network response was not ok");var a=Object(S.a)(t.state.events),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({events:a})}))}},{key:"updateEvent",value:function(e){var t=this,n=e.id,a={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/events/".concat(n,"/"),a).then((function(e){if(!e.ok)throw new Error("Network response was not ok");var a=Object(S.a)(t.state.events),s=a.findIndex((function(e){return e.id===n}));a[s]=a,t.setState({events:a})}))}},{key:"filterEvents",value:function(e){var t=this;fetch("/api/v1/articles/category/?category=".concat(e.target.name)).then((function(e){return e.json()})).then((function(e){return t.setState({articles:e})}))}},{key:"showAll",value:function(){var e=this;fetch("api/v1/articles/").then((function(e){return e.json()})).then((function(t){return e.setState({events:t})}))}},{key:"render",value:function(){var e=this,t=this.state.events.map((function(t){return Object(x.jsx)(F,{event:t,updateEvent:e.updateEvent,deleteEvent:e.deleteEvent},t.id)}));return Object(x.jsx)(x.Fragment,{children:t})}}]),n}(a.Component),P=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isEditing:!1,feedback:""},a.submitFeedback=a.submitFeedback.bind(Object(h.a)(a)),a.input=a.input.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"input",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"submitFeedback",value:function(e){e.preventDefault(),this.setState({isEditing:!1});var t={feedback:this.state.feedback,event:this.props.id,organizer:this.props.organizerId},n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(t)};fetch("api/v1/reviews/",n).then((function(e){return e.json()}))}},{key:"render",value:function(){var e=this;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{onSubmit:this.submitFeedback,children:[Object(x.jsxs)("div",{className:"form-group",children:[!0===this.state.isEditing&&Object(x.jsx)("textarea",{className:"form-control",name:"feedback",value:this.state.feedback,cols:"30",rows:"10",onChange:this.input}),!0===this.state.isEditing&&Object(x.jsx)("button",{type:"submit",className:"btn btn-success btn-lg btn-block",children:"Submit Feedback"})]}),!1===this.state.isEditing&&Object(x.jsx)("button",{type:"button",onClick:function(){return e.setState({isEditing:!0})},children:"Give feedback to this org"})]})})}}]),n}(a.Component),A=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={eventLog:[]},a.removeVolunteer=a.removeVolunteer.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("api/v1/events/event_log/").then((function(e){return e.json()})).then((function(t){return e.setState({eventLog:t})}))}},{key:"removeVolunteer",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")}};fetch("api/v1/events/attendance/".concat(e,"/"),n).then((function(n){if(n.ok){var a=Object(S.a)(t.state.eventLog),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({eventLog:a})}}))}},{key:"render",value:function(){var e=this,t=this.state.eventLog.map((function(t){return Object(x.jsx)("li",{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("h4",{children:[t.event.name," hosted by ",t.event.organizer.username]}),Object(x.jsx)("div",{className:"card",children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("p",{children:Object(x.jsxs)("time",{children:["Date: ",Object(x.jsx)(T.a,{format:"MM/DD/YYYY",children:t.event.start})]})}),Object(x.jsxs)("p",{children:[Object(x.jsx)("time",{children:Object(x.jsx)(T.a,{format:"h:mm a",children:t.event.start})}),"-",Object(x.jsx)("time",{children:Object(x.jsx)(T.a,{format:"h:mm a",children:t.event.end})})]}),Object(x.jsxs)("p",{className:"card-text",children:[t.event.address," ",t.event.city,",",t.event.state," ",t.event.zip_code]}),t.confirmed?Object(x.jsxs)("p",{className:"card-text",children:["Attendance: ",Object(x.jsx)("strong",{children:"Confirmed"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{className:"card-text",children:"Attendance: Pending confirmation"}),Object(x.jsx)("button",{type:"buton",onClick:function(){e.removeVolunteer(t.id)},children:"Remove me from this event"})]}),t.confirmed&&Object(x.jsx)(P,{id:t.event.id,organizerId:t.organizer.id})]})})]})},t.id)}));return localStorage.setItem("eventsAttended",t.length),Object(x.jsx)(x.Fragment,{children:t})}}]),n}(a.Component),D=n(21),R=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={name:"",category:null,start:"",end:"",address:"",city:"",state:"",zipcode:""},a.input=a.input.bind(Object(h.a)(a)),a.dateChange=a.dateChange.bind(Object(h.a)(a)),a.newEvent=a.newEvent.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"input",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"dateChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"newEvent",value:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(this.state)};fetch("api/v1/events/",t).then((function(e){return e.json()})),this.props.history.push("/organizerEvents")}},{key:"render",value:function(){var e=this;return Object(x.jsx)("div",{className:"signup-form new-post",children:Object(x.jsxs)("form",{onSubmit:this.newEvent,children:[Object(x.jsx)("h2",{children:"New Event"}),Object(x.jsxs)(D.a,{className:"form-group",children:[Object(x.jsx)(D.a.Toggle,{variant:"success",id:"dropdown-basic",children:this.state.category?Object(x.jsx)("span",{children:this.state.category}):Object(x.jsx)("span",{children:"Choose a Category"})}),Object(x.jsxs)(D.a.Menu,{children:[Object(x.jsx)(D.a.Item,{onClick:function(){return e.setState({category:"Community Development"})},children:"Community Development"}),Object(x.jsx)(D.a.Item,{onClick:function(){return e.setState({category:"Animals"})},children:"Animals"}),Object(x.jsx)(D.a.Item,{onClick:function(){return e.setState({category:"Children and Youth"})},children:"Children and Youth"}),Object(x.jsx)(D.a.Item,{onClick:function(){return e.setState({category:"Environment"})},children:"Environment"}),Object(x.jsx)(D.a.Item,{onClick:function(){return e.setState({category:"Health"})},children:"Health"})]})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"name",className:"form-label",children:"What is your event's name?"}),Object(x.jsx)("input",{className:"form-control",name:"name",value:this.state.name,required:"required",onChange:this.input})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"start",className:"form-label",children:"When does your event start?"}),Object(x.jsx)("input",{className:"form-control",type:"datetime-local",name:"start",value:this.state.start,required:"required",onChange:this.dateChange,format:"yyyy-MM-ddThh:mm"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"end",className:"form-label",children:"When does your event end?"}),Object(x.jsx)("input",{className:"form-control",type:"datetime-local",name:"end",value:this.state.end,required:"required",onChange:this.dateChange,format:"yyyy-MM-ddThh:mm"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"inputAddress",children:"Address"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"inputAddress",name:"address",value:this.state.address,placeholder:"1234 Main St",onChange:this.input})]}),Object(x.jsxs)("div",{className:"form-row",children:[Object(x.jsxs)("div",{className:"form-group col-md-6",children:[Object(x.jsx)("label",{htmlFor:"inputCity",children:"City"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"inputCity",name:"city",value:this.state.city,onChange:this.input})]}),Object(x.jsxs)("div",{className:"form-group col-md-3",children:[Object(x.jsx)("label",{htmlFor:"inputState",children:"State"}),Object(x.jsxs)(D.a,{className:"form-group",children:[Object(x.jsx)(D.a.Toggle,{variant:"success",id:"dropdown-basic",children:this.state.state?Object(x.jsx)("span",{children:this.state.state}):Object(x.jsx)("span",{children:"Choose state"})}),Object(x.jsx)(D.a.Menu,{children:Object(x.jsx)(D.a.Item,{onClick:function(){return e.setState({state:"SC"})},children:"SC"})})]})]}),Object(x.jsxs)("div",{className:"form-group col-md-3",children:[Object(x.jsx)("label",{htmlFor:"inputZip",children:"Zip"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"inputZip",name:"zipcode",value:this.state.value,onChange:this.input})]})]}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-success btn-lg btn-block",children:"Submit"})})]})})}}]),n}(a.Component),q=Object(O.f)(R),L=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={events:[]},a.deleteEvent=a.deleteEvent.bind(Object(h.a)(a)),a.updateEvent=a.updateEvent.bind(Object(h.a)(a)),a.filterEvents=a.filterEvents.bind(Object(h.a)(a)),a.showAll=a.showAll.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("api/v1/events/organizer_event/").then((function(e){return e.json()})).then((function(t){return e.setState({events:t})}))}},{key:"deleteEvent",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")}};fetch("api/v1/events/".concat(e,"/"),n).then((function(n){if(!n.ok)throw new Error("Network response was not ok");var a=Object(S.a)(t.state.events),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({events:a})}))}},{key:"updateEvent",value:function(e){var t=this,n=e.id,a={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/events/".concat(n,"/"),a).then((function(e){if(!e.ok)throw new Error("Network response was not ok");var a=Object(S.a)(t.state.events),s=a.findIndex((function(e){return e.id===n}));a[s]=a,t.setState({events:a})}))}},{key:"filterEvents",value:function(e){var t=this;fetch("/api/v1/articles/category/?category=".concat(e.target.name)).then((function(e){return e.json()})).then((function(e){return t.setState({articles:e})}))}},{key:"showAll",value:function(){var e=this;fetch("api/v1/articles/").then((function(e){return e.json()})).then((function(t){return e.setState({events:t})}))}},{key:"render",value:function(){var e=this,t=this.state.events.map((function(t){return Object(x.jsx)(F,{event:t,updateEvent:e.updateEvent},t.id)}));return localStorage.setItem("events",t.length),Object(x.jsx)(x.Fragment,{children:t})}}]),n}(a.Component),M=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={reviews:[]},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("api/v1/reviews/").then((function(e){return e.json()})).then((function(t){return e.setState({reviews:t})}))}},{key:"render",value:function(){var e=this.state.reviews.map((function(e){return Object(x.jsxs)("li",{children:[Object(x.jsx)("p",{children:e.event_name}),Object(x.jsx)("p",{children:e.feedback})]},e.id)}));return Object(x.jsx)("ul",{children:e})}}]),n}(a.Component),_=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={volunteers:[]},a.confirmAttendance=a.confirmAttendance.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("api/v1/events/attendance/").then((function(e){return e.json()})).then((function(t){return e.setState({volunteers:t})}))}},{key:"confirmAttendance",value:function(e){console.log(e);var t={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify({confirmed:!0})};fetch("api/v1/events/attendance/".concat(e,"/"),t).then((function(e){return e.json()})),this.props.history.push("/profile")}},{key:"render",value:function(){var e=this,t=this.state.volunteers.map((function(t){return Object(x.jsx)("li",{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"card",children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsxs)("p",{className:"card-text",children:["Your Event: ",t.name]}),Object(x.jsxs)("p",{className:"card-text",children:["Volunteer: ",t.volunteer," ",t.last_name]}),t.confirmed?Object(x.jsx)("p",{children:Object(x.jsx)("strong",{children:"Attendance Confirmed by Organization"})}):Object(x.jsx)("button",{className:"btn btn-primary edit-profile",onClick:function(){e.confirmAttendance(t.id)},children:"Confirm Attendance"})]})})})},t.id)}));return localStorage.setItem("volunteers",t.length),Object(x.jsx)(x.Fragment,{children:t})}}]),n}(a.Component),Y=Object(O.f)(_),X=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(j.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{class:"row",children:[Object(x.jsxs)("div",{class:"col-lg-4 col-md-12 mb-4 mb-lg-0",children:[Object(x.jsx)("img",{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg",class:"w-100 shadow-1-strong rounded mb-4",alt:""}),Object(x.jsx)("img",{src:"https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg",class:"w-100 shadow-1-strong rounded mb-4",alt:""})]}),Object(x.jsxs)("div",{class:"col-lg-4 mb-4 mb-lg-0",children:[Object(x.jsx)("img",{src:"https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg",class:"w-100 shadow-1-strong rounded mb-4",alt:""}),Object(x.jsx)("img",{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg",class:"w-100 shadow-1-strong rounded mb-4",alt:""})]}),Object(x.jsxs)("div",{class:"col-lg-4 mb-4 mb-lg-0",children:[Object(x.jsx)("img",{src:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg",class:"w-100 shadow-1-strong rounded mb-4",alt:""}),Object(x.jsx)("img",{src:"https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg",class:"w-100 shadow-1-strong rounded mb-4",alt:""})]})]})}}]),n}(a.Component),U=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={reviews:[]},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("api/v1/reviews/organizer_reviews/").then((function(e){return e.json()})).then((function(t){return e.setState({reviews:t})}))}},{key:"render",value:function(){var e=this.state.reviews.map((function(e){return Object(x.jsxs)("li",{children:[Object(x.jsx)("p",{children:e.event_name}),Object(x.jsx)("p",{children:e.feedback}),Object(x.jsxs)("p",{children:["by ",e.author_name]})]},e.id)}));return Object(x.jsx)("ul",{children:e})}}]),n}(a.Component),W=n(47),J={width:"500px",height:"500px"},V=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(x.jsx)(W.Map,{google:this.props.google,zoom:14,style:J,initialCenter:{lat:34.92464,lng:-81.96402}})}}]),n}(a.Component),H=Object(W.GoogleApiWrapper)({apiKey:"AIzaSyB3oFicj-OEls80olCxWtoq-4unEDA46rw"})(V),B=n(48),G=n(52),Z=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={selection:"home"},a.login=a.login.bind(Object(h.a)(a)),a.logout=a.logout.bind(Object(h.a)(a)),a.navigation=a.navigation.bind(Object(h.a)(a)),a.registration=a.registration.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"login",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("rest-auth/login/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=15;break}return e.next=8,s.json().catch(a);case 8:r=e.sent,v.a.set("Authorization","Token ".concat(r.key)),localStorage.setItem("isOrganizer",r.user.is_organizer),localStorage.setItem("user",r.user.username),this.props.history.push("/profile"),e.next=15;break;case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")}},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",n).catch(a);case 4:e.sent.ok&&(v.a.remove("Authorization"),this.props.history.push("/"),localStorage.removeItem("isOrganizer"),localStorage.removeItem("user"),localStorage.removeItem("events"));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"navigation",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({selection:t});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"registration",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=5,fetch("/rest-auth/registration/",n).catch(a);case 5:if(!(s=e.sent).ok){e.next=14;break}return e.next=9,s.json().catch(a);case 9:r=e.sent,v.a.set("Authorization","Token ".concat(r.key)),this.props.history.push("/createuserprofile"),e.next=14;break;case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=localStorage.getItem("user");return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(B.a,{className:"nav-header",bg:"light",variant:"dark",children:[Object(x.jsx)(B.a.Brand,{children:Object(x.jsx)(i.b,{to:"/",children:"WeCare"})}),Object(x.jsxs)(G.a,{className:"mr-auto",children:[Object(x.jsx)(i.b,{className:"btn text-decoration-none",to:"/",children:"About"}),Object(x.jsx)(i.b,{className:"btn text-decoration-none",to:"/events",children:"Events"}),Object(x.jsx)(i.b,{className:"btn text-decoration-none",to:"/",children:"Contact Us"}),!!v.a.get("Authorization")&&Object(x.jsx)(i.b,{className:"btn text-decoration-none",to:"/profile",children:"View Profile"})]}),v.a.get("Authorization")?Object(x.jsx)("button",{type:"button",className:"btn text-decoration-none",onClick:this.logout,children:"Logout"}):Object(x.jsx)(i.b,{className:"btn text-decoration-none",to:"/login",children:"Login"}),e&&"Welcome back ".concat(e,"!")]}),Object(x.jsxs)(O.c,{children:[Object(x.jsxs)(O.a,{exact:!0,path:"/",children:[Object(x.jsx)("div",{children:"I am the homepage"}),Object(x.jsx)(H,{})]}),Object(x.jsx)(O.a,{path:"/login",children:Object(x.jsx)(g,{login:this.login})}),Object(x.jsx)(O.a,{path:"/registration",children:Object(x.jsx)(k,{registration:this.registration})}),Object(x.jsx)(O.a,{path:"/createuserprofile",children:Object(x.jsx)(w,{})}),Object(x.jsx)(O.a,{path:"/events",children:Object(x.jsx)(I,{})}),Object(x.jsx)(O.a,{path:"/profile",children:Object(x.jsx)(C,{})}),Object(x.jsx)(O.a,{path:"/eventlog",children:Object(x.jsx)(A,{})}),Object(x.jsx)(O.a,{path:"/createEvent",children:Object(x.jsx)(q,{})}),Object(x.jsx)(O.a,{path:"/organizerEvents",children:Object(x.jsx)(L,{})}),Object(x.jsx)(O.a,{path:"/createReview",children:Object(x.jsx)(P,{})}),Object(x.jsx)(O.a,{path:"/eventReviews",children:Object(x.jsx)(M,{})}),Object(x.jsx)(O.a,{path:"/volunteerList",children:Object(x.jsx)(Y,{})}),Object(x.jsx)(O.a,{path:"/gallery",children:Object(x.jsx)(X,{})}),Object(x.jsx)(O.a,{path:"/organizerReviews",children:Object(x.jsx)(U,{})})]})]})}}]),n}(a.Component),K=Object(O.f)(Z),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(K,{})})}),document.getElementById("root")),Q()}},[[86,1,2]]]);
//# sourceMappingURL=main.e43deff0.chunk.js.map