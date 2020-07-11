goog.provide('garden.units');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('garden.types');
goog.require('garden.util');
garden.units.length_units = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"in","in",-1531184865)]);
garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"rad","rad",-833983012),null,new cljs.core.Keyword(null,"grad","grad",1125187229),null], null), null);
garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null], null), null);
garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kHz","kHz",240398466),null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916),null], null), null);
garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dppx","dppx",1920508843),null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236),null,new cljs.core.Keyword(null,"dpi","dpi",-986162832),null], null), null);
/**
 * True if x is of type CSSUnit.
 */
garden.units.unit_QMARK_ = (function garden$units$unit_QMARK_(x){
return (x instanceof garden.types.CSSUnit);
});
garden.units.length_QMARK_ = (function garden$units$length_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.length_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.angle_QMARK_ = (function garden$units$angle_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.angular_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.time_QMARK_ = (function garden$units$time_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.time_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.frequency_QMARK_ = (function garden$units$frequency_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.frequency_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
garden.units.resolution_QMARK_ = (function garden$units$resolution_QMARK_(x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core.contains_QMARK_(garden.units.resolution_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Map associating CSS unit types to their conversion values.
 */
garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"kHz","kHz",240398466),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"rem","rem",-976484757),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"Hz","Hz",-1958732916),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"deg","deg",-681556081),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"rad","rad",-833983012),new cljs.core.Keyword(null,"grad","grad",1125187229),new cljs.core.Keyword(null,"in","in",-1531184865)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mm","mm",-1652850560),(1),new cljs.core.Keyword(null,"pt","pt",556460867),2.83464567,new cljs.core.Keyword(null,"px","px",281329899),3.7795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kHz","kHz",240398466),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"px","px",281329899),1.3333333333], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"px","px",281329899),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rem","rem",-976484757),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"em","em",707813035),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Hz","Hz",-1958732916),(1),new cljs.core.Keyword(null,"kHz","kHz",240398466),0.001], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mm","mm",-1652850560),4.23333333,new cljs.core.Keyword(null,"pc","pc",512913453),(1),new cljs.core.Keyword(null,"pt","pt",556460867),(12),new cljs.core.Keyword(null,"px","px",281329899),(16)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),(1)]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"s","s",1705939918),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),(1),new cljs.core.Keyword(null,"grad","grad",1125187229),1.111111111,new cljs.core.Keyword(null,"rad","rad",-833983012),0.0174532925,new cljs.core.Keyword(null,"turn","turn",75759344),0.002777778], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cm","cm",540591536),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),(10),new cljs.core.Keyword(null,"pc","pc",512913453),2.36220473,new cljs.core.Keyword(null,"pt","pt",556460867),28.3464567,new cljs.core.Keyword(null,"px","px",281329899),37.795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rad","rad",-833983012),(1),new cljs.core.Keyword(null,"turn","turn",75759344),0.159154943], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grad","grad",1125187229),(1),new cljs.core.Keyword(null,"rad","rad",-833983012),63.661977237,new cljs.core.Keyword(null,"turn","turn",75759344),0.0025], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cm","cm",540591536),2.54,new cljs.core.Keyword(null,"in","in",-1531184865),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),25.4,new cljs.core.Keyword(null,"pc","pc",512913453),(6),new cljs.core.Keyword(null,"pt","pt",556460867),(72),new cljs.core.Keyword(null,"px","px",281329899),(96)], null)]);
/**
 * True if unit is a key of convertable-units, false otherwise.
 */
garden.units.convertable_QMARK_ = (function garden$units$convertable_QMARK_(unit){
return cljs.core.contains_QMARK_(garden.units.conversions,unit);
});
/**
 * Convert a Unit with :unit left to a Unit with :unit right if possible.
 */
