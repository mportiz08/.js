// hackish way of removing offline friends from the chat sidebar in facebook
setTimeout(function() {
  $('ul.fbChatOrderedList li.item').each(function(idx, item) {
    if(!$(this).hasClass('active')) {
      $(this).hide();
    }
  });
}, 2000);
