goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.max_or_throw');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__59243 = xs;
args__$2 = G__59243;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__59244 = xs;
args__$2 = G__59244;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59245 = arguments.length;
var i__4737__auto___59246 = (0);
while(true){
if((i__4737__auto___59246 < len__4736__auto___59245)){
args__4742__auto__.push((arguments[i__4737__auto___59246]));

var G__59247 = (i__4737__auto___59246 + (1));
i__4737__auto___59246 = G__59247;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__59248 = ctx__$2;
var G__59249 = rest_let_bindings;
ctx__$1 = G__59248;
let_bindings__$1 = G__59249;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__59250 = nexprs;
exprs__$1 = G__59250;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq58477){
var G__58478 = cljs.core.first(seq58477);
var seq58477__$1 = cljs.core.next(seq58477);
var G__58479 = cljs.core.first(seq58477__$1);
var seq58477__$2 = cljs.core.next(seq58477__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58478,G__58479,seq58477__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__58486){
var vec__58487 = p__58486;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58487,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58487,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58487,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58487,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__58490 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__58490,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__58490;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__58497 = libspec;
var seq__58498 = cljs.core.seq(vec__58497);
var first__58499 = cljs.core.first(seq__58498);
var seq__58498__$1 = cljs.core.next(seq__58498);
var lib_name = first__58499;
var opts = seq__58498__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__58503 = opts;
var vec__58504 = G__58503;
var seq__58505 = cljs.core.seq(vec__58504);
var first__58506 = cljs.core.first(seq__58505);
var seq__58505__$1 = cljs.core.next(seq__58505);
var opt_name = first__58506;
var first__58506__$1 = cljs.core.first(seq__58505__$1);
var seq__58505__$2 = cljs.core.next(seq__58505__$1);
var fst_opt = first__58506__$1;
var rst_opts = seq__58505__$2;
var ret__$1 = ret;
var G__58503__$1 = G__58503;
while(true){
var ret__$2 = ret__$1;
var vec__58511 = G__58503__$1;
var seq__58512 = cljs.core.seq(vec__58511);
var first__58513 = cljs.core.first(seq__58512);
var seq__58512__$1 = cljs.core.next(seq__58512);
var opt_name__$1 = first__58513;
var first__58513__$1 = cljs.core.first(seq__58512__$1);
var seq__58512__$2 = cljs.core.next(seq__58512__$1);
var fst_opt__$1 = first__58513__$1;
var rst_opts__$1 = seq__58512__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__58514 = opt_name__$1;
var G__58514__$1 = (((G__58514 instanceof cljs.core.Keyword))?G__58514.fqn:null);
switch (G__58514__$1) {
case "as":
var G__59252 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__59253 = rst_opts__$1;
ret__$1 = G__59252;
G__58503__$1 = G__59253;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__59254 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__59255 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__59254;
G__58503__$1 = G__59255;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__59256 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__59257 = rst_opts__$1;
ret__$1 = G__59256;
G__58503__$1 = G__59257;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58514__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__58515){
var vec__58516 = p__58515;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58516,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__58519){
var map__58520 = p__58519;
var map__58520__$1 = (((((!((map__58520 == null))))?(((((map__58520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58520):map__58520);
var _parsed_libspec = map__58520__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58520__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58520__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58520__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58520__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58520__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__58525 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58525,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__58528 = sci.impl.interpreter.parse_libspec(libspec);
var map__58528__$1 = (((((!((map__58528 == null))))?(((((map__58528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58528):map__58528);
var parsed_libspec = map__58528__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58528__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58528__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__58534 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__58534) : load_fn.call(null,G__58534));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__58535 = temp__5733__auto____$2;
var map__58535__$1 = (((((!((map__58535 == null))))?(((((map__58535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58535):map__58535);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58535__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58535__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__58538_59258 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__58539_59259 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__58538_59258,G__58539_59259) : sci.impl.interpreter.eval_string_STAR_.call(null,G__58538_59258,G__58539_59259));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e58537){if((e58537 instanceof Error)){
var e_59260 = e58537;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_59260;
} else {
throw e58537;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59261 = arguments.length;
var i__4737__auto___59262 = (0);
while(true){
if((i__4737__auto___59262 < len__4736__auto___59261)){
args__4742__auto__.push((arguments[i__4737__auto___59262]));

var G__59263 = (i__4737__auto___59262 + (1));
i__4737__auto___59262 = G__59263;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__58548 = ctx;
var G__58549 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58548,G__58549) : sci.impl.interpreter.interpret.call(null,G__58548,G__58549));
})();
if((ret instanceof cljs.core.Symbol)){
var G__59264 = (function (){var G__58550 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58550,current_libspec);
} else {
return G__58550;
}
})();
var G__59265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__59266 = cljs.core.next(args__$1);
libspecs = G__59264;
current_libspec = G__59265;
args__$1 = G__59266;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__59267 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__59268 = null;
var G__59269 = cljs.core.next(args__$1);
libspecs = G__59267;
current_libspec = G__59268;
args__$1 = G__59269;
continue;
} else {
var G__59270 = (function (){var G__58551 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58551,current_libspec);
} else {
return G__58551;
}
})();
var G__59271 = ret;
var G__59272 = cljs.core.next(args__$1);
libspecs = G__59270;
current_libspec = G__59271;
args__$1 = G__59272;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__58552 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58552,current_libspec);
} else {
return G__58552;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__58540_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__58540_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq58541){
var G__58542 = cljs.core.first(seq58541);
var seq58541__$1 = cljs.core.next(seq58541);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58542,seq58541__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59273 = arguments.length;
var i__4737__auto___59274 = (0);
while(true){
if((i__4737__auto___59274 < len__4736__auto___59273)){
args__4742__auto__.push((arguments[i__4737__auto___59274]));

var G__59275 = (i__4737__auto___59274 + (1));
i__4737__auto___59274 = G__59275;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq58553){
var G__58554 = cljs.core.first(seq58553);
var seq58553__$1 = cljs.core.next(seq58553);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58554,seq58553__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__58556){
var vec__58557 = p__58556;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58557,(0),null);
var map__58560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58557,(1),null);
var map__58560__$1 = (((((!((map__58560 == null))))?(((((map__58560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58560):map__58560);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58560__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58560__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58560__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__58562 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58562,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58562,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__58565 = ctx;
var G__58566 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58565,G__58566) : sci.impl.interpreter.interpret.call(null,G__58565,G__58566));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__58571 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__58571__$1 = (((((!((map__58571 == null))))?(((((map__58571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58571):map__58571);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58571__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58571__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58571__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__58582 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__58583 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__58583);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__58582);
}}catch (e58573){if((e58573 instanceof Error)){
var e = e58573;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__58577 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__58578 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58577,G__58578) : sci.impl.interpreter.interpret.call(null,G__58577,G__58578));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__58579 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58579,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58579,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e58573;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__58585){
var vec__58586 = p__58585;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58586,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58586,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58589_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__58589_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__58589_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__58594){
var vec__58595 = p__58594;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58595,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58595,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58595,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58590_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__58590_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__58590_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__58600,p__58601){
var map__58602 = p__58600;
var map__58602__$1 = (((((!((map__58602 == null))))?(((((map__58602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58602):map__58602);
var ctx = map__58602__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58602__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__58603 = p__58601;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58599_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__58599_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__58599_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__58621){
var vec__58623 = p__58621;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58623,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58623,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__58626){
var vec__58627 = p__58626;
var seq__58628 = cljs.core.seq(vec__58627);
var first__58629 = cljs.core.first(seq__58628);
var seq__58628__$1 = cljs.core.next(seq__58628);
var _ = first__58629;
var first__58629__$1 = cljs.core.first(seq__58628__$1);
var seq__58628__$2 = cljs.core.next(seq__58628__$1);
var ns_sym = first__58629__$1;
var exprs = seq__58628__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__58630 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58630,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58630,(1),null);
var G__58633_59276 = k;
var G__58633_59277__$1 = (((G__58633_59276 instanceof cljs.core.Keyword))?G__58633_59276.fqn:null);
switch (G__58633_59277__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__58633_59276,G__58633_59277__$1,vec__58630,k,v,ns_sym__$1,vec__58627,seq__58628,first__58629,seq__58628__$1,_,first__58629__$1,seq__58628__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__58633_59276,G__58633_59277__$1,vec__58630,k,v,ns_sym__$1,vec__58627,seq__58628,first__58629,seq__58628__$1,_,first__58629__$1,seq__58628__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58633_59277__$1)].join('')));

}

var G__59279 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__59279;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__58634){
var vec__58635 = p__58634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58635,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58635,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58635,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__58641 = exprs;
var vec__58642 = G__58641;
var seq__58643 = cljs.core.seq(vec__58642);
var first__58644 = cljs.core.first(seq__58643);
var seq__58643__$1 = cljs.core.next(seq__58643);
var expr = first__58644;
var exprs__$1 = seq__58643__$1;
var G__58641__$1 = G__58641;
while(true){
var vec__58645 = G__58641__$1;
var seq__58646 = cljs.core.seq(vec__58645);
var first__58647 = cljs.core.first(seq__58646);
var seq__58646__$1 = cljs.core.next(seq__58646);
var expr__$1 = first__58647;
var exprs__$2 = seq__58646__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e58648){if((e58648 instanceof Error)){
var e = e58648;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e58648;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__59280 = exprs__$3;
G__58641__$1 = G__59280;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__58841 = cljs.core.count(args);
switch (G__58841) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg58651 = (function (){var G__58842 = ctx;
var G__58843 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58842,G__58843) : sci.impl.interpreter.interpret.call(null,G__58842,G__58843));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg58651) : f.call(null,arg58651));

break;
case (2):
var arg58652 = (function (){var G__58844 = ctx;
var G__58845 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58844,G__58845) : sci.impl.interpreter.interpret.call(null,G__58844,G__58845));
})();
var args__$1 = cljs.core.rest(args);
var arg58653 = (function (){var G__58846 = ctx;
var G__58847 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58846,G__58847) : sci.impl.interpreter.interpret.call(null,G__58846,G__58847));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg58652,arg58653) : f.call(null,arg58652,arg58653));

break;
case (3):
var arg58654 = (function (){var G__58848 = ctx;
var G__58849 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58848,G__58849) : sci.impl.interpreter.interpret.call(null,G__58848,G__58849));
})();
var args__$1 = cljs.core.rest(args);
var arg58655 = (function (){var G__58850 = ctx;
var G__58851 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58850,G__58851) : sci.impl.interpreter.interpret.call(null,G__58850,G__58851));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58656 = (function (){var G__58852 = ctx;
var G__58853 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58852,G__58853) : sci.impl.interpreter.interpret.call(null,G__58852,G__58853));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg58654,arg58655,arg58656) : f.call(null,arg58654,arg58655,arg58656));

break;
case (4):
var arg58657 = (function (){var G__58854 = ctx;
var G__58855 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58854,G__58855) : sci.impl.interpreter.interpret.call(null,G__58854,G__58855));
})();
var args__$1 = cljs.core.rest(args);
var arg58658 = (function (){var G__58856 = ctx;
var G__58857 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58856,G__58857) : sci.impl.interpreter.interpret.call(null,G__58856,G__58857));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58659 = (function (){var G__58858 = ctx;
var G__58859 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58858,G__58859) : sci.impl.interpreter.interpret.call(null,G__58858,G__58859));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58660 = (function (){var G__58860 = ctx;
var G__58861 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58860,G__58861) : sci.impl.interpreter.interpret.call(null,G__58860,G__58861));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg58657,arg58658,arg58659,arg58660) : f.call(null,arg58657,arg58658,arg58659,arg58660));

break;
case (5):
var arg58661 = (function (){var G__58862 = ctx;
var G__58863 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58862,G__58863) : sci.impl.interpreter.interpret.call(null,G__58862,G__58863));
})();
var args__$1 = cljs.core.rest(args);
var arg58662 = (function (){var G__58864 = ctx;
var G__58865 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58864,G__58865) : sci.impl.interpreter.interpret.call(null,G__58864,G__58865));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58663 = (function (){var G__58866 = ctx;
var G__58867 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58866,G__58867) : sci.impl.interpreter.interpret.call(null,G__58866,G__58867));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58664 = (function (){var G__58868 = ctx;
var G__58869 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58868,G__58869) : sci.impl.interpreter.interpret.call(null,G__58868,G__58869));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58665 = (function (){var G__58870 = ctx;
var G__58871 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58870,G__58871) : sci.impl.interpreter.interpret.call(null,G__58870,G__58871));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg58661,arg58662,arg58663,arg58664,arg58665) : f.call(null,arg58661,arg58662,arg58663,arg58664,arg58665));

break;
case (6):
var arg58666 = (function (){var G__58872 = ctx;
var G__58873 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58872,G__58873) : sci.impl.interpreter.interpret.call(null,G__58872,G__58873));
})();
var args__$1 = cljs.core.rest(args);
var arg58667 = (function (){var G__58874 = ctx;
var G__58875 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58874,G__58875) : sci.impl.interpreter.interpret.call(null,G__58874,G__58875));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58668 = (function (){var G__58876 = ctx;
var G__58877 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58876,G__58877) : sci.impl.interpreter.interpret.call(null,G__58876,G__58877));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58669 = (function (){var G__58878 = ctx;
var G__58879 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58878,G__58879) : sci.impl.interpreter.interpret.call(null,G__58878,G__58879));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58670 = (function (){var G__58880 = ctx;
var G__58881 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58880,G__58881) : sci.impl.interpreter.interpret.call(null,G__58880,G__58881));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58671 = (function (){var G__58882 = ctx;
var G__58883 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58882,G__58883) : sci.impl.interpreter.interpret.call(null,G__58882,G__58883));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg58666,arg58667,arg58668,arg58669,arg58670,arg58671) : f.call(null,arg58666,arg58667,arg58668,arg58669,arg58670,arg58671));

break;
case (7):
var arg58672 = (function (){var G__58884 = ctx;
var G__58885 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58884,G__58885) : sci.impl.interpreter.interpret.call(null,G__58884,G__58885));
})();
var args__$1 = cljs.core.rest(args);
var arg58673 = (function (){var G__58886 = ctx;
var G__58887 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58886,G__58887) : sci.impl.interpreter.interpret.call(null,G__58886,G__58887));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58674 = (function (){var G__58888 = ctx;
var G__58889 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58888,G__58889) : sci.impl.interpreter.interpret.call(null,G__58888,G__58889));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58675 = (function (){var G__58890 = ctx;
var G__58891 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58890,G__58891) : sci.impl.interpreter.interpret.call(null,G__58890,G__58891));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58676 = (function (){var G__58892 = ctx;
var G__58893 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58892,G__58893) : sci.impl.interpreter.interpret.call(null,G__58892,G__58893));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58677 = (function (){var G__58894 = ctx;
var G__58895 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58894,G__58895) : sci.impl.interpreter.interpret.call(null,G__58894,G__58895));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58678 = (function (){var G__58896 = ctx;
var G__58897 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58896,G__58897) : sci.impl.interpreter.interpret.call(null,G__58896,G__58897));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg58672,arg58673,arg58674,arg58675,arg58676,arg58677,arg58678) : f.call(null,arg58672,arg58673,arg58674,arg58675,arg58676,arg58677,arg58678));

