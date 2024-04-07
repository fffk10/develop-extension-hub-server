import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExtensionsController } from './extensions/extensions.controller';

@Module({
  imports: [],
  controllers: [AppController, ExtensionsController],
  providers: [AppService],
})
export class AppModule {}
