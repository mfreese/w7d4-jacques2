
$(document).ready(function(){
  if(window.location.hash.match(/#\d+/).length > 0) {
    id = window.location.hash.substring(1);
    $.getJSON('https://aqueous-headland-47940.herokuapp.com/api/notes/' + id)
  .then(function(response){
    console.log(response.note)
    var display = modal_template(response.note)
    $('#modal').append(display)
    $('#note_modal').modal('show')
  })
  }
})
var source = $("#modal_template").html();
var modal_template = Handlebars.compile(source);
var source = $("#entry-template").html();
var template = Handlebars.compile(source);

$.getJSON('https://aqueous-headland-47940.herokuapp.com/api/notes')
  .then(function(response){
    console.log(response)
   response.notes.forEach(function(note){
     console.log(note)
     var display_notes = template(note)
     $('#handlebar_notes').prepend(display_notes)
   })
 })
$('#notie').on('submit', function(y){
  y.preventDefault()
  $.post('https://aqueous-headland-47940.herokuapp.com/api/notes',
  $(this).serializeArray())
  .done(function(response){
    var display_notes = template(response.note)
    $('#handlebar_notes').prepend(display_notes)
    $('#notie')[0].reset()
  })
})


$('#handlebar_notes').on('click', '.tag', function(x){
  x.preventDefault()
  $('#handlebar_notes').html('')
  $.getJSON('https://aqueous-headland-47940.herokuapp.com/api/notes/tag/' +
  encodeURIComponent($(this).html()))
  .then(function(response){
    $('#headline').append(': ' + response.tag.name)
    response.tag.notes.forEach(function(note){
    var display_notes = template(note)
    $('#handlebar_notes').prepend(display_notes)
  })
})
})