break;
case (8):
var arg58679 = (function (){var G__58898 = ctx;
var G__58899 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58898,G__58899) : sci.impl.interpreter.interpret.call(null,G__58898,G__58899));
})();
var args__$1 = cljs.core.rest(args);
var arg58680 = (function (){var G__58900 = ctx;
var G__58901 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58900,G__58901) : sci.impl.interpreter.interpret.call(null,G__58900,G__58901));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58681 = (function (){var G__58902 = ctx;
var G__58903 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58902,G__58903) : sci.impl.interpreter.interpret.call(null,G__58902,G__58903));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58682 = (function (){var G__58904 = ctx;
var G__58905 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58904,G__58905) : sci.impl.interpreter.interpret.call(null,G__58904,G__58905));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58683 = (function (){var G__58906 = ctx;
var G__58907 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58906,G__58907) : sci.impl.interpreter.interpret.call(null,G__58906,G__58907));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58684 = (function (){var G__58908 = ctx;
var G__58909 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58908,G__58909) : sci.impl.interpreter.interpret.call(null,G__58908,G__58909));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58685 = (function (){var G__58910 = ctx;
var G__58911 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58910,G__58911) : sci.impl.interpreter.interpret.call(null,G__58910,G__58911));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58686 = (function (){var G__58912 = ctx;
var G__58913 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58912,G__58913) : sci.impl.interpreter.interpret.call(null,G__58912,G__58913));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg58679,arg58680,arg58681,arg58682,arg58683,arg58684,arg58685,arg58686) : f.call(null,arg58679,arg58680,arg58681,arg58682,arg58683,arg58684,arg58685,arg58686));

