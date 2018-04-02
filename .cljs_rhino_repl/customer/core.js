// Compiled by ClojureScript 1.10.238 {}
goog.provide('customer.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('markdown.core');
goog.require('ajax.core');
goog.require('goog.History');
if(typeof customer.core.session !== 'undefined'){
} else {
customer.core.session = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null));
}
customer.core.nav_link = (function customer$core$nav_link(uri,title,page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,page,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,customer.core.session))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),uri], null),title], null)], null);
});
customer.core.navbar = (function customer$core$navbar(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-dark.bg-primary.navbar-expand-md","nav.navbar.navbar-dark.bg-primary.navbar-expand-md",1363769030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"navigation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-toggler.hidden-sm-up","button.navbar-toggler.hidden-sm-up",-398271905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"collapse",new cljs.core.Keyword(null,"data-target","data-target",-113904678),"#collapsing-navbar"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.navbar-toggler-icon","span.navbar-toggler-icon",-1181749636)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"customer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#collapsing-navbar.collapse.navbar-collapse","div#collapsing-navbar.collapse.navbar-collapse",569923064),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.mr-auto","ul.nav.navbar-nav.mr-auto",-279836777),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [customer.core.nav_link,"#/","Home",new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [customer.core.nav_link,"#/about","About",new cljs.core.Keyword(null,"about","about",1423892543)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [customer.core.nav_link,"#/register","Register",new cljs.core.Keyword(null,"register","register",1968522516)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [customer.core.nav_link,"#/login","Login",new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [customer.core.nav_link,"#/buy","Buy",new cljs.core.Keyword(null,"buy","buy",-794379565)], null)], null)], null)], null);
});
customer.core.send_post_BANG_ = (function customer$core$send_post_BANG_(fields){
return ajax.core.POST.call(null,"/register",cljs.core.deref.call(null,fields));
});
customer.core.register_form = (function customer$core$register_form(){
var fields = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form.group","div.form.group",936262520),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"First Na: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"firstname","firstname",1659984849),new cljs.core.Keyword(null,"firstname","firstname",1659984849),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (fields){
return (function (p1__43126_SHARP_){
return cljs.core.swap_BANG_.call(null,fields,cljs.core.assoc,new cljs.core.Keyword(null,"firstname","firstname",1659984849),p1__43126_SHARP_.target.value);
});})(fields))
,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,fields).call(null,new cljs.core.Keyword(null,"firstname","firstname",1659984849))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Last Name: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"lastname","lastname",-265181465),new cljs.core.Keyword(null,"lastname","lastname",-265181465),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (fields){
return (function (p1__43127_SHARP_){
return cljs.core.swap_BANG_.call(null,fields,cljs.core.assoc,new cljs.core.Keyword(null,"lastname","lastname",-265181465),p1__43127_SHARP_.target.value);
});})(fields))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"lastname","lastname",-265181465).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fields))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Email: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (fields){
return (function (p1__43128_SHARP_){
return cljs.core.swap_BANG_.call(null,fields,cljs.core.assoc,new cljs.core.Keyword(null,"email","email",1415816706),p1__43128_SHARP_.target.value);
});})(fields))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fields))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Phone Number: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (fields){
return (function (p1__43129_SHARP_){
return cljs.core.swap_BANG_.call(null,fields,cljs.core.assoc,new cljs.core.Keyword(null,"phone","phone",-763596057),p1__43129_SHARP_.target.value);
});})(fields))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fields))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Password: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (fields){
return (function (p1__43130_SHARP_){
return cljs.core.swap_BANG_.call(null,fields,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__43130_SHARP_.target.value);
});})(fields))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fields))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fields){
return (function (){
return customer.core.send_post_BANG_.call(null,fields);
});})(fields))
,new cljs.core.Keyword(null,"value","value",305978217),"Submit"], null)], null)], null)], null);
});
;})(fields))
});
customer.core.about_page = (function customer$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"/img/warning_clojure.png"].join('')], null)], null)], null)], null)], null);
});
customer.core.register_page = (function customer$core$register_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span12","div.span12",-1039736360),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [customer.core.register_form], null)], null)], null);
});
customer.core.login_page = (function customer$core$login_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"/img/warning_clojure.png"].join('')], null)], null)], null)], null)], null);
});
customer.core.buy_page = (function customer$core$buy_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"/img/warning_clojure.png"].join('')], null)], null)], null)], null)], null);
});
customer.core.home_page = (function customer$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,customer.core.session));
if(cljs.core.truth_(temp__5457__auto__)){
var docs = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>div.col-sm-12","div.row>div.col-sm-12",1607036239),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markdown.core.md__GT_html.call(null,docs)], null)], null)], null)], null);
} else {
return null;
}
})()], null);
});
customer.core.pages = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return customer.core.home_page;},new cljs.core.Symbol("customer.core","home-page","customer.core/home-page",1222551448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"customer.core","customer.core",991301996,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/s33r/Projects/customer/src/cljs/customer/core.cljs",16,1,107,107,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(customer.core.home_page)?customer.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return customer.core.about_page;},new cljs.core.Symbol("customer.core","about-page","customer.core/about-page",-39093096,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"customer.core","customer.core",991301996,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/home/s33r/Projects/customer/src/cljs/customer/core.cljs",17,1,81,81,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(customer.core.about_page)?customer.core.about_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Var(function(){return customer.core.register_page;},new cljs.core.Symbol("customer.core","register-page","customer.core/register-page",1854785742,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"customer.core","customer.core",991301996,null),new cljs.core.Symbol(null,"register-page","register-page",-334599139,null),"/home/s33r/Projects/customer/src/cljs/customer/core.cljs",20,1,87,87,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(customer.core.register_page)?customer.core.register_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Var(function(){return customer.core.login_page;},new cljs.core.Symbol("customer.core","login-page","customer.core/login-page",1597280253,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"customer.core","customer.core",991301996,null),new cljs.core.Symbol(null,"login-page","login-page",-625728980,null),"/home/s33r/Projects/customer/src/cljs/customer/core.cljs",17,1,93,93,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(customer.core.login_page)?customer.core.login_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"buy","buy",-794379565),new cljs.core.Var(function(){return customer.core.buy_page;},new cljs.core.Symbol("customer.core","buy-page","customer.core/buy-page",905258357,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"customer.core","customer.core",991301996,null),new cljs.core.Symbol(null,"buy-page","buy-page",-1200193116,null),"/home/s33r/Projects/customer/src/cljs/customer/core.cljs",15,1,99,99,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(customer.core.buy_page)?customer.core.buy_page.cljs$lang$test:null)]))], null);
customer.core.page = (function customer$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [customer.core.pages.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,customer.core.session)))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__38598__auto___43136 = (function (params__38599__auto__){
if(cljs.core.map_QMARK_.call(null,params__38599__auto__)){
var map__43131 = params__38599__auto__;
var map__43131__$1 = ((((!((map__43131 == null)))?(((((map__43131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43131):map__43131);
return cljs.core.swap_BANG_.call(null,customer.core.session,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__38599__auto__)){
var vec__43133 = params__38599__auto__;
return cljs.core.swap_BANG_.call(null,customer.core.session,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__38598__auto___43136);

var action__38598__auto___43142 = (function (params__38599__auto__){
if(cljs.core.map_QMARK_.call(null,params__38599__auto__)){
var map__43137 = params__38599__auto__;
var map__43137__$1 = ((((!((map__43137 == null)))?(((((map__43137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43137):map__43137);
return cljs.core.swap_BANG_.call(null,customer.core.session,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__38599__auto__)){
var vec__43139 = params__38599__auto__;
return cljs.core.swap_BANG_.call(null,customer.core.session,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__38598__auto___43142);

var action__38598__auto___43148 = (function (params__38599__auto__){
if(cljs.core.map_QMARK_.call(null,params__38599__auto__)){
var map__43143 = params__38599__auto__;
var map__43143__$1 = ((((!((map__43143 == null)))?(((((map__43143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43143):map__43143);
return cljs.core.swap_BANG_.call(null,customer.core.session,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"register","register",1968522516));
} else {
if(cljs.core.vector_QMARK_.call(null,params__38599__auto__)){
var vec__43145 = params__38599__auto__;
return cljs.core.swap_BANG_.call(null,customer.core.session,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"register","register",1968522516));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/register",action__38598__auto___43148);

customer.core.hook_browser_navigation_BANG_ = (function customer$core$hook_browser_navigation_BANG_(){
var G__43149 = (new goog.History());
goog.events.listen(G__43149,goog.history.EventType.NAVIGATE,((function (G__43149){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__43149))
);

G__43149.setEnabled(true);

return G__43149;
});
customer.core.fetch_docs_BANG_ = (function customer$core$fetch_docs_BANG_(){
return ajax.core.GET.call(null,"/docs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__43150_SHARP_){
return cljs.core.swap_BANG_.call(null,customer.core.session,cljs.core.assoc,new cljs.core.Keyword(null,"docs","docs",-1974280502),p1__43150_SHARP_);
})], null));
});
customer.core.mount_components = (function customer$core$mount_components(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return customer.core.navbar;},new cljs.core.Symbol("customer.core","navbar","customer.core/navbar",1136253191,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"customer.core","customer.core",991301996,null),new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),"/home/s33r/Projects/customer/src/cljs/customer/core.cljs",13,1,18,18,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(customer.core.navbar)?customer.core.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return customer.core.page;},new cljs.core.Symbol("customer.core","page","customer.core/page",451406629,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"customer.core","customer.core",991301996,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"/home/s33r/Projects/customer/src/cljs/customer/core.cljs",11,1,122,122,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(customer.core.page)?customer.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
customer.core.init_BANG_ = (function customer$core$init_BANG_(){
customer.core.fetch_docs_BANG_.call(null);

customer.core.hook_browser_navigation_BANG_.call(null);

return customer.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map
