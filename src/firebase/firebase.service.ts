import { Injectable } from '@nestjs/common';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class FirebaseRepository {
	private database: firebase.database.Database;

	constructor() {
		const firebaseConfig = {
			databaseURL: process.env.DATABASE_URL,
		};

		firebase.initializeApp(firebaseConfig);
		this.database = firebase.database();
	}

	async createUser(createUserDto: CreateUserDto) {
		const newUserRef = this.database.ref('Users').push();
		await newUserRef.set(createUserDto);
		return newUserRef.key;
	}
}