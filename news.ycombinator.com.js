var username = 'mportiz08'; // replace with your username
// adds a link to your saved stories on the hacker news header
$('span.pagetop:first').append(' | <a href="http://news.ycombinator.com/saved?id=' + username + '" style="color: #fff;">saved</a>');
