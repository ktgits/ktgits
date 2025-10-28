const scriptURL =                       
      "https://script.google.com/macros/u/1/s/AKfycbzJEJMAyxBNBVWjhL2DSpfWVk6O-JHjZJPDCT3Owg0O9-Hjptj3OFFJnBtCJm78A5UNEw/exec";
      const form = document.forms["contactForm"];

      console.log("Google Form script loaded.");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        fetch(scriptURL, { method: "POST", body: formData })
          .then((response) => {
            swal("Done", "Submitted Successfully.", "success");
          })
          .catch((error) => {
            swal("Error", "Something went wrong. please try again!", "error");
          });
      });