cd ../StaticWithInclude
call node ForJSONAdminApi

robocopy public\Projects\JSONAdminApi  ..\JsonApi\public\JSONAdminApi\  /MIR

cd ../JsonApi