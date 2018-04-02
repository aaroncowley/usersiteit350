// Compiled by ClojureScript 1.10.238 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__42481){
var map__42482 = p__42481;
var map__42482__$1 = ((((!((map__42482 == null)))?(((((map__42482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42482):map__42482);
var replacement_transformers = cljs.core.get.call(null,map__42482__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__42482__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__42482__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__42482,map__42482__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_42484 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__42485 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_42484,map__42482,map__42482__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__42488,transformer){
var vec__42489 = p__42488;
var text = cljs.core.nth.call(null,vec__42489,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__42489,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_42484,map__42482,map__42482__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__3922__auto__ = replacement_transformers;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__42485,(0),null);
var new_state = cljs.core.nth.call(null,vec__42485,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_42484;
}});
;})(map__42482,map__42482__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42494 = arguments.length;
var i__4500__auto___42495 = (0);
while(true){
if((i__4500__auto___42495 < len__4499__auto___42494)){
args__4502__auto__.push((arguments[i__4500__auto___42495]));

var G__42496 = (i__4500__auto___42495 + (1));
i__4500__auto___42495 = G__42496;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.format.cljs$lang$applyTo = (function (seq42492){
var G__42493 = cljs.core.first.call(null,seq42492);
var seq42492__$1 = cljs.core.next.call(null,seq42492);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42493,seq42492__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__42497_42501 = cljs.core.seq.call(null,lines);
var chunk__42498_42502 = null;
var count__42499_42503 = (0);
var i__42500_42504 = (0);
while(true){
if((i__42500_42504 < count__42499_42503)){
var line_42505 = cljs.core._nth.call(null,chunk__42498_42502,i__42500_42504);
markdown.links.parse_reference_link.call(null,line_42505,references);


var G__42506 = seq__42497_42501;
var G__42507 = chunk__42498_42502;
var G__42508 = count__42499_42503;
var G__42509 = (i__42500_42504 + (1));
seq__42497_42501 = G__42506;
chunk__42498_42502 = G__42507;
count__42499_42503 = G__42508;
i__42500_42504 = G__42509;
continue;
} else {
var temp__5457__auto___42510 = cljs.core.seq.call(null,seq__42497_42501);
if(temp__5457__auto___42510){
var seq__42497_42511__$1 = temp__5457__auto___42510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42497_42511__$1)){
var c__4319__auto___42512 = cljs.core.chunk_first.call(null,seq__42497_42511__$1);
var G__42513 = cljs.core.chunk_rest.call(null,seq__42497_42511__$1);
var G__42514 = c__4319__auto___42512;
var G__42515 = cljs.core.count.call(null,c__4319__auto___42512);
var G__42516 = (0);
seq__42497_42501 = G__42513;
chunk__42498_42502 = G__42514;
count__42499_42503 = G__42515;
i__42500_42504 = G__42516;
continue;
} else {
var line_42517 = cljs.core.first.call(null,seq__42497_42511__$1);
markdown.links.parse_reference_link.call(null,line_42517,references);


var G__42518 = cljs.core.next.call(null,seq__42497_42511__$1);
var G__42519 = null;
var G__42520 = (0);
var G__42521 = (0);
seq__42497_42501 = G__42518;
chunk__42498_42502 = G__42519;
count__42499_42503 = G__42520;
i__42500_42504 = G__42521;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__42522_42526 = cljs.core.seq.call(null,lines);
var chunk__42523_42527 = null;
var count__42524_42528 = (0);
var i__42525_42529 = (0);
while(true){
if((i__42525_42529 < count__42524_42528)){
var line_42530 = cljs.core._nth.call(null,chunk__42523_42527,i__42525_42529);
markdown.links.parse_footnote_link.call(null,line_42530,footnotes);


var G__42531 = seq__42522_42526;
var G__42532 = chunk__42523_42527;
var G__42533 = count__42524_42528;
var G__42534 = (i__42525_42529 + (1));
seq__42522_42526 = G__42531;
chunk__42523_42527 = G__42532;
count__42524_42528 = G__42533;
i__42525_42529 = G__42534;
continue;
} else {
var temp__5457__auto___42535 = cljs.core.seq.call(null,seq__42522_42526);
if(temp__5457__auto___42535){
var seq__42522_42536__$1 = temp__5457__auto___42535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42522_42536__$1)){
var c__4319__auto___42537 = cljs.core.chunk_first.call(null,seq__42522_42536__$1);
var G__42538 = cljs.core.chunk_rest.call(null,seq__42522_42536__$1);
var G__42539 = c__4319__auto___42537;
var G__42540 = cljs.core.count.call(null,c__4319__auto___42537);
var G__42541 = (0);
seq__42522_42526 = G__42538;
chunk__42523_42527 = G__42539;
count__42524_42528 = G__42540;
i__42525_42529 = G__42541;
continue;
} else {
var line_42542 = cljs.core.first.call(null,seq__42522_42536__$1);
markdown.links.parse_footnote_link.call(null,line_42542,footnotes);


var G__42543 = cljs.core.next.call(null,seq__42522_42536__$1);
var G__42544 = null;
var G__42545 = (0);
var G__42546 = (0);
seq__42522_42526 = G__42543;
chunk__42523_42527 = G__42544;
count__42524_42528 = G__42545;
i__42525_42529 = G__42546;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__42548 = cljs.core.split_with.call(null,(function (p1__42547_SHARP_){
return cljs.core.not_empty.call(null,p1__42547_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__42548,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__42548,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_42551 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_42552 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_42551,_STAR_formatter_STAR_42552){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_42551,_STAR_formatter_STAR_42552))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__42553 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__42553,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__42553,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__42559_42566 = lines__$1;
var vec__42560_42567 = G__42559_42566;
var seq__42561_42568 = cljs.core.seq.call(null,vec__42560_42567);
var first__42562_42569 = cljs.core.first.call(null,seq__42561_42568);
var seq__42561_42570__$1 = cljs.core.next.call(null,seq__42561_42568);
var line_42571 = first__42562_42569;
var more_42572 = seq__42561_42570__$1;
var state_42573 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__42559_42574__$1 = G__42559_42566;
var state_42575__$1 = state_42573;
while(true){
var vec__42563_42576 = G__42559_42574__$1;
var seq__42564_42577 = cljs.core.seq.call(null,vec__42563_42576);
var first__42565_42578 = cljs.core.first.call(null,seq__42564_42577);
var seq__42564_42579__$1 = cljs.core.next.call(null,seq__42564_42577);
var line_42580__$1 = first__42565_42578;
var more_42581__$1 = seq__42564_42579__$1;
var state_42582__$2 = state_42575__$1;
var line_42583__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_42582__$2))?"":line_42580__$1);
var state_42584__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_42582__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_42582__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_42582__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_42582__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_42582__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_42581__$1))){
var G__42585 = more_42581__$1;
var G__42586 = cljs.core.assoc.call(null,transformer.call(null,html,line_42583__$2,cljs.core.first.call(null,more_42581__$1),cljs.core.dissoc.call(null,state_42584__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_42583__$2));
G__42559_42574__$1 = G__42585;
state_42575__$1 = G__42586;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_42584__$3))),line_42583__$2,"",cljs.core.assoc.call(null,state_42584__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_42552;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_42551;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42589 = arguments.length;
var i__4500__auto___42590 = (0);
while(true){
if((i__4500__auto___42590 < len__4499__auto___42589)){
args__4502__auto__.push((arguments[i__4500__auto___42590]));

var G__42591 = (i__4500__auto___42590 + (1));
i__4500__auto___42590 = G__42591;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq42587){
var G__42588 = cljs.core.first.call(null,seq42587);
var seq42587__$1 = cljs.core.next.call(null,seq42587);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42588,seq42587__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42594 = arguments.length;
var i__4500__auto___42595 = (0);
while(true){
if((i__4500__auto___42595 < len__4499__auto___42594)){
args__4502__auto__.push((arguments[i__4500__auto___42595]));

var G__42596 = (i__4500__auto___42595 + (1));
i__4500__auto___42595 = G__42596;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq42592){
var G__42593 = cljs.core.first.call(null,seq42592);
var seq42592__$1 = cljs.core.next.call(null,seq42592);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42593,seq42592__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42598 = arguments.length;
var i__4500__auto___42599 = (0);
while(true){
if((i__4500__auto___42599 < len__4499__auto___42598)){
args__4502__auto__.push((arguments[i__4500__auto___42599]));

var G__42600 = (i__4500__auto___42599 + (1));
i__4500__auto___42599 = G__42600;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq42597){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42597));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42602 = arguments.length;
var i__4500__auto___42603 = (0);
while(true){
if((i__4500__auto___42603 < len__4499__auto___42602)){
args__4502__auto__.push((arguments[i__4500__auto___42603]));

var G__42604 = (i__4500__auto___42603 + (1));
i__4500__auto___42603 = G__42604;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq42601){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42601));
});


//# sourceMappingURL=core.js.map
