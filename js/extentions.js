$(document).ready(function () {
  var company_name = {
      id: "#company_name",
      pattern: all_symbols,
      type: "input_text",
    },
    phone = {
      id: "#phone",
      pattern: all_symbols,
      type: "input_text",
    },
    email = {
      id: "#email",
      pattern: email_pattern,
      type: "input_text",
    },
    description = {
      id: "#description",
      pattern: all_symbols,
      type: "text_area",
    },
    input = [company_name, phone, email, description];
  ValidInput(input);

  $(".slider").slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    speed: 800,
    centerMode: true,
    variableWidth: true,
    appendArrows: $(".slider-block__block-arrows"),
    appendDots: $(".slider-block__block-dots"),
    responsive:[
      {
        breakpoint: 100,
        settings:{
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings:{
          centerMode: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 1280,
        settings:{
          centerMode: true,
          variableWidth: true,
        }
      },

    ]
  });
});