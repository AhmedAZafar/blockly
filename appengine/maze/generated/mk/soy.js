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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">\u043C\u0440\u0434\u043D\u0438 \u043D\u0430\u043F\u0440\u0435\u0434</span><span id="Maze_turnLeft">\u0441\u0432\u0440\u0442\u0438 \u043B\u0435\u0432\u043E</span><span id="Maze_turnRight">\u0441\u0432\u0440\u0442\u0438 \u0434\u0435\u0441\u043D\u043E</span><span id="Maze_doCode">\u0438\u0437\u0432\u0435\u0434\u0438</span><span id="Maze_elseCode">\u0438\u043D\u0430\u043A\u0443</span><span id="Maze_helpIfElse">\u0411\u043B\u043E\u043A\u0447\u0438\u045A\u0430\u0442\u0430 \u201E\u0430\u043A\u043E-\u0442\u043E\u0433\u0430\u0448\u201C \u045C\u0435 \u0438\u0437\u0432\u0440\u0448\u0430\u0442 \u0438\u043B\u0438 \u0435\u0434\u043D\u043E \u043D\u0435\u0448\u0442\u043E \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u043E.</span><span id="Maze_pathAhead">\u0430\u043A\u043E \u0438\u043C\u0430 \u043F\u0430\u0442 \u043D\u0430\u043F\u0440\u0435\u0434</span><span id="Maze_pathLeft">\u0430\u043A\u043E \u0438\u043C\u0430 \u043F\u0430\u0442 \u043B\u0435\u0432\u043E</span><span id="Maze_pathRight">\u0430\u043A\u043E \u0438\u043C\u0430 \u043F\u0430\u0442 \u0434\u0435\u0441\u043D\u043E</span><span id="Maze_repeatUntil">\u043F\u043E\u0432\u0442\u043E\u0440\u0443\u0432\u0430\u0458 \u0441\u00E8 \u0434\u043E</span><span id="Maze_moveForwardTooltip">\u0413\u043E \u043C\u0440\u0434\u043D\u0443\u0432\u0430 \u0438\u0433\u0440\u0430\u0447\u043E\u0442 \u043D\u0430\u043F\u0440\u0435\u0434 \u0437\u0430 \u0435\u0434\u043D\u043E \u043C\u0435\u0441\u0442\u043E.</span><span id="Maze_turnTooltip">\u0413\u043E \u0441\u0432\u0440\u0442\u0443\u0432\u0430 \u0438\u0433\u0440\u0430\u0447\u043E\u0442 \u043D\u0430 \u043B\u0435\u0432\u043E \u0438\u043B\u0438 \u043D\u0430 \u0434\u0435\u0441\u043D\u043E \u0437\u0430 90 \\n\u0441\u0442\u0435\u043F\u0435\u043D\u0438. </span><span id="Maze_ifTooltip">\u0410\u043A\u043E \u043F\u043E\u0441\u0442\u043E\u0438 \u043F\u0430\u0442\u0435\u043A\u0430 \u0432\u043E \u0437\u0430\u0434\u0430\u0434\u0435\u043D\u0430\u0442\u0430 \u043D\u0430\u0441\u043E\u043A\u0430, \\n\u0442\u043E\u0433\u0430\u0448 \u0438\u0437\u0432\u0440\u0448\u0438 \u043D\u0435\u043A\u043E\u0438 \u0434\u0435\u0458\u0441\u0442\u0432\u0430. </span><span id="Maze_ifelseTooltip">\u0410\u043A\u043E \u043F\u043E\u0441\u0442\u043E\u0438 \u043F\u0430\u0442\u0435\u043A\u0430 \u0432\u043E \u0437\u0430\u0434\u0430\u0434\u0435\u043D\u0430\u0442\u0430 \u043D\u0430\u0441\u043E\u043A\u0430, \\n\u0442\u043E\u0433\u0430\u0448 \u0438\u0437\u0432\u0440\u0448\u0438 \u0433\u043E \u043F\u0440\u0432\u0438\u043E\u0442 \u0431\u043B\u043E\u043A \u0434\u0435\u0458\u0441\u0442\u0432\u0430. \\n\u0412\u043E \u0441\u043F\u0440\u043E\u0442\u0438\u0432\u043D\u043E, \u0438\u0437\u0432\u0440\u0448\u0438 \u0433\u043E \u0432\u0442\u043E\u0440\u0438\u043E\u0442. </span><span id="Maze_whileTooltip">\u041F\u043E\u0432\u0442\u043E\u0440\u0443\u0432\u0430\u0458 \u0433\u0438 \u0437\u0430\u0434\u0430\u0434\u0435\u043D\u0438\u0442\u0435 \u0434\u0435\u0458\u0441\u0442\u0432\u0430 \u0434\u043E\u0434\u0435\u043A\u0430 \u0434\u043E\u0458\u0434\u0435\u0448 \\n\u0434\u043E \u0446\u0435\u043B\u0442\u0430 (\u043A\u0440\u0430\u0458\u043E\u0442). </span><span id="Maze_capacity0">\u0412\u0438 \u043F\u0440\u0435\u043E\u0441\u0442\u0430\u043D\u0443\u0432\u0430\u0430\u0442 \u0443\u0448\u0442\u0435 %0 \u0431\u043B\u043E\u043A\u0447\u0438\u045A\u0430.</span><span id="Maze_capacity1">\u0412\u0438 \u043F\u0440\u0435\u043E\u0441\u0442\u0430\u043D\u0443\u0432\u0430 %1 \u0431\u043B\u043E\u043A\u0447\u0435.</span><span id="Maze_capacity2">\u0418\u043C\u0430\u0442\u0435 \u0443\u0448\u0442\u0435 %2 \u0431\u043B\u043E\u043A\u0447\u0438\u045A\u0430.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u041B\u0430\u0432\u0438\u0440\u0438\u043D\u0442', levelLinkSuffix: 'skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="\u041C\u0443 \u043A\u0430\u0436\u0443\u0432\u0430 \u043D\u0430 \u0438\u0433\u0440\u0430\u0447\u043E\u0442 \u0434\u0430 \u043F\u0440\u0430\u0432\u0438 \u043A\u0430\u043A\u043E \u0448\u0442\u043E \u0432\u0435\u043B\u0430\u0442 \\n\u0431\u043B\u043E\u043A\u0447\u0438\u045A\u0430\u0442\u0430. "><img src="common/1x1.gif" class="run icon21"> \u041F\u0443\u0448\u0442\u0438 \u0433\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043E\u0442</button><button id="resetButton" class="primary" style="display: none" title="\u0412\u0440\u0430\u0442\u0438 \u0433\u043E \u0438\u0433\u0440\u0430\u0447\u043E\u0442 \u043D\u0430 \u043F\u043E\u0447\u0435\u0442\u043E\u043A\u043E\u0442 \u043E\u0434 \u043B\u0430\u0432\u0438\u0440\u0438\u043D\u0442\u043E\u0442."><img src="common/1x1.gif" class="stop icon21"> \u041E\u0434\u043D\u043E\u0432\u043E</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u041D\u0430\u0440\u0435\u0434\u0435\u0442\u0435 \u0434\u0432\u0435 \u0431\u043B\u043E\u043A\u0447\u0438\u045A\u0430 \u201E\u043E\u0434\u0438 \u043D\u0430\u043F\u0440\u0435\u0434\u201C \u0437\u0430 \u0434\u0430 \u043C\u0438 \u043F\u043E\u043C\u043E\u0433\u043D\u0435\u0442\u0435 \u0434\u0430 \u0434\u043E\u0458\u0434\u0430\u043C \u0434\u043E \u0446\u0435\u043B\u0442\u0430.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u041D\u0430 \u043E\u0432\u0430 \u043D\u0438\u0432\u043E \u045C\u0435 \u0442\u0440\u0435\u0431\u0430 \u0434\u0430 \u0433\u0438 \u043D\u0430\u0440\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u0442\u0435 \u0431\u043B\u043E\u043A\u0447\u0438\u045A\u0430 \u0432\u043E \u0431\u0435\u043B\u0438\u043E\u0442 \u0440\u0430\u0431\u043E\u0442\u0435\u043D \u043F\u0440\u043E\u0441\u0442\u043E\u0440.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>\u041F\u0443\u0448\u0442\u0435\u0442\u0435 \u0433\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043E\u0442 \u0438 \u0431\u0438\u0434\u0435\u0442\u0435 \u0448\u0442\u043E \u045C\u0435 \u0441\u0435 \u0441\u043B\u0443\u0447\u0438.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043E\u0442 \u043D\u0435 \u0433\u043E \u0440\u0435\u0448\u0438 \u043B\u0430\u0432\u0438\u0440\u0438\u043D\u0442\u043E\u0442. \u0421\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u201E\u041E\u0434\u043D\u043E\u0432\u043E\u201C \u0437\u0430 \u0434\u0430 \u0441\u0435 \u043E\u0431\u0438\u0434\u0435\u0442\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u0421\u043C\u0435\u0442\u0430\u0447\u0438\u0442\u0435 \u0438\u043C\u0430\u0430\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D \u0441\u043A\u043B\u0430\u0434. \u0414\u043E\u0458\u0434\u0435\u0442\u0435 \u0434\u043E \u043A\u0440\u0430\u0458\u043E\u0442 \u043D\u0430 \u0441\u043E \u043F\u043E\u043C\u043E\u0448 \u043D\u0430 \u0441\u0430\u043C\u043E \u0434\u0432\u0430 \u0431\u043B\u043E\u043A\u0430. \u041F\u043E\u0441\u043B\u0443\u0436\u0435\u0442\u0435 \u0441\u0435 \u0441\u043E \u201E\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u201C \u0437\u0430 \u0434\u0430 \u043F\u0443\u0448\u0442\u0438\u0442\u0435 \u0435\u0434\u043D\u043E \u0431\u043B\u043E\u043A\u0447\u0435 \u043F\u043E\u0432\u0435\u045C\u0435 \u043F\u0430\u0442\u0438.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u0413\u0438 \u0438\u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0432\u0442\u0435 \u0441\u0438\u0442\u0435 \u0431\u043B\u043E\u043A\u0447\u0438\u045A\u0430 \u0437\u0430 \u043E\u0432\u0430 \u043D\u0438\u0432\u043E. \u0417\u0430 \u0434\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u0435 \u043D\u043E\u0432\u043E \u0431\u043B\u043E\u043A\u0447\u0435, \u045C\u0435 \u0442\u0440\u0435\u0431\u0430 \u043F\u0440\u0432\u043E \u0434\u0430 \u0438\u0437\u0431\u0440\u0438\u0448\u0435\u0442\u0435 \u043D\u0435\u043A\u043E\u0435 \u043F\u043E\u0441\u0442\u043E\u0435\u0447\u043A\u043E.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u041C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u043F\u043E\u0432\u0435\u045C\u0435 \u043E\u0434 \u0435\u0434\u043D\u043E \u0431\u043B\u043E\u043A\u0447\u0435 \u0432\u043E \u0441\u0435\u043A\u043E\u0435 \u0431\u043B\u043E\u043A\u0447\u0435 \u201E\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u201C</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0433\u043E \u0432\u0430\u0448\u0438\u043E\u0442 \u043E\u043C\u0438\u043B\u0435\u043D \u0438\u0433\u0440\u0430\u0447 \u043E\u0434 \u043C\u0435\u043D\u0438\u0442\u043E.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u0411\u043B\u043E\u043A\u0447\u0435\u0442\u043E \u201E\u0430\u043A\u043E\u201C \u045C\u0435 \u0438\u0437\u0432\u0440\u0448\u0438 \u043D\u0435\u0448\u0442\u043E \u0441\u0430\u043C\u043E \u0430\u043A\u043E \u0443\u0441\u043B\u043E\u0432\u043E\u0442 \u0435 \u0442\u043E\u0447\u0435\u043D. \u041D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440, \u0441\u0432\u0440\u0442\u0435\u0442\u0435 \u043B\u0435\u0432\u043E \u0430\u043A\u043E \u0438\u043C\u0430 \u043F\u0430\u0442\u0435\u043A\u0430 \u043D\u0430\u0442\u0430\u043C\u0443.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">\u0421\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u043D\u0430 %1 \u0432\u043E \u0431\u043B\u043E\u043A\u043E\u0442 \u201E\u0430\u043A\u043E\u201C \u0437\u0430 \u0434\u0430 \u043C\u0443 \u0433\u043E \u0441\u043C\u0435\u043D\u0438\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u043E\u0442.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>\u0411\u043B\u043E\u043A\u0447\u0438\u045A\u0430\u0442\u0430 \u201E\u0430\u043A\u043E-\u0442\u043E\u0433\u0430\u0448\u201C \u045C\u0435 \u0438\u0437\u0432\u0440\u0448\u0430\u0442 \u0438\u043B\u0438 \u0435\u0434\u043D\u043E \u043D\u0435\u0448\u0442\u043E \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u043E.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u0414\u0430\u043B\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0433\u043E \u0440\u0435\u0448\u0438\u0442\u0435 \u043E\u0432\u043E\u0458 \u0441\u043B\u043E\u0436\u0435\u043D \u043B\u0430\u0432\u0438\u0440\u0438\u043D\u0442? \u041E\u0431\u0438\u0434\u0435\u0442\u0435 \u0441\u0435 \u0441\u043E \u0441\u043B\u0435\u0434\u043D\u0438\u043E\u0432 \u0455\u0438\u0434 \u043D\u0430 \u043B\u0435\u0432\u043E. \u0421\u0430\u043C\u043E \u0437\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0435\u0440\u0438!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
