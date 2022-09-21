<template>
    <v-app class="full-layout ml-8">
        <v-row>
            <AppBar ref="appbar" />
        </v-row>
        <v-content class="display-layout">
            <v-col>
                <v-row class="book-route-links mb-2">
                    <a @click="goToHome">Home</a>
                </v-row>
                <v-row class="body-content">
                    <v-layout row wrap class="mt-5">
                        <v-flex xs12 sm6 md6>
                            <v-row>
                                <v-card class="mx-auto book-wishlist-card" outlined>
                                    <img class="mx-auto book-item-image mt-4" src="../assets/BookImage (1).png"
                                        alt="book"><br>
                                </v-card>
                            </v-row>
                            <v-row class="d-flex">
                                <v-btn class="add-to-bag white--text mt-5" @click="addToCart(item)"
                                    :disabled="isAddedToCart" >{{ addToBagText }}</v-btn>
                                <v-btn class="wish-list-btn white--text mt-5" @click="addToWishlist"
                                    :disabled="isWishlisted">
                                    <v-icon class="mr-2">mdi-heart</v-icon>{{ wishlistText }}
                                </v-btn>
                            </v-row>
                        </v-flex>
                        <v-flex xs12 sm6 md6 class="book-description">
                            <v-row class="book-details">
                                <v-list-item class="add-bag-book-title">{{
                                item.title
                                }}</v-list-item>
                                <v-list-item class="add-bag-book-author">{{
                                item.author
                                }}</v-list-item>
                            </v-row>
                            <v-row>
                                <v-list-item class="add-bag-book-price">{{
                                 "Rs. " + item.price
                                }}</v-list-item>
                            </v-row>
                            <v-divider class="divider mt-5" />
                            <v-row>
                                <v-list-item class="add-bag-book-description mt-5">Book Detail</v-list-item>
                                <v-list-item class="description">{{
                                item.description
                                }}</v-list-item>
                            </v-row>
                            <v-divider class="divider mt-5" />
                            <v-row class="cust-feedback mb-5">
                                <v-list-item id="break" class="mt-5">Customer Feedback</v-list-item>
                                <br />
                                <v-card class="mx-auto feedback-card ml-3" outlined>
                                    <h5 class="ml-5 mt-2 mb-2">Overall rating</h5>

                                    <v-textarea autocomplete="off" placeholder="write Your review" flat solo dense
                                        auto-grow rows="1" row-height="10" required />
                                </v-card>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="8"></v-col>
                                <v-col cols="12" md="4">
                                    <v-btn class="feedback-submit-button mb-5">Submit</v-btn>
                                </v-col>
                            </v-row>

                            <br />
                        </v-flex>
                    </v-layout>
                </v-row>
            </v-col>

            <!-- <Snackbar ref="snackbar" /> -->
            <MyCart v-show="false" ref="myCart" />
            <Books v-show="false" ref="books" />
        </v-content>
    </v-app>
</template>
  
<script >
import BookService from '@/Services/UserService/BookService';
import AppBar from "../components/AppBar.vue"
import Books from "../components/DisplayBooks.vue"
export default {
    name: "BookDetail",
    data: () => ({
        item: {},
        book: "",
        addedToCartItems: [],
        addedToWishlistItems: [],
        wishlistText: "WISHLST",
        addToBagText: "ADD TO BAG",
        isWishlisted: false,
        newItem: "",
        isAddedToCart: false,
        // addToWishlist: '',
        // addToCart: '',
        book_id: ''
    }),
    components: {
        AppBar,
        Books,
    },
    methods: {
        goToHome() {
            this.$router.push("/dashboard");
        }, 
        addToWishlist() {
        console.log(this.book_id);
        let reqData = {
            book_id:this.book_id,
        }
        BookService.prototype.addToWishlistService(reqData).then((data)=> {
          console.log("Response from addToWishlist", data);
          localStorage.setItem("token", data.data.token);
        })
        .catch((error) => {
            console.log(error);
          });
      },

      addToCart() {
        console.log(this.book_id);
        let reqData = {
            book_id:this.book_id,
        }
        BookService.prototype.addToCartService(reqData).then((data)=> {
          console.log("Response from addToCart", data);
          localStorage.setItem("token", data.data.token);
        })
        .catch((error) => {
            console.log(error);
          });
      },
    },
    
    }


    
