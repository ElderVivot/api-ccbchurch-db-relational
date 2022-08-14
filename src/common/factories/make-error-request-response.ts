export class ErrorRequestResponse extends Error {
    private statusCode: number
    constructor (private readonly method: string, private readonly filePath: string, error: any) {
        super()
        this.message = error
        this.name = error.response?.message || error.toString()
        this.statusCode = error.response?.statusCode || 400
    }
}

export function MakeErrorRequestResponseV2 (method: string, filePath: string, error: any): ErrorRequestResponse {
    return new ErrorRequestResponse(method, filePath, error)
}