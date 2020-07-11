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
var G__60306 = xs;
args__$2 = G__60306;
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
var G__60307 = xs;
args__$2 = G__60307;
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
var args__4795__auto__ = [];
var len__4789__auto___60308 = arguments.length;
var i__4790__auto___60309 = (0);
while(true){
if((i__4790__auto___60309 < len__4789__auto___60308)){
args__4795__auto__.push((arguments[i__4790__auto___60309]));

var G__60310 = (i__4790__auto___60309 + (1));
i__4790__auto___60309 = G__60310;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
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
var G__60311 = ctx__$2;
var G__60312 = rest_let_bindings;
ctx__$1 = G__60311;
let_bindings__$1 = G__60312;
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
var G__60313 = nexprs;
exprs__$1 = G__60313;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq59528){
var G__59529 = cljs.core.first(seq59528);
var seq59528__$1 = cljs.core.next(seq59528);
var G__59530 = cljs.core.first(seq59528__$1);
var seq59528__$2 = cljs.core.next(seq59528__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59529,G__59530,seq59528__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__59532){
var vec__59534 = p__59532;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59534,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59534,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59534,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59534,(3),null);
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
var v = (cljs.core.truth_((function (){var G__59538 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__59539 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59538,G__59539) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59538,G__59539));
})())?(function (){var G__59540 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59540,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__59540;
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
var vec__59544 = libspec;
var seq__59545 = cljs.core.seq(vec__59544);
var first__59546 = cljs.core.first(seq__59545);
var seq__59545__$1 = cljs.core.next(seq__59545);
var lib_name = first__59546;
var opts = seq__59545__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__59550 = opts;
var vec__59553 = G__59550;
var seq__59554 = cljs.core.seq(vec__59553);
var first__59555 = cljs.core.first(seq__59554);
var seq__59554__$1 = cljs.core.next(seq__59554);
var opt_name = first__59555;
var first__59555__$1 = cljs.core.first(seq__59554__$1);
var seq__59554__$2 = cljs.core.next(seq__59554__$1);
var fst_opt = first__59555__$1;
var rst_opts = seq__59554__$2;
var ret__$1 = ret;
var G__59550__$1 = G__59550;
while(true){
var ret__$2 = ret__$1;
var vec__59561 = G__59550__$1;
var seq__59562 = cljs.core.seq(vec__59561);
var first__59563 = cljs.core.first(seq__59562);
var seq__59562__$1 = cljs.core.next(seq__59562);
var opt_name__$1 = first__59563;
var first__59563__$1 = cljs.core.first(seq__59562__$1);
var seq__59562__$2 = cljs.core.next(seq__59562__$1);
var fst_opt__$1 = first__59563__$1;
var rst_opts__$1 = seq__59562__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__59564 = opt_name__$1;
var G__59564__$1 = (((G__59564 instanceof cljs.core.Keyword))?G__59564.fqn:null);
switch (G__59564__$1) {
case "as":
var G__60315 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__60316 = rst_opts__$1;
ret__$1 = G__60315;
G__59550__$1 = G__60316;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__60317 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__60318 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__60317;
G__59550__$1 = G__60318;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__60319 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__60320 = rst_opts__$1;
ret__$1 = G__60319;
G__59550__$1 = G__60320;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59564__$1)].join('')));

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__59568){
var vec__59569 = p__59568;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59569,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4174__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4174__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__59572){
var map__59573 = p__59572;
var map__59573__$1 = (((((!((map__59573 == null))))?(((((map__59573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59573):map__59573);
var _parsed_libspec = map__59573__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59573__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59573__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59573__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59573__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59573__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4185__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__59577 = new cljs.core.Keyword(null,"all","all",892129742);
var G__59578 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59577,G__59578) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59577,G__59578));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_((include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : include_sym_QMARK_.call(null,sym)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59579 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59579,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59579,(1),null);
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
var map__59582 = sci.impl.interpreter.parse_libspec(libspec);
var map__59582__$1 = (((((!((map__59582 == null))))?(((((map__59582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59582):map__59582);
var parsed_libspec = map__59582__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59582__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59582__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
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
var temp__5733__auto____$2 = (function (){var G__59584 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__59584) : load_fn.call(null,G__59584));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__59585 = temp__5733__auto____$2;
var map__59585__$1 = (((((!((map__59585 == null))))?(((((map__59585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59585):map__59585);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59585__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59585__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__59591_60321 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__59592_60322 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__59591_60321,G__59592_60322) : sci.impl.interpreter.eval_string_STAR_.call(null,G__59591_60321,G__59592_60322));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e59590){if((e59590 instanceof Error)){
var e_60323 = e59590;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_60323;
} else {
throw e59590;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4185__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var args__4795__auto__ = [];
var len__4789__auto___60324 = arguments.length;
var i__4790__auto___60325 = (0);
while(true){
if((i__4790__auto___60325 < len__4789__auto___60324)){
args__4795__auto__.push((arguments[i__4790__auto___60325]));

var G__60326 = (i__4790__auto___60325 + (1));
i__4790__auto___60325 = G__60326;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__59605 = ctx;
var G__59606 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59605,G__59606) : sci.impl.interpreter.interpret.call(null,G__59605,G__59606));
})();
if((ret instanceof cljs.core.Symbol)){
var G__60327 = (function (){var G__59607 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59607,current_libspec);
} else {
return G__59607;
}
})();
var G__60328 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__60329 = cljs.core.next(args__$1);
libspecs = G__60327;
current_libspec = G__60328;
args__$1 = G__60329;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__60330 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__60331 = null;
var G__60332 = cljs.core.next(args__$1);
libspecs = G__60330;
current_libspec = G__60331;
args__$1 = G__60332;
continue;
} else {
var G__60333 = (function (){var G__59608 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59608,current_libspec);
} else {
return G__59608;
}
})();
var G__60334 = ret;
var G__60335 = cljs.core.next(args__$1);
libspecs = G__60333;
current_libspec = G__60334;
args__$1 = G__60335;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__59609 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59609,current_libspec);
} else {
return G__59609;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__59593_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__59593_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq59594){
var G__59595 = cljs.core.first(seq59594);
var seq59594__$1 = cljs.core.next(seq59594);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59595,seq59594__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60336 = arguments.length;
var i__4790__auto___60337 = (0);
while(true){
if((i__4790__auto___60337 < len__4789__auto___60336)){
args__4795__auto__.push((arguments[i__4790__auto___60337]));

var G__60338 = (i__4790__auto___60337 + (1));
i__4790__auto___60337 = G__60338;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq59610){
var G__59611 = cljs.core.first(seq59610);
var seq59610__$1 = cljs.core.next(seq59610);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59611,seq59610__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__59612){
var vec__59613 = p__59612;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59613,(0),null);
var map__59616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59613,(1),null);
var map__59616__$1 = (((((!((map__59616 == null))))?(((((map__59616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59616):map__59616);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59616__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59616__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59616__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59618 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59618,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59618,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__59621 = ctx;
var G__59622 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59621,G__59622) : sci.impl.interpreter.interpret.call(null,G__59621,G__59622));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__59623 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__59623__$1 = (((((!((map__59623 == null))))?(((((map__59623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59623):map__59623);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59623__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59623__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59623__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__59631 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__59632 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__59632);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__59631);
}}catch (e59625){if((e59625 instanceof Error)){
var e = e59625;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__59626 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__59627 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59626,G__59627) : sci.impl.interpreter.interpret.call(null,G__59626,G__59627));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59628 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59628,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59628,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e59625;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__59633){
var vec__59634 = p__59633;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59634,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59634,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59637_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59637_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59637_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__59640){
var vec__59641 = p__59640;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59641,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59641,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59641,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59638_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59638_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59638_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__59646,p__59647){
var map__59648 = p__59646;
var map__59648__$1 = (((((!((map__59648 == null))))?(((((map__59648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59648):map__59648);
var ctx = map__59648__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59648__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__59649 = p__59647;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59649,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59649,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59649,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59649,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4185__auto__ = tag_class;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59645_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__59645_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__59645_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__59657){
var vec__59658 = p__59657;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59658,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59658,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__59663){
var vec__59665 = p__59663;
var seq__59666 = cljs.core.seq(vec__59665);
var first__59667 = cljs.core.first(seq__59666);
var seq__59666__$1 = cljs.core.next(seq__59666);
var _ = first__59667;
var first__59667__$1 = cljs.core.first(seq__59666__$1);
var seq__59666__$2 = cljs.core.next(seq__59666__$1);
var ns_sym = first__59667__$1;
var exprs = seq__59666__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__59668 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59668,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59668,(1),null);
var G__59671_60339 = k;
var G__59671_60340__$1 = (((G__59671_60339 instanceof cljs.core.Keyword))?G__59671_60339.fqn:null);
switch (G__59671_60340__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__59671_60339,G__59671_60340__$1,vec__59668,k,v,ns_sym__$1,vec__59665,seq__59666,first__59667,seq__59666__$1,_,first__59667__$1,seq__59666__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__59671_60339,G__59671_60340__$1,vec__59668,k,v,ns_sym__$1,vec__59665,seq__59666,first__59667,seq__59666__$1,_,first__59667__$1,seq__59666__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59671_60340__$1)].join('')));

}

var G__60342 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__60342;
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
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__59676){
var vec__59677 = p__59676;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59677,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59677,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59677,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__59683 = exprs;
var vec__59684 = G__59683;
var seq__59685 = cljs.core.seq(vec__59684);
var first__59686 = cljs.core.first(seq__59685);
var seq__59685__$1 = cljs.core.next(seq__59685);
var expr = first__59686;
var exprs__$1 = seq__59685__$1;
var G__59683__$1 = G__59683;
while(true){
var vec__59687 = G__59683__$1;
var seq__59688 = cljs.core.seq(vec__59687);
var first__59689 = cljs.core.first(seq__59688);
var seq__59688__$1 = cljs.core.next(seq__59688);
var expr__$1 = first__59689;
var exprs__$2 = seq__59688__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e59690){if((e59690 instanceof Error)){
var e = e59690;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e59690;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__60343 = exprs__$3;
G__59683__$1 = G__60343;
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
var G__59898 = cljs.core.count(args);
switch (G__59898) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg59708 = (function (){var G__59899 = ctx;
var G__59900 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59899,G__59900) : sci.impl.interpreter.interpret.call(null,G__59899,G__59900));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg59708) : f.call(null,arg59708));

break;
case (2):
var arg59709 = (function (){var G__59901 = ctx;
var G__59902 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59901,G__59902) : sci.impl.interpreter.interpret.call(null,G__59901,G__59902));
})();
var args__$1 = cljs.core.rest(args);
var arg59710 = (function (){var G__59903 = ctx;
var G__59904 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59903,G__59904) : sci.impl.interpreter.interpret.call(null,G__59903,G__59904));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg59709,arg59710) : f.call(null,arg59709,arg59710));

break;
case (3):
var arg59711 = (function (){var G__59905 = ctx;
var G__59906 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59905,G__59906) : sci.impl.interpreter.interpret.call(null,G__59905,G__59906));
})();
var args__$1 = cljs.core.rest(args);
var arg59712 = (function (){var G__59907 = ctx;
var G__59908 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59907,G__59908) : sci.impl.interpreter.interpret.call(null,G__59907,G__59908));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59713 = (function (){var G__59909 = ctx;
var G__59910 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59909,G__59910) : sci.impl.interpreter.interpret.call(null,G__59909,G__59910));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg59711,arg59712,arg59713) : f.call(null,arg59711,arg59712,arg59713));

break;
case (4):
var arg59714 = (function (){var G__59911 = ctx;
var G__59912 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59911,G__59912) : sci.impl.interpreter.interpret.call(null,G__59911,G__59912));
})();
var args__$1 = cljs.core.rest(args);
var arg59715 = (function (){var G__59913 = ctx;
var G__59914 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59913,G__59914) : sci.impl.interpreter.interpret.call(null,G__59913,G__59914));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59716 = (function (){var G__59915 = ctx;
var G__59916 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59915,G__59916) : sci.impl.interpreter.interpret.call(null,G__59915,G__59916));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59717 = (function (){var G__59917 = ctx;
var G__59918 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59917,G__59918) : sci.impl.interpreter.interpret.call(null,G__59917,G__59918));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg59714,arg59715,arg59716,arg59717) : f.call(null,arg59714,arg59715,arg59716,arg59717));

break;
case (5):
var arg59718 = (function (){var G__59919 = ctx;
var G__59920 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59919,G__59920) : sci.impl.interpreter.interpret.call(null,G__59919,G__59920));
})();
var args__$1 = cljs.core.rest(args);
var arg59719 = (function (){var G__59921 = ctx;
var G__59922 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59921,G__59922) : sci.impl.interpreter.interpret.call(null,G__59921,G__59922));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59720 = (function (){var G__59923 = ctx;
var G__59924 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59923,G__59924) : sci.impl.interpreter.interpret.call(null,G__59923,G__59924));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59721 = (function (){var G__59925 = ctx;
var G__59926 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59925,G__59926) : sci.impl.interpreter.interpret.call(null,G__59925,G__59926));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59722 = (function (){var G__59927 = ctx;
var G__59928 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59927,G__59928) : sci.impl.interpreter.interpret.call(null,G__59927,G__59928));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg59718,arg59719,arg59720,arg59721,arg59722) : f.call(null,arg59718,arg59719,arg59720,arg59721,arg59722));

break;
case (6):
var arg59723 = (function (){var G__59929 = ctx;
var G__59930 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59929,G__59930) : sci.impl.interpreter.interpret.call(null,G__59929,G__59930));
})();
var args__$1 = cljs.core.rest(args);
var arg59724 = (function (){var G__59931 = ctx;
var G__59932 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59931,G__59932) : sci.impl.interpreter.interpret.call(null,G__59931,G__59932));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59725 = (function (){var G__59933 = ctx;
var G__59934 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59933,G__59934) : sci.impl.interpreter.interpret.call(null,G__59933,G__59934));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59726 = (function (){var G__59935 = ctx;
var G__59936 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59935,G__59936) : sci.impl.interpreter.interpret.call(null,G__59935,G__59936));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59727 = (function (){var G__59937 = ctx;
var G__59938 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59937,G__59938) : sci.impl.interpreter.interpret.call(null,G__59937,G__59938));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59728 = (function (){var G__59939 = ctx;
var G__59940 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59939,G__59940) : sci.impl.interpreter.interpret.call(null,G__59939,G__59940));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg59723,arg59724,arg59725,arg59726,arg59727,arg59728) : f.call(null,arg59723,arg59724,arg59725,arg59726,arg59727,arg59728));

