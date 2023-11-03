var content = new Vue({
    el:"#content",

    data:{
        cart: [],
        
        sizesOption: [37, 38, 39,40],
        packagingOption : ["Normal", "Bubble Wrap", "Kotak Kayu"],
        choosePackaging :"",
        chooseSize: "",
        specialRequest: "",

        currentProductName: "White Sneakers",
        currentProductImage: "images/one-white-sneaker-shoe-isolated-white.jpg",
        currentProductPrice: "Rp 900.000",
        currentProductDiscountPrice: "Rp 500.000",
        currentProductColor:"White",
        
        qty: 0,

        variants: [ 
            {
                variantId: 101,
                variantName: "White Sneakers",
                variantColor:"White",
                variantImage: "images/one-white-sneaker-shoe-isolated-white.jpg",
                variantPrice: "Rp 900.000",
                variantDiscount: "Rp 500.000",
            },

            {
                variantId: 102,
                variantName: "Red Sneakers",
                variantColor:"Red",
                variantImage: "images/th (2).jpeg",
                variantPrice: "Rp 6.000.000",
                variantDiscount: "Rp 3.000.000",
            },
            
            {
                variantId: 103,
                variantName: "Blue Sneakers",
                variantColor:"Blue",
                variantImage: "images/th.jpeg",
                variantPrice: "Rp 1.500.000",
                variantDiscount: "Rp 750.000",
            },
        ],
    },

    methods: {

        openKeranjang(){
            document.getElementById("popup2").style.visibility = "visible";
        },

        closeKeranjang(){
            document.getElementById("popup2").style.visibility = "hidden";
        },

        visibleButton(index) {
            document.getElementById("popup").style.visibility = "visible";
            this.currentProductImage = this.variants[index].variantImage;
            this.currentProductName = this.variants[index].variantName;
            this.currentProductPrice = this.variants[index].variantPrice;
            this.currentProductDiscountPrice = this.variants[index].variantDiscount;
            this.currentProductColor = this.variants[index].variantColor;
        },

        qty_plus() {
            if(this.qty < 20){
                this.qty += 1
            }
        },

        qty_minus() {
            if(this.qty > 0){
                this.qty -= 1
            }
        },

        addToCart() {
            
        },

        invisibleButton() {
            document.getElementById("popup").style.visibility = "hidden";
        },

        buyNow() {
            var message = "https://wa.me/62895805000702?text=Hallo%2C%20Saya%20ingin%20memesan%20%0AProduk%3A%20" 
            + this.currentProductName + "%0AUkuran%3A%20" + this.chooseSize +
            "%0AJumlah%3A%20" + this.qty + "%0APackaging%3A%20" + this.choosePackaging + "%0A%0ATerimakasih";

            if (this.specialRequest !== ""){
                message = message + " Special Request : " + this.specialRequest;
            }

            window.location.href = message;

        },

    },
})



