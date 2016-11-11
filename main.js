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

// $('.tag).on('click', function(x))'{
//   ev.preventDefault()
// $.getJSON() + note.tag.name)
// .then(function(response) {
//   return
//   response.notes.forEach(function(note)){
    // var display_tagged_notes = note_template(//  $('#notes').prepend(display_))
//   }

// })
// })
