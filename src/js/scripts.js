
import './modules/video';
import './modules/form';
import './modules/validate';

(function () {

    document.addEventListener('click', function(event) {

        if (event.target.closest('.open-icon')) {
            document.querySelector('.open-icon').classList.add('open-icon_inactive');
            document.querySelector('.header__share-icons').classList.remove('share-icons_inactive');
            if (window.innerWidth <= 970) {
                document.querySelector('.header__company-name').classList.add('company-name_close');
            }

        };
        if (!event.target.closest('.open-icon')) {
            document.querySelector('.open-icon').classList.remove('open-icon_inactive');
            document.querySelector('.header__share-icons').classList.add('share-icons_inactive');
            document.querySelector('.header__company-name').classList.remove('company-name_close');
        };

    });

    document.addEventListener('scroll', () => {

        let headerHeight = document.querySelector('.header').offsetHeight;
        let teamHeight = document.querySelector('.budget').offsetTop;
        let scrollHeight = window.pageYOffset;

    
        if (teamHeight > (scrollHeight)) {
            document.querySelector('.header').style.position = 'sticky';
        };
        if (teamHeight <= (scrollHeight - headerHeight)) {
            document.querySelector('.header').style.position = 'static';
        };

    
    });

    document.getElementsByClassName('copier').forEach( el => {
        el.addEventListener('click', function() {
        let copytext = document.createElement('input');
        copytext.value = window.location.href;
        document.body.appendChild(copytext);
        copytext.select();
        document.execCommand('copy');
        document.body.removeChild(copytext);
       });
    });

})();
