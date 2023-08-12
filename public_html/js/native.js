const button = document.getElementById('target')
		button.addEventListener('click', function () {
      swal({
        title: "Are you sure?",
        text: "You're leaving this site",
        icon: "./images/bender1.png",
        buttons: true,
        dangerMode: false,
      })
      .then((willLeave) => {
        if (willLeave) {
          swal("Have a nice day 'bag of bones'!", {
            icon: "./images/bender1.png",
          });
        } 
      });
})