goog.provide('posh.core');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.update');
goog.require('posh.lib.db');
goog.require('posh.lib.graph');
posh.core.empty_tree = (function posh$core$empty_tree(p__25874,retrieve){
var map__25875 = p__25874;
var map__25875__$1 = (((((!((map__25875 == null))))?(((((map__25875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25875):map__25875);
var dcfg = map__25875__$1;
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25875__$1,new cljs.core.Keyword(null,"q","q",689001697));
var pull = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25875__$1,new cljs.core.Keyword(null,"pull","pull",-860544805));
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25875__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var entid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25875__$1,new cljs.core.Keyword(null,"entid","entid",1720688982));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25875__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"retrieve","retrieve",-657129560),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"dbs","dbs",1889628467),new cljs.core.Keyword(null,"schemas","schemas",575070579),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"dcfg","dcfg",-880371016),new cljs.core.Keyword(null,"conns","conns",-1475268193)],[cljs.core.PersistentArrayMap.EMPTY,retrieve,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,dcfg,cljs.core.PersistentArrayMap.EMPTY]);
});
posh.core.add_db = (function posh$core$add_db(var_args){
var G__25878 = arguments.length;
switch (G__25878) {
case 4:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.core.add_db.cljs$core$IFn$_invoke$arity$4 = (function (posh_tree,db_id,conn,schema){
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,conn,schema,null);
}));

(posh.core.add_db.cljs$core$IFn$_invoke$arity$5 = (function (p__25879,db_id,conn,schema,base_filters){
var map__25880 = p__25879;
var map__25880__$1 = (((((!((map__25880 == null))))?(((((map__25880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25880):map__25880);
var posh_tree = map__25880__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25880__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25880__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25880__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25880__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25880__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25880__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"conns","conns",-1475268193),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conns,db_id,conn),new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schemas,db_id,schema),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id,base_filters),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key,new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3(dcfg,conn,base_filters)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])], 0)),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
}));

(posh.core.add_db.cljs$lang$maxFixedArity = 5);

