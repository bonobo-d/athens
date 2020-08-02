goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50484){
var map__50485 = p__50484;
var map__50485__$1 = (((((!((map__50485 == null))))?(((((map__50485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50485):map__50485);
var m = map__50485__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50485__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50485__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var seq__50488_50609 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50489_50610 = null;
var count__50490_50611 = (0);
var i__50491_50612 = (0);
while(true){
if((i__50491_50612 < count__50490_50611)){
var f_50613 = chunk__50489_50610.cljs$core$IIndexed$_nth$arity$2(null,i__50491_50612);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50613], 0));


var G__50614 = seq__50488_50609;
var G__50615 = chunk__50489_50610;
var G__50616 = count__50490_50611;
var G__50617 = (i__50491_50612 + (1));
seq__50488_50609 = G__50614;
chunk__50489_50610 = G__50615;
count__50490_50611 = G__50616;
i__50491_50612 = G__50617;
continue;
} else {
var temp__5735__auto___50618 = cljs.core.seq(seq__50488_50609);
if(temp__5735__auto___50618){
var seq__50488_50619__$1 = temp__5735__auto___50618;
if(cljs.core.chunked_seq_QMARK_(seq__50488_50619__$1)){
var c__4609__auto___50620 = cljs.core.chunk_first(seq__50488_50619__$1);
var G__50621 = cljs.core.chunk_rest(seq__50488_50619__$1);
var G__50622 = c__4609__auto___50620;
var G__50623 = cljs.core.count(c__4609__auto___50620);
var G__50624 = (0);
seq__50488_50609 = G__50621;
chunk__50489_50610 = G__50622;
count__50490_50611 = G__50623;
i__50491_50612 = G__50624;
continue;
} else {
var f_50625 = cljs.core.first(seq__50488_50619__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50625], 0));


var G__50626 = cljs.core.next(seq__50488_50619__$1);
var G__50627 = null;
var G__50628 = (0);
var G__50629 = (0);
seq__50488_50609 = G__50626;
chunk__50489_50610 = G__50627;
count__50490_50611 = G__50628;
i__50491_50612 = G__50629;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50630 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50630], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50630)))?cljs.core.second(arglists_50630):arglists_50630)], 0));
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
var seq__50492_50635 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50493_50636 = null;
var count__50494_50637 = (0);
var i__50495_50638 = (0);
while(true){
if((i__50495_50638 < count__50494_50637)){
var vec__50507_50639 = chunk__50493_50636.cljs$core$IIndexed$_nth$arity$2(null,i__50495_50638);
var name_50640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50507_50639,(0),null);
var map__50510_50641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50507_50639,(1),null);
var map__50510_50642__$1 = (((((!((map__50510_50641 == null))))?(((((map__50510_50641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50510_50641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50510_50641):map__50510_50641);
var doc_50643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50510_50642__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50510_50642__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50640], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50644], 0));

if(cljs.core.truth_(doc_50643)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50643], 0));
} else {
}


var G__50645 = seq__50492_50635;
var G__50646 = chunk__50493_50636;
var G__50647 = count__50494_50637;
var G__50648 = (i__50495_50638 + (1));
seq__50492_50635 = G__50645;
chunk__50493_50636 = G__50646;
count__50494_50637 = G__50647;
i__50495_50638 = G__50648;
continue;
} else {
var temp__5735__auto___50649 = cljs.core.seq(seq__50492_50635);
if(temp__5735__auto___50649){
var seq__50492_50651__$1 = temp__5735__auto___50649;
if(cljs.core.chunked_seq_QMARK_(seq__50492_50651__$1)){
var c__4609__auto___50652 = cljs.core.chunk_first(seq__50492_50651__$1);
var G__50653 = cljs.core.chunk_rest(seq__50492_50651__$1);
var G__50654 = c__4609__auto___50652;
var G__50655 = cljs.core.count(c__4609__auto___50652);
var G__50656 = (0);
seq__50492_50635 = G__50653;
chunk__50493_50636 = G__50654;
count__50494_50637 = G__50655;
i__50495_50638 = G__50656;
continue;
} else {
var vec__50513_50657 = cljs.core.first(seq__50492_50651__$1);
var name_50658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50513_50657,(0),null);
var map__50516_50659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50513_50657,(1),null);
var map__50516_50660__$1 = (((((!((map__50516_50659 == null))))?(((((map__50516_50659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50516_50659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50516_50659):map__50516_50659);
var doc_50661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50516_50660__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50516_50660__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50658], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50662], 0));

if(cljs.core.truth_(doc_50661)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50661], 0));
} else {
}


var G__50663 = cljs.core.next(seq__50492_50651__$1);
var G__50664 = null;
var G__50665 = (0);
var G__50666 = (0);
seq__50492_50635 = G__50663;
chunk__50493_50636 = G__50664;
count__50494_50637 = G__50665;
i__50495_50638 = G__50666;
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

var seq__50518 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50519 = null;
var count__50520 = (0);
var i__50521 = (0);
while(true){
if((i__50521 < count__50520)){
var role = chunk__50519.cljs$core$IIndexed$_nth$arity$2(null,i__50521);
var temp__5735__auto___50667__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50667__$1)){
var spec_50668 = temp__5735__auto___50667__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50668)], 0));
} else {
}