break;
case (7):
var arg59729 = (function (){var G__59941 = ctx;
var G__59942 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59941,G__59942) : sci.impl.interpreter.interpret.call(null,G__59941,G__59942));
})();
var args__$1 = cljs.core.rest(args);
var arg59730 = (function (){var G__59943 = ctx;
var G__59944 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59943,G__59944) : sci.impl.interpreter.interpret.call(null,G__59943,G__59944));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59731 = (function (){var G__59945 = ctx;
var G__59946 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59945,G__59946) : sci.impl.interpreter.interpret.call(null,G__59945,G__59946));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59732 = (function (){var G__59947 = ctx;
var G__59948 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59947,G__59948) : sci.impl.interpreter.interpret.call(null,G__59947,G__59948));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59733 = (function (){var G__59949 = ctx;
var G__59950 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59949,G__59950) : sci.impl.interpreter.interpret.call(null,G__59949,G__59950));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59734 = (function (){var G__59951 = ctx;
var G__59952 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59951,G__59952) : sci.impl.interpreter.interpret.call(null,G__59951,G__59952));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59735 = (function (){var G__59953 = ctx;
var G__59954 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59953,G__59954) : sci.impl.interpreter.interpret.call(null,G__59953,G__59954));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg59729,arg59730,arg59731,arg59732,arg59733,arg59734,arg59735) : f.call(null,arg59729,arg59730,arg59731,arg59732,arg59733,arg59734,arg59735));

