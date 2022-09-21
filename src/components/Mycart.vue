<template>
    <v-app class="full-layout">
        <v-content>
            <v-row>
                <AppBar ref="appbar" :cartItemQuantity="cartItemQuantity" />
            </v-row>
            <v-flex>
                <v-row>
                    <v-layout row wrap class="mt-5">
                        <v-flex xs24 md12>
                            <v-row class="mt-15">
                                <v-col class="mt-5 book-route-links">
                                    <router-link :to="{ path: '/dashboard' }"
                                        style="text-decoration: none; color: inherit">Home
                                    </router-link>
                                    /
                                    <router-link :to="{ path: '/myCart' }"
                                        style="text-decoration: none; color: inherit">My Cart</router-link>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-flex row class="mt-2">
                                    <v-card class="mx-auto mycart-card" outlined>
                                        <v-card-title>{{
                                        "My cart (" + this.cartItemQuantity + ")"
                                        }}</v-card-title>

                                        <v-flex v-for="book in bookListArray" :key="book.id" class="mt-2">
                                            <v-layout class="mb-5">
                                                <v-flex md2>
                                                    <v-img class="cart-image ml-5 mt-2" :src="item.image"
                                                        @click="placeOrder(item)"></v-img>
                                                </v-flex>
                                                <v-flex md8>
                                                    <v-row class="ml-5 mt-1">
                                                        <v-list-item id="title">{{
                                                        item.title
                                                        }}</v-list-item>
                                                        <v-list-item id="author">{{
                                                        item.author
                                                        }}</v-list-item>
                                                        <v-list-item id="price">{{
                                                        "Rs." + item.price
                                                        }}</v-list-item>
                                                    </v-row>
                                                    <v-row class="counter">
                                                        <v-icon class="counter-minus" @click="decrementCounter(item)">
                                                            mdi-minus-circle-outline</v-icon>
                                                        <v-text-field dense outlined v-model="item.quantity"
                                                            class="counter-field"></v-text-field>
                                                        <v-icon class="counter-plus" @click="incrementCounter(item)">
                                                            mdi-plus-circle-outline</v-icon>
                                                    </v-row>
                                                </v-flex>
                                                <v-flex class="remove-book-btn mr-5">
                                                    <br /><br /><br /><br />
                                                    <v-btn class="" @click="removeItemFromCart(item)">
                                                        Remove
                                                    </v-btn>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-card>
                                </v-flex>
                            </v-row>
                        </v-flex>

                        <v-flex md3>
                            <br /><br />
                            <v-row>
                                <v-form ref="addressForm" v-show="true" class="address-form">
                                    <AddressDetails ref="AddressDetails" />
                                </v-form>
                            </v-row>
                            <v-row>
                                <v-form class="address-form1">
                                    <OrderSummary ref="orderSummary" @onCheckOut="checkOut" />
                                </v-form>
                            </v-row>
                        </v-flex>
                    </v-layout>
                </v-row>
            </v-flex>
        </v-content>
    </v-app>
</template>
  
<script>
import AppBar from "../components/AppBar";
import BookService from '@/Services/UserService/BookService';
import AddressDetails from "../components/AddressDetails";
import OrderSummary from "../components/OrderSummary";

