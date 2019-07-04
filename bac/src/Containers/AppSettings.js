import React from 'react';

class AppSettings extends React.Component {
  componentDidMount() {
    this.init();
  }

  log = (...params) => {
    try {
      if (process.env.REACT_APP_ENV && process.env.REACT_APP_ENV === "development") {
        console.log(...params);
      }
    } catch (error) {}
  }


  initSlimscroll = () => {
    window.$('.slimscroll').slimscroll({
      height: 'auto',
      position: 'right',
      size: "5px",
      color: '#9ea5ab',
      touchScrollStep: 50
    });
  }




  initEnlarge = () => {
    if (window.$(window).width() < 1025) {
      window.$('body').addClass('enlarged');
    } else {
      window.$('body').removeClass('enlarged');
    }
  }

  initActiveMenu = () => {
    // === following js will activate the menu in left side bar based on url ====
    window.$("#sidebar-menu a").each(() => {
      var pageUrl = window.location.href.split(/[?#]/)[0];
      if (this.href === pageUrl) {
        window.$(this).addClass("active");
        window.$(this).parent().addClass("active"); // add active to li of the current link
        window.$(this).parent().parent().addClass("in");
        window.$(this).parent().parent().prev().addClass("active"); // add active class to an anchor
        window.$(this).parent().parent().parent().addClass("active");
        window.$(this).parent().parent().parent().parent().addClass("in"); // add active to li of the current link
        window.$(this).parent().parent().parent().parent().parent().addClass("active");
      }
    });
  }

  initComponents = () => {
    window.$('[data-toggle="tooltip"]').tooltip();
    window.$('[data-toggle="popover"]').popover();
  }

  initHeaderCharts = () => {
    window.$('#header-chart-1').sparkline([8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
      type: 'bar',
      height: '35',
      barWidth: '5',
      barSpacing: '3',
      barColor: '#7A6FBE'
    });
    window.$('#header-chart-2').sparkline([8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
      type: 'bar',
      height: '35',
      barWidth: '5',
      barSpacing: '3',
      barColor: '#29bbe3'
    });
  }

  init = () => {
    this.initSlimscroll();
    this.initEnlarge();
    this.initActiveMenu();
    this.initComponents();
    this.initHeaderCharts();
    window.Waves.init();
  }


}

export default AppSettings;