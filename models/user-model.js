const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    userData: {type: Object , default: {
            
        user_registration_date: '',
        user_name: '',
        user_age: '',
        user_country: '',
        user_city: '',
        user_tel_number: '',
        user_contact_email: '',


        user_posts: {
            post_date: '',
            post_header: '',
            post_title: '',
            post_text: '',
            post_author: ''
        },

        user_post_counter: null,
        user_like_counter: null
    }}
})

module.exports = model('User', UserSchema);