break;
case (9):
var arg58687 = (function (){var G__58914 = ctx;
var G__58915 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58914,G__58915) : sci.impl.interpreter.interpret.call(null,G__58914,G__58915));
})();
var args__$1 = cljs.core.rest(args);
var arg58688 = (function (){var G__58916 = ctx;
var G__58917 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58916,G__58917) : sci.impl.interpreter.interpret.call(null,G__58916,G__58917));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58689 = (function (){var G__58918 = ctx;
var G__58919 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58918,G__58919) : sci.impl.interpreter.interpret.call(null,G__58918,G__58919));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58690 = (function (){var G__58920 = ctx;
var G__58921 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58920,G__58921) : sci.impl.interpreter.interpret.call(null,G__58920,G__58921));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58691 = (function (){var G__58922 = ctx;
var G__58923 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58922,G__58923) : sci.impl.interpreter.interpret.call(null,G__58922,G__58923));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58692 = (function (){var G__58924 = ctx;
var G__58925 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58924,G__58925) : sci.impl.interpreter.interpret.call(null,G__58924,G__58925));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58693 = (function (){var G__58926 = ctx;
var G__58927 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58926,G__58927) : sci.impl.interpreter.interpret.call(null,G__58926,G__58927));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58694 = (function (){var G__58928 = ctx;
var G__58929 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58928,G__58929) : sci.impl.interpreter.interpret.call(null,G__58928,G__58929));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58695 = (function (){var G__58930 = ctx;
var G__58931 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58930,G__58931) : sci.impl.interpreter.interpret.call(null,G__58930,G__58931));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg58687,arg58688,arg58689,arg58690,arg58691,arg58692,arg58693,arg58694,arg58695) : f.call(null,arg58687,arg58688,arg58689,arg58690,arg58691,arg58692,arg58693,arg58694,arg58695));

