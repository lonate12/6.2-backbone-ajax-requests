var $ = require('jquery');
var model = require('./models/restaurant-staff.js');

(function(){
  var losStaff = new model.StaffCollection();

  $('#submit-info').on('click', function(e){
    e.preventDefault();
    var newStaffMember = new model.Staff();
    newStaffMember.set({
      name: $('#name').val(),
      position: $('#position').val(),
      overall_stats: $('#stats').val() 
    });
    losStaff.add(newStaffMember);
    console.log(losStaff);
  });

  losStaff.on('add', function(staffMember){
    console.log(staffMember);
    $('.staff-list').append('<li>' + staffMember.get('name') + ' is a ' + staffMember.get('position') + '.</li>');
  });

  $('#employees-button').on('click', function(e){
    e.preventDefault();

    $('#employees-button').text('Loading...');
    $('#employees-button').prop('disabled', true);

    losStaff.fetch().then(function(){
      $('#employees-button').text('Show Employees');
      $('#employees-button').prop('disabled', false);
    });

  });

  var data = [
    {name: 'Rene'}
  ];

  $.ajax(

  );
}());