break;
case (8):
var arg59736 = (function (){var G__59955 = ctx;
var G__59956 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59955,G__59956) : sci.impl.interpreter.interpret.call(null,G__59955,G__59956));
})();
var args__$1 = cljs.core.rest(args);
var arg59737 = (function (){var G__59957 = ctx;
var G__59958 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59957,G__59958) : sci.impl.interpreter.interpret.call(null,G__59957,G__59958));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59738 = (function (){var G__59959 = ctx;
var G__59960 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59959,G__59960) : sci.impl.interpreter.interpret.call(null,G__59959,G__59960));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59739 = (function (){var G__59961 = ctx;
var G__59962 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59961,G__59962) : sci.impl.interpreter.interpret.call(null,G__59961,G__59962));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59740 = (function (){var G__59963 = ctx;
var G__59964 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59963,G__59964) : sci.impl.interpreter.interpret.call(null,G__59963,G__59964));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59741 = (function (){var G__59965 = ctx;
var G__59966 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59965,G__59966) : sci.impl.interpreter.interpret.call(null,G__59965,G__59966));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59742 = (function (){var G__59967 = ctx;
var G__59968 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59967,G__59968) : sci.impl.interpreter.interpret.call(null,G__59967,G__59968));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59743 = (function (){var G__59969 = ctx;
var G__59970 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59969,G__59970) : sci.impl.interpreter.interpret.call(null,G__59969,G__59970));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg59736,arg59737,arg59738,arg59739,arg59740,arg59741,arg59742,arg59743) : f.call(null,arg59736,arg59737,arg59738,arg59739,arg59740,arg59741,arg59742,arg59743));

break;
case (9):
var arg59744 = (function (){var G__59971 = ctx;
var G__59972 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59971,G__59972) : sci.impl.interpreter.interpret.call(null,G__59971,G__59972));
})();
var args__$1 = cljs.core.rest(args);
var arg59745 = (function (){var G__59973 = ctx;
var G__59974 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59973,G__59974) : sci.impl.interpreter.interpret.call(null,G__59973,G__59974));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59746 = (function (){var G__59975 = ctx;
var G__59976 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59975,G__59976) : sci.impl.interpreter.interpret.call(null,G__59975,G__59976));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59747 = (function (){var G__59977 = ctx;
var G__59978 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59977,G__59978) : sci.impl.interpreter.interpret.call(null,G__59977,G__59978));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59748 = (function (){var G__59979 = ctx;
var G__59980 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59979,G__59980) : sci.impl.interpreter.interpret.call(null,G__59979,G__59980));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59749 = (function (){var G__59981 = ctx;
var G__59982 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59981,G__59982) : sci.impl.interpreter.interpret.call(null,G__59981,G__59982));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59750 = (function (){var G__59983 = ctx;
var G__59984 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59983,G__59984) : sci.impl.interpreter.interpret.call(null,G__59983,G__59984));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59751 = (function (){var G__59985 = ctx;
var G__59986 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59985,G__59986) : sci.impl.interpreter.interpret.call(null,G__59985,G__59986));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59752 = (function (){var G__59987 = ctx;
var G__59988 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59987,G__59988) : sci.impl.interpreter.interpret.call(null,G__59987,G__59988));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg59744,arg59745,arg59746,arg59747,arg59748,arg59749,arg59750,arg59751,arg59752) : f.call(null,arg59744,arg59745,arg59746,arg59747,arg59748,arg59749,arg59750,arg59751,arg59752));

