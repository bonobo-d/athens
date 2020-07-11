goog.provide('athens.db');
goog.require('cljs.core');
goog.require('clojure.edn');
goog.require('datascript.core');
goog.require('posh.reagent');
athens.db.athens_url = "https://raw.githubusercontent.com/athensresearch/athens/master/data/athens.datoms";
athens.db.help_url = "https://raw.githubusercontent.com/athensresearch/athens/master/data/help.datoms";
athens.db.ego_url = "https://raw.githubusercontent.com/athensresearch/athens/master/data/ego.datoms";
if((typeof athens !== 'undefined') && (typeof athens.db !== 'undefined') && (typeof athens.db.rfdb !== 'undefined')){
} else {
athens.db.rfdb = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("athena","recent-items","athena/recent-items",-1145487227),new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword("left-sidebar","open","left-sidebar/open",-686633270),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword("daily-notes","items","daily-notes/items",227138573),new cljs.core.Keyword("right-sidebar","items","right-sidebar/items",-881766733),new cljs.core.Keyword("devtool","open","devtool/open",-1176270029),new cljs.core.Keyword("right-sidebar","open","right-sidebar/open",83006133),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword("athena","open","athena/open",1253777725)],[cljs.core.List.EMPTY,null,true,true,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,false,false,"Socrates",false]);
}
/**
 * Maps attributes from "Export All as JSON" to original datascript attributes.
 */
athens.db.str_kw_mappings = cljs.core.PersistentHashMap.fromArrays(["heading","string","edit-email","emoji","children","create-email","text-align","email","emojis","uid","create-time","users","time","props","title","edit-time"],[new cljs.core.Keyword("block","heading","block/heading",-1941840630),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("edit","email","edit/email",1419195448),new cljs.core.Keyword("ent","emoji","ent/emoji",1031088075),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("create","email","create/email",-1530017530),new cljs.core.Keyword("block","text-align","block/text-align",1776373178),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("ent","emojis","ent/emojis",-2098423410),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("create","time","create/time",-1563077754),null,null,new cljs.core.Keyword("block","props","block/props",-542295228),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("edit","time","edit/time",1384867476)]);
athens.db.convert_key = (function athens$db$convert_key(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(athens.db.str_kw_mappings,k,k);
});
/**
 * Parses JSON retrieved from Roam's "Export all as JSON". Not fully functional.
 */
athens.db.parse_hms = (function athens$db$parse_hms(hms){
if((!(cljs.core.coll_QMARK_(hms)))){
return hms;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32833_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__32834){
var vec__32835 = p__32834;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,athens.db.convert_key(k),(athens.db.parse_hms.cljs$core$IFn$_invoke$arity$1 ? athens.db.parse_hms.cljs$core$IFn$_invoke$arity$1(v) : athens.db.parse_hms.call(null,v)));
}),cljs.core.PersistentArrayMap.EMPTY,p1__32833_SHARP_);
}),hms);
}
});
/**
 * Parse tuples exported via method specified in https://roamresearch.com/#/app/ego/page/eJ14YtH2G.
 */
athens.db.parse_tuples = (function athens$db$parse_tuples(tuples){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32839_SHARP_){
return cljs.core.cons(new cljs.core.Keyword("db","add","db/add",235286841),p1__32839_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32838_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.edn.read_string,p1__32838_SHARP_);
}),cljs.core.rest(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),tuples))));
});
/**
 * Convert a JSON str to EDN. May receive JSON through an HTTP request or file upload.
 */
athens.db.json_str_to_edn = (function athens$db$json_str_to_edn(json_str){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(json_str));
});
/**
 * Deserializes a JSON string into EDN and then Datoms.
 */
athens.db.str_to_db_tx = (function athens$db$str_to_db_tx(json_str){
var edn_data = athens.db.json_str_to_edn(json_str);
if(cljs.core.coll_QMARK_(cljs.core.first(edn_data))){
return athens.db.parse_hms(edn_data);
} else {
return athens.db.parse_tuples(edn_data);
}
});
athens.db.schema = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("attrs","lookup","attrs/lookup",849089348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
if((typeof athens !== 'undefined') && (typeof athens.db !== 'undefined') && (typeof athens.db.dsdb !== 'undefined')){
} else {
athens.db.dsdb = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
}
(posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(athens.db.dsdb) : posh.reagent.posh_BANG_.call(null,athens.db.dsdb));
athens.db.e_by_av = (function athens$db$e_by_av(a,v){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(athens.db.dsdb),new cljs.core.Keyword(null,"avet","avet",1383857032),a,v)));
});
athens.db.sort_block_children = (function athens$db$sort_block_children(block){
var temp__5733__auto__ = cljs.core.seq(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block));
if(temp__5733__auto__){
var children = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.db.sort_block_children,children))));
} else {
return block;
}
});
athens.db.get_block_document = (function athens$db$get_block_document(id){
return athens.db.sort_block_children(cljs.core.deref((function (){var G__32840 = athens.db.dsdb;
var G__32841 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","open","block/open",-1875254829),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__32842 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__32840,G__32841,G__32842) : posh.reagent.pull.call(null,G__32840,G__32841,G__32842));
})()));
});
athens.db.get_node_document = (function athens$db$get_node_document(id){
return athens.db.sort_block_children(cljs.core.deref((function (){var G__32843 = athens.db.dsdb;
var G__32844 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","open","block/open",-1875254829),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__32845 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__32843,G__32844,G__32845) : posh.reagent.pull.call(null,G__32843,G__32844,G__32845));
})()));
});
/**
 * Normalize path from deeply nested block to root node.
 */
