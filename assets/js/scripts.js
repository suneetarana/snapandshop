
// Image search dropdown

jQuery(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".image-search-btn").click(function () {
        var t = e(this).parents(".image-search-form").children(".image-search-dropdown").is(":hidden");
        e(".image-search-form .image-search-dropdown").hide();
        e(".image-search-form .image-search-btn").removeClass("active");
        if (t) {
            e(this).parents(".image-search-form").children(".image-search-dropdown").toggle().parents(".image-search-form").children(".image-search-btn").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("image-search-form")) e(".image-search-form .image-search-dropdown").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("image-search-form")) e(".image-search-form .image-search-btn").removeClass("active");
    })
});