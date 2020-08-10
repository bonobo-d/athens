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
var G__59236 = xs;
args__$2 = G__59236;
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
var G__59237 = xs;
args__$2 = G__59237;
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
var len__4736__auto___59238 = arguments.length;
var i__4737__auto___59239 = (0);
while(true){
if((i__4737__auto___59239 < len__4736__auto___59238)){
args__4742__auto__.push((arguments[i__4737__auto___59239]));

var G__59240 = (i__4737__auto___59239 + (1));
i__4737__auto___59239 = G__59240;
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
var G__59241 = ctx__$2;
var G__59242 = rest_let_bindings;
ctx__$1 = G__59241;
let_bindings__$1 = G__59242;
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
var G__59243 = nexprs;
exprs__$1 = G__59243;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq58482){
var G__58483 = cljs.core.first(seq58482);
var seq58482__$1 = cljs.core.next(seq58482);
var G__58484 = cljs.core.first(seq58482__$1);
var seq58482__$2 = cljs.core.next(seq58482__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58483,G__58484,seq58482__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__58485){
var vec__58486 = p__58485;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58486,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58486,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58486,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58486,(3),null);
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
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__58491 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__58491,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__58491;
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
var vec__58496 = libspec;
var seq__58497 = cljs.core.seq(vec__58496);
var first__58498 = cljs.core.first(seq__58497);
var seq__58497__$1 = cljs.core.next(seq__58497);
var lib_name = first__58498;
var opts = seq__58497__$1;
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
var G__59245 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__59246 = rst_opts__$1;
ret__$1 = G__59245;
G__58503__$1 = G__59246;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__59247 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__59248 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__59247;
G__58503__$1 = G__59248;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__59249 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__59250 = rst_opts__$1;
ret__$1 = G__59249;
G__58503__$1 = G__59250;
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
var vec__58522 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58522,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58522,(1),null);
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
var map__58526 = sci.impl.interpreter.parse_libspec(libspec);
var map__58526__$1 = (((((!((map__58526 == null))))?(((((map__58526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58526):map__58526);
var parsed_libspec = map__58526__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58526__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58526__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__58529 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__58529) : load_fn.call(null,G__58529));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__58530 = temp__5733__auto____$2;
var map__58530__$1 = (((((!((map__58530 == null))))?(((((map__58530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58530):map__58530);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58530__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58530__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__58536_59251 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__58537_59252 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__58536_59251,G__58537_59252) : sci.impl.interpreter.eval_string_STAR_.call(null,G__58536_59251,G__58537_59252));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e58535){if((e58535 instanceof Error)){
var e_59253 = e58535;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_59253;
} else {
throw e58535;

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
var len__4736__auto___59254 = arguments.length;
var i__4737__auto___59255 = (0);
while(true){
if((i__4737__auto___59255 < len__4736__auto___59254)){
args__4742__auto__.push((arguments[i__4737__auto___59255]));

var G__59256 = (i__4737__auto___59255 + (1));
i__4737__auto___59255 = G__59256;
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
var ret = (function (){var G__58553 = ctx;
var G__58554 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58553,G__58554) : sci.impl.interpreter.interpret.call(null,G__58553,G__58554));
})();
if((ret instanceof cljs.core.Symbol)){
var G__59257 = (function (){var G__58555 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58555,current_libspec);
} else {
return G__58555;
}
})();
var G__59258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__59259 = cljs.core.next(args__$1);
libspecs = G__59257;
current_libspec = G__59258;
args__$1 = G__59259;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__59260 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__59261 = null;
var G__59262 = cljs.core.next(args__$1);
libspecs = G__59260;
current_libspec = G__59261;
args__$1 = G__59262;
continue;
} else {
var G__59263 = (function (){var G__58556 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58556,current_libspec);
} else {
return G__58556;
}
})();
var G__59264 = ret;
var G__59265 = cljs.core.next(args__$1);
libspecs = G__59263;
current_libspec = G__59264;
args__$1 = G__59265;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__58557 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58557,current_libspec);
} else {
return G__58557;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__58542_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__58542_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq58543){
var G__58544 = cljs.core.first(seq58543);
var seq58543__$1 = cljs.core.next(seq58543);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58544,seq58543__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59266 = arguments.length;
var i__4737__auto___59267 = (0);
while(true){
if((i__4737__auto___59267 < len__4736__auto___59266)){
args__4742__auto__.push((arguments[i__4737__auto___59267]));

var G__59268 = (i__4737__auto___59267 + (1));
i__4737__auto___59267 = G__59268;
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
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq58566){
var G__58567 = cljs.core.first(seq58566);
var seq58566__$1 = cljs.core.next(seq58566);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58567,seq58566__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__58575){
var vec__58576 = p__58575;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58576,(0),null);
var map__58579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58576,(1),null);
var map__58579__$1 = (((((!((map__58579 == null))))?(((((map__58579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58579):map__58579);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58579__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58579__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58579__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__58581 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58581,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58581,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__58584 = ctx;
var G__58585 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58584,G__58585) : sci.impl.interpreter.interpret.call(null,G__58584,G__58585));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__58586 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__58586__$1 = (((((!((map__58586 == null))))?(((((map__58586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58586):map__58586);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__58594 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__58595 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__58595);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__58594);
}}catch (e58588){if((e58588 instanceof Error)){
var e = e58588;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__58589 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__58590 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58589,G__58590) : sci.impl.interpreter.interpret.call(null,G__58589,G__58590));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__58591 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58591,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58591,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e58588;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__58596){
var vec__58597 = p__58596;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58597,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58597,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58600_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__58600_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__58600_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__58602){
var vec__58603 = p__58602;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58603,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58601_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__58601_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__58601_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__58608,p__58609){
var map__58610 = p__58608;
var map__58610__$1 = (((((!((map__58610 == null))))?(((((map__58610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58610):map__58610);
var ctx = map__58610__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__58611 = p__58609;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58611,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58611,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58611,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58611,(3),null);
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58607_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__58607_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__58607_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__58615){
var vec__58616 = p__58615;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58616,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58616,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__58619){
var vec__58620 = p__58619;
var seq__58621 = cljs.core.seq(vec__58620);
var first__58622 = cljs.core.first(seq__58621);
var seq__58621__$1 = cljs.core.next(seq__58621);
var _ = first__58622;
var first__58622__$1 = cljs.core.first(seq__58621__$1);
var seq__58621__$2 = cljs.core.next(seq__58621__$1);
var ns_sym = first__58622__$1;
var exprs = seq__58621__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__58623 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58623,(1),null);
var G__58626_59269 = k;
var G__58626_59270__$1 = (((G__58626_59269 instanceof cljs.core.Keyword))?G__58626_59269.fqn:null);
switch (G__58626_59270__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__58626_59269,G__58626_59270__$1,vec__58623,k,v,ns_sym__$1,vec__58620,seq__58621,first__58622,seq__58621__$1,_,first__58622__$1,seq__58621__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__58626_59269,G__58626_59270__$1,vec__58623,k,v,ns_sym__$1,vec__58620,seq__58621,first__58622,seq__58621__$1,_,first__58622__$1,seq__58621__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58626_59270__$1)].join('')));

}

var G__59272 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__59272;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__58627){
var vec__58628 = p__58627;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58628,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58628,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58628,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__58634 = exprs;
var vec__58635 = G__58634;
var seq__58636 = cljs.core.seq(vec__58635);
var first__58637 = cljs.core.first(seq__58636);
var seq__58636__$1 = cljs.core.next(seq__58636);
var expr = first__58637;
var exprs__$1 = seq__58636__$1;
var G__58634__$1 = G__58634;
while(true){
var vec__58638 = G__58634__$1;
var seq__58639 = cljs.core.seq(vec__58638);
var first__58640 = cljs.core.first(seq__58639);
var seq__58639__$1 = cljs.core.next(seq__58639);
var expr__$1 = first__58640;
var exprs__$2 = seq__58639__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e58641){if((e58641 instanceof Error)){
var e = e58641;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e58641;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__59273 = exprs__$3;
G__58634__$1 = G__59273;
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
var G__58834 = cljs.core.count(args);
switch (G__58834) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg58644 = (function (){var G__58835 = ctx;
var G__58836 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58835,G__58836) : sci.impl.interpreter.interpret.call(null,G__58835,G__58836));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg58644) : f.call(null,arg58644));

break;
case (2):
var arg58645 = (function (){var G__58837 = ctx;
var G__58838 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58837,G__58838) : sci.impl.interpreter.interpret.call(null,G__58837,G__58838));
})();
var args__$1 = cljs.core.rest(args);
var arg58646 = (function (){var G__58839 = ctx;
var G__58840 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58839,G__58840) : sci.impl.interpreter.interpret.call(null,G__58839,G__58840));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg58645,arg58646) : f.call(null,arg58645,arg58646));

break;
case (3):
var arg58647 = (function (){var G__58841 = ctx;
var G__58842 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58841,G__58842) : sci.impl.interpreter.interpret.call(null,G__58841,G__58842));
})();
var args__$1 = cljs.core.rest(args);
var arg58648 = (function (){var G__58843 = ctx;
var G__58844 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58843,G__58844) : sci.impl.interpreter.interpret.call(null,G__58843,G__58844));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58649 = (function (){var G__58845 = ctx;
var G__58846 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58845,G__58846) : sci.impl.interpreter.interpret.call(null,G__58845,G__58846));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg58647,arg58648,arg58649) : f.call(null,arg58647,arg58648,arg58649));

break;
case (4):
var arg58650 = (function (){var G__58847 = ctx;
var G__58848 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58847,G__58848) : sci.impl.interpreter.interpret.call(null,G__58847,G__58848));
})();
var args__$1 = cljs.core.rest(args);
var arg58651 = (function (){var G__58849 = ctx;
var G__58850 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58849,G__58850) : sci.impl.interpreter.interpret.call(null,G__58849,G__58850));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58652 = (function (){var G__58851 = ctx;
var G__58852 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58851,G__58852) : sci.impl.interpreter.interpret.call(null,G__58851,G__58852));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58653 = (function (){var G__58853 = ctx;
var G__58854 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58853,G__58854) : sci.impl.interpreter.interpret.call(null,G__58853,G__58854));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg58650,arg58651,arg58652,arg58653) : f.call(null,arg58650,arg58651,arg58652,arg58653));