garden.units.convert = (function garden$units$convert(p__33913,right){
var map__33914 = p__33913;
var map__33914__$1 = (((((!((map__33914 == null))))?(((((map__33914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33914):map__33914);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33914__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33914__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(cljs.core.every_QMARK_(garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))){
var v1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));
var v2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));
if(cljs.core.truth_(v1)){
return (new garden.types.CSSUnit(right,(v1 * m),null,null,null));
} else {
if(cljs.core.truth_(v2)){
return (new garden.types.CSSUnit(right,(m / v2),null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Can't convert %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(left),cljs.core.name(right)], 0)),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
var x = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconvertible unit ",cljs.core.name(x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Regular expression for matching a CSS unit. The magnitude
 *           and unit are captured.
 */
garden.units.unit_re = /([+-]?\d+(?:\.?\d+)?)(p[xtc]|in|[cm]m|%|r?em|ex|ch|v(?:[wh]|m(?:in|ax))|deg|g?rad|turn|m?s|k?Hz|dp(?:i|cm|px))/;
/**
 * Read a `CSSUnit` object from the string `s`.
 */
garden.units.read_unit = (function garden$units$read_unit(s){
var temp__5735__auto__ = cljs.core.re_matches(garden.units.unit_re,s);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__33916 = temp__5735__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33916,(0),null);
var magnitude = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33916,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33916,(2),null);
var unit__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit);
var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(magnitude):(0));
return (new garden.types.CSSUnit(unit__$1,magnitude__$1,null,null,null));
} else {
return null;
}
});
/**
 * Creates a function for verifying the given unit type.
 */
garden.units.make_unit_predicate = (function garden$units$make_unit_predicate(unit){
return (function (x){
return ((garden.units.unit_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x),unit)));
});
});
/**
 * Creates a function for creating and converting `CSSUnit`s for the
 *   given unit. If a number n is passed the function it will produce a
 *   new `CSSUnit` record with a the magnitude set to n. If a `CSSUnit`
 *   is passed the function will attempt to convert it.
 */
garden.units.make_unit_fn = (function garden$units$make_unit_fn(unit){
return (function (x){
if(typeof x === 'number'){
return (new garden.types.CSSUnit(unit,x,null,null,null));
} else {
if(garden.units.unit_QMARK_(x)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((unit.cljs$core$IFn$_invoke$arity$1 ? unit.cljs$core$IFn$_invoke$arity$1(x) : unit.call(null,x)),unit)){
return x;
} else {
return garden.units.convert(x,unit);
}
} else {
var ex_message = garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Unable to convert %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,cljs.core.name(unit)], 0));
var ex_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(ex_message,ex_data);

}
}
});
});
/**
 * Create a addition function for adding Units.
 */
