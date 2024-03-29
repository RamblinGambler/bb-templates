// #1
// var DrinkView = Backbone.View.extend({
//     initialize: function (options) {
//         this.name = options.name;
//     },
//     render: function () {
//         console.log('You should drink', this.name);
//     }
// });

// var sprite = new DrinkView({
//     name: 'Sprite'
// });
// sprite.render();
// var water = new DrinkView({
//     name: 'Water'
// });
// water.render();

// #2
// var ButtonView = Backbone.View.extend ({
//     render: function () {
//         $(this.el).html('<button>I don\'t do anything :(</button>');
//     }
// });

// var view = new ButtonView({
//     el: '.button'
// });
// view.render();

// #3
// var ButtonView = Backbone.View.extend({
//     render: function () {
//         $(this.el).html('<button>I don\'t do anything either!</button>');
//     }
// });

// var view = new ButtonView({
//     el: '.big-button'
// });
// view.render();

// #4
// var stockTemplate = _.template('<b><%= name %>:</b> <%= price %>');

// var StockView = Backbone.View.extend({
//     initialize: function (options) {
//         this.name = options.name;
//         this.price = options.price;
//     },
//     render: function () {
//         var newStockHtml = stockTemplate({name: this.name, price: this.price});
//         $(this.el).append(newStockHtml);
//     }
// });

// var appl = new StockView({
//     name: 'AAPL',
//     price: 380,
//     el: $('.stock-price:eq(0)')
// });
// var goog = new StockView({
//     name: 'GOOG',
//     price: 800,
//     el: $('.stock-price:eq(1)')
// });

// appl.render();
// goog.render();

// #5
// var dressTemplateHtml = $('#templates .dress').html();
// var dressTemplate = _.template(dressTemplateHtml);

// var DressView = Backbone.View.extend({
//     className: 'dress',

//     initialize: function (options) {
//         this.color = options.color;
//         this.price = options.price;
//     },

//     render: function () {
//         var newDressHtml = dressTemplate({ color: this.color, price: this.price });
//         $(this.el).html(newDressHtml);
//     }
// });

// var dressOne = new DressView({
//     color: 'green',
//     price: 14.99
// });
// var dressTwo = new DressView({
//     color: 'red',
//     price: 18.99
// });

// dressOne.render();
// dressTwo.render();
// $('body').append(dressOne.el);
// $('body').append(dressTwo.el);

// #7
// var profileTemplate = _.template('<%= name %> (Age: <%= age %>)');

// var ProfileView = Backbone.View.extend({
//     initialize: function (options) {
//         this.name = options.name;
//         this.age =  options.age;
//     },
//     render: function () {
//         var newProfileHtml = profileTemplate({name: this.name, age: this.age});
//         $(this.el).html(newProfileHtml);
//     }
// });

// var profileView = new ProfileView({
//     name: 'Bob',
//     age: 45,
//     el: $('.profile')
// });

// profileView.render();

// #8
// var dressTemplateHtml = $('#templates .dress').html();
// var dressTemplate = _.template(dressTemplateHtml);

// var DressView = Backbone.View.extend({

//     events: {
//         'click button.buy': 'buy'
//     },

//     initialize: function (options) {
//         this.color = options.color;
//         this.price = options.price;
//     },

//     render: function () {
//         var newDressHtml = dressTemplate({ color: this.color, price: this.price });
//         $(this.el).html(newDressHtml);
//     },
//     buy: function(e) {
//         alert('you bought it for $' + this.price);
//     }
// });

// var dressOnSaleYo = new DressView({
//     color: 'burnt orange',
//     price: 59.99
// });
// dressOnSaleYo.render();
// $('body').append(dressOnSaleYo.el);

// #9
// var pingServer = _.extend({}, Backbone.Events);

// var StudentView = Backbone.View.extend({
//     initialize: function (options) {
//         this.name = options.name;
//     },

//     ping: function () {
//         pingServer.trigger('ping', this.name);
//     }
// });

// var InstructorView = Backbone.View.extend ({
//     totalPings: 0,

//     initialize: function (options) {
//         this.listenTo(pingServer, 'ping', this.recordPop);
//     },

//     recordPop: function (name) {
//         this.totalPings += 1;
//     }
// });

// var alice = new StudentView({ name: 'Alice'});
// var bob = new StudentView({ name: 'Bob'});
// var instructor = new InstructorView({ name: 'Dr. Prof'});

// alice.ping();
// alice.ping();
// console.log('Instructor should have 2 pings:', instructor.totalPings);
// bob.ping();
// bob.ping();
// bob.ping();
// bob.ping();
// bob.ping();
// console.log('Instructor should have 7 pings:', instructor.totalPings);