break;
case (10):
var arg58696 = (function (){var G__58932 = ctx;
var G__58933 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58932,G__58933) : sci.impl.interpreter.interpret.call(null,G__58932,G__58933));
})();
var args__$1 = cljs.core.rest(args);
var arg58697 = (function (){var G__58934 = ctx;
var G__58935 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58934,G__58935) : sci.impl.interpreter.interpret.call(null,G__58934,G__58935));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58698 = (function (){var G__58936 = ctx;
var G__58937 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58936,G__58937) : sci.impl.interpreter.interpret.call(null,G__58936,G__58937));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58699 = (function (){var G__58938 = ctx;
var G__58939 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58938,G__58939) : sci.impl.interpreter.interpret.call(null,G__58938,G__58939));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58700 = (function (){var G__58940 = ctx;
var G__58941 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58940,G__58941) : sci.impl.interpreter.interpret.call(null,G__58940,G__58941));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58701 = (function (){var G__58942 = ctx;
var G__58943 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58942,G__58943) : sci.impl.interpreter.interpret.call(null,G__58942,G__58943));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58702 = (function (){var G__58944 = ctx;
var G__58945 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58944,G__58945) : sci.impl.interpreter.interpret.call(null,G__58944,G__58945));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58703 = (function (){var G__58946 = ctx;
var G__58947 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58946,G__58947) : sci.impl.interpreter.interpret.call(null,G__58946,G__58947));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58704 = (function (){var G__58948 = ctx;
var G__58949 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58948,G__58949) : sci.impl.interpreter.interpret.call(null,G__58948,G__58949));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58705 = (function (){var G__58950 = ctx;
var G__58951 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58950,G__58951) : sci.impl.interpreter.interpret.call(null,G__58950,G__58951));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg58696,arg58697,arg58698,arg58699,arg58700,arg58701,arg58702,arg58703,arg58704,arg58705) : f.call(null,arg58696,arg58697,arg58698,arg58699,arg58700,arg58701,arg58702,arg58703,arg58704,arg58705));

break;
case (11):
var arg58706 = (function (){var G__58952 = ctx;
var G__58953 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58952,G__58953) : sci.impl.interpreter.interpret.call(null,G__58952,G__58953));
})();
var args__$1 = cljs.core.rest(args);
var arg58707 = (function (){var G__58954 = ctx;
var G__58955 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58954,G__58955) : sci.impl.interpreter.interpret.call(null,G__58954,G__58955));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58708 = (function (){var G__58956 = ctx;
var G__58957 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58956,G__58957) : sci.impl.interpreter.interpret.call(null,G__58956,G__58957));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58709 = (function (){var G__58958 = ctx;
var G__58959 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58958,G__58959) : sci.impl.interpreter.interpret.call(null,G__58958,G__58959));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58710 = (function (){var G__58960 = ctx;
var G__58961 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58960,G__58961) : sci.impl.interpreter.interpret.call(null,G__58960,G__58961));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58711 = (function (){var G__58962 = ctx;
var G__58963 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58962,G__58963) : sci.impl.interpreter.interpret.call(null,G__58962,G__58963));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58712 = (function (){var G__58964 = ctx;
var G__58965 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58964,G__58965) : sci.impl.interpreter.interpret.call(null,G__58964,G__58965));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58713 = (function (){var G__58966 = ctx;
var G__58967 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58966,G__58967) : sci.impl.interpreter.interpret.call(null,G__58966,G__58967));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58714 = (function (){var G__58968 = ctx;
var G__58969 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58968,G__58969) : sci.impl.interpreter.interpret.call(null,G__58968,G__58969));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58715 = (function (){var G__58970 = ctx;
var G__58971 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58970,G__58971) : sci.impl.interpreter.interpret.call(null,G__58970,G__58971));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58716 = (function (){var G__58972 = ctx;
var G__58973 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58972,G__58973) : sci.impl.interpreter.interpret.call(null,G__58972,G__58973));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg58706,arg58707,arg58708,arg58709,arg58710,arg58711,arg58712,arg58713,arg58714,arg58715,arg58716) : f.call(null,arg58706,arg58707,arg58708,arg58709,arg58710,arg58711,arg58712,arg58713,arg58714,arg58715,arg58716));

break;
case (12):
var arg58717 = (function (){var G__58974 = ctx;
var G__58975 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58974,G__58975) : sci.impl.interpreter.interpret.call(null,G__58974,G__58975));
})();
var args__$1 = cljs.core.rest(args);
var arg58718 = (function (){var G__58976 = ctx;
var G__58977 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58976,G__58977) : sci.impl.interpreter.interpret.call(null,G__58976,G__58977));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58719 = (function (){var G__58978 = ctx;
var G__58979 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58978,G__58979) : sci.impl.interpreter.interpret.call(null,G__58978,G__58979));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58720 = (function (){var G__58980 = ctx;
var G__58981 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58980,G__58981) : sci.impl.interpreter.interpret.call(null,G__58980,G__58981));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58721 = (function (){var G__58982 = ctx;
var G__58983 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58982,G__58983) : sci.impl.interpreter.interpret.call(null,G__58982,G__58983));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58722 = (function (){var G__58984 = ctx;
var G__58985 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58984,G__58985) : sci.impl.interpreter.interpret.call(null,G__58984,G__58985));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58723 = (function (){var G__58986 = ctx;
var G__58987 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58986,G__58987) : sci.impl.interpreter.interpret.call(null,G__58986,G__58987));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58724 = (function (){var G__58988 = ctx;
var G__58989 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58988,G__58989) : sci.impl.interpreter.interpret.call(null,G__58988,G__58989));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58725 = (function (){var G__58990 = ctx;
var G__58991 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58990,G__58991) : sci.impl.interpreter.interpret.call(null,G__58990,G__58991));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58726 = (function (){var G__58992 = ctx;
var G__58993 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58992,G__58993) : sci.impl.interpreter.interpret.call(null,G__58992,G__58993));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58727 = (function (){var G__58994 = ctx;
var G__58995 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58994,G__58995) : sci.impl.interpreter.interpret.call(null,G__58994,G__58995));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58728 = (function (){var G__58996 = ctx;
var G__58997 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58996,G__58997) : sci.impl.interpreter.interpret.call(null,G__58996,G__58997));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg58717,arg58718,arg58719,arg58720,arg58721,arg58722,arg58723,arg58724,arg58725,arg58726,arg58727,arg58728) : f.call(null,arg58717,arg58718,arg58719,arg58720,arg58721,arg58722,arg58723,arg58724,arg58725,arg58726,arg58727,arg58728));

