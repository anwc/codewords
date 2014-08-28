angular.module('codeword')
	.directive('testd', function () {

		function isLetter(charCode) {
			return ((charCode - 1) & 0x40) == 0x40 &&
				((charCode - 1) & 0x1f) < 26;
		}

		return {
			link: function (scope, element) {

				element.on('keydown', function (e) {
					if (e.which == 39) {
						$(this)
							.closest('td')
							.nextAll()
							.find('.cell:not(.default)')
							.first()
							.focus();
					}

					if (e.which == 38) {
						var index = $(this)
							.closest('td')
							.index() + 1;

						$(this)
							.closest('tr')
							.prevAll()
							.find('td:nth-child(' + index + ') .cell:not(.default)')
							.last()
							.focus();
					};

					if (e.which == 37) {
						$(this)
							.closest('td')
							.prevAll()
							.find('.cell:not(.default)')
							.last()
							.focus();
					}

					if (e.which == 40) {						
						var index = $(this)
							.closest('td')
							.index() + 1;

						$(this)
							.closest('tr')
							.nextAll()
							.find('td:nth-child(' + index + ') .cell:not(.default)')
							.first()
							.focus();
					}

					if (isLetter(e.which)) {
						var option = String.fromCharCode(e.which).toUpperCase();

						scope.setLetter(scope.cell, option);
					}
				});
			}
		}

	})