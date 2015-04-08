<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="BinaryOption.User.WebForm2" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<script src="../Scripts/Newjquery-1.7.min.js" type="text/javascript"></script>
<html>
<body>

<p>Click the button to wait 3 seconds, then alert "Hello".</p>
<label id="Timer"></label>
<button onclick="myFunction(120)">Try it</button>

<script>
    function myFunction(abc) {
        if (abc > 0) {
            setTimeout(function () {
                $("#Timer").html('00:'+(abc - 1)).css("color", "Red");
                myFunction(abc - 1);

            }, 1000);
        } else {
            $("#Timer").html("finished").css("color","Red");
        }
    }
</script>

</body>
</html>