athens.db.shape_parent_query = (function athens$db$shape_parent_query(pull_results){
return cljs.core.vec(cljs.core.reverse(cljs.core.rest((function (){var b = pull_results;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,b);
} else {
var G__32892 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
var G__32893 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword("block","_children","block/_children",1128070632)));
b = G__32892;
res = G__32893;
continue;
}
break;
}
})())));
});
athens.db.get_parents_recursively = (function athens$db$get_parents_recursively(id){
return athens.db.shape_parent_query(cljs.core.deref((function (){var G__32846 = athens.db.dsdb;
var G__32847 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__32848 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__32846,G__32847,G__32848) : posh.reagent.pull.call(null,G__32846,G__32847,G__32848));
})()));
});
athens.db.get_block = (function athens$db$get_block(id){
return cljs.core.deref((function (){var G__32849 = athens.db.dsdb;
var G__32850 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","order","block/order",-1429282437)], null)], null)], null);
var G__32851 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__32849,G__32850,G__32851) : posh.reagent.pull.call(null,G__32849,G__32850,G__32851));
})());
});
athens.db.get_parent = (function athens$db$get_parent(id){
return athens.db.get_block(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1((function (){var G__32852 = cljs.core.deref(athens.db.dsdb);
var G__32853 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__32852,G__32853) : datascript.core.entity.call(null,G__32852,G__32853));
})()))));
});
athens.db.deepest_child_block = (function athens$db$deepest_child_block(id){
var document = cljs.core.deref((function (){var G__32854 = athens.db.dsdb;
var G__32855 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__32856 = id;
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__32854,G__32855,G__32856) : posh.reagent.pull.call(null,G__32854,G__32855,G__32856));
})());
var block = document;
while(true){
if((new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block) == null)){
return block;
} else {
var ch = new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block);
var n = cljs.core.count(ch);
var G__32904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ch,(n - (1)));
block = G__32904;
continue;
}
break;
}
});
/**
 * More options here https://clojuredocs.org/clojure.core/re-pattern
 */
athens.db.re_case_insensitive = (function athens$db$re_case_insensitive(query){
return cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join(''));
});
athens.db.search_exact_node_title = (function athens$db$search_exact_node_title(query){
var G__32857 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query","?query",891204063,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?query","?query",891204063,null)], null)], null);
var G__32858 = cljs.core.deref(athens.db.dsdb);
var G__32859 = query;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__32857,G__32858,G__32859) : datascript.core.q.call(null,G__32857,G__32858,G__32859));
});
athens.db.search_in_node_title = (function athens$db$search_in_node_title(query){
var G__32860 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?query","?query",891204063,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?query","?query",891204063,null))], null)], null);
var G__32861 = cljs.core.deref(athens.db.dsdb);
var G__32862 = athens.db.re_case_insensitive(query);
var G__32863 = query;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__32860,G__32861,G__32862,G__32863) : datascript.core.q.call(null,G__32860,G__32861,G__32862,G__32863));
});
athens.db.get_root_parent_node = (function athens$db$get_root_parent_node(block){
var b = block;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),b);
} else {
var G__32905 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
b = G__32905;
continue;
}
break;
}
});
athens.db.search_in_block_content = (function athens$db$search_in_block_content(query){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32864_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32864_SHARP_,new cljs.core.Keyword("block","_children","block/_children",1128070632));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.db.get_root_parent_node,(function (){var G__32865 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null))], null)], null);
var G__32866 = cljs.core.deref(athens.db.dsdb);
var G__32867 = athens.db.re_case_insensitive(query);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__32865,G__32866,G__32867) : datascript.core.q.call(null,G__32865,G__32866,G__32867));
})()));
});
if((typeof athens !== 'undefined') && (typeof athens.db !== 'undefined') && (typeof athens.db.history !== 'undefined')){
} else {
athens.db.history = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
athens.db.history_limit = (10);
athens.db.drop_tail = (function athens$db$drop_tail(xs,pred){
var acc = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var x = cljs.core.first(xs__$1);
if((x == null)){
return acc;
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
} else {
var G__32907 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
var G__32908 = cljs.core.next(xs__$1);
acc = G__32907;
xs__$1 = G__32908;
continue;

}
}
break;
}
});
athens.db.trim_head = (function athens$db$trim_head(xs,n){
return cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(xs) - n),xs));
});
athens.db.find_prev = (function athens$db$find_prev(xs,pred){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__32873_SHARP_){
return cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__32873_SHARP_) : pred.call(null,p1__32873_SHARP_)));
}),xs));
});
athens.db.find_next = (function athens$db$find_next(xs,pred){
return cljs.core.fnext(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__32874_SHARP_){
return cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__32874_SHARP_) : pred.call(null,p1__32874_SHARP_)));
}),xs));
});
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,new cljs.core.Keyword(null,"history","history",-247395220),(function (tx_report){
var map__32881 = tx_report;
var map__32881__$1 = (((((!((map__32881 == null))))?(((((map__32881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32881):map__32881);
var db_before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32881__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32881__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
if(cljs.core.truth_((function (){var and__4174__auto__ = db_before;
if(cljs.core.truth_(and__4174__auto__)){
return db_after;
} else {
return and__4174__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.history,(function (h){
return athens.db.trim_head(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(athens.db.drop_tail(h,(function (p1__32876_SHARP_){
return (p1__32876_SHARP_ === db_before);
})),db_after),(10));
}));
} else {
return null;
}
}));

//# sourceMappingURL=athens.db.js.map
