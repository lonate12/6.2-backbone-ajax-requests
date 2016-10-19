var $ = require('jquery');
var model = require('./models/restaurant-staff.js');

(function(){
  var losStaff = new model.StaffCollection();

  $('#submit-info').on('click', function(e){
    e.preventDefault();
    var newStaffMember = new model.Staff();
    losStaff.create({
      name: $('#name').val(),
      position: $('#position').val(),
      overall_stats: $('#stats').val()
    });
    // console.log(losStaff);
  });

  losStaff.on('add', function(staffMember){
    console.log(staffMember.cid);
    $('.staff-list').append('<li><button class="delete styled-button" data-cid="'+
    staffMember.cid +'">Delete</button>' + staffMember.get('name') + ' is a ' +
    staffMember.get('position') + '.</li>');
  });

  $('body').on('click', '.delete', function(e){
    e.preventDefault();
    var cid = $(this).data('cid');
    var selectedToDelete = losStaff.get(cid);
    if (window.confirm('Are you sure you want to delete this record?'+
    ' Click "OK" to continue or "Cancel" to return.')){
      selectedToDelete.destroy();
      alert(selectedToDelete.get('name') + ' has been deleted from your staff collection.');
    }
    // console.log(losStaff);
    // console.log("This happened");
  });



  $('#employees-button').on('click', function(e){
    e.preventDefault();

    $('#employees-button').text('Loading...');
    $('#employees-button').prop('disabled', true);

    losStaff.fetch().then(function(){
      console.log(losStaff);
      $('#employees-button').text('Show Employees');
      $('#employees-button').prop('disabled', false);
    });
  });

}());
