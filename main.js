// var source   = $("#note-template").html();
// var template = Handlebars.compile(source);
var source   = $("#entry-template").html();
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


$('#notes').on('click', '.tag', function(x){
  $.x.preventDefault()
  $.getJSON('https://aqueous-headland-47940.herokuapp.com/api/notes/tag/' +
  $(this).html())
  .then(function(response){
    $('headline').append(': ' + response.tag.name)
    response.tag.notes.forEach(function (note){
    var display_notes = notes_template(note)
    $('notes').prepend(display_none)
  })
})
})
