var nationalities = ["Afghan", "Albanian", "Algerian", "American", "Andorran", 
                     "Angolan",	"Anguillan",	"Citizen of Antigua and Barbuda",
                     "Argentine",	"Armenian",	"Australian",	"Austrian",
                     "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi",
                     "Barbadian", "Belgian", "Belizean", "Beninese",
                     "Bermudian"];

$(document).ready(function() {
  initialize();
});

function initialize() {
  createNationalityOptions();
}

function createNationalityOptions() {
  for(nationality of nationalities) 
  {
    console.log(nationality)
    $('#nationalitySelect').append($('<option>', {
      text: nationality
  }));
  }
}