break;
case (13):
var arg58729 = (function (){var G__58998 = ctx;
var G__58999 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58998,G__58999) : sci.impl.interpreter.interpret.call(null,G__58998,G__58999));
})();
var args__$1 = cljs.core.rest(args);
var arg58730 = (function (){var G__59000 = ctx;
var G__59001 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59000,G__59001) : sci.impl.interpreter.interpret.call(null,G__59000,G__59001));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58731 = (function (){var G__59002 = ctx;
var G__59003 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59002,G__59003) : sci.impl.interpreter.interpret.call(null,G__59002,G__59003));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58732 = (function (){var G__59004 = ctx;
var G__59005 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59004,G__59005) : sci.impl.interpreter.interpret.call(null,G__59004,G__59005));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58733 = (function (){var G__59006 = ctx;
var G__59007 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59006,G__59007) : sci.impl.interpreter.interpret.call(null,G__59006,G__59007));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58734 = (function (){var G__59008 = ctx;
var G__59009 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59008,G__59009) : sci.impl.interpreter.interpret.call(null,G__59008,G__59009));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58735 = (function (){var G__59010 = ctx;
var G__59011 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59010,G__59011) : sci.impl.interpreter.interpret.call(null,G__59010,G__59011));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58736 = (function (){var G__59012 = ctx;
var G__59013 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59012,G__59013) : sci.impl.interpreter.interpret.call(null,G__59012,G__59013));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58737 = (function (){var G__59014 = ctx;
var G__59015 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59014,G__59015) : sci.impl.interpreter.interpret.call(null,G__59014,G__59015));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58738 = (function (){var G__59016 = ctx;
var G__59017 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59016,G__59017) : sci.impl.interpreter.interpret.call(null,G__59016,G__59017));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58739 = (function (){var G__59018 = ctx;
var G__59019 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59018,G__59019) : sci.impl.interpreter.interpret.call(null,G__59018,G__59019));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58740 = (function (){var G__59020 = ctx;
var G__59021 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59020,G__59021) : sci.impl.interpreter.interpret.call(null,G__59020,G__59021));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58741 = (function (){var G__59022 = ctx;
var G__59023 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59022,G__59023) : sci.impl.interpreter.interpret.call(null,G__59022,G__59023));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg58729,arg58730,arg58731,arg58732,arg58733,arg58734,arg58735,arg58736,arg58737,arg58738,arg58739,arg58740,arg58741) : f.call(null,arg58729,arg58730,arg58731,arg58732,arg58733,arg58734,arg58735,arg58736,arg58737,arg58738,arg58739,arg58740,arg58741));

break;
case (14):
var arg58742 = (function (){var G__59024 = ctx;
var G__59025 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59024,G__59025) : sci.impl.interpreter.interpret.call(null,G__59024,G__59025));
})();
var args__$1 = cljs.core.rest(args);
var arg58743 = (function (){var G__59026 = ctx;
var G__59027 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59026,G__59027) : sci.impl.interpreter.interpret.call(null,G__59026,G__59027));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58744 = (function (){var G__59028 = ctx;
var G__59029 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59028,G__59029) : sci.impl.interpreter.interpret.call(null,G__59028,G__59029));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58745 = (function (){var G__59030 = ctx;
var G__59031 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59030,G__59031) : sci.impl.interpreter.interpret.call(null,G__59030,G__59031));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58746 = (function (){var G__59032 = ctx;
var G__59033 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59032,G__59033) : sci.impl.interpreter.interpret.call(null,G__59032,G__59033));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58747 = (function (){var G__59034 = ctx;
var G__59035 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59034,G__59035) : sci.impl.interpreter.interpret.call(null,G__59034,G__59035));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58748 = (function (){var G__59036 = ctx;
var G__59037 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59036,G__59037) : sci.impl.interpreter.interpret.call(null,G__59036,G__59037));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58749 = (function (){var G__59038 = ctx;
var G__59039 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59038,G__59039) : sci.impl.interpreter.interpret.call(null,G__59038,G__59039));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58750 = (function (){var G__59040 = ctx;
var G__59041 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59040,G__59041) : sci.impl.interpreter.interpret.call(null,G__59040,G__59041));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58751 = (function (){var G__59042 = ctx;
var G__59043 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59042,G__59043) : sci.impl.interpreter.interpret.call(null,G__59042,G__59043));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58752 = (function (){var G__59044 = ctx;
var G__59045 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59044,G__59045) : sci.impl.interpreter.interpret.call(null,G__59044,G__59045));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58753 = (function (){var G__59046 = ctx;
var G__59047 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59046,G__59047) : sci.impl.interpreter.interpret.call(null,G__59046,G__59047));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58754 = (function (){var G__59048 = ctx;
var G__59049 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59048,G__59049) : sci.impl.interpreter.interpret.call(null,G__59048,G__59049));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg58755 = (function (){var G__59050 = ctx;
var G__59051 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59050,G__59051) : sci.impl.interpreter.interpret.call(null,G__59050,G__59051));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg58742,arg58743,arg58744,arg58745,arg58746,arg58747,arg58748,arg58749,arg58750,arg58751,arg58752,arg58753,arg58754,arg58755) : f.call(null,arg58742,arg58743,arg58744,arg58745,arg58746,arg58747,arg58748,arg58749,arg58750,arg58751,arg58752,arg58753,arg58754,arg58755));

