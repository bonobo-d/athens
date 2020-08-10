goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49446){
var map__49447 = p__49446;
var map__49447__$1 = (((((!((map__49447 == null))))?(((((map__49447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49447):map__49447);
var m = map__49447__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49447__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49449_49579 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49450_49580 = null;
var count__49451_49581 = (0);
var i__49452_49582 = (0);
while(true){
if((i__49452_49582 < count__49451_49581)){
var f_49583 = chunk__49450_49580.cljs$core$IIndexed$_nth$arity$2(null,i__49452_49582);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49583], 0));


var G__49584 = seq__49449_49579;
var G__49585 = chunk__49450_49580;
var G__49586 = count__49451_49581;
var G__49587 = (i__49452_49582 + (1));
seq__49449_49579 = G__49584;
chunk__49450_49580 = G__49585;
count__49451_49581 = G__49586;
i__49452_49582 = G__49587;
continue;
} else {
var temp__5735__auto___49588 = cljs.core.seq(seq__49449_49579);
if(temp__5735__auto___49588){
var seq__49449_49589__$1 = temp__5735__auto___49588;
if(cljs.core.chunked_seq_QMARK_(seq__49449_49589__$1)){
var c__4556__auto___49590 = cljs.core.chunk_first(seq__49449_49589__$1);
var G__49591 = cljs.core.chunk_rest(seq__49449_49589__$1);
var G__49592 = c__4556__auto___49590;
var G__49593 = cljs.core.count(c__4556__auto___49590);
var G__49594 = (0);
seq__49449_49579 = G__49591;
chunk__49450_49580 = G__49592;
count__49451_49581 = G__49593;
i__49452_49582 = G__49594;
continue;
} else {
var f_49595 = cljs.core.first(seq__49449_49589__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49595], 0));


var G__49596 = cljs.core.next(seq__49449_49589__$1);
var G__49597 = null;
var G__49598 = (0);
var G__49599 = (0);
seq__49449_49579 = G__49596;
chunk__49450_49580 = G__49597;
count__49451_49581 = G__49598;
i__49452_49582 = G__49599;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49600 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49600], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49600)))?cljs.core.second(arglists_49600):arglists_49600)], 0));
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
var seq__49462_49601 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49463_49602 = null;
var count__49464_49603 = (0);
var i__49465_49604 = (0);
while(true){
if((i__49465_49604 < count__49464_49603)){
var vec__49482_49605 = chunk__49463_49602.cljs$core$IIndexed$_nth$arity$2(null,i__49465_49604);
var name_49606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49482_49605,(0),null);
var map__49485_49607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49482_49605,(1),null);
var map__49485_49608__$1 = (((((!((map__49485_49607 == null))))?(((((map__49485_49607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49485_49607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49485_49607):map__49485_49607);
var doc_49609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49485_49608__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49485_49608__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49606], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49610], 0));

if(cljs.core.truth_(doc_49609)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49609], 0));
} else {
}


var G__49611 = seq__49462_49601;
var G__49612 = chunk__49463_49602;
var G__49613 = count__49464_49603;
var G__49614 = (i__49465_49604 + (1));
seq__49462_49601 = G__49611;
chunk__49463_49602 = G__49612;
count__49464_49603 = G__49613;
i__49465_49604 = G__49614;
continue;
} else {
var temp__5735__auto___49615 = cljs.core.seq(seq__49462_49601);
if(temp__5735__auto___49615){
var seq__49462_49616__$1 = temp__5735__auto___49615;
if(cljs.core.chunked_seq_QMARK_(seq__49462_49616__$1)){
var c__4556__auto___49617 = cljs.core.chunk_first(seq__49462_49616__$1);
var G__49618 = cljs.core.chunk_rest(seq__49462_49616__$1);
var G__49619 = c__4556__auto___49617;
var G__49620 = cljs.core.count(c__4556__auto___49617);
var G__49621 = (0);
seq__49462_49601 = G__49618;
chunk__49463_49602 = G__49619;
count__49464_49603 = G__49620;
i__49465_49604 = G__49621;
continue;
} else {
var vec__49487_49623 = cljs.core.first(seq__49462_49616__$1);
var name_49624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49487_49623,(0),null);
var map__49490_49625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49487_49623,(1),null);
var map__49490_49626__$1 = (((((!((map__49490_49625 == null))))?(((((map__49490_49625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49490_49625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49490_49625):map__49490_49625);
var doc_49627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490_49626__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490_49626__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49624], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49628], 0));

if(cljs.core.truth_(doc_49627)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49627], 0));
} else {
}


var G__49629 = cljs.core.next(seq__49462_49616__$1);
var G__49630 = null;
var G__49631 = (0);
var G__49632 = (0);
seq__49462_49601 = G__49629;
chunk__49463_49602 = G__49630;
count__49464_49603 = G__49631;
i__49465_49604 = G__49632;
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

var seq__49492 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49493 = null;
var count__49494 = (0);
var i__49495 = (0);
while(true){
if((i__49495 < count__49494)){
var role = chunk__49493.cljs$core$IIndexed$_nth$arity$2(null,i__49495);
var temp__5735__auto___49634__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49634__$1)){
var spec_49635 = temp__5735__auto___49634__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49635)], 0));
} else {
}


