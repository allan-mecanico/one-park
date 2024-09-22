document.addEventListener("DOMContentLoaded", function () {
  const inputsToUppercase = document.querySelectorAll(
    "#placa-entrada, #placa-saida, #veiculo"
  );

  inputsToUppercase.forEach((input) => {
    input.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
    });
  });
});
