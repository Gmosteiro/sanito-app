import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FirebaseRepository } from '../firebase/firebase.service';

@Injectable()
export class UserService {
  constructor(private firebaseRepo: FirebaseRepository) { }

  async create(createUserData: CreateUserDto) {
    createUserData = {
      name: 'John',
      last_name: 'Doe',
      email: 'johnDoe@mail.com'
    }
    const userId = await this.firebaseRepo.createUser(createUserData);
    return `This action adds a new user with ID ${userId}`;
  }
  findAll() {
    console.log('This action returns all user')
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