break;
case (5):
var arg58654 = (function (){var G__58855 = ctx;
var G__58856 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58855,G__58856) : sci.impl.interpreter.interpret.call(null,G__58855,G__58856));
})();
var args__$1 = cljs.core.rest(args);
var arg58655 = (function (){var G__58857 = ctx;
var G__58858 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58857,G__58858) : sci.impl.interpreter.interpret.call(null,G__58857,G__58858));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58656 = (function (){var G__58859 = ctx;
var G__58860 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58859,G__58860) : sci.impl.interpreter.interpret.call(null,G__58859,G__58860));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58657 = (function (){var G__58861 = ctx;
var G__58862 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58861,G__58862) : sci.impl.interpreter.interpret.call(null,G__58861,G__58862));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58658 = (function (){var G__58863 = ctx;
var G__58864 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58863,G__58864) : sci.impl.interpreter.interpret.call(null,G__58863,G__58864));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg58654,arg58655,arg58656,arg58657,arg58658) : f.call(null,arg58654,arg58655,arg58656,arg58657,arg58658));

break;
case (6):
var arg58659 = (function (){var G__58865 = ctx;
var G__58866 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58865,G__58866) : sci.impl.interpreter.interpret.call(null,G__58865,G__58866));
})();
var args__$1 = cljs.core.rest(args);
var arg58660 = (function (){var G__58867 = ctx;
var G__58868 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58867,G__58868) : sci.impl.interpreter.interpret.call(null,G__58867,G__58868));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58661 = (function (){var G__58869 = ctx;
var G__58870 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58869,G__58870) : sci.impl.interpreter.interpret.call(null,G__58869,G__58870));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58662 = (function (){var G__58871 = ctx;
var G__58872 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58871,G__58872) : sci.impl.interpreter.interpret.call(null,G__58871,G__58872));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58663 = (function (){var G__58873 = ctx;
var G__58874 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58873,G__58874) : sci.impl.interpreter.interpret.call(null,G__58873,G__58874));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58664 = (function (){var G__58875 = ctx;
var G__58876 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58875,G__58876) : sci.impl.interpreter.interpret.call(null,G__58875,G__58876));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg58659,arg58660,arg58661,arg58662,arg58663,arg58664) : f.call(null,arg58659,arg58660,arg58661,arg58662,arg58663,arg58664));

