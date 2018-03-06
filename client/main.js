import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.form.events({
  'click #save': function(evt){
    var val = $("#name").val();
    Names.insert({name:val});
    $("#name").val("");
  }
});

Template.datos.helpers({
 'getNames':function(){
  return Names.find();
 }
});

Template.datos.events({
  'click .eliminar' : function(evt){
    var id = this._id;
    Names.remove({_id:id});
  }
})
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
