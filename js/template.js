/*
Version: 1.0
Author: your name
Author URL: your site
License: (if other than below)
This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*/
$(document).ready(function(){
		$('#jForm').validate({
			rules: {
				email: {
					required: true,
					email: true
				},
				q: {
					required: true,
					minlength: 3
				},
			},
				 //end rules
			messages: {
				email: {
					email: 'An email is often janedoe@website.com',
					required: 'you must enter an email'
				},
				q: {
					required: 'Please enter your name',
					minlength: 'Please enter a real name'
				},
			
			},//end messages
		

			errorPlacement: function (error, element) {
				if(element.is(":radio") || element.is(":checkbox")) {
					error.appendTo(element.parent());
				} else {
					error.insertAfter(element);
				}
			}// end error placement
		}); //end validate
}); //end ready