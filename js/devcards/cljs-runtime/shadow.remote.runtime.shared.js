goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61129,p__61130){
var map__61131 = p__61129;
var map__61131__$1 = (((((!((map__61131 == null))))?(((((map__61131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61131):map__61131);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61131__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61132 = p__61130;
var map__61132__$1 = (((((!((map__61132 == null))))?(((((map__61132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61132):map__61132);
var msg = map__61132__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61132__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61135,p__61136){
var map__61137 = p__61135;
var map__61137__$1 = (((((!((map__61137 == null))))?(((((map__61137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61137):map__61137);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61137__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61138 = p__61136;
var map__61138__$1 = (((((!((map__61138 == null))))?(((((map__61138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61138):map__61138);
var msg = map__61138__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61138__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61141 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61143 = null;
var count__61144 = (0);
var i__61145 = (0);
while(true){
if((i__61145 < count__61144)){
var map__61151 = chunk__61143.cljs$core$IIndexed$_nth$arity$2(null,i__61145);
var map__61151__$1 = (((((!((map__61151 == null))))?(((((map__61151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61151):map__61151);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61151__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61198 = seq__61141;
var G__61199 = chunk__61143;
var G__61200 = count__61144;
var G__61201 = (i__61145 + (1));
seq__61141 = G__61198;
chunk__61143 = G__61199;
count__61144 = G__61200;
i__61145 = G__61201;
continue;
} else {
var G__61202 = seq__61141;
var G__61203 = chunk__61143;
var G__61204 = count__61144;
var G__61205 = (i__61145 + (1));
seq__61141 = G__61202;
chunk__61143 = G__61203;
count__61144 = G__61204;
i__61145 = G__61205;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61141);
if(temp__5735__auto__){
var seq__61141__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61141__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61141__$1);
var G__61206 = cljs.core.chunk_rest(seq__61141__$1);
var G__61207 = c__4609__auto__;
var G__61208 = cljs.core.count(c__4609__auto__);
var G__61209 = (0);
seq__61141 = G__61206;
chunk__61143 = G__61207;
count__61144 = G__61208;
i__61145 = G__61209;
continue;
} else {
var map__61153 = cljs.core.first(seq__61141__$1);
var map__61153__$1 = (((((!((map__61153 == null))))?(((((map__61153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61153):map__61153);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61153__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61210 = cljs.core.next(seq__61141__$1);
var G__61211 = null;
var G__61212 = (0);
var G__61213 = (0);
seq__61141 = G__61210;
chunk__61143 = G__61211;
count__61144 = G__61212;
i__61145 = G__61213;
continue;
} else {
var G__61214 = cljs.core.next(seq__61141__$1);
var G__61215 = null;
var G__61216 = (0);
var G__61217 = (0);
seq__61141 = G__61214;
chunk__61143 = G__61215;
count__61144 = G__61216;
i__61145 = G__61217;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61155,msg){
var map__61156 = p__61155;
var map__61156__$1 = (((((!((map__61156 == null))))?(((((map__61156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61156):map__61156);
var runtime = map__61156__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61158,key,p__61159){
var map__61160 = p__61158;
var map__61160__$1 = (((((!((map__61160 == null))))?(((((map__61160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61160):map__61160);
var state = map__61160__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61160__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61161 = p__61159;
var map__61161__$1 = (((((!((map__61161 == null))))?(((((map__61161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61161):map__61161);
var spec = map__61161__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61161__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61164,key,spec){
var map__61165 = p__61164;
var map__61165__$1 = (((((!((map__61165 == null))))?(((((map__61165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61165):map__61165);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61165__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61172){
var map__61173 = p__61172;
var map__61173__$1 = (((((!((map__61173 == null))))?(((((map__61173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61173):map__61173);
var runtime = map__61173__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61173__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61167_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61167_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61168_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61168_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61169_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61169_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61170_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61170_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61171_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61171_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61175,key){
var map__61176 = p__61175;
var map__61176__$1 = (((((!((map__61176 == null))))?(((((map__61176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61176):map__61176);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61176__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61178,p__61179){
var map__61180 = p__61178;
var map__61180__$1 = (((((!((map__61180 == null))))?(((((map__61180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61180):map__61180);
var runtime = map__61180__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61180__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61181 = p__61179;
var map__61181__$1 = (((((!((map__61181 == null))))?(((((map__61181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61181):map__61181);
var msg = map__61181__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61181__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61184 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61186 = null;
var count__61187 = (0);
var i__61188 = (0);
while(true){
if((i__61188 < count__61187)){
var map__61194 = chunk__61186.cljs$core$IIndexed$_nth$arity$2(null,i__61188);
var map__61194__$1 = (((((!((map__61194 == null))))?(((((map__61194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61194):map__61194);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61194__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61218 = seq__61184;
var G__61219 = chunk__61186;
var G__61220 = count__61187;
var G__61221 = (i__61188 + (1));
seq__61184 = G__61218;
chunk__61186 = G__61219;
count__61187 = G__61220;
i__61188 = G__61221;
continue;
} else {
var G__61222 = seq__61184;
var G__61223 = chunk__61186;
var G__61224 = count__61187;
var G__61225 = (i__61188 + (1));
seq__61184 = G__61222;
chunk__61186 = G__61223;
count__61187 = G__61224;
i__61188 = G__61225;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61184);
if(temp__5735__auto__){
var seq__61184__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61184__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61184__$1);
var G__61226 = cljs.core.chunk_rest(seq__61184__$1);
var G__61227 = c__4609__auto__;
var G__61228 = cljs.core.count(c__4609__auto__);
var G__61229 = (0);
seq__61184 = G__61226;
chunk__61186 = G__61227;
count__61187 = G__61228;
i__61188 = G__61229;
continue;
} else {
var map__61196 = cljs.core.first(seq__61184__$1);
var map__61196__$1 = (((((!((map__61196 == null))))?(((((map__61196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61196):map__61196);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61196__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61230 = cljs.core.next(seq__61184__$1);
var G__61231 = null;
var G__61232 = (0);
var G__61233 = (0);
seq__61184 = G__61230;
chunk__61186 = G__61231;
count__61187 = G__61232;
i__61188 = G__61233;
continue;
} else {
var G__61234 = cljs.core.next(seq__61184__$1);
var G__61235 = null;
var G__61236 = (0);
var G__61237 = (0);
seq__61184 = G__61234;
chunk__61186 = G__61235;
count__61187 = G__61236;
i__61188 = G__61237;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
