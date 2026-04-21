class ApiError extends Error{
    constructor(statusCode,message,error,stack=[]){
        super(message)
        this.statusCode = statusCode
        this.message = message 
        this.error = error
        //if stack is provided, use it, otherwise capture the current stack trace
        if(stack.length){
            this.stack = stack
        }
    }
}


export {
    ApiError
}   