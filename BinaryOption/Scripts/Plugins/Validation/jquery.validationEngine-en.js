(function ($) {
    $.fn.validationEngineLanguage = function () {
    };
    $.validationEngineLanguage = {
        msg: '* End time should be less than next service-slot start time!',
        msgSameSlot: '* Start time should be less than end time!',
        newLang: function () {
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* This field is required",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " characters allowed"
                },
                 "minSizeYear": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " digits allowed"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " characters allowed"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Minimum value is "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Maximum value is "
                },
                "past": {
                    "regex": "none",
                    "alertText":"* End Date cannot be prior to the Start Date "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* End Date should be after Start Date "
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " options allowed"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Please select ",
                    "alertText2": " options"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Fields do not match"
                },
                "greaterRange": {
                    "regex": "none",
                    "alertText": "* Range to must be greater than Range from."
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* Invalid number"
                },

                    "phonenumber": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* Please add numeric values only"
                },

                "email": {
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    //  "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,

                    //actual  "regex": /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,

                    "regex": /^(\w[-._+\w]*\w@\w[-._\w]*\w\.\w{2,3})$/,
                    //  "regex": /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,


                    "alertText": "* Invalid email address"
                },
                "CreditCard": {
                    "regex": /^.{19}$/,
                    "alertText": "* Minimum 16 characters are allowed"
                },
                 "zipcode": {
                    "regex": /^.{5}$/,
                    "alertText": "* Minimum 5 digits are allowed"
                },
                 "BankName": {
                    "regex": /^\d*[a-zA-Z][a-zA-Z0-9 &.]*$/,
                    "alertText": "* Alphanumeric, & , . are allowed only"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Not a valid integer"
                },
                "time": {
                    "regex": /^([0-9]{1,2}[:][0-9]{1,2})$/,
                    "alertText": "* Not a valid Time"
                },
                "invalidTime": {
                    "regex": /^([0-9])$/,
                    "alertText": $.validationEngineLanguage.msg
                },
                "invalidTimeSameSlot": {
                    "regex": /^([0-9])$/,
                    "alertText": $.validationEngineLanguage.msgSameSlot
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\+]?(([-,0-9]+)([\.,-]([0-9]+))?|([\.,-]([0-9]+))?)$/,
                    "alertText": "* Please add Numerical Values only"
                },
                   "number1": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
                    "alertText": "* Invalid number"
                },
                "date": {
                    "regex": /^([0][1-9]|1[012])[- /.]([0][1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/,
                    "alertText": "* Invalid date, must be in MM-DD-YYYY format"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Invalid IP address"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Invalid URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9]+$/,
                    "alertText": "* Numeric Values only."
                },
                "NumberGreater1": {
                    //"regex":/^([1-9])+([0-9])+$/,///^[1-9]+$/, 
                     "regex":/^([1-9])+([0-9])*$/, 
                    "alertText": "* Numbers only and should be greater than 0"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Letters only"
                },
                "NoSpecialChar": {
                    "regex": /^[^<>\\\'\/]+$/,
                    "alertText": "* <, >, \\, /,' characters are not allowed"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "*  No special characters allowed"
                },
                 "onlyLetterNumberwithAtTheRate": {
                    "regex":  /^[ A-Za-z0-9_@.]*$/,
                    "alertText": "*  No special characters allowed"
                },
                "onlyLetterNumberWithSpace": {
                    "regex": /^[0-9a-zA-Z ']+$/,
                    "alertText": "*  No special characters allowed"
                },
                 "onlyLetterNumberWithSpaceAndFullStop": {
                         "regex": /^[0-9.a-zA-Z ]*$/,
                    "alertText": "*  No special characters allowed"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCallPhp": {
                    // remote json service location
                    "url": "phpajax/ajaxValidateFieldName.php",
                    // error
                    "alertText": "* This name is already taken",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                },
                "onlyimages": {
                    "regex": /^([0-9a-zA-Z_\-~ :\\])+(.jpg|.JPG|.jpeg|.JPEG|.bmp|.BMP|.gif|.GIF|.png|.PNG)$/,
                    "alertText": "*  Only these .jpg|.JPG|.jpeg|.JPEG|.bmp|.BMP|.gif|.GIF|.png|.PNG format allowed"
                },
                "onlyLetters": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "No space allowed."
                },
                "onlyDecimal":{
                    "regex": /[\+\-0-9\.]/g,
                    "alertText": "only decimal number allowed."
                },
                 "notNumeric":{
                    "regex": /[^0-9]/,
                    "alertText": "* Numeric not allowed."
                },     
                 "PostiveNumber": {
                    //"regex":/^([1-9])+([0-9])+$/,///^[1-9]+$/, 
                     "regex":/^([1-9])+([0-9])*$/, 
                    "alertText": "* Please enter postive amount."
                },            
                "Hexadecimal":{
                    "regex": /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
                    "alertText": "please enter valid code."
                },
                "float":{
                    "regex": /(^-?\d\d*\.\d\d*$)|(^-?\.\d\d*$)/,
                    "alertText": "please enter Float Number."
                },
                "latitude":{
                    "regex": /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/,
                    "alertText": "Latitude must be between -90.0 to +90.0 and no use of special characters except  -"
                },
              
                 "longitude":{
                    "regex": /^-?([1]?[1-7][1-9]|[1]?[1-8][0]|[1-9]?[0-9])\.{1}\d{1,6}$/,
                    "alertText": "Longitude must be between -180.0 to +180.0 and no use of special characters except -"
                },
                 
               "ip":{
                    "regex":/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                    "alertText": "Enter correct IP address"
                },



            }; 
        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);
