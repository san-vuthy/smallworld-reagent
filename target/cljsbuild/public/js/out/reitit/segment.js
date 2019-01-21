// Compiled by ClojureScript 1.10.439 {}
goog.provide('reitit.segment');
goog.require('cljs.core');
goog.require('reitit.impl');
goog.require('clojure.string');

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
reitit.segment.Match = (function (data,path_params,__meta,__extmap,__hash){
this.data = data;
this.path_params = path_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k33751,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__33755 = k33751;
var G__33755__$1 = (((G__33755 instanceof cljs.core.Keyword))?G__33755.fqn:null);
switch (G__33755__$1) {
case "data":
return self__.data;

break;
case "path-params":
return self__.path_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33751,else__4304__auto__);

}
});

reitit.segment.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__33756){
var vec__33757 = p__33756;
var k__4324__auto__ = cljs.core.nth.call(null,vec__33757,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__33757,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.segment.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#reitit.segment.Match{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null))], null),self__.__extmap));
});

reitit.segment.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33750){
var self__ = this;
var G__33750__$1 = this;
return (new cljs.core.RecordIter((0),G__33750__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.segment.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.segment.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.segment.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

reitit.segment.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-129766334 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.segment.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33752,other33753){
var self__ = this;
var this33752__$1 = this;
return (((!((other33753 == null)))) && ((this33752__$1.constructor === other33753.constructor)) && (cljs.core._EQ_.call(null,this33752__$1.data,other33753.data)) && (cljs.core._EQ_.call(null,this33752__$1.path_params,other33753.path_params)) && (cljs.core._EQ_.call(null,this33752__$1.__extmap,other33753.__extmap)));
});

reitit.segment.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

reitit.segment.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__33750){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__33760 = cljs.core.keyword_identical_QMARK_;
var expr__33761 = k__4309__auto__;
if(cljs.core.truth_(pred__33760.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__33761))){
return (new reitit.segment.Match(G__33750,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33760.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__33761))){
return (new reitit.segment.Match(self__.data,G__33750,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__33750),null));
}
}
});

reitit.segment.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null))], null),self__.__extmap));
});

reitit.segment.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__33750){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,G__33750,self__.__extmap,self__.__hash));
});

reitit.segment.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.segment.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null)], null);
});

reitit.segment.Match.cljs$lang$type = true;

reitit.segment.Match.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.segment/Match",null,(1),null));
});

reitit.segment.Match.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"reitit.segment/Match");
});

/**
 * Positional factory function for reitit.segment/Match.
 */
reitit.segment.__GT_Match = (function reitit$segment$__GT_Match(data,path_params){
return (new reitit.segment.Match(data,path_params,null,null,null));
});

/**
 * Factory function for reitit.segment/Match, taking a map of keywords to field values.
 */
reitit.segment.map__GT_Match = (function reitit$segment$map__GT_Match(G__33754){
var extmap__4340__auto__ = (function (){var G__33763 = cljs.core.dissoc.call(null,G__33754,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"path-params","path-params",-48130597));
if(cljs.core.record_QMARK_.call(null,G__33754)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33763);
} else {
return G__33763;
}
})();
return (new reitit.segment.Match(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__33754),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__33754),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});


/**
 * @interface
 */
reitit.segment.Segment = function(){};

reitit.segment._insert = (function reitit$segment$_insert(this$,ps,data){
if((((!((this$ == null)))) && ((!((this$.reitit$segment$Segment$_insert$arity$3 == null)))))){
return this$.reitit$segment$Segment$_insert$arity$3(this$,ps,data);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.segment._insert[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,ps,data);
} else {
var m__4348__auto____$1 = (reitit.segment._insert["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,ps,data);
} else {
throw cljs.core.missing_protocol.call(null,"Segment.-insert",this$);
}
}
}
});

reitit.segment._lookup = (function reitit$segment$_lookup(this$,ps,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$segment$Segment$_lookup$arity$3 == null)))))){
return this$.reitit$segment$Segment$_lookup$arity$3(this$,ps,path_params);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.segment._lookup[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,ps,path_params);
} else {
var m__4348__auto____$1 = (reitit.segment._lookup["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,ps,path_params);
} else {
throw cljs.core.missing_protocol.call(null,"Segment.-lookup",this$);
}
}
}
});

