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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">\u0E40\u0E14\u0E34\u0E19\u0E2B\u0E19\u0E49\u0E32</span><span id="Maze_turnLeft">\u0E2B\u0E31\u0E19\u0E0B\u0E49\u0E32\u0E22</span><span id="Maze_turnRight">\u0E2B\u0E31\u0E19\u0E02\u0E27\u0E32</span><span id="Maze_doCode">\u0E17\u0E33</span><span id="Maze_elseCode">\u0E21\u0E34\u0E09\u0E30\u0E19\u0E31\u0E49\u0E19</span><span id="Maze_helpIfElse">\u0E1A\u0E25\u0E47\u0E2D\u0E01 "\u0E16\u0E49\u0E32-\u0E21\u0E34\u0E09\u0E30\u0E19\u0E31\u0E49\u0E19" \u0E08\u0E30\u0E17\u0E33\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E43\u0E14\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19</span><span id="Maze_pathAhead">\u0E16\u0E49\u0E32\u0E21\u0E35\u0E17\u0E32\u0E07\u0E40\u0E14\u0E34\u0E19\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32</span><span id="Maze_pathLeft">\u0E16\u0E49\u0E32\u0E21\u0E35\u0E17\u0E32\u0E07\u0E40\u0E14\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E0B\u0E49\u0E32\u0E22</span><span id="Maze_pathRight">\u0E16\u0E49\u0E32\u0E21\u0E35\u0E17\u0E32\u0E07\u0E40\u0E14\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E02\u0E27\u0E32</span><span id="Maze_repeatUntil">\u0E17\u0E33\u0E0B\u0E49\u0E33\u0E08\u0E19\u0E01\u0E23\u0E30\u0E17\u0E31\u0E48\u0E07</span><span id="Maze_moveForwardTooltip">\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E15\u0E31\u0E27\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E0A\u0E48\u0E2D\u0E07.</span><span id="Maze_turnTooltip">\u0E2B\u0E21\u0E38\u0E19\u0E15\u0E31\u0E27\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E0B\u0E49\u0E32\u0E22\u0E2B\u0E23\u0E37\u0E2D\u0E02\u0E27\u0E32 90 \u0E2D\u0E07\u0E28\u0E32.</span><span id="Maze_ifTooltip">\u0E16\u0E49\u0E32\u0E21\u0E35\u0E17\u0E32\u0E07\u0E40\u0E14\u0E34\u0E19\u0E15\u0E32\u0E21\u0E17\u0E34\u0E28\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49 \u0E01\u0E47\u0E43\u0E2B\u0E49\u0E17\u0E33\u0E15\u0E32\u0E21\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07.</span><span id="Maze_ifelseTooltip">\u0E16\u0E49\u0E32\u0E21\u0E35\u0E17\u0E32\u0E07\u0E40\u0E14\u0E34\u0E19\u0E15\u0E32\u0E21\u0E17\u0E34\u0E28\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49 \\n\u0E01\u0E47\u0E43\u0E2B\u0E49\u0E17\u0E33\u0E15\u0E32\u0E21\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E43\u0E19\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E41\u0E23\u0E01 \\n\u0E21\u0E34\u0E09\u0E30\u0E19\u0E31\u0E49\u0E19\u0E01\u0E47\u0E43\u0E2B\u0E49\u0E17\u0E33\u0E15\u0E32\u0E21\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E43\u0E19\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07 </span><span id="Maze_whileTooltip">\u0E17\u0E33\u0E0B\u0E49\u0E33\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E04\u0E25\u0E38\u0E21\u0E44\u0E1B\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E22 \u0E46 \\n\u0E08\u0E19\u0E01\u0E27\u0E48\u0E32\u0E08\u0E30\u0E16\u0E36\u0E07\u0E08\u0E38\u0E14\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 </span><span id="Maze_capacity0">\u0E04\u0E38\u0E13\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E2D\u0E35\u0E01 %0 \u0E1A\u0E25\u0E47\u0E2D\u0E01</span><span id="Maze_capacity1">\u0E04\u0E38\u0E13\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E2D\u0E35\u0E01 %1 \u0E1A\u0E25\u0E47\u0E2D\u0E01</span><span id="Maze_capacity2">\u0E04\u0E38\u0E13\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E2D\u0E35\u0E01 %2 \u0E1A\u0E25\u0E47\u0E2D\u0E01</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: '\u0E40\u0E02\u0E32\u0E27\u0E07\u0E01\u0E15', levelLinkSuffix: 'skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E15\u0E31\u0E27\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E17\u0E33\u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2A\u0E31\u0E48\u0E07."><img src="common/1x1.gif" class="run icon21"> \u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21</button><button id="resetButton" class="primary" style="display: none" title="\u0E27\u0E32\u0E07\u0E15\u0E31\u0E27\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48\u0E08\u0E38\u0E14\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E40\u0E02\u0E32\u0E27\u0E07\u0E01\u0E15."><img src="common/1x1.gif" class="stop icon21"> \u0E40\u0E23\u0E34\u0E48\u0E21\u0E43\u0E2B\u0E21\u0E48</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u0E15\u0E48\u0E2D\u0E1A\u0E25\u0E47\u0E2D\u0E01 \'\u0E40\u0E14\u0E34\u0E19\u0E2B\u0E19\u0E49\u0E32\' \u0E2A\u0E2D\u0E07\u0E2D\u0E31\u0E19\u0E40\u0E02\u0E49\u0E32\u0E14\u0E49\u0E27\u0E22\u0E01\u0E31\u0E19 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E44\u0E1B\u0E16\u0E36\u0E07\u0E08\u0E38\u0E14\u0E2B\u0E21\u0E32\u0E22</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u0E43\u0E19\u0E14\u0E48\u0E32\u0E19\u0E19\u0E35\u0E49 \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E15\u0E48\u0E2D\u0E17\u0E38\u0E01\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E40\u0E02\u0E49\u0E32\u0E14\u0E49\u0E27\u0E22\u0E01\u0E31\u0E19\u0E43\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2A\u0E35\u0E02\u0E32\u0E27<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E27\u0E48\u0E32\u0E08\u0E30\u0E40\u0E01\u0E34\u0E14\u0E2D\u0E30\u0E44\u0E23\u0E02\u0E36\u0E49\u0E19</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E40\u0E02\u0E32\u0E27\u0E07\u0E01\u0E15\u0E19\u0E35\u0E49\u0E44\u0E14\u0E49 \u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21 \'\u0E40\u0E23\u0E34\u0E48\u0E21\u0E43\u0E2B\u0E21\u0E48\' \u0E41\u0E25\u0E49\u0E27\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u0E44\u0E1B\u0E43\u0E2B\u0E49\u0E16\u0E36\u0E07\u0E2A\u0E38\u0E14\u0E17\u0E32\u0E07\u0E40\u0E14\u0E34\u0E19\u0E19\u0E35\u0E49\u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E35\u0E22\u0E07 2 \u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u0E43\u0E0A\u0E49\u0E1A\u0E25\u0E47\u0E2D\u0E01 \'\u0E17\u0E33\u0E0B\u0E49\u0E33\' \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E40\u0E14\u0E34\u0E21\u0E0B\u0E49\u0E33\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E04\u0E23\u0E31\u0E49\u0E07</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E43\u0E0A\u0E49\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E14\u0E48\u0E32\u0E19\u0E19\u0E35\u0E49\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E08\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E43\u0E2B\u0E21\u0E48 \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E1A\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E43\u0E14\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2D\u0E22\u0E39\u0E48\u0E40\u0E2A\u0E35\u0E22\u0E01\u0E48\u0E2D\u0E19</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E2A\u0E48\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E43\u0E19\u0E1A\u0E25\u0E47\u0E2D\u0E01 \'\u0E17\u0E33\u0E0B\u0E49\u0E33\' \u0E44\u0E14\u0E49\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E1A\u0E25\u0E47\u0E2D\u0E01</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E27\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E0A\u0E2D\u0E1A\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E40\u0E21\u0E19\u0E39\u0E19\u0E35\u0E49</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u0E1A\u0E25\u0E47\u0E2D\u0E01 \'\u0E16\u0E49\u0E32\' \u0E08\u0E30\u0E17\u0E33\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E01\u0E47\u0E15\u0E48\u0E2D\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E23\u0E34\u0E07 \u0E25\u0E2D\u0E07\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E2B\u0E31\u0E19\u0E0B\u0E49\u0E32\u0E22\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E17\u0E32\u0E07\u0E40\u0E14\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E0B\u0E49\u0E32\u0E22\u0E14\u0E39\u0E2A\u0E34</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48 %1 \u0E43\u0E19\u0E1A\u0E25\u0E47\u0E2D\u0E01 \'\u0E16\u0E49\u0E32\' \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>\u0E1A\u0E25\u0E47\u0E2D\u0E01 "\u0E16\u0E49\u0E32-\u0E21\u0E34\u0E09\u0E30\u0E19\u0E31\u0E49\u0E19" \u0E08\u0E30\u0E17\u0E33\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E43\u0E14\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E40\u0E02\u0E32\u0E27\u0E07\u0E01\u0E15\u0E17\u0E35\u0E48\u0E0B\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E44\u0E14\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E1B\u0E25\u0E48\u0E32? \u0E25\u0E2D\u0E07\u0E40\u0E14\u0E34\u0E19\u0E40\u0E25\u0E35\u0E22\u0E1A\u0E01\u0E33\u0E41\u0E1E\u0E07\u0E17\u0E32\u0E07\u0E0B\u0E49\u0E32\u0E22\u0E14\u0E39\u0E2A\u0E34 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E40\u0E21\u0E2D\u0E23\u0E4C\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2A\u0E39\u0E07\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19\u0E19\u0E30!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
