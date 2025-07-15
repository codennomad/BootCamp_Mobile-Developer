//import connectToDatabase from "./utils/database.js";
//import * as database from './utils/database.js';
import { connectToDatabase, disconnectToDatabase} from "../../src/services/database.js";
//import {getDataFromApi} from './utils/api.js';
import* as api from './utils/api.js';


//connectToDatabase("my-database")

//database.connectToDatabase("my-database");
//database.disconnectToDatabase();

connectToDatabase("my data");
disconnectToDatabase();
api.getDataFromApi();

