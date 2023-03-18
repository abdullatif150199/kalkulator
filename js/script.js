const insert = (num) => {
  document.form.textView.value = document.form.textView.value + num;
};

const c = () => {
  document.form.textView.value = "";
};

const del = () => {
  var x = document.form.textView.value;
  document.form.textView.value = x.substring(0, x.length - 1);
};

const equal = () => {
  var x = document.form.textView.value;
  if (x === "") {
    alert("masukkan nilai terlebih dahulu");
  } else {
    document.form.textView.value = eval(x);
  }
};