</script>
  
<style >
* {
    font-family: Arial, Helvetica, sans-serif;
}

.book-wishlist-card {
    height: 311px;
    width: 251px;
    margin-top: 0px;
    color: rgb(167, 171, 172);
}

.book-item-image {

    height: 282px;
    width: 191px;
}

.book-details .v-list-item {
    min-height: 20px !important;
}

.flex.md3 {
    margin-left: 63px;
    margin-right: -40px;
}

#break {
    margin-bottom: 12px;
}

.add-to-bag {
    color: white !important;
    background-color: #A03037 !important;
    width: 120px !important;
    margin-left: 220px;
}

.display-layout {
    font-size: 17px;
    margin-top: 100px !important;
}

.divider {
    width: 605px;
}

.book-route-links {
    font-size: 17px;
    margin-bottom: 5px !important;
    padding-left: 50px;
    padding-top: 20px;
}

.add-bag-book-title {
    font-size: 20px;
    font-weight: inherit;
}

.add-bag-book-price {
    font-size: 23px;
    ;
    font-weight: bold;
}

.full-layout {
    max-height: 200% !important
}

.add-bag-book-author {
    font-size: 12px;
    color: darkGrey !important;
}

.feedback-submit-button {
    color: white !important;
    background-color: rgb(52, 112, 224) !important;
    width: 110px !important;
    margin-left: 25px;
}

.feedback-card {
    width: 605px;
    height: 110px;
    border: 5px solid black;
    background: faintGrey 0% 0% no-repeat padding-box;
}

.cust-feedback .theme--light.v-card {
    background-color: rgba(235, 230, 230, 0.877);
}

.wish-list-btn {
    color: white !important;
    background-color: #363535 !important;
    width: 135px !important;
    margin-left: 32px;
}

.description {
    margin-right: 60px;
    font-size: 13px;
}

::-webkit-scrollbar {
    display: none;
}

@media only screen and (min-width: 361px) and (max-width: 768px) {
    .feedback-submit-button {
        color: white !important;
        background-color: rgb(52, 112, 224) !important;
        width: 81px !important;
        margin-left: 250px;
        margin-top: -60px;
    }

    .add-to-bag {
        color: white !important;
        background-color: #A03037 !important;
        width: 100px !important;
        margin-left: 50px;
    }

    .wish-list-btn {
        color: white !important;
        font-size: 8px;
        background-color: #363535 !important;
        width: 100px !important;
        margin-left: 20px;
    }

    .full-layout {
        max-height: 100% !important
    }

    .display-layout {
        font-size: 17px;
        margin-top: -260px !important;
        padding-left: 20px;
    }

    .book-item-image {

        height: 260px;
        width: 190px;
    }

    .book-route-links {
        font-size: 17px;

    }
}

@media only screen and (min-width: 0px) and (max-width: 360px) {

    .display-layout {
        font-size: 17px;
        margin-top: 77px !important;
        margin-right: -33px;
    }

    .body-content {
        margin-left: 5px;
    }

    .full-layout {
        max-height: 80% !important
    }

    .add-to-bag {
        color: white !important;
        background-color: #A03037 !important;
        width: 200px !important;
        margin-left: 60px;
    }

    .feedback-submit-button {
        color: white !important;
        background-color: rgb(52, 112, 224) !important;
        width: 81px !important;
        margin-left: 220px;
        margin-top: -60px;
    }

    .wish-list-btn {
        color: white !important;
        font-size: 8px;
        background-color: #363535 !important;
        width: 200px !important;
        margin-left: 60px;
    }

    .book-wishlist-card {
        height: 220px;
        width: 200px;
        margin-top: 0px;
        margin-left: 100px;
        color: rgb(167, 171, 172);
    }

    .book-item-image {
        height: 190px;
        width: 180px;
    }

    .book-description {
        margin-left: 20px;
        margin-top: 30px;
        width: 250px;
        flex-basis: 100%;
        flex-grow: 0;
        max-width: 90%;
    }
}
</style>