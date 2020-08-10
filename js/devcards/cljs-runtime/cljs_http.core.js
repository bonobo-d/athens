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
var temp__5735__auto__ = (function (){var fexpr__44913 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__44913.cljs$core$IFn$_invoke$arity$1 ? fexpr__44913.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__44913.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44914){
var vec__44915 = p__44914;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44915,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44915,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__44918 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__44918)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__44918)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__44918)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__44918)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__44918)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__44918)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44918)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__44919){
var map__44920 = p__44919;
var map__44920__$1 = (((((!((map__44920 == null))))?(((((map__44920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44920):map__44920);
var request = map__44920__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44920__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44920__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44920__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__44922 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__44922,default_headers);

cljs_http.core.apply_response_type_BANG_(G__44922,response_type);

G__44922.setTimeoutInterval(timeout);

G__44922.setWithCredentials(send_credentials);

return G__44922;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__44923){
var map__44924 = p__44923;
var map__44924__$1 = (((((!((map__44924 == null))))?(((((map__44924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44924):map__44924);
var request = map__44924__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44924__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44924__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44924__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44924__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44924__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44924__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
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
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__44926 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__44926) : cljs_http.core.error_kw.call(null,G__44926));
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
var listener_44968 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__44927_44971 = xhr;
G__44927_44971.setProgressEventsEnabled(true);

G__44927_44971.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_44968,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__44927_44971.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_44968,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__42522__auto___44972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_44938){
var state_val_44939 = (state_44938[(1)]);
if((state_val_44939 === (1))){
var state_44938__$1 = state_44938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44938__$1,(2),cancel);
} else {
if((state_val_44939 === (2))){
var inst_44929 = (state_44938[(2)]);
var inst_44930 = xhr.isComplete();
var inst_44931 = cljs.core.not(inst_44930);
var state_44938__$1 = (function (){var statearr_44940 = state_44938;
(statearr_44940[(7)] = inst_44929);

return statearr_44940;
})();
if(inst_44931){
var statearr_44941_44976 = state_44938__$1;
(statearr_44941_44976[(1)] = (3));

} else {
var statearr_44942_44977 = state_44938__$1;
(statearr_44942_44977[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44939 === (3))){
var inst_44933 = xhr.abort();
var state_44938__$1 = state_44938;
var statearr_44943_44978 = state_44938__$1;
(statearr_44943_44978[(2)] = inst_44933);

(statearr_44943_44978[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44939 === (4))){
var state_44938__$1 = state_44938;
var statearr_44944_44979 = state_44938__$1;
(statearr_44944_44979[(2)] = null);

(statearr_44944_44979[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44939 === (5))){
var inst_44936 = (state_44938[(2)]);
var state_44938__$1 = state_44938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44938__$1,inst_44936);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__42487__auto__ = null;
var cljs_http$core$xhr_$_state_machine__42487__auto____0 = (function (){
var statearr_44945 = [null,null,null,null,null,null,null,null];
(statearr_44945[(0)] = cljs_http$core$xhr_$_state_machine__42487__auto__);

(statearr_44945[(1)] = (1));

return statearr_44945;
});
var cljs_http$core$xhr_$_state_machine__42487__auto____1 = (function (state_44938){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_44938);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e44946){var ex__42490__auto__ = e44946;
var statearr_44947_44980 = state_44938;
(statearr_44947_44980[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_44938[(4)]))){
var statearr_44948_44981 = state_44938;
(statearr_44948_44981[(1)] = cljs.core.first((state_44938[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44982 = state_44938;
state_44938 = G__44982;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__42487__auto__ = function(state_44938){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__42487__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__42487__auto____1.call(this,state_44938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__42487__auto____0;
cljs_http$core$xhr_$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__42487__auto____1;
return cljs_http$core$xhr_$_state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_44949 = f__42523__auto__();
(statearr_44949[(6)] = c__42522__auto___44972);

return statearr_44949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__44950){
var map__44951 = p__44950;
var map__44951__$1 = (((((!((map__44951 == null))))?(((((map__44951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44951):map__44951);
var request = map__44951__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44951__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44951__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44951__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44951__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_44984 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_44984], null));

if(cljs.core.truth_(cancel)){
var c__42522__auto___44989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_44957){
var state_val_44958 = (state_44957[(1)]);
if((state_val_44958 === (1))){
var state_44957__$1 = state_44957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44957__$1,(2),cancel);
} else {
if((state_val_44958 === (2))){
var inst_44954 = (state_44957[(2)]);
var inst_44955 = jsonp.cancel(req_44984);
var state_44957__$1 = (function (){var statearr_44959 = state_44957;
(statearr_44959[(7)] = inst_44954);

return statearr_44959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44957__$1,inst_44955);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__42487__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__42487__auto____0 = (function (){
var statearr_44960 = [null,null,null,null,null,null,null,null];
(statearr_44960[(0)] = cljs_http$core$jsonp_$_state_machine__42487__auto__);

(statearr_44960[(1)] = (1));

return statearr_44960;
});
var cljs_http$core$jsonp_$_state_machine__42487__auto____1 = (function (state_44957){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_44957);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e44961){var ex__42490__auto__ = e44961;
var statearr_44962_44991 = state_44957;
(statearr_44962_44991[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_44957[(4)]))){
var statearr_44963_44992 = state_44957;
(statearr_44963_44992[(1)] = cljs.core.first((state_44957[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44993 = state_44957;
state_44957 = G__44993;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__42487__auto__ = function(state_44957){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__42487__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__42487__auto____1.call(this,state_44957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__42487__auto____0;
cljs_http$core$jsonp_$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__42487__auto____1;
return cljs_http$core$jsonp_$_state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_44964 = f__42523__auto__();
(statearr_44964[(6)] = c__42522__auto___44989);

return statearr_44964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__44965){
var map__44966 = p__44965;
var map__44966__$1 = (((((!((map__44966 == null))))?(((((map__44966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44966):map__44966);
var request = map__44966__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44966__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
