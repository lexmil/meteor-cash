_ = lodash;
Meteor.isDevelopment = false;

if(Meteor.isClient){
    AutoForm.setDefaultTemplate('bootstrap3');

    Bootstrap3boilerplate.init();
    Bootstrap3boilerplate.Modal.body.set('');
    Bootstrap3boilerplate.Modal.title.set('');
    Bootstrap3boilerplate.Modal.effect.set('');
    Bootstrap3boilerplate.ProjectName.set('Meteor Cash');
    Bootstrap3boilerplate.fluid.set(true);
    Bootstrap3boilerplate.Navbar.type.set('navbar-fixed-top');
    Bootstrap3boilerplate.Footer.content.set('@ 2015 Meteor Cash');
    Bootstrap3boilerplate.Navbar.right = function(){return [];};
    Bootstrap3boilerplate.Navbar.left = function(){
        return [{href:'/',text:'Transactions'},
            {href:'/accounts',text:'Accounts'},
            {href:'/categories',text:'Categories'},
            {href:'/parties',text:'Parties'},
            {href:'/currencies',text:'Currencies'},
            {href:'/tags',text:'Tags'}];
    }
}