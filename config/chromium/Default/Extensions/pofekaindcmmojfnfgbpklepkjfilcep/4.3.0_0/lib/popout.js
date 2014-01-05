// Generated by CoffeeScript 1.6.2
(function() {
  var current_time;

  current_time = null;

  chrome.extension.sendRequest({
    action: 'get_video'
  }, function(response) {
    return $.getScript("https://www.youtube.com/player_api", function() {
      var player;

      document.title = response.title;
      window.resizeTo(response.width, response.height);
      player = null;
      return window.onYouTubePlayerAPIReady = function() {
        player = new YT.Player('player', {
          height: response.height,
          width: response.width,
          videoId: response.video_id,
          enablejsapi: 1,
          events: {
            'onReady': function() {
              player.seekTo(response.current_time - 1);
              return player.playVideo();
            }
          }
        });
        return window.setInterval(function() {
          return chrome.extension.sendRequest({
            action: 'current_time',
            name: response.name,
            current_time: player.getCurrentTime(),
            original_tab_id: response.original_tab_id
          });
        }, 1000);
      };
    });
  });

}).call(this);