break;
case (10):
var arg59753 = (function (){var G__59989 = ctx;
var G__59990 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59989,G__59990) : sci.impl.interpreter.interpret.call(null,G__59989,G__59990));
})();
var args__$1 = cljs.core.rest(args);
var arg59754 = (function (){var G__59991 = ctx;
var G__59992 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59991,G__59992) : sci.impl.interpreter.interpret.call(null,G__59991,G__59992));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59755 = (function (){var G__59993 = ctx;
var G__59994 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59993,G__59994) : sci.impl.interpreter.interpret.call(null,G__59993,G__59994));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59756 = (function (){var G__59995 = ctx;
var G__59996 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59995,G__59996) : sci.impl.interpreter.interpret.call(null,G__59995,G__59996));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59757 = (function (){var G__59997 = ctx;
var G__59998 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59997,G__59998) : sci.impl.interpreter.interpret.call(null,G__59997,G__59998));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59758 = (function (){var G__59999 = ctx;
var G__60000 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__59999,G__60000) : sci.impl.interpreter.interpret.call(null,G__59999,G__60000));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59759 = (function (){var G__60001 = ctx;
var G__60002 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60001,G__60002) : sci.impl.interpreter.interpret.call(null,G__60001,G__60002));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59760 = (function (){var G__60003 = ctx;
var G__60004 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60003,G__60004) : sci.impl.interpreter.interpret.call(null,G__60003,G__60004));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59761 = (function (){var G__60005 = ctx;
var G__60006 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60005,G__60006) : sci.impl.interpreter.interpret.call(null,G__60005,G__60006));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59762 = (function (){var G__60007 = ctx;
var G__60008 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60007,G__60008) : sci.impl.interpreter.interpret.call(null,G__60007,G__60008));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg59753,arg59754,arg59755,arg59756,arg59757,arg59758,arg59759,arg59760,arg59761,arg59762) : f.call(null,arg59753,arg59754,arg59755,arg59756,arg59757,arg59758,arg59759,arg59760,arg59761,arg59762));

break;
case (11):
var arg59763 = (function (){var G__60009 = ctx;
var G__60010 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60009,G__60010) : sci.impl.interpreter.interpret.call(null,G__60009,G__60010));
})();
var args__$1 = cljs.core.rest(args);
var arg59764 = (function (){var G__60011 = ctx;
var G__60012 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60011,G__60012) : sci.impl.interpreter.interpret.call(null,G__60011,G__60012));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59765 = (function (){var G__60013 = ctx;
var G__60014 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60013,G__60014) : sci.impl.interpreter.interpret.call(null,G__60013,G__60014));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59766 = (function (){var G__60015 = ctx;
var G__60016 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60015,G__60016) : sci.impl.interpreter.interpret.call(null,G__60015,G__60016));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59767 = (function (){var G__60017 = ctx;
var G__60018 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60017,G__60018) : sci.impl.interpreter.interpret.call(null,G__60017,G__60018));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59768 = (function (){var G__60019 = ctx;
var G__60020 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60019,G__60020) : sci.impl.interpreter.interpret.call(null,G__60019,G__60020));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59769 = (function (){var G__60021 = ctx;
var G__60022 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60021,G__60022) : sci.impl.interpreter.interpret.call(null,G__60021,G__60022));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59770 = (function (){var G__60023 = ctx;
var G__60024 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60023,G__60024) : sci.impl.interpreter.interpret.call(null,G__60023,G__60024));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59771 = (function (){var G__60025 = ctx;
var G__60026 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60025,G__60026) : sci.impl.interpreter.interpret.call(null,G__60025,G__60026));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59772 = (function (){var G__60027 = ctx;
var G__60028 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60027,G__60028) : sci.impl.interpreter.interpret.call(null,G__60027,G__60028));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59773 = (function (){var G__60029 = ctx;
var G__60030 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60029,G__60030) : sci.impl.interpreter.interpret.call(null,G__60029,G__60030));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg59763,arg59764,arg59765,arg59766,arg59767,arg59768,arg59769,arg59770,arg59771,arg59772,arg59773) : f.call(null,arg59763,arg59764,arg59765,arg59766,arg59767,arg59768,arg59769,arg59770,arg59771,arg59772,arg59773));

