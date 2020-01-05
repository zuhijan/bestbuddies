(function () {

    document.addEventListener('click', function(event) {

        event.preventDefault();

        if (event.target.closest('.open-icon')) {
            document.querySelector('.open-icon').classList.add('open-icon_inactive');
            document.querySelector('.header-content__share-icons').classList.remove('share-icons_inactive');

        };
        if (!event.target.closest('.open-icon')) {
            document.querySelector('.open-icon').classList.remove('open-icon_inactive');
            document.querySelector('.header-content__share-icons').classList.add('share-icons_inactive');
        };

    });

    document.addEventListener('scroll', () => {

        let headerHeight = document.querySelector('.header').offsetHeight;
        let teamHeight = document.querySelector('.team').offsetTop;
        let scrollHeight = window.pageYOffset;
    
        if (teamHeight > (scrollHeight)) {
            document.querySelector('.header').style.position = 'fixed';
            // document.querySelector('.main-content').style.paddingTop = `${headerHeight}px`;
        };
        if (teamHeight <= (scrollHeight - headerHeight)) {
            document.querySelector('.header').style.position = 'static';
        };
    
    });

    document.querySelector('.arrow-up').addEventListener('click', () => {
        scrollTo(0,0);
    });

})();





