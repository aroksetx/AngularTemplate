module.exports = function($stateProvider, $urlRouterProvider){
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/main");
    //
    // Now set up the states
    $stateProvider
        .state('main', {
            url: "/main",
            template: require("./templates/main/main.html")
        })

        /**
         * com_user component describe
         * USER ROUTING
         * */

        .state('user-login',{
            url:"/login",
            template: require("./templates/com_users/com_users-login-template.html")
        })
        .state('user-apply',{
            url:"/apply",
            template: require("./templates/com_users/com_users-registrate.html"),
            controller: "comUsersCtrl"
        })
        .state('user-check-token',{
            url:"/check/:token",
            template: require("./templates/com_users/com_users-check-token.html"),
            controller: "comUsersCtrl"
        })
        .state('user-resend-token',{
            url:"/resend/:token",
            template: require("./templates/com_users/com_users-resend-token.html"),
            controller: "comUsersCtrl"
        })
        .state('user-resend-password',{
            url:"/user/password/resend",
            template: require("./templates/com_users/com_users-resend-token.html"),
            controller: "comUsersCtrl"
        })
        .state('user-change-password',{
            url:"/user/:userId/password/change",
            template: require("./templates/com_users/com_users-resend-token.html"),
            controller: "comUsersCtrl"
        })


    /**
     * com_userprofile component rout
     * */
        .state('user-profile',{
            url:"/userId/profile",
            template: require('./templates/com_userprofile/com_userprofile_main.html')
        })
        .state('user-profile-help',{
            url:"/userId/profile/help",
            template: '<h1>Some Help Page for user</h1>'
        })

    /**
     * Add chield user
     * */
        .state('user-add-chield',{
            url:"/userId/chield/add",
            template: require('./templates/com_users/com_users-create-child-user.html')
        })
        .state('user-chield-list',{
            url:"/userId/chield/list",
            template: require('./templates/com_users/com_users-chield-user-list.html')
        })
        .state('user-chield-view-by-idt',{
            url:"/userId/chield/:chieeldID",
            template: require('./templates/com_users/com_user-chield-view.html')
        })

     /*
     * ARTIST MANIOULATIONS
     * **/
        .state('user-artist-list',{
            url:"/userId/artist/list",
            template: require('./templates/com_artist/com-artist-list.html')
        })

     /**
      * PRODUCTS
      * */
        .state('user-product-add',{
            url:"/userId/product/add",
            template: require('./templates/com-products/com-produc-add.html')
        })

};