break;
case (12):
var arg59774 = (function (){var G__60031 = ctx;
var G__60032 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60031,G__60032) : sci.impl.interpreter.interpret.call(null,G__60031,G__60032));
})();
var args__$1 = cljs.core.rest(args);
var arg59775 = (function (){var G__60033 = ctx;
var G__60034 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60033,G__60034) : sci.impl.interpreter.interpret.call(null,G__60033,G__60034));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59776 = (function (){var G__60035 = ctx;
var G__60036 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60035,G__60036) : sci.impl.interpreter.interpret.call(null,G__60035,G__60036));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59777 = (function (){var G__60037 = ctx;
var G__60038 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60037,G__60038) : sci.impl.interpreter.interpret.call(null,G__60037,G__60038));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59778 = (function (){var G__60039 = ctx;
var G__60040 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60039,G__60040) : sci.impl.interpreter.interpret.call(null,G__60039,G__60040));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59779 = (function (){var G__60041 = ctx;
var G__60042 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60041,G__60042) : sci.impl.interpreter.interpret.call(null,G__60041,G__60042));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59780 = (function (){var G__60043 = ctx;
var G__60044 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60043,G__60044) : sci.impl.interpreter.interpret.call(null,G__60043,G__60044));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59781 = (function (){var G__60045 = ctx;
var G__60046 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60045,G__60046) : sci.impl.interpreter.interpret.call(null,G__60045,G__60046));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59782 = (function (){var G__60047 = ctx;
var G__60048 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60047,G__60048) : sci.impl.interpreter.interpret.call(null,G__60047,G__60048));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59783 = (function (){var G__60049 = ctx;
var G__60050 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60049,G__60050) : sci.impl.interpreter.interpret.call(null,G__60049,G__60050));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59784 = (function (){var G__60051 = ctx;
var G__60052 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60051,G__60052) : sci.impl.interpreter.interpret.call(null,G__60051,G__60052));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59785 = (function (){var G__60053 = ctx;
var G__60054 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60053,G__60054) : sci.impl.interpreter.interpret.call(null,G__60053,G__60054));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg59774,arg59775,arg59776,arg59777,arg59778,arg59779,arg59780,arg59781,arg59782,arg59783,arg59784,arg59785) : f.call(null,arg59774,arg59775,arg59776,arg59777,arg59778,arg59779,arg59780,arg59781,arg59782,arg59783,arg59784,arg59785));

break;
case (13):
var arg59786 = (function (){var G__60055 = ctx;
var G__60056 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60055,G__60056) : sci.impl.interpreter.interpret.call(null,G__60055,G__60056));
})();
var args__$1 = cljs.core.rest(args);
var arg59787 = (function (){var G__60057 = ctx;
var G__60058 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60057,G__60058) : sci.impl.interpreter.interpret.call(null,G__60057,G__60058));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59788 = (function (){var G__60059 = ctx;
var G__60060 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60059,G__60060) : sci.impl.interpreter.interpret.call(null,G__60059,G__60060));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59789 = (function (){var G__60061 = ctx;
var G__60062 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60061,G__60062) : sci.impl.interpreter.interpret.call(null,G__60061,G__60062));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59790 = (function (){var G__60063 = ctx;
var G__60064 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60063,G__60064) : sci.impl.interpreter.interpret.call(null,G__60063,G__60064));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59791 = (function (){var G__60065 = ctx;
var G__60066 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60065,G__60066) : sci.impl.interpreter.interpret.call(null,G__60065,G__60066));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59792 = (function (){var G__60067 = ctx;
var G__60068 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60067,G__60068) : sci.impl.interpreter.interpret.call(null,G__60067,G__60068));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59793 = (function (){var G__60069 = ctx;
var G__60070 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60069,G__60070) : sci.impl.interpreter.interpret.call(null,G__60069,G__60070));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59794 = (function (){var G__60071 = ctx;
var G__60072 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60071,G__60072) : sci.impl.interpreter.interpret.call(null,G__60071,G__60072));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59795 = (function (){var G__60073 = ctx;
var G__60074 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60073,G__60074) : sci.impl.interpreter.interpret.call(null,G__60073,G__60074));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59796 = (function (){var G__60075 = ctx;
var G__60076 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60075,G__60076) : sci.impl.interpreter.interpret.call(null,G__60075,G__60076));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59797 = (function (){var G__60077 = ctx;
var G__60078 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60077,G__60078) : sci.impl.interpreter.interpret.call(null,G__60077,G__60078));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59798 = (function (){var G__60079 = ctx;
var G__60080 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60079,G__60080) : sci.impl.interpreter.interpret.call(null,G__60079,G__60080));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg59786,arg59787,arg59788,arg59789,arg59790,arg59791,arg59792,arg59793,arg59794,arg59795,arg59796,arg59797,arg59798) : f.call(null,arg59786,arg59787,arg59788,arg59789,arg59790,arg59791,arg59792,arg59793,arg59794,arg59795,arg59796,arg59797,arg59798));

break;
case (14):
var arg59799 = (function (){var G__60081 = ctx;
var G__60082 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60081,G__60082) : sci.impl.interpreter.interpret.call(null,G__60081,G__60082));
})();
var args__$1 = cljs.core.rest(args);
var arg59800 = (function (){var G__60083 = ctx;
var G__60084 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60083,G__60084) : sci.impl.interpreter.interpret.call(null,G__60083,G__60084));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59801 = (function (){var G__60085 = ctx;
var G__60086 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60085,G__60086) : sci.impl.interpreter.interpret.call(null,G__60085,G__60086));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59802 = (function (){var G__60087 = ctx;
var G__60088 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60087,G__60088) : sci.impl.interpreter.interpret.call(null,G__60087,G__60088));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59803 = (function (){var G__60089 = ctx;
var G__60090 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60089,G__60090) : sci.impl.interpreter.interpret.call(null,G__60089,G__60090));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59804 = (function (){var G__60091 = ctx;
var G__60092 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60091,G__60092) : sci.impl.interpreter.interpret.call(null,G__60091,G__60092));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59805 = (function (){var G__60093 = ctx;
var G__60094 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60093,G__60094) : sci.impl.interpreter.interpret.call(null,G__60093,G__60094));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59806 = (function (){var G__60095 = ctx;
var G__60096 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60095,G__60096) : sci.impl.interpreter.interpret.call(null,G__60095,G__60096));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59807 = (function (){var G__60097 = ctx;
var G__60098 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60097,G__60098) : sci.impl.interpreter.interpret.call(null,G__60097,G__60098));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59808 = (function (){var G__60099 = ctx;
var G__60100 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60099,G__60100) : sci.impl.interpreter.interpret.call(null,G__60099,G__60100));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59809 = (function (){var G__60101 = ctx;
var G__60102 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60101,G__60102) : sci.impl.interpreter.interpret.call(null,G__60101,G__60102));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59810 = (function (){var G__60103 = ctx;
var G__60104 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60103,G__60104) : sci.impl.interpreter.interpret.call(null,G__60103,G__60104));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59811 = (function (){var G__60105 = ctx;
var G__60106 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60105,G__60106) : sci.impl.interpreter.interpret.call(null,G__60105,G__60106));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59812 = (function (){var G__60107 = ctx;
var G__60108 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60107,G__60108) : sci.impl.interpreter.interpret.call(null,G__60107,G__60108));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg59799,arg59800,arg59801,arg59802,arg59803,arg59804,arg59805,arg59806,arg59807,arg59808,arg59809,arg59810,arg59811,arg59812) : f.call(null,arg59799,arg59800,arg59801,arg59802,arg59803,arg59804,arg59805,arg59806,arg59807,arg59808,arg59809,arg59810,arg59811,arg59812));

