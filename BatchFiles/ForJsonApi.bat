cd ../StaticWithInclude
call node ForJsonApi

robocopy public\Projects\JSONApi  ..\JsonApi\public\JSONApi\  /MIR

cd ../JsonApi