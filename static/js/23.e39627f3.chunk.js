(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{279:function(n,e){n.exports={title:"1.3.0 Release",description:"Menu swapping and highlighting, hp and spec regen meter, and player names on minimap",author:"Adam",__content:'<p><a href="https://github.com/XrioBtw">@Xrio</a> contributed a menu swapper plugin which\nswaps the left click menu options on some things.</p>\n<p><img src="/img/blog/1.3.0-Release/menuswap.png" alt="menuswap"/></p>\n<p>The ground items plugin can now highlight menu options based on item price,\nthanks to <a href="https://github.com/devdennis">@devdennis</a>.</p>\n<p><img src="/img/blog/1.3.0-Release/menuhighlight.png" alt="menuhighlight"/></p>\n<p><a href="https://github.com/abextm">@abex</a> added a regen meter to the hitpoints and\nspecial attack orbs.</p>\n<p><img src="/img/blog/1.3.0-Release/regen.png" alt="regen"/></p>\n<p>The player indicator plugin can now show player names on the minimap, from\n<a href="https://github.com/deathbeam">@deathbeam</a></p>\n<p><img src="/img/blog/1.3.0-Release/minimap.png" alt="minimap"/></p>\n<p>Also, thanks to <a href="https://github.com/josharoo">@josharoo</a> and\n<a href="https://github.com/fe-mirino">@fe-mirino</a> for their work on\nexpanding the <a href="https://github.com/runelite/runelite/wiki">wiki</a>.</p>\n<p>The minimap plugin now has an option to allow hiding the minimap on resized mode\n(<a href="https://github.com/Blizik">@Blizik</a>)</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The xp tracker plugin has been overhauled to show more information in less\nspace</li>\n<li>Fixed item sprites in the fishing plugin (among other places) sometimes having\nthe incorrect zoom applied to them</li>\n<li>Opponent info overlay will now update hitpoints for opponents you recently\nwere targeting</li>\n<li>Fix hiscore player menu option intefering with other game menu options like\nWhack</li>\n<li>Fix attack styles not being hidden when attack style plugin configuration is\nchanged</li>\n<li>Add right click menu to screenshot button to open the screenshot folder</li>\n<li>Reposition points box in raids to be underneat the xp dropper overlay</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 15 contributors this release!</p>\n<pre><code>Adam (20):\n      Bump to 1.2.19.1-SNAPSHOT\n      Bump to 1.3.0-SNAPSHOT\n      session client: fix throwing IllegalArgumentException if deserialization of uuid fails\n      widget id: fix viewport child widget\n      Also bump scm tag\n      session client: fix throwing IllegalArgumentException if deserialization of uuid fails\n      widget id: fix viewport child widget\n      item controller: add method for bulk price lookups\n      instance map: fix various races between game and event threads\n      runelite-api: add ability to get npc index\n      runelite-api: expose cachedNpcs\n      opponent info overlay: use last opponent if no opponent is targeted\n      Reset player menu types whenever the options are changed\n      runelite-api: expose npc composition\n      dev tools overlay: transform npcs if applicable\n      sessions: decrease session ping frequency\n      cache: fix item definition default zoom2d\n      runelite-api: add scale to createItemSprite\n      http-service: add sprite service\n      runelite-client: add github release plugin configuration\n\nBart van Helvert (1):\n      Remove unneeded drawRegionTile calls\n\nBlizik (1):\n      Add ability to toggle minimap display\n\nConnor (1):\n      Resolving Issue #860 - Warned Attack Styles not properly hiding. Adding automated test coverage for AttackIndicatorPlugin.\n\nDennis (1):\n      ground items plugin: add option to highlight menu\n\nDennis de V (1):\n      Fix ground items nullpointer exception\n\nInfinitay (1):\n      Add confirmation dialog to runelite logout button\n\nJeremy Plsek (1):\n      Add right click menu to screenshot button #797\n\nJoshua Filby (2):\n      runelite-client: Add Text#removeTags method\n      runelite-client: Update plugins to use Text.removeTags\n\nKamiel (3):\n      Raids plugin: Reposition the points box to prevent it from overlapping overlays\n      Fix instance map &quot;show&quot; option not displaying in right-click menu\n      Fix instance map &quot;show&quot; option not displaying in right-click menu\n\nMax Weber (11):\n      injector: Fix scriptvm not updating currentScript\n      isRSHidden &gt; isSelfHidden\n      Move widget inspector into it&#39;s own window\n      jewellerycount: add imp-in-a-box\n      Rename Point3D to WorldPoint\n      Add conversion methods to WorldPoint and LocalPoint\n      Update almost everything to the new API\n      Remove old API\n      Add planes to planeless tile objects\n      hunter plugin: Don&#39;t iterate over all tiles\n      Add regen meter plugin\n\nSeth (6):\n      dev tools: add location to dev tools plugin\n      Remove viewport contains\n      xp tracker: add format suffix to reduce string size\n      xp tracker: update xp tracker UI\n      NpcID: update ids to cache 165\n      fishing plugin: remove broken minnow npcs and swap to graphic check\n\nTomas Slusny (6):\n      Add idle anim and combat idle toggles to notifier\n      Remove duplicated and unused OverlayUtil code\n      Add support for drawing names on minimap\n      Allow specifying default world in [0-9]{2} format\n      Title-case and remove &quot;plugin&quot; from ME swapper\n      Fix drawing of player names on minimap\n\nXrioBtw (1):\n      Add menu entry swapper plugin\n\nnvisser (1):\n      Round actions remaining up\n</code></pre>'}}}]);
//# sourceMappingURL=23.e39627f3.chunk.js.map