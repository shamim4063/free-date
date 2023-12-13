import { TypeOrmModuleOptions, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { User } from "src/user/entities/user.entity";

const dbConfig: TypeOrmModuleAsyncOptions  = {
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory: (configService: ConfigService)=>({
        type: 'postgres',
        host: configService.get<string>('DB_HOST') || 'localhost',
        port: configService.get<number>('DB_PORT') || 5432,
        database: configService.get<string>('DB_NAME') || 'bestcom_db',
        username: configService.get<string>('DB_USERNAME') || 'postgres',
        password: configService.get<string>('DB_PASSWORD') || '123qwe',
        entities: [User],
        synchronize: true,
        logging: true,
    }) 
};

export default dbConfig;