var G__49636 = seq__49492;
var G__49637 = chunk__49493;
var G__49638 = count__49494;
var G__49639 = (i__49495 + (1));
seq__49492 = G__49636;
chunk__49493 = G__49637;
count__49494 = G__49638;
i__49495 = G__49639;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__49492);
if(temp__5735__auto____$1){
var seq__49492__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49492__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49492__$1);
var G__49640 = cljs.core.chunk_rest(seq__49492__$1);
var G__49641 = c__4556__auto__;
var G__49642 = cljs.core.count(c__4556__auto__);
var G__49643 = (0);
seq__49492 = G__49640;
chunk__49493 = G__49641;
count__49494 = G__49642;
i__49495 = G__49643;
continue;
} else {
var role = cljs.core.first(seq__49492__$1);
var temp__5735__auto___49644__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49644__$2)){
var spec_49645 = temp__5735__auto___49644__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49645)], 0));
} else {
}


var G__49646 = cljs.core.next(seq__49492__$1);
var G__49647 = null;
var G__49648 = (0);
var G__49649 = (0);
seq__49492 = G__49646;
chunk__49493 = G__49647;
count__49494 = G__49648;
i__49495 = G__49649;
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
var G__49650 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49651 = cljs.core.ex_cause(t);
via = G__49650;
t = G__49651;
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
var map__49501 = datafied_throwable;
var map__49501__$1 = (((((!((map__49501 == null))))?(((((map__49501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49501):map__49501);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49501__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49501__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49501__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49502 = cljs.core.last(via);
var map__49502__$1 = (((((!((map__49502 == null))))?(((((map__49502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49502):map__49502);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49502__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49502__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49502__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49503 = data;
var map__49503__$1 = (((((!((map__49503 == null))))?(((((map__49503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49503):map__49503);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49503__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49503__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49503__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49504 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49504__$1 = (((((!((map__49504 == null))))?(((((map__49504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49504):map__49504);
var top_data = map__49504__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49504__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49509 = phase;
var G__49509__$1 = (((G__49509 instanceof cljs.core.Keyword))?G__49509.fqn:null);
switch (G__49509__$1) {
case "read-source":
var map__49510 = data;
var map__49510__$1 = (((((!((map__49510 == null))))?(((((map__49510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49510):map__49510);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49510__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49510__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49512 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49512__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49512,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49512);
var G__49512__$2 = (cljs.core.truth_((function (){var fexpr__49515 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49515.cljs$core$IFn$_invoke$arity$1 ? fexpr__49515.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49515.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49512__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49512__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49512__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49512__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49518 = top_data;
var G__49518__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49518,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49518);
var G__49518__$2 = (cljs.core.truth_((function (){var fexpr__49519 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49519.cljs$core$IFn$_invoke$arity$1 ? fexpr__49519.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49519.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49518__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49518__$1);
var G__49518__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49518__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49518__$2);
var G__49518__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49518__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49518__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49518__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49518__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49520 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49520,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49520,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49520,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49520,(3),null);
var G__49523 = top_data;
var G__49523__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49523,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49523);
var G__49523__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49523__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49523__$1);
var G__49523__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49523__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49523__$2);
var G__49523__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49523__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49523__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49523__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49523__$4;
}

break;
case "execution":
var vec__49525 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49525,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49525,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49525,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49525,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49500_SHARP_){
var or__4126__auto__ = (p1__49500_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__49529 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49529.cljs$core$IFn$_invoke$arity$1 ? fexpr__49529.cljs$core$IFn$_invoke$arity$1(p1__49500_SHARP_) : fexpr__49529.call(null,p1__49500_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__49530 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49530__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49530,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49530);
var G__49530__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49530__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49530__$1);
var G__49530__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49530__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49530__$2);
var G__49530__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49530__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49530__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49530__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49530__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49509__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49537){
var map__49538 = p__49537;
var map__49538__$1 = (((((!((map__49538 == null))))?(((((map__49538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49538):map__49538);
var triage_data = map__49538__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__49541 = phase;
var G__49541__$1 = (((G__49541 instanceof cljs.core.Keyword))?G__49541.fqn:null);
switch (G__49541__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49542 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49543 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49544 = loc;
var G__49545 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49546_49680 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49547_49681 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49548_49682 = true;
var _STAR_print_fn_STAR__temp_val__49549_49683 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49548_49682);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49549_49683);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49535_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49535_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49547_49681);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49546_49680);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49542,G__49543,G__49544,G__49545) : format.call(null,G__49542,G__49543,G__49544,G__49545));

break;
case "macroexpansion":
var G__49550 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49551 = cause_type;
var G__49552 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49553 = loc;
var G__49554 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49550,G__49551,G__49552,G__49553,G__49554) : format.call(null,G__49550,G__49551,G__49552,G__49553,G__49554));

break;
case "compile-syntax-check":
var G__49555 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49556 = cause_type;
var G__49557 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49558 = loc;
var G__49559 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49555,G__49556,G__49557,G__49558,G__49559) : format.call(null,G__49555,G__49556,G__49557,G__49558,G__49559));

break;
case "compilation":
var G__49560 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49561 = cause_type;
var G__49562 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49563 = loc;
var G__49564 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49560,G__49561,G__49562,G__49563,G__49564) : format.call(null,G__49560,G__49561,G__49562,G__49563,G__49564));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49565 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49566 = symbol;
var G__49567 = loc;
var G__49568 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49569_49684 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49570_49685 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49571_49686 = true;
var _STAR_print_fn_STAR__temp_val__49572_49687 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49571_49686);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49572_49687);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49536_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49536_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49570_49685);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49569_49684);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49565,G__49566,G__49567,G__49568) : format.call(null,G__49565,G__49566,G__49567,G__49568));
} else {
var G__49573 = "Execution error%s at %s(%s).\n%s\n";
var G__49574 = cause_type;
var G__49575 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49576 = loc;
var G__49577 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49573,G__49574,G__49575,G__49576,G__49577) : format.call(null,G__49573,G__49574,G__49575,G__49576,G__49577));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49541__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
