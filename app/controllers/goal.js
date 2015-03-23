import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    owner: function() {
      return (this.session.isAuthenticated && this.get('session.content.currentUser.id') === this.get('model.goal.goalOwner.objectId'));
    }.property(),

    destroy: function(goal) {
      goal.destroy();
    },

    cancel: function() {
      this.set('isEditing', true);
    },

    edit: function() {
      this.set('isEditing', true);
    },

    save: function() {
      this.get('model.goal').save().then(function() {
        this.transitionToRoute('goal');
      }.bind(this));
    },

    // modal: function() {
    //
    //   var $;
    //   $(function() {
    //     $("#modal-1").on("change", function() {
    //       if ($(this).is(":checked")) {
    //         $("body").addClass("modal-open");
    //       } else {
    //         $("body").removeClass("modal-open");
    //       }
    //     });
    //
    //     $(".modal-fade-screen, .modal-close").on("click", function() {
    //       $(".modal-state:checked").prop("checked", false).change();
    //     });
    //
    //     $(".modal-inner").on("click", function(e) {
    //       e.stopPropagation();
    //     });
    //   });
    //
    //
    // }

  },

  isEditing: false,

});