garden.units.make_unit_adder = (function garden$units$make_unit_adder(unit){
var u = garden.units.make_unit_fn(unit);
return (function() {
var garden$units$make_unit_adder_$_u_PLUS_ = null;
var garden$units$make_unit_adder_$_u_PLUS___0 = (function (){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1((0)) : u.call(null,(0)));
});
var garden$units$make_unit_adder_$_u_PLUS___1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var garden$units$make_unit_adder_$_u_PLUS___2 = (function (x,y){
var map__33919 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__33919__$1 = (((((!((map__33919 == null))))?(((((map__33919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33919):map__33919);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33919__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__33920 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__33920__$1 = (((((!((map__33920 == null))))?(((((map__33920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33920):map__33920);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33920__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__33923 = (m1 + m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__33923) : u.call(null,G__33923));
});
var garden$units$make_unit_adder_$_u_PLUS___3 = (function() { 
var G__33963__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_adder_$_u_PLUS_,garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__33963 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__33964__i = 0, G__33964__a = new Array(arguments.length -  2);
while (G__33964__i < G__33964__a.length) {G__33964__a[G__33964__i] = arguments[G__33964__i + 2]; ++G__33964__i;}
  more = new cljs.core.IndexedSeq(G__33964__a,0,null);
} 
return G__33963__delegate.call(this,x,y,more);};
G__33963.cljs$lang$maxFixedArity = 2;
G__33963.cljs$lang$applyTo = (function (arglist__33965){
var x = cljs.core.first(arglist__33965);
arglist__33965 = cljs.core.next(arglist__33965);
var y = cljs.core.first(arglist__33965);
var more = cljs.core.rest(arglist__33965);
return G__33963__delegate(x,y,more);
});
G__33963.cljs$core$IFn$_invoke$arity$variadic = G__33963__delegate;
return G__33963;
})()
;
garden$units$make_unit_adder_$_u_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return garden$units$make_unit_adder_$_u_PLUS___0.call(this);
case 1:
return garden$units$make_unit_adder_$_u_PLUS___1.call(this,x);
case 2:
return garden$units$make_unit_adder_$_u_PLUS___2.call(this,x,y);
default:
var G__33966 = null;
if (arguments.length > 2) {
var G__33967__i = 0, G__33967__a = new Array(arguments.length -  2);
while (G__33967__i < G__33967__a.length) {G__33967__a[G__33967__i] = arguments[G__33967__i + 2]; ++G__33967__i;}
G__33966 = new cljs.core.IndexedSeq(G__33967__a,0,null);
}
return garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__33966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$applyTo = garden$units$make_unit_adder_$_u_PLUS___3.cljs$lang$applyTo;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$0 = garden$units$make_unit_adder_$_u_PLUS___0;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_adder_$_u_PLUS___1;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_adder_$_u_PLUS___2;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_adder_$_u_PLUS_;
})()
});
/**
 * Create a subtraction function for subtracting Units.
 */
garden.units.make_unit_subtractor = (function garden$units$make_unit_subtractor(unit){
var u = garden.units.make_unit_fn(unit);
return (function() {
var garden$units$make_unit_subtractor_$_u_ = null;
var garden$units$make_unit_subtractor_$_u___1 = (function (x){
var G__33924 = (- x);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__33924) : u.call(null,G__33924));
});
var garden$units$make_unit_subtractor_$_u___2 = (function (x,y){
var map__33925 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__33925__$1 = (((((!((map__33925 == null))))?(((((map__33925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33925):map__33925);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33925__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__33926 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__33926__$1 = (((((!((map__33926 == null))))?(((((map__33926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33926):map__33926);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33926__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__33929 = (m1 - m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__33929) : u.call(null,G__33929));
});
var garden$units$make_unit_subtractor_$_u___3 = (function() { 
var G__33970__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_subtractor_$_u_,garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__33970 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__33975__i = 0, G__33975__a = new Array(arguments.length -  2);
while (G__33975__i < G__33975__a.length) {G__33975__a[G__33975__i] = arguments[G__33975__i + 2]; ++G__33975__i;}
  more = new cljs.core.IndexedSeq(G__33975__a,0,null);
} 
return G__33970__delegate.call(this,x,y,more);};
G__33970.cljs$lang$maxFixedArity = 2;
G__33970.cljs$lang$applyTo = (function (arglist__33976){
var x = cljs.core.first(arglist__33976);
arglist__33976 = cljs.core.next(arglist__33976);
var y = cljs.core.first(arglist__33976);
var more = cljs.core.rest(arglist__33976);
return G__33970__delegate(x,y,more);
});
G__33970.cljs$core$IFn$_invoke$arity$variadic = G__33970__delegate;
return G__33970;
})()
;
garden$units$make_unit_subtractor_$_u_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$units$make_unit_subtractor_$_u___1.call(this,x);
case 2:
return garden$units$make_unit_subtractor_$_u___2.call(this,x,y);
default:
var G__33977 = null;
if (arguments.length > 2) {
var G__33978__i = 0, G__33978__a = new Array(arguments.length -  2);
while (G__33978__i < G__33978__a.length) {G__33978__a[G__33978__i] = arguments[G__33978__i + 2]; ++G__33978__i;}
G__33977 = new cljs.core.IndexedSeq(G__33978__a,0,null);
}
return garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__33977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_subtractor_$_u_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_subtractor_$_u_.cljs$lang$applyTo = garden$units$make_unit_subtractor_$_u___3.cljs$lang$applyTo;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_subtractor_$_u___1;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_subtractor_$_u___2;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_subtractor_$_u_;
})()
});
/**
 * Create a multiplication function for multiplying Units.
 */
garden.units.make_unit_multiplier = (function garden$units$make_unit_multiplier(unit){
var u = garden.units.make_unit_fn(unit);
var op = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"%","%",1704198600)))?(function garden$units$make_unit_multiplier_$_percent_STAR_(x,y){
return ((x * y) / (100));
}):cljs.core._STAR_);
return (function() {
var garden$units$make_unit_multiplier_$_u_STAR_ = null;
var garden$units$make_unit_multiplier_$_u_STAR___0 = (function (){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1((1)) : u.call(null,(1)));
});
var garden$units$make_unit_multiplier_$_u_STAR___1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var garden$units$make_unit_multiplier_$_u_STAR___2 = (function (x,y){
var map__33930 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__33930__$1 = (((((!((map__33930 == null))))?(((((map__33930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33930):map__33930);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33930__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__33931 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__33931__$1 = (((((!((map__33931 == null))))?(((((map__33931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33931):map__33931);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33931__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__33934 = (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(m1,m2) : op.call(null,m1,m2));
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__33934) : u.call(null,G__33934));
});
var garden$units$make_unit_multiplier_$_u_STAR___3 = (function() { 
var G__33979__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_multiplier_$_u_STAR_,garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__33979 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__33980__i = 0, G__33980__a = new Array(arguments.length -  2);
while (G__33980__i < G__33980__a.length) {G__33980__a[G__33980__i] = arguments[G__33980__i + 2]; ++G__33980__i;}
  more = new cljs.core.IndexedSeq(G__33980__a,0,null);
} 
return G__33979__delegate.call(this,x,y,more);};
G__33979.cljs$lang$maxFixedArity = 2;
G__33979.cljs$lang$applyTo = (function (arglist__33981){
var x = cljs.core.first(arglist__33981);
arglist__33981 = cljs.core.next(arglist__33981);
var y = cljs.core.first(arglist__33981);
var more = cljs.core.rest(arglist__33981);
return G__33979__delegate(x,y,more);
});
G__33979.cljs$core$IFn$_invoke$arity$variadic = G__33979__delegate;
return G__33979;
})()
;
garden$units$make_unit_multiplier_$_u_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return garden$units$make_unit_multiplier_$_u_STAR___0.call(this);
case 1:
return garden$units$make_unit_multiplier_$_u_STAR___1.call(this,x);
case 2:
return garden$units$make_unit_multiplier_$_u_STAR___2.call(this,x,y);
default:
var G__33982 = null;
if (arguments.length > 2) {
var G__33983__i = 0, G__33983__a = new Array(arguments.length -  2);
while (G__33983__i < G__33983__a.length) {G__33983__a[G__33983__i] = arguments[G__33983__i + 2]; ++G__33983__i;}
G__33982 = new cljs.core.IndexedSeq(G__33983__a,0,null);
}
return garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__33982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$applyTo = garden$units$make_unit_multiplier_$_u_STAR___3.cljs$lang$applyTo;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$0 = garden$units$make_unit_multiplier_$_u_STAR___0;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_multiplier_$_u_STAR___1;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_multiplier_$_u_STAR___2;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_multiplier_$_u_STAR_;
})()
});
/**
 * Create a division function for dividing Units.
 */
garden.units.make_unit_divider = (function garden$units$make_unit_divider(unit){
var u = garden.units.make_unit_fn(unit);
var op = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"%","%",1704198600)))?(function garden$units$make_unit_divider_$_percent_div(x,y){
return ((100) * (x / y));
}):cljs.core._SLASH_);
return (function() {
var garden$units$make_unit_divider_$_ud = null;
var garden$units$make_unit_divider_$_ud__1 = (function (x){
var G__33935 = ((1) / x);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__33935) : u.call(null,G__33935));
});
var garden$units$make_unit_divider_$_ud__2 = (function (x,y){
var map__33936 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__33936__$1 = (((((!((map__33936 == null))))?(((((map__33936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33936):map__33936);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33936__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__33937 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__33937__$1 = (((((!((map__33937 == null))))?(((((map__33937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33937):map__33937);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33937__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__33940 = (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(m1,m2) : op.call(null,m1,m2));
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__33940) : u.call(null,G__33940));
});
var garden$units$make_unit_divider_$_ud__3 = (function() { 
var G__33984__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_divider_$_ud,garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__33984 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__33985__i = 0, G__33985__a = new Array(arguments.length -  2);
while (G__33985__i < G__33985__a.length) {G__33985__a[G__33985__i] = arguments[G__33985__i + 2]; ++G__33985__i;}
  more = new cljs.core.IndexedSeq(G__33985__a,0,null);
} 
return G__33984__delegate.call(this,x,y,more);};
G__33984.cljs$lang$maxFixedArity = 2;
G__33984.cljs$lang$applyTo = (function (arglist__33986){
var x = cljs.core.first(arglist__33986);
arglist__33986 = cljs.core.next(arglist__33986);
var y = cljs.core.first(arglist__33986);
var more = cljs.core.rest(arglist__33986);
return G__33984__delegate(x,y,more);
});
G__33984.cljs$core$IFn$_invoke$arity$variadic = G__33984__delegate;
return G__33984;
})()
;
garden$units$make_unit_divider_$_ud = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$units$make_unit_divider_$_ud__1.call(this,x);
case 2:
return garden$units$make_unit_divider_$_ud__2.call(this,x,y);
default:
var G__33987 = null;
if (arguments.length > 2) {
var G__33988__i = 0, G__33988__a = new Array(arguments.length -  2);
while (G__33988__i < G__33988__a.length) {G__33988__a[G__33988__i] = arguments[G__33988__i + 2]; ++G__33988__i;}
G__33987 = new cljs.core.IndexedSeq(G__33988__a,0,null);
}
return garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__33987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_divider_$_ud.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_divider_$_ud.cljs$lang$applyTo = garden$units$make_unit_divider_$_ud__3.cljs$lang$applyTo;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_divider_$_ud__1;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_divider_$_ud__2;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_divider_$_ud;
})()
});
garden.units.cm = garden.units.make_unit_fn(new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"cm","cm",540591536));

garden.units.cm_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"cm","cm",540591536));
garden.units.mm = garden.units.make_unit_fn(new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"mm","mm",-1652850560));

garden.units.mm_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"mm","mm",-1652850560));
garden.units.in$ = garden.units.make_unit_fn(new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"in","in",-1531184865));

garden.units.in_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"in","in",-1531184865));
garden.units.px = garden.units.make_unit_fn(new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"px","px",281329899));

garden.units.px_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"px","px",281329899));
garden.units.pt = garden.units.make_unit_fn(new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"pt","pt",556460867));

garden.units.pt_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"pt","pt",556460867));
garden.units.pc = garden.units.make_unit_fn(new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"pc","pc",512913453));

garden.units.pc_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"pc","pc",512913453));
garden.units.percent = garden.units.make_unit_fn(new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"%","%",1704198600));

garden.units.percent_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"%","%",1704198600));
garden.units.em = garden.units.make_unit_fn(new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"em","em",707813035));

