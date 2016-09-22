angular
    .module('helm')
    .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['$state'];

    function ProductsController(){
      var self = this;


      this.productList = [
        {
          'name':'Kiffen',
          'externalId':'kiffen',
          'price':569,
          'image':'/images/kiffen.jpg',
          'description': 'Uniquely designed without sacrificing comfort, the Kiffen is the first HELM boot to feature the Ripple sole. Originally invented in the 50’s for paratroopers, this sole is made to be shock absorbent, weather resistant and give confidence and grip while in inclement weather. Made of Horween in burgundy, it features a slightly taller shaft and blacked out hardware to compliment the deep, rich color of the leather. A wedge and white midsole that was influenced by the Abel dresses up this fashionably rugged style, while the toe remains more rounded and is made using the popular John last. '
        },
        {
          'name':'Wells',
          'externalId':'wells',
          'price':569,
          'image':'/images/wells.jpg',
          'description': 'A military-inspired style for the office, The Wells is an adaptable boot with subtle elements. Silver hardware contrasts the Black Horween leather handsomely, while the zig-zag stitching along the back adds a hidden touch of detail. Using the more narrow 115 last but with a toe cap usually seen on a John last, this sets it apart from Americana work boots and places it in its own category. It features the Fineline sole for an elegant profile and a higher shaft and tongue to stay true to its roots in design.'
        },
        {
          'name':'Ayers',
          'externalId':'ayers',
          'price':499,
          'image':'/images/ayers.JPG',
          'description': 'Based on the Jack from the first season of HELM, The Ayers is an update for the modern man. It now features the signature white midsole with a HELM branded Raptor sole, adding beautifully detailed contrast against the Black Tasman leather while still remaining lightweight and durable. A more streamlined profile gives this style a dressier look, allowing it to step into the work-inspired fashion category. These elements give it the endurance and comfort of a work boot but allow it to fit in easily at the office or in any social setting.'
        },
        {
          'name':'Muller-teak',
          'externalId':'muller-teak',
          'price':485,
          'image':'/images/muller-teak.jpg',
          'description': 'Based off of traditional American work boots, The Muller can complete a wide array of wardrobes and transition easily from Americana workwear to dress casual. With a clean and modern profile, the Muller Teak is made of supple Horween Chromexcel, with contrasting silver hardware and a Waterloc sole for a thinner and more streamlined silhouette. '
        },
        {
          'name':'Muller brown',
          'externalId':'muller-brown',
          'price':485,
          'image':'/images/muller-brown.jpg',
          'description': 'Based off of traditional American work boots, The Muller can complete a wide array of wardrobes and transition easily from Americana workwear to dress casual. With a clean and modern profile, the Muller Brown is made of a soft Horween Chromexcel in a beautifully rich shade of brown, with contrasting silver hardware and a Waterloc sole for a thinner and more streamlined silhouette. The cap toe nods to its design heritage, while the white midsole, clean tonal stitched lines and oil treated sole set it apart from a work boot and gives it a place in the office or at any social gathering.'
        },
        {
          'name':'Phillips',
          'externalId':'phillips',
          'price':469,
          'image':'/images/phillips.jpg',
          'description': 'The Phillips 2.0 is an updated version of the Phillips, our twist on a chukka style boot. Made of supple Tasman rough-out, this high quality leather ages uniquely for each wearer. Also previously made using a dot-sole, it now features the Leather Waterloc which is more durable and water resistant than its predecessor. This versatile style can pair well with denim or more tailored slacks, as the sole lends a more polished look to its profile than typical chukka styles, allowing the Phillips 2.0 to transition from leisure to business effortlessly.'
        }
      ]

      this.selected_product = [];

      this.bootPicker = function(boot){
        self.selected_product.pop();
        self.selected_product.push(boot);
      }

      this.cart = [];

      this.addToCart = function () {
        this.cart.push(self.selected_product[0])
        console.log("success");
        console.log(self.cart);
        console.log(self.cart[0].name);
      }

      this.addToCartAlert = function () {
        
      }

 
};

