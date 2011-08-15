// change background color of notification link
$('#header a.notifications_count').css({'background': '#E80C02'});

// add links to hot repo listings for ruby and javascript
$('#header ul.nav').prepend('<li><strong><a href="http://github.com/languages/Javascript" style="color: #0cbfb3;">js</a></strong></li>');
$('#header ul.nav').prepend('<li><strong><a href="http://github.com/languages/Ruby" style="color: #bd040f;">rb</a></strong></li>');
