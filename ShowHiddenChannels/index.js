(function(W,t,U,m,Z,n,b,h,G,g){"use strict";const C={hiddenChannelIcon:"lock",faded:!1,sort:"native",showPerms:!0,showAdmin:"exclude",stopMarkingUnread:!1,shouldShowEmptyCategory:!0,alwaysCollapse:!1,debugMode:!1,channels:{GUILD_TEXT:!0,GUILD_VOICE:!0,GUILD_ANNOUNCEMENT:!0,GUILD_STORE:!0,GUILD_STAGE_VOICE:!0,GUILD_FORUM:!0},blacklistedGuilds:{},collapsed:{}},X=h.findByStoreName("PermissionStore"),{ChannelRecordBase:K}=h.findByProps("ChannelRecordBase")??{},S=h.findByStoreName("ChannelStore"),ge=h.findByProps("isCollapsed","getCollapsedCategories"),J=h.findByStoreName("GuildStore"),$=h.findByStoreName("GuildMemberStore"),q=h.findByStoreName("PresenceStore"),Ce=h.findByStoreName("ChannelListStore"),ee=h.findByProps("getChannels","getDefaultChannel"),te=h.findByStoreName("UserGuildSettingsStore"),ne=h.findByStoreName("UserStore"),ye=h.findByProps("jumpToMessage","_sendMessage"),H=h.findByProps("isForumPostUnread"),F=h.findByName("BaseChannelItem",!1),w=h.findByProps("ChannelTypes","Permissions"),L=h.findByName("Svg",!1),Re=h.findByName("DrawerTabBar",!1),pe=h.findByName("Navigator",!1),Ee=h.findByStoreName("SelectedGuildStore"),we=h.findByStoreName("SelectedChannelStore"),ae=h.findByName("ThemedRolePill"),k=h.findByProps("deserialize","invert","has"),re=Object.assign({},h.findByProps("fetchProfile","getUser"),h.findByProps("showUserProfile")),me=h.findByProps("isRoleHigher","makeEveryoneOverwrite"),be=h.findByProps("parseTopic","parseInlineReply"),se=h.findByProps("getGuildIconURL","getDefaultAvatarURL");h.findByProps("transitionToChannel","transitionToPrivateChannel");const oe=h.findByProps("_currentDispatchActionType","_processingWaitQueue"),{GuildMemberRow:ie}=h.findByProps("GuildMemberRow")??{},{View:le}=m.General;var Q=t.React.memo(function(e){n.storage.hiddenChannelIcon??=C.hiddenChannelIcon,n.storage.faded??=C.faded;const a=t.stylesheet.createThemedStyleSheet({view:{verticalAlign:"center",justifyContent:"center",alignItems:"center",marginLeft:5},svg:{color:n.storage.faded&&!e.settings?b.semanticColors?.INTERACTIVE_MUTED:b.semanticColors?.CHANNELS_DEFAULT}});return n.storage.hiddenChannelIcon==="lock"?t.React.createElement(le,{style:a.view},t.React.createElement(L.Svg,{width:e.width??16,height:e.height??16,viewBox:"0 0 24 24"},t.React.createElement(L.G,{stroke:"none",fill:a.svg.color},t.React.createElement(L.Path,{d:"M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"})))):n.storage.hiddenChannelIcon==="eye"?t.React.createElement(le,{style:a.view},t.React.createElement(L.Svg,{width:e.width??16,height:e.height??16,viewBox:"0 0 24 24"},t.React.createElement(L.G,{stroke:"none",fill:a.svg.color},t.React.createElement(L.Path,{d:"M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z"}),t.React.createElement(L.Path,{d:"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"}),t.React.createElement(L.Polygon,{points:"22.6,2.7 22.6,2.8 19.3,6.1 16,9.3 16,9.4 15,10.4 15,10.4 10.3,15 2.8,22.5 1.4,21.1 21.2,1.3 "})))):null});const ce=function(e){return`${e.charAt(0).toUpperCase()}${e.substring(1).toLowerCase()}`},Se=function(e,a){return Math.floor(Math.random()*(a-e+1)+e)},Ae=function(e){e=Number(e);const a=Math.floor(e/3600),o=Math.floor(e%3600/60),s=Math.floor(e%3600%60),u=a>0?`${a}${a===1?" hour":" hours"}`:"",i=o>0?`${o}${o===1?" minute":" minutes"}`:"",r=s>0?`${s}${s===1?" second":" seconds"}`:"";return u+i+r},Ie=function(e){try{const a=parseInt(e,10).toString(2).padStart(64,"0").substring(0,42),o=parseInt(a,2)+14200704e5;return new Date(o).toLocaleString()}catch{return"(Failed to get date)"}},De=function(e){for(const a of e)a.shouldShowEmptyCategory=function(){return!0}},j=function(e){if(!e)return;const a=Object.values(e.channels);e.shownChannelIds=a.sort(function(o,s){const u=o.record.position+(o.record.isGuildVocal()?1e4:0)+(o.record.isHidden()?1e5:0),i=s.record.position+(s.record.isGuildVocal()?1e4:0)+(s.record.isHidden()?1e5:0);return u<i?-1:u>i?1:0}).map(function(o){return o.id})},de=function(e){if(!e)return{channels:[],amount:0};const a=S.getMutableGuildChannelsForGuild(e),o=Object.values(a).filter(function(s){return s.isHidden()&&s.type!==w.ChannelTypes.GUILD_CATEGORY});return{channels:o,amount:o.length}},V={},Pe=function(e,a){const o=de(a);V[a]||(V[a]=[]);for(const s of e){const u=Object.entries(s.channels).map(function(i){let[r,c]=i;return o.channels.some(function(l){return l.id===r})?(V[a].some(function(l){return l[0]===r})||V[a].push([r,c]),!1):[r,c]}).filter(Boolean);s.channels=Object.fromEntries(u)}return{records:Object.fromEntries(V[a]),...o}},R=function(){G.findInTree(oe,function(e){return e?.name==="PermissionStore"&&e?.actionHandler?.name==="handleConnectionOpen"},{})?.actionHandler?.(),G.findInTree(oe,function(e){return e?.name==="ChannelListStore"&&e?.actionHandler?.name==="handleReset"},{})?.actionHandler?.()},{ScrollView:ve}=m.General,{FormRow:p,FormRadioRow:M,FormSwitchRow:x}=m.Forms;var Ne=t.React.memo(function(){return n.storage.hiddenChannelIcon??=C.hiddenChannelIcon,n.storage.faded??=C.faded,n.storage.sort??=C.sort,n.storage.showPerms??=C.showPerms,n.storage.showAdmin??=C.showAdmin,n.storage.stopMarkingUnread??=C.stopMarkingUnread,n.storage.alwaysCollapse??=C.alwaysCollapse,n.storage.shouldShowEmptyCategory??=C.shouldShowEmptyCategory,Z.useProxy(n.storage),t.React.createElement(ve,null,t.React.createElement(p,{label:"Hidden Channel Icon",subLabel:"What icon to show as indicator for hidden channels.",leading:t.React.createElement(Q,{settings:!0,width:24,height:24,key:n.storage.hiddenChannelIcon})}),t.React.createElement(M,{label:"Lock Icon",onPress:function(){n.storage.hiddenChannelIcon="lock",R()},trailing:t.React.createElement(p.Arrow,null),selected:n.storage.hiddenChannelIcon==="lock",style:{marginHorizontal:12}}),t.React.createElement(M,{label:"Eye Icon",onPress:function(){n.storage.hiddenChannelIcon="eye",R()},trailing:t.React.createElement(p.Arrow,null),selected:n.storage.hiddenChannelIcon==="eye",style:{marginHorizontal:12}}),t.React.createElement(M,{label:"None",onPress:function(){n.storage.hiddenChannelIcon="false",R()},trailing:t.React.createElement(p.Arrow,null),selected:n.storage.hiddenChannelIcon==="false",style:{marginHorizontal:12}}),t.React.createElement(x,{label:"Faded Channel",subLabel:"Fade away hidden channel like if they are muted.",value:n.storage.faded,onValueChange:function(e){n.storage.faded=e,R()},note:""}),t.React.createElement(p,{label:"Sorting Order",subLabel:"Where to display Hidden Channels.",leading:t.React.createElement(p.Icon,{source:U.getAssetIDByName("ic_forum_channel_sort_order_24px")})}),t.React.createElement(M,{label:"Hidden Channels in the native Discord order (default)",onPress:function(){n.storage.sort="native",R()},trailing:t.React.createElement(p.Arrow,null),selected:n.storage.sort==="native",style:{marginHorizontal:12}}),t.React.createElement(M,{label:"Hidden Channels at the bottom of the Category",onPress:function(){n.storage.sort="bottom",R()},trailing:t.React.createElement(p.Arrow,null),selected:n.storage.sort==="bottom",style:{marginHorizontal:12}}),t.React.createElement(M,{label:"Hidden Channels in a separate Category at the bottom",onPress:function(){n.storage.sort="extra",R()},trailing:t.React.createElement(p.Arrow,null),selected:n.storage.sort==="extra",style:{marginHorizontal:12}}),t.React.createElement(x,{label:"Show Permissions",subLabel:"Show what roles/users can access the hidden channel.",value:n.storage.showPerms,onValueChange:function(e){n.storage.showPerms=e,R()},note:""}),t.React.createElement(p,{label:"Show Admin Roles",subLabel:"Show roles that have ADMINISTRATOR permission in the hidden channel page (requires 'Shows Permission' enabled).",leading:t.React.createElement(p.Icon,{source:U.getAssetIDByName("ic_progress_wrench_24px")})}),t.React.createElement(M,{label:"Show only channel specific roles",onPress:function(){n.storage.showAdmin="channel",R()},trailing:t.React.createElement(p.Arrow,null),selected:n.storage.showAdmin==="channel",style:{marginHorizontal:12}}),t.React.createElement(M,{label:"Include Bot Roles",onPress:function(){n.storage.showAdmin="include",R()},trailing:t.React.createElement(p.Arrow,null),selected:n.storage.showAdmin==="include",style:{marginHorizontal:12}}),t.React.createElement(M,{label:"Exclude Bot Roles",onPress:function(){n.storage.showAdmin="exclude",R()},trailing:t.React.createElement(p.Arrow,null),selected:n.storage.showAdmin==="exclude",style:{marginHorizontal:12}}),t.React.createElement(M,{label:"Don't Show Administrator Roles",onPress:function(){n.storage.showAdmin="false",R()},trailing:t.React.createElement(p.Arrow,null),selected:n.storage.showAdmin==="false",style:{marginHorizontal:12}}),t.React.createElement(x,{label:"Stop marking hidden channels as read",subLabel:"Stops the plugin from marking hidden channels as read.",value:n.storage.stopMarkingUnread,onValueChange:function(e){n.storage.stopMarkingUnread=e,R()},note:""}),t.React.createElement(x,{label:"Collapse Hidden Category",subLabel:"Collapse hidden category by default (requires sorting order as extra category).",value:n.storage.alwaysCollapse,onValueChange:function(e){n.storage.alwaysCollapse=e,R()},note:""}),t.React.createElement(x,{label:"Show Empty Category",subLabel:"Show Empty Category either because there were no channels in it or all channels are under hidden channels category.",value:n.storage.shouldShowEmptyCategory,onValueChange:function(e){n.storage.shouldShowEmptyCategory=e,R()},note:""}))});const{ScrollView:Me}=m.General,{FormSwitchRow:_e}=m.Forms;var Te=t.React.memo(function(){return n.storage.channels??=C.channels,Z.useProxy(n.storage),t.React.createElement(Me,null,...Object.keys(n.storage.channels).map(function(e){return t.React.createElement(_e,{label:`Show ${ce(e.split("_")[1])}${e.split("_").length===3?` ${ce(e.split("_")[2])}`:""} Channels`,value:n.storage.channels[e],onValueChange:function(a){n.storage.channels[e]=a,R()},note:""})}))});const{ScrollView:Ge,Image:He}=m.General,{FormRow:Le,FormSwitch:Ue}=m.Forms;var Be=t.React.memo(function(){n.storage.blacklistedGuilds??=C.blacklistedGuilds,Z.useProxy(n.storage);const[e,a]=t.React.useState([]);return t.React.createElement(Ge,{style:{flex:1}},t.React.createElement(m.Search,{style:{padding:15},placeholder:"Search guilds",onChangeText:function(o){return a(o.split(" "))}}),...Object.values(J.getGuilds()).filter(function(o){return e?e.every(function(s){return o?.name?.toLowerCase().includes(s.toLowerCase())})||e.every(function(s){return o?.description?.toLowerCase().includes(s.toLowerCase())})||e.some(function(s){return o?.name?.toLowerCase().includes(s.toLowerCase())})&&e.some(function(s){return o?.description?.toLowerCase().includes(s.toLowerCase())})||e.some(function(s){return o?.id?.includes(s)}):!0}).sort(function(o,s){return o.name.localeCompare(s.name)}).map(function(o){return t.React.createElement(Le,{label:o.name,subLabel:"Allows you to tap double tap on any messages to reply to them.",leading:t.React.createElement(He,{style:{borderRadius:120,height:24,width:24},source:{uri:se.getGuildIconURL(o)??se.getDefaultAvatarURL(Se(0,69))}}),trailing:t.React.createElement(Ue,{value:n.storage.blacklistedGuilds[o.id],onValueChange:function(){n.storage.blacklistedGuilds[o.id]=!n.storage.blacklistedGuilds[o.id],R()}})})}))});const{BundleUpdaterManager:Oe}=window.nativeModuleProxy??{},{ScrollView:ke}=m.General,{FormRow:v}=m.Forms;var Ve=t.React.memo(function(){const e=t.NavigationNative.useNavigation();return t.React.createElement(ke,null,t.React.createElement(v,{label:"General Settings",leading:t.React.createElement(v.Icon,{source:U.getAssetIDByName("ic_settings")}),trailing:function(){return t.React.createElement(v.Arrow,null)},onPress:function(){return e.push("VendettaCustomPage",{title:"General Settings",render:Ne})}}),t.React.createElement(v,{label:"Choose what channels you want to display",leading:t.React.createElement(v.Icon,{source:U.getAssetIDByName("ic_forum_channel_locked")}),trailing:function(){return t.React.createElement(v.Arrow,null)},onPress:function(){return e.push("VendettaCustomPage",{title:"Choose what channels you want to display",render:Te})}}),t.React.createElement(v,{label:"Guilds Blacklist",leading:t.React.createElement(v.Icon,{source:U.getAssetIDByName("ic_guild_grid_24px")}),trailing:function(){return t.React.createElement(v.Arrow,null)},onPress:function(){return e.push("VendettaCustomPage",{title:"Guilds Blacklist",render:Be})}}),t.React.createElement(v,{label:"Reload Discord",leading:t.React.createElement(v.Icon,{source:U.getAssetIDByName("ic_message_retry")}),onPress:function(){return Oe.reload()}}))});function xe(){const e=X?.can?.prototype?.constructor;K.prototype.isHidden??=function(){for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];const{type:u}=this;return![1,3].includes(u)&&!e?.(t.constants.Permissions.VIEW_CHANNEL,this)}}function Fe(){n.storage.alwaysCollapse??=C.alwaysCollapse,n.storage.sort??=C.sort,n.storage.blacklistedGuilds??=C.blacklistedGuilds,n.storage.shouldShowEmptyCategory??=C.shouldShowEmptyCategory;const e=g.after("isCollapsed",ge,function(i,r){return(!i[0]?.endsWith("hidden")||!n.storage.alwaysCollapse||n.storage.alwaysCollapse)&&r});f.push(e);const a=g.after("getChannels",ee,function(i,r){const c=r[w.ChannelTypes.GUILD_CATEGORY],l=`${i[0]}_hidden`,d=c?.find(function(N){return N.channel.id==l});if(!d)return r;const A=c.filter(function(N){return N.channel.id!==l}),T=(A[A.length-1]||{comparator:0}).comparator+1;return Object.defineProperty(d.channel,"position",{value:T,writable:!0}),Object.defineProperty(d,"comparator",{value:T,writable:!0}),r});f.push(a);const o=g.after("getChannel",S,function(i,r){return n.storage.sort!=="extra"||n.storage.blacklistedGuilds[i[0]?.replace("_hidden","")]||!i[0]?.endsWith("_hidden")?r:new K({guild_id:i[0]?.replace("_hidden",""),id:i[0],name:"Hidden Channels",type:w.ChannelTypes.GUILD_CATEGORY})});f.push(o);const s=g.after("getMutableGuildChannelsForGuild",S,function(i,r){if(n.storage.sort!=="extra"||n.storage.blacklistedGuilds[i[0]])return r;const c=`${i[0]}_hidden`,l=new K({guild_id:i[0],id:c,name:"Hidden Channels",type:w.ChannelTypes.GUILD_CATEGORY}),d=ee.getChannels(i[0])[w.ChannelTypes.GUILD_CATEGORY];return Object.defineProperty(l,"position",{value:(d[d.length-1]||{comparator:0}).comparator+1,writable:!0}),r[c]||(r[c]=l),r});f.push(s);const u=g.after("getGuild",Ce,function(i,r){if(n.storage.blacklistedGuilds[i[0]])return r;switch(n.storage.sort){case"bottom":{j(r.guildChannels.favoritesCategory),j(r.guildChannels.recentsCategory),j(r.guildChannels.noParentCategory);for(const c in r.guildChannels.categories)j(r.guildChannels.categories[c]);break}case"extra":{const c=`${i[0]}_hidden`,l=r.guildChannels.categories[c],d=Pe([r.guildChannels.favoritesCategory,r.guildChannels.recentsCategory,r.guildChannels.noParentCategory,...Object.values(r.guildChannels.categories).filter(function(A){return A.id!==c})],i[0]);l.channels=Object.fromEntries(Object.entries(d.records).map(function(A){let[T,N]=A;return N.category=l,[T,N]})),l.isCollapsed=Boolean(r.guildChannels.collapsedCategoryIds[c]),l.shownChannelIds=r.guildChannels.collapsedCategoryIds[c]||l.isCollapsed?[]:d.channels.sort(function(A,T){const N=A.position+(A.isGuildVocal()?1e4:1e5),Y=T.position+(T.isGuildVocal()?1e4:1e5);return N<Y?-1:N>Y?1:0}).map(function(A){return A.id});break}}return n.storage.shouldShowEmptyCategory&&De([...Object.values(r.guildChannels.categories).filter(function(c){return!c.id.includes("hidden")})]),r});f.push(u)}function je(){const e=g.instead("fetchMessages",ye,function(a,o){if(!S.getChannel(a[0].channelId)?.isHidden?.())return o.call(this,...a)});f.push(e)}function Ye(){n.storage.blacklistedGuilds??=C.blacklistedGuilds,n.storage.channels??=C.channels;const e=g.after("can",X,function(a,o){return a[1]?.isHidden?.()?a[0]==w.Permissions.VIEW_CHANNEL?!n.storage.blacklistedGuilds[a[1].guild_id]&&n.storage.channels[w.ChannelTypes[a[1].type]]:a[0]==w.Permissions.CONNECT?!1:o:o});f.push(e)}function ze(){n.storage.stopMarkingUnread??=C.stopMarkingUnread;const e=g.after("getGuildChannelUnreadState",H,function(l,d){return l[0]?.isHidden?.()&&!n.storage.stopMarkingUnread?{mentionCount:0,hasNotableUnread:!1}:d});f.push(e);const a=g.after("getMentionCount",H,function(l,d){return S.getChannel(l[0])?.isHidden?.()&&!n.storage.stopMarkingUnread?0:d});f.push(a);const o=g.after("getUnreadCount",H,function(l,d){return S.getChannel(l[0])?.isHidden?.()&&!n.storage.stopMarkingUnread?0:d});f.push(o);const s=g.after("hasNotableUnread",H,function(l,d){return n.storage.stopMarkingUnread?d:d&&!S.getChannel(l[0])?.isHidden?.()});f.push(s);const u=g.after("hasRelevantUnread",H,function(l,d){return n.storage.stopMarkingUnread?d:d&&!l[0].isHidden?.()});f.push(u);const i=g.after("hasTrackedUnread",H,function(l,d){return n.storage.stopMarkingUnread?d:d&&!S.getChannel(l[0])?.isHidden?.()});f.push(i);const r=g.after("hasUnread",H,function(l,d){return n.storage.stopMarkingUnread?d:d&&!S.getChannel(l[0])?.isHidden?.()});f.push(r);const c=g.after("hasUnreadPins",H,function(l,d){return n.storage.stopMarkingUnread?d:d&&!S.getChannel(l[0])?.isHidden?.()});f.push(c)}const{View:ue,Text:he,Image:We,Pressable:Ze}=m.General;var Ke=t.React.memo(function(e){const a=t.stylesheet.createThemedStyleSheet({container:{minHeight:45,flexDirection:"row",marginVertical:10,justifyContent:"center",alignItems:"center"},avatarContainer:{width:32,height:32,borderRadius:16,overflow:"hidden"},avatar:{width:42,height:42},infoContainer:{marginLeft:20,flexDirection:"row",alignItems:"center",justifyContent:"center"},username:{color:t.constants.ThemeColorMap?.HEADER_SECONDARY??"#D1D1D1",fontSize:20,fontWeight:"bold"},discriminator:{fontSize:16,color:t.constants.ThemeColorMap?.HEADER_SECONDARY??"#D1D1D1"}});return ie?t.React.createElement(ie,{...e.member,user:e.user,status:q.getStatus(e.user.id),activities:q.getActivities(e.user.id),applicationStream:null,isOwner:!1,isMobileOnline:q.isMobileOnline(e.user.id),channel:e.channel,style:{height:48,width:200}}):t.React.createElement(Ze,{accessibilityRole:"button",style:a.container,onPress:function(){return re.showUserProfile({userId:e.user.id})},android_ripple:{color:"#ffffff12"},accessibilityLabel:e.user.username,accessibilityHint:"Double tap to view profile"},t.React.createElement(ue,{style:a.avatarContainer},t.React.createElement(We,{source:e.user.getAvatarSource(),style:a.avatar})),t.React.createElement(ue,{style:a.infoContainer},t.React.createElement(he,{style:a.username},e.user.username),e.user.discriminator!=="0"&&t.React.createElement(he,{style:a.discriminator},"#",e.user.discriminator)))});const{View:_,Text:E,ScrollView:qe,Image:Qe,Pressable:Xe}=m.General;var Je=t.React.memo(function(e){n.storage.showAdmin??=C.showAdmin,n.storage.showPerms??=C.showPerms;const a=t.stylesheet.createThemedStyleSheet({image:{width:100,height:100,padding:5,marginBottom:15},container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:b.semanticColors?.BACKGROUND_PRIMARY??"#00000000"},none:{color:b.semanticColors?.HEADER_SECONDARY??"#D1D1D1",fontSize:14,fontFamily:t.constants.Fonts?.PRIMARY_SEMIBOLD,marginLeft:2.5,marginRight:2.5,paddingLeft:25,paddingRight:25,paddingTop:5,textAlign:"center"},permissionContainer:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:b.semanticColors?.BACKGROUND_SECONDARY_ALT??"#00000010"},header:{color:b.semanticColors?.HEADER_PRIMARY??"#D1D1D1",fontFamily:t.constants.Fonts?.PRIMARY_SEMIBOLD,fontWeight:"bold",fontSize:24},description:{color:b.semanticColors?.HEADER_SECONDARY??"#D1D1D1",fontSize:16,fontFamily:t.constants.Fonts?.PRIMARY_SEMIBOLD,marginLeft:2.5,marginRight:2.5,paddingLeft:25,paddingRight:25,paddingTop:5,textAlign:"center"},topicContainer:{backgroundColor:b.semanticColors?.BACKGROUND_TERTIARY??"#000000F0",maxWidth:"90%"},topicRowContainer:{maxWidth:"89%",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center",marginBottom:10},topicText:{margin:5,color:b.semanticColors?.HEADER_SECONDARY??"#D1D1D1"},moreInfo:{marginTop:5},permissionHeader:{color:b.semanticColors?.HEADER_SECONDARY??"#D1D1D1",fontSize:16,fontFamily:t.constants.Fonts?.PRIMARY_MEDIUM,marginLeft:2.5,marginRight:2.5,paddingLeft:25,paddingRight:25,paddingTop:5,textAlign:"center",marginTop:5},permissionHeaderBorder:{borderTopWidth:1},mentionContainer:{marginTop:2.5,marginBottom:2.5},roleContainer:{paddingTop:2.5,flexDirection:"column",justifyContent:"center"},tagContainer:{marginTop:5,backgroundColor:b.semanticColors?.BACKGROUND_SECONDARY_ALT??"#00000010",padding:10,borderRadius:5,color:b.semanticColors?.HEADER_SECONDARY??"#D1D1D1"},tag:{color:b.semanticColors?.HEADER_PRIMARY??"#D1D1D1",fontFamily:t.constants.Fonts?.PRIMARY_SEMIBOLD,fontWeight:"bold",fontSize:16,marginTop:5,textAlign:"center",marginLeft:2.5,marginRight:2.5,paddingLeft:25,paddingRight:25}}),[o,s]=t.React.useState(null),[u,i]=t.React.useState(!1),[r,c]=t.React.useState([]),[l,d]=t.React.useState([]),[A,T]=t.React.useState([]),N=function(){if(!e.channel.topic)return s(null);const I=be.parseTopic(e.channel.topic),D=[],y=[];if(!I)return s(null);for(const B of I)if(typeof B=="string"&&B.includes(`
`)){const z=B.split(`
`);for(const O of z)D.push(O),y.push([...D]),D.length=0}else D.push(B);D.length&&y?.push(D),!u&&y.length>2&&y?.splice(2,0,["Click to View More..."]);const P=y?.slice(0,u?y.length:3)?.map(function(B,z){return t.React.createElement(_,{key:z,style:a.topicRowContainer},B.map(function(O,lt){return typeof O=="string"?t.React.createElement(E,{key:`${lt}${z}`,style:O==="Click to View More..."?{fontWeight:"bold",fontFamily:t.constants.Fonts?.PRIMARY_SEMIBOLD,...a.topicText}:a.topicText},O):O}))}),it=t.React.createElement(Xe,{accessibilityRole:"button",style:a.container,onPress:function(){return i(!u)},android_ripple:{color:"#ffffff12"},accessibilityLabel:"Channel Topic"},t.React.createElement(_,{style:a.topicContainer},P));return s(it)},Y=function(){const I=Object.values(e.channel.permissionOverwrites).filter(function(y){return y&&y?.type===0&&(n.storage.showAdmin!=="false"&&k.has(e.guild.roles[y.id].permissions,w.Permissions.ADMINISTRATOR)||k.has(y.allow,w.Permissions.VIEW_CHANNEL)||k.has(e.guild.roles[y.id].permissions,w.Permissions.VIEW_CHANNEL)&&!k.has(y.deny,w.Permissions.VIEW_CHANNEL))});if(!I?.length)return c([t.React.createElement(E,{style:a.none},"None")]);const D=I.map(function(y){return t.React.createElement(ae,{guildId:e.guild.id,role:e.guild.roles[y.id]})});return c(D)},st=function(){if(n.storage.showAdmin==="false")return d([t.React.createElement(E,{style:a.none},"None")]);const I=Object.values(e.guild.roles).filter(function(y){return k.has(y.permissions,w.Permissions.ADMINISTRATOR)&&(n.storage.showAdmin==="include"||n.storage.showAdmin==="exclude"&&!y.tags?.bot_id)});if(!I?.length)return d([t.React.createElement(E,{style:a.none},"None")]);const D=I.map(function(y){return t.React.createElement(ae,{guildId:e.guild.id,role:e.guild.roles[y.id]})});return d(D)},ot=async function(){const I=Object.values(e.channel.permissionOverwrites).filter(function(P){return Boolean(P&&P?.type===1)});for(const P of I)await re.fetchProfile(P.id,{guildId:e.guild.id,withMutualGuilds:!1});const D=Object.values(e.channel.permissionOverwrites).filter(function(P){return Boolean(me.can({permission:w.Permissions.VIEW_CHANNEL,user:ne.getUser(P.id),context:e.channel})&&$.isMember(e.guild.id,P.id))});if(!D?.length)return T([t.React.createElement(E,{style:a.none},"None")]);const y=D.map(function(P){return t.React.createElement(Ke,{user:ne.getUser(P.id),guild:e.guild,channel:e.channel,member:$.getMember(e.guild.id,P.id)})});return T(y)};return t.React.useEffect(function(){N()},[e.channel.id,e.channel.topic,u]),t.React.useEffect(function(){Y(),st(),ot()},[e.channel.id]),t.React.createElement(_,{style:a.container},t.React.createElement(qe,null,t.React.createElement(_,{style:a.container},t.React.createElement(Qe,{style:a.image,source:{uri:"https://tharki-god.github.io/files-random-host/unknown%20copy.png"}}),t.React.createElement(E,{style:a.header},"This is a hidden channel."),t.React.createElement(E,{style:a.description},"You cannot see the contents of this channel.",e.channel.topic&&` However, you may see its ${e.channel.type!==15?"topic":"guidelines"}.`),o,e.channel.lastMessageId&&t.React.createElement(E,{style:{...a.description,...a.moreInfo}},"Last message sent:"," ",Ie(e.channel.lastMessageId)),e.channel.rateLimitPerUser>0&&t.React.createElement(E,{style:{...a.description,...a.moreInfo}},"Slowmode:",Ae(e.channel.rateLimitPerUser)),e.channel.nsfw&&t.React.createElement(E,{style:{...a.description,...a.moreInfo}},"Age-Restricted Channel (NSFW) \u{1F51E}"),n.storage.showPerms&&e.channel.permissionOverwrites&&t.React.createElement(_,{style:a.permissionContainer},t.React.createElement(E,{style:a.permissionHeader},"Users that can see this channel:"),t.React.createElement(_,{style:a.mentionContainer},A),t.React.createElement(E,{style:{...a.permissionHeader,...a.permissionHeaderBorder}},"Channel-specific roles:"),t.React.createElement(_,{style:a.roleContainer},r),n.storage.showAdmin!=="false"&&n.storage.showAdmin!=="channel"&&t.React.createElement(_,null,t.React.createElement(E,{style:{...a.permissionHeader,...a.permissionHeaderBorder}},"Admin roles:"),t.React.createElement(_,{style:a.roleContainer},l))),e.channel.type===15&&e.channel.availableTags&&t.React.createElement(_,{style:a.tagContainer},t.React.createElement(E,{style:{...a.description,...a.moreInfo}},"Forum Tags:"),e.channel.availableTags&&e.channel.availableTags.length>0&&e.channel.availableTags.map(function(I){return t.React.createElement(E,{style:a.tag},`${I.emojiName} ${I.name}`)})))))});const{View:$e}=m.General,et=function(){n.storage.faded??=C.faded;const e=g.after("render",$e,function(o,s){const u=G.findInReactTree(s,function(r){return r?.props?.channel&&!r?.props?.channel?.isCategory?.()&&r?.props?.isRulesChannel!==null});if(typeof u?.type?.type!="function")return s;const i=g.after("type",u.type,function(r,c){let[{channel:l}]=r;return l?.isHidden?.()&&(G.findInReactTree(c,function(d){return d!==c&&Array.isArray(d.props?.children)})??c)?.props?.children?.push?.(React.createElement(Q,null)),c});return f.push(i),e?.(),s});f.push(e);const a=g.after("default",F,function(o,s){const{channel:u}=G.findInTree(o[0],function(r){return r?.channel},{})??{};if(!u?.isHidden?.())return s;const i=G.findInReactTree(s,function(r){return r!==s&&Array.isArray(r?.props?.children)});if(i?.props?.children?.push?.(React.createElement(Q,null)),!i)return s;s.props.onPress=function(){return null};for(const r of i.props.children)r?.props?.mode===F.ChannelModes.LOCKED&&(r.props.mode=n.storage.faded?F.ChannelModes.MUTED:F.ChannelModes.DEFAULT,r.props.source&&(r.props.source=U.getAssetIDByName("ic_voice_channel_locked_24px")));return s});f.push(a)},tt=function(){n.storage.faded??=C.faded;const e=g.after("getMutedChannels",te,function(o,s){if(!n.storage.faded)return s;const u=de(o[0]).channels.map(function(i){return i.id});return new Set([...s,...u])});f.push(e);const a=g.after("isChannelMuted",te,function(o,s){const u=S.getChannel(o[1]);return!n.storage.faded||!u?.isHidden?.()?s:!0});f.push(a)},nt=function(){const e=g.after("default",pe,function(o,s){const u=Ee?.getGuildId?.();if(!u)return s;const i=we.getChannelId(u),r=S.getChannel(i),c=G.findInTree(s,function(l){return l?.CHANNEL?.headerRight},{});return r?.isHidden?.()&&c?.CHANNEL&&(c.CHANNEL.headerRight=function(){return null},c.CHANNEL.headerTitle=function(){return null},c.CHANNEL.render=function(){return React.createElement(Je,{channel:r,guild:J?.getGuild?.(r.guild_id)})}),s});f.push(e);const a=g.after("default",Re,function(o,s){const u=G.findInReactTree(s,function(r){return r?.props?.guildId&&r?.props?.channelId&&typeof r?.type?.type=="function"});if(typeof u?.type?.type!="function")return s;const i=g.after("type",u.type,function(r,c){let[l]=r;return S.getChannel?.(l?.channelId)?.isHidden?.()&&c?.props?.hasMembersDrawer&&(c.props.hasMembersDrawer=!1),c});return f.push(i),a?.(),s})};function at(){et(),tt(),nt()}const f=[];var fe={patchAll:function(){xe(),Fe(),je(),Ye(),ze(),at()},unpatchAll:function(){f.forEach(function(e){return e?.()}),f.length=0}},rt={onLoad:function(){fe.patchAll(),R()},onUnload:function(){fe.unpatchAll(),R()},settings:Ve};return W.default=rt,Object.defineProperty(W,"__esModule",{value:!0}),W})({},vendetta.metro.common,vendetta.ui.assets,vendetta.ui.components,vendetta.storage,vendetta.plugin,vendetta.ui,vendetta.metro,vendetta.utils,vendetta.patcher);
