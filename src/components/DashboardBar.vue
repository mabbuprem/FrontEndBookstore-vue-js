<template>
    <div>
    <v-card class="mx-auto overflow-hidden topBar">
      <v-app-bar color="#A03037" class="main-bar" fixed>
        <div class="book-icon">
          <v-img class="book-icon" contain :src="require('../assets/education.svg')"></v-img>
        </div>

        <!-- <v-card-title class="white--text row wrap"> BookStore </v-card-title> -->
        <v-toolbar-title class="row wrap white--text ml-5">BookStore</v-toolbar-title>

        <div id="top-search-bar" v-on:keyup.enter="displayAllBooks">
          <v-text-field class="mt-5 appBar" label="Search" prepend-inner-icon="mdi-magnify" autocomplete="off" dense
            collaps solo v-model="search"></v-text-field>
        </div>
        <!--   <v-spacer></v-spacer> -->
        <router-link :to="{ path: '/admin' }" style="text-decoration: none; color: inherit">
        <ul>
          <div class="white--text avatar">
            <v-icon class="white--text account-icon">mdi-account-outline</v-icon>
            <p id="bottom-name">Prem</p>
          </div>
        
        
        </ul>
    </router-link>
    
        <router-link :to="{ path: '/myCart' }" style="text-decoration: none; color: inherit">
          {{ cartItemQuantity }}
          <ul>
            <div class="white--text avatar">
              <v-img class="mt-4 mx-2 supermarket-icon white--text headline" contain
                :src="require('../assets/supermarket.svg')">
                {{ cartItemQuantity }}</v-img>
              <span id="bottom-name-cart">Cart</span>
            </div>
          </ul>
        </router-link>
        <v-badge id="counter" color="#A03037" :content="this.cartItemCounter"></v-badge>
      </v-app-bar>
        </v-card>
        <!-- <GetAllBooks></GetAllBooks> -->
        <router-view></router-view>
    </div>


</template>
<script>
// import AppBar from './AppBar.vue';
//import GetAllBooks from './GetAllBooks.vue';
export default {
    data: () => ({
        drawer: false,
        group: null,

        cartItemQuantity: "",
        cartItemCounter: 0,
        search: "",
        allBooks: [],
        filteredBooks: [],
        timeout: 3500,
    }),

    // methods: {
    //   Mycart() {
    //     this.orderedBooks = this.book;
    //     this.$emit("onCheckOut", this.orderedBooks);
    //   },
    // },
    // components: { AppBar }
}
</script>
<style>
.navigation_bar {
    margin-top: -60px;
    padding: 0;
    width: 1600px;
    height: 65px;

}

.v-text-field {
    width: 500px;
    padding-right: 100px;

}

.right_logos {
    /* width: 60px; */
    opacity: 0.5;

    display: flex;
    flex-direction: row;

}

.supermarket-icon {
    margin-left: 43px;
    min-height: 13px;
    min-width: 19px;
}

.title {
    font-size: 14px;
    font-weight: 15px;
    color: white;
    padding-left: -25px;
}

.avatar {
    justify-content: flex-end;
    margin-top: 1px;
}

#top-search-bar {
    margin-right: 250px;
    width: 500px;
    padding-top: 5px
}

.main-bar {
    color: brown;
    width: 100%
}

.book-icon {
    margin-top: 1px;
    padding-right: 10px;
    margin-left: 0px;
    max-height: 60px;
    max-width: 60px;
}

.white {
    font-variant: normal;
}

#bottom-name {
    font-size: 11px;
    margin-bottom: -11px;
    color: white;
    padding-left: -1px;
}

#bottom-name-cart {
    font-size: 11px;
    margin-bottom: -21px;
    color: white;
    padding-left: 10px;
}

@media only screen and (max-width: 360px) {
    .supermarket-icon {
        margin-left: 43px;
        min-height: 10px;
        min-width: 15px;
    }

    label {
        font-size: 5px;
    }

    .title {
        font-size: 4px;
        color: white;
        padding-left: 0px;
    }

    .v-application .ml-5 {
        margin-left: 6px !important;
        font-size: 12px;
    }

    .avatar {
        justify-content: flex-end;
        margin-top: 1px;
        margin-left: -20px;
    }

    .book-icon {
        margin-top: 1px;
        padding-right: 9px;
        margin-left: 0px;
        height: 20px;
        width: 20px;
    }

    #top-search-bar {
        margin-right: 22px;
        width: 130px;
        padding-top: 9px;
    }

    .main-bar {
        color: brown;
        width: 100%
    }
}

@media only screen and (min-width: 361px) and (max-width: 768px) {
    .supermarket-icon {
        margin-left: 43px;
        min-height: 10px;
        min-width: 15px;
    }

    .v-application .ml-5 {
        margin-left: 5px !important;
        font-size: 18px;
    }

    .avatar {
        justify-content: flex-start;
        margin-top: 1px;
    }

    #top-search-bar {
        margin-right: 92px;
        width: 250px;
        margin-top: 7px;
    }

    .book-icon {
        margin-top: 1px;
        padding-right: 10px;
        margin-left: 20px;
        max-height: 60px;
        max-width: 60px;
    }

    .main-bar {
        color: brown;
        width: 100%
    }
}
</style>