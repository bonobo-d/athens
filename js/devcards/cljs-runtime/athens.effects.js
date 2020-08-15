goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
re_frame.core.reg_fx(new cljs.core.Keyword(null,"transact!","transact!",-822725810),(function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(posh.reagent.transact_BANG_(athens.db.dsdb,datoms));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),(function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),(function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__60346){
var map__60347 = p__60346;
var map__60347__$1 = (((((!((map__60347 == null))))?(((((map__60347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60347):map__60347);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60347__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60347__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60347__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60347__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60347__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__42519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_60391){
var state_val_60392 = (state_60391[(1)]);
if((state_val_60392 === (7))){
var inst_60358 = (state_60391[(7)]);
var inst_60358__$1 = (state_60391[(2)]);
var inst_60360 = (inst_60358__$1 == null);
var inst_60361 = cljs.core.not(inst_60360);
var state_60391__$1 = (function (){var statearr_60393 = state_60391;
(statearr_60393[(7)] = inst_60358__$1);

return statearr_60393;
})();
if(inst_60361){
var statearr_60394_60429 = state_60391__$1;
(statearr_60394_60429[(1)] = (8));

} else {
var statearr_60395_60430 = state_60391__$1;
(statearr_60395_60430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (1))){
var state_60391__$1 = state_60391;
var G__60396_60431 = method;
var G__60396_60432__$1 = (((G__60396_60431 instanceof cljs.core.Keyword))?G__60396_60431.fqn:null);
switch (G__60396_60432__$1) {
case "post":
var statearr_60397_60434 = state_60391__$1;
(statearr_60397_60434[(1)] = (3));


break;
case "get":
var statearr_60398_60435 = state_60391__$1;
(statearr_60398_60435[(1)] = (4));


break;
case "put":
var statearr_60399_60436 = state_60391__$1;
(statearr_60399_60436[(1)] = (5));


break;
case "delete":
var statearr_60400_60437 = state_60391__$1;
(statearr_60400_60437[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60396_60432__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (4))){
var state_60391__$1 = state_60391;
var statearr_60401_60438 = state_60391__$1;
(statearr_60401_60438[(2)] = cljs_http.client.get);

(statearr_60401_60438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (15))){
var inst_60358 = (state_60391[(7)]);
var state_60391__$1 = state_60391;
var statearr_60402_60439 = state_60391__$1;
(statearr_60402_60439[(2)] = inst_60358);

(statearr_60402_60439[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (13))){
var inst_60371 = (state_60391[(2)]);
var state_60391__$1 = state_60391;
var statearr_60403_60440 = state_60391__$1;
(statearr_60403_60440[(2)] = inst_60371);

(statearr_60403_60440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (6))){
var state_60391__$1 = state_60391;
var statearr_60404_60441 = state_60391__$1;
(statearr_60404_60441[(2)] = cljs_http.client.delete$);

(statearr_60404_60441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (17))){
var inst_60381 = (state_60391[(8)]);
var inst_60383 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60381);
var inst_60384 = re_frame.core.dispatch(inst_60383);
var state_60391__$1 = state_60391;
var statearr_60405_60442 = state_60391__$1;
(statearr_60405_60442[(2)] = inst_60384);

(statearr_60405_60442[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (3))){
var state_60391__$1 = state_60391;
var statearr_60406_60443 = state_60391__$1;
(statearr_60406_60443[(2)] = cljs_http.client.post);

(statearr_60406_60443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (12))){
var state_60391__$1 = state_60391;
var statearr_60407_60444 = state_60391__$1;
(statearr_60407_60444[(2)] = false);

(statearr_60407_60444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (2))){
var inst_60355 = (state_60391[(2)]);
var inst_60356 = (inst_60355.cljs$core$IFn$_invoke$arity$2 ? inst_60355.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60355.call(null,url,opts));
var state_60391__$1 = state_60391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60391__$1,(7),inst_60356);
} else {
if((state_val_60392 === (19))){
var inst_60389 = (state_60391[(2)]);
var state_60391__$1 = state_60391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60391__$1,inst_60389);
} else {
if((state_val_60392 === (11))){
var state_60391__$1 = state_60391;
var statearr_60408_60445 = state_60391__$1;
(statearr_60408_60445[(2)] = true);

(statearr_60408_60445[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (9))){
var state_60391__$1 = state_60391;
var statearr_60409_60446 = state_60391__$1;
(statearr_60409_60446[(2)] = false);

(statearr_60409_60446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (5))){
var state_60391__$1 = state_60391;
var statearr_60410_60447 = state_60391__$1;
(statearr_60410_60447[(2)] = cljs_http.client.put);

(statearr_60410_60447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (14))){
var inst_60358 = (state_60391[(7)]);
var inst_60376 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60358);
var state_60391__$1 = state_60391;
var statearr_60411_60448 = state_60391__$1;
(statearr_60411_60448[(2)] = inst_60376);

(statearr_60411_60448[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (16))){
var inst_60379 = (state_60391[(9)]);
var inst_60379__$1 = (state_60391[(2)]);
var inst_60380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60379__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60379__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60391__$1 = (function (){var statearr_60412 = state_60391;
(statearr_60412[(9)] = inst_60379__$1);

(statearr_60412[(8)] = inst_60381);

return statearr_60412;
})();
if(cljs.core.truth_(inst_60380)){
var statearr_60413_60449 = state_60391__$1;
(statearr_60413_60449[(1)] = (17));

} else {
var statearr_60414_60450 = state_60391__$1;
(statearr_60414_60450[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (10))){
var inst_60374 = (state_60391[(2)]);
var state_60391__$1 = state_60391;
if(cljs.core.truth_(inst_60374)){
var statearr_60415_60451 = state_60391__$1;
(statearr_60415_60451[(1)] = (14));

} else {
var statearr_60416_60452 = state_60391__$1;
(statearr_60416_60452[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (18))){
var inst_60379 = (state_60391[(9)]);
var inst_60386 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60379);
var inst_60387 = re_frame.core.dispatch(inst_60386);
var state_60391__$1 = state_60391;
var statearr_60417_60453 = state_60391__$1;
(statearr_60417_60453[(2)] = inst_60387);

(statearr_60417_60453[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60392 === (8))){
var inst_60358 = (state_60391[(7)]);
var inst_60363 = inst_60358.cljs$lang$protocol_mask$partition0$;
var inst_60364 = (inst_60363 & (64));
var inst_60365 = inst_60358.cljs$core$ISeq$;
var inst_60366 = (cljs.core.PROTOCOL_SENTINEL === inst_60365);
var inst_60367 = ((inst_60364) || (inst_60366));
var state_60391__$1 = state_60391;
if(cljs.core.truth_(inst_60367)){
var statearr_60418_60454 = state_60391__$1;
(statearr_60418_60454[(1)] = (11));

} else {
var statearr_60419_60455 = state_60391__$1;
(statearr_60419_60455[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var athens$effects$state_machine__42484__auto__ = null;
var athens$effects$state_machine__42484__auto____0 = (function (){
var statearr_60420 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60420[(0)] = athens$effects$state_machine__42484__auto__);

(statearr_60420[(1)] = (1));

return statearr_60420;
});
var athens$effects$state_machine__42484__auto____1 = (function (state_60391){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_60391);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e60421){var ex__42487__auto__ = e60421;
var statearr_60422_60456 = state_60391;
(statearr_60422_60456[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_60391[(4)]))){
var statearr_60423_60457 = state_60391;
(statearr_60423_60457[(1)] = cljs.core.first((state_60391[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60458 = state_60391;
state_60391 = G__60458;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
athens$effects$state_machine__42484__auto__ = function(state_60391){
switch(arguments.length){
case 0:
return athens$effects$state_machine__42484__auto____0.call(this);
case 1:
return athens$effects$state_machine__42484__auto____1.call(this,state_60391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__42484__auto____0;
athens$effects$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__42484__auto____1;
return athens$effects$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_60424 = f__42520__auto__();
(statearr_60424[(6)] = c__42519__auto__);

return statearr_60424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

return c__42519__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"timeout","timeout",-318625318),(function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60425){
var map__60426 = p__60425;
var map__60426__$1 = (((((!((map__60426 == null))))?(((((map__60426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60426):map__60426);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60426__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60426__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60426__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60426__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60428 = action;
var G__60428__$1 = (((G__60428 instanceof cljs.core.Keyword))?G__60428.fqn:null);
switch (G__60428__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return re_frame.core.dispatch(event);
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60428__$1)].join('')));

}
});
})());

//# sourceMappingURL=athens.effects.js.map