break;
case (15):
var arg58756 = (function (){var G__59052 = ctx;
var G__59053 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59052,G__59053) : sci.impl.interpreter.interpret.call(null,G__59052,G__59053));
})();
var args__$1 = cljs.core.rest(args);
var arg58757 = (function (){var G__59054 = ctx;
var G__59055 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59054,G__59055) : sci.impl.interpreter.interpret.call(null,G__59054,G__59055));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58758 = (function (){var G__59056 = ctx;
var G__59057 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59056,G__59057) : sci.impl.interpreter.interpret.call(null,G__59056,G__59057));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58759 = (function (){var G__59058 = ctx;
var G__59059 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59058,G__59059) : sci.impl.interpreter.interpret.call(null,G__59058,G__59059));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58760 = (function (){var G__59060 = ctx;
var G__59061 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59060,G__59061) : sci.impl.interpreter.interpret.call(null,G__59060,G__59061));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58761 = (function (){var G__59062 = ctx;
var G__59063 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59062,G__59063) : sci.impl.interpreter.interpret.call(null,G__59062,G__59063));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58762 = (function (){var G__59064 = ctx;
var G__59065 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59064,G__59065) : sci.impl.interpreter.interpret.call(null,G__59064,G__59065));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58763 = (function (){var G__59066 = ctx;
var G__59067 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59066,G__59067) : sci.impl.interpreter.interpret.call(null,G__59066,G__59067));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58764 = (function (){var G__59068 = ctx;
var G__59069 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59068,G__59069) : sci.impl.interpreter.interpret.call(null,G__59068,G__59069));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58765 = (function (){var G__59070 = ctx;
var G__59071 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59070,G__59071) : sci.impl.interpreter.interpret.call(null,G__59070,G__59071));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58766 = (function (){var G__59072 = ctx;
var G__59073 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59072,G__59073) : sci.impl.interpreter.interpret.call(null,G__59072,G__59073));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58767 = (function (){var G__59074 = ctx;
var G__59075 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59074,G__59075) : sci.impl.interpreter.interpret.call(null,G__59074,G__59075));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58768 = (function (){var G__59076 = ctx;
var G__59077 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59076,G__59077) : sci.impl.interpreter.interpret.call(null,G__59076,G__59077));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg58769 = (function (){var G__59078 = ctx;
var G__59079 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59078,G__59079) : sci.impl.interpreter.interpret.call(null,G__59078,G__59079));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg58770 = (function (){var G__59080 = ctx;
var G__59081 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59080,G__59081) : sci.impl.interpreter.interpret.call(null,G__59080,G__59081));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg58756,arg58757,arg58758,arg58759,arg58760,arg58761,arg58762,arg58763,arg58764,arg58765,arg58766,arg58767,arg58768,arg58769,arg58770) : f.call(null,arg58756,arg58757,arg58758,arg58759,arg58760,arg58761,arg58762,arg58763,arg58764,arg58765,arg58766,arg58767,arg58768,arg58769,arg58770));

break;
case (16):
var arg58771 = (function (){var G__59082 = ctx;
var G__59083 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59082,G__59083) : sci.impl.interpreter.interpret.call(null,G__59082,G__59083));
})();
var args__$1 = cljs.core.rest(args);
var arg58772 = (function (){var G__59084 = ctx;
var G__59085 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59084,G__59085) : sci.impl.interpreter.interpret.call(null,G__59084,G__59085));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58773 = (function (){var G__59086 = ctx;
var G__59087 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59086,G__59087) : sci.impl.interpreter.interpret.call(null,G__59086,G__59087));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58774 = (function (){var G__59088 = ctx;
var G__59089 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59088,G__59089) : sci.impl.interpreter.interpret.call(null,G__59088,G__59089));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58775 = (function (){var G__59090 = ctx;
var G__59091 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59090,G__59091) : sci.impl.interpreter.interpret.call(null,G__59090,G__59091));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58776 = (function (){var G__59092 = ctx;
var G__59093 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59092,G__59093) : sci.impl.interpreter.interpret.call(null,G__59092,G__59093));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58777 = (function (){var G__59094 = ctx;
var G__59095 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59094,G__59095) : sci.impl.interpreter.interpret.call(null,G__59094,G__59095));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58778 = (function (){var G__59096 = ctx;
var G__59097 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59096,G__59097) : sci.impl.interpreter.interpret.call(null,G__59096,G__59097));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58779 = (function (){var G__59098 = ctx;
var G__59099 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59098,G__59099) : sci.impl.interpreter.interpret.call(null,G__59098,G__59099));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58780 = (function (){var G__59100 = ctx;
var G__59101 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59100,G__59101) : sci.impl.interpreter.interpret.call(null,G__59100,G__59101));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58781 = (function (){var G__59102 = ctx;
var G__59103 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59102,G__59103) : sci.impl.interpreter.interpret.call(null,G__59102,G__59103));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58782 = (function (){var G__59104 = ctx;
var G__59105 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59104,G__59105) : sci.impl.interpreter.interpret.call(null,G__59104,G__59105));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58783 = (function (){var G__59106 = ctx;
var G__59107 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59106,G__59107) : sci.impl.interpreter.interpret.call(null,G__59106,G__59107));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg58784 = (function (){var G__59108 = ctx;
var G__59109 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59108,G__59109) : sci.impl.interpreter.interpret.call(null,G__59108,G__59109));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg58785 = (function (){var G__59110 = ctx;
var G__59111 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59110,G__59111) : sci.impl.interpreter.interpret.call(null,G__59110,G__59111));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg58786 = (function (){var G__59112 = ctx;
var G__59113 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59112,G__59113) : sci.impl.interpreter.interpret.call(null,G__59112,G__59113));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg58771,arg58772,arg58773,arg58774,arg58775,arg58776,arg58777,arg58778,arg58779,arg58780,arg58781,arg58782,arg58783,arg58784,arg58785,arg58786) : f.call(null,arg58771,arg58772,arg58773,arg58774,arg58775,arg58776,arg58777,arg58778,arg58779,arg58780,arg58781,arg58782,arg58783,arg58784,arg58785,arg58786));