break;
case (7):
var arg58665 = (function (){var G__58877 = ctx;
var G__58878 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58877,G__58878) : sci.impl.interpreter.interpret.call(null,G__58877,G__58878));
})();
var args__$1 = cljs.core.rest(args);
var arg58666 = (function (){var G__58879 = ctx;
var G__58880 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58879,G__58880) : sci.impl.interpreter.interpret.call(null,G__58879,G__58880));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58667 = (function (){var G__58881 = ctx;
var G__58882 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58881,G__58882) : sci.impl.interpreter.interpret.call(null,G__58881,G__58882));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58668 = (function (){var G__58883 = ctx;
var G__58884 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58883,G__58884) : sci.impl.interpreter.interpret.call(null,G__58883,G__58884));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58669 = (function (){var G__58885 = ctx;
var G__58886 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58885,G__58886) : sci.impl.interpreter.interpret.call(null,G__58885,G__58886));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58670 = (function (){var G__58887 = ctx;
var G__58888 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58887,G__58888) : sci.impl.interpreter.interpret.call(null,G__58887,G__58888));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58671 = (function (){var G__58889 = ctx;
var G__58890 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58889,G__58890) : sci.impl.interpreter.interpret.call(null,G__58889,G__58890));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg58665,arg58666,arg58667,arg58668,arg58669,arg58670,arg58671) : f.call(null,arg58665,arg58666,arg58667,arg58668,arg58669,arg58670,arg58671));

break;
case (8):
var arg58672 = (function (){var G__58891 = ctx;
var G__58892 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58891,G__58892) : sci.impl.interpreter.interpret.call(null,G__58891,G__58892));
})();
var args__$1 = cljs.core.rest(args);
var arg58673 = (function (){var G__58893 = ctx;
var G__58894 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58893,G__58894) : sci.impl.interpreter.interpret.call(null,G__58893,G__58894));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58674 = (function (){var G__58895 = ctx;
var G__58896 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58895,G__58896) : sci.impl.interpreter.interpret.call(null,G__58895,G__58896));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58675 = (function (){var G__58897 = ctx;
var G__58898 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58897,G__58898) : sci.impl.interpreter.interpret.call(null,G__58897,G__58898));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58676 = (function (){var G__58899 = ctx;
var G__58900 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58899,G__58900) : sci.impl.interpreter.interpret.call(null,G__58899,G__58900));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58677 = (function (){var G__58901 = ctx;
var G__58902 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58901,G__58902) : sci.impl.interpreter.interpret.call(null,G__58901,G__58902));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58678 = (function (){var G__58903 = ctx;
var G__58904 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58903,G__58904) : sci.impl.interpreter.interpret.call(null,G__58903,G__58904));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58679 = (function (){var G__58905 = ctx;
var G__58906 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58905,G__58906) : sci.impl.interpreter.interpret.call(null,G__58905,G__58906));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg58672,arg58673,arg58674,arg58675,arg58676,arg58677,arg58678,arg58679) : f.call(null,arg58672,arg58673,arg58674,arg58675,arg58676,arg58677,arg58678,arg58679));

break;
case (9):
var arg58680 = (function (){var G__58907 = ctx;
var G__58908 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58907,G__58908) : sci.impl.interpreter.interpret.call(null,G__58907,G__58908));
})();
var args__$1 = cljs.core.rest(args);
var arg58681 = (function (){var G__58909 = ctx;
var G__58910 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58909,G__58910) : sci.impl.interpreter.interpret.call(null,G__58909,G__58910));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58682 = (function (){var G__58911 = ctx;
var G__58912 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58911,G__58912) : sci.impl.interpreter.interpret.call(null,G__58911,G__58912));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58683 = (function (){var G__58913 = ctx;
var G__58914 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58913,G__58914) : sci.impl.interpreter.interpret.call(null,G__58913,G__58914));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58684 = (function (){var G__58915 = ctx;
var G__58916 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58915,G__58916) : sci.impl.interpreter.interpret.call(null,G__58915,G__58916));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58685 = (function (){var G__58917 = ctx;
var G__58918 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58917,G__58918) : sci.impl.interpreter.interpret.call(null,G__58917,G__58918));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58686 = (function (){var G__58919 = ctx;
var G__58920 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58919,G__58920) : sci.impl.interpreter.interpret.call(null,G__58919,G__58920));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58687 = (function (){var G__58921 = ctx;
var G__58922 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58921,G__58922) : sci.impl.interpreter.interpret.call(null,G__58921,G__58922));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58688 = (function (){var G__58923 = ctx;
var G__58924 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58923,G__58924) : sci.impl.interpreter.interpret.call(null,G__58923,G__58924));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg58680,arg58681,arg58682,arg58683,arg58684,arg58685,arg58686,arg58687,arg58688) : f.call(null,arg58680,arg58681,arg58682,arg58683,arg58684,arg58685,arg58686,arg58687,arg58688));

