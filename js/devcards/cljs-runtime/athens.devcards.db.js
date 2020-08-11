goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.buttons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(){
var c__42522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_48200){
var state_val_48201 = (state_48200[(1)]);
if((state_val_48201 === (7))){
var state_48200__$1 = state_48200;
var statearr_48202_48239 = state_48200__$1;
(statearr_48202_48239[(2)] = false);

(statearr_48202_48239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (1))){
var inst_48163 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_48164 = [false];
var inst_48165 = cljs.core.PersistentHashMap.fromArrays(inst_48163,inst_48164);
var inst_48166 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48165], 0));
var state_48200__$1 = state_48200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48200__$1,(2),inst_48166);
} else {
if((state_val_48201 === (4))){
var state_48200__$1 = state_48200;
var statearr_48203_48240 = state_48200__$1;
(statearr_48203_48240[(2)] = false);

(statearr_48203_48240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (13))){
var inst_48196 = alert("Failed to retrieve data from GitHub");
var state_48200__$1 = state_48200;
var statearr_48204_48241 = state_48200__$1;
(statearr_48204_48241[(2)] = inst_48196);

(statearr_48204_48241[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (6))){
var state_48200__$1 = state_48200;
var statearr_48205_48242 = state_48200__$1;
(statearr_48205_48242[(2)] = true);

(statearr_48205_48242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (3))){
var inst_48168 = (state_48200[(7)]);
var inst_48173 = inst_48168.cljs$lang$protocol_mask$partition0$;
var inst_48174 = (inst_48173 & (64));
var inst_48175 = inst_48168.cljs$core$ISeq$;
var inst_48176 = (cljs.core.PROTOCOL_SENTINEL === inst_48175);
var inst_48177 = ((inst_48174) || (inst_48176));
var state_48200__$1 = state_48200;
if(cljs.core.truth_(inst_48177)){
var statearr_48206_48244 = state_48200__$1;
(statearr_48206_48244[(1)] = (6));

} else {
var statearr_48207_48245 = state_48200__$1;
(statearr_48207_48245[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (12))){
var inst_48191 = (state_48200[(8)]);
var inst_48193 = athens.db.str_to_db_tx(inst_48191);
var inst_48194 = posh.reagent.transact_BANG_(athens.db.dsdb,inst_48193);
var state_48200__$1 = state_48200;
var statearr_48209_48246 = state_48200__$1;
(statearr_48209_48246[(2)] = inst_48194);

(statearr_48209_48246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (2))){
var inst_48168 = (state_48200[(7)]);
var inst_48168__$1 = (state_48200[(2)]);
var inst_48170 = (inst_48168__$1 == null);
var inst_48171 = cljs.core.not(inst_48170);
var state_48200__$1 = (function (){var statearr_48210 = state_48200;
(statearr_48210[(7)] = inst_48168__$1);

return statearr_48210;
})();
if(inst_48171){
var statearr_48211_48247 = state_48200__$1;
(statearr_48211_48247[(1)] = (3));

} else {
var statearr_48212_48248 = state_48200__$1;
(statearr_48212_48248[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (11))){
var inst_48189 = (state_48200[(2)]);
var inst_48190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48189,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_48191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48189,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_48200__$1 = (function (){var statearr_48213 = state_48200;
(statearr_48213[(8)] = inst_48191);

return statearr_48213;
})();
if(cljs.core.truth_(inst_48190)){
var statearr_48214_48249 = state_48200__$1;
(statearr_48214_48249[(1)] = (12));

} else {
var statearr_48215_48250 = state_48200__$1;
(statearr_48215_48250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (9))){
var inst_48168 = (state_48200[(7)]);
var inst_48186 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48168);
var state_48200__$1 = state_48200;
var statearr_48216_48251 = state_48200__$1;
(statearr_48216_48251[(2)] = inst_48186);

(statearr_48216_48251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (5))){
var inst_48184 = (state_48200[(2)]);
var state_48200__$1 = state_48200;
if(cljs.core.truth_(inst_48184)){
var statearr_48217_48252 = state_48200__$1;
(statearr_48217_48252[(1)] = (9));

} else {
var statearr_48218_48253 = state_48200__$1;
(statearr_48218_48253[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (14))){
var inst_48198 = (state_48200[(2)]);
var state_48200__$1 = state_48200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48200__$1,inst_48198);
} else {
if((state_val_48201 === (10))){
var inst_48168 = (state_48200[(7)]);
var state_48200__$1 = state_48200;
var statearr_48219_48254 = state_48200__$1;
(statearr_48219_48254[(2)] = inst_48168);

(statearr_48219_48254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (8))){
var inst_48181 = (state_48200[(2)]);
var state_48200__$1 = state_48200;
var statearr_48220_48255 = state_48200__$1;
(statearr_48220_48255[(2)] = inst_48181);

(statearr_48220_48255[(1)] = (5));


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
});
return (function() {
var athens$devcards$db$load_real_db_BANG__$_state_machine__42487__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__42487__auto____0 = (function (){
var statearr_48221 = [null,null,null,null,null,null,null,null,null];
(statearr_48221[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__42487__auto__);

(statearr_48221[(1)] = (1));

return statearr_48221;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__42487__auto____1 = (function (state_48200){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_48200);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e48223){var ex__42490__auto__ = e48223;
var statearr_48224_48256 = state_48200;
(statearr_48224_48256[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_48200[(4)]))){
var statearr_48225_48257 = state_48200;
(statearr_48225_48257[(1)] = cljs.core.first((state_48200[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48258 = state_48200;
state_48200 = G__48258;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__42487__auto__ = function(state_48200){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__42487__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__42487__auto____1.call(this,state_48200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__42487__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__42487__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_48226 = f__42523__auto__();
(statearr_48226[(6)] = c__42522__auto__);

return statearr_48226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));

return c__42522__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_();
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
})], null),"Reset DB"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds. Can only press once.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db48230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db48230 = (function (meta48231){
this.meta48231 = meta48231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db48230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48232,meta48231__$1){
var self__ = this;
var _48232__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db48230(meta48231__$1));
}));

(athens.devcards.db.t_athens$devcards$db48230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48232){
var self__ = this;
var _48232__$1 = this;
return self__.meta48231;
}));

(athens.devcards.db.t_athens$devcards$db48230.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db48230.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47720__auto__,devcard_opts__47721__auto__){
var self__ = this;
var this__47720__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47721__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47739__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__47739__auto__)){
return (function (data_atom__47740__auto__,owner__47741__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47739__auto__,data_atom__47740__auto__,owner__47741__auto__], null));
});
} else {
return reagent.core.as_element(v__47739__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47721__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db48230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48231","meta48231",-1292229953,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db48230.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db48230.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db48230");

(athens.devcards.db.t_athens$devcards$db48230.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db/t_athens$devcards$db48230");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db48230.
 */
athens.devcards.db.__GT_t_athens$devcards$db48230 = (function athens$devcards$db$__GT_t_athens$devcards$db48230(meta48231){
return (new athens.devcards.db.t_athens$devcards$db48230(meta48231));
});

}

return (new athens.devcards.db.t_athens$devcards$db48230(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db48234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db48234 = (function (meta48235){
this.meta48235 = meta48235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db48234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48236,meta48235__$1){
var self__ = this;
var _48236__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db48234(meta48235__$1));
}));

(athens.devcards.db.t_athens$devcards$db48234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48236){
var self__ = this;
var _48236__$1 = this;
return self__.meta48235;
}));

(athens.devcards.db.t_athens$devcards$db48234.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db48234.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47720__auto__,devcard_opts__47721__auto__){
var self__ = this;
var this__47720__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47721__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47739__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__47739__auto__)){
return (function (data_atom__47740__auto__,owner__47741__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47739__auto__,data_atom__47740__auto__,owner__47741__auto__], null));
});
} else {
return reagent.core.as_element(v__47739__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47721__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db48234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48235","meta48235",-1105946056,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db48234.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db48234.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db48234");

(athens.devcards.db.t_athens$devcards$db48234.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db/t_athens$devcards$db48234");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db48234.
 */
athens.devcards.db.__GT_t_athens$devcards$db48234 = (function athens$devcards$db$__GT_t_athens$devcards$db48234(meta48235){
return (new athens.devcards.db.t_athens$devcards$db48234(meta48235));
});

}

return (new athens.devcards.db.t_athens$devcards$db48234(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
