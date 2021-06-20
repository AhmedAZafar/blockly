// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Maze.soy.
 */

goog.provide('Maze.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Maze.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">\u5411\u524D\u79FB\u52D5</span><span id="Maze_turnLeft">\u5DE6\u8F49</span><span id="Maze_turnRight">\u5411\u53F3\u8F49</span><span id="Maze_doCode">\u505A</span><span id="Maze_elseCode">\u9084</span><span id="Maze_helpIfElse">\u5982\u679C-\u7B2C\u4E8C\u584A\u6703\u505A\u4E00\u4EF6\u4E8B\u6216\u53E6\u4E00\u4EF6\u4E8B\u3002</span><span id="Maze_pathAhead">\u5982\u679C\u8DEF\u5F91\u9818\u5148</span><span id="Maze_pathLeft">\u5982\u679C\u8DEF\u5F91\u5411\u5DE6</span><span id="Maze_pathRight">\u5982\u679C\u8DEF\u5F91\u5411\u53F3</span><span id="Maze_repeatUntil">\u91CD\u8907\uFF0C\u76F4\u5230</span><span id="Maze_moveForwardTooltip">\u628A\u73A9\u5BB6\u5411\u524D\u79FB\u52D5\u4E00\u500B\u7A7A\u9593\u3002</span><span id="Maze_turnTooltip">\u5C07\u64AD\u653E\u5668\u5411\u5DE6\u6216\u5411\u53F3\u8F4990\u5EA6\u3002</span><span id="Maze_ifTooltip">\u5982\u679C\u6709\u7279\u5B9A\u65B9\u5411\u5605\u8DEF\u5F91\uFF0C\u5247\u9032\u884C\u4E00\u4E9B\u64CD\u4F5C\u3002</span><span id="Maze_ifelseTooltip">\u5982\u679C\u5728\u6307\u5B9A\u65B9\u5411\u4E0A\u6709\u4E00\u689D\u8DEF\u5F91\uFF0C\u5247\u9032\u884C\u7B2C\u4E00\u500B\u64CD\u4F5C\u584A\u3002 \u5426\u5247\uFF0C\u505A\u7B2C\u4E8C\u500B\u868A\u884C\u52D5\u3002.</span><span id="Maze_whileTooltip">\u91CD\u8907\u5C01\u9589\u5605\u64CD\u4F5C\uFF0C\u76F4\u5230\u5230\u9054\u7D42\u9EDE\u3002</span><span id="Maze_capacity0">\u60A8\u6709%0 \u584A\u5DE6\u3002</span><span id="Maze_capacity1">\u4F60\u4EF2\u5269\u4F4E%1\u868A</span><span id="Maze_capacity2">\u60A8\u6709%2 \u584A\u5DE6\u3002</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u8FF7\u5BAB', levelLinkSuffix: 'skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="\u7540\u73A9\u5BB6\u505A\u65B9\u584A\u8B1B\u5605\u3002"><img src="common/1x1.gif" class="run icon21"> \u904B\u884C\u8A08\u5283</button><button id="resetButton" class="primary" style="display: none" title="\u5C07\u73A9\u5BB6\u653E\u56DE\u8FF7\u5BAE\u5605\u8D77\u9EDE\u3002"><img src="common/1x1.gif" class="stop icon21"> \u91CD\u8A2D</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u628A\u5E7E\u500B"\u5411\u524D\u79FB\u52D5"\u584A\u5806\u758A\u55BA\u57CB\u4E00\u9F4A\uFF0C\u4EE5\u5E6B\u52A9\u6211\u5BE6\u73FE\u76EE\u6A19\u3002</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u5728\u6B64\u7D1A\u5225\u4E0A\uFF0C\u60A8\u9700\u8981\u628A\u767D\u8272\u5DE5\u4F5C\u5340\u4E2D\u5605\u6240\u6709\u584A\u5806\u758A\u55BA\u57CB\u4E00\u9F4A\u3002<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>\u904B\u884C\u60A8\u7684\u7A0B\u5E8F\uFF0C\u7747\u4E0B\u6703\u767C\u751F\u4E5C\u5622\u3002</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>\u4F60\u5605\u7A0B\u5E8F\u5187\u89E3\u6C7A\u8FF7\u5BAE\u3002 \u6309"\u91CD\u7F6E"\uFF0C\u91CD\u8A66\u3002</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u53EA\u9700\u4F7F\u7528\u5169\u500B\u65B9\u584A\u5230\u9054\u6B64\u8DEF\u5F91\u5605\u672B\u7AEF\u3002 \u4F7F\u7528"\u91CD\u8907"\u591A\u6B21\u904B\u884C\u584A\u3002</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u4F60\u5DF2\u7528\u5B8C\u6B64\u7D1A\u5225\u5605\u6240\u6709\u584A\u3002 \u8981\u5275\u5EFA\u65B0\u584A\uFF0C\u60A8\u9996\u5148\u9700\u8981\u522A\u9664\u73FE\u6709\u584A\u3002</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u4F60\u53EF\u4EE5\u5728"\u91CD\u8907"\u584A\u5167\u5B89\u88DD\u591A\u500B\u65B9\u584A\u3002</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">\u5F9E\u6B64\u9910\u724C\u4E2D\u9078\u64C7\u60A8\u6700\u559C\u611B\u7684\u64AD\u653E\u5668\u3002</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u53EA\u6709\u5F53\u689D\u4EF6\u5C6C\u5BE6\u6642\uFF0C"\u5982\u679C"\u56BF\u5148\u6703\u505A\u4E00\u4E9B\u4E8B\u60C5\u3002 \u5982\u679C\u6709\u5DE6\u8F49\u8DEF\u5F91\uFF0C\u8ACB\u5617\u8A66\u5DE6\u8F49\u3002</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Click on %1 in the \'if\' block to change its condition.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>\u5982\u679C-\u7B2C\u4E8C\u584A\u6703\u505A\u4E00\u4EF6\u4E8B\u6216\u53E6\u4E00\u4EF6\u4E8B\u3002</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u4F60\u53EF\u5514\u53EF\u4EE5\u89E3\u6C7A\u5462\u500B\u8907\u96DC\u5605\u8FF7\u5BAE\u554A\uFF1F \u5617\u8A66\u8DDF\u96A8\u5DE6\u5074\u7246\u58C1\u3002 \u50C5\u9650\u9AD8\u7D1A\u7A0B\u5E8F\u54E1\uFF01' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
};
if (goog.DEBUG) {
  Maze.soy.start.soyTemplateName = 'Maze.soy.start';
}


Maze.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};
if (goog.DEBUG) {
  Maze.soy.toolbox.soyTemplateName = 'Maze.soy.toolbox';
}