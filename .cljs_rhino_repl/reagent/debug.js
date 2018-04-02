// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__41728__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__41728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41729__i = 0, G__41729__a = new Array(arguments.length -  0);
while (G__41729__i < G__41729__a.length) {G__41729__a[G__41729__i] = arguments[G__41729__i + 0]; ++G__41729__i;}
  args = new cljs.core.IndexedSeq(G__41729__a,0,null);
} 
return G__41728__delegate.call(this,args);};
G__41728.cljs$lang$maxFixedArity = 0;
G__41728.cljs$lang$applyTo = (function (arglist__41730){
var args = cljs.core.seq(arglist__41730);
return G__41728__delegate(args);
});
G__41728.cljs$core$IFn$_invoke$arity$variadic = G__41728__delegate;
return G__41728;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__41731__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__41731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41732__i = 0, G__41732__a = new Array(arguments.length -  0);
while (G__41732__i < G__41732__a.length) {G__41732__a[G__41732__i] = arguments[G__41732__i + 0]; ++G__41732__i;}
  args = new cljs.core.IndexedSeq(G__41732__a,0,null);
} 
return G__41731__delegate.call(this,args);};
G__41731.cljs$lang$maxFixedArity = 0;
G__41731.cljs$lang$applyTo = (function (arglist__41733){
var args = cljs.core.seq(arglist__41733);
return G__41731__delegate(args);
});
G__41731.cljs$core$IFn$_invoke$arity$variadic = G__41731__delegate;
return G__41731;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
