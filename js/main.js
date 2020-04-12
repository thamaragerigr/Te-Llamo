function youTubes_makeDynamic() {
			var $ytIframes = $('iframe[src*="youtube.com"]');
			$ytIframes.each(function (i,e) {
				var $ytFrame = $(e);
				// var ytKey; var tmp = $ytFrame.attr('src').split(/\//); tmp = tmp[tmp.length - 1]; tmp = tmp.split('?'); ytKey = tmp[0];
				var $ytLoader = $('<div class="ytLoader">');
				$ytLoader.append($('<img class="cover" src="assets/thumbnail.png">'));
				$ytLoader.append($('<i class="playBtn fas fa-play"></i>'));
				$ytLoader.data('$ytFrame',$ytFrame);
				$ytFrame.replaceWith($ytLoader);
				$ytLoader.click(function () {
					var $ytFrame = $ytLoader.data('$ytFrame');
					$ytFrame.attr('src',$ytFrame.attr('src')+'?autoplay=1');
					$ytLoader.replaceWith($ytFrame);
				});
			});
		};
		$(document).ready(function () {youTubes_makeDynamic()});