garden.units.em_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"em","em",707813035));
garden.units.ex = garden.units.make_unit_fn(new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ex","ex",-1413771341));

garden.units.ex_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"ex","ex",-1413771341));
garden.units.ch = garden.units.make_unit_fn(new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ch","ch",-554717905));

garden.units.ch_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"ch","ch",-554717905));
garden.units.rem = garden.units.make_unit_fn(new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"rem","rem",-976484757));

garden.units.rem_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"rem","rem",-976484757));
garden.units.vw = garden.units.make_unit_fn(new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vw","vw",1941049135));

garden.units.vw_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"vw","vw",1941049135));
garden.units.vh = garden.units.make_unit_fn(new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vh","vh",79552846));

garden.units.vh_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"vh","vh",79552846));
garden.units.vmin = garden.units.make_unit_fn(new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vmin","vmin",446546816));

garden.units.vmin_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"vmin","vmin",446546816));
garden.units.vmax = garden.units.make_unit_fn(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

garden.units.vmax_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
garden.units.deg = garden.units.make_unit_fn(new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"deg","deg",-681556081));

garden.units.deg_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"deg","deg",-681556081));
garden.units.grad = garden.units.make_unit_fn(new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"grad","grad",1125187229));

garden.units.grad_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"grad","grad",1125187229));
garden.units.rad = garden.units.make_unit_fn(new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"rad","rad",-833983012));

garden.units.rad_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"rad","rad",-833983012));
garden.units.turn = garden.units.make_unit_fn(new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"turn","turn",75759344));

garden.units.turn_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"turn","turn",75759344));
garden.units.s = garden.units.make_unit_fn(new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"s","s",1705939918));

garden.units.s_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"s","s",1705939918));
garden.units.ms = garden.units.make_unit_fn(new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ms","ms",-1152709733));

garden.units.ms_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"ms","ms",-1152709733));
garden.units.Hz = garden.units.make_unit_fn(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

garden.units.Hz_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
garden.units.kHz = garden.units.make_unit_fn(new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"kHz","kHz",240398466));

garden.units.kHz_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"kHz","kHz",240398466));
garden.units.dpi = garden.units.make_unit_fn(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

garden.units.dpi_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"dpi","dpi",-986162832));
garden.units.dpcm = garden.units.make_unit_fn(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

garden.units.dpcm_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
garden.units.dppx = garden.units.make_unit_fn(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_QMARK_ = garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_PLUS_ = garden.units.make_unit_adder(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_ = garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_STAR_ = garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

garden.units.dppx_div = garden.units.make_unit_divider(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

//# sourceMappingURL=garden.units.js.map
