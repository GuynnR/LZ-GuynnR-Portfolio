(function($) {
    $(function() {
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    });
})(jQuery);
// Anchor && links
(function () {
    let d = document;
    function init() {
        // links
        let post1anchor = d.getElementById('post1anchor');
        let post2anchor = d.getElementById('post2anchor');
        let post3anchor = d.getElementById('post3anchor');
        let post4anchor = d.getElementById('post4anchor');
        // Anchors
        let post1 = d.getElementById('post1');
        let post2 = d.getElementById('post2');
        let post3 = d.getElementById('post3');
        let post4 = d.getElementById('post4');
        post1anchor.addEventListener('click', (e) => {
            scrollTo(post1, e) }, true);
        post2anchor.addEventListener('click', (e) => {
            scrollTo(post2, e) }, true);
        post3anchor.addEventListener('click', (e) => {
            scrollTo(post3, e) }, true);
        post4anchor.addEventListener('click', (e) => {
            scrollTo(post4, e) }, true);
    }
});