goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__25448 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25448) : stop_at_QMARK_.call(null,G__25448));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__25449 = stop_at_QMARK_;
var G__25450 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__25449,G__25450) : posh.lib.q_analyze.take_until.call(null,G__25449,G__25450));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__25452 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25452) : rest_at_QMARK_.call(null,G__25452));
}
})())){
return ls;
} else {
var G__25835 = rest_at_QMARK_;
var G__25836 = cljs.core.rest(ls);
rest_at_QMARK_ = G__25835;
ls = G__25836;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__25453 = split_at_QMARK_;
var G__25454 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__25453,G__25454) : posh.lib.q_analyze.split_list_at.call(null,G__25453,G__25454));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__25455 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__25455) : posh.lib.q_analyze.get_all_vars.call(null,G__25455));
})(),(function (){var G__25456 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__25456) : posh.lib.q_analyze.get_all_vars.call(null,G__25456));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__25457 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__25457) : posh.lib.q_analyze.get_all_vars.call(null,G__25457));
})(),cljs.core.first(query));
} else {
var G__25458 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__25458) : posh.lib.q_analyze.get_all_vars.call(null,G__25458));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4115__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4115__auto__;
}
})())){
var G__25460 = cljs.core.rest(eav);
var G__25461 = (n - (1));
var G__25462 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__25463 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__25460,G__25461,G__25462,G__25463) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__25460,G__25461,G__25462,G__25463));
} else {
var var$ = posh.lib.q_analyze.qvar_gen();
var G__25464 = cljs.core.rest(eav);
var G__25465 = (n - (1));
var G__25466 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__25467 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__25464,G__25465,G__25466,G__25467) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__25464,G__25465,G__25466,G__25467));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__25468 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__25468) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__25468));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__25470 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__25470) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__25470));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__25474 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25474) : posh.lib.q_analyze.get_eavs.call(null,G__25474));
})(),(function (){var G__25475 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25475) : posh.lib.q_analyze.get_eavs.call(null,G__25475));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__25478 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25478) : posh.lib.q_analyze.get_eavs.call(null,G__25478));
})(),(function (){var G__25480 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25480) : posh.lib.q_analyze.get_eavs.call(null,G__25480));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__25482 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25482) : posh.lib.q_analyze.get_eavs.call(null,G__25482));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_25492 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_25492)) && ((cljs.core.count(ocr_25492) === 2)))){
try{var ocr_25492_0__25501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25492,(0));
if(((cljs.core.vector_QMARK_(ocr_25492_0__25501)) && ((cljs.core.count(ocr_25492_0__25501) === 5)))){
try{var ocr_25492_0__25501_0__25503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25492_0__25501,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25492_0__25501_0__25503,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25492_0__25501,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25492_0__25501,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25492_0__25501,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25492,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__25513 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25513) : posh.lib.q_analyze.get_eavs.call(null,G__25513));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e25512){if((e25512 instanceof Error)){
var e__24545__auto__ = e25512;
if((e__24545__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto__;
}
} else {
throw e25512;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25511){if((e25511 instanceof Error)){
var e__24545__auto__ = e25511;
if((e__24545__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto__;
}
} else {
throw e25511;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25509){if((e25509 instanceof Error)){
var e__24545__auto__ = e25509;
if((e__24545__auto__ === cljs.core.match.backtrack)){
var G__25510 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25510) : posh.lib.q_analyze.get_eavs.call(null,G__25510));
} else {
throw e__24545__auto__;
}
} else {
throw e25509;

}
}} else {
var G__25514 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25514) : posh.lib.q_analyze.get_eavs.call(null,G__25514));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__25515){
var vec__25516 = p__25515;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25516,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25516,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25519_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__25519_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__25519_SHARP_);
} else {
return p1__25519_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25520 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__25520) : posh.lib.q_analyze.count_qvars.call(null,G__25520));
})(),(function (){var G__25521 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__25521) : posh.lib.q_analyze.count_qvars.call(null,G__25521));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__25522 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__25522) : posh.lib.q_analyze.count_qvars.call(null,G__25522));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4529__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__25523(s__25524){
return (new cljs.core.LazySeq(null,(function (){
var s__25524__$1 = s__25524;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25524__$1);
if(temp__5735__auto__){
var s__25524__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25524__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25524__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25526 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25525 = (0);
while(true){
if((i__25525 < size__4528__auto__)){
var r = cljs.core._nth(c__4527__auto__,i__25525);
cljs.core.chunk_append(b__25526,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__25864 = (i__25525 + (1));
i__25525 = G__25864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25526),posh$lib$q_analyze$fill_qvar_set_$_iter__25523(cljs.core.chunk_rest(s__25524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25526),null);
}
} else {
var r = cljs.core.first(s__25524__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__25523(cljs.core.rest(s__25524__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__25527 = cljs.core.first(seq1);
var G__25528 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25527,G__25528) : f.call(null,G__25527,G__25528));
})(),(function (){var G__25529 = f;
var G__25530 = cljs.core.rest(seq1);
var G__25531 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__25529,G__25530,G__25531) : posh.lib.q_analyze.seq_merge_with.call(null,G__25529,G__25530,G__25531));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__25534){
var vec__25535 = p__25534;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25535,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25535,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25535,(2),null);
var eav = vec__25535;
var vec__25538 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25538,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25538,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25538,(2),null);
var iter__4529__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__25541(s__25542){
return (new cljs.core.LazySeq(null,(function (){
var s__25542__$1 = s__25542;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25542__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__25542__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__25541_$_iter__25543(s__25544){
return (new cljs.core.LazySeq(null,((function (s__25542__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav){
return (function (){
var s__25544__$1 = s__25544;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__25544__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4525__auto__ = ((function (s__25544__$1,s__25542__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__25541_$_iter__25543_$_iter__25545(s__25546){
return (new cljs.core.LazySeq(null,((function (s__25544__$1,s__25542__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav){
return (function (){
var s__25546__$1 = s__25546;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__25546__$1);
if(temp__5735__auto____$2){
var s__25546__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__25546__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25546__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25548 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25547 = (0);
while(true){
if((i__25547 < size__4528__auto__)){
var vv = cljs.core._nth(c__4527__auto__,i__25547);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__25547,s__25546__$1,s__25544__$1,s__25542__$1,vv,c__4527__auto__,size__4528__auto__,b__25548,s__25546__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav){
return (function (p1__25532_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__25532_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__25547,s__25546__$1,s__25544__$1,s__25542__$1,vv,c__4527__auto__,size__4528__auto__,b__25548,s__25546__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__25547,s__25546__$1,s__25544__$1,s__25542__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__25548,s__25546__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav){
return (function (p__25549){
var vec__25550 = p__25549;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25550,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25550,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__25547,s__25546__$1,s__25544__$1,s__25542__$1,wildcard_count,vv,c__4527__auto__,size__4528__auto__,b__25548,s__25546__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__25547,s__25546__$1,s__25544__$1,s__25542__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__25548,s__25546__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav){
return (function (p1__25533_SHARP_){
if(cljs.core.truth_(p1__25533_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__25547,s__25546__$1,s__25544__$1,s__25542__$1,wildcard_count,exposed_qvars,vv,c__4527__auto__,size__4528__auto__,b__25548,s__25546__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__25548,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__25865 = (i__25547 + (1));
i__25547 = G__25865;
continue;
} else {
var G__25866 = (i__25547 + (1));
i__25547 = G__25866;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25548),posh$lib$q_analyze$pattern_from_eav__old_$_iter__25541_$_iter__25543_$_iter__25545(cljs.core.chunk_rest(s__25546__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25548),null);
}
} else {
var vv = cljs.core.first(s__25546__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__25546__$1,s__25544__$1,s__25542__$1,vv,s__25546__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav){
return (function (p1__25532_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__25532_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__25546__$1,s__25544__$1,s__25542__$1,vv,s__25546__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__25546__$1,s__25544__$1,s__25542__$1,wildcard_count,vv,s__25546__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav){
return (function (p__25553){
var vec__25554 = p__25553;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25554,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25554,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4115__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__25546__$1,s__25544__$1,s__25542__$1,wildcard_count,vv,s__25546__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__25546__$1,s__25544__$1,s__25542__$1,wildcard_count,exposed_qvars,vv,s__25546__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav){
return (function (p1__25533_SHARP_){
if(cljs.core.truth_(p1__25533_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__25546__$1,s__25544__$1,s__25542__$1,wildcard_count,exposed_qvars,vv,s__25546__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__25541_$_iter__25543_$_iter__25545(cljs.core.rest(s__25546__$2)));
} else {
var G__25868 = cljs.core.rest(s__25546__$2);
s__25546__$1 = G__25868;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__25544__$1,s__25542__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav))
,null,null));
});})(s__25544__$1,s__25542__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__25541_$_iter__25543(cljs.core.rest(s__25544__$1)));
} else {
var G__25869 = cljs.core.rest(s__25544__$1);
s__25544__$1 = G__25869;
continue;
}
} else {
return null;
}
break;
}
});})(s__25542__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav))
,null,null));
});})(s__25542__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25538,qe,qa,qv,vec__25535,e,a,v,eav))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__25541(cljs.core.rest(s__25542__$1)));
} else {
var G__25870 = cljs.core.rest(s__25542__$1);
s__25542__$1 = G__25870;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_25557 = cljs.core.vec(eav);
var ocr_25558 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_25557)) && ((cljs.core.count(ocr_25557) === 3)))){
try{var ocr_25557_0__25586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_0__25586,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25557_1__25587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_1__25587,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25557_2__25588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_2__25588,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25662){if((e25662 instanceof Error)){
var e__24545__auto__ = e25662;
if((e__24545__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_25558)) && ((cljs.core.count(ocr_25558) === 3)))){
try{var ocr_25558_2__25591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25591 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25664){if((e25664 instanceof Error)){
var e__24545__auto____$1 = e25664;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25591 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25665){if((e25665 instanceof Error)){
var e__24545__auto____$2 = e25665;
if((e__24545__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$2;
}
} else {
throw e25665;

}
}} else {
throw e__24545__auto____$1;
}
} else {
throw e25664;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25663){if((e25663 instanceof Error)){
var e__24545__auto____$1 = e25663;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$1;
}
} else {
throw e25663;

}
}} else {
throw e__24545__auto__;
}
} else {
throw e25662;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25657){if((e25657 instanceof Error)){
var e__24545__auto__ = e25657;
if((e__24545__auto__ === cljs.core.match.backtrack)){
try{var ocr_25557_2__25588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_2__25588,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_25558)) && ((cljs.core.count(ocr_25558) === 3)))){
try{var ocr_25558_1__25593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25593 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25660){if((e25660 instanceof Error)){
var e__24545__auto____$1 = e25660;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25558_1__25593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25593 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25661){if((e25661 instanceof Error)){
var e__24545__auto____$2 = e25661;
if((e__24545__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$2;
}
} else {
throw e25661;

}
}} else {
throw e__24545__auto____$1;
}
} else {
throw e25660;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25659){if((e25659 instanceof Error)){
var e__24545__auto____$1 = e25659;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$1;
}
} else {
throw e25659;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25658){if((e25658 instanceof Error)){
var e__24545__auto____$1 = e25658;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$1;
}
} else {
throw e25658;

}
}} else {
throw e__24545__auto__;
}
} else {
throw e25657;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25599){if((e25599 instanceof Error)){
var e__24545__auto__ = e25599;
if((e__24545__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_25558)) && ((cljs.core.count(ocr_25558) === 3)))){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === false)){
try{var ocr_25557_1__25587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_1__25587,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25557_2__25588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_2__25588,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25656){if((e25656 instanceof Error)){
var e__24545__auto____$1 = e25656;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$1;
}
} else {
throw e25656;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25655){if((e25655 instanceof Error)){
var e__24545__auto____$1 = e25655;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$1;
}
} else {
throw e25655;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25601){if((e25601 instanceof Error)){
var e__24545__auto____$1 = e25601;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === true)){
try{var ocr_25557_2__25588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_2__25588,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25557_1__25587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_1__25587,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25652){if((e25652 instanceof Error)){
var e__24545__auto____$2 = e25652;
if((e__24545__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25653){if((e25653 instanceof Error)){
var e__24545__auto____$3 = e25653;
if((e__24545__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25654){if((e25654 instanceof Error)){
var e__24545__auto____$4 = e25654;
if((e__24545__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$4;
}
} else {
throw e25654;

}
}} else {
throw e__24545__auto____$3;
}
} else {
throw e25653;

}
}} else {
throw e__24545__auto____$2;
}
} else {
throw e25652;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25651){if((e25651 instanceof Error)){
var e__24545__auto____$2 = e25651;
if((e__24545__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$2;
}
} else {
throw e25651;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25602){if((e25602 instanceof Error)){
var e__24545__auto____$2 = e25602;
if((e__24545__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === false)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === true)){
try{var ocr_25557_2__25588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_2__25588,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25650){if((e25650 instanceof Error)){
var e__24545__auto____$3 = e25650;
if((e__24545__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$3;
}
} else {
throw e25650;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25647){if((e25647 instanceof Error)){
var e__24545__auto____$3 = e25647;
if((e__24545__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === false)){
try{var ocr_25557_2__25588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_2__25588,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25649){if((e25649 instanceof Error)){
var e__24545__auto____$4 = e25649;
if((e__24545__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$4;
}
} else {
throw e25649;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25648){if((e25648 instanceof Error)){
var e__24545__auto____$4 = e25648;
if((e__24545__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$4;
}
} else {
throw e25648;

}
}} else {
throw e__24545__auto____$3;
}
} else {
throw e25647;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25603){if((e25603 instanceof Error)){
var e__24545__auto____$3 = e25603;
if((e__24545__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25597 === true)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === true)){
try{var ocr_25557_1__25587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_1__25587,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25646){if((e25646 instanceof Error)){
var e__24545__auto____$4 = e25646;
if((e__24545__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$4;
}
} else {
throw e25646;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25645){if((e25645 instanceof Error)){
var e__24545__auto____$4 = e25645;
if((e__24545__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$4;
}
} else {
throw e25645;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25604){if((e25604 instanceof Error)){
var e__24545__auto____$4 = e25604;
if((e__24545__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25597 === false)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === true)){
try{var ocr_25557_1__25587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_1__25587,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25644){if((e25644 instanceof Error)){
var e__24545__auto____$5 = e25644;
if((e__24545__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$5;
}
} else {
throw e25644;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25643){if((e25643 instanceof Error)){
var e__24545__auto____$5 = e25643;
if((e__24545__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$5;
}
} else {
throw e25643;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25605){if((e25605 instanceof Error)){
var e__24545__auto____$5 = e25605;
if((e__24545__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25597 === true)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === false)){
try{var ocr_25557_1__25587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_1__25587,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25642){if((e25642 instanceof Error)){
var e__24545__auto____$6 = e25642;
if((e__24545__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$6;
}
} else {
throw e25642;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25641){if((e25641 instanceof Error)){
var e__24545__auto____$6 = e25641;
if((e__24545__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$6;
}
} else {
throw e25641;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25606){if((e25606 instanceof Error)){
var e__24545__auto____$6 = e25606;
if((e__24545__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25597 === false)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === false)){
try{var ocr_25557_1__25587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_1__25587,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25640){if((e25640 instanceof Error)){
var e__24545__auto____$7 = e25640;
if((e__24545__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$7;
}
} else {
throw e25640;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25639){if((e25639 instanceof Error)){
var e__24545__auto____$7 = e25639;
if((e__24545__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$7;
}
} else {
throw e25639;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25607){if((e25607 instanceof Error)){
var e__24545__auto____$7 = e25607;
if((e__24545__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25597 === true)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === true)){
try{var ocr_25557_0__25586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_0__25586,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25638){if((e25638 instanceof Error)){
var e__24545__auto____$8 = e25638;
if((e__24545__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$8;
}
} else {
throw e25638;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25637){if((e25637 instanceof Error)){
var e__24545__auto____$8 = e25637;
if((e__24545__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$8;
}
} else {
throw e25637;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25608){if((e25608 instanceof Error)){
var e__24545__auto____$8 = e25608;
if((e__24545__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25597 === false)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === true)){
try{var ocr_25557_0__25586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_0__25586,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25636){if((e25636 instanceof Error)){
var e__24545__auto____$9 = e25636;
if((e__24545__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$9;
}
} else {
throw e25636;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25635){if((e25635 instanceof Error)){
var e__24545__auto____$9 = e25635;
if((e__24545__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$9;
}
} else {
throw e25635;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25609){if((e25609 instanceof Error)){
var e__24545__auto____$9 = e25609;
if((e__24545__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25597 === true)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === false)){
try{var ocr_25557_0__25586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_0__25586,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25634){if((e25634 instanceof Error)){
var e__24545__auto____$10 = e25634;
if((e__24545__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$10;
}
} else {
throw e25634;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25633){if((e25633 instanceof Error)){
var e__24545__auto____$10 = e25633;
if((e__24545__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$10;
}
} else {
throw e25633;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25610){if((e25610 instanceof Error)){
var e__24545__auto____$10 = e25610;
if((e__24545__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25597 === false)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === false)){
try{var ocr_25557_0__25586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25557_0__25586,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25632){if((e25632 instanceof Error)){
var e__24545__auto____$11 = e25632;
if((e__24545__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$11;
}
} else {
throw e25632;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25631){if((e25631 instanceof Error)){
var e__24545__auto____$11 = e25631;
if((e__24545__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$11;
}
} else {
throw e25631;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25611){if((e25611 instanceof Error)){
var e__24545__auto____$11 = e25611;
if((e__24545__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25597 === true)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === true)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25630){if((e25630 instanceof Error)){
var e__24545__auto____$12 = e25630;
if((e__24545__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$12;
}
} else {
throw e25630;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25625){if((e25625 instanceof Error)){
var e__24545__auto____$12 = e25625;
if((e__24545__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === false)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25629){if((e25629 instanceof Error)){
var e__24545__auto____$13 = e25629;
if((e__24545__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$13;
}
} else {
throw e25629;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25626){if((e25626 instanceof Error)){
var e__24545__auto____$13 = e25626;
if((e__24545__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === true)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25628){if((e25628 instanceof Error)){
var e__24545__auto____$14 = e25628;
if((e__24545__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$14;
}
} else {
throw e25628;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25627){if((e25627 instanceof Error)){
var e__24545__auto____$14 = e25627;
if((e__24545__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$14;
}
} else {
throw e25627;

}
}} else {
throw e__24545__auto____$13;
}
} else {
throw e25626;

}
}} else {
throw e__24545__auto____$12;
}
} else {
throw e25625;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25612){if((e25612 instanceof Error)){
var e__24545__auto____$12 = e25612;
if((e__24545__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25597 === false)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === true)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25624){if((e25624 instanceof Error)){
var e__24545__auto____$13 = e25624;
if((e__24545__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$13;
}
} else {
throw e25624;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25623){if((e25623 instanceof Error)){
var e__24545__auto____$13 = e25623;
if((e__24545__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$13;
}
} else {
throw e25623;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25613){if((e25613 instanceof Error)){
var e__24545__auto____$13 = e25613;
if((e__24545__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25597 === true)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === false)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25622){if((e25622 instanceof Error)){
var e__24545__auto____$14 = e25622;
if((e__24545__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$14;
}
} else {
throw e25622;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25621){if((e25621 instanceof Error)){
var e__24545__auto____$14 = e25621;
if((e__24545__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$14;
}
} else {
throw e25621;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25614){if((e25614 instanceof Error)){
var e__24545__auto____$14 = e25614;
if((e__24545__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_25558_2__25597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(2));
if((ocr_25558_2__25597 === false)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === true)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25620){if((e25620 instanceof Error)){
var e__24545__auto____$15 = e25620;
if((e__24545__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$15;
}
} else {
throw e25620;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25616){if((e25616 instanceof Error)){
var e__24545__auto____$15 = e25616;
if((e__24545__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_25558_0__25595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(0));
if((ocr_25558_0__25595 === false)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25618){if((e25618 instanceof Error)){
var e__24545__auto____$16 = e25618;
if((e__24545__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_25558_1__25596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25558,(1));
if((ocr_25558_1__25596 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25557,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25619){if((e25619 instanceof Error)){
var e__24545__auto____$17 = e25619;
if((e__24545__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$17;
}
} else {
throw e25619;

}
}} else {
throw e__24545__auto____$16;
}
} else {
throw e25618;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25617){if((e25617 instanceof Error)){
var e__24545__auto____$16 = e25617;
if((e__24545__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$16;
}
} else {
throw e25617;

}
}} else {
throw e__24545__auto____$15;
}
} else {
throw e25616;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25615){if((e25615 instanceof Error)){
var e__24545__auto____$15 = e25615;
if((e__24545__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$15;
}
} else {
throw e25615;

}
}} else {
throw e__24545__auto____$14;
}
} else {
throw e25614;

}
}} else {
throw e__24545__auto____$13;
}
} else {
throw e25613;

}
}} else {
throw e__24545__auto____$12;
}
} else {
throw e25612;

}
}} else {
throw e__24545__auto____$11;
}
} else {
throw e25611;

}
}} else {
throw e__24545__auto____$10;
}
} else {
throw e25610;

}
}} else {
throw e__24545__auto____$9;
}
} else {
throw e25609;

}
}} else {
throw e__24545__auto____$8;
}
} else {
throw e25608;

}
}} else {
throw e__24545__auto____$7;
}
} else {
throw e25607;

}
}} else {
throw e__24545__auto____$6;
}
} else {
throw e25606;

}
}} else {
throw e__24545__auto____$5;
}
} else {
throw e25605;

}
}} else {
throw e__24545__auto____$4;
}
} else {
throw e25604;

}
}} else {
throw e__24545__auto____$3;
}
} else {
throw e25603;

}
}} else {
throw e__24545__auto____$2;
}
} else {
throw e25602;

}
}} else {
throw e__24545__auto____$1;
}
} else {
throw e25601;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25600){if((e25600 instanceof Error)){
var e__24545__auto____$1 = e25600;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$1;
}
} else {
throw e25600;

}
}} else {
throw e__24545__auto__;
}
} else {
throw e25599;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25598){if((e25598 instanceof Error)){
var e__24545__auto__ = e25598;
if((e__24545__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__24545__auto__;
}
} else {
throw e25598;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_25666 = cljs.core.vec(eav);
var ocr_25667 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_25666)) && ((cljs.core.count(ocr_25666) === 3)))){
try{var ocr_25666_0__25692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_0__25692,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25666_1__25693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_1__25693,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25666_2__25694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_2__25694,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e25756){if((e25756 instanceof Error)){
var e__24545__auto__ = e25756;
if((e__24545__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_25667)) && ((cljs.core.count(ocr_25667) === 3)))){
try{var ocr_25667_2__25697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(2));
if((ocr_25667_2__25697 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25758){if((e25758 instanceof Error)){
var e__24545__auto____$1 = e25758;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25667_2__25697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(2));
if((ocr_25667_2__25697 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25759){if((e25759 instanceof Error)){
var e__24545__auto____$2 = e25759;
if((e__24545__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$2;
}
} else {
throw e25759;

}
}} else {
throw e__24545__auto____$1;
}
} else {
throw e25758;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25757){if((e25757 instanceof Error)){
var e__24545__auto____$1 = e25757;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$1;
}
} else {
throw e25757;

}
}} else {
throw e__24545__auto__;
}
} else {
throw e25756;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25751){if((e25751 instanceof Error)){
var e__24545__auto__ = e25751;
if((e__24545__auto__ === cljs.core.match.backtrack)){
try{var ocr_25666_2__25694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_2__25694,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_25667)) && ((cljs.core.count(ocr_25667) === 3)))){
try{var ocr_25667_1__25699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25699 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25754){if((e25754 instanceof Error)){
var e__24545__auto____$1 = e25754;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25667_1__25699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25699 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25755){if((e25755 instanceof Error)){
var e__24545__auto____$2 = e25755;
if((e__24545__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$2;
}
} else {
throw e25755;

}
}} else {
throw e__24545__auto____$1;
}
} else {
throw e25754;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25753){if((e25753 instanceof Error)){
var e__24545__auto____$1 = e25753;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$1;
}
} else {
throw e25753;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25752){if((e25752 instanceof Error)){
var e__24545__auto____$1 = e25752;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$1;
}
} else {
throw e25752;

}
}} else {
throw e__24545__auto__;
}
} else {
throw e25751;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25705){if((e25705 instanceof Error)){
var e__24545__auto__ = e25705;
if((e__24545__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_25667)) && ((cljs.core.count(ocr_25667) === 3)))){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === false)){
try{var ocr_25666_1__25693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_1__25693,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25666_2__25694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_2__25694,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25750){if((e25750 instanceof Error)){
var e__24545__auto____$1 = e25750;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$1;
}
} else {
throw e25750;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25749){if((e25749 instanceof Error)){
var e__24545__auto____$1 = e25749;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$1;
}
} else {
throw e25749;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25707){if((e25707 instanceof Error)){
var e__24545__auto____$1 = e25707;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === true)){
try{var ocr_25666_2__25694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_2__25694,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25666_1__25693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_1__25693,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25746){if((e25746 instanceof Error)){
var e__24545__auto____$2 = e25746;
if((e__24545__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_25667_1__25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25702 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25747){if((e25747 instanceof Error)){
var e__24545__auto____$3 = e25747;
if((e__24545__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25667_1__25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25702 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25748){if((e25748 instanceof Error)){
var e__24545__auto____$4 = e25748;
if((e__24545__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$4;
}
} else {
throw e25748;

}
}} else {
throw e__24545__auto____$3;
}
} else {
throw e25747;

}
}} else {
throw e__24545__auto____$2;
}
} else {
throw e25746;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25745){if((e25745 instanceof Error)){
var e__24545__auto____$2 = e25745;
if((e__24545__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$2;
}
} else {
throw e25745;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25708){if((e25708 instanceof Error)){
var e__24545__auto____$2 = e25708;
if((e__24545__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === false)){
try{var ocr_25667_1__25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25702 === true)){
try{var ocr_25666_2__25694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_2__25694,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25744){if((e25744 instanceof Error)){
var e__24545__auto____$3 = e25744;
if((e__24545__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$3;
}
} else {
throw e25744;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25743){if((e25743 instanceof Error)){
var e__24545__auto____$3 = e25743;
if((e__24545__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$3;
}
} else {
throw e25743;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25709){if((e25709 instanceof Error)){
var e__24545__auto____$3 = e25709;
if((e__24545__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25667_2__25703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(2));
if((ocr_25667_2__25703 === true)){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === true)){
try{var ocr_25666_1__25693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_1__25693,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25742){if((e25742 instanceof Error)){
var e__24545__auto____$4 = e25742;
if((e__24545__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$4;
}
} else {
throw e25742;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25741){if((e25741 instanceof Error)){
var e__24545__auto____$4 = e25741;
if((e__24545__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$4;
}
} else {
throw e25741;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25710){if((e25710 instanceof Error)){
var e__24545__auto____$4 = e25710;
if((e__24545__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_25667_2__25703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(2));
if((ocr_25667_2__25703 === false)){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === true)){
try{var ocr_25666_1__25693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_1__25693,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25740){if((e25740 instanceof Error)){
var e__24545__auto____$5 = e25740;
if((e__24545__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$5;
}
} else {
throw e25740;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25739){if((e25739 instanceof Error)){
var e__24545__auto____$5 = e25739;
if((e__24545__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$5;
}
} else {
throw e25739;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25711){if((e25711 instanceof Error)){
var e__24545__auto____$5 = e25711;
if((e__24545__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_25667_2__25703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(2));
if((ocr_25667_2__25703 === true)){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === false)){
try{var ocr_25666_1__25693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_1__25693,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25738){if((e25738 instanceof Error)){
var e__24545__auto____$6 = e25738;
if((e__24545__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$6;
}
} else {
throw e25738;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25735){if((e25735 instanceof Error)){
var e__24545__auto____$6 = e25735;
if((e__24545__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_25667_1__25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25702 === true)){
try{var ocr_25666_0__25692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_0__25692,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25737){if((e25737 instanceof Error)){
var e__24545__auto____$7 = e25737;
if((e__24545__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$7;
}
} else {
throw e25737;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25736){if((e25736 instanceof Error)){
var e__24545__auto____$7 = e25736;
if((e__24545__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$7;
}
} else {
throw e25736;

}
}} else {
throw e__24545__auto____$6;
}
} else {
throw e25735;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25712){if((e25712 instanceof Error)){
var e__24545__auto____$6 = e25712;
if((e__24545__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_25667_2__25703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(2));
if((ocr_25667_2__25703 === false)){
try{var ocr_25667_1__25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25702 === true)){
try{var ocr_25666_0__25692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_0__25692,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25734){if((e25734 instanceof Error)){
var e__24545__auto____$7 = e25734;
if((e__24545__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$7;
}
} else {
throw e25734;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25733){if((e25733 instanceof Error)){
var e__24545__auto____$7 = e25733;
if((e__24545__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$7;
}
} else {
throw e25733;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25713){if((e25713 instanceof Error)){
var e__24545__auto____$7 = e25713;
if((e__24545__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_25667_2__25703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(2));
if((ocr_25667_2__25703 === true)){
try{var ocr_25667_1__25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25702 === false)){
try{var ocr_25666_0__25692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25666_0__25692,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25732){if((e25732 instanceof Error)){
var e__24545__auto____$8 = e25732;
if((e__24545__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$8;
}
} else {
throw e25732;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25726){if((e25726 instanceof Error)){
var e__24545__auto____$8 = e25726;
if((e__24545__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_25667_1__25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25702 === true)){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25730){if((e25730 instanceof Error)){
var e__24545__auto____$9 = e25730;
if((e__24545__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25731){if((e25731 instanceof Error)){
var e__24545__auto____$10 = e25731;
if((e__24545__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$10;
}
} else {
throw e25731;

}
}} else {
throw e__24545__auto____$9;
}
} else {
throw e25730;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25727){if((e25727 instanceof Error)){
var e__24545__auto____$9 = e25727;
if((e__24545__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_25667_1__25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25702 === false)){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25729){if((e25729 instanceof Error)){
var e__24545__auto____$10 = e25729;
if((e__24545__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$10;
}
} else {
throw e25729;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25728){if((e25728 instanceof Error)){
var e__24545__auto____$10 = e25728;
if((e__24545__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$10;
}
} else {
throw e25728;

}
}} else {
throw e__24545__auto____$9;
}
} else {
throw e25727;

}
}} else {
throw e__24545__auto____$8;
}
} else {
throw e25726;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25714){if((e25714 instanceof Error)){
var e__24545__auto____$8 = e25714;
if((e__24545__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_25667_2__25703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(2));
if((ocr_25667_2__25703 === false)){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === true)){
try{var ocr_25667_1__25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25702 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25725){if((e25725 instanceof Error)){
var e__24545__auto____$9 = e25725;
if((e__24545__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$9;
}
} else {
throw e25725;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25724){if((e25724 instanceof Error)){
var e__24545__auto____$9 = e25724;
if((e__24545__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$9;
}
} else {
throw e25724;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25715){if((e25715 instanceof Error)){
var e__24545__auto____$9 = e25715;
if((e__24545__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_25667_2__25703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(2));
if((ocr_25667_2__25703 === true)){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === false)){
try{var ocr_25667_1__25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25702 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25723){if((e25723 instanceof Error)){
var e__24545__auto____$10 = e25723;
if((e__24545__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$10;
}
} else {
throw e25723;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25722){if((e25722 instanceof Error)){
var e__24545__auto____$10 = e25722;
if((e__24545__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$10;
}
} else {
throw e25722;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25716){if((e25716 instanceof Error)){
var e__24545__auto____$10 = e25716;
if((e__24545__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_25667_2__25703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(2));
if((ocr_25667_2__25703 === false)){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === true)){
try{var ocr_25667_1__25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25702 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25721){if((e25721 instanceof Error)){
var e__24545__auto____$11 = e25721;
if((e__24545__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$11;
}
} else {
throw e25721;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25718){if((e25718 instanceof Error)){
var e__24545__auto____$11 = e25718;
if((e__24545__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_25667_0__25701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(0));
if((ocr_25667_0__25701 === false)){
try{var ocr_25667_1__25702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25667,(1));
if((ocr_25667_1__25702 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25666,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25720){if((e25720 instanceof Error)){
var e__24545__auto____$12 = e25720;
if((e__24545__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$12;
}
} else {
throw e25720;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25719){if((e25719 instanceof Error)){
var e__24545__auto____$12 = e25719;
if((e__24545__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$12;
}
} else {
throw e25719;

}
}} else {
throw e__24545__auto____$11;
}
} else {
throw e25718;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25717){if((e25717 instanceof Error)){
var e__24545__auto____$11 = e25717;
if((e__24545__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$11;
}
} else {
throw e25717;

}
}} else {
throw e__24545__auto____$10;
}
} else {
throw e25716;

}
}} else {
throw e__24545__auto____$9;
}
} else {
throw e25715;

}
}} else {
throw e__24545__auto____$8;
}
} else {
throw e25714;

}
}} else {
throw e__24545__auto____$7;
}
} else {
throw e25713;

}
}} else {
throw e__24545__auto____$6;
}
} else {
throw e25712;

}
}} else {
throw e__24545__auto____$5;
}
} else {
throw e25711;

}
}} else {
throw e__24545__auto____$4;
}
} else {
throw e25710;

}
}} else {
throw e__24545__auto____$3;
}
} else {
throw e25709;

}
}} else {
throw e__24545__auto____$2;
}
} else {
throw e25708;

}
}} else {
throw e__24545__auto____$1;
}
} else {
throw e25707;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25706){if((e25706 instanceof Error)){
var e__24545__auto____$1 = e25706;
if((e__24545__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24545__auto____$1;
}
} else {
throw e25706;

}
}} else {
throw e__24545__auto__;
}
} else {
throw e25705;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25704){if((e25704 instanceof Error)){
var e__24545__auto__ = e25704;
if((e__24545__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__24545__auto__;
}
} else {
throw e25704;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25761){
var vec__25762 = p__25761;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25762,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25762,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__25760_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__25760_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25766){
var vec__25767 = p__25766;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25767,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25767,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__25765_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__25765_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__25770 = cljs.core.rest(ins);
var G__25771 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__25770,G__25771) : posh.lib.q_analyze.just_qvars.call(null,G__25770,G__25771));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25772_SHARP_){
return cljs.core.zipmap(qvars,p1__25772_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__25773 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25773,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25773,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25773,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25773,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__25940 = var$;
var G__25941 = dbvarmap;
var G__25942 = cljs.core.rest(dbeavs);
var$ = G__25940;
dbvarmap = G__25941;
dbeavs = G__25942;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__25776 = cljs.core.rest(vars);
var G__25777 = dbvarmap;
var G__25778 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__25776,G__25777,G__25778) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__25776,G__25777,G__25778));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__25947 = (n + (1));
var G__25948 = cljs.core.rest(xs__$1);
n = G__25947;
xs__$1 = G__25948;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4115__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4115__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25779_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__25779_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__25779_SHARP_) : type.call(null,p1__25779_SHARP_));
} else {
return p1__25779_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__25780 = cljs.core.rest(ins);
var G__25781 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__25780,G__25781) : posh.lib.q_analyze.make_dbarg_map.call(null,G__25780,G__25781));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25782){
var vec__25783 = p__25782;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25783,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25783,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25787_SHARP_,p2__25786_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__25786_SHARP_)){
return p1__25787_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__25791 = cljs.core._EQ_;
var expr__25792 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__25791.cljs$core$IFn$_invoke$arity$2 ? pred__25791.cljs$core$IFn$_invoke$arity$2((1),expr__25792) : pred__25791.call(null,(1),expr__25792)))){
return true;
} else {
if(cljs.core.truth_((pred__25791.cljs$core$IFn$_invoke$arity$2 ? pred__25791.cljs$core$IFn$_invoke$arity$2((3),expr__25792) : pred__25791.call(null,(3),expr__25792)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__25953 = cljs.core.first(remaining);
var G__25954 = cljs.core.rest(remaining);
clause = G__25953;
remaining = G__25954;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__25955 = cljs.core.first(remaining);
var G__25956 = cljs.core.rest(remaining);
clause = G__25955;
remaining = G__25956;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4529__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__25794(s__25795){
return (new cljs.core.LazySeq(null,(function (){
var s__25795__$1 = s__25795;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25795__$1);
if(temp__5735__auto__){
var s__25795__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25795__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25795__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25797 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25796 = (0);
while(true){
if((i__25796 < size__4528__auto__)){
var var_value = cljs.core._nth(c__4527__auto__,i__25796);
cljs.core.chunk_append(b__25797,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__25958 = (i__25796 + (1));
i__25796 = G__25958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25797),posh$lib$q_analyze$resolve_any_idents_$_iter__25794(cljs.core.chunk_rest(s__25795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25797),null);
}
} else {
var var_value = cljs.core.first(s__25795__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__25794(cljs.core.rest(s__25795__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25802){
var vec__25803 = p__25802;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25803,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25803,(1),null);
var or__4126__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25806){
var vec__25807 = p__25806;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25807,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25807,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25810){
var vec__25811 = p__25810;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25811,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25811,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25814){
var vec__25815 = p__25814;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25815,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25815,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__25819 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__25820 = cljs.core.vec(r);
var fexpr__25818 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25818.cljs$core$IFn$_invoke$arity$2 ? fexpr__25818.cljs$core$IFn$_invoke$arity$2(G__25819,G__25820) : fexpr__25818.call(null,G__25819,G__25820));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25821){
var vec__25822 = p__25821;
var seq__25823 = cljs.core.seq(vec__25822);
var first__25824 = cljs.core.first(seq__25823);
var seq__25823__$1 = cljs.core.next(seq__25823);
var db = first__25824;
var eav = seq__25823__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25825){
var vec__25826 = p__25825;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25826,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25826,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__25800_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__25800_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__25800_SHARP_) : linked_qvars.call(null,p1__25800_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__25800_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__25801_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__25801_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__25801_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