goog.object.set(reitit.segment.Segment,"null",true);

goog.object.set(reitit.segment._insert,"null",(function (_,___$1,___$2){
return null;
}));

goog.object.set(reitit.segment._lookup,"null",(function (_,___$1,___$2){
return null;
}));
reitit.segment._catch_all = (function reitit$segment$_catch_all(children,catch_all,path_params,p,ps){
return reitit.segment._lookup.call(null,reitit.impl.fast_get.call(null,children,catch_all),null,cljs.core.assoc.call(null,path_params,catch_all,clojure.string.join.call(null,"/",cljs.core.cons.call(null,p,ps))));
});
reitit.segment.segment = (function reitit$segment$segment(var_args){
var G__33768 = arguments.length;
switch (G__33768) {
case 0:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.segment.segment.cljs$core$IFn$_invoke$arity$0 = (function (){
return reitit.segment.segment.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null);
});

reitit.segment.segment.cljs$core$IFn$_invoke$arity$4 = (function (children,wilds,catch_all,match){
var children_SINGLEQUOTE_ = reitit.impl.fast_map.call(null,children);
var wilds_QMARK_ = cljs.core.seq.call(null,wilds);
if((typeof reitit !== 'undefined') && (typeof reitit.segment !== 'undefined') && (typeof reitit.segment.t_reitit$segment33769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.segment.Segment}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.segment.t_reitit$segment33769 = (function (children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,meta33770){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.match = match;
this.children_SINGLEQUOTE_ = children_SINGLEQUOTE_;
this.wilds_QMARK_ = wilds_QMARK_;
this.meta33770 = meta33770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.segment.t_reitit$segment33769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (_33771,meta33770__$1){
var self__ = this;
var _33771__$1 = this;
return (new reitit.segment.t_reitit$segment33769(self__.children,self__.wilds,self__.catch_all,self__.match,self__.children_SINGLEQUOTE_,self__.wilds_QMARK_,meta33770__$1));
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment33769.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (_33771){
var self__ = this;
var _33771__$1 = this;
return self__.meta33770;
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment33769.prototype.reitit$segment$Segment$ = cljs.core.PROTOCOL_SENTINEL;

reitit.segment.t_reitit$segment33769.prototype.reitit$segment$Segment$_insert$arity$3 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (_,p__33772,d){
var self__ = this;
var vec__33773 = p__33772;
var seq__33774 = cljs.core.seq.call(null,vec__33773);
var first__33775 = cljs.core.first.call(null,seq__33774);
var seq__33774__$1 = cljs.core.next.call(null,seq__33774);
var p = first__33775;
var ps = seq__33774__$1;
var ___$1 = this;
if(cljs.core.not.call(null,p)){
return reitit.segment.segment.call(null,self__.children,self__.wilds,self__.catch_all,d);
} else {
var vec__33776 = cljs.core.juxt.call(null,reitit.impl.wild_param,reitit.impl.catch_all_param).call(null,p);
var w = cljs.core.nth.call(null,vec__33776,(0),null);
var c = cljs.core.nth.call(null,vec__33776,(1),null);
var wilds__$1 = (cljs.core.truth_(w)?cljs.core.conj.call(null,self__.wilds,w):self__.wilds);
var catch_all__$1 = (function (){var or__4047__auto__ = c;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return self__.catch_all;
}
})();
var children__$1 = cljs.core.update.call(null,self__.children,(function (){var or__4047__auto__ = w;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = c;
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return p;
}
}
})(),((function (vec__33776,w,c,wilds__$1,catch_all__$1,___$1,vec__33773,seq__33774,first__33775,seq__33774__$1,p,ps,children_SINGLEQUOTE_,wilds_QMARK_){
return (function (p1__33765_SHARP_){
return reitit.segment._insert.call(null,(function (){var or__4047__auto__ = p1__33765_SHARP_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.segment.segment.call(null);
}
})(),ps,d);
});})(vec__33776,w,c,wilds__$1,catch_all__$1,___$1,vec__33773,seq__33774,first__33775,seq__33774__$1,p,ps,children_SINGLEQUOTE_,wilds_QMARK_))
);
return reitit.segment.segment.call(null,children__$1,wilds__$1,catch_all__$1,self__.match);
}
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment33769.prototype.reitit$segment$Segment$_lookup$arity$3 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (_,p__33779,path_params){
var self__ = this;
var vec__33780 = p__33779;
var seq__33781 = cljs.core.seq.call(null,vec__33780);
var first__33782 = cljs.core.first.call(null,seq__33781);
var seq__33781__$1 = cljs.core.next.call(null,seq__33781);
var p = first__33782;
var ps = seq__33781__$1;
var ___$1 = this;
if((p == null)){
if(cljs.core.truth_(self__.match)){
return cljs.core.assoc.call(null,self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params);
} else {
return null;
}
} else {
var or__4047__auto__ = reitit.segment._lookup.call(null,reitit.impl.fast_get.call(null,self__.children_SINGLEQUOTE_,p),ps,path_params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (cljs.core.truth_((function (){var and__4036__auto__ = self__.wilds_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return (!(clojure.string.blank_QMARK_.call(null,p)));
} else {
return and__4036__auto__;
}
})())?cljs.core.some.call(null,((function (or__4047__auto__,___$1,vec__33780,seq__33781,first__33782,seq__33781__$1,p,ps,children_SINGLEQUOTE_,wilds_QMARK_){
return (function (p1__33766_SHARP_){
return reitit.segment._lookup.call(null,reitit.impl.fast_get.call(null,self__.children_SINGLEQUOTE_,p1__33766_SHARP_),ps,cljs.core.assoc.call(null,path_params,p1__33766_SHARP_,p));
});})(or__4047__auto__,___$1,vec__33780,seq__33781,first__33782,seq__33781__$1,p,ps,children_SINGLEQUOTE_,wilds_QMARK_))
,self__.wilds):null);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
if(cljs.core.truth_(self__.catch_all)){
return reitit.segment._catch_all.call(null,self__.children_SINGLEQUOTE_,self__.catch_all,path_params,p,ps);
} else {
return null;
}
}
}
}
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment33769.getBasis = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"children'","children'",-942868266,null),new cljs.core.Symbol(null,"wilds?","wilds?",-1842060252,null),new cljs.core.Symbol(null,"meta33770","meta33770",1528190262,null)], null);
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

reitit.segment.t_reitit$segment33769.cljs$lang$type = true;

reitit.segment.t_reitit$segment33769.cljs$lang$ctorStr = "reitit.segment/t_reitit$segment33769";

reitit.segment.t_reitit$segment33769.cljs$lang$ctorPrWriter = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.segment/t_reitit$segment33769");
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

/**
 * Positional factory function for reitit.segment/t_reitit$segment33769.
 */
reitit.segment.__GT_t_reitit$segment33769 = ((function (children_SINGLEQUOTE_,wilds_QMARK_){
return (function reitit$segment$__GT_t_reitit$segment33769(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta33770){
return (new reitit.segment.t_reitit$segment33769(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta33770));
});})(children_SINGLEQUOTE_,wilds_QMARK_))
;

}

return (new reitit.segment.t_reitit$segment33769(children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.segment","segment","reitit.segment/segment",424393474)], null)));
});

reitit.segment.segment.cljs$lang$maxFixedArity = 4;

reitit.segment.insert = (function reitit$segment$insert(root,path,data){
return reitit.segment._insert.call(null,(function (){var or__4047__auto__ = root;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.segment.segment.call(null);
}
})(),reitit.impl.segments.call(null,path),reitit.segment.map__GT_Match.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null)));
});
reitit.segment.create = (function reitit$segment$create(paths){
return cljs.core.reduce.call(null,(function (segment,p__33784){
var vec__33785 = p__33784;
var p = cljs.core.nth.call(null,vec__33785,(0),null);
var data = cljs.core.nth.call(null,vec__33785,(1),null);
return reitit.segment.insert.call(null,segment,p,data);
}),null,paths);
});
reitit.segment.lookup = (function reitit$segment$lookup(segment,path){
return reitit.segment._lookup.call(null,segment,reitit.impl.segments.call(null,path),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=segment.js.map?rel=1548047562347
