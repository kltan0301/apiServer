module.exports = {
  index: function(req, res){
    res.jsonp({
      profilePic:'http://www.playgamesarcade.com/images/avatars/calvin_avatar.jpg',
      name: 'Kai Lin',
      title: 'Game Designer',
      location: 'Singapore'
    });
  }
};
