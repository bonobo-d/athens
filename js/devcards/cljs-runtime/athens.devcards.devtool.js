goog.provide('athens.devcards.devtool');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.db');
goog.require('athens.views.buttons');
goog.require('athens.views.devtool');
goog.require('datascript.db');
goog.require('devcards.core');
goog.require('me.tonsky.persistent_sorted_set');
goog.require('reagent.ratom');
goog.require('shadow.remote.runtime.cljs.browser');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool60084 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool60084 = (function (meta60085){
this.meta60085 = meta60085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool60084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60086,meta60085__$1){
var self__ = this;
var _60086__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool60084(meta60085__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60086){
var self__ = this;
var _60086__$1 = this;
return self__.meta60085;
}));

(athens.devcards.devtool.t_athens$devcards$devtool60084.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool60084.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47717__auto__,devcard_opts__47718__auto__){
var self__ = this;
var this__47717__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47718__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47736__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47736__auto__)){
return (function (data_atom__47737__auto__,owner__47738__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47736__auto__,data_atom__47737__auto__,owner__47738__auto__], null));
});
} else {
return reagent.core.as_element(v__47736__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47718__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60085","meta60085",1716041424,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool60084.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool60084.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool60084");

(athens.devcards.devtool.t_athens$devcards$devtool60084.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.devtool/t_athens$devcards$devtool60084");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool60084.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool60084 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool60084(meta60085){
return (new athens.devcards.devtool.t_athens$devcards$devtool60084(meta60085));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool60084(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool60087 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool60087 = (function (meta60088){
this.meta60088 = meta60088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool60087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60089,meta60088__$1){
var self__ = this;
var _60089__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool60087(meta60088__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60089){
var self__ = this;
var _60089__$1 = this;
return self__.meta60088;
}));

(athens.devcards.devtool.t_athens$devcards$devtool60087.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool60087.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47717__auto__,devcard_opts__47718__auto__){
var self__ = this;
var this__47717__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47718__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47736__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),athens.views.devtool.handler], null),"Create Test Pages and Blocks"], null);
if(cljs.core.fn_QMARK_(v__47736__auto__)){
return (function (data_atom__47737__auto__,owner__47738__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47736__auto__,data_atom__47737__auto__,owner__47738__auto__], null));
});
} else {
return reagent.core.as_element(v__47736__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47718__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60088","meta60088",-456268918,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool60087.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool60087.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool60087");

(athens.devcards.devtool.t_athens$devcards$devtool60087.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.devtool/t_athens$devcards$devtool60087");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool60087.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool60087 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool60087(meta60088){
return (new athens.devcards.devtool.t_athens$devcards$devtool60087(meta60088));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool60087(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool60090 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool60090 = (function (meta60091){
this.meta60091 = meta60091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool60090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60092,meta60091__$1){
var self__ = this;
var _60092__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool60090(meta60091__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60092){
var self__ = this;
var _60092__$1 = this;
return self__.meta60091;
}));

(athens.devcards.devtool.t_athens$devcards$devtool60090.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool60090.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47717__auto__,devcard_opts__47718__auto__){
var self__ = this;
var this__47717__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47718__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47736__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.views.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"eval-str","eval-str",752008756),new cljs.core.Keyword(null,"eval-str","eval-str",752008756).cljs$core$IFn$_invoke$arity$1(athens.views.devtool.initial_state));

return athens.views.devtool.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__47736__auto__)){
return (function (data_atom__47737__auto__,owner__47738__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47736__auto__,data_atom__47737__auto__,owner__47738__auto__], null));
});
} else {
return reagent.core.as_element(v__47736__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47718__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60091","meta60091",-1011135214,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool60090.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool60090.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool60090");

(athens.devcards.devtool.t_athens$devcards$devtool60090.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.devtool/t_athens$devcards$devtool60090");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool60090.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool60090 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool60090(meta60091){
return (new athens.devcards.devtool.t_athens$devcards$devtool60090(meta60091));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool60090(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Devtool-box","Devtool-box",1953946451)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Devtool-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool60093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool60093 = (function (meta60094){
this.meta60094 = meta60094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool60093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60095,meta60094__$1){
var self__ = this;
var _60095__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool60093(meta60094__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60095){
var self__ = this;
var _60095__$1 = this;
return self__.meta60094;
}));

(athens.devcards.devtool.t_athens$devcards$devtool60093.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool60093.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47717__auto__,devcard_opts__47718__auto__){
var self__ = this;
var this__47717__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47718__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47736__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_prompt_el], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.devtool.devtool_component], null)], null);
if(cljs.core.fn_QMARK_(v__47736__auto__)){
return (function (data_atom__47737__auto__,owner__47738__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47736__auto__,data_atom__47737__auto__,owner__47738__auto__], null));
});
} else {
return reagent.core.as_element(v__47736__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47718__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60094","meta60094",1921843709,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool60093.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool60093.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool60093");

(athens.devcards.devtool.t_athens$devcards$devtool60093.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.devtool/t_athens$devcards$devtool60093");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool60093.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool60093 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool60093(meta60094){
return (new athens.devcards.devtool.t_athens$devcards$devtool60093(meta60094));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool60093(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.devtool.js.map
