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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">movi\u011Di anta\u016Den</span><span id="Maze_turnLeft">turni\u011Di maldekstren</span><span id="Maze_turnRight">turni\u011Di dekstren</span><span id="Maze_doCode">fari</span><span id="Maze_elseCode">alie</span><span id="Maze_helpIfElse">Blokoj \'se / alie\' faros \u0109u unu aferon \u0109u la alian.</span><span id="Maze_pathAhead">se estas vojo anta\u016Den</span><span id="Maze_pathLeft">se estas vojo maldekstren</span><span id="Maze_pathRight">se estas vojo dekstren</span><span id="Maze_repeatUntil">ripeti \u011Dis</span><span id="Maze_moveForwardTooltip">Movi la ludanton anta\u016Den, unu spaco.</span><span id="Maze_turnTooltip">Turni la ludanton dekstren a\u016D maldekstren, \\n90 gradoj. </span><span id="Maze_ifTooltip">Se vojo ekzistas en la specifita direkto, \\ndo fari iujn agojn. </span><span id="Maze_ifelseTooltip">Se vojo ekzistas en la specifita direkto, \\ndo rulu la unuan blokon de agojn. \\nAlie, rulu la duan blokon de agoj. </span><span id="Maze_whileTooltip">Ripeti la enhavatajn agojn \u011Dis la fino atingi\u011Das.</span><span id="Maze_capacity0">Neniu bloko restas al vi.</span><span id="Maze_capacity1">%1 bloko restas al vi.</span><span id="Maze_capacity2">Restas al vi %2 blokoj.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Labirinto', levelLinkSuffix: 'skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Movi la ludanton la\u016D la blokaj instrukcioj."><img src="common/1x1.gif" class="run icon21"> Ruli programon</button><button id="resetButton" class="primary" style="display: none" title="Remeti la ludanto \u0109e la komenco de la labirinto."><img src="common/1x1.gif" class="stop icon21"> Remeti</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Kunstaku du \'movi anta\u016Den\'-blokojn por helpi min celen.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Dum \u0109i tiu nivelo, vi devas stakigi \u0109iujn blokojn en la blanka laborspaco.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Rulu vian programon por vidi kio okazas.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Via programo ne solvis la labirinton. Premu \'Rekomenci\' kaj klopodu denove.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Atingu la finon de la vojo per nur du blokoj. Uzu \'ripeti\'-blokon por ruli blokon plurfoje.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Vi jam uzis \u0109iujn da blokoj por \u0109i tiu nivelo. Por krei novan blokon, vi devas unue forigi ekzistantan blokon.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Pluraj blokoj povas \u0109eesti en \'ripeti\'-bloko.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Elekti vian preferatan ludanton el jena menuo.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>La \'se\'-bloko faras ion nur se la kondi\u0109o estas vera. Provu maldekstran turnon se ekzistas vojo al la maldekstro.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Alklaku la menuon %1 en la \'se\'-bloko por \u015Dan\u011Di \u011Dian kondi\u0109on.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Blokoj \'se / alie\' faros \u0109u unu aferon \u0109u la alian.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Jen komplikan labirinton. \u0108u vi povas solvi \u011Din? Provu sekvi la maldekstran muron. Nur por altnivelaj programistoj!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