break;
case (17):
var arg58787 = (function (){var G__59114 = ctx;
var G__59115 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59114,G__59115) : sci.impl.interpreter.interpret.call(null,G__59114,G__59115));
})();
var args__$1 = cljs.core.rest(args);
var arg58788 = (function (){var G__59116 = ctx;
var G__59117 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59116,G__59117) : sci.impl.interpreter.interpret.call(null,G__59116,G__59117));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58789 = (function (){var G__59118 = ctx;
var G__59119 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59118,G__59119) : sci.impl.interpreter.interpret.call(null,G__59118,G__59119));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58790 = (function (){var G__59120 = ctx;
var G__59121 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59120,G__59121) : sci.impl.interpreter.interpret.call(null,G__59120,G__59121));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58791 = (function (){var G__59122 = ctx;
var G__59123 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59122,G__59123) : sci.impl.interpreter.interpret.call(null,G__59122,G__59123));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58792 = (function (){var G__59124 = ctx;
var G__59125 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59124,G__59125) : sci.impl.interpreter.interpret.call(null,G__59124,G__59125));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58793 = (function (){var G__59126 = ctx;
var G__59127 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59126,G__59127) : sci.impl.interpreter.interpret.call(null,G__59126,G__59127));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58794 = (function (){var G__59128 = ctx;
var G__59129 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59128,G__59129) : sci.impl.interpreter.interpret.call(null,G__59128,G__59129));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58795 = (function (){var G__59130 = ctx;
var G__59131 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59130,G__59131) : sci.impl.interpreter.interpret.call(null,G__59130,G__59131));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58796 = (function (){var G__59132 = ctx;
var G__59133 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59132,G__59133) : sci.impl.interpreter.interpret.call(null,G__59132,G__59133));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58797 = (function (){var G__59134 = ctx;
var G__59135 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59134,G__59135) : sci.impl.interpreter.interpret.call(null,G__59134,G__59135));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58798 = (function (){var G__59136 = ctx;
var G__59137 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59136,G__59137) : sci.impl.interpreter.interpret.call(null,G__59136,G__59137));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58799 = (function (){var G__59138 = ctx;
var G__59139 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59138,G__59139) : sci.impl.interpreter.interpret.call(null,G__59138,G__59139));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg58800 = (function (){var G__59140 = ctx;
var G__59141 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59140,G__59141) : sci.impl.interpreter.interpret.call(null,G__59140,G__59141));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg58801 = (function (){var G__59142 = ctx;
var G__59143 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59142,G__59143) : sci.impl.interpreter.interpret.call(null,G__59142,G__59143));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg58802 = (function (){var G__59144 = ctx;
var G__59145 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59144,G__59145) : sci.impl.interpreter.interpret.call(null,G__59144,G__59145));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg58803 = (function (){var G__59146 = ctx;
var G__59147 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59146,G__59147) : sci.impl.interpreter.interpret.call(null,G__59146,G__59147));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg58787,arg58788,arg58789,arg58790,arg58791,arg58792,arg58793,arg58794,arg58795,arg58796,arg58797,arg58798,arg58799,arg58800,arg58801,arg58802,arg58803) : f.call(null,arg58787,arg58788,arg58789,arg58790,arg58791,arg58792,arg58793,arg58794,arg58795,arg58796,arg58797,arg58798,arg58799,arg58800,arg58801,arg58802,arg58803));

break;
case (18):
var arg58804 = (function (){var G__59148 = ctx;
var G__59149 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59148,G__59149) : sci.impl.interpreter.interpret.call(null,G__59148,G__59149));
})();
var args__$1 = cljs.core.rest(args);
var arg58805 = (function (){var G__59150 = ctx;
var G__59151 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59150,G__59151) : sci.impl.interpreter.interpret.call(null,G__59150,G__59151));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58806 = (function (){var G__59152 = ctx;
var G__59153 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59152,G__59153) : sci.impl.interpreter.interpret.call(null,G__59152,G__59153));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58807 = (function (){var G__59154 = ctx;
var G__59155 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59154,G__59155) : sci.impl.interpreter.interpret.call(null,G__59154,G__59155));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58808 = (function (){var G__59156 = ctx;
var G__59157 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59156,G__59157) : sci.impl.interpreter.interpret.call(null,G__59156,G__59157));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58809 = (function (){var G__59158 = ctx;
var G__59159 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59158,G__59159) : sci.impl.interpreter.interpret.call(null,G__59158,G__59159));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58810 = (function (){var G__59160 = ctx;
var G__59161 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59160,G__59161) : sci.impl.interpreter.interpret.call(null,G__59160,G__59161));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58811 = (function (){var G__59162 = ctx;
var G__59163 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59162,G__59163) : sci.impl.interpreter.interpret.call(null,G__59162,G__59163));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58812 = (function (){var G__59164 = ctx;
var G__59165 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59164,G__59165) : sci.impl.interpreter.interpret.call(null,G__59164,G__59165));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58813 = (function (){var G__59166 = ctx;
var G__59167 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59166,G__59167) : sci.impl.interpreter.interpret.call(null,G__59166,G__59167));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58814 = (function (){var G__59168 = ctx;
var G__59169 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59168,G__59169) : sci.impl.interpreter.interpret.call(null,G__59168,G__59169));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58815 = (function (){var G__59170 = ctx;
var G__59171 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59170,G__59171) : sci.impl.interpreter.interpret.call(null,G__59170,G__59171));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58816 = (function (){var G__59172 = ctx;
var G__59173 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59172,G__59173) : sci.impl.interpreter.interpret.call(null,G__59172,G__59173));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg58817 = (function (){var G__59174 = ctx;
var G__59175 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59174,G__59175) : sci.impl.interpreter.interpret.call(null,G__59174,G__59175));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg58818 = (function (){var G__59176 = ctx;
var G__59177 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59176,G__59177) : sci.impl.interpreter.interpret.call(null,G__59176,G__59177));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg58819 = (function (){var G__59178 = ctx;
var G__59179 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59178,G__59179) : sci.impl.interpreter.interpret.call(null,G__59178,G__59179));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg58820 = (function (){var G__59180 = ctx;
var G__59181 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59180,G__59181) : sci.impl.interpreter.interpret.call(null,G__59180,G__59181));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg58821 = (function (){var G__59182 = ctx;
var G__59183 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59182,G__59183) : sci.impl.interpreter.interpret.call(null,G__59182,G__59183));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg58804,arg58805,arg58806,arg58807,arg58808,arg58809,arg58810,arg58811,arg58812,arg58813,arg58814,arg58815,arg58816,arg58817,arg58818,arg58819,arg58820,arg58821) : f.call(null,arg58804,arg58805,arg58806,arg58807,arg58808,arg58809,arg58810,arg58811,arg58812,arg58813,arg58814,arg58815,arg58816,arg58817,arg58818,arg58819,arg58820,arg58821));