break;
case (10):
var arg58689 = (function (){var G__58925 = ctx;
var G__58926 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58925,G__58926) : sci.impl.interpreter.interpret.call(null,G__58925,G__58926));
})();
var args__$1 = cljs.core.rest(args);
var arg58690 = (function (){var G__58927 = ctx;
var G__58928 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58927,G__58928) : sci.impl.interpreter.interpret.call(null,G__58927,G__58928));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58691 = (function (){var G__58929 = ctx;
var G__58930 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58929,G__58930) : sci.impl.interpreter.interpret.call(null,G__58929,G__58930));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58692 = (function (){var G__58931 = ctx;
var G__58932 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58931,G__58932) : sci.impl.interpreter.interpret.call(null,G__58931,G__58932));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58693 = (function (){var G__58933 = ctx;
var G__58934 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58933,G__58934) : sci.impl.interpreter.interpret.call(null,G__58933,G__58934));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58694 = (function (){var G__58935 = ctx;
var G__58936 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58935,G__58936) : sci.impl.interpreter.interpret.call(null,G__58935,G__58936));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58695 = (function (){var G__58937 = ctx;
var G__58938 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58937,G__58938) : sci.impl.interpreter.interpret.call(null,G__58937,G__58938));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58696 = (function (){var G__58939 = ctx;
var G__58940 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58939,G__58940) : sci.impl.interpreter.interpret.call(null,G__58939,G__58940));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58697 = (function (){var G__58941 = ctx;
var G__58942 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58941,G__58942) : sci.impl.interpreter.interpret.call(null,G__58941,G__58942));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58698 = (function (){var G__58943 = ctx;
var G__58944 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58943,G__58944) : sci.impl.interpreter.interpret.call(null,G__58943,G__58944));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg58689,arg58690,arg58691,arg58692,arg58693,arg58694,arg58695,arg58696,arg58697,arg58698) : f.call(null,arg58689,arg58690,arg58691,arg58692,arg58693,arg58694,arg58695,arg58696,arg58697,arg58698));

break;
case (11):
var arg58699 = (function (){var G__58945 = ctx;
var G__58946 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58945,G__58946) : sci.impl.interpreter.interpret.call(null,G__58945,G__58946));
})();
var args__$1 = cljs.core.rest(args);
var arg58700 = (function (){var G__58947 = ctx;
var G__58948 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58947,G__58948) : sci.impl.interpreter.interpret.call(null,G__58947,G__58948));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58701 = (function (){var G__58949 = ctx;
var G__58950 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58949,G__58950) : sci.impl.interpreter.interpret.call(null,G__58949,G__58950));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58702 = (function (){var G__58951 = ctx;
var G__58952 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58951,G__58952) : sci.impl.interpreter.interpret.call(null,G__58951,G__58952));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58703 = (function (){var G__58953 = ctx;
var G__58954 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58953,G__58954) : sci.impl.interpreter.interpret.call(null,G__58953,G__58954));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58704 = (function (){var G__58955 = ctx;
var G__58956 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58955,G__58956) : sci.impl.interpreter.interpret.call(null,G__58955,G__58956));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58705 = (function (){var G__58957 = ctx;
var G__58958 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58957,G__58958) : sci.impl.interpreter.interpret.call(null,G__58957,G__58958));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58706 = (function (){var G__58959 = ctx;
var G__58960 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58959,G__58960) : sci.impl.interpreter.interpret.call(null,G__58959,G__58960));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58707 = (function (){var G__58961 = ctx;
var G__58962 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58961,G__58962) : sci.impl.interpreter.interpret.call(null,G__58961,G__58962));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58708 = (function (){var G__58963 = ctx;
var G__58964 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58963,G__58964) : sci.impl.interpreter.interpret.call(null,G__58963,G__58964));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58709 = (function (){var G__58965 = ctx;
var G__58966 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58965,G__58966) : sci.impl.interpreter.interpret.call(null,G__58965,G__58966));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg58699,arg58700,arg58701,arg58702,arg58703,arg58704,arg58705,arg58706,arg58707,arg58708,arg58709) : f.call(null,arg58699,arg58700,arg58701,arg58702,arg58703,arg58704,arg58705,arg58706,arg58707,arg58708,arg58709));

break;
case (12):
var arg58710 = (function (){var G__58967 = ctx;
var G__58968 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58967,G__58968) : sci.impl.interpreter.interpret.call(null,G__58967,G__58968));
})();
var args__$1 = cljs.core.rest(args);
var arg58711 = (function (){var G__58969 = ctx;
var G__58970 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58969,G__58970) : sci.impl.interpreter.interpret.call(null,G__58969,G__58970));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58712 = (function (){var G__58971 = ctx;
var G__58972 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58971,G__58972) : sci.impl.interpreter.interpret.call(null,G__58971,G__58972));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58713 = (function (){var G__58973 = ctx;
var G__58974 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58973,G__58974) : sci.impl.interpreter.interpret.call(null,G__58973,G__58974));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58714 = (function (){var G__58975 = ctx;
var G__58976 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58975,G__58976) : sci.impl.interpreter.interpret.call(null,G__58975,G__58976));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58715 = (function (){var G__58977 = ctx;
var G__58978 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58977,G__58978) : sci.impl.interpreter.interpret.call(null,G__58977,G__58978));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58716 = (function (){var G__58979 = ctx;
var G__58980 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58979,G__58980) : sci.impl.interpreter.interpret.call(null,G__58979,G__58980));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58717 = (function (){var G__58981 = ctx;
var G__58982 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58981,G__58982) : sci.impl.interpreter.interpret.call(null,G__58981,G__58982));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58718 = (function (){var G__58983 = ctx;
var G__58984 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58983,G__58984) : sci.impl.interpreter.interpret.call(null,G__58983,G__58984));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58719 = (function (){var G__58985 = ctx;
var G__58986 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58985,G__58986) : sci.impl.interpreter.interpret.call(null,G__58985,G__58986));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58720 = (function (){var G__58987 = ctx;
var G__58988 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58987,G__58988) : sci.impl.interpreter.interpret.call(null,G__58987,G__58988));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58721 = (function (){var G__58989 = ctx;
var G__58990 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58989,G__58990) : sci.impl.interpreter.interpret.call(null,G__58989,G__58990));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg58710,arg58711,arg58712,arg58713,arg58714,arg58715,arg58716,arg58717,arg58718,arg58719,arg58720,arg58721) : f.call(null,arg58710,arg58711,arg58712,arg58713,arg58714,arg58715,arg58716,arg58717,arg58718,arg58719,arg58720,arg58721));

