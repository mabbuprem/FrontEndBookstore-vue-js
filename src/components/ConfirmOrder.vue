<template>
    <v-app class="full-layout1">
      <v-content>
        <v-row>
          <AppBar ref="appBar" />
        </v-row>
        <v-row>
          <v-container grid-list-md text-xs-center>
            <v-layout row wrap class="mt-9">
              <v-col class="content">
                <v-row
                  class="mt-10 ml-10 confirmation-image"
                  align="center"
                  justify="center"
                >
                  <v-img
                    class="orderConfirmImage mt-10"
                    :src="require('../assets/order-confirm.png')"
                  ></v-img>
                </v-row>
                <v-row
                  row
                  wrap
                  class="mt-2 ml-10"
                  align="center"
                  justify="center"
                >
                  <h3 class="confirmation-msg">Order Placed Successfully</h3>
                </v-row>
                <v-row
                  row
                  wrap
                  class="desc-confirmation-msg mt-5 ml-12"
                  align="center"
                  justify="center"
                >
                  <pre class="desc-confirmation-msg">
           hurray!!your order is confirmed
       the order id is #094523 save the order id for
              further communication..</pre
                  >
                </v-row>
                <v-row class="mt-15 ml-10" align="center" justify="center">
                  <table>
                    <tbody>
                      <tr>
                        <th>Email us</th>
                        <th>Contact us</th>
                        <th>Address</th>
                      </tr>
  
                      <tr>
                        <td>mabbupremkumar@gmail.com</td>
                        <td>7981587635</td>
                        <td>new layout, AndhraPradesh</td>
                      </tr>
                    </tbody>
                  </table>
                </v-row>
                <v-row class="mt-15 ml-10" align="center" justify="center">
                  <v-btn class="continue-shopping" @click="goToHome"
                    >Continue Shopping</v-btn
                  >
                </v-row>
              </v-col>
            </v-layout>
          </v-container>
        </v-row>
      </v-content>
    </v-app>
  </template>
              
  <script>
  import AppBar from "../components/AppBar";
  export default {
    name: "ConfirmOrderUI",
    data: () => ({
      orderList: "",
      wishlist: "",
      items: "",
    }),
    components: {
      AppBar,
    },
    methods: {
      goToHome() {
        this.$router.push({
          path: "/dashboard",
          query: {
            books: this.items,
            wishlistBooks: this.wishlist,
            orderedBooks: this.orderList,
          },
        });
      },
    },
    mounted() {},
  };
  </script>
  
  <style>
 .orderConfirmImage{
    height: 120px;
    width: 120px;
    padding-top: 5px;
    margin-top: 12px;
    margin-bottom: 12px;
}

  .confirmation-image .v-responsive {
    flex:none;
  } 

   table {
    border-collapse: collapse;
    border-spacing: 3px;
  }

  table tr td{
    border: 1px solid grey;
    width: 210px;
    height: 60px;
    text-align: center;
  }

  table{
    border: 1px solid grey;
    border-spacing: 5px;
  }

  table tr th {
    font-weight: 400px;
    height: 30px;
    background-color: grey;
  }

  .continue-shopping {
    color: white !important;
    background-color: skyblue !important;
  } 

@media only screen and (min-width: 0px ) and (max-width: 360px ) {
    .full-layout1{
      width:39%
    }

    .orderConfirmImage{
      height: 60px;
      width: 60px;
      padding-top: -10px;
      margin-top: -10px;
   }

    .desc-confirmation-msg{
        font-size: 12px;
        padding-left: 10px;
    }

    .content{
      margin-left: 100px;
    }

    table {
      margin-left:-10px;
      border-collapse: collapse;
      border-spacing: 2px;
    }

    table tr td{
      border: 1px solid grey;
      width: 180px;
      height: 40px;
      text-align: center;
    }

    table tr th {
      font-weight: 200px;
      height: 20px;
      background-color: grey;
    }

    .continue-shopping {
      color: white !important;
      background-color: skyblue !important;
      margin-left: 5px;
      margin-top: -25px;
    } 
    .confirmation-msg{
      font-size: 15px;
    }
  }

  @media only screen and (min-width: 361px ) and  (max-width: 768px ) {
    .content{
      margin-left: 20px;
    }
  }
  </style>