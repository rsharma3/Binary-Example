namespace MatInc.DAL
{
    public static class DBConstant
    {
        //Milestone2

        #region TestProcedure

        public const string Insert_Country = "udsp_InsertCountry";

        #endregion TestProcedure

        #region Procedure

        public const string GetUserAddressByUserId = "UDSP_GetUserAddressByUserId";

        #endregion Procedure

        #region Procedure

        public const string GetTaxIdByUser = "udsp_get_TaxId_By_User";

        #endregion Procedure

        #region Procedure

        public const string InsertTaxID = "udsp_Insert_Tax_ID";

        #endregion Procedure

        #region Procedure

        public const string udsp_Insert_Card_Info = "udsp_Insert_Card_Info";
        public const string udsp_User_Insert_Card_Info = "udsp_User_Insert_Card_Info";

        #endregion Procedure

        #region Procedure

        public const string udsp_get_Bank_Info = "udsp_get_Bank_Info";

        #endregion Procedure

        #region Procedure

        public const string udsp_get_Card_Info = "udsp_get_Card_Info";
        public const string udsp_get_Card_Number_Card_Info = "udsp_get_Card_Number_Card_Info";

        #endregion Procedure

        #region Procedure

        public const string udsp_Insert_Bank_Info = "udsp_Insert_Bank_Info";
        public const string udsp_Insert_Bank_Data = "udsp_Insert_Bank_Data";

        #endregion Procedure

        #region Common

        public const string GetAllCountries = "UDSP_GetAllCountries";
        public const string GetAllStates = "UDSP_GetAllStates";
        public const string GetAllCities = "UDSP_GetAllCities";

        #endregion Common

        #region Customer

        public const string Insert_Update_Customer = "UDSP_Insert_Update_Customer";

        #endregion Customer

        #region UserLogin

        public const string UserLogin = "UDSP_UserLogin";

        #endregion UserLogin


        #region UserManagement

        public const string GetUserPaymentMethod = "UDSP_GetUserPaymentMethod";
        public const string SaveUserData = "UDSP_Insert_Update_Operator";
        public const string GetallUser = "UDSP_GetAllUser";
        public const string GetUserById = "UDSP_GetUserById";
        public const string DeleteUser = "UDSP_DeleteUser";
        public const string CheckUsernameExist = "UDSP_CheckUsernameExist";
        public const string CheckEmailExist = "UDSP_CheckEmailExist";
        public const string GetMakePayment = "UDSP_GetMakePayment";
        public const string GetBankName = "UDSP_GetBankName";
        public const string MakePaymentGetBankInfo = "UDSP_MakePaymentGetBankInfo";
        public const string GetPaymentType = "UDSP_GetPaymentType";
        public const string GetBillingFrequency = "UDSP_GetBillingFrequency";
        public const string GetCustomerName = "UDSP_GetCustomerName";
        #endregion UserManagement

        #region CustomerManagement

        public const string SaveCustomerData = "UDSP_Insert_Update_Customer";
        public const string GetallCustomer = "UDSP_GetAllCustomer";
        public const string GetCustomerById = "UDSP_GetCustomerById";
        public const string DeleteCustomer = "UDSP_DeleteCustomer";
        //public const string CheckCustomerUsernameExist = "UDSP_CheckCustomerUsernameExist"; By Meenakshi
        //public const string CheckCustomerEmailExist = "UDSP_CheckCustomerEmailExist"; By Meenakshi

        #endregion

        #region ForgotPassword

        public const string ForgotPassword = "UDSP_ForgotPassword";

        #endregion ForgotPassword

        #region Insert_Update_DeviceGroup

        public const string Insert_Update_DeviceGroup = "UDSP_Insert_Update_DeviceGroup";
        public const string Check_Existing_DeviceGroup = "UDSP_CheckExistingDeviceGroup";
        public const string GetGroupNameByGroupLevelID_DeviceGroup = "udsp_GetByGroupLevelID_DeviceGroup";
        public const string GetDevicesByGroupId_DeviceGroupMap = "udsp_GetDevicesByGroupId_DeviceGroupmap";
        public const string Bulk_Group_Device_Insertion = "UDSP_BulkInsertion_DeviceGroups";
        
        #endregion Insert_Update_DeviceGroup

        #region get_devices

        public const string get_devices = "UDSP_get_devices";

        #endregion get_devices

        #region Device

        public const string Insert_Device = "udsp_Insert_Update_DeviceNew";
        public const string GetAllDevices = "UDSP_GetAllDevices";
        public const string GetDeviceById = "UDSP_GetDeviceById";
        public const string DeleteDevice = "UDSP_DeleteDevice";
        public const string Check_Existing_DeviceId = "UDSP_Check_Existing_DeviceId";
        public const string Bulk_Device_Insertion = "UDSP_Bulk_Device_Insertion";
        #endregion

        #region GetDeviceType

        public const string GetDeviceTypeName = "UDSP_GetAllDeviceTypes";
        public const string GetDeviceSubIndustryName = "UDSP_GetDeviceSubIndustryName";
        public const string GetDeviceType = "UDSP_GetDeviceTypeListing";
        public const string SearchGroupData = "UDSP_GetDeviceTypeListing";


        #endregion GetDeviceType

        #region ResetPassword

        public const string ResetPassword = "udsp_Reset_password";

        #endregion

        #region ChangePassword

        public const string Change_password = "udsp_Change_password";

        #endregion ChangePassword

        #region Insert_Payment

        public const string Insert_Payment = "UDSP_Insert_Payment";

        #endregion Insert_Payment

        #region GetbyId_Payment

        public const string GetbyId_Payment = "UDSP_GetbyId_Payment";

        #endregion GetbyId_Payment

        #region Get_Payment

        public const string Get_Payment = "UDSP_Get_Payment";

        #endregion Get_Payment

        #region Device Type

        public const string Insert_Update_DeviceType = "udsp_Insert_Update_DeviceType";
        public const string udsp_get_industryname = "udsp_get_industryname";
        public const string udsp_get_industrySubTypes = "udsp_get_industrySubTypes";
        public const string GetDeviceTypeDetail = "UDSP_GetDeviceTypeDetail";
        public const string udsp_DeviceTypeDeleteById = "udsp_DeviceTypeDeleteById";
        public const string Check_Existing_DeviceType = "UDSP_Check_Existing_DeviceType";
        public const string getDeviceById = "UDSP_getDeviceTypeById";
        public const string DeleteDeviceTableData = "UDSP_DeleteDeviceTableData";
        public const string getDeviceTableNameById = "UDSP_getDeviceTableNameById";
        #endregion

        #region getDevicegroup
        public const string GetAllDeviceGroup = "UDSP_GetAllDeviceGroup";
        public const string GetAllDevice = "UDSP_GetAllDevice";
        public const string GetGroupLevels = "UDSP_GetDeviceLevelAll";
      
        #endregion

        #region DeleteDevicegroup
        public const string DeleteAllDevice = "UDSP_DeleteAllDevice";
        #endregion
        #region
        public const string GetAllDeviceGroups = "UDSP_GetAllDeviceGroups";
        #endregion

        #region PaymentSettingsForCustomerAndUser

        public const string GetAllBankInformationByUserId = "UDSP_GetAllBankInformationByUserId";
        public const string GetAllCreditCardInformationByUserId = "UDSP_GetAllCreditCardInformationByUserId";
        public const string DeleteBankInformationByUserId = "UDSP_Delete_tblBankInformation";
        public const string DeleteCreditCardInformationByUserId = "UDSP_Delete_tblCreditCardInformation";
        public const string InsertCreditCardInformationByUserId = "UDSP_InsertCreditCardInformationByUserId";
        public const string InsertBankInformationByUserId = "UDSP_InsertBankInformationByUserId";
        public const string CheckAccountNumberExist = "UDSP_CheckAccountNumberExist";
        public const string CheckCreditCardNumberExist = "UDSP_CheckCreditCardNumberNumberExist";
        public const string SearchPaymentData = "UDSP_SearchPaymentData";

        #endregion

        #region

        public const string CheckDeviceId = "[UDSP_CheckDeviceId]";

        #endregion

        #region ColorManagement

        public const string Insert_Update_ColorSettings = "UDSP_InsertUpdate_ColorSettings";
        public const string DeleteColorDatabyId = "UDSP_DeleteColorSettings";
        public const string GetColorManagementDetail = "UDSP_tblColorSettings_Get";
        public const string GetColorManagementDetailById = "UDSP_GetColorManagementDetailById";
        public const string GetIndustry = "UDSP_GetIndustry";
        public const string GetSymbols = "UDSP_GetSymbols";
        #endregion

        #region
        public const string GetPlanName = "UDSP_GetALLPlanName";
        public const string getPlanControlName = "UDSP_CreatePlanColumnByPlanId";
        public const string InsertPlanValues = "UDSP_InsertPlanValues";
        public const string getPlanListByPlanId = "UDSP_GetPlanListByPlanId ";
        public const string getPlanValuesById = "UDSP_GetPlanValuesById ";
        public const string DeletePlanValues = "UDSP_DeletePlanValues";
        
        #endregion
    }
}

