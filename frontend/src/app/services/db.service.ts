import { Injectable } from '@angular/core';
import {addDoc, collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore"
import { AuthService } from './auth.service';
import { Snippet } from '../../models/snippet';
import { firebaseApp } from '../../firebase/firebaseConfig';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db?:any

  constructor(private authService:AuthService) { 
    this.db = getFirestore(firebaseApp)

  }

  async createCodeSnippet(snippet:Snippet){
    try {
      const docRef = await addDoc(collection(this.db,"snippet"),{
        ...snippet,
        by:this.authService.getUid()
      })
      console.log("created success",docRef.id)
    } catch (error) {
      console.log(error,"error")
      alert("Error in creating the Snippet")
      
    }

  }

  async getAllSnippet(){
    let result:any[] = []
    const data = await getDocs(collection(this.db,"snippet"))
    console.log(data,"allSnippets")
    data.forEach((doc)=>{
      result.push({id:doc?.id,...doc.data()})
      })
    return result
    } 


    async getSnippetById(snippedId:string){
      const docRef = doc(this.db,"snippet",snippedId)

      const docSnap = await getDoc(docRef)
      if(docSnap.exists()){
        console.log("Doc data",docSnap.data())
        return docSnap.data()
      }else{
        console.log("No doc found")
        return {
          id:new Date(),
          title:"Not found",
          code:"Not found"
        }
      }
  
    }
  }


