import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  // Without MongoDB
  // private readonly items: Item[] = [
  //   {
  //     id: '001',
  //     name: 'Item one',
  //     description: 'This is item one',
  //     quantity: 1,
  //   },
  //   {
  //     id: '002',
  //     name: 'Item two',
  //     description: 'This is item two',
  //     quantity: 2,
  //   },
  // ];

  // findAll(): Item[] {
  //   return this.items;
  // }

  // findOne(id: string): Item {
  //   return this.items.find(item => item.id === id);
  // }

  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async udpate(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
