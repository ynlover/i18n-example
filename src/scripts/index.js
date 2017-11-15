var $ = require('jquery');
var i18n = require('i18next-client/i18next.amd.withJQuery.min');

console.log(i18n)
var page = {
    init:function () {
        // 初始化语言
        i18n.init({
            debug: true,
            lng: 'en',
            preload: ['en', 'cn'], //预加载语言
            ns: 'translation',
            fallbackLng: false, // 未命中key的补足逻辑
            useLocalStorage: true,
            resGetPath: 'http://qunarzz.com/i18n-example/i18n/__lng__/__ns__.json'
        }, function (err, t) {
            if(!err){
                this.render();
                this.bindEvent();
            }
        }.bind(this));
    },
    render: function () {
        this.switchLng = i18n.lng() == 'cn' ? 'en' : 'cn';
        $('#app').i18n({name: "everybody"});
        this.showCurrentLng();
    },
    showCurrentLng:function () {
        $('.tip').html(i18n.t('content.tip'));
    },
    bindEvent:function () {
        var self = this;
        $('#app').on('click',function () {
            i18n.setLng(self.switchLng,function () {
                self.render();
            });
        });
    }
};

page.init();


