import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from './schemas/item.schema';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(itemId: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: itemId }).exec();
  }

  async create(item: CreateItemDto): Promise<Item> {
    return await new this.itemModel(item).save();
  }

  async update(updateItemDto: CreateItemDto, id: string): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, updateItemDto).exec();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndDelete(id).exec();
  }
}
