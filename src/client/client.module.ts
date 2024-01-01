import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ClientUserModule } from './client-user/client-user.module';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
  imports: [ClientUserModule]
})
export class ClientModule {}