break;
case (15):
var arg59813 = (function (){var G__60109 = ctx;
var G__60110 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60109,G__60110) : sci.impl.interpreter.interpret.call(null,G__60109,G__60110));
})();
var args__$1 = cljs.core.rest(args);
var arg59814 = (function (){var G__60111 = ctx;
var G__60112 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60111,G__60112) : sci.impl.interpreter.interpret.call(null,G__60111,G__60112));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59815 = (function (){var G__60113 = ctx;
var G__60114 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60113,G__60114) : sci.impl.interpreter.interpret.call(null,G__60113,G__60114));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59816 = (function (){var G__60115 = ctx;
var G__60116 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60115,G__60116) : sci.impl.interpreter.interpret.call(null,G__60115,G__60116));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59817 = (function (){var G__60117 = ctx;
var G__60118 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60117,G__60118) : sci.impl.interpreter.interpret.call(null,G__60117,G__60118));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59818 = (function (){var G__60119 = ctx;
var G__60120 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60119,G__60120) : sci.impl.interpreter.interpret.call(null,G__60119,G__60120));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59819 = (function (){var G__60121 = ctx;
var G__60122 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60121,G__60122) : sci.impl.interpreter.interpret.call(null,G__60121,G__60122));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59820 = (function (){var G__60123 = ctx;
var G__60124 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60123,G__60124) : sci.impl.interpreter.interpret.call(null,G__60123,G__60124));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59821 = (function (){var G__60125 = ctx;
var G__60126 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60125,G__60126) : sci.impl.interpreter.interpret.call(null,G__60125,G__60126));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59822 = (function (){var G__60127 = ctx;
var G__60128 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60127,G__60128) : sci.impl.interpreter.interpret.call(null,G__60127,G__60128));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59823 = (function (){var G__60129 = ctx;
var G__60130 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60129,G__60130) : sci.impl.interpreter.interpret.call(null,G__60129,G__60130));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59824 = (function (){var G__60131 = ctx;
var G__60132 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60131,G__60132) : sci.impl.interpreter.interpret.call(null,G__60131,G__60132));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59825 = (function (){var G__60133 = ctx;
var G__60134 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60133,G__60134) : sci.impl.interpreter.interpret.call(null,G__60133,G__60134));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59826 = (function (){var G__60135 = ctx;
var G__60136 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60135,G__60136) : sci.impl.interpreter.interpret.call(null,G__60135,G__60136));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59827 = (function (){var G__60137 = ctx;
var G__60138 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60137,G__60138) : sci.impl.interpreter.interpret.call(null,G__60137,G__60138));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg59813,arg59814,arg59815,arg59816,arg59817,arg59818,arg59819,arg59820,arg59821,arg59822,arg59823,arg59824,arg59825,arg59826,arg59827) : f.call(null,arg59813,arg59814,arg59815,arg59816,arg59817,arg59818,arg59819,arg59820,arg59821,arg59822,arg59823,arg59824,arg59825,arg59826,arg59827));

break;
case (16):
var arg59828 = (function (){var G__60139 = ctx;
var G__60140 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60139,G__60140) : sci.impl.interpreter.interpret.call(null,G__60139,G__60140));
})();
var args__$1 = cljs.core.rest(args);
var arg59829 = (function (){var G__60141 = ctx;
var G__60142 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60141,G__60142) : sci.impl.interpreter.interpret.call(null,G__60141,G__60142));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59830 = (function (){var G__60143 = ctx;
var G__60144 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60143,G__60144) : sci.impl.interpreter.interpret.call(null,G__60143,G__60144));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59831 = (function (){var G__60145 = ctx;
var G__60146 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60145,G__60146) : sci.impl.interpreter.interpret.call(null,G__60145,G__60146));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59832 = (function (){var G__60147 = ctx;
var G__60148 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60147,G__60148) : sci.impl.interpreter.interpret.call(null,G__60147,G__60148));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59833 = (function (){var G__60149 = ctx;
var G__60150 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60149,G__60150) : sci.impl.interpreter.interpret.call(null,G__60149,G__60150));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59834 = (function (){var G__60151 = ctx;
var G__60152 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60151,G__60152) : sci.impl.interpreter.interpret.call(null,G__60151,G__60152));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59835 = (function (){var G__60153 = ctx;
var G__60154 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60153,G__60154) : sci.impl.interpreter.interpret.call(null,G__60153,G__60154));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59836 = (function (){var G__60155 = ctx;
var G__60156 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60155,G__60156) : sci.impl.interpreter.interpret.call(null,G__60155,G__60156));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59837 = (function (){var G__60157 = ctx;
var G__60158 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60157,G__60158) : sci.impl.interpreter.interpret.call(null,G__60157,G__60158));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59838 = (function (){var G__60159 = ctx;
var G__60160 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60159,G__60160) : sci.impl.interpreter.interpret.call(null,G__60159,G__60160));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59839 = (function (){var G__60161 = ctx;
var G__60162 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60161,G__60162) : sci.impl.interpreter.interpret.call(null,G__60161,G__60162));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59840 = (function (){var G__60163 = ctx;
var G__60164 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60163,G__60164) : sci.impl.interpreter.interpret.call(null,G__60163,G__60164));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59841 = (function (){var G__60165 = ctx;
var G__60166 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60165,G__60166) : sci.impl.interpreter.interpret.call(null,G__60165,G__60166));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59842 = (function (){var G__60167 = ctx;
var G__60168 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60167,G__60168) : sci.impl.interpreter.interpret.call(null,G__60167,G__60168));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59843 = (function (){var G__60169 = ctx;
var G__60170 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60169,G__60170) : sci.impl.interpreter.interpret.call(null,G__60169,G__60170));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg59828,arg59829,arg59830,arg59831,arg59832,arg59833,arg59834,arg59835,arg59836,arg59837,arg59838,arg59839,arg59840,arg59841,arg59842,arg59843) : f.call(null,arg59828,arg59829,arg59830,arg59831,arg59832,arg59833,arg59834,arg59835,arg59836,arg59837,arg59838,arg59839,arg59840,arg59841,arg59842,arg59843));

