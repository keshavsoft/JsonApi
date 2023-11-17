cd ../StaticWithInclude
call node ForDashboards

robocopy public\Projects\ForDashboards  ..\JsonApi\public\ForDashboards\  /MIR

cd ../JsonApi