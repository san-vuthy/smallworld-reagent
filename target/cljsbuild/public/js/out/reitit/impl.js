// Compiled by ClojureScript 1.10.439 {}
goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv.call(null,(function (coll__$1,k,v){
var temp__5722__auto__ = f.call(null,v);
if((temp__5722__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5722__auto__;
return cljs.core.assoc.call(null,coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.wild_QMARK_ = (function reitit$impl$wild_QMARK_(s){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,":",null], null), null),cljs.core.first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
reitit.impl.catch_all_QMARK_ = (function reitit$impl$catch_all_QMARK_(s){
return cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
reitit.impl.wild_param = (function reitit$impl$wild_param(s){
var ss = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core._EQ_.call(null,":",cljs.core.first.call(null,ss))){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,ss,(1)));
} else {
return null;
}
});
reitit.impl.catch_all_param = (function reitit$impl$catch_all_param(s){
var ss = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,ss))){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,ss,(1)));
} else {
return null;
}
});
reitit.impl.wild_or_catch_all_param_QMARK_ = (function reitit$impl$wild_or_catch_all_param_QMARK_(x){
return cljs.core.boolean$.call(null,(function (){var or__4047__auto__ = reitit.impl.wild_param.call(null,x);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.impl.catch_all_param.call(null,x);
}
})());
});
reitit.impl.segments = (function reitit$impl$segments(path){
return path.split(/\//,(666));
});
reitit.impl.contains_wilds_QMARK_ = (function reitit$impl$contains_wilds_QMARK_(path){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,reitit.impl.wild_or_catch_all_param_QMARK_,reitit.impl.segments.call(null,path)));
});
reitit.impl.parse_path_token = (function reitit$impl$parse_path_token(out,string){
var pred__29009 = cljs.core.re_matches;
var expr__29010 = string;
var temp__5718__auto__ = pred__29009.call(null,/^:(.+)$/,expr__29010);
if(cljs.core.truth_(temp__5718__auto__)){
var p__4396__auto__ = temp__5718__auto__;
return ((function (p__4396__auto__,temp__5718__auto__,pred__29009,expr__29010){
return (function (p__29012){
var vec__29013 = p__29012;
var _ = cljs.core.nth.call(null,vec__29013,(0),null);
var token = cljs.core.nth.call(null,vec__29013,(1),null);
var key = cljs.core.keyword.call(null,token);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),key], null),"([^/]+)");
});})(p__4396__auto__,temp__5718__auto__,pred__29009,expr__29010))
.call(null,p__4396__auto__);
} else {
var temp__5718__auto____$1 = pred__29009.call(null,/^\*(.*)$/,expr__29010);
if(cljs.core.truth_(temp__5718__auto____$1)){
var p__4396__auto__ = temp__5718__auto____$1;
return ((function (p__4396__auto__,temp__5718__auto____$1,temp__5718__auto__,pred__29009,expr__29010){
return (function (p__29016){
var vec__29017 = p__29016;
var _ = cljs.core.nth.call(null,vec__29017,(0),null);
var token = cljs.core.nth.call(null,vec__29017,(1),null);
var key = cljs.core.keyword.call(null,token);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),key], null),"(.*)");
});})(p__4396__auto__,temp__5718__auto____$1,temp__5718__auto__,pred__29009,expr__29010))
.call(null,p__4396__auto__);
} else {
return cljs.core.update_in.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,string);
}
}
});
reitit.impl.parse_path = (function reitit$impl$parse_path(var_args){
var G__29021 = arguments.length;
switch (G__29021) {
case 1:
return reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return reitit.impl.parse_path.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-params","path-params",-48130597),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),cljs.core.PersistentArrayMap.EMPTY], null),pattern);
});

reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$2 = (function (accumulated_info,pattern){
var temp__5718__auto__ = cljs.core.re_matches.call(null,/\/(.*)/,pattern);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var vec__29022 = m;
var _ = cljs.core.nth.call(null,vec__29022,(0),null);
var path = cljs.core.nth.call(null,vec__29022,(1),null);
return cljs.core.reduce.call(null,reitit.impl.parse_path_token,accumulated_info,clojure.string.split.call(null,path,/\//));
} else {
throw cljs.core.ex_info.call(null,"Routes must start from the root, so they must begin with a '/'",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern], null));
}
});

