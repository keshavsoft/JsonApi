ROBOCOPY ..\JSONDataSupply\DataSupply DataSupply\  /MIR

ROBOCOPY ..\AdminApi\Projects\JSONAdminApi Projects\JSONAdminApi\  /MIR

xcopy ..\StaticWithInclude\public\Projects\JSONAdminApi  public\JSONAdminApi\  /s /e /Y
xcopy ..\StaticWithInclude\public\Projects\JSONUser  public\JSONUser\  /s /e /Y

xcopy ..\KStaticFiles\public\Projects\ClientLogin public\ClientLogin\  /s /e /Y
xcopy ..\KStaticFiles\public\Projects\JSONReports  public\JSONReports\  /s /e /Y
xcopy ..\KStaticFiles\public\Projects\JSONUtility  public\JSONUtility\  /s /e /Y

xcopy ..\KStaticFiles\src\public\ClientLogin public\ClientLogin\  /s /e /Y
xcopy ..\KStaticFiles\src\public\JSONReports  public\JSONReports\  /s /e /Y
xcopy ..\KStaticFiles\src\public\JSONUtility public\JSONUtility\  /s /e /Y
xcopy ..\KStaticFiles\src\public\Garments public\Garments\  /s /e /Y