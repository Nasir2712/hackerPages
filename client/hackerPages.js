Template.hackerProfile.events({
    'click #generateButton': function (event,template) {
      event.preventDefault();
      let legalname = $('#legalname').val();
      let pseudonym = $('#pseudonym').val();
      let email = $('#email').val();
      let besthack = $('#besthack').val();

      let hackerProfile = {
        legalname:legalname,
        pseudonym:pseudonym,
        email:email,
        besthack:besthack
      }

      Hackers.insert(hackerProfile);
      alert("Added: " +hackerProfile.legalname);
    }
  });


