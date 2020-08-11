goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49445){
var map__49446 = p__49445;
var map__49446__$1 = (((((!((map__49446 == null))))?(((((map__49446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49446):map__49446);
var m = map__49446__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49446__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49446__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49449_49568 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49450_49569 = null;
var count__49451_49570 = (0);
var i__49452_49571 = (0);
while(true){
if((i__49452_49571 < count__49451_49570)){
var f_49572 = chunk__49450_49569.cljs$core$IIndexed$_nth$arity$2(null,i__49452_49571);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49572], 0));


var G__49573 = seq__49449_49568;
var G__49574 = chunk__49450_49569;
var G__49575 = count__49451_49570;
var G__49576 = (i__49452_49571 + (1));
seq__49449_49568 = G__49573;
chunk__49450_49569 = G__49574;
count__49451_49570 = G__49575;
i__49452_49571 = G__49576;
continue;
} else {
var temp__5735__auto___49577 = cljs.core.seq(seq__49449_49568);
if(temp__5735__auto___49577){
var seq__49449_49578__$1 = temp__5735__auto___49577;
if(cljs.core.chunked_seq_QMARK_(seq__49449_49578__$1)){
var c__4556__auto___49579 = cljs.core.chunk_first(seq__49449_49578__$1);
var G__49580 = cljs.core.chunk_rest(seq__49449_49578__$1);
var G__49581 = c__4556__auto___49579;
var G__49582 = cljs.core.count(c__4556__auto___49579);
var G__49583 = (0);
seq__49449_49568 = G__49580;
chunk__49450_49569 = G__49581;
count__49451_49570 = G__49582;
i__49452_49571 = G__49583;
continue;
} else {
var f_49584 = cljs.core.first(seq__49449_49578__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49584], 0));


var G__49585 = cljs.core.next(seq__49449_49578__$1);
var G__49586 = null;
var G__49587 = (0);
var G__49588 = (0);
seq__49449_49568 = G__49585;
chunk__49450_49569 = G__49586;
count__49451_49570 = G__49587;
i__49452_49571 = G__49588;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49589 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49589], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49589)))?cljs.core.second(arglists_49589):arglists_49589)], 0));
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
var seq__49453_49594 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49454_49595 = null;
var count__49455_49596 = (0);
var i__49456_49597 = (0);
while(true){
if((i__49456_49597 < count__49455_49596)){
var vec__49481_49598 = chunk__49454_49595.cljs$core$IIndexed$_nth$arity$2(null,i__49456_49597);
var name_49599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49481_49598,(0),null);
var map__49484_49600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49481_49598,(1),null);
var map__49484_49601__$1 = (((((!((map__49484_49600 == null))))?(((((map__49484_49600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49484_49600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49484_49600):map__49484_49600);
var doc_49602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49484_49601__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49484_49601__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49599], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49603], 0));

if(cljs.core.truth_(doc_49602)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49602], 0));
} else {
}


var G__49604 = seq__49453_49594;
var G__49605 = chunk__49454_49595;
var G__49606 = count__49455_49596;
var G__49607 = (i__49456_49597 + (1));
seq__49453_49594 = G__49604;
chunk__49454_49595 = G__49605;
count__49455_49596 = G__49606;
i__49456_49597 = G__49607;
continue;
} else {
var temp__5735__auto___49608 = cljs.core.seq(seq__49453_49594);
if(temp__5735__auto___49608){
var seq__49453_49609__$1 = temp__5735__auto___49608;
if(cljs.core.chunked_seq_QMARK_(seq__49453_49609__$1)){
var c__4556__auto___49610 = cljs.core.chunk_first(seq__49453_49609__$1);
var G__49611 = cljs.core.chunk_rest(seq__49453_49609__$1);
var G__49612 = c__4556__auto___49610;
var G__49613 = cljs.core.count(c__4556__auto___49610);
var G__49614 = (0);
seq__49453_49594 = G__49611;
chunk__49454_49595 = G__49612;
count__49455_49596 = G__49613;
i__49456_49597 = G__49614;
continue;
} else {
var vec__49486_49615 = cljs.core.first(seq__49453_49609__$1);
var name_49616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49486_49615,(0),null);
var map__49489_49617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49486_49615,(1),null);
var map__49489_49618__$1 = (((((!((map__49489_49617 == null))))?(((((map__49489_49617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49489_49617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49489_49617):map__49489_49617);
var doc_49619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49489_49618__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49489_49618__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49616], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49620], 0));

if(cljs.core.truth_(doc_49619)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49619], 0));
} else {
}


var G__49622 = cljs.core.next(seq__49453_49609__$1);
var G__49623 = null;
var G__49624 = (0);
var G__49625 = (0);
seq__49453_49594 = G__49622;
chunk__49454_49595 = G__49623;
count__49455_49596 = G__49624;
i__49456_49597 = G__49625;
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

var seq__49491 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49492 = null;
var count__49493 = (0);
var i__49494 = (0);
while(true){
if((i__49494 < count__49493)){
var role = chunk__49492.cljs$core$IIndexed$_nth$arity$2(null,i__49494);
var temp__5735__auto___49626__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49626__$1)){
var spec_49627 = temp__5735__auto___49626__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49627)], 0));
} else {
}


