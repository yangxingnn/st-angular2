(Function(app){
    app.AppComponent =
    ng.core.Component({
        selector:'my-app',
        template:'<h1>hello my blog</h1>'
    })
    .class({
        constructor:function(){}
    });
})(window.app||(window.app={}));
