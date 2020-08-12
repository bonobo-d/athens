goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49442){
var map__49443 = p__49442;
var map__49443__$1 = (((((!((map__49443 == null))))?(((((map__49443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49443):map__49443);
var m = map__49443__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49443__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49443__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49445_49575 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49446_49576 = null;
var count__49447_49577 = (0);
var i__49448_49578 = (0);
while(true){
if((i__49448_49578 < count__49447_49577)){
var f_49579 = chunk__49446_49576.cljs$core$IIndexed$_nth$arity$2(null,i__49448_49578);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49579], 0));


var G__49580 = seq__49445_49575;
var G__49581 = chunk__49446_49576;
var G__49582 = count__49447_49577;
var G__49583 = (i__49448_49578 + (1));
seq__49445_49575 = G__49580;
chunk__49446_49576 = G__49581;
count__49447_49577 = G__49582;
i__49448_49578 = G__49583;
continue;
} else {
var temp__5735__auto___49584 = cljs.core.seq(seq__49445_49575);
if(temp__5735__auto___49584){
var seq__49445_49585__$1 = temp__5735__auto___49584;
if(cljs.core.chunked_seq_QMARK_(seq__49445_49585__$1)){
var c__4556__auto___49586 = cljs.core.chunk_first(seq__49445_49585__$1);
var G__49587 = cljs.core.chunk_rest(seq__49445_49585__$1);
var G__49588 = c__4556__auto___49586;
var G__49589 = cljs.core.count(c__4556__auto___49586);
var G__49590 = (0);
seq__49445_49575 = G__49587;
chunk__49446_49576 = G__49588;
count__49447_49577 = G__49589;
i__49448_49578 = G__49590;
continue;
} else {
var f_49591 = cljs.core.first(seq__49445_49585__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49591], 0));


var G__49592 = cljs.core.next(seq__49445_49585__$1);
var G__49593 = null;
var G__49594 = (0);
var G__49595 = (0);
seq__49445_49575 = G__49592;
chunk__49446_49576 = G__49593;
count__49447_49577 = G__49594;
i__49448_49578 = G__49595;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49596 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49596], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49596)))?cljs.core.second(arglists_49596):arglists_49596)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49450_49597 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49451_49598 = null;
var count__49452_49599 = (0);
var i__49453_49600 = (0);
while(true){
if((i__49453_49600 < count__49452_49599)){
var vec__49465_49601 = chunk__49451_49598.cljs$core$IIndexed$_nth$arity$2(null,i__49453_49600);
var name_49602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49465_49601,(0),null);
var map__49468_49603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49465_49601,(1),null);
var map__49468_49604__$1 = (((((!((map__49468_49603 == null))))?(((((map__49468_49603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49468_49603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49468_49603):map__49468_49603);
var doc_49605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49468_49604__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49468_49604__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49602], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49606], 0));

if(cljs.core.truth_(doc_49605)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49605], 0));
} else {
}


var G__49607 = seq__49450_49597;
var G__49608 = chunk__49451_49598;
var G__49609 = count__49452_49599;
var G__49610 = (i__49453_49600 + (1));
seq__49450_49597 = G__49607;
chunk__49451_49598 = G__49608;
count__49452_49599 = G__49609;
i__49453_49600 = G__49610;
continue;
} else {
var temp__5735__auto___49611 = cljs.core.seq(seq__49450_49597);
if(temp__5735__auto___49611){
var seq__49450_49612__$1 = temp__5735__auto___49611;
if(cljs.core.chunked_seq_QMARK_(seq__49450_49612__$1)){
var c__4556__auto___49613 = cljs.core.chunk_first(seq__49450_49612__$1);
var G__49614 = cljs.core.chunk_rest(seq__49450_49612__$1);
var G__49615 = c__4556__auto___49613;
var G__49616 = cljs.core.count(c__4556__auto___49613);
var G__49617 = (0);
seq__49450_49597 = G__49614;
chunk__49451_49598 = G__49615;
count__49452_49599 = G__49616;
i__49453_49600 = G__49617;
continue;
} else {
var vec__49478_49619 = cljs.core.first(seq__49450_49612__$1);
var name_49620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49478_49619,(0),null);
var map__49481_49621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49478_49619,(1),null);
var map__49481_49622__$1 = (((((!((map__49481_49621 == null))))?(((((map__49481_49621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49481_49621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49481_49621):map__49481_49621);
var doc_49623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49481_49622__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49481_49622__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49620], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49624], 0));

if(cljs.core.truth_(doc_49623)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49623], 0));
} else {
}


var G__49625 = cljs.core.next(seq__49450_49612__$1);
var G__49626 = null;
var G__49627 = (0);
var G__49628 = (0);
seq__49450_49597 = G__49625;
chunk__49451_49598 = G__49626;
count__49452_49599 = G__49627;
i__49453_49600 = G__49628;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49488 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49489 = null;
var count__49490 = (0);
var i__49491 = (0);
while(true){
if((i__49491 < count__49490)){
var role = chunk__49489.cljs$core$IIndexed$_nth$arity$2(null,i__49491);
var temp__5735__auto___49629__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49629__$1)){
var spec_49630 = temp__5735__auto___49629__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49630)], 0));
} else {
}


