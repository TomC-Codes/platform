/**
 * Results Collection mixin
 *
 * @module     App.mixin
 * @author     Ushahidi Team <team@ushahidi.com>
 * @copyright  2014 Ushahidi
 * @license    https://www.gnu.org/licenses/agpl-3.0.html GNU Affero General Public License Version 3 (AGPL3)
 */

define(['backbone'],
	function()
	{
		// Customized response handling for parsing the Ushahidi API results.
		// Has no real dependencies, but is meant to mixed with Backbone.PageableCollection.

		return {
			// The Ushahidi API returns models under 'results'.
			parseRecords: function(response)
			{
				return response.results;
			},
			parseState: function(response)
			{
				return {
					totalRecords: response.total_count
				};
			}
		};
	});
