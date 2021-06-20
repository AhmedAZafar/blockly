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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">mara ke hadapan</span><span id="Maze_turnLeft">belok kiri</span><span id="Maze_turnRight">belok kanan</span><span id="Maze_doCode">lakukan</span><span id="Maze_elseCode">jika tidak</span><span id="Maze_helpIfElse">Blok \'jika-jika tidak\' akan memilih salah satu tindakan yang diberikan.</span><span id="Maze_pathAhead">jika ada laluan ke hadapan</span><span id="Maze_pathLeft">jika ada laluan ke kiri</span><span id="Maze_pathRight">jika ada laluan ke kanan</span><span id="Maze_repeatUntil">ulangi sehingga</span><span id="Maze_moveForwardTooltip">Mengalihkan Pegman satu petak ke hadapan.</span><span id="Maze_turnTooltip">Membelokkan Pegman 90 darjah ke kiri atau ke kanan.</span><span id="Maze_ifTooltip">Jika terdapat laluan ke arah yang tertentu, \\nlakukan beberapa tindakan. </span><span id="Maze_ifelseTooltip">Jika terdapat laluan ke arah yang tertentu, \\nambil blok tindakan yang pertama. \\nJika tidak, ambil blok tindakan yang kedua. </span><span id="Maze_whileTooltip">Ulangi tindakan-tindakan yang dilampirkan \\nsehingga titik penamat dicapai. </span><span id="Maze_capacity0">Tinggal %0 blok.</span><span id="Maze_capacity1">Tinggal %1 blok.</span><span id="Maze_capacity2">Tinggal %2 blok.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Pagar Sesat', levelLinkSuffix: 'skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Membuatkan pemain menurut pesan blok."><img src="common/1x1.gif" class="run icon21"> Jalankan Program</button><button id="resetButton" class="primary" style="display: none" title="Letakkn pemain kembali di pangkal pagar sesat."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Program merupakan turutan blok. Susunkan beberapa blok \'maju\' untuk menolong saya mencapai tempat tujuan.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Di tingkat ini, anda perlu menyusun semua blok secara bertingkat-tingkat ini di dalam ruang kerja putih.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Jalankan program anda untuk melihat apa yang berlaku.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Program anda tidak menyelesaikan pagar sesat. Tekan \'Reset\' dan cuba lagi.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Komputer mempunyai memori yang terhad. Capai hujung jalan dengan menggunakan dua blok sahaja. Gunakan \'ulang\' untuk menjalankan satu blok lebih daripada sekali.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Anda telah menggunakan semua blok untuk tahap ini. Untuk membuat blok baru, anda perlu memadamkan satu blok yang sedia ada dahulu.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Anda boleh memuatkan lebih daripada satu blok di dalam blok \'ulang\'.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Pilih pemain kegemaran anda daripada menu ini.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Blok \'jika\' akan melakukan sesuatu hanya jika keadaannya benar. Cuba belok ke kiri jika terdapat laluan ke kiri.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Klik pada %1 di dalam blok \'if\' untuk mengubah keadaannya.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Blok \'jika-jika tidak\' akan memilih salah satu tindakan yang diberikan.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Bolehkah anda menyelesaikan pagar sesat yang rumit ini? Cuba ikut tembok sebelah kiri. Untuk pengaturcara pakar sahaja!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