break;
case (17):
var arg59844 = (function (){var G__60171 = ctx;
var G__60172 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60171,G__60172) : sci.impl.interpreter.interpret.call(null,G__60171,G__60172));
})();
var args__$1 = cljs.core.rest(args);
var arg59845 = (function (){var G__60173 = ctx;
var G__60174 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60173,G__60174) : sci.impl.interpreter.interpret.call(null,G__60173,G__60174));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59846 = (function (){var G__60175 = ctx;
var G__60176 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60175,G__60176) : sci.impl.interpreter.interpret.call(null,G__60175,G__60176));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59847 = (function (){var G__60177 = ctx;
var G__60178 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60177,G__60178) : sci.impl.interpreter.interpret.call(null,G__60177,G__60178));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59848 = (function (){var G__60179 = ctx;
var G__60180 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60179,G__60180) : sci.impl.interpreter.interpret.call(null,G__60179,G__60180));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59849 = (function (){var G__60181 = ctx;
var G__60182 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60181,G__60182) : sci.impl.interpreter.interpret.call(null,G__60181,G__60182));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59850 = (function (){var G__60183 = ctx;
var G__60184 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60183,G__60184) : sci.impl.interpreter.interpret.call(null,G__60183,G__60184));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59851 = (function (){var G__60185 = ctx;
var G__60186 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60185,G__60186) : sci.impl.interpreter.interpret.call(null,G__60185,G__60186));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59852 = (function (){var G__60187 = ctx;
var G__60188 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60187,G__60188) : sci.impl.interpreter.interpret.call(null,G__60187,G__60188));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59853 = (function (){var G__60189 = ctx;
var G__60190 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60189,G__60190) : sci.impl.interpreter.interpret.call(null,G__60189,G__60190));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59854 = (function (){var G__60191 = ctx;
var G__60192 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60191,G__60192) : sci.impl.interpreter.interpret.call(null,G__60191,G__60192));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59855 = (function (){var G__60193 = ctx;
var G__60194 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60193,G__60194) : sci.impl.interpreter.interpret.call(null,G__60193,G__60194));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59856 = (function (){var G__60195 = ctx;
var G__60196 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60195,G__60196) : sci.impl.interpreter.interpret.call(null,G__60195,G__60196));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59857 = (function (){var G__60197 = ctx;
var G__60198 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60197,G__60198) : sci.impl.interpreter.interpret.call(null,G__60197,G__60198));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59858 = (function (){var G__60199 = ctx;
var G__60200 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60199,G__60200) : sci.impl.interpreter.interpret.call(null,G__60199,G__60200));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59859 = (function (){var G__60201 = ctx;
var G__60202 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60201,G__60202) : sci.impl.interpreter.interpret.call(null,G__60201,G__60202));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59860 = (function (){var G__60203 = ctx;
var G__60204 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60203,G__60204) : sci.impl.interpreter.interpret.call(null,G__60203,G__60204));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg59844,arg59845,arg59846,arg59847,arg59848,arg59849,arg59850,arg59851,arg59852,arg59853,arg59854,arg59855,arg59856,arg59857,arg59858,arg59859,arg59860) : f.call(null,arg59844,arg59845,arg59846,arg59847,arg59848,arg59849,arg59850,arg59851,arg59852,arg59853,arg59854,arg59855,arg59856,arg59857,arg59858,arg59859,arg59860));

break;
case (18):
var arg59861 = (function (){var G__60205 = ctx;
var G__60206 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60205,G__60206) : sci.impl.interpreter.interpret.call(null,G__60205,G__60206));
})();
var args__$1 = cljs.core.rest(args);
var arg59862 = (function (){var G__60207 = ctx;
var G__60208 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60207,G__60208) : sci.impl.interpreter.interpret.call(null,G__60207,G__60208));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59863 = (function (){var G__60209 = ctx;
var G__60210 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60209,G__60210) : sci.impl.interpreter.interpret.call(null,G__60209,G__60210));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59864 = (function (){var G__60211 = ctx;
var G__60212 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60211,G__60212) : sci.impl.interpreter.interpret.call(null,G__60211,G__60212));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59865 = (function (){var G__60213 = ctx;
var G__60214 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60213,G__60214) : sci.impl.interpreter.interpret.call(null,G__60213,G__60214));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59866 = (function (){var G__60215 = ctx;
var G__60216 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60215,G__60216) : sci.impl.interpreter.interpret.call(null,G__60215,G__60216));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59867 = (function (){var G__60217 = ctx;
var G__60218 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60217,G__60218) : sci.impl.interpreter.interpret.call(null,G__60217,G__60218));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59868 = (function (){var G__60219 = ctx;
var G__60220 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60219,G__60220) : sci.impl.interpreter.interpret.call(null,G__60219,G__60220));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59869 = (function (){var G__60221 = ctx;
var G__60222 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60221,G__60222) : sci.impl.interpreter.interpret.call(null,G__60221,G__60222));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59870 = (function (){var G__60223 = ctx;
var G__60224 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60223,G__60224) : sci.impl.interpreter.interpret.call(null,G__60223,G__60224));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59871 = (function (){var G__60225 = ctx;
var G__60226 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60225,G__60226) : sci.impl.interpreter.interpret.call(null,G__60225,G__60226));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59872 = (function (){var G__60227 = ctx;
var G__60228 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60227,G__60228) : sci.impl.interpreter.interpret.call(null,G__60227,G__60228));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59873 = (function (){var G__60229 = ctx;
var G__60230 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60229,G__60230) : sci.impl.interpreter.interpret.call(null,G__60229,G__60230));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59874 = (function (){var G__60231 = ctx;
var G__60232 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60231,G__60232) : sci.impl.interpreter.interpret.call(null,G__60231,G__60232));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59875 = (function (){var G__60233 = ctx;
var G__60234 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60233,G__60234) : sci.impl.interpreter.interpret.call(null,G__60233,G__60234));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59876 = (function (){var G__60235 = ctx;
var G__60236 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60235,G__60236) : sci.impl.interpreter.interpret.call(null,G__60235,G__60236));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59877 = (function (){var G__60237 = ctx;
var G__60238 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60237,G__60238) : sci.impl.interpreter.interpret.call(null,G__60237,G__60238));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59878 = (function (){var G__60239 = ctx;
var G__60240 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60239,G__60240) : sci.impl.interpreter.interpret.call(null,G__60239,G__60240));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg59861,arg59862,arg59863,arg59864,arg59865,arg59866,arg59867,arg59868,arg59869,arg59870,arg59871,arg59872,arg59873,arg59874,arg59875,arg59876,arg59877,arg59878) : f.call(null,arg59861,arg59862,arg59863,arg59864,arg59865,arg59866,arg59867,arg59868,arg59869,arg59870,arg59871,arg59872,arg59873,arg59874,arg59875,arg59876,arg59877,arg59878));

