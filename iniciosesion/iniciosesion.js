const btn = document.querySelector("#btn");
      btn.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll(
          'input[name="language"]:checked'
        );
        const selectedLanguages = Array.from(checkboxes).map(
          (checkbox) => checkbox.value
        );
        alert("Selected Languages: " + selectedLanguages.join(", "));
      });