reitit.impl.parse_path.cljs$lang$maxFixedArity = 2;

reitit.impl.re_quote = (function reitit$impl$re_quote(x){
return clojure.string.replace.call(null,x,/([.?*+^$[\\]\\\\(){}|-])/,"\\$1");
});
reitit.impl.path_regex = (function reitit$impl$path_regex(p__29027){
var map__29028 = p__29027;
var map__29028__$1 = (((((!((map__29028 == null))))?(((((map__29028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29028):map__29028);
var route = map__29028__$1;
var path_parts = cljs.core.get.call(null,map__29028__$1,new cljs.core.Keyword(null,"path-parts","path-parts",945822894));
var path_constraints = cljs.core.get.call(null,map__29028__$1,new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928));
var vec__29030 = path_parts;
var seq__29031 = cljs.core.seq.call(null,vec__29030);
var first__29032 = cljs.core.first.call(null,seq__29031);
var seq__29031__$1 = cljs.core.next.call(null,seq__29031);
var pp = first__29032;
var pps = seq__29031__$1;
var path_parts__$1 = ((((cljs.core.seq.call(null,pps)) && (typeof pp === 'string') && (cljs.core.empty_QMARK_.call(null,pp))))?pps:path_parts);
return cljs.core.re_pattern.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,cljs.core.repeat.call(null,"/"),cljs.core.map.call(null,((function (vec__29030,seq__29031,first__29032,seq__29031__$1,pp,pps,path_parts__$1,map__29028,map__29028__$1,route,path_parts,path_constraints){
return (function (p1__29026_SHARP_){
var or__4047__auto__ = cljs.core.get.call(null,path_constraints,p1__29026_SHARP_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.impl.re_quote.call(null,p1__29026_SHARP_);
}
});})(vec__29030,seq__29031,first__29032,seq__29031__$1,pp,pps,path_parts__$1,map__29028,map__29028__$1,route,path_parts,path_constraints))
,path_parts__$1))));
});
reitit.impl.path_matcher = (function reitit$impl$path_matcher(route){
var map__29033 = route;
var map__29033__$1 = (((((!((map__29033 == null))))?(((((map__29033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29033):map__29033);
var path_re = cljs.core.get.call(null,map__29033__$1,new cljs.core.Keyword(null,"path-re","path-re",-1615269971));
var path_params = cljs.core.get.call(null,map__29033__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
return ((function (map__29033,map__29033__$1,path_re,path_params){
return (function (path){
var temp__5720__auto__ = cljs.core.re_matches.call(null,path_re,path);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.zipmap.call(null,path_params,cljs.core.rest.call(null,m));
} else {
return null;
}
});
;})(map__29033,map__29033__$1,path_re,path_params))
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.impl.Route = (function (path,matcher,path_parts,path_params,data,result,__meta,__extmap,__hash){
this.path = path;
this.matcher = matcher;
this.path_parts = path_parts;
this.path_params = path_params;
this.data = data;
this.result = result;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k29036,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__29040 = k29036;
var G__29040__$1 = (((G__29040 instanceof cljs.core.Keyword))?G__29040.fqn:null);
switch (G__29040__$1) {
case "path":
return self__.path;

break;
case "matcher":
return self__.matcher;

break;
case "path-parts":
return self__.path_parts;

break;
case "path-params":
return self__.path_params;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29036,else__4304__auto__);

}
});

reitit.impl.Route.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__29041){
var vec__29042 = p__29041;
var k__4324__auto__ = cljs.core.nth.call(null,vec__29042,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__29042,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.impl.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#reitit.impl.Route{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matcher","matcher",-452768995),self__.matcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-parts","path-parts",945822894),self__.path_parts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null))], null),self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29035){
var self__ = this;
var G__29035__$1 = this;
return (new cljs.core.RecordIter((0),G__29035__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"matcher","matcher",-452768995),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.impl.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.impl.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.impl.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (573096325 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.impl.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29037,other29038){
var self__ = this;
var this29037__$1 = this;
return (((!((other29038 == null)))) && ((this29037__$1.constructor === other29038.constructor)) && (cljs.core._EQ_.call(null,this29037__$1.path,other29038.path)) && (cljs.core._EQ_.call(null,this29037__$1.matcher,other29038.matcher)) && (cljs.core._EQ_.call(null,this29037__$1.path_parts,other29038.path_parts)) && (cljs.core._EQ_.call(null,this29037__$1.path_params,other29038.path_params)) && (cljs.core._EQ_.call(null,this29037__$1.data,other29038.data)) && (cljs.core._EQ_.call(null,this29037__$1.result,other29038.result)) && (cljs.core._EQ_.call(null,this29037__$1.__extmap,other29038.__extmap)));
});

reitit.impl.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"matcher","matcher",-452768995),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

reitit.impl.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__29035){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__29045 = cljs.core.keyword_identical_QMARK_;
var expr__29046 = k__4309__auto__;
if(cljs.core.truth_(pred__29045.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__29046))){
return (new reitit.impl.Route(G__29035,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29045.call(null,new cljs.core.Keyword(null,"matcher","matcher",-452768995),expr__29046))){
return (new reitit.impl.Route(self__.path,G__29035,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29045.call(null,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),expr__29046))){
return (new reitit.impl.Route(self__.path,self__.matcher,G__29035,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29045.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__29046))){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,G__29035,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29045.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__29046))){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,G__29035,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29045.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__29046))){
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,G__29035,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__29035),null));
}
}
}
}
}
}
});

