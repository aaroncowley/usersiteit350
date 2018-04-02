// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42960 = arguments.length;
var i__4500__auto___42961 = (0);
while(true){
if((i__4500__auto___42961 < len__4499__auto___42960)){
args__4502__auto__.push((arguments[i__4500__auto___42961]));

var G__42962 = (i__4500__auto___42961 + (1));
i__4500__auto___42961 = G__42962;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__42956){
var vec__42957 = p__42956;
var default$ = cljs.core.nth.call(null,vec__42957,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get.cljs$lang$applyTo = (function (seq42954){
var G__42955 = cljs.core.first.call(null,seq42954);
var seq42954__$1 = cljs.core.next.call(null,seq42954);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42955,seq42954__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42969 = arguments.length;
var i__4500__auto___42970 = (0);
while(true){
if((i__4500__auto___42970 < len__4499__auto___42969)){
args__4502__auto__.push((arguments[i__4500__auto___42970]));

var G__42971 = (i__4500__auto___42970 + (1));
i__4500__auto___42970 = G__42971;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__42965){
var vec__42966 = p__42965;
var default$ = cljs.core.nth.call(null,vec__42966,(0),null);
var or__3922__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in.cljs$lang$applyTo = (function (seq42963){
var G__42964 = cljs.core.first.call(null,seq42963);
var seq42963__$1 = cljs.core.next.call(null,seq42963);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42964,seq42963__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42974 = arguments.length;
var i__4500__auto___42975 = (0);
while(true){
if((i__4500__auto___42975 < len__4499__auto___42974)){
args__4502__auto__.push((arguments[i__4500__auto___42975]));

var G__42976 = (i__4500__auto___42975 + (1));
i__4500__auto___42975 = G__42976;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq42972){
var G__42973 = cljs.core.first.call(null,seq42972);
var seq42972__$1 = cljs.core.next.call(null,seq42972);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42973,seq42972__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42983 = arguments.length;
var i__4500__auto___42984 = (0);
while(true){
if((i__4500__auto___42984 < len__4499__auto___42983)){
args__4502__auto__.push((arguments[i__4500__auto___42984]));

var G__42985 = (i__4500__auto___42984 + (1));
i__4500__auto___42984 = G__42985;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__42979){
var vec__42980 = p__42979;
var default$ = cljs.core.nth.call(null,vec__42980,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq42977){
var G__42978 = cljs.core.first.call(null,seq42977);
var seq42977__$1 = cljs.core.next.call(null,seq42977);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42978,seq42977__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42992 = arguments.length;
var i__4500__auto___42993 = (0);
while(true){
if((i__4500__auto___42993 < len__4499__auto___42992)){
args__4502__auto__.push((arguments[i__4500__auto___42993]));

var G__42994 = (i__4500__auto___42993 + (1));
i__4500__auto___42993 = G__42994;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__42988){
var vec__42989 = p__42988;
var default$ = cljs.core.nth.call(null,vec__42989,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq42986){
var G__42987 = cljs.core.first.call(null,seq42986);
var seq42986__$1 = cljs.core.next.call(null,seq42986);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42987,seq42986__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42999 = arguments.length;
var i__4500__auto___43000 = (0);
while(true){
if((i__4500__auto___43000 < len__4499__auto___42999)){
args__4502__auto__.push((arguments[i__4500__auto___43000]));

var G__43001 = (i__4500__auto___43000 + (1));
i__4500__auto___43000 = G__43001;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__42995_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__42995_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq42996){
var G__42997 = cljs.core.first.call(null,seq42996);
var seq42996__$1 = cljs.core.next.call(null,seq42996);
var G__42998 = cljs.core.first.call(null,seq42996__$1);
var seq42996__$2 = cljs.core.next.call(null,seq42996__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42997,G__42998,seq42996__$2);
});

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43006 = arguments.length;
var i__4500__auto___43007 = (0);
while(true){
if((i__4500__auto___43007 < len__4499__auto___43006)){
args__4502__auto__.push((arguments[i__4500__auto___43007]));

var G__43008 = (i__4500__auto___43007 + (1));
i__4500__auto___43007 = G__43008;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__43002_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__43002_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq43003){
var G__43004 = cljs.core.first.call(null,seq43003);
var seq43003__$1 = cljs.core.next.call(null,seq43003);
var G__43005 = cljs.core.first.call(null,seq43003__$1);
var seq43003__$2 = cljs.core.next.call(null,seq43003__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43004,G__43005,seq43003__$2);
});


//# sourceMappingURL=session.js.map