break;
case (19):
var arg58822 = (function (){var G__59184 = ctx;
var G__59185 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59184,G__59185) : sci.impl.interpreter.interpret.call(null,G__59184,G__59185));
})();
var args__$1 = cljs.core.rest(args);
var arg58823 = (function (){var G__59186 = ctx;
var G__59187 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59186,G__59187) : sci.impl.interpreter.interpret.call(null,G__59186,G__59187));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58824 = (function (){var G__59188 = ctx;
var G__59189 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59188,G__59189) : sci.impl.interpreter.interpret.call(null,G__59188,G__59189));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58825 = (function (){var G__59190 = ctx;
var G__59191 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59190,G__59191) : sci.impl.interpreter.interpret.call(null,G__59190,G__59191));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58826 = (function (){var G__59192 = ctx;
var G__59193 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59192,G__59193) : sci.impl.interpreter.interpret.call(null,G__59192,G__59193));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58827 = (function (){var G__59194 = ctx;
var G__59195 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59194,G__59195) : sci.impl.interpreter.interpret.call(null,G__59194,G__59195));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58828 = (function (){var G__59196 = ctx;
var G__59197 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59196,G__59197) : sci.impl.interpreter.interpret.call(null,G__59196,G__59197));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58829 = (function (){var G__59198 = ctx;
var G__59199 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59198,G__59199) : sci.impl.interpreter.interpret.call(null,G__59198,G__59199));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58830 = (function (){var G__59200 = ctx;
var G__59201 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59200,G__59201) : sci.impl.interpreter.interpret.call(null,G__59200,G__59201));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58831 = (function (){var G__59202 = ctx;
var G__59203 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59202,G__59203) : sci.impl.interpreter.interpret.call(null,G__59202,G__59203));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58832 = (function (){var G__59204 = ctx;
var G__59205 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59204,G__59205) : sci.impl.interpreter.interpret.call(null,G__59204,G__59205));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58833 = (function (){var G__59206 = ctx;
var G__59207 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59206,G__59207) : sci.impl.interpreter.interpret.call(null,G__59206,G__59207));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58834 = (function (){var G__59208 = ctx;
var G__59209 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59208,G__59209) : sci.impl.interpreter.interpret.call(null,G__59208,G__59209));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg58835 = (function (){var G__59210 = ctx;
var G__59211 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59210,G__59211) : sci.impl.interpreter.interpret.call(null,G__59210,G__59211));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg58836 = (function (){var G__59212 = ctx;
var G__59213 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59212,G__59213) : sci.impl.interpreter.interpret.call(null,G__59212,G__59213));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg58837 = (function (){var G__59214 = ctx;
var G__59215 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59214,G__59215) : sci.impl.interpreter.interpret.call(null,G__59214,G__59215));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg58838 = (function (){var G__59216 = ctx;
var G__59217 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59216,G__59217) : sci.impl.interpreter.interpret.call(null,G__59216,G__59217));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg58839 = (function (){var G__59218 = ctx;
var G__59219 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59218,G__59219) : sci.impl.interpreter.interpret.call(null,G__59218,G__59219));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg58840 = (function (){var G__59220 = ctx;
var G__59221 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59220,G__59221) : sci.impl.interpreter.interpret.call(null,G__59220,G__59221));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg58822,arg58823,arg58824,arg58825,arg58826,arg58827,arg58828,arg58829,arg58830,arg58831,arg58832,arg58833,arg58834,arg58835,arg58836,arg58837,arg58838,arg58839,arg58840) : f.call(null,arg58822,arg58823,arg58824,arg58825,arg58826,arg58827,arg58828,arg58829,arg58830,arg58831,arg58832,arg58833,arg58834,arg58835,arg58836,arg58837,arg58838,arg58839,arg58840));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__59222 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__59222)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__59222)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__59222)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__59222)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__59222)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__59222)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__59223 = ctx;
var G__59224 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59223,G__59224) : sci.impl.interpreter.interpret.call(null,G__59223,G__59224));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__59222)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__59222)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__59222)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__59222)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__59222)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__59222)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__59222)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__59222)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__59222)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__59225 = ctx;
var G__59226 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59225,G__59226) : sci.impl.interpreter.interpret.call(null,G__59225,G__59226));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__59222)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__59222)){
return (new cljs.core.LazySeq(null,(function (){var G__59227 = ctx;
var G__59228 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59227,G__59228) : sci.impl.interpreter.interpret.call(null,G__59227,G__59228));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__59222)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__59222)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__59222)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__59222)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59222)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e59229){if((e59229 instanceof Error)){
var e = e59229;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e59229;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__59236 = op;
var G__59236__$1 = (((G__59236 instanceof cljs.core.Keyword))?G__59236.fqn:null);
switch (G__59236__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59233_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59233_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59233_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59234_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59234_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59234_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59235_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59235_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59235_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__59283 = cljs.core.rest(exprs);
var G__59284 = (function (){var G__59239 = ctx;
var G__59240 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__59239,G__59240) : sci.impl.interpreter.eval_form.call(null,G__59239,G__59240));
})();
exprs = G__59283;
ret = G__59284;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__59285 = ret__$1;
ret = G__59285;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__59242 = arguments.length;
switch (G__59242) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
