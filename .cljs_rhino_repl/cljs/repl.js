// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40801){
var map__40802 = p__40801;
var map__40802__$1 = ((((!((map__40802 == null)))?(((((map__40802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40802):map__40802);
var m = map__40802__$1;
var n = cljs.core.get.call(null,map__40802__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40802__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40804_40826 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40805_40827 = null;
var count__40806_40828 = (0);
var i__40807_40829 = (0);
while(true){
if((i__40807_40829 < count__40806_40828)){
var f_40830 = cljs.core._nth.call(null,chunk__40805_40827,i__40807_40829);
cljs.core.println.call(null,"  ",f_40830);


var G__40831 = seq__40804_40826;
var G__40832 = chunk__40805_40827;
var G__40833 = count__40806_40828;
var G__40834 = (i__40807_40829 + (1));
seq__40804_40826 = G__40831;
chunk__40805_40827 = G__40832;
count__40806_40828 = G__40833;
i__40807_40829 = G__40834;
continue;
} else {
var temp__5457__auto___40835 = cljs.core.seq.call(null,seq__40804_40826);
if(temp__5457__auto___40835){
var seq__40804_40836__$1 = temp__5457__auto___40835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40804_40836__$1)){
var c__4319__auto___40837 = cljs.core.chunk_first.call(null,seq__40804_40836__$1);
var G__40838 = cljs.core.chunk_rest.call(null,seq__40804_40836__$1);
var G__40839 = c__4319__auto___40837;
var G__40840 = cljs.core.count.call(null,c__4319__auto___40837);
var G__40841 = (0);
seq__40804_40826 = G__40838;
chunk__40805_40827 = G__40839;
count__40806_40828 = G__40840;
i__40807_40829 = G__40841;
continue;
} else {
var f_40842 = cljs.core.first.call(null,seq__40804_40836__$1);
cljs.core.println.call(null,"  ",f_40842);


var G__40843 = cljs.core.next.call(null,seq__40804_40836__$1);
var G__40844 = null;
var G__40845 = (0);
var G__40846 = (0);
seq__40804_40826 = G__40843;
chunk__40805_40827 = G__40844;
count__40806_40828 = G__40845;
i__40807_40829 = G__40846;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40847 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40847);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40847)))?cljs.core.second.call(null,arglists_40847):arglists_40847));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40808_40848 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40809_40849 = null;
var count__40810_40850 = (0);
var i__40811_40851 = (0);
while(true){
if((i__40811_40851 < count__40810_40850)){
var vec__40812_40852 = cljs.core._nth.call(null,chunk__40809_40849,i__40811_40851);
var name_40853 = cljs.core.nth.call(null,vec__40812_40852,(0),null);
var map__40815_40854 = cljs.core.nth.call(null,vec__40812_40852,(1),null);
var map__40815_40855__$1 = ((((!((map__40815_40854 == null)))?(((((map__40815_40854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40815_40854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40815_40854):map__40815_40854);
var doc_40856 = cljs.core.get.call(null,map__40815_40855__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40857 = cljs.core.get.call(null,map__40815_40855__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40853);

cljs.core.println.call(null," ",arglists_40857);

if(cljs.core.truth_(doc_40856)){
cljs.core.println.call(null," ",doc_40856);
} else {
}


var G__40858 = seq__40808_40848;
var G__40859 = chunk__40809_40849;
var G__40860 = count__40810_40850;
var G__40861 = (i__40811_40851 + (1));
seq__40808_40848 = G__40858;
chunk__40809_40849 = G__40859;
count__40810_40850 = G__40860;
i__40811_40851 = G__40861;
continue;
} else {
var temp__5457__auto___40862 = cljs.core.seq.call(null,seq__40808_40848);
if(temp__5457__auto___40862){
var seq__40808_40863__$1 = temp__5457__auto___40862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40808_40863__$1)){
var c__4319__auto___40864 = cljs.core.chunk_first.call(null,seq__40808_40863__$1);
var G__40865 = cljs.core.chunk_rest.call(null,seq__40808_40863__$1);
var G__40866 = c__4319__auto___40864;
var G__40867 = cljs.core.count.call(null,c__4319__auto___40864);
var G__40868 = (0);
seq__40808_40848 = G__40865;
chunk__40809_40849 = G__40866;
count__40810_40850 = G__40867;
i__40811_40851 = G__40868;
continue;
} else {
var vec__40817_40869 = cljs.core.first.call(null,seq__40808_40863__$1);
var name_40870 = cljs.core.nth.call(null,vec__40817_40869,(0),null);
var map__40820_40871 = cljs.core.nth.call(null,vec__40817_40869,(1),null);
var map__40820_40872__$1 = ((((!((map__40820_40871 == null)))?(((((map__40820_40871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40820_40871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40820_40871):map__40820_40871);
var doc_40873 = cljs.core.get.call(null,map__40820_40872__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40874 = cljs.core.get.call(null,map__40820_40872__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40870);

cljs.core.println.call(null," ",arglists_40874);

if(cljs.core.truth_(doc_40873)){
cljs.core.println.call(null," ",doc_40873);
} else {
}


var G__40875 = cljs.core.next.call(null,seq__40808_40863__$1);
var G__40876 = null;
var G__40877 = (0);
var G__40878 = (0);
seq__40808_40848 = G__40875;
chunk__40809_40849 = G__40876;
count__40810_40850 = G__40877;
i__40811_40851 = G__40878;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__40822 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40823 = null;
var count__40824 = (0);
var i__40825 = (0);
while(true){
if((i__40825 < count__40824)){
var role = cljs.core._nth.call(null,chunk__40823,i__40825);
var temp__5457__auto___40879__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___40879__$1)){
var spec_40880 = temp__5457__auto___40879__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40880));
} else {
}


var G__40881 = seq__40822;
var G__40882 = chunk__40823;
var G__40883 = count__40824;
var G__40884 = (i__40825 + (1));
seq__40822 = G__40881;
chunk__40823 = G__40882;
count__40824 = G__40883;
i__40825 = G__40884;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__40822);
if(temp__5457__auto____$1){
var seq__40822__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40822__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__40822__$1);
var G__40885 = cljs.core.chunk_rest.call(null,seq__40822__$1);
var G__40886 = c__4319__auto__;
var G__40887 = cljs.core.count.call(null,c__4319__auto__);
var G__40888 = (0);
seq__40822 = G__40885;
chunk__40823 = G__40886;
count__40824 = G__40887;
i__40825 = G__40888;
continue;
} else {
var role = cljs.core.first.call(null,seq__40822__$1);
var temp__5457__auto___40889__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___40889__$2)){
var spec_40890 = temp__5457__auto___40889__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40890));
} else {
}


var G__40891 = cljs.core.next.call(null,seq__40822__$1);
var G__40892 = null;
var G__40893 = (0);
var G__40894 = (0);
seq__40822 = G__40891;
chunk__40823 = G__40892;
count__40824 = G__40893;
i__40825 = G__40894;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
