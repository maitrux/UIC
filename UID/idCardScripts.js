// Ann-Sofi's part
var nationalities = ["Afghan", "Albanian", "Algerian", "American", "Andorran", 
                     "Angolan",	"Anguillan",	"Citizen of Antigua and Barbuda",
                     "Argentine",	"Armenian",	"Australian",	"Austrian",
                     "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi",
                     "Barbadian", "Belgian", "Belizean", "Beninese",
                     "Bermudian"];

var nonEmptyInputs = ["lastName", "birthDate", "idNumber", "pictureInput"];

var nonEmptySelects = ["gender", "nationality"];

var userInformation = {firstName: "", lastName: "", birthDate: "", gender: "", nationality: "", idNumber: "", picture: ""};

$(document).ready(function() 
{
  initialize();
  validateUserInputs();
  resetForm();
  showIdCard();
  confirmNewIdCard(); 

  $('.input').on('input', function()
  {
    if($(this).val().length != 0)
    {
      $(this).removeClass("is-invalid");
    }
  });

  $(".select").on('change', function() 
  {
    if ($(this).val().length != 0){
      $(this).removeClass("is-invalid");
    }
  });
});


function initialize() 
{
  createNationalityOptions();
}

function createNationalityOptions() 
{
  for(var nationality of nationalities) 
  {
    $('#nationality').append($('<option>', {
      text: nationality
  }));
  }
}

function validateUserInputs()
{
  $("#btn-create-id-card").click(function()
  {
    checkEmptyInputs();

    if (!$(".is-invalid")[0])
    {
      userInformation.firstName = $("#firstName").val();
      userInformation.lastName = $("#lastName").val();
      userInformation.birthDate = $("#birthDate").val();
      userInformation.gender = $("#gender option:selected").val();
      userInformation.nationality = $("#nationality option:selected").val();
      userInformation.idNumber = $("#idNumber").val();

      $(".firstNameShown").text(userInformation.firstName);
      $(".lastNameShown").text(userInformation.lastName);
      $(".birthDateShown").text(userInformation.birthDate);
      $(".genderShown").text(userInformation.gender);
      $(".nationalityShown").text(userInformation.nationality);
      $(".idNumberShown").text(userInformation.idNumber);

      $('#createIdCardModal').modal('show');

    }
  });
}

function checkEmptyInputs()
{
  for(var input of nonEmptyInputs)
  {
    if($("#" + input).val().length == 0)
    {
      $("#" + input).addClass("is-invalid");
    }
    else
    {
      $("#" + input).removeClass("is-invalid");
    }
  }

    for(var select of nonEmptySelects)
    {
      if($("#" + select + " option:selected").val().length == 0)
      {
        $("#" + select).addClass("is-invalid");
      }
      else
      {
        $("#" + select).removeClass("is-invalid");
      }
    }
}

function resetForm()
{
  $("#clear-form-confimed").click(function()
  {
    $('.is-invalid').removeClass('is-invalid');
    $("#idCard-form").trigger("reset");
    $('#clearFormModal').modal('toggle');
  });
}

function confirmNewIdCard() 
{
  $("#create-new-id-card").click(function() 
  {
    $("#createNewIdCardModal").modal("show");
  });

  $("#create-new-id-card-confirmation-btn").click(function() 
  {
    createNewIDCard();
    $('#createNewIdCardModal').modal('toggle');
  });
}

// Eira's part
function showIdCard()
{
  $("#create-id-card-confirmation-btn").click(function() 
  {
    $("#createIdCardModal").modal('hide');
    $("#idCardForm").hide();
    $("#idCard").show();
    console.log("Create id card confirmation button has been clicked and the new card has been created!");
  });
}

function createNewIDCard() 
{
  console.log("Create a new ID card.");
  $('.is-invalid').removeClass('is-invalid');
  $("#idCard-form").trigger("reset");
  $("#idCardForm").show();
  $("#idCard").hide();
}