break;
case (19):
var arg59879 = (function (){var G__60241 = ctx;
var G__60242 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60241,G__60242) : sci.impl.interpreter.interpret.call(null,G__60241,G__60242));
})();
var args__$1 = cljs.core.rest(args);
var arg59880 = (function (){var G__60243 = ctx;
var G__60244 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60243,G__60244) : sci.impl.interpreter.interpret.call(null,G__60243,G__60244));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg59881 = (function (){var G__60245 = ctx;
var G__60246 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60245,G__60246) : sci.impl.interpreter.interpret.call(null,G__60245,G__60246));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg59882 = (function (){var G__60247 = ctx;
var G__60248 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60247,G__60248) : sci.impl.interpreter.interpret.call(null,G__60247,G__60248));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg59883 = (function (){var G__60249 = ctx;
var G__60250 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60249,G__60250) : sci.impl.interpreter.interpret.call(null,G__60249,G__60250));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg59884 = (function (){var G__60251 = ctx;
var G__60252 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60251,G__60252) : sci.impl.interpreter.interpret.call(null,G__60251,G__60252));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg59885 = (function (){var G__60253 = ctx;
var G__60254 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60253,G__60254) : sci.impl.interpreter.interpret.call(null,G__60253,G__60254));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg59886 = (function (){var G__60255 = ctx;
var G__60256 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60255,G__60256) : sci.impl.interpreter.interpret.call(null,G__60255,G__60256));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg59887 = (function (){var G__60257 = ctx;
var G__60258 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60257,G__60258) : sci.impl.interpreter.interpret.call(null,G__60257,G__60258));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg59888 = (function (){var G__60259 = ctx;
var G__60260 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60259,G__60260) : sci.impl.interpreter.interpret.call(null,G__60259,G__60260));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg59889 = (function (){var G__60261 = ctx;
var G__60262 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60261,G__60262) : sci.impl.interpreter.interpret.call(null,G__60261,G__60262));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg59890 = (function (){var G__60263 = ctx;
var G__60264 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60263,G__60264) : sci.impl.interpreter.interpret.call(null,G__60263,G__60264));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg59891 = (function (){var G__60265 = ctx;
var G__60266 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60265,G__60266) : sci.impl.interpreter.interpret.call(null,G__60265,G__60266));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg59892 = (function (){var G__60267 = ctx;
var G__60268 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60267,G__60268) : sci.impl.interpreter.interpret.call(null,G__60267,G__60268));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg59893 = (function (){var G__60269 = ctx;
var G__60270 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60269,G__60270) : sci.impl.interpreter.interpret.call(null,G__60269,G__60270));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg59894 = (function (){var G__60271 = ctx;
var G__60272 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60271,G__60272) : sci.impl.interpreter.interpret.call(null,G__60271,G__60272));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg59895 = (function (){var G__60273 = ctx;
var G__60274 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60273,G__60274) : sci.impl.interpreter.interpret.call(null,G__60273,G__60274));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg59896 = (function (){var G__60275 = ctx;
var G__60276 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60275,G__60276) : sci.impl.interpreter.interpret.call(null,G__60275,G__60276));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg59897 = (function (){var G__60277 = ctx;
var G__60278 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60277,G__60278) : sci.impl.interpreter.interpret.call(null,G__60277,G__60278));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg59879,arg59880,arg59881,arg59882,arg59883,arg59884,arg59885,arg59886,arg59887,arg59888,arg59889,arg59890,arg59891,arg59892,arg59893,arg59894,arg59895,arg59896,arg59897) : f.call(null,arg59879,arg59880,arg59881,arg59882,arg59883,arg59884,arg59885,arg59886,arg59887,arg59888,arg59889,arg59890,arg59891,arg59892,arg59893,arg59894,arg59895,arg59896,arg59897));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__60279 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__60279)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__60279)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__60279)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__60279)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__60279)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__60279)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__60280 = ctx;
var G__60281 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60280,G__60281) : sci.impl.interpreter.interpret.call(null,G__60280,G__60281));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__60279)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__60279)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__60279)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__60279)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__60279)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__60279)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__60279)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__60279)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__60279)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__60282 = ctx;
var G__60283 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60282,G__60283) : sci.impl.interpreter.interpret.call(null,G__60282,G__60283));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__60279)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__60279)){
return (new cljs.core.LazySeq(null,(function (){var G__60284 = ctx;
var G__60285 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60284,G__60285) : sci.impl.interpreter.interpret.call(null,G__60284,G__60285));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__60279)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__60279)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__60279)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__60279)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60279)].join('')));

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
if(cljs.core.truth_((function (){var G__60287 = op;
var G__60288 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60287,G__60288) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60287,G__60288));
})())){
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
}catch (e60286){if((e60286 instanceof Error)){
var e = e60286;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e60286;

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
var ret = ((cljs.core.not(op))?expr:(function (){var G__60295 = op;
var G__60295__$1 = (((G__60295 instanceof cljs.core.Keyword))?G__60295.fqn:null);
switch (G__60295__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60292_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60292_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60292_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60293_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60293_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60293_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60294_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60294_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60294_SHARP_));
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
var G__60346 = cljs.core.rest(exprs);
var G__60347 = (function (){var G__60298 = ctx;
var G__60299 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__60298,G__60299) : sci.impl.interpreter.eval_form.call(null,G__60298,G__60299));
})();
exprs = G__60346;
ret = G__60347;
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
if(cljs.core.truth_((function (){var G__60302 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__60303 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60302,G__60303) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60302,G__60303));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__60348 = ret__$1;
ret = G__60348;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__60305 = arguments.length;
switch (G__60305) {
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
