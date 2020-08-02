goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.data_browser');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('reagent.core');
goog.require('sci.core');
goog.require('goog.events.KeyCodes');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in browsing the datascript database\n\n  You can use these devcards to explore the Athens datascript database.\n\n  Initial data:\n  - Start by loading initial data with the \"Load Real Data\" button.\n  - This will load some sample datoms from the ego.datoms file\n\n  Executing queries:\n  - The browse-box uses [sci](https://github.com/borkdude/sci) to execute datascript queries.\n  - In addition to the (non-side-effecting) clojure.core functions, the following bindings are available:\n  - `athens/db` -> the datascript connection, dereference (`@`) to get the current database value\n  - `d/q` -> for querying the database\n  - `d/pull` -> pull one or more attributes of an entity, returns a map\n  - `d/pull-many` -> like `d/pull`, but pulls many entities at once\n  - Execute the query by pressing `shift-enter`\n\n  Browsing:\n  - The browser is a simple html table translating the query result into rows and cells.\n  - Browsing is possible if you've used a pull expression (in a query or with `d/pull` or `d/pull-many`).\n  - If you click a link, it will generate a new query and evaluate it.\n\n  History:\n  - Devcards keeps a history for us. Use the arrows at the bottom to navigate back to earlier states.\n\n  Possible improvements:\n  - Right now navigation is only possible by using a pull expression. By analysing queries it might also be possible for all other queries.\n  - No transctions are currently allowed, but this can easily be changed by adding `d/transact` to sci's bindings.\n  - There is absolutely no styling, some minimal styling would probably make reading the table easier.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.db_boxes.initial_box = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)"], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.db_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.initial_box);
}
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__60760){
var map__60761 = p__60760;
var map__60761__$1 = (((((!((map__60761 == null))))?(((((map__60761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60761):map__60761);
var box = map__60761__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60761__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__60763 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e60766){if((e60766 instanceof Error)){
var e = e60766;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e60766;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60763,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60763,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__60767_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60767_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__43454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_60807){
var state_val_60808 = (state_60807[(1)]);
if((state_val_60808 === (7))){
var state_60807__$1 = state_60807;
var statearr_60809_60869 = state_60807__$1;
(statearr_60809_60869[(2)] = false);

(statearr_60809_60869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60808 === (1))){
var inst_60769 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_60770 = [false];
var inst_60771 = cljs.core.PersistentHashMap.fromArrays(inst_60769,inst_60770);
var inst_60772 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60771], 0));
var state_60807__$1 = state_60807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60807__$1,(2),inst_60772);
} else {
if((state_val_60808 === (4))){
var state_60807__$1 = state_60807;
var statearr_60810_60870 = state_60807__$1;
(statearr_60810_60870[(2)] = false);

(statearr_60810_60870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60808 === (13))){
var inst_60803 = alert("Failed to retrieve data from GitHub");
var state_60807__$1 = state_60807;
var statearr_60811_60871 = state_60807__$1;
(statearr_60811_60871[(2)] = inst_60803);

(statearr_60811_60871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60808 === (6))){
var state_60807__$1 = state_60807;
var statearr_60812_60872 = state_60807__$1;
(statearr_60812_60872[(2)] = true);

(statearr_60812_60872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60808 === (3))){
var inst_60774 = (state_60807[(7)]);
var inst_60779 = inst_60774.cljs$lang$protocol_mask$partition0$;
var inst_60780 = (inst_60779 & (64));
var inst_60781 = inst_60774.cljs$core$ISeq$;
var inst_60782 = (cljs.core.PROTOCOL_SENTINEL === inst_60781);
var inst_60783 = ((inst_60780) || (inst_60782));
var state_60807__$1 = state_60807;
if(cljs.core.truth_(inst_60783)){
var statearr_60813_60873 = state_60807__$1;
(statearr_60813_60873[(1)] = (6));

} else {
var statearr_60814_60874 = state_60807__$1;
(statearr_60814_60874[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60808 === (12))){
var inst_60797 = (state_60807[(8)]);
var inst_60799 = athens.db.str_to_db_tx(inst_60797);
var inst_60800 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_60799);
var inst_60801 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_60807__$1 = (function (){var statearr_60815 = state_60807;
(statearr_60815[(9)] = inst_60800);

return statearr_60815;
})();
var statearr_60816_60875 = state_60807__$1;
(statearr_60816_60875[(2)] = inst_60801);

(statearr_60816_60875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60808 === (2))){
var inst_60774 = (state_60807[(7)]);
var inst_60774__$1 = (state_60807[(2)]);
var inst_60776 = (inst_60774__$1 == null);
var inst_60777 = cljs.core.not(inst_60776);
var state_60807__$1 = (function (){var statearr_60817 = state_60807;
(statearr_60817[(7)] = inst_60774__$1);

return statearr_60817;
})();
if(inst_60777){
var statearr_60818_60876 = state_60807__$1;
(statearr_60818_60876[(1)] = (3));

} else {
var statearr_60819_60877 = state_60807__$1;
(statearr_60819_60877[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60808 === (11))){
var inst_60795 = (state_60807[(2)]);
var inst_60796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60795,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60795,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60807__$1 = (function (){var statearr_60820 = state_60807;
(statearr_60820[(8)] = inst_60797);

return statearr_60820;
})();
if(cljs.core.truth_(inst_60796)){
var statearr_60821_60878 = state_60807__$1;
(statearr_60821_60878[(1)] = (12));

} else {
var statearr_60822_60879 = state_60807__$1;
(statearr_60822_60879[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60808 === (9))){
var inst_60774 = (state_60807[(7)]);
var inst_60792 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60774);
var state_60807__$1 = state_60807;
var statearr_60823_60880 = state_60807__$1;
(statearr_60823_60880[(2)] = inst_60792);

(statearr_60823_60880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60808 === (5))){
var inst_60790 = (state_60807[(2)]);
var state_60807__$1 = state_60807;
if(cljs.core.truth_(inst_60790)){
var statearr_60824_60881 = state_60807__$1;
(statearr_60824_60881[(1)] = (9));

} else {
var statearr_60825_60882 = state_60807__$1;
(statearr_60825_60882[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60808 === (14))){
var inst_60805 = (state_60807[(2)]);
var state_60807__$1 = state_60807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60807__$1,inst_60805);
} else {
if((state_val_60808 === (10))){
var inst_60774 = (state_60807[(7)]);
var state_60807__$1 = state_60807;
var statearr_60826_60883 = state_60807__$1;
(statearr_60826_60883[(2)] = inst_60774);

(statearr_60826_60883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60808 === (8))){
var inst_60787 = (state_60807[(2)]);
var state_60807__$1 = state_60807;
var statearr_60827_60884 = state_60807__$1;
(statearr_60827_60884[(2)] = inst_60787);

(statearr_60827_60884[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__43389__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__43389__auto____0 = (function (){
var statearr_60828 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60828[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__43389__auto__);

(statearr_60828[(1)] = (1));

return statearr_60828;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__43389__auto____1 = (function (state_60807){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_60807);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e60829){if((e60829 instanceof Object)){
var ex__43392__auto__ = e60829;
var statearr_60830_60885 = state_60807;
(statearr_60830_60885[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60886 = state_60807;
state_60807 = G__60886;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__43389__auto__ = function(state_60807){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__43389__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__43389__auto____1.call(this,state_60807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__43389__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__43389__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_60831 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_60831[(6)] = c__43454__auto__);

return statearr_60831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));

return c__43454__auto__;
});
athens.devcards.db_boxes.load_real_db_button = (function athens$devcards$db_boxes$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db_boxes.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60832 = (function (meta60833){
this.meta60833 = meta60833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60834,meta60833__$1){
var self__ = this;
var _60834__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60832(meta60833__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60834){
var self__ = this;
var _60834__$1 = this;
return self__.meta60833;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60832.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60832.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48669__auto__,devcard_opts__48670__auto__){
var self__ = this;
var this__48669__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48670__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48688__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__48688__auto__)){
return (function (data_atom__48689__auto__,owner__48690__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48688__auto__,data_atom__48689__auto__,owner__48690__auto__], null));
});
} else {
return reagent.core.as_element(v__48688__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48670__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60833","meta60833",-962653981,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60832.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60832.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60832");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60832.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60832");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60832.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60832 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60832(meta60833){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60832(meta60833));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60832(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60835 = (function (meta60836){
this.meta60836 = meta60836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60837,meta60836__$1){
var self__ = this;
var _60837__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60835(meta60836__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60837){
var self__ = this;
var _60837__$1 = this;
return self__.meta60836;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60835.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60835.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48669__auto__,devcard_opts__48670__auto__){
var self__ = this;
var this__48669__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48670__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48688__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__48688__auto__)){
return (function (data_atom__48689__auto__,owner__48690__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48688__auto__,data_atom__48689__auto__,owner__48690__auto__], null));
});
} else {
return reagent.core.as_element(v__48688__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48670__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60836","meta60836",827931600,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60835.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60835.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60835");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60835.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60835");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60835.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60835 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60835(meta60836){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60835(meta60836));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60835(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__60839 = arguments.length;
switch (G__60839) {
case 1:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1 = (function (id){
return ["(d/pull @athens/db '[*] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2 = (function (attr,id){
return ["(d/pull @athens/db '[*] [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),"])"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$lang$maxFixedArity = 2);

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__60840){
var map__60841 = p__60840;
var map__60841__$1 = (((((!((map__60841 == null))))?(((((map__60841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60841):map__60841);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60841__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60841__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60841__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(value)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return value;
}
})()));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(athens.views.data_browser.attr_unique_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2(attr,value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(((athens.views.data_browser.attr_many_QMARK_(attr)) && (athens.views.data_browser.attr_ref_QMARK_(attr)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60843(s__60844){
return (new cljs.core.LazySeq(null,(function (){
var s__60844__$1 = s__60844;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60844__$1);
if(temp__5735__auto__){
var s__60844__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60844__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60844__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60846 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60845 = (0);
while(true){
if((i__60845 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60845);
cljs.core.chunk_append(b__60846,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60847 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60847) : athens.devcards.db_boxes.cell.call(null,G__60847));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60888 = (i__60845 + (1));
i__60845 = G__60888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60846),athens$devcards$db_boxes$cell_$_iter__60843(cljs.core.chunk_rest(s__60844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60846),null);
}
} else {
var v = cljs.core.first(s__60844__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60848 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60848) : athens.devcards.db_boxes.cell.call(null,G__60848));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60843(cljs.core.rest(s__60844__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
if(cljs.core.truth_(athens.views.data_browser.attr_reverse_QMARK_(attr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60849(s__60850){
return (new cljs.core.LazySeq(null,(function (){
var s__60850__$1 = s__60850;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60850__$1);
if(temp__5735__auto__){
var s__60850__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60850__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60850__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60852 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60851 = (0);
while(true){
if((i__60851 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60851);
cljs.core.chunk_append(b__60852,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60853 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60853) : athens.devcards.db_boxes.cell.call(null,G__60853));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60889 = (i__60851 + (1));
i__60851 = G__60889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60852),athens$devcards$db_boxes$cell_$_iter__60849(cljs.core.chunk_rest(s__60850__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60852),null);
}
} else {
var v = cljs.core.first(s__60850__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60854 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60854) : athens.devcards.db_boxes.cell.call(null,G__60854));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60849(cljs.core.rest(s__60850__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
if(athens.views.data_browser.attr_many_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__60855(s__60856){
return (new cljs.core.LazySeq(null,(function (){
var s__60856__$1 = s__60856;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60856__$1);
if(temp__5735__auto__){
var s__60856__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60856__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60856__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60858 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60857 = (0);
while(true){
if((i__60857 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60857);
cljs.core.chunk_append(b__60858,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60859 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60859) : athens.devcards.db_boxes.cell.call(null,G__60859));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__60890 = (i__60857 + (1));
i__60857 = G__60890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60858),athens$devcards$db_boxes$cell_$_iter__60855(cljs.core.chunk_rest(s__60856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60858),null);
}
} else {
var v = cljs.core.first(s__60856__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__60860 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__60860) : athens.devcards.db_boxes.cell.call(null,G__60860));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__60855(cljs.core.rest(s__60856__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

}
}
}
}
}
} else {
return "";
}
});
athens.devcards.db_boxes.error_component = (function athens$devcards$db_boxes$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.devcards.db_boxes.handle_box_change_BANG_ = (function athens$devcards$db_boxes$handle_box_change_BANG_(e){
return athens.devcards.db_boxes.update_box_BANG_(e.target.value);
});
athens.devcards.db_boxes.handle_return_key_BANG_ = (function athens$devcards$db_boxes$handle_return_key_BANG_(e){
e.preventDefault();

return athens.devcards.db_boxes.eval_box_BANG_();
});
athens.devcards.db_boxes.insert_tab = (function athens$devcards$db_boxes$insert_tab(s,pos){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),pos),"  ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,pos)].join('');
});
athens.devcards.db_boxes.handle_tab_key_BANG_ = (function athens$devcards$db_boxes$handle_tab_key_BANG_(e){
var t = e.target;
var v = t.value;
var pos = t.selectionStart;
e.preventDefault();

athens.devcards.db_boxes.update_box_BANG_(athens.devcards.db_boxes.insert_tab(v,pos));

return (t.selectionEnd = ((2) + pos));
});
athens.devcards.db_boxes.handle_box_key_down_BANG_ = (function athens$devcards$db_boxes$handle_box_key_down_BANG_(e){
var key = e.keyCode;
var shift_QMARK_ = e.shiftKey;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ENTER)){
if(cljs.core.truth_(shift_QMARK_)){
return athens.devcards.db_boxes.handle_return_key_BANG_(e);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.TAB)){
return athens.devcards.db_boxes.handle_tab_key_BANG_(e);
} else {
return null;

}
}
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(box_state,_){
var map__60861 = cljs.core.deref(box_state);
var map__60861__$1 = (((((!((map__60861 == null))))?(((((map__60861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60861):map__60861);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60861__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60861__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60861__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.browser,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.db_boxes.cell], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.error_component,result], null))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60863 = (function (meta60864){
this.meta60864 = meta60864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60865,meta60864__$1){
var self__ = this;
var _60865__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60863(meta60864__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60865){
var self__ = this;
var _60865__$1 = this;
return self__.meta60864;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60863.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60863.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48669__auto__,devcard_opts__48670__auto__){
var self__ = this;
var this__48669__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48670__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48688__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__48688__auto__)){
return (function (data_atom__48689__auto__,owner__48690__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48688__auto__,data_atom__48689__auto__,owner__48690__auto__], null));
});
} else {
return reagent.core.as_element(v__48688__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48670__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60864","meta60864",-1273763926,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60863.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60863.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60863");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60863.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60863");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60863.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60863 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60863(meta60864){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60863(meta60864));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60863(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes60866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes60866 = (function (meta60867){
this.meta60867 = meta60867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes60866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60868,meta60867__$1){
var self__ = this;
var _60868__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60866(meta60867__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60868){
var self__ = this;
var _60868__$1 = this;
return self__.meta60867;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60866.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60866.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48669__auto__,devcard_opts__48670__auto__){
var self__ = this;
var this__48669__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48670__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48688__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__48688__auto__)){
return (function (data_atom__48689__auto__,owner__48690__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48688__auto__,data_atom__48689__auto__,owner__48690__auto__], null));
});
} else {
return reagent.core.as_element(v__48688__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48670__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60867","meta60867",-1450056675,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60866.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60866.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes60866");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes60866.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes60866");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes60866.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes60866 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes60866(meta60867){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60866(meta60867));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes60866(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