reitit.impl.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"matcher","matcher",-452768995),self__.matcher,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-parts","path-parts",945822894),self__.path_parts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null))], null),self__.__extmap));
});

reitit.impl.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__29035){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.matcher,self__.path_parts,self__.path_params,self__.data,self__.result,G__29035,self__.__extmap,self__.__hash));
});

reitit.impl.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.impl.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"path-parts","path-parts",-1708612875,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)], null);
});

reitit.impl.Route.cljs$lang$type = true;

reitit.impl.Route.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.impl/Route",null,(1),null));
});

reitit.impl.Route.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"reitit.impl/Route");
});

/**
 * Positional factory function for reitit.impl/Route.
 */
reitit.impl.__GT_Route = (function reitit$impl$__GT_Route(path,matcher,path_parts,path_params,data,result){
return (new reitit.impl.Route(path,matcher,path_parts,path_params,data,result,null,null,null));
});

/**
 * Factory function for reitit.impl/Route, taking a map of keywords to field values.
 */
reitit.impl.map__GT_Route = (function reitit$impl$map__GT_Route(G__29039){
var extmap__4340__auto__ = (function (){var G__29048 = cljs.core.dissoc.call(null,G__29039,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"matcher","matcher",-452768995),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.record_QMARK_.call(null,G__29039)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29048);
} else {
return G__29048;
}
})();
return (new reitit.impl.Route(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__29039),new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(G__29039),new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(G__29039),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__29039),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__29039),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__29039),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

