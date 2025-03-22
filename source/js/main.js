import { iosVhFix } from "./utils/ios-vh-fix";
import { initModals } from "./modules/modals/init-modals";
import { Form } from "./modules/form-validate/form";

// ---------------------------------

window.addEventListener("DOMContentLoaded", () => {
  const taskHeader = document.querySelector(".task__header");
  const taskWrapper = document.querySelector(".task__wrapper");
  
  function checkScroll() {
    const scrollTop = taskWrapper.scrollTop;

    if (scrollTop > 0) {
      taskHeader.classList.add("fixed");
    } else {
      taskHeader.classList.remove("fixed");
    }
  }

  taskWrapper.addEventListener("scroll", checkScroll);

  const calendarList = document.querySelectorAll(".task__inner--calendar");
  calendarList.forEach((e) => {
    const btnCalendar = e.querySelector(".btn--calendar");
    const inputCalendar = e.querySelector(".custom-input--calendar");
    btnCalendar.addEventListener("click", function () {
      inputCalendar.showPicker();
    });
  });

  const selectElements = [
    document.getElementById("coordinating"),
    document.getElementById("responsible"),
    document.getElementById("group"),
    document.getElementById("open"),
    document.getElementById("create"),
  ];

  selectElements.forEach((select) => {
    $(select).select2({
      multiple: true,
      closeOnSelect: false,
      minimumResultsForSearch: Infinity,
    });
  });

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener("load", () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
