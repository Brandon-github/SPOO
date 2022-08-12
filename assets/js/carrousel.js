class Carrousel {
  constructor() {}

  static manual() {
    $(".carrousel__control").each(function (index, item) {
      $(item).click(function () {
        $(".carrousel__control").removeClass("active");
        $(this).addClass("active");

        $(".carrousel__item").removeClass("active");
        $(".carrousel__item").each(function (index2) {
          if (index === index2) $(this).addClass("active");
        });
      });
    });
  }

  static automatic() {
    let carrousel_count = 0;
    let carrousel_lenth = $(".carrousel__control").length - 1;

    setInterval(() => {
      $(".carrousel__control").each(function (index, item) {
        if (index === carrousel_count) {
          $(".carrousel__control").removeClass("active");
          $(this).addClass("active");
        }

        $(".carrousel__item").each(function (index2) {
          if (index2 === carrousel_count) {
            $(".carrousel__item").removeClass("active");
            $(this).addClass("active");
          }
        });
      });

      if (carrousel_count < carrousel_lenth) carrousel_count++;
      else carrousel_count = 0;
    }, 3000);
  }

  static complet(secondInterval) {
    let carrousel_count = 0;
    let carrousel_lenth = $(".carrousel__control").length - 1;

    // Manual Carrousel
    $(".carrousel__control").each(function (index, item) {
      $(item).click(function () {
        carrousel_count = index;
        $(".carrousel__control").removeClass("active");
        $(this).addClass("active");

        $(".carrousel__item").removeClass("active");
        $(".carrousel__item").each(function (index2) {
          if (index === index2) $(this).addClass("active");
        });
      });
    });

    // Automatic Carrousel
    setInterval(() => {
      $(".carrousel__control").each(function (index, item) {
        if (index === carrousel_count) {
          $(".carrousel__control").removeClass("active");
          $(this).addClass("active");
        }

        $(".carrousel__item").each(function (index2) {
          if (index2 === carrousel_count) {
            $(".carrousel__item").removeClass("active");
            $(this).addClass("active");
          }
        });
      });

      if (carrousel_count < carrousel_lenth) carrousel_count++;
      else carrousel_count = 0;
    }, secondInterval * 1000);
  }
}

// Carrousel.manual();
// Carrousel.automatic();
Carrousel.complet(5);