var G__49631 = seq__49488;
var G__49632 = chunk__49489;
var G__49633 = count__49490;
var G__49634 = (i__49491 + (1));
seq__49488 = G__49631;
chunk__49489 = G__49632;
count__49490 = G__49633;
i__49491 = G__49634;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__49488);
if(temp__5735__auto____$1){
var seq__49488__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49488__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49488__$1);
var G__49635 = cljs.core.chunk_rest(seq__49488__$1);
var G__49636 = c__4556__auto__;
var G__49637 = cljs.core.count(c__4556__auto__);
var G__49638 = (0);
seq__49488 = G__49635;
chunk__49489 = G__49636;
count__49490 = G__49637;
i__49491 = G__49638;
continue;
} else {
var role = cljs.core.first(seq__49488__$1);
var temp__5735__auto___49639__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49639__$2)){
var spec_49640 = temp__5735__auto___49639__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49640)], 0));
} else {
}


var G__49641 = cljs.core.next(seq__49488__$1);
var G__49642 = null;
var G__49643 = (0);
var G__49644 = (0);
seq__49488 = G__49641;
chunk__49489 = G__49642;
count__49490 = G__49643;
i__49491 = G__49644;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__49645 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49646 = cljs.core.ex_cause(t);
via = G__49645;
t = G__49646;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__49496 = datafied_throwable;
var map__49496__$1 = (((((!((map__49496 == null))))?(((((map__49496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49496):map__49496);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49496__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49496__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49496__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49497 = cljs.core.last(via);
var map__49497__$1 = (((((!((map__49497 == null))))?(((((map__49497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49497):map__49497);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49497__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49497__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49497__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49498 = data;
var map__49498__$1 = (((((!((map__49498 == null))))?(((((map__49498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49498):map__49498);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49498__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49498__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49498__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49499 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49499__$1 = (((((!((map__49499 == null))))?(((((map__49499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49499):map__49499);
var top_data = map__49499__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49499__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49506 = phase;
var G__49506__$1 = (((G__49506 instanceof cljs.core.Keyword))?G__49506.fqn:null);
switch (G__49506__$1) {
case "read-source":
var map__49507 = data;
var map__49507__$1 = (((((!((map__49507 == null))))?(((((map__49507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49507):map__49507);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49507__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49507__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49509 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49509__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49509,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49509);
var G__49509__$2 = (cljs.core.truth_((function (){var fexpr__49510 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49510.cljs$core$IFn$_invoke$arity$1 ? fexpr__49510.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49510.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49509__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49509__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49509__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49509__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49511 = top_data;
var G__49511__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49511,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49511);
var G__49511__$2 = (cljs.core.truth_((function (){var fexpr__49512 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49512.cljs$core$IFn$_invoke$arity$1 ? fexpr__49512.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49512.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49511__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49511__$1);
var G__49511__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49511__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49511__$2);
var G__49511__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49511__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49511__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49511__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49511__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49513 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49513,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49513,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49513,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49513,(3),null);
var G__49516 = top_data;
var G__49516__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49516,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49516);
var G__49516__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49516__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49516__$1);
var G__49516__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49516__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49516__$2);
var G__49516__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49516__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49516__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49516__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49516__$4;
}

break;
case "execution":
var vec__49517 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49517,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49517,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49517,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49517,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49495_SHARP_){
var or__4126__auto__ = (p1__49495_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__49521 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49521.cljs$core$IFn$_invoke$arity$1 ? fexpr__49521.cljs$core$IFn$_invoke$arity$1(p1__49495_SHARP_) : fexpr__49521.call(null,p1__49495_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__49522 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49522__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49522);
var G__49522__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49522__$1);
var G__49522__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49522__$2);
var G__49522__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49522__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49522__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49522__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49506__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49529){
var map__49530 = p__49529;
var map__49530__$1 = (((((!((map__49530 == null))))?(((((map__49530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49530):map__49530);
var triage_data = map__49530__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49530__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49530__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49530__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49530__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49530__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49530__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49530__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49530__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__49533 = phase;
var G__49533__$1 = (((G__49533 instanceof cljs.core.Keyword))?G__49533.fqn:null);
switch (G__49533__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49534 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49535 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49536 = loc;
var G__49537 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49538_49661 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49539_49662 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49540_49663 = true;
var _STAR_print_fn_STAR__temp_val__49541_49664 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49540_49663);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49541_49664);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49526_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49526_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49539_49662);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49538_49661);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49534,G__49535,G__49536,G__49537) : format.call(null,G__49534,G__49535,G__49536,G__49537));

break;
case "macroexpansion":
var G__49542 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49543 = cause_type;
var G__49544 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49545 = loc;
var G__49546 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49542,G__49543,G__49544,G__49545,G__49546) : format.call(null,G__49542,G__49543,G__49544,G__49545,G__49546));

break;
case "compile-syntax-check":
var G__49547 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49548 = cause_type;
var G__49549 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49550 = loc;
var G__49551 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49547,G__49548,G__49549,G__49550,G__49551) : format.call(null,G__49547,G__49548,G__49549,G__49550,G__49551));

break;
case "compilation":
var G__49552 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49553 = cause_type;
var G__49554 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49555 = loc;
var G__49556 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49552,G__49553,G__49554,G__49555,G__49556) : format.call(null,G__49552,G__49553,G__49554,G__49555,G__49556));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49560 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49561 = symbol;
var G__49562 = loc;
var G__49563 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49565_49677 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49566_49678 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49567_49679 = true;
var _STAR_print_fn_STAR__temp_val__49568_49680 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49567_49679);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49568_49680);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49528_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49528_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49566_49678);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49565_49677);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49560,G__49561,G__49562,G__49563) : format.call(null,G__49560,G__49561,G__49562,G__49563));
} else {
var G__49569 = "Execution error%s at %s(%s).\n%s\n";
var G__49570 = cause_type;
var G__49571 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49572 = loc;
var G__49573 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49569,G__49570,G__49571,G__49572,G__49573) : format.call(null,G__49569,G__49570,G__49571,G__49572,G__49573));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49533__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
