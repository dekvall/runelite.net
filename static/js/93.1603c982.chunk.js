(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{349:function(n,e){n.exports={title:"1.5.29 Release",description:"Seed vault price checker, scroll zoom speed changer, and bug fixes",author:"Adam",__content:'<p>The bank plugin will now total up the value of all of the seeds in the seed\nvault</p>\n<p><img src="/img/blog/1.5.29-Release/seedvault.png" alt="seedvault"/></p>\n<p>The camera zoom plugin now has a setting to configure the scroll zoom speed, and\nallows configuring the control key to reset zoom.</p>\n<p>The grounditems plugin can now recolor the telegrab menu to according to the items value</p>\n<p><img src="/img/blog/1.5.29-Release/telegrab.png" alt="telegrab"/></p>\n<p>The color picker now has a palette of recent colors</p>\n<p><img src="/img/blog/1.5.29-Release/colorpicker.png" alt="colorpicker"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix Esc changing tabs when in typing mode in the key remapping plugin</li>\n<li>Add ability to configure custom key remaps for the F keys and esc to key\nremapping plugin</li>\n<li>Fix impling plugin sometimes not working with Puro-Puro impling spawns</li>\n<li>Fix Motherlode mine rock obstacles not being marked when entering the mine</li>\n<li>Add Dragonfire shield timer to timers plugin</li>\n<li>Add farming harvest actions to the idle notifier</li>\n<li>Add Shilo gem rocks to the mining plugin respawn timer</li>\n<li>Add Sarachnis respawn timer</li>\n<li>Fix location of Fishing Platform elite clue stash unit</li>\n<li>Fix HD prayer bar flick bar</li>\n<li>Add Entrana river fishing spots to fishing plugin</li>\n<li>Fix MTA telekinetic solver sometimes not updating after telegrabbing the\nguardian</li>\n<li>Fix several edge cases related to untradeables in the items kept on death\nplugin</li>\n<li>Add support for labeling ore and gems to the item identification plugin</li>\n<li>Add menu swaps for ToB Quick-Enter and Enchant on Eluned</li>\n<li>Add Rantz arrow collection to the daily task plugin</li>\n<li>Add option to the chat filter plugin to filter all login and logout\nnotifications</li>\n<li>Fix the loot tracker counting duplicate raids chests if opened more than once</li>\n<li>Fix skybox color on the Cosmic entity&#39;s plane</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 23 contributors this release!</p>\n<pre><code>Adam (11):\n      Remove runescape-api and mixins\n      keyremapping: fix escape from chat triggering game keybindings\n      keyremapping: allow custom keybinds for F keys\n      keyremapping: add F-key remap for escape\n      api: add item container id to item container changed event\n      chat filter: add option to filter login notifications\n      api: add npc changed event\n      imp plugin: cleanup\n      imp plugin: handle npc changes to imps\n      bank plugin: refactor to allow pricing multiple containers\n      bank plugin: add seed vault\n\nAdam Witkowski (1):\n      mlm: fix rock obstacles not being marked on load\n\nCameron Moberg (1):\n      Stop screenshotPlugin from overwriting previous screenshots\n\nDamen (1):\n      Add Dragonfire Shield timer to timers plugin (#9234)\n\nDaniel (1):\n      Properly capitalize &#39;Brother Kojo&#39; in Watchtower clue scroll (#9297)\n\nDavid (4):\n      idle notifier: add farming harvest animations\n      Center the Inventory icon in 2005 resizable mode (#9322)\n      mining plugin: add gem rocks\n      Add GE limit for Golovanova fruit top (#9385)\n\nDecorth (2):\n      Add Sarachnis respawn timer to Boss timers plugin (#9313)\n      Fix location of Fishing Platform elite clue stash (#9327)\n\nHydrox6 (1):\n      prayer: fix HD prayer bar flick location\n\nJordan Atwood (6):\n      PluginListItem: Reset label color on popup menu item click\n      loottracker: Fix duplicate cox and tob chest loots\n      grounditemsplugin: Color telegrab menu entries\n      Remove unused Slf4j annotations and imports\n      hotcoldclue: Display npc location before using device\n      slayerplugin: Correct Jad and Zuk task tracking\n\nJordan Parker (1):\n      fishing: Add Entrana river fishing spots\n\nMax Weber (6):\n      runelite-client: Don&#39;t try to contain to screen when contain is off\n      ClientThread: repeat call immediate invokes correctly\n      runelite-client: Handle missing sprites correctly\n      runelite-client: Use BufferedImage where applicable\n      InfoBoxManager: handle AsyncBufferedImage more correctly\n      runelite-client: Allow partial screen containment again\n\nOussama (1):\n      Fix typo in Loot Tracker panel (#9341)\n\nPineapplezz (1):\n      Improve Arrandar mountain pass clue description (#9331)\n\nQuasindro (2):\n      mlm: fix ore vein max respawn time threshold\n      skybox: fix color at Cosmic Entity&#39;s Plane region\n\nRon Young (6):\n      Bank Tags: close chat input like withdraw-x\n      widget item overlay: don&#39;t render on tag tabs and bank tabs\n      mta: fix Telekinetic solver not moving\n      RuneliteColorPicker: add onClose consumer\n      Add ColorPickerManager\n      RuneliteColorPicker: add support for recent colors\n\nRyan (2):\n      zoom plugin: add control to reset zoom\n      zoom plugin: add zoom scroll speed configuration\n\nSomeBall-1 (1):\n      Add option to swap Talk-to with Enchant for Eluned (#9183)\n\nSu-Shing Chen (2):\n      Sort worlds in world hopper using Guava\n      Put worlds with unknown ping at the bottom of the world hopper list\n\nTheStonedTurtle (2):\n      itemskeptondeath: fix many edge cases and add tests\n      ClueScroll - Fix demonic ruins text\n\nUnknown (1):\n      dailytasksplugin: Add Rantz ogre arrow collection notification\n\ncaleyz (1):\n      chat filter: refresh chat on config change, startup, and shutdown\n\nmeshens (1):\n      item identification: add support for labeling ores and gems (#9268)\n\nrlw0014 (1):\n      Add swap for ToB Quick-Enter to menu entry swapper (#9136)\n</code></pre>'}}}]);
//# sourceMappingURL=93.1603c982.chunk.js.map