cd ../StaticWithInclude
call node ForWebSocket

robocopy public\Projects\ForWebSocket  ..\JsonApi\public\ForWebSocket\  /MIR

cd ../JsonApi