break;
case (13):
var arg58722 = (function (){var G__58991 = ctx;
var G__58992 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58991,G__58992) : sci.impl.interpreter.interpret.call(null,G__58991,G__58992));
})();
var args__$1 = cljs.core.rest(args);
var arg58723 = (function (){var G__58993 = ctx;
var G__58994 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58993,G__58994) : sci.impl.interpreter.interpret.call(null,G__58993,G__58994));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58724 = (function (){var G__58995 = ctx;
var G__58996 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58995,G__58996) : sci.impl.interpreter.interpret.call(null,G__58995,G__58996));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58725 = (function (){var G__58997 = ctx;
var G__58998 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58997,G__58998) : sci.impl.interpreter.interpret.call(null,G__58997,G__58998));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58726 = (function (){var G__58999 = ctx;
var G__59000 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__58999,G__59000) : sci.impl.interpreter.interpret.call(null,G__58999,G__59000));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58727 = (function (){var G__59001 = ctx;
var G__59002 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59001,G__59002) : sci.impl.interpreter.interpret.call(null,G__59001,G__59002));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58728 = (function (){var G__59003 = ctx;
var G__59004 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59003,G__59004) : sci.impl.interpreter.interpret.call(null,G__59003,G__59004));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58729 = (function (){var G__59005 = ctx;
var G__59006 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59005,G__59006) : sci.impl.interpreter.interpret.call(null,G__59005,G__59006));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58730 = (function (){var G__59007 = ctx;
var G__59008 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59007,G__59008) : sci.impl.interpreter.interpret.call(null,G__59007,G__59008));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58731 = (function (){var G__59009 = ctx;
var G__59010 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59009,G__59010) : sci.impl.interpreter.interpret.call(null,G__59009,G__59010));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58732 = (function (){var G__59011 = ctx;
var G__59012 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59011,G__59012) : sci.impl.interpreter.interpret.call(null,G__59011,G__59012));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58733 = (function (){var G__59013 = ctx;
var G__59014 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59013,G__59014) : sci.impl.interpreter.interpret.call(null,G__59013,G__59014));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58734 = (function (){var G__59015 = ctx;
var G__59016 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59015,G__59016) : sci.impl.interpreter.interpret.call(null,G__59015,G__59016));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg58722,arg58723,arg58724,arg58725,arg58726,arg58727,arg58728,arg58729,arg58730,arg58731,arg58732,arg58733,arg58734) : f.call(null,arg58722,arg58723,arg58724,arg58725,arg58726,arg58727,arg58728,arg58729,arg58730,arg58731,arg58732,arg58733,arg58734));

break;
case (14):
var arg58735 = (function (){var G__59017 = ctx;
var G__59018 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59017,G__59018) : sci.impl.interpreter.interpret.call(null,G__59017,G__59018));
})();
var args__$1 = cljs.core.rest(args);
var arg58736 = (function (){var G__59019 = ctx;
var G__59020 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59019,G__59020) : sci.impl.interpreter.interpret.call(null,G__59019,G__59020));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58737 = (function (){var G__59021 = ctx;
var G__59022 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59021,G__59022) : sci.impl.interpreter.interpret.call(null,G__59021,G__59022));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58738 = (function (){var G__59023 = ctx;
var G__59024 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59023,G__59024) : sci.impl.interpreter.interpret.call(null,G__59023,G__59024));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58739 = (function (){var G__59025 = ctx;
var G__59026 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59025,G__59026) : sci.impl.interpreter.interpret.call(null,G__59025,G__59026));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58740 = (function (){var G__59027 = ctx;
var G__59028 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59027,G__59028) : sci.impl.interpreter.interpret.call(null,G__59027,G__59028));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58741 = (function (){var G__59029 = ctx;
var G__59030 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59029,G__59030) : sci.impl.interpreter.interpret.call(null,G__59029,G__59030));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58742 = (function (){var G__59031 = ctx;
var G__59032 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59031,G__59032) : sci.impl.interpreter.interpret.call(null,G__59031,G__59032));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58743 = (function (){var G__59033 = ctx;
var G__59034 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59033,G__59034) : sci.impl.interpreter.interpret.call(null,G__59033,G__59034));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58744 = (function (){var G__59035 = ctx;
var G__59036 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59035,G__59036) : sci.impl.interpreter.interpret.call(null,G__59035,G__59036));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58745 = (function (){var G__59037 = ctx;
var G__59038 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59037,G__59038) : sci.impl.interpreter.interpret.call(null,G__59037,G__59038));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58746 = (function (){var G__59039 = ctx;
var G__59040 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59039,G__59040) : sci.impl.interpreter.interpret.call(null,G__59039,G__59040));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58747 = (function (){var G__59041 = ctx;
var G__59042 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59041,G__59042) : sci.impl.interpreter.interpret.call(null,G__59041,G__59042));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg58748 = (function (){var G__59043 = ctx;
var G__59044 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59043,G__59044) : sci.impl.interpreter.interpret.call(null,G__59043,G__59044));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg58735,arg58736,arg58737,arg58738,arg58739,arg58740,arg58741,arg58742,arg58743,arg58744,arg58745,arg58746,arg58747,arg58748) : f.call(null,arg58735,arg58736,arg58737,arg58738,arg58739,arg58740,arg58741,arg58742,arg58743,arg58744,arg58745,arg58746,arg58747,arg58748));

