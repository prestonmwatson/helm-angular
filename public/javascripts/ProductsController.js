angular
    .module('helm')
    .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['$state'];

    function ProductsController(){
      var self = this;



      this.productList = [
        {
          'name':'Kiffen',
          'price':569,
          'image':'/images/kiffen.jpg'
        },
        {
          'name':'Wells',
          'price':569,
          'image':'/images/wells.jpg'
        },
        {
          'name':'Ayers',
          'price':499,
          'image':'/images/ayers.jpg'
        },
        {
          'name':'Muller-teak',
          'price':485,
          'image':'/images/muller-teak.jpg'
        },
        {
          'name':'Muller brown',
          'price':485,
          'image':'/images/muller-brown.jpg'
        },
        {
          'name':'Phillips',
          'price':469,
          'image':'/images/phillips.jpg'
        }
      ]

      this.selected_product = [];

      this.bootPicker = function(boot){
        self.selected_product.pop();
        self.selected_product.push(boot);
      }


    }
