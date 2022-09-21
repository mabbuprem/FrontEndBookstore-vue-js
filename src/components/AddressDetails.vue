<template>
    <v-card class="mx-auto address-card mt-5"  outlined>
        <v-card-title> Address Details </v-card-title>
        <v-card-text>
            <v-row>
                <v-col>
                    <v-text-field label="Full Name" v-model="fullName" dense outlined class="fullName ml-8"
                        :rules="[validationRule.required]"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field label="Mobile Number" v-model="mobileNumber" dense outlined class="mobileNumber mr-5"
                        :rules="[validationRule.required]"></v-text-field>
                </v-col>
            </v-row>
            <v-row class="ml-4">1.WORK</v-row>
            <v-row class="mt-5">
                <v-textarea label="Address" v-model="address" dense outlined rows="2" class="address mr-5 ml-10"
                    :rules="[validationRule.required]"></v-textarea>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field label="city/town" v-model="city" dense outlined class="city ml-7"
                        :rules="[validationRule.required]"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field label="state" v-model="state" dense outlined class="mr-5 ml-15 mob-state-field"
                        :rules="[validationRule.required]"></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: "BooksUI",
    data: () => ({
        fullName: "",
        mobileNumber: "",
        address: "",
        city: "",
        state: "",
        isShow: false,
        validationRule: {
            required: (v) => !!v || "This field is required",
        },
    }),
    components: {},
    methods: {
        showDetails() {
            this.isShow = true;
        },
    },
};
</script>
  
<style>
* {
    font-family: Arial, Helvetica, sans-serif;
}

.address-card {
    left: 270px;
    margin-top: 20px;
    width: 655px;
    border: 1px solid faintGrey;
    border-radius: 1px;
    background: white 0% 0% no-repeat padding-box;
}

.fullName {
    width: 140px;
    margin-left: -5px
}

.mobileNumber {
    padding-left: 6px;
    width: 140px;
    margin-left: 0px
}

.mob-state-field {
    width: 140px;
    margin-left: 50px;
    padding-left: 20px
}

.v-application .mr-5 {
    margin-right: 180px !important;
}

.city {
    width: 140px;
    margin-left: 28px
}

@media (min-width: 960px) {
    .col-md-3 {
        flex: 0 0 39%;
        max-width: 43%;
    }
}

@media only screen and (min-width: 0px) and (max-width: 360px) {
    .address-card {
        left: 12px;
        margin-top: 20px;
        width: 300px;
        border: 1px solid faintGrey;
        border-radius: 1px;
        background: white 0% 0% no-repeat padding-box;
    }

    .fullName {
        width: 100%;
        margin-left: 9px;
        left: -33px;
    }

    .mobileNumber {
        padding-left: 6px;
        width: 100%;
    }

    .address {
        width: 100%;
        padding-right: 6px;
        left: -31px;
    }

    .v-application .mr-5 {
        margin-right: -15px !important;
    }

    .v-application .mr-5 {
        margin-right: -15px !important;
    }

    .mob-state-field {
        width: 100%;
        left: -61px
    }

    .city {
        width: 100%;
        left: -25px
    }
}

@media only screen and (min-width: 361px) and (max-width: 768px) {
    .address-card {
        left: 120px;
        margin-top: 20px;
        width: 500px;
        border: 1px solid faintGrey;
        border-radius: 1px;
        background: white 0% 0% no-repeat padding-box;
    }

    .fullName {
        width: 100%;
        margin-left: 9px;
        left: -33px;
    }

    .mobileNumber {
        padding-left: 6px;
        width: 100%;
    }

    .address {
        width: 100%;
        padding-right: 6px;
        left: -31px;
    }

    .v-application .mr-5 {
        margin-right: -15px !important;
    }

    .v-application .mr-5 {
        margin-right: -15px !important;
    }

    .mob-state-field {
        width: 100%;
        left: -61px
    }

    .city {
        width: 100%;
        left: -25px
    }
}
</style>