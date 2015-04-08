var commonNotification = {
    messageWarning: "warning",
    messageInfo: "info",
    messageConfirm: "confirm",
    messagePrompt: "prompt",
    messageSuccess: "success",
    messageError: "error",
    toastObject: null,
    toastDisplayed: false,
    AccessDenied: "Access Denied.",
    CreateVersion: "Version created successfully.",
    Save: "Record saved successfully.",
    AmenityAdd: "Amenity Added successfully.",
    Update: "Record updated successfully.",
    Delete: "Record deleted successfully.",
    Error: "Error Occurred.",
    AlreadyExists: "Record already exists.",
    RecordConnotDeletedDependencyExist: "Record cannot be deleted. Dependency exists.",
    RecordAlreadyExistsWithTheSameName: "Record already exists with same name.",
    ActiveStatus: "Record Activated successfully.",
    InActiveStatus: "Record Deactivated successfully",
    ValidFormat: "Please select any valid image format.",
    DateValidate: "End date / time should be greater than Start date / time.",
    ResetPasswordUpdate: "Your password has been updated successfully, Please login.",
    TimeOut: "server timeout.",
    Refreshing: "Refreshing data...",
    NoUpdate: "No record update",
    ReadOnly: 'You have read only access',
    InCorrectCredendials: 'Username or Password is incorrect.',
    EmailSent: 'Mail Sent Successfully',
    PasswordChange: 'Password Changed Successfully',
    OldPasswordIncorrect: 'Old Password Incorrect',
    UserNotExists: 'User does not exist',
    UserAlreadyExists: 'User already exist',
    InvalidCredentials: 'Login failed.Invalid Credentials',
    OldNewPassword: 'New password can not be same as old password',
    LoginFailed: 'Login failed.',
    InvalidEmailID: 'Invalid EmailID.',
    InvalidEmailID1: 'Details corresponding to this Email-Id does not exist.',
    ValidEmailID: 'Email sent. Thank you!',

    AccountCodeOutOfRange: 'Account code does not fall in given range.',
    PropertyGroupExist: 'Property group name  already exists.',
    PropertyAreaExist: 'Property area name  already exists.',
    EmailAlreadyExists: 'Email already exists.',
    WrongOldPassword: 'Invaild Current Password.',
    PasswordNotUpdated: 'Sorry! Password not Updated.',
    TextSearchValue: 'Please enter value for search.',

    GeneralInformation: 'Please fill general information form first.',

    ValueErrorPS: "Password Expiry Period value should be greater then Warning Days.",
    ActivateUser: "User Activated Successfully.",
    DeActivateUser: "User Deactivated Successfully.",
    ActivateCategory: "Record Activated Successfully.",
    DeActivateCategory: "Record Deactivated Successfully.",
    LoginAccessRestrict: "Invalid email / password.",
    InvalidYear: "Please enter a 4 digit year.",
    InvalidFutureYear: "Future year is not acceptable.",
    AccountTypeInUse: "Account type already in use.",
    CancelConfirm: "Do you want to cancel ?",
    DeleteConfirm: "Are you sure you want to Delete ?",
    SaveConfirm: "Do you want save changes before navigate ?",
    RequiredFileUpload: "Please upload file(s). ",
    IndustryTypeRequired: "Please select industry sub type.",
    longitude: "Please Enter Valid Longitude",
    latitude: "Please Enter Valid Latitude",
    UploadSuccess: "File Uploaded Successfully",

    SavePreference: "Preference saved sucessfully",
    SaveCategory: "Category added successfully",
    ActivateBox: "Status updated successfully",
    SaveSubCategory: "Sub Category added successfully",
    UpdateSubCategory: "Sub Category updated successfully.",
    SaveQuestion: "Question added successfully",
    UpdateQuestion: "Question updated successfully.",
    VideoUploaded: "Video uploaded sucessfully.",
    UserSaved: "User saved sucessfully.",
    UserUpdated: "User updated sucessfully",
    DataSaved: "Data saved sucessfully",
    DataUpdated: "Data updated successfully",
    VideoStatusUpdated: "video status updated sucessfully",
    VideoShareUpdated: "Video Shared sucessfully",
    VideoDeleted: "Video Deleted sucessfully",
    UnderDevelpoment: "Under development for next milestone",
    SelectSubcategory: "Please select sub category",
    Selectcategory: "Please select One Option",
    Generatevideoerror: "Unable to generate video",
    ProblemOccureed: "Some problem occured during operation",
    SelectAnyQuestion: "Please select any answer",
    SelectMandatoryQues: "Please select mandatory answer",
    StausConfirmation: "Are you sure you want to change the status ?",

    //ManageProfile
    Profilenotsaved: "Your profile not updated, Please try again",
    Profilesaved: "Your profile has been updated successfully",
    Usernameexists: "Username already exists",
    EmailExits: "Email already exists",
    Problemoccurred: "Opps! Some problem occurs with page, please contact to your administrator",
    Imageval: "You can upload only jpg, jpeg, png, gif extension file",

    /************** Forget Password ****************/
    ForgetPasswordSendMail: "Your password has been regenerated successfully please check your email",
    ForgetPasswordException: "Some problem occurs during operation, please try again",
    ForgetPasswordWrongEmail: "Wrong email, please enter your correct email",

    TradingHistoryNotAvailable: "No trading history found",
    DateCheck: "From date should be less than to date",

    AlertMessage: function (Message) {
        if (!commonNotification.toastDisplayed) {
            commonNotification.toastDisplayed = true;
            commonNotification.toastObject = $().toastmessage('showSuccessToast', Message);
        }
        return false;
    },
    ErrorMessage: function (Message) {

        if (!commonNotification.toastDisplayed) {
            commonNotification.toastDisplayed = true;
            commonNotification.toastObject = $().toastmessage('showErrorToast', Message);
        }

        return false;
    },
    WarningMessage: function (Message) {

        if (!commonNotification.toastDisplayed) {
            commonNotification.toastDisplayed = true;
            commonNotification.toastObject = $().toastmessage('showWarningToast', Message);
        }

        return false;
    },
    //Hide All Page Validations
    HideValidation: function () {
        $('.formError').hide();
        $('.validationMessage').removeClass('validationMessage');
        $(".errorMsg").remove();

    },
    MessageBox: function (msg, msgType) {

        $.msgBox({
            content: msg,
            type: msgType,
            async: false
        });
    },
    ConfirmMsg: function (msg) {
        var Cont;
        if (msg == "a") {
            Cont = commonNotification.ActiveAlert;
        } else if (msg == "d") {
            Cont = commonNotification.InActiveAlert;
        }
        else
            Cont = msg;
        $.msgBox({
            title: "Confirm",
            content: Cont,
            type: "confirm",
            async: false,
            buttons: [{ value: "Yes" }, { value: "No"}],
            success: function (result) {
                if (result == "Yes") {
                    return true;
                } else {
                    return false;
                }
            }
        });
    }
}

