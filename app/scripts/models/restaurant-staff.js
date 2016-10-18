var Backbone = require('backbone');
var $ = require('jquery');


var Staff = Backbone.Model.extend();

var StaffCollection = Backbone.Collection.extend({
  model: Staff,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/rene',
});

module.exports = {
  Staff: Staff,
  StaffCollection: StaffCollection
};
