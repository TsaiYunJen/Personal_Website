$(function () {
    var leftMenuH = $(".leftmenubg").height();

    $(".tab-pane").css("height", leftMenuH - 100);
    $(".tab-pane").css("overflow-y", "auto");
    $(".self-system").css("height", leftMenuH - 100);

    new Vue({
        el: '.designList',
        data: {
            designList: []
        },
        mounted: function () {
            var self = this;
            $.ajax({
                url: '../json/design.json',
                method: 'GET',
                success: function (data) {
                    self.designList = data;
                    console.log('aa');
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    });
    new Vue({
        el: '.websiteList',
        data: {
            websiteList: []
        },
        mounted: function () {
            var self = this;
            $.ajax({
                url: '../json/website.json',
                method: 'GET',
                success: function (data) {
                    self.websiteList = data;
                    console.log('aa');
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    });
    $(document).on("click", '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});