reitit.impl.create = (function reitit$impl$create(p__29051){
var vec__29052 = p__29051;
var path = cljs.core.nth.call(null,vec__29052,(0),null);
var data = cljs.core.nth.call(null,vec__29052,(1),null);
var result = cljs.core.nth.call(null,vec__29052,(2),null);
var path__$1 = path;
var $ = reitit.impl.parse_path.call(null,path__$1);
var $__$1 = cljs.core.assoc.call(null,$,new cljs.core.Keyword(null,"path-re","path-re",-1615269971),reitit.impl.path_regex.call(null,$));
var $__$2 = cljs.core.merge.call(null,$__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"matcher","matcher",-452768995),((reitit.impl.contains_wilds_QMARK_.call(null,path__$1))?reitit.impl.path_matcher.call(null,$__$1):((function ($,$__$1,path__$1,vec__29052,path,data,result){
return (function (p1__29050_SHARP_){
if(cljs.core._EQ_.call(null,path__$1,p1__29050_SHARP_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
});})($,$__$1,path__$1,vec__29052,path,data,result))
),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
var $__$3 = cljs.core.dissoc.call(null,$__$2,new cljs.core.Keyword(null,"path-re","path-re",-1615269971),new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928));
var $__$4 = cljs.core.update.call(null,$__$3,new cljs.core.Keyword(null,"path-params","path-params",-48130597),cljs.core.set);
return reitit.impl.map__GT_Route.call(null,$__$4);
});
reitit.impl.wild_route_QMARK_ = (function reitit$impl$wild_route_QMARK_(p__29055){
var vec__29056 = p__29055;
var path = cljs.core.nth.call(null,vec__29056,(0),null);
return reitit.impl.contains_wilds_QMARK_.call(null,path);
});
reitit.impl.conflicting_routes_QMARK_ = (function reitit$impl$conflicting_routes_QMARK_(p__29059,p__29060){
var vec__29061 = p__29059;
var p1 = cljs.core.nth.call(null,vec__29061,(0),null);
var vec__29064 = p__29060;
var p2 = cljs.core.nth.call(null,vec__29064,(0),null);
var G__29073 = reitit.impl.segments.call(null,p1);
var vec__29075 = G__29073;
var seq__29076 = cljs.core.seq.call(null,vec__29075);
var first__29077 = cljs.core.first.call(null,seq__29076);
var seq__29076__$1 = cljs.core.next.call(null,seq__29076);
var s1 = first__29077;
var ss1 = seq__29076__$1;
var G__29074 = reitit.impl.segments.call(null,p2);
var vec__29078 = G__29074;
var seq__29079 = cljs.core.seq.call(null,vec__29078);
var first__29080 = cljs.core.first.call(null,seq__29079);
var seq__29079__$1 = cljs.core.next.call(null,seq__29079);
var s2 = first__29080;
var ss2 = seq__29079__$1;
var G__29073__$1 = G__29073;
var G__29074__$1 = G__29074;
while(true){
var vec__29081 = G__29073__$1;
var seq__29082 = cljs.core.seq.call(null,vec__29081);
var first__29083 = cljs.core.first.call(null,seq__29082);
var seq__29082__$1 = cljs.core.next.call(null,seq__29082);
var s1__$1 = first__29083;
var ss1__$1 = seq__29082__$1;
var vec__29084 = G__29074__$1;
var seq__29085 = cljs.core.seq.call(null,vec__29084);
var first__29086 = cljs.core.first.call(null,seq__29085);
var seq__29085__$1 = cljs.core.next.call(null,seq__29085);
var s2__$1 = first__29086;
var ss2__$1 = seq__29085__$1;
if(cljs.core._EQ_.call(null,s1__$1,s2__$1,null)){
return true;
} else {
if((((s1__$1 == null)) || ((s2__$1 == null)))){
return false;
} else {
if(((reitit.impl.catch_all_QMARK_.call(null,s1__$1)) || (reitit.impl.catch_all_QMARK_.call(null,s2__$1)))){
return true;
} else {
if(((reitit.impl.wild_QMARK_.call(null,s1__$1)) || (reitit.impl.wild_QMARK_.call(null,s2__$1)))){
var G__29087 = ss1__$1;
var G__29088 = ss2__$1;
G__29073__$1 = G__29087;
G__29074__$1 = G__29088;
continue;
} else {
if(cljs.core.not_EQ_.call(null,s1__$1,s2__$1)){
return false;
} else {
var G__29089 = ss1__$1;
var G__29090 = ss2__$1;
G__29073__$1 = G__29089;
G__29074__$1 = G__29090;
continue;

}
}
}
}
}
break;
}
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
var temp__5718__auto__ = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route);
if(cljs.core.truth_(temp__5718__auto__)){
var required = temp__5718__auto__;
if(cljs.core.every_QMARK_.call(null,((function (required,temp__5718__auto__){
return (function (p1__29091_SHARP_){
return cljs.core.contains_QMARK_.call(null,path_params,p1__29091_SHARP_);
});})(required,temp__5718__auto__))
,required)){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"/",cljs.core.map.call(null,((function (required,temp__5718__auto__){
return (function (p1__29092_SHARP_){
return cljs.core.get.call(null,(function (){var or__4047__auto__ = path_params;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p1__29092_SHARP_,p1__29092_SHARP_);
});})(required,temp__5718__auto__))
,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route))))].join('');
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_.call(null,(function (p1__29093_SHARP_){
return cljs.core.contains_QMARK_.call(null,path_params,p1__29093_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set.call(null,cljs.core.keys.call(null,path_params));
var missing = clojure.set.difference.call(null,required,defined);
throw cljs.core.ex_info.call(null,["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.call(null,a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return m.call(null,k);
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__4047__auto__ = reitit.impl.maybe_url_decode.call(null,s);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace.call(null,s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values.call(null,reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (reitit.impl.into_string[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (reitit.impl.into_string["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

goog.object.set(reitit.impl.into_string,"string",(function (this$){
return this$;
}));

cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace.call(null,this$__$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?"/":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,this$__$1))].join('');
});

goog.object.set(reitit.impl.IntoString,"boolean",true);

goog.object.set(reitit.impl.into_string,"boolean",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"number",true);

goog.object.set(reitit.impl.into_string,"number",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"object",true);

goog.object.set(reitit.impl.into_string,"object",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"null",true);

goog.object.set(reitit.impl.into_string,"null",(function (_){
return null;
}));
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values.call(null,(function (p1__29095_SHARP_){
return reitit.impl.url_encode.call(null,reitit.impl.into_string.call(null,p1__29095_SHARP_));
}),params);
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__29096){
var vec__29097 = p__29096;
var k = cljs.core.nth.call(null,vec__29097,(0),null);
var v = cljs.core.nth.call(null,vec__29097,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode.call(null,reitit.impl.into_string.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode.call(null,reitit.impl.into_string.call(null,v)))].join('');
}),params));
});
var ret__4684__auto___29106 = (function (){
reitit.impl.goog_extend = (function reitit$impl$goog_extend(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29107 = arguments.length;
var i__4642__auto___29108 = (0);
while(true){
if((i__4642__auto___29108 < len__4641__auto___29107)){
args__4647__auto__.push((arguments[i__4642__auto___29108]));

var G__29109 = (i__4642__auto___29108 + (1));
i__4642__auto___29108 = G__29109;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((5) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((5)),(0),null)):null);
return reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4648__auto__);
});

reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,base_type,ctor,methods$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),ctor))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","inherits","goog/inherits",1191617838,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,base_type,null,(1),null))))),null,(1),null)),cljs.core.map.call(null,(function (method){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("reitit.impl","-prototype","reitit.impl/-prototype",-650268084,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,method))].join('')),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.rest.call(null,method)))),null,(1),null)))));
}),methods$))));
});

reitit.impl.goog_extend.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
reitit.impl.goog_extend.cljs$lang$applyTo = (function (seq29100){
var G__29101 = cljs.core.first.call(null,seq29100);
var seq29100__$1 = cljs.core.next.call(null,seq29100);
var G__29102 = cljs.core.first.call(null,seq29100__$1);
var seq29100__$2 = cljs.core.next.call(null,seq29100__$1);
var G__29103 = cljs.core.first.call(null,seq29100__$2);
var seq29100__$3 = cljs.core.next.call(null,seq29100__$2);
var G__29104 = cljs.core.first.call(null,seq29100__$3);
var seq29100__$4 = cljs.core.next.call(null,seq29100__$3);
var G__29105 = cljs.core.first.call(null,seq29100__$4);
var seq29100__$5 = cljs.core.next.call(null,seq29100__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29101,G__29102,G__29103,G__29104,G__29105,seq29100__$5);
});

return null;
})()
;
reitit.impl.goog_extend.cljs$lang$macro = true;


//# sourceMappingURL=impl.js.map?rel=1548047550970