var G__50669 = seq__50518;
var G__50670 = chunk__50519;
var G__50671 = count__50520;
var G__50672 = (i__50521 + (1));
seq__50518 = G__50669;
chunk__50519 = G__50670;
count__50520 = G__50671;
i__50521 = G__50672;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50518);
if(temp__5735__auto____$1){
var seq__50518__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50518__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50518__$1);
var G__50673 = cljs.core.chunk_rest(seq__50518__$1);
var G__50674 = c__4609__auto__;
var G__50675 = cljs.core.count(c__4609__auto__);
var G__50676 = (0);
seq__50518 = G__50673;
chunk__50519 = G__50674;
count__50520 = G__50675;
i__50521 = G__50676;
continue;
} else {
var role = cljs.core.first(seq__50518__$1);
var temp__5735__auto___50677__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50677__$2)){
var spec_50678 = temp__5735__auto___50677__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50678)], 0));
} else {
}


var G__50679 = cljs.core.next(seq__50518__$1);
var G__50680 = null;
var G__50681 = (0);
var G__50682 = (0);
seq__50518 = G__50679;
chunk__50519 = G__50680;
count__50520 = G__50681;
i__50521 = G__50682;
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
var G__50683 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50684 = cljs.core.ex_cause(t);
via = G__50683;
t = G__50684;
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
var map__50538 = datafied_throwable;
var map__50538__$1 = (((((!((map__50538 == null))))?(((((map__50538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50538):map__50538);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50538__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50538__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50538__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50539 = cljs.core.last(via);
var map__50539__$1 = (((((!((map__50539 == null))))?(((((map__50539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50539):map__50539);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50539__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50539__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50539__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50540 = data;
var map__50540__$1 = (((((!((map__50540 == null))))?(((((map__50540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50540):map__50540);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50540__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50540__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50540__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50541 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50541__$1 = (((((!((map__50541 == null))))?(((((map__50541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50541):map__50541);
var top_data = map__50541__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50541__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50547 = phase;
var G__50547__$1 = (((G__50547 instanceof cljs.core.Keyword))?G__50547.fqn:null);
switch (G__50547__$1) {
case "read-source":
var map__50548 = data;
var map__50548__$1 = (((((!((map__50548 == null))))?(((((map__50548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50548):map__50548);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50548__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50548__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50550 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50550__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50550,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50550);
var G__50550__$2 = (cljs.core.truth_((function (){var fexpr__50551 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50551.cljs$core$IFn$_invoke$arity$1 ? fexpr__50551.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50551.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50550__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50550__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50550__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50550__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50552 = top_data;
var G__50552__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50552,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50552);
var G__50552__$2 = (cljs.core.truth_((function (){var fexpr__50553 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50553.cljs$core$IFn$_invoke$arity$1 ? fexpr__50553.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50553.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50552__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50552__$1);
var G__50552__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50552__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50552__$2);
var G__50552__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50552__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50552__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50552__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50552__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50554 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50554,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50554,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50554,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50554,(3),null);
var G__50557 = top_data;
var G__50557__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50557,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50557);
var G__50557__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50557__$1);
var G__50557__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50557__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50557__$2);
var G__50557__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50557__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50557__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50557__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50557__$4;
}

break;
case "execution":
var vec__50558 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50558,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50558,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50558,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50558,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50536_SHARP_){
var or__4185__auto__ = (p1__50536_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__50562 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50562.cljs$core$IFn$_invoke$arity$1 ? fexpr__50562.cljs$core$IFn$_invoke$arity$1(p1__50536_SHARP_) : fexpr__50562.call(null,p1__50536_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__50563 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50563__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50563,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50563);
var G__50563__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50563__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50563__$1);
var G__50563__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50563__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50563__$2);
var G__50563__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50563__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50563__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50563__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50563__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50547__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50567){
var map__50568 = p__50567;
var map__50568__$1 = (((((!((map__50568 == null))))?(((((map__50568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50568):map__50568);
var triage_data = map__50568__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50570 = phase;
var G__50570__$1 = (((G__50570 instanceof cljs.core.Keyword))?G__50570.fqn:null);
switch (G__50570__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50571 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50572 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50573 = loc;
var G__50574 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50576_50692 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50577_50693 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50578_50694 = true;
var _STAR_print_fn_STAR__temp_val__50579_50695 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50578_50694);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50579_50695);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50565_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50565_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50577_50693);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50576_50692);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50571,G__50572,G__50573,G__50574) : format.call(null,G__50571,G__50572,G__50573,G__50574));

break;
case "macroexpansion":
var G__50580 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50581 = cause_type;
var G__50582 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50583 = loc;
var G__50584 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50580,G__50581,G__50582,G__50583,G__50584) : format.call(null,G__50580,G__50581,G__50582,G__50583,G__50584));

break;
case "compile-syntax-check":
var G__50586 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50587 = cause_type;
var G__50588 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50589 = loc;
var G__50590 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50586,G__50587,G__50588,G__50589,G__50590) : format.call(null,G__50586,G__50587,G__50588,G__50589,G__50590));

break;
case "compilation":
var G__50591 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50592 = cause_type;
var G__50593 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50594 = loc;
var G__50595 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50591,G__50592,G__50593,G__50594,G__50595) : format.call(null,G__50591,G__50592,G__50593,G__50594,G__50595));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50596 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50597 = symbol;
var G__50598 = loc;
var G__50599 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50600_50698 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50601_50699 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50602_50700 = true;
var _STAR_print_fn_STAR__temp_val__50603_50701 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50602_50700);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50603_50701);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50566_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50566_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50601_50699);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50600_50698);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50596,G__50597,G__50598,G__50599) : format.call(null,G__50596,G__50597,G__50598,G__50599));
} else {
var G__50604 = "Execution error%s at %s(%s).\n%s\n";
var G__50605 = cause_type;
var G__50606 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50607 = loc;
var G__50608 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50604,G__50605,G__50606,G__50607,G__50608) : format.call(null,G__50604,G__50605,G__50606,G__50607,G__50608));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50570__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