var G__49628 = seq__49491;
var G__49629 = chunk__49492;
var G__49630 = count__49493;
var G__49631 = (i__49494 + (1));
seq__49491 = G__49628;
chunk__49492 = G__49629;
count__49493 = G__49630;
i__49494 = G__49631;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__49491);
if(temp__5735__auto____$1){
var seq__49491__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49491__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49491__$1);
var G__49632 = cljs.core.chunk_rest(seq__49491__$1);
var G__49633 = c__4556__auto__;
var G__49634 = cljs.core.count(c__4556__auto__);
var G__49635 = (0);
seq__49491 = G__49632;
chunk__49492 = G__49633;
count__49493 = G__49634;
i__49494 = G__49635;
continue;
} else {
var role = cljs.core.first(seq__49491__$1);
var temp__5735__auto___49639__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49639__$2)){
var spec_49640 = temp__5735__auto___49639__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49640)], 0));
} else {
}


var G__49642 = cljs.core.next(seq__49491__$1);
var G__49643 = null;
var G__49644 = (0);
var G__49645 = (0);
seq__49491 = G__49642;
chunk__49492 = G__49643;
count__49493 = G__49644;
i__49494 = G__49645;
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
var G__49646 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49647 = cljs.core.ex_cause(t);
via = G__49646;
t = G__49647;
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
var map__49497 = datafied_throwable;
var map__49497__$1 = (((((!((map__49497 == null))))?(((((map__49497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49497):map__49497);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49497__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49497__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49497__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49498 = cljs.core.last(via);
var map__49498__$1 = (((((!((map__49498 == null))))?(((((map__49498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49498):map__49498);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49498__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49498__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49498__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49499 = data;
var map__49499__$1 = (((((!((map__49499 == null))))?(((((map__49499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49499):map__49499);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49499__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49499__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49499__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49500 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49500__$1 = (((((!((map__49500 == null))))?(((((map__49500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49500):map__49500);
var top_data = map__49500__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49500__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49505 = phase;
var G__49505__$1 = (((G__49505 instanceof cljs.core.Keyword))?G__49505.fqn:null);
switch (G__49505__$1) {
case "read-source":
var map__49506 = data;
var map__49506__$1 = (((((!((map__49506 == null))))?(((((map__49506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49506):map__49506);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49506__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49506__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49508 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49508__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49508,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49508);
var G__49508__$2 = (cljs.core.truth_((function (){var fexpr__49509 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49509.cljs$core$IFn$_invoke$arity$1 ? fexpr__49509.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49509.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49508__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49508__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49508__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49508__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49510 = top_data;
var G__49510__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49510,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49510);
var G__49510__$2 = (cljs.core.truth_((function (){var fexpr__49511 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49511.cljs$core$IFn$_invoke$arity$1 ? fexpr__49511.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49511.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49510__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49510__$1);
var G__49510__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49510__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49510__$2);
var G__49510__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49510__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49510__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49510__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49510__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49512 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49512,(3),null);
var G__49515 = top_data;
var G__49515__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49515,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49515);
var G__49515__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49515__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49515__$1);
var G__49515__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49515__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49515__$2);
var G__49515__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49515__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49515__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49515__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49515__$4;
}

break;
case "execution":
var vec__49517 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49517,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49517,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49517,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49517,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49496_SHARP_){
var or__4126__auto__ = (p1__49496_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__49521 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49521.cljs$core$IFn$_invoke$arity$1 ? fexpr__49521.cljs$core$IFn$_invoke$arity$1(p1__49496_SHARP_) : fexpr__49521.call(null,p1__49496_SHARP_));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49505__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49525){
var map__49526 = p__49525;
var map__49526__$1 = (((((!((map__49526 == null))))?(((((map__49526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49526):map__49526);
var triage_data = map__49526__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__49529 = phase;
var G__49529__$1 = (((G__49529 instanceof cljs.core.Keyword))?G__49529.fqn:null);
switch (G__49529__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49530 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49531 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49532 = loc;
var G__49533 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49534_49653 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49535_49654 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49536_49655 = true;
var _STAR_print_fn_STAR__temp_val__49537_49656 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49536_49655);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49537_49656);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49523_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49523_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49535_49654);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49534_49653);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49530,G__49531,G__49532,G__49533) : format.call(null,G__49530,G__49531,G__49532,G__49533));

break;
case "macroexpansion":
var G__49538 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49539 = cause_type;
var G__49540 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49541 = loc;
var G__49542 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49538,G__49539,G__49540,G__49541,G__49542) : format.call(null,G__49538,G__49539,G__49540,G__49541,G__49542));

break;
case "compile-syntax-check":
var G__49544 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49545 = cause_type;
var G__49546 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49547 = loc;
var G__49548 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49544,G__49545,G__49546,G__49547,G__49548) : format.call(null,G__49544,G__49545,G__49546,G__49547,G__49548));

break;
case "compilation":
var G__49549 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49550 = cause_type;
var G__49551 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49552 = loc;
var G__49553 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49549,G__49550,G__49551,G__49552,G__49553) : format.call(null,G__49549,G__49550,G__49551,G__49552,G__49553));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49554 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49555 = symbol;
var G__49556 = loc;
var G__49557 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49558_49658 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49559_49659 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49560_49660 = true;
var _STAR_print_fn_STAR__temp_val__49562_49661 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49560_49660);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49562_49661);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49524_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49524_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49559_49659);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49558_49658);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49554,G__49555,G__49556,G__49557) : format.call(null,G__49554,G__49555,G__49556,G__49557));
} else {
var G__49563 = "Execution error%s at %s(%s).\n%s\n";
var G__49564 = cause_type;
var G__49565 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49566 = loc;
var G__49567 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49563,G__49564,G__49565,G__49566,G__49567) : format.call(null,G__49563,G__49564,G__49565,G__49566,G__49567));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49529__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
