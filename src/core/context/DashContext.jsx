import React from 'react'
export default class DashCtx extends React.Component {
    state = {
        menuEnlarge: false,
        menuCollapse: false,
        menu: 0
    }

    intSlimscrollmenu = () => {
        window.$('.slimscroll-menu').slimscroll({
            height: 'auto',
            position: 'right',
            size: "5px",
            color: '#9ea5ab',
            wheelStep: 5,
            touchScrollStep: 50
        });
    }

    initMetisMenu = () => {
        //metis menu
        window.$("#side-menu").metisMenu();
    }

    initLeftMenuCollapse = () => {
        // Left menu collapse
        window.$('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            window.$("body").toggleClass("enlarged");
            if (window.$('body').attr('class') === 'enlarged') {
                localStorage.setItem('menuEnlarged', 1)
                return true;
            } else {
                localStorage.setItem('menuEnlarged', 0)
                return false
            }
        });
    }
}


export const DashContext = (DashCtx);