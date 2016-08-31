angular
    .module('helm')
    .controller('ProductsController', ProductsController);

    function ProductsController(){
      var self = this;

      this.productList = {
        'kiffen':{
          'cost':569,
          'image':'/images/kiffen.jpg'
        },
        'wells':{
          'cost':569,
          'image':'/images/wells.jpg'
        },
        'ayers':{
          'cost':499,
          'image':'/images/ayers.jpg'
        },
        'muller teak':{
          'cost':485,
          'image':'/images/muller-teak.jpg'
        },
        'muller brown':{
          'cost':485,
          'image':'/images/muller-brown.jpg'
        },
        'phillips':{
          'cost':469,
          'image':'/images/phillips.jpg'
        }
      }
    }
