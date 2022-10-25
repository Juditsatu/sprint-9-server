const { Schema, model } = require("mongoose");


const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favorites: {
        type: Array,
        required: false
    },
    isSitter: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
        required: false
    },
    postalCode: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    coords: {
        type: Array,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false
    },
    serviceTime: {
        type: Number,
        required: false
    },
    catType: {
        type: Boolean,
        required: false,
        default: true
    },
    dogType: {
        type: Boolean,
        required: false,
        default: true
    },
    like: {
        type: Boolean,
        required: false,
        default: false
    },
    imgUrl: {
        type: String,
        required: false,
        default: 'https://inshaka.com/view/img/noprofileimg.png'
    }
});

module.exports = model('User', UserSchema);