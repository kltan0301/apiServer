module.exports = {
  index: function(req, res){
    res.json({
      profilePic:'http://www.playgamesarcade.com/images/avatars/calvin_avatar.jpg',
      name: 'Tan Kai Lin',
      title: 'Game Designer',
      location: 'Singapore'
    });
  }
};
