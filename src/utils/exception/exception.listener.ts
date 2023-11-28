import { ExceptionFilter, Catch, HttpException, ArgumentsHost } from '@nestjs/common';
import {Request, Response} from 'express';

@Catch()
export class HttpExceptionListener implements ExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        console.log("Http throwen an exception of ", status);

        response
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
    }
}