break;
case (15):
var arg58749 = (function (){var G__59045 = ctx;
var G__59046 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59045,G__59046) : sci.impl.interpreter.interpret.call(null,G__59045,G__59046));
})();
var args__$1 = cljs.core.rest(args);
var arg58750 = (function (){var G__59047 = ctx;
var G__59048 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59047,G__59048) : sci.impl.interpreter.interpret.call(null,G__59047,G__59048));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58751 = (function (){var G__59049 = ctx;
var G__59050 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59049,G__59050) : sci.impl.interpreter.interpret.call(null,G__59049,G__59050));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58752 = (function (){var G__59051 = ctx;
var G__59052 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59051,G__59052) : sci.impl.interpreter.interpret.call(null,G__59051,G__59052));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58753 = (function (){var G__59053 = ctx;
var G__59054 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59053,G__59054) : sci.impl.interpreter.interpret.call(null,G__59053,G__59054));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58754 = (function (){var G__59055 = ctx;
var G__59056 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59055,G__59056) : sci.impl.interpreter.interpret.call(null,G__59055,G__59056));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58755 = (function (){var G__59057 = ctx;
var G__59058 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59057,G__59058) : sci.impl.interpreter.interpret.call(null,G__59057,G__59058));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58756 = (function (){var G__59059 = ctx;
var G__59060 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59059,G__59060) : sci.impl.interpreter.interpret.call(null,G__59059,G__59060));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58757 = (function (){var G__59061 = ctx;
var G__59062 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59061,G__59062) : sci.impl.interpreter.interpret.call(null,G__59061,G__59062));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58758 = (function (){var G__59063 = ctx;
var G__59064 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59063,G__59064) : sci.impl.interpreter.interpret.call(null,G__59063,G__59064));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58759 = (function (){var G__59065 = ctx;
var G__59066 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59065,G__59066) : sci.impl.interpreter.interpret.call(null,G__59065,G__59066));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58760 = (function (){var G__59067 = ctx;
var G__59068 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59067,G__59068) : sci.impl.interpreter.interpret.call(null,G__59067,G__59068));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58761 = (function (){var G__59069 = ctx;
var G__59070 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59069,G__59070) : sci.impl.interpreter.interpret.call(null,G__59069,G__59070));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg58762 = (function (){var G__59071 = ctx;
var G__59072 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59071,G__59072) : sci.impl.interpreter.interpret.call(null,G__59071,G__59072));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg58763 = (function (){var G__59073 = ctx;
var G__59074 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59073,G__59074) : sci.impl.interpreter.interpret.call(null,G__59073,G__59074));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg58749,arg58750,arg58751,arg58752,arg58753,arg58754,arg58755,arg58756,arg58757,arg58758,arg58759,arg58760,arg58761,arg58762,arg58763) : f.call(null,arg58749,arg58750,arg58751,arg58752,arg58753,arg58754,arg58755,arg58756,arg58757,arg58758,arg58759,arg58760,arg58761,arg58762,arg58763));

break;
case (16):
var arg58764 = (function (){var G__59075 = ctx;
var G__59076 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59075,G__59076) : sci.impl.interpreter.interpret.call(null,G__59075,G__59076));
})();
var args__$1 = cljs.core.rest(args);
var arg58765 = (function (){var G__59077 = ctx;
var G__59078 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59077,G__59078) : sci.impl.interpreter.interpret.call(null,G__59077,G__59078));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58766 = (function (){var G__59079 = ctx;
var G__59080 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59079,G__59080) : sci.impl.interpreter.interpret.call(null,G__59079,G__59080));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58767 = (function (){var G__59081 = ctx;
var G__59082 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59081,G__59082) : sci.impl.interpreter.interpret.call(null,G__59081,G__59082));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58768 = (function (){var G__59083 = ctx;
var G__59084 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59083,G__59084) : sci.impl.interpreter.interpret.call(null,G__59083,G__59084));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58769 = (function (){var G__59085 = ctx;
var G__59086 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59085,G__59086) : sci.impl.interpreter.interpret.call(null,G__59085,G__59086));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58770 = (function (){var G__59087 = ctx;
var G__59088 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59087,G__59088) : sci.impl.interpreter.interpret.call(null,G__59087,G__59088));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58771 = (function (){var G__59089 = ctx;
var G__59090 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59089,G__59090) : sci.impl.interpreter.interpret.call(null,G__59089,G__59090));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58772 = (function (){var G__59091 = ctx;
var G__59092 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59091,G__59092) : sci.impl.interpreter.interpret.call(null,G__59091,G__59092));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58773 = (function (){var G__59093 = ctx;
var G__59094 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59093,G__59094) : sci.impl.interpreter.interpret.call(null,G__59093,G__59094));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58774 = (function (){var G__59095 = ctx;
var G__59096 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59095,G__59096) : sci.impl.interpreter.interpret.call(null,G__59095,G__59096));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58775 = (function (){var G__59097 = ctx;
var G__59098 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59097,G__59098) : sci.impl.interpreter.interpret.call(null,G__59097,G__59098));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58776 = (function (){var G__59099 = ctx;
var G__59100 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59099,G__59100) : sci.impl.interpreter.interpret.call(null,G__59099,G__59100));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg58777 = (function (){var G__59101 = ctx;
var G__59102 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59101,G__59102) : sci.impl.interpreter.interpret.call(null,G__59101,G__59102));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg58778 = (function (){var G__59103 = ctx;
var G__59104 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59103,G__59104) : sci.impl.interpreter.interpret.call(null,G__59103,G__59104));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg58779 = (function (){var G__59105 = ctx;
var G__59106 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59105,G__59106) : sci.impl.interpreter.interpret.call(null,G__59105,G__59106));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg58764,arg58765,arg58766,arg58767,arg58768,arg58769,arg58770,arg58771,arg58772,arg58773,arg58774,arg58775,arg58776,arg58777,arg58778,arg58779) : f.call(null,arg58764,arg58765,arg58766,arg58767,arg58768,arg58769,arg58770,arg58771,arg58772,arg58773,arg58774,arg58775,arg58776,arg58777,arg58778,arg58779));

