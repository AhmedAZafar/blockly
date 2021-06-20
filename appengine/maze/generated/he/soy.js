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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">\u05E0\u05D5\u05E2 \u05E7\u05D3\u05D9\u05DE\u05D4</span><span id="Maze_turnLeft">\u05E4\u05E0\u05D4 \u05E9\u05DE\u05D0\u05DC\u05D4</span><span id="Maze_turnRight">\u05E4\u05E0\u05D4 \u05D9\u05DE\u05D9\u05E0\u05D4</span><span id="Maze_doCode">\u05EA\u05E2\u05E9\u05D4</span><span id="Maze_elseCode">\u05D0\u05D7\u05E8\u05EA</span><span id="Maze_helpIfElse">\u05E7\u05D5\u05D1\u05D9\u05D5\u05EA \u05D0\u05DD-\u05D0\u05D6 \u05EA\u05D1\u05E6\u05E2\u05E0\u05D4 \u05D0\u05D7\u05D3 \u05DE\u05E9\u05E0\u05D9 \u05D3\u05D1\u05E8\u05D9\u05DD.</span><span id="Maze_pathAhead">\u05E0\u05EA\u05D9\u05D1 \u05D0\u05DD \u05D1\u05D4\u05DE\u05E9\u05DA</span><span id="Maze_pathLeft">\u05E0\u05EA\u05D9\u05D1 \u05D0\u05DD \u05DE\u05E9\u05DE\u05D0\u05DC</span><span id="Maze_pathRight">\u05E0\u05EA\u05D9\u05D1 \u05D0\u05DD \u05DE\u05D9\u05DE\u05D9\u05DF</span><span id="Maze_repeatUntil">\u05D4\u05DE\u05E9\u05DA \u05E2\u05D3 \u05E9</span><span id="Maze_moveForwardTooltip">\u05D4\u05D6\u05D6 \u05D0\u05EA \u05D4\u05E9\u05D7\u05E7\u05DF \u05E7\u05D3\u05D9\u05DE\u05D4 \u05DE\u05E8\u05D5\u05D5\u05D7 \u05D0\u05D7\u05D3</span><span id="Maze_turnTooltip">\u05E1\u05D5\u05D1\u05D1 \u05D0\u05EA \u05D4\u05E9\u05D7\u05E7\u05DF \u05E9\u05DE\u05D0\u05DC\u05D4 \u05D0\u05D5 \u05D9\u05DE\u05D9\u05E0\u05D4 \u05D1-90 \u05DE\u05E2\u05DC\u05D5\u05EA.</span><span id="Maze_ifTooltip">\u05D0\u05DD \u05D9\u05E9 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05EA\u05E0\u05D5\u05E2\u05D4 \u05D1\u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9, \u05E2\u05E9\u05D4 \u05DE\u05E1\u05E4\u05E8 \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA.</span><span id="Maze_ifelseTooltip">\u05D0\u05DD \u05D9\u05E9 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05EA\u05E0\u05D5\u05E2\u05D4 \u05D1\u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05D0\u05D6\u05D9 \u05DC\u05D1\u05E6\u05E2 \u05D0\u05EA \\n\u05E7\u05D5\u05D1\u05D9\u05D9\u05EA \u05D4\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4. \u05D0\u05D7\u05E8\u05EA, \u05DC\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E7\u05D5\u05D1\u05D9\u05D9\u05EA \\n\u05D4\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D4\u05E9\u05E0\u05D9\u05D4. </span><span id="Maze_whileTooltip">\u05D7\u05D6\u05D5\u05E8 \u05E2\u05DC \u05D4\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D4\u05D0\u05DC\u05D4 \u05E2\u05D3 \u05D4\u05D2\u05E2\u05D4 \u05DC\u05E0\u05E7\u05D5\u05D3\u05EA \u05D4\u05E1\u05D9\u05D5\u05DD.</span><span id="Maze_capacity0">\u05E0\u05D5\u05EA\u05E8\u05D5 \u05DC\u05DA %0 \u05E7\u05D5\u05D1\u05D9\u05D5\u05EA.</span><span id="Maze_capacity1">\u05E0\u05D5\u05EA\u05E8\u05D4 \u05DC\u05DA \u05E4\u05E2\u05D5\u05DC\u05EA \u05E7\u05D5\u05D3 \u05D0\u05D7\u05EA</span><span id="Maze_capacity2">\u05E0\u05D5\u05EA\u05E8\u05D5 \u05DC\u05DA %2 \u05E7\u05D5\u05D1\u05D9\u05D5\u05EA.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u05DE\u05D1\u05D5\u05DA', levelLinkSuffix: 'skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="\u05D2\u05D5\u05E8\u05DD \u05DC\u05E9\u05D7\u05E7\u05DF \u05DC\u05E2\u05E9\u05D5\u05EA \u05D0\u05EA \u05DE\u05D4 \u05E9\u05D4\u05E7\u05D5\u05D1\u05D9\u05D5\u05EA \u05D0\u05D5\u05DE\u05E8\u05D5\u05EA."><img src="common/1x1.gif" class="run icon21"> \u05D4\u05E8\u05E5 \u05EA\u05DB\u05E0\u05D9\u05EA</button><button id="resetButton" class="primary" style="display: none" title="\u05E9\u05D9\u05DD \u05D0\u05EA \u05D4\u05E9\u05D7\u05E7\u05DF \u05D1\u05D7\u05D6\u05E8\u05D4 \u05D1\u05E0\u05E7\u05D5\u05D3\u05EA \u05D4\u05D4\u05EA\u05D7\u05DC\u05D4 \u05E9\u05DC \u05D4\u05DE\u05D1\u05D5\u05DA."><img src="common/1x1.gif" class="stop icon21"> \u05D0\u05D9\u05E4\u05D5\u05E1</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u05D9\u05E9 \u05DC\u05E2\u05E8\u05D5\u05DD \u05DB\u05DE\u05D4 \u05E7\u05D5\u05D1\u05D9\u05D5\u05EA \u201A\u05DC\u05E0\u05D5\u05E2 \u05E7\u05D3\u05D9\u05DE\u05D4\u2019 \u05DB\u05D3\u05D9 \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05D4\u05D2\u05D9\u05E2 \u05D0\u05DC \u05D4\u05DE\u05D8\u05E8\u05D4.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u05D1\u05E9\u05DC\u05D1 \u05D6\u05D4, \u05E0\u05D3\u05E8\u05E9 \u05DE\u05DE\u05DA \u05DC\u05E2\u05E8\u05D5\u05DD \u05D0\u05EA \u05DB\u05DC \u05D4\u05E7\u05D5\u05D1\u05D9\u05D5\u05EA \u05E9\u05D1\u05DE\u05E9\u05D8\u05D7 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D4\u05DC\u05D1\u05DF.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>\u05E2\u05DC\u05D9\u05DA \u05DC\u05D4\u05E8\u05D9\u05E5 \u05D0\u05EA \u05D4\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D1\u05DB\u05D3\u05D9 \u05DC\u05E8\u05D0\u05D5\u05EA \u05DE\u05D4 \u05E7\u05D5\u05E8\u05D4</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>\u05D4\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05E9\u05DC\u05DA \u05DC\u05D0 \u05E4\u05EA\u05E8\u05D4 \u05D0\u05EA \u05D4\u05DE\u05D1\u05D5\u05DA. \u05DC\u05D7\u05E5 \u05E2\u05DC \'\u05D0\u05E4\u05E1\' \u05D1\u05DB\u05D3\u05D9 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05E0\u05D9\u05EA</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05E9\u05E0\u05D9 \u05E7\u05D8\u05E2\u05D9 \u05E7\u05D5\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DC\u05E7\u05E6\u05D4 \u05D4\u05E0\u05EA\u05D9\u05D1 \u05D4\u05D6\u05D4. \u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1-\'\u05D7\u05D6\u05D5\u05E8\' \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D4\u05E8\u05D9\u05E5 \u05E7\u05D8\u05E2 \u05E7\u05D5\u05D3 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05E4\u05E2\u05DD \u05D0\u05D7\u05EA.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u05E2\u05E9\u05D9\u05EA \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05DB\u05DC \u05E7\u05D8\u05E2\u05D9 \u05D4\u05E7\u05D5\u05D3 \u05D4\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05DC\u05E9\u05DC\u05D1 \u05D6\u05D4. \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05D8\u05E2 \u05E7\u05D5\u05D3 \u05D7\u05D3\u05E9, \u05D0\u05EA\u05D4 \u05E6\u05E8\u05D9\u05DA \u05E7\u05D5\u05D3\u05DD \u05DC\u05DB\u05DF \u05DC\u05DE\u05D7\u05D5\u05E7 \u05E7\u05D8\u05E2 \u05E7\u05D5\u05D3 \u05E7\u05D9\u05D9\u05DD.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DE\u05E7\u05D8\u05E2 \u05E7\u05D5\u05D3 \u05D0\u05D7\u05D3 \u05D1\u05EA\u05D5\u05DA \u05E7\u05D8\u05E2 \u05E7\u05D5\u05D3 \'\u05D7\u05D6\u05D5\u05E8\'.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">\u05D1\u05D7\u05E8 \u05D0\u05EA \u05D4\u05E9\u05D7\u05E7\u05DF \u05D4\u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC\u05D9\u05DA \u05DE\u05EA\u05D5\u05DA \u05EA\u05E4\u05E8\u05D9\u05D8 \u05D6\u05D4.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u05E7\u05D8\u05E2 \u05E7\u05D5\u05D3 \'\u05D0\u05DD\' \u05D9\u05D1\u05E6\u05E2 \u05E4\u05E2\u05D5\u05DC\u05D4 \u05E8\u05E7 \u05D0\u05DD \u05D4\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D5\u05D0 \u05E0\u05DB\u05D5\u05DF. \u05E0\u05E1\u05D4 \u05DC\u05E4\u05E0\u05D5\u05EA \u05E9\u05DE\u05D0\u05DC\u05D4 \u05D0\u05DD \u05D9\u05E9\u05E0\u05D5 \u05E0\u05EA\u05D9\u05D1 \u05E4\u05E0\u05D5\u05D9 \u05DC\u05DB\u05D9\u05D5\u05D5\u05DF \u05E6\u05D3 \u05E9\u05DE\u05D0\u05DC.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">\u05D9\u05E9 \u05DC\u05DC\u05D7\u05D5\u05E5 \u05E2\u05DC %1 \u05D1\u05E7\u05D5\u05D1\u05D9\u05D4 \u201A\u05D0\u05DD\u2019 \u05DB\u05D3\u05D9 \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05EA\u05E0\u05D0\u05D9.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>\u05E7\u05D5\u05D1\u05D9\u05D5\u05EA \u05D0\u05DD-\u05D0\u05D6 \u05EA\u05D1\u05E6\u05E2\u05E0\u05D4 \u05D0\u05D7\u05D3 \u05DE\u05E9\u05E0\u05D9 \u05D3\u05D1\u05E8\u05D9\u05DD.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u05D4\u05D0\u05DD \u05EA\u05D5\u05DB\u05DC \u05DC\u05E4\u05EA\u05D5\u05E8 \u05D0\u05EA \u05D4\u05DE\u05D1\u05D5\u05DA \u05D4\u05DE\u05E1\u05D5\u05D1\u05DA \u05D4\u05D6\u05D4? \u05E0\u05E1\u05D4 \u05DC\u05E2\u05E7\u05D5\u05D1 \u05D0\u05D7\u05E8\u05D9 \u05D4\u05E7\u05D9\u05E8 \u05D4\u05E9\u05DE\u05D0\u05DC\u05D9. \u05DE\u05D9\u05D5\u05E2\u05D3 \u05DC\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA\u05E0\u05D9\u05DD \u05DE\u05E0\u05D5\u05E1\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
