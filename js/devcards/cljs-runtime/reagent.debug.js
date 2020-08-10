goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31128__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31129__i = 0, G__31129__a = new Array(arguments.length -  0);
while (G__31129__i < G__31129__a.length) {G__31129__a[G__31129__i] = arguments[G__31129__i + 0]; ++G__31129__i;}
  args = new cljs.core.IndexedSeq(G__31129__a,0,null);
} 
return G__31128__delegate.call(this,args);};
G__31128.cljs$lang$maxFixedArity = 0;
G__31128.cljs$lang$applyTo = (function (arglist__31130){
var args = cljs.core.seq(arglist__31130);
return G__31128__delegate(args);
});
G__31128.cljs$core$IFn$_invoke$arity$variadic = G__31128__delegate;
return G__31128;
})()
);

(o.error = (function() { 
var G__31131__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31132__i = 0, G__31132__a = new Array(arguments.length -  0);
while (G__31132__i < G__31132__a.length) {G__31132__a[G__31132__i] = arguments[G__31132__i + 0]; ++G__31132__i;}
  args = new cljs.core.IndexedSeq(G__31132__a,0,null);
} 
return G__31131__delegate.call(this,args);};
G__31131.cljs$lang$maxFixedArity = 0;
G__31131.cljs$lang$applyTo = (function (arglist__31133){
var args = cljs.core.seq(arglist__31133);
return G__31131__delegate(args);
});
G__31131.cljs$core$IFn$_invoke$arity$variadic = G__31131__delegate;
return G__31131;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