break;
case (17):
var arg58780 = (function (){var G__59107 = ctx;
var G__59108 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59107,G__59108) : sci.impl.interpreter.interpret.call(null,G__59107,G__59108));
})();
var args__$1 = cljs.core.rest(args);
var arg58781 = (function (){var G__59109 = ctx;
var G__59110 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59109,G__59110) : sci.impl.interpreter.interpret.call(null,G__59109,G__59110));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58782 = (function (){var G__59111 = ctx;
var G__59112 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59111,G__59112) : sci.impl.interpreter.interpret.call(null,G__59111,G__59112));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58783 = (function (){var G__59113 = ctx;
var G__59114 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59113,G__59114) : sci.impl.interpreter.interpret.call(null,G__59113,G__59114));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58784 = (function (){var G__59115 = ctx;
var G__59116 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59115,G__59116) : sci.impl.interpreter.interpret.call(null,G__59115,G__59116));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58785 = (function (){var G__59117 = ctx;
var G__59118 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59117,G__59118) : sci.impl.interpreter.interpret.call(null,G__59117,G__59118));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58786 = (function (){var G__59119 = ctx;
var G__59120 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59119,G__59120) : sci.impl.interpreter.interpret.call(null,G__59119,G__59120));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58787 = (function (){var G__59121 = ctx;
var G__59122 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59121,G__59122) : sci.impl.interpreter.interpret.call(null,G__59121,G__59122));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58788 = (function (){var G__59123 = ctx;
var G__59124 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59123,G__59124) : sci.impl.interpreter.interpret.call(null,G__59123,G__59124));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58789 = (function (){var G__59125 = ctx;
var G__59126 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59125,G__59126) : sci.impl.interpreter.interpret.call(null,G__59125,G__59126));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58790 = (function (){var G__59127 = ctx;
var G__59128 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59127,G__59128) : sci.impl.interpreter.interpret.call(null,G__59127,G__59128));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58791 = (function (){var G__59129 = ctx;
var G__59130 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59129,G__59130) : sci.impl.interpreter.interpret.call(null,G__59129,G__59130));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58792 = (function (){var G__59131 = ctx;
var G__59132 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59131,G__59132) : sci.impl.interpreter.interpret.call(null,G__59131,G__59132));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg58793 = (function (){var G__59133 = ctx;
var G__59134 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59133,G__59134) : sci.impl.interpreter.interpret.call(null,G__59133,G__59134));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg58794 = (function (){var G__59135 = ctx;
var G__59136 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59135,G__59136) : sci.impl.interpreter.interpret.call(null,G__59135,G__59136));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg58795 = (function (){var G__59137 = ctx;
var G__59138 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59137,G__59138) : sci.impl.interpreter.interpret.call(null,G__59137,G__59138));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg58796 = (function (){var G__59139 = ctx;
var G__59140 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59139,G__59140) : sci.impl.interpreter.interpret.call(null,G__59139,G__59140));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg58780,arg58781,arg58782,arg58783,arg58784,arg58785,arg58786,arg58787,arg58788,arg58789,arg58790,arg58791,arg58792,arg58793,arg58794,arg58795,arg58796) : f.call(null,arg58780,arg58781,arg58782,arg58783,arg58784,arg58785,arg58786,arg58787,arg58788,arg58789,arg58790,arg58791,arg58792,arg58793,arg58794,arg58795,arg58796));

break;
case (18):
var arg58797 = (function (){var G__59141 = ctx;
var G__59142 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59141,G__59142) : sci.impl.interpreter.interpret.call(null,G__59141,G__59142));
})();
var args__$1 = cljs.core.rest(args);
var arg58798 = (function (){var G__59143 = ctx;
var G__59144 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59143,G__59144) : sci.impl.interpreter.interpret.call(null,G__59143,G__59144));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58799 = (function (){var G__59145 = ctx;
var G__59146 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59145,G__59146) : sci.impl.interpreter.interpret.call(null,G__59145,G__59146));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58800 = (function (){var G__59147 = ctx;
var G__59148 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59147,G__59148) : sci.impl.interpreter.interpret.call(null,G__59147,G__59148));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58801 = (function (){var G__59149 = ctx;
var G__59150 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59149,G__59150) : sci.impl.interpreter.interpret.call(null,G__59149,G__59150));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58802 = (function (){var G__59151 = ctx;
var G__59152 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59151,G__59152) : sci.impl.interpreter.interpret.call(null,G__59151,G__59152));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58803 = (function (){var G__59153 = ctx;
var G__59154 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59153,G__59154) : sci.impl.interpreter.interpret.call(null,G__59153,G__59154));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58804 = (function (){var G__59155 = ctx;
var G__59156 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59155,G__59156) : sci.impl.interpreter.interpret.call(null,G__59155,G__59156));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58805 = (function (){var G__59157 = ctx;
var G__59158 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59157,G__59158) : sci.impl.interpreter.interpret.call(null,G__59157,G__59158));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58806 = (function (){var G__59159 = ctx;
var G__59160 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59159,G__59160) : sci.impl.interpreter.interpret.call(null,G__59159,G__59160));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58807 = (function (){var G__59161 = ctx;
var G__59162 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59161,G__59162) : sci.impl.interpreter.interpret.call(null,G__59161,G__59162));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58808 = (function (){var G__59163 = ctx;
var G__59164 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59163,G__59164) : sci.impl.interpreter.interpret.call(null,G__59163,G__59164));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58809 = (function (){var G__59165 = ctx;
var G__59166 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59165,G__59166) : sci.impl.interpreter.interpret.call(null,G__59165,G__59166));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg58810 = (function (){var G__59167 = ctx;
var G__59168 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59167,G__59168) : sci.impl.interpreter.interpret.call(null,G__59167,G__59168));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg58811 = (function (){var G__59169 = ctx;
var G__59170 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59169,G__59170) : sci.impl.interpreter.interpret.call(null,G__59169,G__59170));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg58812 = (function (){var G__59171 = ctx;
var G__59172 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59171,G__59172) : sci.impl.interpreter.interpret.call(null,G__59171,G__59172));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg58813 = (function (){var G__59173 = ctx;
var G__59174 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59173,G__59174) : sci.impl.interpreter.interpret.call(null,G__59173,G__59174));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg58814 = (function (){var G__59175 = ctx;
var G__59176 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59175,G__59176) : sci.impl.interpreter.interpret.call(null,G__59175,G__59176));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg58797,arg58798,arg58799,arg58800,arg58801,arg58802,arg58803,arg58804,arg58805,arg58806,arg58807,arg58808,arg58809,arg58810,arg58811,arg58812,arg58813,arg58814) : f.call(null,arg58797,arg58798,arg58799,arg58800,arg58801,arg58802,arg58803,arg58804,arg58805,arg58806,arg58807,arg58808,arg58809,arg58810,arg58811,arg58812,arg58813,arg58814));