export default {
    name: "MycartUI",
    props: ["bookListArray"],
    data: () => ({
        counter_value: 0,
        orderList: [],
        allBooks: [],
        cartItemQuantity: 0,
        timeout: 3500,
        validate: ''
    }),
    components: {
        AppBar,
        AddressDetails,
        OrderSummary,
        //   Snackbar,
    },
    methods: {
        incrementCounter(item) {
            item.quantity = item.quantity + 1;
        },
        addressForm() {
            this.isShow = true;
        },
        decrementCounter(item) {
            item.quantity = item.quantity - 1;
            if (item.quantity <= 0) item.quantity = 1;
        },
        placeOrder(item) {
            const orderSummary = this.$refs.orderSummary;
            orderSummary.setBook(item);
            const addressdetails = this.$refs.addressdetails;
            addressdetails.showDetails();
        },

        checkOut(book, reqData) {
      console.log("checkout called", reqData);
      if (this.$refs.addressForm.validate()) {
        console.log("this.$refs.addressForm", this.$refs.addressForm);
        console.log("ordrelist", this.orderList);
        this.orderList.push(book);
        console.log("ordrelist1", this.orderList);
        this.$router.push({
          path: "/confirmOrder",
        });
      }

    },
        getAllBooks() {
            console.log("get all books Called");
            BookService.prototype.getAllBookService()
                .then((data) => {
                    console.log("Response from getAllBooks", data);
                    this.booksArray = data.data.books;
                    console.log(this.booksArray);
                    // this.NotesArray.reverse()
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.getAllBooks();
    },
    // components: { DisplayBooks }
};
    //   removeItemFromCart(item) {
    //     try {
    //       user.removeItemFromCart(item._id).then((result) => {
    //         const snackbarData = {
    //           text: `${result.data.message}`,
    //           timeout: this.timeout,
    //         };
    //         this.$refs.snack.setSnackbar(snackbarData);
    //         this.displayAllBooks();
    //       });
    //     } catch (error) {
    //       const snackbarData = {
    //         text: error,
    //         timeout: this.timeout,
    //       };
    //       this.$refs.snack.setSnackbar(snackbarData);
    //     }
    //   },
    //   checkOut(book, testData) {
    //     console.log("checkout called", testData);
    //     if (this.$refs.addressForm.validate()) {
    //       console.log("this.$refs.addressForm", this.$refs.addressForm);
    //       console.log("ordrelist", this.orderList);
    //       this.orderList.push(book);
    //       console.log("ordrelist1", this.orderList);
    //       this.$router.push({
    //         path: "/confirmOrder",
    //       });
    //     }
    //   },
    // },
    // beforeMount() {
    //   this.displayAllBooks();
    // },

</script>
  
<style>
* {
    font-family: Arial, Helvetica, sans-serif;
}

.full-layout {
    top: 0px;
    left: 0px;
    width: 100;
    height: 100;
    background: white 0% 0% no-repeat padding-box;
    opacity: 1;
}

.mycart-card {
    left: -50px;
    width: 655px;
    border: 1px solid faintGrey;
    border-radius: 1px;
    background: white 0% 0% no-repeat padding-box;
    top: -5px;
}

.book-route-links {
    font-size: 13px;
    margin-left: 320px;
}

#title {
    font-size: 15px;
    margin-top: -7px;
    margin-left: 1px;
}

#author {
    font-size: 12px;
    color: gray !important;

}

.cart-image {
    height: 120px;
    width: 90px;
    margin-top: 5px;
}

.counter {
    width: 120px;
}

/*   .address-form1{
      left: 270px;
      top: 20px;
      width: 1055px;
      border: 1px solid $faintGrey;
      border-radius: 0.1px;
      border-color: azure;
      background: $white 0% 0% no-repeat padding-box;
    } */

.v-list-item {
    min-height: 25px !important;
}

.counter .v-text-field--outlined.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot {
    min-height: 9px;
}

.counter .v-text-field.v-text-field--enclosed {
    margin-top: 20px;
    width: 30px;
}

.counter .v-text-field .v-input__control {
    width: 30px;
}

.counter-minus {
    margin-left: 40px;
}

.place-orde-btn {
    color: white !important;
    background-color: rgb(52, 112, 224) !important;
    width: 110px !important;
    margin-left: 10px !important;
    margin-top: -20px;
}

@media only screen and (min-width: 0px) and (max-width: 360px) {

    .mycart-card {
        left: 55px;
        width: 300px;
        border: 1px solid faintGrey;
        border-radius: 1px;
        background: white 0% 0% no-repeat padding-box;
        top: -5px;
    }

    .full-layout {
        max-width: 80%;
    }

    .book-route-links {
        font-size: 8px;
        margin-left: 65px;
    }

    .cart-image {
        height: 80px;
        width: 60px;
        margin-top: 2px;
    }

    .remove-book-btn {
        padding-left: 15px;
    }

}

@media only screen and (min-width: 361px) and (max-width: 768px) {
    .mycart-card {
        left: 100px;
        width: 500px;
        border: 1px solid faintGrey;
        border-radius: 1px;
        background: white 0% 0% no-repeat padding-box;
        top: -5px;
    }

    .full-layout {
        max-width: 80%;
    }

    .book-route-links {
        font-size: 10px;
        margin-left: 170px;
    }

    .cart-image {
        height: 100px;
        width: 80px;
        margin-top: 2px;
    }

    .remove-book-btn {
        padding-left: 15px;
    }

}
</style>