posh.core.set_db = (function posh$core$set_db(var_args){
var G__25883 = arguments.length;
switch (G__25883) {
case 3:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.core.set_db.cljs$core$IFn$_invoke$arity$3 = (function (posh_tree,db_id,db){
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,db,null);
}));

(posh.core.set_db.cljs$core$IFn$_invoke$arity$4 = (function (p__25884,db_id,db,filter_pred){
var map__25885 = p__25884;
var map__25885__$1 = (((((!((map__25885 == null))))?(((((map__25885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25885):map__25885);
var posh_tree = map__25885__$1;
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25885__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25885__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25885__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,db),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])], 0)),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
}));

(posh.core.set_db.cljs$lang$maxFixedArity = 4);

posh.core.add_filter_tx = (function posh$core$add_filter_tx(p__25887,poshdb,tx_patterns){
var map__25888 = p__25887;
var map__25888__$1 = (((((!((map__25888 == null))))?(((((map__25888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25888):map__25888);
var posh_tree = map__25888__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25888__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25888__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tx","filter-tx",-1870604812),poshdb,tx_patterns], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),tx_patterns], null))], null)], 0))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_pull = (function posh$core$add_filter_pull(p__25890,poshdb,pull_pattern,eid){
var map__25891 = p__25890;
var map__25891__$1 = (((((!((map__25891 == null))))?(((((map__25891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25891):map__25891);
var posh_tree = map__25891__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25891__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25891__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25891__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25891__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25891__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-pull","filter-pull",-32246001),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.update_filter_pull(posh_tree,storage_key))], null)], 0))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_q = (function posh$core$add_filter_q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___25960 = arguments.length;
var i__4737__auto___25961 = (0);
while(true){
if((i__4737__auto___25961 < len__4736__auto___25960)){
args__4742__auto__.push((arguments[i__4737__auto___25961]));

var G__25962 = (i__4737__auto___25961 + (1));
i__4737__auto___25961 = G__25962;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__25896,query,args){
var map__25897 = p__25896;
var map__25897__$1 = (((((!((map__25897 == null))))?(((((map__25897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25897):map__25897);
var posh_tree = map__25897__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25897__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-q","filter-q",538431954),query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var map__25899 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__25899__$1 = (((((!((map__25899 == null))))?(((((map__25899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25899):map__25899);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25899__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25899__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.filter_q_transform_analysis(analysis))], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
}));

(posh.core.add_filter_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.core.add_filter_q.cljs$lang$applyTo = (function (seq25893){
var G__25894 = cljs.core.first(seq25893);
var seq25893__$1 = cljs.core.next(seq25893);
var G__25895 = cljs.core.first(seq25893__$1);
var seq25893__$2 = cljs.core.next(seq25893__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25894,G__25895,seq25893__$2);
}));

posh.core.add_pull = (function posh$core$add_pull(p__25901,poshdb,pull_pattern,eid){
var map__25902 = p__25901;
var map__25902__$1 = (((((!((map__25902 == null))))?(((((map__25902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25902):map__25902);
var posh_tree = map__25902__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25902__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25902__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25902__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25902__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25902__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25902__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull(posh_tree,storage_key)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_pull_many = (function posh$core$add_pull_many(p__25904,poshdb,pull_pattern,eids){
var map__25905 = p__25904;
var map__25905__$1 = (((((!((map__25905 == null))))?(((((map__25905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25905):map__25905);
var posh_tree = map__25905__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25905__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25905__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25905__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25905__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25905__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25905__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-many","pull-many",217148130),poshdb,pull_pattern,eids], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull_many(posh_tree,storage_key)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_q = (function posh$core$add_q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___25963 = arguments.length;
var i__4737__auto___25964 = (0);
while(true){
if((i__4737__auto___25964 < len__4736__auto___25963)){
args__4742__auto__.push((arguments[i__4737__auto___25964]));

var G__25965 = (i__4737__auto___25964 + (1));
i__4737__auto___25964 = G__25965;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__25910,query,args){
var map__25911 = p__25910;
var map__25911__$1 = (((((!((map__25911 == null))))?(((((map__25911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25911):map__25911);
var posh_tree = map__25911__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25911__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25911__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25911__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25911__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25911__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__4126__auto__ = cached;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var map__25913 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__25913__$1 = (((((!((map__25913 == null))))?(((((map__25913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25913):map__25913);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25913__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25913__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
}
})(),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
}));

(posh.core.add_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.core.add_q.cljs$lang$applyTo = (function (seq25907){
var G__25908 = cljs.core.first(seq25907);
var seq25907__$1 = cljs.core.next(seq25907);
var G__25909 = cljs.core.first(seq25907__$1);
var seq25907__$2 = cljs.core.next(seq25907__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25908,G__25909,seq25907__$2);
}));

posh.core.remove_item = (function posh$core$remove_item(p__25915,storage_key){
var map__25916 = p__25915;
var map__25916__$1 = (((((!((map__25916 == null))))?(((((map__25916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25916):map__25916);
var posh_tree = map__25916__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25916__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25916__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_tree,new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.remove_item(graph,storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache,storage_key)], 0));
});
posh.core.cache_changes = (function posh$core$cache_changes(p__25918,db_id,tx,new_cache,storage_key){
var map__25919 = p__25918;
var map__25919__$1 = (((((!((map__25919 == null))))?(((((map__25919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25919):map__25919);
var posh_tree = map__25919__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25919__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25919__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_cache,storage_key))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var current_analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
var reloaded = (cljs.core.truth_(posh.lib.datom_matcher.any_datoms_match_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666).cljs$core$IFn$_invoke$arity$1(current_analysis),db_id),tx))?(function (){var fexpr__25922 = new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860).cljs$core$IFn$_invoke$arity$1(current_analysis);
return (fexpr__25922.cljs$core$IFn$_invoke$arity$2 ? fexpr__25922.cljs$core$IFn$_invoke$arity$2(posh_tree,storage_key) : fexpr__25922.call(null,posh_tree,storage_key));
})():null);
var analysis = (function (){var or__4126__auto__ = reloaded;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return current_analysis;
}
})();
var map__25921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,storage_key);
var map__25921__$1 = (((((!((map__25921 == null))))?(((((map__25921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25921):map__25921);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25921__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var children_cache = (function (){var temp__5735__auto__ = (((!(cljs.core.empty_QMARK_(outputs))))?(function (){var and__4115__auto__ = new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis);
if(cljs.core.truth_(and__4115__auto__)){
return posh.lib.datom_matcher.matching_datoms(new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis),tx);
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(temp__5735__auto__)){
var pass_tx = temp__5735__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,(posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5 ? posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,pass_tx,acc,k) : posh.core.cache_changes.call(null,posh_tree,db_id,pass_tx,acc,k))], 0));
}),new_cache,outputs);
} else {
return null;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children_cache,(cljs.core.truth_(reloaded)?cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,reloaded]):null),cljs.core.PersistentArrayMap.EMPTY], 0));
}
});
posh.core.merge_txs = (function posh$core$merge_txs(oldtx,newtx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(newtx,oldtx);
});
posh.core.add_tx = (function posh$core$add_tx(p__25929,poshdb,tx){
var map__25930 = p__25929;
var map__25930__$1 = (((((!((map__25930 == null))))?(((((map__25930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25930):map__25930);
var posh_tree = map__25930__$1;
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25930__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25930__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns,posh.lib.db.poshdb__GT_db_id(poshdb));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(txs,conn,posh.core.merge_txs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(txs,conn),tx)));
});
posh.core.group_db_ids_by_conn = (function posh$core$group_db_ids_by_conn(conns){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by(cljs.core.second,conns));
});
posh.core.after_transact = (function posh$core$after_transact(p__25932,conns_results){
var map__25933 = p__25932;
var map__25933__$1 = (((((!((map__25933 == null))))?(((((map__25933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25933):map__25933);
var posh_tree = map__25933__$1;
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25933__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25933__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25933__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25933__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25933__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var new_dbs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4529__auto__ = (function posh$core$after_transact_$_iter__25939(s__25940){
return (new cljs.core.LazySeq(null,(function (){
var s__25940__$1 = s__25940;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25940__$1);
if(temp__5735__auto__){
var s__25940__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25940__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25940__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25942 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25941 = (0);
while(true){
if((i__25941 < size__4528__auto__)){
var vec__25943 = cljs.core._nth(c__4527__auto__,i__25941);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25943,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25943,(1),null);
cljs.core.chunk_append(b__25942,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)])));

var G__25966 = (i__25941 + (1));
i__25941 = G__25966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25942),posh$core$after_transact_$_iter__25939(cljs.core.chunk_rest(s__25940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25942),null);
}
} else {
var vec__25947 = cljs.core.first(s__25940__$2);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25947,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25947,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)])),posh$core$after_transact_$_iter__25939(cljs.core.rest(s__25940__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(conns);
})());
var new_posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"dbs","dbs",1889628467),new_dbs);
var changed_cache = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changed,p__25950){
var vec__25951 = p__25950;
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25951,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25951,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([changed,posh.core.cache_changes(new_posh_tree,db_id,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)),changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null))], 0));
}),cljs.core.PersistentArrayMap.EMPTY,conns);
var really_changed = cljs.core.reduce_kv((function (m,k,v){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,changed_cache);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,really_changed], 0)),new cljs.core.Keyword(null,"changed","changed",570724917),really_changed], null)], 0));
});
posh.core.process_tx_BANG_ = (function posh$core$process_tx_BANG_(p__25954){
var map__25955 = p__25954;
var map__25955__$1 = (((((!((map__25955 == null))))?(((((map__25955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25955):map__25955);
var posh_tree = map__25955__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25955__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25955__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns_results = cljs.core.reduce_kv((function (m,conn,tx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,conn,(function (){var fexpr__25957 = new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25957.cljs$core$IFn$_invoke$arity$2 ? fexpr__25957.cljs$core$IFn$_invoke$arity$2(conn,tx) : fexpr__25957.call(null,conn,tx));
})());
}),cljs.core.PersistentArrayMap.EMPTY,txs);
return posh.core.after_transact(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.PersistentArrayMap.EMPTY),conns_results);
});

//# sourceMappingURL=posh.core.js.map