break;
case (19):
var arg58815 = (function (){var G__59177 = ctx;
var G__59178 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59177,G__59178) : sci.impl.interpreter.interpret.call(null,G__59177,G__59178));
})();
var args__$1 = cljs.core.rest(args);
var arg58816 = (function (){var G__59179 = ctx;
var G__59180 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59179,G__59180) : sci.impl.interpreter.interpret.call(null,G__59179,G__59180));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg58817 = (function (){var G__59181 = ctx;
var G__59182 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59181,G__59182) : sci.impl.interpreter.interpret.call(null,G__59181,G__59182));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg58818 = (function (){var G__59183 = ctx;
var G__59184 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59183,G__59184) : sci.impl.interpreter.interpret.call(null,G__59183,G__59184));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg58819 = (function (){var G__59185 = ctx;
var G__59186 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59185,G__59186) : sci.impl.interpreter.interpret.call(null,G__59185,G__59186));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg58820 = (function (){var G__59187 = ctx;
var G__59188 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59187,G__59188) : sci.impl.interpreter.interpret.call(null,G__59187,G__59188));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg58821 = (function (){var G__59189 = ctx;
var G__59190 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59189,G__59190) : sci.impl.interpreter.interpret.call(null,G__59189,G__59190));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg58822 = (function (){var G__59191 = ctx;
var G__59192 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59191,G__59192) : sci.impl.interpreter.interpret.call(null,G__59191,G__59192));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg58823 = (function (){var G__59193 = ctx;
var G__59194 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59193,G__59194) : sci.impl.interpreter.interpret.call(null,G__59193,G__59194));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg58824 = (function (){var G__59195 = ctx;
var G__59196 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59195,G__59196) : sci.impl.interpreter.interpret.call(null,G__59195,G__59196));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg58825 = (function (){var G__59197 = ctx;
var G__59198 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59197,G__59198) : sci.impl.interpreter.interpret.call(null,G__59197,G__59198));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg58826 = (function (){var G__59199 = ctx;
var G__59200 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59199,G__59200) : sci.impl.interpreter.interpret.call(null,G__59199,G__59200));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg58827 = (function (){var G__59201 = ctx;
var G__59202 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59201,G__59202) : sci.impl.interpreter.interpret.call(null,G__59201,G__59202));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg58828 = (function (){var G__59203 = ctx;
var G__59204 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59203,G__59204) : sci.impl.interpreter.interpret.call(null,G__59203,G__59204));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg58829 = (function (){var G__59205 = ctx;
var G__59206 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59205,G__59206) : sci.impl.interpreter.interpret.call(null,G__59205,G__59206));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg58830 = (function (){var G__59207 = ctx;
var G__59208 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59207,G__59208) : sci.impl.interpreter.interpret.call(null,G__59207,G__59208));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg58831 = (function (){var G__59209 = ctx;
var G__59210 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59209,G__59210) : sci.impl.interpreter.interpret.call(null,G__59209,G__59210));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg58832 = (function (){var G__59211 = ctx;
var G__59212 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59211,G__59212) : sci.impl.interpreter.interpret.call(null,G__59211,G__59212));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg58833 = (function (){var G__59213 = ctx;
var G__59214 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59213,G__59214) : sci.impl.interpreter.interpret.call(null,G__59213,G__59214));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg58815,arg58816,arg58817,arg58818,arg58819,arg58820,arg58821,arg58822,arg58823,arg58824,arg58825,arg58826,arg58827,arg58828,arg58829,arg58830,arg58831,arg58832,arg58833) : f.call(null,arg58815,arg58816,arg58817,arg58818,arg58819,arg58820,arg58821,arg58822,arg58823,arg58824,arg58825,arg58826,arg58827,arg58828,arg58829,arg58830,arg58831,arg58832,arg58833));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__59215 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__59215)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__59215)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__59215)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__59215)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__59215)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__59215)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__59216 = ctx;
var G__59217 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59216,G__59217) : sci.impl.interpreter.interpret.call(null,G__59216,G__59217));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__59215)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__59215)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__59215)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__59215)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__59215)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__59215)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__59215)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__59215)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__59215)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__59218 = ctx;
var G__59219 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59218,G__59219) : sci.impl.interpreter.interpret.call(null,G__59218,G__59219));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__59215)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__59215)){
return (new cljs.core.LazySeq(null,(function (){var G__59220 = ctx;
var G__59221 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59220,G__59221) : sci.impl.interpreter.interpret.call(null,G__59220,G__59221));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__59215)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__59215)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__59215)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__59215)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59215)].join('')));

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
}catch (e59222){if((e59222 instanceof Error)){
var e = e59222;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e59222;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__59229 = op;
var G__59229__$1 = (((G__59229 instanceof cljs.core.Keyword))?G__59229.fqn:null);
switch (G__59229__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59226_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59226_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59226_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59227_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59227_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59227_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59228_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59228_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59228_SHARP_));
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
var G__59276 = cljs.core.rest(exprs);
var G__59277 = (function (){var G__59232 = ctx;
var G__59233 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__59232,G__59233) : sci.impl.interpreter.eval_form.call(null,G__59232,G__59233));
})();
exprs = G__59276;
ret = G__59277;
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
var G__59278 = ret__$1;
ret = G__59278;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__59235 = arguments.length;
switch (G__59235) {
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
