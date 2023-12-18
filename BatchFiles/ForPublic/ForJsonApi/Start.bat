cd ../StaticWithInclude
call node ForJsonApi

robocopy public\Projects\JsonApi  ..\JsonApi\public\JsonApi\  /MIR

cd ../JsonApi
