export class ApiResponse {
    constructor(statusCode,message,data){
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode <400;
    }

    send(res){
        return res.status(this.statusCode).json({
            success: this.success,
            statusCode: this.statusCode,
            message: this.message,
            data: this.data
        });
    }

    static ok(message,data){
        return new ApiResponse(200,message,data);
    }

    static created(message,data){
        return new ApiResponse(201,message,data);
    }
}
