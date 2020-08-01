goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__61131,p__61132){
var map__61133 = p__61131;
var map__61133__$1 = (((((!((map__61133 == null))))?(((((map__61133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61133):map__61133);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61133__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61134 = p__61132;
var map__61134__$1 = (((((!((map__61134 == null))))?(((((map__61134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61134):map__61134);
var msg = map__61134__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61134__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__61137,p__61138){
var map__61139 = p__61137;
var map__61139__$1 = (((((!((map__61139 == null))))?(((((map__61139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61139):map__61139);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61139__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61140 = p__61138;
var map__61140__$1 = (((((!((map__61140 == null))))?(((((map__61140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61140):map__61140);
var msg = map__61140__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61140__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__61143 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61145 = null;
var count__61146 = (0);
var i__61147 = (0);
while(true){
if((i__61147 < count__61146)){
var map__61153 = chunk__61145.cljs$core$IIndexed$_nth$arity$2(null,i__61147);
var map__61153__$1 = (((((!((map__61153 == null))))?(((((map__61153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61153):map__61153);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61153__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61200 = seq__61143;
var G__61201 = chunk__61145;
var G__61202 = count__61146;
var G__61203 = (i__61147 + (1));
seq__61143 = G__61200;
chunk__61145 = G__61201;
count__61146 = G__61202;
i__61147 = G__61203;
continue;
} else {
var G__61204 = seq__61143;
var G__61205 = chunk__61145;
var G__61206 = count__61146;
var G__61207 = (i__61147 + (1));
seq__61143 = G__61204;
chunk__61145 = G__61205;
count__61146 = G__61206;
i__61147 = G__61207;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61143);
if(temp__5735__auto__){
var seq__61143__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61143__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61143__$1);
var G__61208 = cljs.core.chunk_rest(seq__61143__$1);
var G__61209 = c__4609__auto__;
var G__61210 = cljs.core.count(c__4609__auto__);
var G__61211 = (0);
seq__61143 = G__61208;
chunk__61145 = G__61209;
count__61146 = G__61210;
i__61147 = G__61211;
continue;
} else {
var map__61155 = cljs.core.first(seq__61143__$1);
var map__61155__$1 = (((((!((map__61155 == null))))?(((((map__61155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61155):map__61155);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61155__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__61212 = cljs.core.next(seq__61143__$1);
var G__61213 = null;
var G__61214 = (0);
var G__61215 = (0);
seq__61143 = G__61212;
chunk__61145 = G__61213;
count__61146 = G__61214;
i__61147 = G__61215;
continue;
} else {
var G__61216 = cljs.core.next(seq__61143__$1);
var G__61217 = null;
var G__61218 = (0);
var G__61219 = (0);
seq__61143 = G__61216;
chunk__61145 = G__61217;
count__61146 = G__61218;
i__61147 = G__61219;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__61157,msg){
var map__61158 = p__61157;
var map__61158__$1 = (((((!((map__61158 == null))))?(((((map__61158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61158):map__61158);
var runtime = map__61158__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61158__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__61160,key,p__61161){
var map__61162 = p__61160;
var map__61162__$1 = (((((!((map__61162 == null))))?(((((map__61162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61162):map__61162);
var state = map__61162__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61162__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__61163 = p__61161;
var map__61163__$1 = (((((!((map__61163 == null))))?(((((map__61163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61163):map__61163);
var spec = map__61163__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61163__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__61166,key,spec){
var map__61167 = p__61166;
var map__61167__$1 = (((((!((map__61167 == null))))?(((((map__61167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61167):map__61167);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61167__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__61174){
var map__61175 = p__61174;
var map__61175__$1 = (((((!((map__61175 == null))))?(((((map__61175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61175):map__61175);
var runtime = map__61175__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61175__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__61169_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__61169_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__61170_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__61170_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__61171_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__61171_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__61172_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__61172_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__61173_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__61173_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61177,key){
var map__61178 = p__61177;
var map__61178__$1 = (((((!((map__61178 == null))))?(((((map__61178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61178):map__61178);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61178__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61180,p__61181){
var map__61182 = p__61180;
var map__61182__$1 = (((((!((map__61182 == null))))?(((((map__61182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61182):map__61182);
var runtime = map__61182__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61182__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61183 = p__61181;
var map__61183__$1 = (((((!((map__61183 == null))))?(((((map__61183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61183):map__61183);
var msg = map__61183__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61183__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61186 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61188 = null;
var count__61189 = (0);
var i__61190 = (0);
while(true){
if((i__61190 < count__61189)){
var map__61196 = chunk__61188.cljs$core$IIndexed$_nth$arity$2(null,i__61190);
var map__61196__$1 = (((((!((map__61196 == null))))?(((((map__61196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61196):map__61196);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61196__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61220 = seq__61186;
var G__61221 = chunk__61188;
var G__61222 = count__61189;
var G__61223 = (i__61190 + (1));
seq__61186 = G__61220;
chunk__61188 = G__61221;
count__61189 = G__61222;
i__61190 = G__61223;
continue;
} else {
var G__61224 = seq__61186;
var G__61225 = chunk__61188;
var G__61226 = count__61189;
var G__61227 = (i__61190 + (1));
seq__61186 = G__61224;
chunk__61188 = G__61225;
count__61189 = G__61226;
i__61190 = G__61227;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61186);
if(temp__5735__auto__){
var seq__61186__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61186__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61186__$1);
var G__61228 = cljs.core.chunk_rest(seq__61186__$1);
var G__61229 = c__4609__auto__;
var G__61230 = cljs.core.count(c__4609__auto__);
var G__61231 = (0);
seq__61186 = G__61228;
chunk__61188 = G__61229;
count__61189 = G__61230;
i__61190 = G__61231;
continue;
} else {
var map__61198 = cljs.core.first(seq__61186__$1);
var map__61198__$1 = (((((!((map__61198 == null))))?(((((map__61198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61198):map__61198);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61198__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61232 = cljs.core.next(seq__61186__$1);
var G__61233 = null;
var G__61234 = (0);
var G__61235 = (0);
seq__61186 = G__61232;
chunk__61188 = G__61233;
count__61189 = G__61234;
i__61190 = G__61235;
continue;
} else {
var G__61236 = cljs.core.next(seq__61186__$1);
var G__61237 = null;
var G__61238 = (0);
var G__61239 = (0);
seq__61186 = G__61236;
chunk__61188 = G__61237;
count__61189 = G__61238;
i__61190 = G__61239;
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
