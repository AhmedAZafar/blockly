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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">flyt fremad</span><span id="Maze_turnLeft">drej til venstre</span><span id="Maze_turnRight">drej til h\u00F8jre</span><span id="Maze_doCode">udf\u00F8r</span><span id="Maze_elseCode">ellers</span><span id="Maze_helpIfElse">Hvis-ellers blokke vil g\u00F8re den ene eller den anden ting.</span><span id="Maze_pathAhead">hvis sti foran</span><span id="Maze_pathLeft">hvis sti til venstre</span><span id="Maze_pathRight">hvis sti til h\u00F8jre</span><span id="Maze_repeatUntil">gentag indtil</span><span id="Maze_moveForwardTooltip">Flytter spilleren et felt frem.</span><span id="Maze_turnTooltip">Drejer spilleren 90 grader til h\u00F8jre eller venstre.</span><span id="Maze_ifTooltip">Hvis der er en sti i den angivne retning, \\ns\u00E5 udf\u00F8r nogle handlinger. </span><span id="Maze_ifelseTooltip">Hvis der er en sti i den angivne retning, \\ns\u00E5 udf\u00F8r den f\u00F8rste handlingsblok. \\nHvis ikke, s\u00E5 udf\u00F8r den anden handlingsblok. </span><span id="Maze_whileTooltip">Gentag gruppen af handlinger indtil slutpunktet \\ner n\u00E5et. </span><span id="Maze_capacity0">Du har %0 blokke tilbage.</span><span id="Maze_capacity1">Du har %1 blok tilbage.</span><span id="Maze_capacity2">Du har %2 blokke tilbage.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Labyrint', levelLinkSuffix: 'skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="F\u00E5r spilleren til at g\u00F8re det blokkene siger."><img src="common/1x1.gif" class="run icon21"> K\u00F8r program</button><button id="resetButton" class="primary" style="display: none" title="S\u00E6tter spilleren tilbage til starten af labyrinten."><img src="common/1x1.gif" class="stop icon21"> Nulstil</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>S\u00E6t et par \'flyt fremad\' blokke sammen for at hj\u00E6lpe mig til at n\u00E5 m\u00E5let,</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>P\u00E5 denne bane skal du s\u00E6tte alle blokkene sammen i det hvide arbejdsfelt.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>K\u00F8r dit program for at se, hvad der sker.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Dit program l\u00F8ste ikke labyrinten. Tryk p\u00E5 \'Nulstil\', og pr\u00F8v igen.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Pr\u00F8v at n\u00E5 enden af denne sti ved kun at bruge to blokke. Brug \'gentag indtil\' til at k\u00F8re en blok mere end \u00E9n gang.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Du har opbrugt alle blokkene for dette niveau. Hvis du vil oprette en ny blok, skal du f\u00F8rst slette en eksisterende blok.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Der er plads til mere end \u00E9n blok inde i en \'gentag indtil\' blok.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">V\u00E6lg din favoritspiller fra denne menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>En \'hvis\'-blok vil kun g\u00F8re noget hvis betingelsen er sand. Pr\u00F8v at dreje til venstre hvis der er en sti til venstre.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Klik p\u00E5 %1 i \'hvis\' blokken for at \u00E6ndre dens tilstand.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Hvis-ellers blokke vil g\u00F8re den ene eller den anden ting.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Kan du l\u00F8se denne komplicerede labyrint? Pr\u00F8v at f\u00F8lge v\u00E6ggen p\u00E5 venstre h\u00E5nd. Kun for avancerede programm\u00F8rer!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
