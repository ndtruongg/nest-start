import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ItemsModule } from './items/items.module';
import { DogModule } from './dog/dog.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/key';

@Module({
  imports: [DogModule, ItemsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
