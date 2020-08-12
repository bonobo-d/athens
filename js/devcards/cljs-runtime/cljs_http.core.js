goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__44910 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__44910.cljs$core$IFn$_invoke$arity$1 ? fexpr__44910.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__44910.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44911){
var vec__44912 = p__44911;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44912,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44912,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__44915 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__44915)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__44915)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__44915)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__44915)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__44915)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__44915)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44915)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__44916){
var map__44917 = p__44916;
var map__44917__$1 = (((((!((map__44917 == null))))?(((((map__44917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44917):map__44917);
var request = map__44917__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__44919 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__44919,default_headers);

cljs_http.core.apply_response_type_BANG_(G__44919,response_type);

G__44919.setTimeoutInterval(timeout);

G__44919.setWithCredentials(send_credentials);

return G__44919;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__44920){
var map__44921 = p__44920;
var map__44921__$1 = (((((!((map__44921 == null))))?(((((map__44921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44921):map__44921);
var request = map__44921__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44921__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44921__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44921__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44921__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44921__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44921__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__44923 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__44923) : cljs_http.core.error_kw.call(null,G__44923));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_44971 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__44924_44976 = xhr;
G__44924_44976.setProgressEventsEnabled(true);

G__44924_44976.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_44971,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__44924_44976.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_44971,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__42519__auto___44977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_44935){
var state_val_44936 = (state_44935[(1)]);
if((state_val_44936 === (1))){
var state_44935__$1 = state_44935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44935__$1,(2),cancel);
} else {
if((state_val_44936 === (2))){
var inst_44926 = (state_44935[(2)]);
var inst_44927 = xhr.isComplete();
var inst_44928 = cljs.core.not(inst_44927);
var state_44935__$1 = (function (){var statearr_44937 = state_44935;
(statearr_44937[(7)] = inst_44926);

return statearr_44937;
})();
if(inst_44928){
var statearr_44938_44979 = state_44935__$1;
(statearr_44938_44979[(1)] = (3));

} else {
var statearr_44939_44980 = state_44935__$1;
(statearr_44939_44980[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44936 === (3))){
var inst_44930 = xhr.abort();
var state_44935__$1 = state_44935;
var statearr_44940_44981 = state_44935__$1;
(statearr_44940_44981[(2)] = inst_44930);

(statearr_44940_44981[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44936 === (4))){
var state_44935__$1 = state_44935;
var statearr_44941_44982 = state_44935__$1;
(statearr_44941_44982[(2)] = null);

(statearr_44941_44982[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44936 === (5))){
var inst_44933 = (state_44935[(2)]);
var state_44935__$1 = state_44935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44935__$1,inst_44933);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__42484__auto__ = null;
var cljs_http$core$xhr_$_state_machine__42484__auto____0 = (function (){
var statearr_44942 = [null,null,null,null,null,null,null,null];
(statearr_44942[(0)] = cljs_http$core$xhr_$_state_machine__42484__auto__);

(statearr_44942[(1)] = (1));

return statearr_44942;
});
var cljs_http$core$xhr_$_state_machine__42484__auto____1 = (function (state_44935){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_44935);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e44943){var ex__42487__auto__ = e44943;
var statearr_44944_44983 = state_44935;
(statearr_44944_44983[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_44935[(4)]))){
var statearr_44945_44984 = state_44935;
(statearr_44945_44984[(1)] = cljs.core.first((state_44935[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44985 = state_44935;
state_44935 = G__44985;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__42484__auto__ = function(state_44935){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__42484__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__42484__auto____1.call(this,state_44935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__42484__auto____0;
cljs_http$core$xhr_$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__42484__auto____1;
return cljs_http$core$xhr_$_state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_44946 = f__42520__auto__();
(statearr_44946[(6)] = c__42519__auto___44977);

return statearr_44946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__44947){
var map__44948 = p__44947;
var map__44948__$1 = (((((!((map__44948 == null))))?(((((map__44948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44948):map__44948);
var request = map__44948__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44948__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44948__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44948__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44948__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_44988 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_44988], null));

if(cljs.core.truth_(cancel)){
var c__42519__auto___44991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_44954){
var state_val_44955 = (state_44954[(1)]);
if((state_val_44955 === (1))){
var state_44954__$1 = state_44954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44954__$1,(2),cancel);
} else {
if((state_val_44955 === (2))){
var inst_44951 = (state_44954[(2)]);
var inst_44952 = jsonp.cancel(req_44988);
var state_44954__$1 = (function (){var statearr_44956 = state_44954;
(statearr_44956[(7)] = inst_44951);

return statearr_44956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44954__$1,inst_44952);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__42484__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__42484__auto____0 = (function (){
var statearr_44957 = [null,null,null,null,null,null,null,null];
(statearr_44957[(0)] = cljs_http$core$jsonp_$_state_machine__42484__auto__);

(statearr_44957[(1)] = (1));

return statearr_44957;
});
var cljs_http$core$jsonp_$_state_machine__42484__auto____1 = (function (state_44954){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_44954);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e44958){var ex__42487__auto__ = e44958;
var statearr_44959_44997 = state_44954;
(statearr_44959_44997[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_44954[(4)]))){
var statearr_44960_44998 = state_44954;
(statearr_44960_44998[(1)] = cljs.core.first((state_44954[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44999 = state_44954;
state_44954 = G__44999;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__42484__auto__ = function(state_44954){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__42484__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__42484__auto____1.call(this,state_44954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__42484__auto____0;
cljs_http$core$jsonp_$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__42484__auto____1;
return cljs_http$core$jsonp_$_state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_44961 = f__42520__auto__();
(statearr_44961[(6)] = c__42519__auto___44991);

return statearr_44961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__44962){
var map__44963 = p__44962;
var map__44963__$1 = (((((!((map__44963 == null))))?(((((map__44963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44963):map__44963);
var request = map__44963__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44963__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
