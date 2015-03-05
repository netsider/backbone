var ListView = Backbone.View.extend({

  // Compile a template for this view. In this case '...'
  // is a placeholder for a template such as 
  // $("#list_template").html() 
  template: _.template($("#list_template").html()),
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});